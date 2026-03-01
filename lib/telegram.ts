/**
 * Telegram channel posts fetcher.
 *
 * Стратегия: парсинг публичной превью-страницы канала t.me/s/channel.
 * Работает для публичных каналов (с username), не требует Bot API.
 */

export interface TelegramPost {
  id: number
  date: Date
  text: string       // plain text (превью, SEO)
  html: string       // HTML из Telegram (для полного отображения)
  photos: string[]   // все фото поста из Telegram CDN (0–N)
  messageUrl: string // ссылка на оригинальный пост в канале
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

// Извлекаем ВСЕ фото из блока (поддержка альбомов)
function extractPhotos(block: string): string[] {
  const photos: string[] = []
  const regex = /background-image:url\('([^']+)'\)/g
  let match
  while ((match = regex.exec(block)) !== null) {
    // Исключаем иконки/аватары (обычно маленькие, другой CDN)
    const url = match[1]
    if (url.includes('telegram.st') || url.includes('cdn-telegram')) {
      photos.push(url)
    }
  }
  return photos
}

function parsePostsFromHtml(html: string, channel: string, limit: number): TelegramPost[] {
  const posts: TelegramPost[] = []

  const parts = html.split('<div class="tgme_widget_message_wrap')

  for (let i = 1; i < parts.length; i++) {
    const block = parts[i]

    // Пропускаем пересланные посты (из других каналов)
    if (block.includes('tgme_widget_message_forwarded_from')) continue

    // Пропускаем сервисные сообщения (закрепы, присоединения и т.д.)
    if (block.includes('tgme_widget_message_service')) continue

    // ID поста
    const idMatch = block.match(/data-post="[^/]+\/(\d+)"/)
    if (!idMatch) continue
    const id = parseInt(idMatch[1], 10)

    // Дата
    const dateMatch = block.match(/datetime="([^"]+)"/)
    if (!dateMatch) continue
    const date = new Date(dateMatch[1])

    // Текст
    const messageHtml = extractMessageHtml(block)
    const text = stripHtml(messageHtml)

    // Фото (все URL из этого блока)
    const photos = extractPhotos(block)

    // Пропускаем посты без текста И без фото (видео, стикеры, опросы и т.д.)
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

  // t.me/s/ показывает посты от старых к новым → разворачиваем
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
