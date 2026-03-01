export interface TelegramPost {
  id: number
  date: number
  text: string
  html: string
  photoUrl?: string
  messageUrl: string
}

interface TelegramEntity {
  type: string
  offset: number
  length: number
  url?: string
}

interface TelegramPhotoSize {
  file_id: string
  file_unique_id: string
  width: number
  height: number
  file_size?: number
}

interface TelegramMessage {
  message_id: number
  date: number
  text?: string
  caption?: string
  entities?: TelegramEntity[]
  caption_entities?: TelegramEntity[]
  photo?: TelegramPhotoSize[]
  chat: {
    id: number
    username?: string
    type: string
  }
}

interface TelegramUpdate {
  update_id: number
  channel_post?: TelegramMessage
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function entitiesToHtml(text: string, entities?: TelegramEntity[]): string {
  if (!entities || entities.length === 0) {
    return escapeHtml(text).replace(/\n/g, '<br>')
  }

  const sorted = [...entities].sort((a, b) => a.offset - b.offset)
  let result = ''
  let pos = 0

  for (const entity of sorted) {
    result += escapeHtml(text.slice(pos, entity.offset))
    const entityText = text.slice(entity.offset, entity.offset + entity.length)

    switch (entity.type) {
      case 'bold':
        result += `<strong>${escapeHtml(entityText)}</strong>`
        break
      case 'italic':
        result += `<em>${escapeHtml(entityText)}</em>`
        break
      case 'text_link':
        result += `<a href="${entity.url}" target="_blank" rel="noopener noreferrer">${escapeHtml(entityText)}</a>`
        break
      case 'url':
        result += `<a href="${escapeHtml(entityText)}" target="_blank" rel="noopener noreferrer">${escapeHtml(entityText)}</a>`
        break
      case 'code':
        result += `<code>${escapeHtml(entityText)}</code>`
        break
      default:
        result += escapeHtml(entityText)
    }

    pos = entity.offset + entity.length
  }

  result += escapeHtml(text.slice(pos))
  return result.replace(/\n/g, '<br>')
}

export async function resolvePhotoUrl(fileId: string): Promise<string | undefined> {
  const token = process.env.TELEGRAM_BOT_TOKEN
  if (!token) return undefined

  try {
    const res = await fetch(
      `https://api.telegram.org/bot${token}/getFile?file_id=${fileId}`,
      { next: { revalidate: 3600 } }
    )
    const data = await res.json()
    if (data.ok && data.result?.file_path) {
      return `https://api.telegram.org/file/bot${token}/${data.result.file_path}`
    }
  } catch {
    // ignore
  }
  return undefined
}

export async function fetchChannelPosts(limit = 20): Promise<TelegramPost[]> {
  const token = process.env.TELEGRAM_BOT_TOKEN
  const channelId = process.env.TELEGRAM_CHANNEL_ID

  if (!token || !channelId) return []

  try {
    const url = new URL(`https://api.telegram.org/bot${token}/getUpdates`)
    url.searchParams.set('limit', '100')
    url.searchParams.set('allowed_updates', JSON.stringify(['channel_post']))

    const res = await fetch(url.toString(), { next: { revalidate: 3600 } })
    const data = await res.json()

    if (!data.ok || !Array.isArray(data.result)) return []

    const updates: TelegramUpdate[] = data.result

    // Normalize channel ID for comparison
    const normalizedChannelId = channelId.startsWith('@')
      ? channelId.slice(1).toLowerCase()
      : channelId

    const posts = updates
      .filter((u) => {
        if (!u.channel_post) return false
        const chat = u.channel_post.chat
        const matchesUsername = chat.username?.toLowerCase() === normalizedChannelId
        const matchesId = String(chat.id) === String(channelId)
        return matchesUsername || matchesId
      })
      .map((u) => u.channel_post!)
      .filter((msg) => msg.text || msg.caption)
      .sort((a, b) => b.date - a.date)
      .slice(0, limit)

    const result: TelegramPost[] = await Promise.all(
      posts.map(async (msg) => {
        const rawText = msg.text || msg.caption || ''
        const entities = msg.entities || msg.caption_entities

        let photoUrl: string | undefined
        if (msg.photo && msg.photo.length > 0) {
          const largest = msg.photo.reduce((a, b) =>
            (a.file_size ?? 0) >= (b.file_size ?? 0) ? a : b
          )
          photoUrl = await resolvePhotoUrl(largest.file_id)
        }

        const channelUsername = msg.chat.username || channelId.replace('@', '')
        const messageUrl = `https://t.me/${channelUsername}/${msg.message_id}`

        return {
          id: msg.message_id,
          date: msg.date,
          text: rawText,
          html: entitiesToHtml(rawText, entities),
          photoUrl,
          messageUrl,
        }
      })
    )

    return result
  } catch {
    return []
  }
}
