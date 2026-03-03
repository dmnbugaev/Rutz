'use client'

import { useState, FormEvent } from 'react'
import { ArrowRight, Check } from 'lucide-react'

type Status = 'idle' | 'loading' | 'success' | 'error'

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [form, setForm] = useState({ name: '', phone: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', phone: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div role="status" className="border border-border p-8 text-center space-y-4">
        <div className="w-12 h-12 border border-foreground flex items-center justify-center mx-auto">
          <Check className="w-5 h-5" strokeWidth={1.5} />
        </div>
        <h3 className="serif text-2xl">Заявка отправлена!</h3>
        <p className="text-sm text-muted-foreground">
          Я свяжусь с вами в ближайшее время для уточнения деталей.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-xs uppercase tracking-luxury text-muted-foreground mb-2">
          Имя *
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={form.name}
          onChange={handleChange}
          placeholder="Ваше имя"
          className="w-full border border-border bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-foreground focus:ring-2 focus:ring-foreground/15 transition-luxury"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-xs uppercase tracking-luxury text-muted-foreground mb-2">
          Телефон *
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          value={form.phone}
          onChange={handleChange}
          placeholder="+7 (___) ___-__-__"
          className="w-full border border-border bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-foreground focus:ring-2 focus:ring-foreground/15 transition-luxury"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-xs uppercase tracking-luxury text-muted-foreground mb-2">
          Сообщение
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          placeholder="Опишите, что вас интересует (желаемый цвет, история окрашиваний...)"
          className="w-full border border-border bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-foreground focus:ring-2 focus:ring-foreground/15 transition-luxury resize-none"
        />
      </div>

      {status === 'error' && (
        <p role="alert" className="text-sm text-red-600">
          Ошибка при отправке. Пожалуйста, напишите нам в Telegram напрямую.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full flex items-center justify-center gap-2 bg-foreground text-background py-4 rounded-2xl text-xs uppercase tracking-luxury transition-luxury hover:bg-foreground/80 disabled:opacity-60"
      >
        {status === 'loading' ? 'Отправка...' : 'Отправить заявку'}
        {status !== 'loading' && <ArrowRight className="w-4 h-4" strokeWidth={1.5} />}
      </button>

      <p className="text-[11px] text-muted-foreground leading-relaxed">
        Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
        в соответствии с{' '}
        <a href="/privacy" className="underline underline-offset-2">политикой конфиденциальности</a>.
      </p>
    </form>
  )
}
