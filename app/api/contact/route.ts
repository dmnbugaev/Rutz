import { NextRequest, NextResponse } from 'next/server'

// Stub endpoint — ready to integrate with email/Telegram bot
export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, phone, message } = body

    if (!name || !phone) {
      return NextResponse.json({ error: 'Name and phone are required' }, { status: 400 })
    }

    // TODO: Send to Telegram bot or email service
    // Example Telegram integration:
    // const telegramToken = process.env.TELEGRAM_BOT_TOKEN
    // const chatId = process.env.TELEGRAM_CHAT_ID
    // await fetch(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     chat_id: chatId,
    //     text: `Новая заявка!\nИмя: ${name}\nТелефон: ${phone}\nСообщение: ${message || '—'}`,
    //   }),
    // })

    console.log('Contact form submission:', { name, phone, message })

    return NextResponse.json({ success: true }, { status: 200 })
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
