/**
 * Telegram channel posts fetcher.
 *
 * Стратегия: парсинг публичной превью-страницы t.me/s/channel.
 * CDN этого канала: cdn4.telesco.pe (не telegram.st — зависит от дата-центра).
 *
 * Показываем только:
 *   - текстовые посты (без медиа)
 *   - посты с фотографиями (с текстом или без)
 * Исключаем: видео-посты, стикеры, опросы, пересланные посты.
 */

export interface TelegramPost {
  id: number
  date: Date
  text: string       // plain text (для превью)
  html: string       // HTML из Telegram (для полной страницы поста)
  photos: string[]   // URL фотографий из tgme_widget_message_photo_wrap (0..N)
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

    // Конец открывающего тега этого элемента
    const tagEnd = block.indexOf('>', wrapPos)
    if (tagEnd === -1) break

    // Ищем background-image внутри этого тега
    const tag = block.slice(wrapPos, tagEnd)
    const bgMatch = tag.match(/background-image:url\('([^']+)'\)/)
    if (bgMatch) photos.push(bgMatch[1])

    pos = tagEnd + 1
  }

  return photos
}

function parsePostsFromHtml(html: string, channel: string, limit: number): TelegramPost[] {
  const posts: TelegramPost[] = []

  const parts = html.split('<div class="tgme_widget_message_wrap')

  for (let i = 1; i < parts.length; i++) {
    const block = parts[i]

    // Пересланные посты — пропускаем
    if (block.includes('tgme_widget_message_forwarded_from')) continue

    // Видео-посты — пропускаем (они не годятся для блога)
    if (block.includes('tgme_widget_message_video_player')) continue

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

    // Текст
    const messageHtml = extractMessageHtml(block)
    const text = stripHtml(messageHtml)

    // Пропускаем пустые посты (ни текста, ни фото)
    if (!text && photos.length === 0) continue

    posts.push({
      id,
      date,
      text,
      html: messageHtml,
      photos,
      messageUrl: `https://t.me/${channel}/${id}`,
    })
  }

  // t.me/s/ отдаёт посты от старых к новым — разворачиваем
  return posts.reverse().slice(0, limit)
}

export async function fetchChannelPosts(limit = 20): Promise<TelegramPost[]> {
  const channel = getChannelUsername()
  try {
    const res = await fetch(`https://t.me/s/${channel}`, {
      headers: {
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
