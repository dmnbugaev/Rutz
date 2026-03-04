'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

// Замените на ваш реальный номер счётчика из кабинета Яндекс.Метрики
const COUNTER_ID = 12345678

declare global {
  interface Window {
    ym: (id: number, action: string, ...args: unknown[]) => void
  }
}

function initMetrika() {
  if (typeof window === 'undefined') return
  if (document.querySelector('script[src="https://mc.yandex.ru/metrika/tag.js"]')) return

  ;(window as any).ym =
    (window as any).ym ||
    function (...args: unknown[]) {
      ;((window as any).ym.a = (window as any).ym.a || []).push(args)
    }
  ;(window as any).ym.l = +new Date()

  const script = document.createElement('script')
  script.async = true
  script.src = 'https://mc.yandex.ru/metrika/tag.js'
  document.head.appendChild(script)

  window.ym(COUNTER_ID, 'init', {
    clickmap: true,
    trackLinks: true,
    accurateTrackBounce: true,
    webvisor: true,
  })
}

export function YandexMetrika() {
  const pathname = usePathname()
  const initialized = useRef(false)

  // Инициализируем метрику только после согласия с cookies
  useEffect(() => {
    if (localStorage.getItem('cookie-consent') === 'accepted') {
      initMetrika()
      initialized.current = true
      return
    }

    const handler = () => {
      initMetrika()
      initialized.current = true
    }
    window.addEventListener('cookie-consent-accepted', handler)
    return () => window.removeEventListener('cookie-consent-accepted', handler)
  }, [])

  // Трекаем переходы между страницами
  useEffect(() => {
    if (!initialized.current) return
    window.ym?.(COUNTER_ID, 'hit', pathname)
  }, [pathname])

  return (
    <noscript>
      <div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`https://mc.yandex.ru/watch/${COUNTER_ID}`}
          style={{ position: 'absolute', left: '-9999px' }}
          alt=""
        />
      </div>
    </noscript>
  )
}
