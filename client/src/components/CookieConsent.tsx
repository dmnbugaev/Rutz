import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from './ui/button';

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border shadow-xl">
      <div className="max-w-[1400px] mx-auto px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1">
            <p className="text-sm leading-relaxed text-secondary">
              Продолжая пользоваться этим сайтом, вы даете согласие на использование файлов
              cookie для улучшения работы сайта и анализа посещаемости.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Button
              onClick={handleAccept}
              className="btn-luxury bg-primary text-primary-foreground px-8 py-5 text-sm uppercase tracking-[0.15em] whitespace-nowrap"
            >
              Принять
            </Button>
            <button
              onClick={handleAccept}
              className="w-10 h-10 flex items-center justify-center"
              aria-label="Close"
            >
              <X className="w-5 h-5 icon-ultra-thin" strokeWidth={0.75} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}