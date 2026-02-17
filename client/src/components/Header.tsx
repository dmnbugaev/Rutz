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
    { name: 'Контакты', path: '/contacts' },
  ];

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border animate-fade-in">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 py-3 sm:py-4 flex items-center justify-between">
          {/* Логотип (SVG с адаптивным цветом) */}
          <Link to="/" className="serif text-xl sm:text-2xl tracking-[0.15em] relative z-50">
            <div className="text-[#333333] dark:text-white h-6 sm:h-7 w-auto">
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