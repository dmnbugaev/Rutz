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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-sm'
            : 'bg-background border-b border-border'
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
              className="hidden sm:inline-flex items-center bg-foreground text-background px-5 h-10 text-xs uppercase tracking-luxury transition-luxury hover:bg-foreground/80"
            >
              Запись
            </Link>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center border border-border relative z-50 transition-luxury hover:bg-accent"
              aria-label="Toggle menu"
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
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile menu */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-72 sm:w-80 bg-background border-l border-border z-40 lg:hidden transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col pt-20 px-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`py-5 text-sm uppercase tracking-luxury border-b border-border small-caps transition-luxury ${
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
              className="flex items-center justify-center w-full bg-foreground text-background py-4 text-xs uppercase tracking-luxury transition-luxury hover:bg-foreground/80"
            >
              Записаться онлайн
            </Link>
          </div>
        </nav>
      </div>
    </>
  )
}
