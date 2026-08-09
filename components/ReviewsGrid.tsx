'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight, ArrowUpRight, ChevronDown, Star, X } from 'lucide-react'
import type { Review } from '@/lib/reviews'

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} из 5 звёзд`}>
      {Array.from({ length: count }).map((_, index) => (
        <Star key={index} className="h-3.5 w-3.5 fill-foreground text-foreground" strokeWidth={0} />
      ))}
    </div>
  )
}

export function ReviewsGrid({ reviews }: { reviews: Review[] }) {
  const [expanded, setExpanded] = useState<Set<string>>(new Set())
  const [viewer, setViewer] = useState<{ review: Review; index: number } | null>(null)

  useEffect(() => {
    if (!viewer) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setViewer(null)
      if (event.key === 'ArrowLeft') {
        setViewer((current) => current && ({ ...current, index: (current.index - 1 + current.review.photos.length) % current.review.photos.length }))
      }
      if (event.key === 'ArrowRight') {
        setViewer((current) => current && ({ ...current, index: (current.index + 1) % current.review.photos.length }))
      }
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [viewer])

  const toggle = (id: string) => {
    setExpanded((current) => {
      const next = new Set(current)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => {
          const isExpanded = expanded.has(review.id)
          const isLong = review.text.length > 420
          return (
            <article key={review.id} className="flex h-full flex-col bg-background p-6 sm:p-8">
              {review.photos.length > 0 && (
                <div className="mb-6">
                  <button className="relative block aspect-[4/3] w-full overflow-hidden bg-accent" onClick={() => setViewer({ review, index: 0 })} aria-label={`Открыть фото к отзыву ${review.author}`}>
                    <Image src={review.photos[0].src} alt={review.photos[0].alt} fill className="object-cover transition duration-500 hover:scale-[1.02]" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                  </button>
                  {review.photos.length > 1 && (
                    <div className="mt-2 flex gap-2 overflow-x-auto pb-1">
                      {review.photos.slice(1).map((photo, index) => (
                        <button key={photo.src} className="relative h-16 w-16 shrink-0 overflow-hidden bg-accent" onClick={() => setViewer({ review, index: index + 1 })} aria-label={`Открыть фото ${index + 2}`}>
                          <Image src={photo.src} alt={photo.alt} fill className="object-cover" sizes="64px" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}
              <Stars count={review.rating} />
              <div className="mt-5 flex-1">
                <p className={`whitespace-pre-line text-sm leading-relaxed text-muted-foreground ${isLong && !isExpanded ? 'line-clamp-6' : ''}`}>
                  «{review.text}»
                </p>
                {isLong && (
                  <button onClick={() => toggle(review.id)} className="mt-3 inline-flex items-center gap-1 text-xs uppercase tracking-luxury" aria-expanded={isExpanded}>
                    {isExpanded ? 'Свернуть' : 'Читать полностью'}
                    <ChevronDown className={`h-3.5 w-3.5 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                  </button>
                )}
                {review.officialAnswer && (
                  <div className="mt-5 border-l border-border pl-4 text-sm">
                    <p className="font-medium">Ответ RUTZ</p>
                    <p className="mt-1 whitespace-pre-line text-muted-foreground">{review.officialAnswer.text}</p>
                    <p className="mt-2 text-xs text-muted-foreground">{review.officialAnswer.date}</p>
                  </div>
                )}
              </div>
              <footer className="mt-6 border-t border-border pt-4">
                <p className="text-sm font-medium">{review.author}</p>
                <div className="mt-1 flex items-center justify-between gap-3 text-xs uppercase tracking-luxury text-muted-foreground">
                  <time dateTime={review.isoDate}>{review.date}</time>
                  <Link href={review.sourceUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-foreground">
                    2ГИС <ArrowUpRight className="h-3 w-3" />
                  </Link>
                </div>
              </footer>
            </article>
          )
        })}
      </div>

      {viewer && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4" role="dialog" aria-modal="true" aria-label="Просмотр фотографии" onMouseDown={(event) => event.target === event.currentTarget && setViewer(null)}>
          <button onClick={() => setViewer(null)} className="absolute right-4 top-4 z-10 p-3 text-white" aria-label="Закрыть"><X /></button>
          {viewer.review.photos.length > 1 && <button onClick={() => setViewer({ ...viewer, index: (viewer.index - 1 + viewer.review.photos.length) % viewer.review.photos.length })} className="absolute left-2 z-10 p-3 text-white sm:left-6" aria-label="Предыдущее фото"><ArrowLeft /></button>}
          <div className="relative h-[85vh] w-[90vw]">
            <Image src={viewer.review.photos[viewer.index].src} alt={viewer.review.photos[viewer.index].alt} fill className="object-contain" sizes="90vw" priority />
          </div>
          {viewer.review.photos.length > 1 && <button onClick={() => setViewer({ ...viewer, index: (viewer.index + 1) % viewer.review.photos.length })} className="absolute right-2 z-10 p-3 text-white sm:right-6" aria-label="Следующее фото"><ArrowRight /></button>}
          <span className="absolute bottom-4 text-sm text-white/70">{viewer.index + 1} / {viewer.review.photos.length}</span>
        </div>
      )}
    </>
  )
}
