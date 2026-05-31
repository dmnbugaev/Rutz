'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { X, ArrowUpRight, ArrowRight, Calendar } from 'lucide-react'

export function MasterclassPopup() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const dismissed = localStorage.getItem('masterclass-popup-dismissed')
    if (!dismissed) {
      const timer = setTimeout(() => setVisible(true), 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  const close = () => {
    localStorage.setItem('masterclass-popup-dismissed', '1')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Приглашение на мастер-класс"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={close}
      />

      {/* Modal */}
      <div className="relative z-10 bg-background border border-border w-full max-w-lg animate-fade-up overflow-hidden">
        {/* Close */}
        <button
          onClick={close}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-foreground transition-luxury z-10"
          aria-label="Закрыть"
        >
          <X className="w-4 h-4" strokeWidth={1.5} />
        </button>

        {/* Image */}
        <div className="relative h-48 sm:h-60 overflow-hidden">
          <Image
            src="/images/master/IMG_5579.JPG"
            alt="Мастер-класс Дарьи Рутц"
            fill
            className="object-cover grayscale-luxury"
            sizes="512px"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
          <div className="absolute bottom-4 left-6 flex items-center gap-2">
            <Calendar className="w-3.5 h-3.5 text-background/80" strokeWidth={1.5} />
            <span className="text-xs uppercase tracking-luxury text-background/80">
              20 июня 2026 · Барнаул
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-4">
          <span className="text-xs uppercase tracking-luxury text-muted-foreground">
            Мастер-класс
          </span>
          <h2 className="serif text-2xl sm:text-3xl leading-snug">
            Выход из нежелательных оттенков
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Как безопасно выйти из нежелательных оттенков, сохранив качество волос
            и при этом сократить посещение салонов красоты. Проводит Дарья Рутц —
            эксперт по выходу из нежелательных пигментов.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Link
              href="https://t.me/rutzprostranstvo"
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
              className="inline-flex items-center justify-center gap-2 bg-foreground text-background px-6 py-3 rounded-xl text-xs uppercase tracking-luxury transition-luxury hover:bg-foreground/80"
            >
              Записаться <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.5} />
            </Link>
            <Link
              href="/education/masterclass"
              onClick={close}
              className="inline-flex items-center justify-center gap-2 border border-border/60 px-6 py-3 rounded-xl text-xs uppercase tracking-luxury transition-luxury hover:bg-accent/60 glass-subtle"
            >
              Подробнее <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
