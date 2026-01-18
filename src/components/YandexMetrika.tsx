import { useEffect } from 'react';

declare global {
  interface Window {
    ym?: (
      counterId: number,
      event: string,
      ...args: any[]
    ) => void;
    Ya?: any;
  }
}

interface YandexMetrikaProps {
  counterId: number;
}

export function YandexMetrika({ counterId }: YandexMetrikaProps) {
  useEffect(() => {
    // Проверяем, не добавлен ли уже скрипт
    if (window.ym || document.getElementById('yandex-metrika-script')) {
      return;
    }

    // Создаем скрипт Яндекс.Метрики
    const script = document.createElement('script');
    script.id = 'yandex-metrika-script';
    script.type = 'text/javascript';
    script.async = true;
    script.innerHTML = `
      (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
      m[i].l=1*new Date();
      for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
      k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
      (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

      ym(${counterId}, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
      });
    `;

    // Добавляем скрипт в документ
    document.head.appendChild(script);

    // Добавляем noscript для пользователей без JavaScript
    const noscript = document.createElement('noscript');
    noscript.innerHTML = `<div><img src="https://mc.yandex.ru/watch/${counterId}" style="position:absolute; left:-9999px;" alt="" /></div>`;
    document.body.appendChild(noscript);

    // Очистка при размонтировании
    return () => {
      const scriptElement = document.getElementById('yandex-metrika-script');
      const noscriptElement = document.querySelector('noscript div img[src*="yandex.ru"]')?.parentElement?.parentElement;
      
      if (scriptElement) {
        document.head.removeChild(scriptElement);
      }
      if (noscriptElement) {
        document.body.removeChild(noscriptElement);
      }
    };
  }, [counterId]);

  return null; // Компонент не рендерит ничего в DOM
}