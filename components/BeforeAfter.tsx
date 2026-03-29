'use client'

import { useState } from 'react'
import Image from 'next/image'

interface BeforeAfterProps {
  before: string
  after: string
  className?: string
}

export function BeforeAfter({ before, after, className = '' }: BeforeAfterProps) {
  const [active, setActive] = useState<'after' | 'before'>('after')

  return (
    <div className={`relative overflow-hidden gallery-frame ${className}`}>
      <div className="relative aspect-[3/4]">
        <Image
          src={active === 'after' ? after : before}
          alt={active === 'after' ? 'Результат после окрашивания' : 'До процедуры'}
          fill
          className="object-cover grayscale-luxury"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
        <div
          className={`absolute top-3 left-3 px-3 py-1.5 text-[10px] uppercase tracking-luxury rounded-full transition-colors duration-300 ${
            active === 'after'
              ? 'bg-foreground text-background'
              : 'bg-black/60 backdrop-blur-sm text-white'
          }`}
        >
          {active === 'after' ? 'После' : 'До'}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 flex h-11">
        <button
          onClick={() => setActive('before')}
          className={`flex-1 text-[10px] uppercase tracking-luxury transition-all duration-300 ${
            active === 'before'
              ? 'bg-foreground text-background'
              : 'bg-black/50 backdrop-blur-sm text-white/60 hover:text-white/90'
          }`}
        >
          До
        </button>
        <div className="w-px bg-white/15" />
        <button
          onClick={() => setActive('after')}
          className={`flex-1 text-[10px] uppercase tracking-luxury transition-all duration-300 ${
            active === 'after'
              ? 'bg-foreground text-background'
              : 'bg-black/50 backdrop-blur-sm text-white/60 hover:text-white/90'
          }`}
        >
          После
        </button>
      </div>
    </div>
  )
}
