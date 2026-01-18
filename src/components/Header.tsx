import { useState, useEffect } from 'react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={`text-xl tracking-[0.3em] transition-colors duration-300 ${
              isScrolled ? 'text-black' : 'text-white'
            }`}
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Rutz
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-12">
            <button 
              onClick={() => scrollToSection('about')}
              className={`text-xs tracking-[0.2em] uppercase transition-colors duration-300 hover:opacity-60 ${
                isScrolled ? 'text-gray-700' : 'text-white/90'
              }`}
            >
              О нас
            </button>
            <button 
              onClick={() => scrollToSection('gallery')}
              className={`text-xs tracking-[0.2em] uppercase transition-colors duration-300 hover:opacity-60 ${
                isScrolled ? 'text-gray-700' : 'text-white/90'
              }`}
            >
              Портфолио
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className={`text-xs tracking-[0.2em] uppercase transition-colors duration-300 hover:opacity-60 ${
                isScrolled ? 'text-gray-700' : 'text-white/90'
              }`}
            >
              Услуги
            </button>
            <button 
              onClick={() => scrollToSection('booking')}
              className={`px-8 py-3 text-xs tracking-[0.2em] uppercase transition-all duration-300 ${
                isScrolled 
                  ? 'bg-black text-white hover:bg-gray-800' 
                  : 'bg-white text-black hover:bg-gray-100'
              }`}
              style={{ fontWeight: 500 }}
            >
              Записаться
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden flex flex-col gap-1.5 transition-colors ${
              isScrolled ? 'text-black' : 'text-white'
            }`}
          >
            <span className={`w-6 h-[1px] transition-all duration-300 ${
              isMobileMenuOpen ? 'rotate-45 translate-y-2.5' : ''
            } ${isScrolled ? 'bg-black' : 'bg-white'}`}></span>
            <span className={`w-6 h-[1px] transition-all duration-300 ${
              isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
            } ${isScrolled ? 'bg-black' : 'bg-white'}`}></span>
            <span className={`w-6 h-[1px] transition-all duration-300 ${
              isMobileMenuOpen ? '-rotate-45 -translate-y-2.5' : ''
            } ${isScrolled ? 'bg-black' : 'bg-white'}`}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            isMobileMenuOpen ? 'max-h-96 opacity-100 mt-8' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="flex flex-col gap-6 py-6 border-t border-gray-200">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-xs tracking-[0.2em] uppercase text-gray-700 hover:text-black transition-colors text-left"
            >
              О нас
            </button>
            <button 
              onClick={() => scrollToSection('gallery')}
              className="text-xs tracking-[0.2em] uppercase text-gray-700 hover:text-black transition-colors text-left"
            >
              Портфолио
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="text-xs tracking-[0.2em] uppercase text-gray-700 hover:text-black transition-colors text-left"
            >
              Услуги
            </button>
            <button 
              onClick={() => scrollToSection('booking')}
              className="bg-black text-white px-8 py-3 text-xs tracking-[0.2em] uppercase hover:bg-gray-800 transition-colors"
              style={{ fontWeight: 500 }}
            >
              Записаться
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
