'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

const COUNTER_ID = 107135040

declare global {
  interface Window {
    ym: ((id: number, action: string, ...args: unknown[]) => void) & { a?: unknown[]; l?: number }
  }
}

function initMetrika() {
  if (typeof window === 'undefined') return
  if (document.querySelector('script[src="https://mc.yandex.ru/metrika/tag.js"]')) return

  window.ym =
    window.ym ||
    Object.assign(
      (...args: unknown[]) => { (window.ym.a ??= []).push(args) },
      { l: +new Date() },
    )

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
