export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white">
      {/* Main Footer Content */}
      <div className="py-24 px-6 md:px-16 lg:px-32">
        <div className="max-w-7xl mx-auto">
          {/* Logo */}
          <div className="text-center mb-20">
            <button 
              onClick={scrollToTop}
              className="inline-block group mb-4"
            >
              <div 
                className="text-3xl md:text-4xl tracking-[0.3em] transition-opacity group-hover:opacity-60" 
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Rutz
              </div>
            </button>
          </div>

          {/* Info Grid - Centered and Minimal */}
          <div className="grid md:grid-cols-3 gap-16 mb-20 max-w-5xl mx-auto">
            {/* Address */}
            <div className="text-center">
              <div className="text-[12px] tracking-[0.3em] uppercase text-gray-500 mb-5">
                Адрес
              </div>
              <address 
                className="not-italic text-sm text-gray-400 leading-relaxed" 
                style={{ fontFamily: 'var(--font-serif-alt)', fontWeight: 300 }}
              >
                Адрес
              </address>
            </div>

            {/* Contact */}
            <div className="text-center">
              <div className="text-[12px] tracking-[0.3em] uppercase text-gray-500 mb-5">
                Контакты
              </div>
              <div className="space-y-2 text-sm text-gray-400" style={{ fontFamily: 'var(--font-serif-alt)', fontWeight: 300 }}>
                <div>
                  <a 
                    href="tel:#" 
                    className="hover:text-white transition-colors"
                  >
                    +7 (495) 123-45-67
                  </a>
                </div>
                <div>
                  <a 
                    href="#" 
                    className="hover:text-white transition-colors"
                  >
                    info@rutz.ru
                  </a>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="text-center">
              <div className="text-[12px] tracking-[0.3em] uppercase text-gray-500 mb-5">
                Часы работы
              </div>
              <div 
                className="text-sm text-gray-400 leading-relaxed" 
                style={{ fontFamily: 'var(--font-serif-alt)', fontWeight: 300 }}
              >
                <p>Пн - Пт: 00:00 - 00:00</p>
                <p>Сб - Вс: 00:00 - 00:00</p>
              </div>
            </div>
          </div>

          {/* Decorative Divider */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="h-px w-24 bg-white/10"></div>
            <div className="w-1 h-1 bg-white/20 rotate-45"></div>
            <div className="h-px w-24 bg-white/10"></div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-10 mb-16">
            <a 
              href="#" 
              className="text-xs tracking-[0.2em] uppercase text-gray-500 hover:text-white transition-colors"
            >
              Instagram
            </a>
            <a 
              href="#" 
              className="text-xs tracking-[0.2em] uppercase text-gray-500 hover:text-white transition-colors"
            >
              Telegram
            </a>
            <a 
              href="#" 
              className="text-xs tracking-[0.2em] uppercase text-gray-500 hover:text-white transition-colors"
            >
              WhatsApp
            </a>
          </div>

          {/* Bottom Section */}
          <div className="text-center space-y-4">
            <div className="flex flex-wrap justify-center gap-6 text-xs text-gray-600">
              <a href="#" className="hover:text-gray-400 transition-colors">
                Политика конфиденциальности
              </a>
              <span className="text-gray-800">•</span>
              <a href="#" className="hover:text-gray-400 transition-colors">
                Договор оферты
              </a>
            </div>
            <p className="text-xs text-gray-600">
              © 2026 Rutz. Все права защищены.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}