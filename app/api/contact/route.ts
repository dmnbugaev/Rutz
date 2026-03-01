import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, phone, message } = body as {
      name?: string
      phone?: string
      message?: string
    }

    if (!name || !phone) {
      return NextResponse.json(
        { error: 'Имя и телефон обязательны' },
        { status: 400 }
      )
    }

    // Отправка уведомления в Telegram
    const token = process.env.TELEGRAM_BOT_TOKEN
    const chatId = process.env.TELEGRAM_ADMIN_CHAT_ID

    if (token && chatId) {
      const text =
        `📋 *Новая заявка с сайта RUTZ*\n\n` +
        `*Имя:* ${name}\n` +
        `*Телефон:* ${phone}\n` +
        `*Сообщение:* ${message || '—'}`

      await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text,
          parse_mode: 'Markdown',
        }),
      })
    }

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json(
      { error: 'Ошибка сервера. Попробуйте ещё раз.' },
      { status: 500 }
    )
  }
}
