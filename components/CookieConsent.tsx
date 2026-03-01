'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) setVisible(true)
  }, [])

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border p-4 sm:p-6">
      <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
        <p className="text-xs text-muted-foreground leading-relaxed max-w-2xl">
          Этот сайт использует файлы cookie для улучшения работы. Продолжая использование сайта,
          вы соглашаетесь с нашей{' '}
          <Link href="/privacy" className="underline underline-offset-2 hover:text-foreground transition-luxury">
            политикой конфиденциальности
          </Link>
          .
        </p>
        <button
          onClick={accept}
          className="flex-shrink-0 bg-foreground text-background px-6 py-2 text-xs uppercase tracking-luxury transition-luxury hover:bg-foreground/80"
        >
          Принять
        </button>
      </div>
    </div>
  )
}
