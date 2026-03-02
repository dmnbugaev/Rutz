import Link from 'next/link'
import { RutzLogo } from './RutzLogo'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border/40 bg-white/60 dark:bg-neutral-950/60 backdrop-blur-xl">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-12 md:mb-16">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1 space-y-5">
            <RutzLogo variant="compact" className="h-6 w-auto text-foreground" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Пространство красоты RUTZ.<br />
              Дарья Рутц — колорист с 10-летним опытом.
            </p>
            <p className="text-xs text-muted-foreground">
              Барнаул, ЖК Питер<br />
              Павловский тракт, 162
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-luxury small-caps text-muted-foreground mb-5">
              Навигация
            </h4>
            <nav className="flex flex-col gap-3">
              {[
                { name: 'Обо мне', path: '/about' },
                { name: 'Услуги и цены', path: '/services' },
                { name: 'Обучение', path: '/education' },
                { name: 'Отзывы', path: '/reviews' },
                { name: 'Блог', path: '/blog' },
                { name: 'Контакты', path: '/contacts' },
              ].map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className="text-sm text-muted-foreground hover:text-foreground transition-luxury"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contacts */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-luxury small-caps text-muted-foreground mb-5">
              Контакты
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+79833962244"
                className="text-sm text-muted-foreground hover:text-foreground transition-luxury"
              >
                +7 (983) 396-22-44
              </a>
              <a
                href="https://t.me/rutzprostranstvo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-luxury"
              >
                Telegram
              </a>
              <a
                href="https://www.instagram.com/rutz_prostranstvo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-luxury"
              >
                Instagram
              </a>
              <a
                href="https://vk.ru/darya_skopa13"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-luxury"
              >
                ВКонтакте
              </a>
            </div>
          </div>

          {/* CTA */}
          <div className="space-y-5">
            <h4 className="text-xs uppercase tracking-luxury small-caps text-muted-foreground mb-5">
              Запись
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Запись только после личной консультации
            </p>
            <Link
              href="https://dikidi.net/1348080?p=0.pi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-foreground text-background px-6 py-3 rounded-2xl text-xs uppercase tracking-luxury transition-luxury hover:bg-foreground/80"
            >
              Онлайн-запись
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border/40 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {year} RUTZ Пространство красоты. Все права защищены.
          </p>
          <Link
            href="/privacy"
            className="text-xs text-muted-foreground hover:text-foreground transition-luxury"
          >
            Политика конфиденциальности
          </Link>
        </div>
      </div>
    </footer>
  )
}
