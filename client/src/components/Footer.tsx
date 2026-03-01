import { Link } from 'react-router-dom';
import { Send, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t divider-thin bg-background">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-16 md:mb-20">
          {/* Brand */}
          <div className="space-y-4 sm:space-y-6 sm:col-span-2 lg:col-span-1">
            {/* Логотип (SVG с адаптивным цветом) */}
            <div className="text-[#333333] dark:text-white h-8 sm:h-10 w-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1446 429"
                className="h-full w-auto"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.5 0.5V20.5H47.5V401.5H1V421.5H187.5V401.5H138.5V206.5C165.13 204.563 181.665 207.226 192.5 212.689C204.043 218.508 209 227.5 213.037 237.5C217.074 247.5 220.194 262.39 222.605 312.5C224 341.5 225.5 365.5 242.535 389.5C245.751 393.598 249.451 397.382 253.738 401.5C286.624 429.859 338.925 430.686 379.5 407.5V383.5C367.273 390.279 357.403 393.195 349.292 393.023C342.873 393.221 337.882 391.783 333.957 389C325.5 383.002 327 380 323.895 314.5C323.417 302.858 322.015 290.543 318.542 278C311.205 251.497 293.906 225.823 254 207.745C244.903 203.623 234.503 200.161 222.605 197.5C274.5 189.5 310.5 175.5 334.864 135.5C348.231 106.52 346.01 71.6246 323.596 45C297.5 14 274.5 0.500027 176 0.5H0.5ZM185.5 20H139L138.5 186.5H185.5C200.053 185.604 213 181 221.5 174.294C224.934 171.694 228.143 167.316 231 161.656C233.942 154.318 236.864 146 238 137C239.136 128 240.205 96 238 68C236.634 57.9221 234.46 49.2113 231 42.5C227.829 37.4853 224.687 32.7517 220 29.547C210.5 24 204 21 185.5 20Z"
                  fill="currentColor"
                  stroke="currentColor"
                />
                <path
                  d="M378 0.5V20H426.5V283C426.5 302.5 427 319 430.939 339C448.707 415.827 513.765 425.605 564 427.47C609.159 429.147 643.121 420.456 667 402.36C704.5 373.944 710 343.5 711.5 283V39.5C713 24 717.5 20.5 744.5 20.1698C748.495 20.1209 752.974 20 758 20V0.5H640.5V20.5H667C687.5 20.5 691.5 22.5 691.5 44.5V278.5C692 358 663.5 401.691 595 401.691C539 401 514.905 364.384 517.5 278.5V20.5H569V0.5H378Z"
                  fill="currentColor"
                  stroke="currentColor"
                />
                <path
                  d="M779.5 0.5H1086L1088.5 138H1071C1067.85 126.343 1064.1 82.726 1041.5 52.0528C1036.95 45.6415 1032.32 40.3254 1027.33 36C1014.77 25.1103 1006.5 20.5 978.5 20.5V401.5H1034.5V421H831.5V401.407H887.5V20.5H876.5C868.5 20.5 849.173 23.5 835.044 38.5C815.5 59.2487 804.5 84.5 794.5 138.5H776.5L779.5 0.5Z"
                  fill="currentColor"
                  stroke="currentColor"
                />
                <path
                  d="M1139.5 131.5V0.5H1441V18.5L1227.5 401.5H1296C1346 401.5 1369.5 383.5 1400.54 326C1408.18 309.544 1415.29 289.873 1422 266.5H1445.5L1443.5 421.5H1125.5V396.5L1335 20.5H1259.5C1237 21 1222 22.5 1202 38.9658C1184.88 54.206 1172.38 81.7332 1162 131.5H1139.5Z"
                  fill="currentColor"
                  stroke="currentColor"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.5 0.5V20.5H47.5V401.5H1V421.5H187.5V401.5H138.5V206.5C165.13 204.563 181.665 207.226 192.5 212.689C204.043 218.508 209 227.5 213.037 237.5C217.074 247.5 220.194 262.39 222.605 312.5C224 341.5 225.5 365.5 242.535 389.5C245.751 393.598 249.451 397.382 253.738 401.5C286.624 429.859 338.925 430.686 379.5 407.5V383.5C367.273 390.279 357.403 393.195 349.292 393.023C342.873 393.221 337.882 391.783 333.957 389C325.5 383.002 327 380 323.895 314.5C323.417 302.858 322.015 290.543 318.542 278C311.205 251.497 293.906 225.823 254 207.745C244.903 203.623 234.503 200.161 222.605 197.5C274.5 189.5 310.5 175.5 334.864 135.5C348.231 106.52 346.01 71.6246 323.596 45C297.5 14 274.5 0.500027 176 0.5H0.5ZM185.5 20H139L138.5 186.5H185.5C200.053 185.604 213 181 221.5 174.294C224.934 171.694 228.143 167.316 231 161.656C233.942 154.318 236.864 146 238 137C239.136 128 240.205 96 238 68C236.634 57.9221 234.46 49.2113 231 42.5C227.829 37.4853 224.687 32.7517 220 29.547C210.5 24 204 21 185.5 20Z"
                  fill="currentColor"
                  stroke="currentColor"
                />
                <path
                  d="M378 0.5V20H426.5V283C426.5 302.5 427 319 430.939 339C448.707 415.827 513.765 425.605 564 427.47C609.159 429.147 643.121 420.456 667 402.36C704.5 373.944 710 343.5 711.5 283V39.5C713 24 717.5 20.5 744.5 20.1698C748.495 20.1209 752.974 20 758 20V0.5H640.5V20.5H667C687.5 20.5 691.5 22.5 691.5 44.5V278.5C692 358 663.5 401.691 595 401.691C539 401 514.905 364.384 517.5 278.5V20.5H569V0.5H378Z"
                  fill="currentColor"
                  stroke="currentColor"
                />
                <path
                  d="M779.5 0.5H1086L1088.5 138H1071C1067.85 126.343 1064.1 82.726 1041.5 52.0528C1036.95 45.6415 1032.32 40.3254 1027.33 36C1014.77 25.1103 1006.5 20.5 978.5 20.5V401.5H1034.5V421H831.5V401.407H887.5V20.5H876.5C868.5 20.5 849.173 23.5 835.044 38.5C815.5 59.2487 804.5 84.5 794.5 138.5H776.5L779.5 0.5Z"
                  fill="currentColor"
                  stroke="currentColor"
                />
                <path
                  d="M1139.5 131.5V0.5H1441V18.5L1227.5 401.5H1296C1346 401.5 1369.5 383.5 1400.54 326C1408.18 309.544 1415.29 289.873 1422 266.5H1445.5L1443.5 421.5H1125.5V396.5L1335 20.5H1259.5C1237 21 1222 22.5 1202 38.9658C1184.88 54.206 1172.38 81.7332 1162 131.5H1139.5Z"
                  fill="currentColor"
                  stroke="currentColor"
                />
              </svg>
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