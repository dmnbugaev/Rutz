import { useState, useEffect } from 'react';

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Проверяем, было ли уже дано согласие
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Показываем баннер с небольшой задержкой для плавности
      setTimeout(() => setIsVisible(true), 1000);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] animate-in slide-in-from-bottom duration-500">
      <div className="bg-black/95 backdrop-blur-sm border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-16 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Text */}
            <div className="flex-1 text-center md:text-left">
              <p 
                className="text-sm text-white/80 leading-relaxed"
                style={{ fontFamily: 'var(--font-serif-alt)', fontWeight: 300 }}
              >
                Продолжая пользоваться сайтом, вы даёте согласие на использование файлов cookie. 
                Это помогает нам улучшить ваш опыт взаимодействия с сайтом.
              </p>
            </div>

            {/* Button */}
            <button
              onClick={acceptCookies}
              className="bg-white text-black px-10 py-4 text-xs tracking-[0.3em] uppercase hover:bg-gray-100 transition-all duration-300 whitespace-nowrap"
              style={{ fontWeight: 500 }}
            >
              Принять
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
