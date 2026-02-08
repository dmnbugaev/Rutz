import { Link } from 'react-router-dom';
import { Send, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t divider-thin bg-background">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-16 md:mb-20">
          {/* Brand */}
          <div className="space-y-4 sm:space-y-6 sm:col-span-2 lg:col-span-1">
            <div
              style={{ fontFamily: "'rutz-font', serif" }} 
              className="serif text-3xl sm:text-4xl tracking-[0.15em]"
            >
              RUTZ
            </div>
            <p className="text-xs sm:text-sm text-secondary leading-relaxed max-w-xs">
              Премиальный салон красоты в центре Москвы. Место, где искусство встречается с красотой.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4 sm:space-y-6">
            <h4 className="text-xs uppercase tracking-[0.15em] text-tertiary small-caps">Навигация</h4>
            <nav className="flex flex-col gap-2 sm:gap-3">
              <Link to="/about" className="text-xs sm:text-sm text-secondary">
                О салоне
              </Link>
              <Link to="/services" className="text-xs sm:text-sm text-secondary">
                Услуги и цены
              </Link>
              <Link to="/portfolio" className="text-xs sm:text-sm text-secondary">
                Портфолио
              </Link>
              <Link to="/blog" className="text-xs sm:text-sm text-secondary">
                Блог
              </Link>
              <Link to="/reviews" className="text-xs sm:text-sm text-secondary">
                Отзывы
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4 sm:space-y-6">
            <h4 className="text-xs uppercase tracking-[0.15em] text-tertiary small-caps">Контакты</h4>
            <div className="flex flex-col gap-2 sm:gap-3 text-xs sm:text-sm text-secondary">
              <a href="tel:+79833962244" className="hover:text-primary transition-luxury">
                +7 (983) 396-22-44
              </a>
              <p>Барнаул, ​ЖК Питер, ​Павловский тракт, 162</p>
              <p className="text-xs text-tertiary">Ежедневно 10:00 - 20:00</p>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-4 sm:space-y-6">
            <h4 className="text-xs uppercase tracking-[0.15em] text-tertiary small-caps">Социальные сети</h4>
            <div className="flex gap-2 sm:gap-3">
              <a
                href="https://t.me/rutzprostranstvo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border border-border text-primary hover:border-primary hover:border-2 flex items-center justify-center transition-luxury"
                aria-label="Telegram"
              >
                <Send className="w-4 h-4 icon-ultra-thin" strokeWidth={0.75} />
              </a>
              <a
                href="https://vk.ru/darya_skopa13"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border border-border text-primary hover:border-primary hover:border-2 flex items-center justify-center transition-luxury"
                aria-label="ВКонтакте"
              >
                <svg 
                  className="w-5 h-5" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M19.915 13.028c-.388-.49-.277-.708 0-1.146.005-.005 3.208-4.431 3.538-5.932l.002-.001c.164-.547 0-.949-.793-.949h-2.624c-.668 0-.976.345-1.141.731 0 0-1.336 3.198-3.226 5.271-.61.599-.89.791-1.225.791-.164 0-.419-.192-.419-.739V6.949c0-.656-.187-.949-.74-.949H9.161c-.419 0-.668.306-.668.591 0 .622.945.765 1.043 2.515v3.797c0 .832-.151.985-.486.985-.892 0-3.057-3.211-4.34-6.886-.259-.713-.512-1.001-1.185-1.001H1.683c-.749 0-.9.345-.9.731 0 .682.892 4.073 4.148 8.553C7.273 17.343 10.212 19 13.158 19c1.671 0 1.875-.368 1.875-1.001 0-2.922-.151-3.198.686-3.198.388 0 1.056.192 2.616 1.667C19.247 18.216 19.713 19 20.77 19h2.624c.748 0 1.127-.368.909-1.094-.499-1.527-3.871-4.668-4.023-4.878z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/rutz_prostranstvo?igsh=MTh6cnYwY2tkaG16eg=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border border-border text-primary hover:border-primary hover:border-2 flex items-center justify-center transition-luxury"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 icon-ultra-thin" strokeWidth={0.75} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 sm:pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
          <p className="text-xs text-tertiary text-center sm:text-left">
            © {new Date().getFullYear()} RUTZ. Все права защищены.
          </p>
          <div className="flex gap-4 sm:gap-6 md:gap-8 text-xs text-tertiary">
            <Link to="/privacy" className="small-caps">
              Политика конфиденциальности
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}