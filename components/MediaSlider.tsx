'use client'

import { useState, useRef, useCallback } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react'

type MediaItem =
  | { type: 'photo'; url: string }
  | { type: 'video'; url: string }

interface MediaSliderProps {
  photos: string[]
  videos: string[]
  priority?: boolean
}

export function MediaSlider({ photos, videos, priority = false }: MediaSliderProps) {
  const items: MediaItem[] = [
    ...photos.map((url): MediaItem => ({ type: 'photo', url })),
    ...videos.map((url): MediaItem => ({ type: 'video', url })),
  ]

  const [current, setCurrent] = useState(0)
  const [lightbox, setLightbox] = useState<string | null>(null)
  const touchStartX = useRef<number | null>(null)

  const prev = useCallback(
    () => setCurrent((c) => (c - 1 + items.length) % items.length),
    [items.length]
  )
  const next = useCallback(
    () => setCurrent((c) => (c + 1) % items.length),
    [items.length]
  )

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev()
    touchStartX.current = null
  }

  if (items.length === 0) return null

  // Одиночное фото
  if (items.length === 1 && items[0].type === 'photo') {
    return (
      <>
        <div
          className="relative aspect-[4/3] overflow-hidden cursor-zoom-in"
          onClick={() => setLightbox(items[0].url)}
        >
          <Image
            src={items[0].url}
            alt=""
            fill
            className="object-cover transition-transform duration-500 hover:scale-[1.02]"
            unoptimized
            priority={priority}
          />
          <div className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center bg-black/40 backdrop-blur-sm text-white/80 rounded-sm">
            <Maximize2 className="w-3.5 h-3.5" />
          </div>
        </div>

        {lightbox && (
          <div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 cursor-zoom-out"
            onClick={() => setLightbox(null)}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={lightbox} alt="" className="max-w-full max-h-full object-contain" />
            <button
              aria-label="Закрыть"
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 text-white transition-colors"
              onClick={() => setLightbox(null)}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        )}
      </>
    )
  }

  // Одиночное видео
  if (items.length === 1 && items[0].type === 'video') {
    return (
      <div className="relative bg-black">
        <video
          src={items[0].url}
          controls
          preload="metadata"
          className="w-full max-h-[70vh]"
        />
      </div>
    )
  }

  // Слайдер (несколько медиа)
  return (
    <>
      <div
        className="relative aspect-[4/3] overflow-hidden select-none bg-muted"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {items.map((item, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
              i === current ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            {item.type === 'photo' ? (
              <Image
                src={item.url}
                alt=""
                fill
                className="object-cover cursor-zoom-in"
                unoptimized
                priority={priority && i === 0}
                onClick={() => setLightbox(item.url)}
              />
            ) : (
              <video
                src={item.url}
                controls
                preload="metadata"
                className="w-full h-full object-contain bg-black"
              />
            )}
          </div>
        ))}

        {/* Prev */}
        <button
          onClick={prev}
          aria-label="Предыдущий слайд"
          className="
            absolute left-3 top-1/2 -translate-y-1/2 z-20
            w-9 h-9 flex items-center justify-center
            bg-background/70 backdrop-blur-sm border border-white/20
            text-foreground transition-all duration-200
            hover:bg-background/95 hover:scale-105 active:scale-95
          "
        >
          <ChevronLeft className="w-4 h-4" strokeWidth={1.5} />
        </button>

        {/* Next */}
        <button
          onClick={next}
          aria-label="Следующий слайд"
          className="
            absolute right-3 top-1/2 -translate-y-1/2 z-20
            w-9 h-9 flex items-center justify-center
            bg-background/70 backdrop-blur-sm border border-white/20
            text-foreground transition-all duration-200
            hover:bg-background/95 hover:scale-105 active:scale-95
          "
        >
          <ChevronRight className="w-4 h-4" strokeWidth={1.5} />
        </button>

        {/* Dot indicators */}
        <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Слайд ${i + 1}`}
              className={`
                transition-all duration-300 rounded-full bg-white
                ${i === current ? 'w-6 h-1.5 opacity-100' : 'w-1.5 h-1.5 opacity-40 hover:opacity-70'}
              `}
            />
          ))}
        </div>

        {/* Counter */}
        <div className="absolute top-3 right-3 z-20 text-[10px] font-medium text-white/90 bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded-full tabular-nums">
          {current + 1} / {items.length}
        </div>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setLightbox(null)}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={lightbox} alt="" className="max-w-full max-h-full object-contain" />
          <button
            aria-label="Закрыть"
            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 text-white transition-colors"
            onClick={() => setLightbox(null)}
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      )}
    </>
  )
}
