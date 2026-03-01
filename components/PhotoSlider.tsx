'use client'

import { useState, useRef, useCallback } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface PhotoSliderProps {
  photos: string[]
  className?: string
  priority?: boolean
}

export function PhotoSlider({ photos, className = '', priority = false }: PhotoSliderProps) {
  const [current, setCurrent] = useState(0)
  const touchStartX = useRef<number | null>(null)

  const prev = useCallback(
    () => setCurrent((c) => (c - 1 + photos.length) % photos.length),
    [photos.length]
  )
  const next = useCallback(
    () => setCurrent((c) => (c + 1) % photos.length),
    [photos.length]
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

  if (photos.length === 0) return null

  if (photos.length === 1) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <Image
          src={photos[0]}
          alt=""
          fill
          className="object-cover"
          unoptimized
          priority={priority}
        />
      </div>
    )
  }

  return (
    <div
      className={`relative overflow-hidden select-none ${className}`}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides */}
      {photos.map((src, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
            i === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <Image
            src={src}
            alt=""
            fill
            className="object-cover"
            unoptimized
            priority={priority && i === 0}
          />
        </div>
      ))}

      {/* Prev button */}
      <button
        onClick={(e) => { e.preventDefault(); prev() }}
        aria-label="Предыдущее фото"
        className="
          absolute left-3 top-1/2 -translate-y-1/2 z-20
          w-9 h-9 flex items-center justify-center
          bg-background/70 backdrop-blur-sm border border-white/20
          text-foreground transition-all duration-200
          hover:bg-background/95 hover:scale-105
          active:scale-95
        "
      >
        <ChevronLeft className="w-4 h-4" strokeWidth={1.5} />
      </button>

      {/* Next button */}
      <button
        onClick={(e) => { e.preventDefault(); next() }}
        aria-label="Следующее фото"
        className="
          absolute right-3 top-1/2 -translate-y-1/2 z-20
          w-9 h-9 flex items-center justify-center
          bg-background/70 backdrop-blur-sm border border-white/20
          text-foreground transition-all duration-200
          hover:bg-background/95 hover:scale-105
          active:scale-95
        "
      >
        <ChevronRight className="w-4 h-4" strokeWidth={1.5} />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center gap-2">
        {photos.map((_, i) => (
          <button
            key={i}
            onClick={(e) => { e.preventDefault(); setCurrent(i) }}
            aria-label={`Фото ${i + 1}`}
            className={`
              transition-all duration-300 rounded-full bg-white
              ${i === current ? 'w-6 h-1.5 opacity-100' : 'w-1.5 h-1.5 opacity-40 hover:opacity-70'}
            `}
          />
        ))}
      </div>

      {/* Counter badge */}
      <div className="absolute top-3 right-3 z-20 text-[10px] font-medium text-white/90 bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded-full tabular-nums">
        {current + 1} / {photos.length}
      </div>
    </div>
  )
}
