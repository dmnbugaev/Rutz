'use client'

import { useEffect, useRef, ReactNode } from 'react'

interface AnimateOnScrollProps {
  children: ReactNode
  className?: string
  animation?: 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right'
  delay?: number
  threshold?: number
}

export function AnimateOnScroll({
  children,
  className = '',
  animation = 'fade-up',
  delay = 0,
  threshold = 0.15,
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const animationMap = {
      'fade-up': { from: { opacity: 0, transform: 'translateY(30px)' }, to: { opacity: 1, transform: 'translateY(0)' } },
      'fade-in': { from: { opacity: 0 }, to: { opacity: 1 } },
      'slide-left': { from: { opacity: 0, transform: 'translateX(-30px)' }, to: { opacity: 1, transform: 'translateX(0)' } },
      'slide-right': { from: { opacity: 0, transform: 'translateX(30px)' }, to: { opacity: 1, transform: 'translateX(0)' } },
    }

    const anim = animationMap[animation]
    Object.assign(el.style, anim.from)
    el.style.transition = `opacity 0.8s cubic-bezier(0.25, 1, 0.5, 1) ${delay}ms, transform 0.8s cubic-bezier(0.25, 1, 0.5, 1) ${delay}ms`

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            Object.assign(el.style, anim.to)
            observer.unobserve(el)
          }
        })
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [animation, delay, threshold])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
