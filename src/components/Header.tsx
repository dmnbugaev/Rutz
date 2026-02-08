import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { ThemeToggle } from './ThemeToggle';

export function Header() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Главная', path: '/' },
    { name: 'О салоне', path: '/about' },
    { name: 'Услуги', path: '/services' },
    { name: 'Портфолио', path: '/portfolio' },
    // { name: 'Блог', path: '/blog' },
    { name: 'Контакты', path: '/contacts' },
  ];

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border animate-fade-in">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 py-3 sm:py-4 flex items-center justify-between">
          {/* Logo */}
          <Link 
            style={{ fontFamily: "'rutz-font', serif" }}
            to="/" className="serif text-xl sm:text-2xl tracking-[0.15em] relative z-50 text-primary"
          >
            RUTZ
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-xs uppercase tracking-[0.15em] small-caps ${
                  location.pathname === item.path
                    ? 'text-primary'
                    : 'text-tertiary'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA & Mobile Menu Button */}
          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle />
            <Button
              asChild
              size="sm"
              className="hidden sm:inline-flex bg-primary text-primary-foreground px-4 md:px-6 h-10 text-xs uppercase tracking-[0.15em]"
            >
              <Link to="/contacts">Запись</Link>
            </Button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center border border-border relative z-50"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 icon-ultra-thin" strokeWidth={0.75} />
              ) : (
                <Menu className="w-5 h-5 icon-ultra-thin" strokeWidth={0.75} />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 dark:bg-white/10 z-40 lg:hidden animate-fade-in"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-[280px] sm:w-80 bg-background border-l border-border z-40 lg:hidden transition-all duration-500 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col pt-20 sm:pt-24 px-6 sm:px-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={closeMobileMenu}
              className={`py-5 sm:py-6 text-sm uppercase tracking-[0.15em] border-b border-border small-caps ${
                location.pathname === item.path
                  ? 'text-primary'
                  : 'text-tertiary'
              }`}
            >
              {item.name}
            </Link>
          ))}
          <div className="mt-6 sm:mt-8">
            <Button
              asChild
              className="w-full bg-primary text-primary-foreground px-6 py-5 uppercase tracking-[0.15em] text-xs"
            >
              <Link to="/contacts" onClick={closeMobileMenu}>Запись</Link>
            </Button>
          </div>
        </nav>
      </div>
    </>
  );
}