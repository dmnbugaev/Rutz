import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function YandexMetrika() {
  const location = useLocation();

  useEffect(() => {
    // Initialize Yandex.Metrika
    (function (m: any, e: any, t: any, r: any, i: any, k?: any, a?: any) {
      m[i] =
        m[i] ||
        function () {
          (m[i].a = m[i].a || []).push(arguments);
        };
      m[i].l = 1 * (new Date() as any);
      for (var j = 0; j < document.scripts.length; j++) {
        if (document.scripts[j].src === r) {
          return;
        }
      }
      (k = e.createElement(t)),
        (a = e.getElementsByTagName(t)[0]),
        (k.async = 1),
        (k.src = r),
        a.parentNode.insertBefore(k, a);
    })(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js', 'ym');

    // Replace YOUR_COUNTER_ID with actual Yandex.Metrika counter ID
    (window as any).ym(12345678, 'init', {
      clickmap: true,
      trackLinks: true,
      accurateTrackBounce: true,
      webvisor: true,
    });
  }, []);

  useEffect(() => {
    // Track page views on route change
    if ((window as any).ym) {
      (window as any).ym(12345678, 'hit', location.pathname);
    }
  }, [location]);

  return (
    <noscript>
      <div>
        <img
          src="https://mc.yandex.ru/watch/12345678"
          style={{ position: 'absolute', left: '-9999px' }}
          alt=""
        />
      </div>
    </noscript>
  );
}
