/**
 * Telegram channel posts fetcher.
 *
 * Стратегия: парсинг публичной превью-страницы t.me/s/channel.
 *
 * Показываем только:
 *   - текстовые посты
 *   - посты с фотографиями
 *   - посты с видео (с текстом или без)
 * Исключаем: GIF/анимации, видеосообщения-кружочки, голосовые, стикеры,
 *            пересланные посты, служебные сообщения, документы без текста.
 */

export interface TelegramPost {
  id: number
  date: Date
  text: string       // plain text (для превью)
  html: string       // HTML из Telegram (для полной страницы поста)
  photos: string[]   // URL фотографий из tgme_widget_message_photo_wrap (0..N)
  videos: string[]   // URL видеофайлов из <video src="..."> (0..N)
  messageUrl: string // прямая ссылка на пост в канале
}

function getChannelUsername(): string {
  const username = process.env.TELEGRAM_CHANNEL_USERNAME
  if (username) return username.replace('@', '')

  const id = process.env.TELEGRAM_CHANNEL_ID ?? ''
  if (id.startsWith('@')) return id.slice(1)

  return 'rutzprostranstvo'
}

function stripHtml(html: string): string {
  return html
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .trim()
}

// Убираем служебные фразы Telegram из HTML перед рендером
function cleanMessageHtml(html: string): string {
  return html
    .replace(/<a[^>]*>\s*VIEW IN TELEGRAM\s*<\/a>/gi, '')
    .replace(/Please open Telegram to view this post\.?/gi, '')
    .trim()
}

// Убираем служебные фразы Telegram из plain-text
function cleanText(text: string): string {
  return text
    .replace(/Please open Telegram to view this post\.?/gi, '')
    .replace(/VIEW IN TELEGRAM/gi, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim()
}

// Извлекаем innerHTML блока tgme_widget_message_text
function extractMessageHtml(block: string): string {
  const textMarker = 'class="tgme_widget_message_text'
  const footerMarker = 'class="tgme_widget_message_footer'

  const textPos = block.indexOf(textMarker)
  if (textPos === -1) return ''

  const openEnd = block.indexOf('>', textPos)
  if (openEnd === -1) return ''

  const footerPos = block.indexOf(footerMarker, openEnd)
  if (footerPos === -1) return ''

  const closingDiv = block.lastIndexOf('</div>', footerPos - 1)
  if (closingDiv === -1 || closingDiv <= openEnd) return ''

  return block.slice(openEnd + 1, closingDiv).trim()
}

/**
 * Извлекаем URL фотографий ТОЛЬКО из элементов tgme_widget_message_photo_wrap.
 * Это исключает video-превью (tgme_widget_message_video_thumb) и аватары.
 */
function extractPhotos(block: string): string[] {
  const photos: string[] = []
  let pos = 0

  while (true) {
    const wrapPos = block.indexOf('class="tgme_widget_message_photo_wrap', pos)
    if (wrapPos === -1) break

    const tagEnd = block.indexOf('>', wrapPos)
    if (tagEnd === -1) break

    const tag = block.slice(wrapPos, tagEnd)
    const bgMatch = tag.match(/background-image:url\('([^']+)'\)/)
    if (bgMatch) photos.push(bgMatch[1])

    pos = tagEnd + 1
  }

  return photos
}

/**
 * Извлекаем прямые URL видеофайлов из <video src="..."> тегов.
 * Blob-ссылки и пустые src пропускаем.
 */
function extractVideos(block: string): string[] {
  const videos: string[] = []
  let pos = 0

  while (true) {
    const videoTagPos = block.indexOf('<video', pos)
    if (videoTagPos === -1) break

    const tagEnd = block.indexOf('>', videoTagPos)
    if (tagEnd === -1) break

    const tag = block.slice(videoTagPos, tagEnd + 1)
    const srcMatch = tag.match(/\bsrc="([^"]+)"/)
    if (srcMatch && srcMatch[1] && !srcMatch[1].startsWith('blob:')) {
      videos.push(srcMatch[1])
    }

    pos = tagEnd + 1
  }

  // Дедупликация — один и тот же src может встречаться несколько раз
  return [...new Set(videos)]
}

function parsePostsFromHtml(html: string, channel: string, limit: number): TelegramPost[] {
  const posts: TelegramPost[] = []

  const parts = html.split('<div class="tgme_widget_message_wrap')

  for (let i = 1; i < parts.length; i++) {
    const block = parts[i]

    // Пересланные посты — пропускаем
    if (block.includes('tgme_widget_message_forwarded_from')) continue

    // Служебные сообщения (закреплено, присоединился и т.д.) — пропускаем
    if (block.includes('service_message')) continue

    // Круглые видео (видеосообщения) — пропускаем
    if (block.includes('tgme_widget_message_roundvideo_player')) continue

    // Голосовые сообщения — пропускаем
    if (block.includes('tgme_widget_message_voice_player')) continue

    // GIF / анимации — пропускаем
    if (block.includes('js-message_gif') || block.includes('tgme_widget_message_animation')) continue

    // Стикеры — пропускаем
    if (block.includes('tgme_widget_message_sticker')) continue

    // Документы/файлы без текста — пропускаем
    if (block.includes('tgme_widget_message_document_wrap') && !block.includes('tgme_widget_message_text')) continue

    // ID поста
    const idMatch = block.match(/data-post="[^/]+\/(\d+)/)
    if (!idMatch) continue
    const id = parseInt(idMatch[1], 10)

    // Дата
    const dateMatch = block.match(/datetime="([^"]+)"/)
    if (!dateMatch) continue
    const date = new Date(dateMatch[1])

    // Фото ТОЛЬКО из photo_wrap элементов
    const photos = extractPhotos(block)

    // Видео из <video src="...">
    const videos = extractVideos(block)

    // Текст (очищаем от служебных фраз Telegram)
    const messageHtml = cleanMessageHtml(extractMessageHtml(block))
    const text = cleanText(stripHtml(messageHtml))

    // Пропускаем пустые посты (ни текста, ни медиа)
    if (!text && photos.length === 0 && videos.length === 0) continue

    posts.push({
      id,
      date,
      text,
      html: messageHtml,
      photos,
      videos,
      messageUrl: `https://t.me/${channel}/${id}`,
    })
  }

  // t.me/s/ отдаёт посты от старых к новым — разворачиваем
  return posts.reverse().slice(0, limit)
}

export async function fetchChannelPosts(limit = 7): Promise<TelegramPost[]> {
  const channel = getChannelUsername()
  try {
    const res = await fetch(`https://t.me/s/${channel}`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; TelegramBotParser/1.0)',
        'Accept-Language': 'ru-RU,ru;q=0.9',
        Accept: 'text/html,application/xhtml+xml',
      },
      next: { revalidate: 3600 },
    })
    if (!res.ok) return []
    const html = await res.text()
    return parsePostsFromHtml(html, channel, limit)
  } catch {
    return []
  }
}

export async function fetchPost(id: number): Promise<TelegramPost | null> {
  const posts = await fetchChannelPosts(100)
  return posts.find((p) => p.id === id) ?? null
}
