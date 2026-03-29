'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { RutzLogo } from './RutzLogo'
import { ThemeToggle } from './ThemeToggle'

const navItems = [
  { name: 'Главная', path: '/' },
  { name: 'Обо мне', path: '/about' },
  { name: 'Услуги', path: '/services' },
  { name: 'Портфолио', path: '/portfolio' },
  { name: 'Обучение', path: '/education' },
  { name: 'Отзывы', path: '/reviews' },
  { name: 'Блог', path: '/blog' },
  { name: 'Контакты', path: '/contacts' },
]

export function Header() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/90 dark:bg-[#111111] backdrop-blur-2xl border-b border-black/[0.06] dark:border-white/[0.08] shadow-[0_1px_24px_rgba(0,0,0,0.07)] dark:shadow-[0_1px_0_rgba(255,255,255,0.06)]'
            : 'bg-white/60 dark:bg-[#0f0f0f]/80 backdrop-blur-xl border-b border-black/[0.04] dark:border-white/[0.05]'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 py-3 sm:py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-50">
            <RutzLogo
              variant="compact"
              className="h-6 sm:h-7 w-auto text-foreground"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`text-xs uppercase tracking-luxury small-caps transition-luxury ${
                  pathname === item.path
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle />
            <Link
              href="https://dikidi.net/1348080?p=0.pi"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center bg-foreground text-background px-5 h-10 rounded-full text-xs uppercase tracking-luxury transition-luxury hover:bg-foreground/80"
            >
              Запись
            </Link>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center border border-border/60 rounded-xl relative z-50 transition-luxury hover:bg-accent/60 hover:backdrop-blur-sm"
              aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                <X className="w-5 h-5" strokeWidth={1} />
              ) : (
                <Menu className="w-5 h-5" strokeWidth={1} />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/30 dark:bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile menu */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-72 sm:w-80 bg-white dark:bg-[#111111] backdrop-blur-2xl border-l border-black/[0.06] dark:border-white/[0.08] rounded-l-3xl z-40 lg:hidden transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] shadow-[-8px_0_40px_rgba(0,0,0,0.12)] dark:shadow-[-8px_0_60px_rgba(0,0,0,0.8)] ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col pt-20 px-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`py-5 text-sm uppercase tracking-luxury border-b border-border/50 small-caps transition-luxury ${
                pathname === item.path
                  ? 'text-foreground'
                  : 'text-muted-foreground'
              }`}
            >
              {item.name}
            </Link>
          ))}
          <div className="mt-8">
            <Link
              href="https://dikidi.net/1348080?p=0.pi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full bg-foreground text-background py-4 rounded-2xl text-xs uppercase tracking-luxury transition-luxury hover:bg-foreground/80"
            >
              Записаться онлайн
            </Link>
          </div>
        </nav>
      </div>
    </>
  )
}
