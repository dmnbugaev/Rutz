import Link from 'next/link'
import { RutzLogo } from './RutzLogo'
import { ArrowUpRight } from 'lucide-react'

const navLinks = [
  { name: 'Обо мне', path: '/about' },
  { name: 'Услуги и цены', path: '/services' },
  { name: 'Портфолио', path: '/portfolio' },
  { name: 'Обучение', path: '/education' },
  { name: 'Отзывы', path: '/reviews' },
  { name: 'Блог', path: '/blog' },
  { name: 'Контакты', path: '/contacts' },
]

const socials = [
  { name: 'Telegram', url: 'https://t.me/rutzprostranstvo' },
  { name: 'Instagram*', url: 'https://www.instagram.com/rutz_prostranstvo' },
  { name: 'ВКонтакте', url: 'https://vk.ru/darya_skopa13' },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-background relative overflow-hidden">

      {/* ── Декоративная линия ── */}
      <div className="h-px bg-gradient-to-r from-transparent via-background/15 to-transparent" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
        
        {/* ── Разделитель ── */}
        <div className="border-t border-background/[0.08]" />

        {/* ── Информационная сетка ── */}
        <div className="py-12 sm:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">

          {/* Колонка 01: О нас */}
          <div>
            <span className="text-[9px] uppercase tracking-luxury opacity-25 block mb-6">
              01 — О нас
            </span>
            <p className="text-[13px] leading-[1.8] opacity-55 mb-8">
              Дарья Рутц — колорист с&nbsp;10-летним стажем. Люксовые окрашивания,
              уходы и&nbsp;профессиональное обучение.
            </p>
            <div className="flex flex-col gap-2.5">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-luxury opacity-35 hover:opacity-90 transition-luxury"
                >
                  {s.name}
                  <ArrowUpRight className="w-2.5 h-2.5" strokeWidth={1.5} />
                </a>
              ))}
              <p className="text-[9px] opacity-20 leading-relaxed mt-1">
                * Meta признана экстремистской организацией в РФ
              </p>
            </div>
          </div>

          {/* Колонка 02: Навигация */}
          <div>
            <span className="text-[9px] uppercase tracking-luxury opacity-25 block mb-6">
              02 — Разделы
            </span>
            <nav className="flex flex-col gap-3">
              {navLinks.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className="text-[13px] opacity-45 hover:opacity-95 transition-luxury leading-none"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Колонка 03: Контакты */}
          <div>
            <span className="text-[9px] uppercase tracking-luxury opacity-25 block mb-6">
              03 — Контакты
            </span>
            <div className="flex flex-col gap-6">
              <div>
                <p className="text-[9px] uppercase tracking-luxury opacity-25 mb-2">Адрес</p>
                <p className="text-[13px] leading-relaxed opacity-60">
                  Барнаул, ЖК Питер<br />
                  Павловский тракт, 162
                </p>
              </div>
              <div>
                <p className="text-[9px] uppercase tracking-luxury opacity-25 mb-2">Телефон</p>
                <a
                  href="tel:+79833962244"
                  className="text-[13px] opacity-60 hover:opacity-100 transition-luxury"
                >
                  +7 (983) 396-22-44
                </a>
              </div>
              <div>
                <p className="text-[9px] uppercase tracking-luxury opacity-25 mb-2">Часы работы</p>
                <p className="text-[13px] leading-relaxed opacity-60">
                  Пн – Вс: 10:00 – 20:00<br />
                  <span className="opacity-60">По предварительной записи</span>
                </p>
              </div>
            </div>
          </div>

          {/* Колонка 04: Запись */}
          <div>
            <span className="text-[9px] uppercase tracking-luxury opacity-25 block mb-6">
              04 — Запись
            </span>
            <p className="text-[13px] leading-relaxed opacity-45 mb-8">
              Запись только после&nbsp;личной консультации. Свяжитесь любым
              удобным способом.
            </p>
            <div className="flex flex-col gap-3">
              <Link
                href="https://dikidi.net/1348080?p=0.pi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-5 py-4 border border-background/20 rounded-2xl text-[11px] uppercase tracking-luxury transition-luxury hover:bg-background hover:text-foreground group"
              >
                Онлайн-запись
                <ArrowUpRight className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-luxury" strokeWidth={1.5} />
              </Link>
              <a
                href="https://t.me/rutzprostranstvo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-5 py-4 border border-background/10 rounded-2xl text-[11px] uppercase tracking-luxury opacity-40 hover:opacity-80 transition-luxury group"
              >
                Telegram
                <ArrowUpRight className="w-3.5 h-3.5 transition-luxury" strokeWidth={1.5} />
              </a>
              <a
                href="tel:+79833962244"
                className="flex items-center justify-between px-5 py-4 border border-background/10 rounded-2xl text-[11px] uppercase tracking-luxury opacity-40 hover:opacity-80 transition-luxury group"
              >
                Позвонить
                <ArrowUpRight className="w-3.5 h-3.5 transition-luxury" strokeWidth={1.5} />
              </a>
            </div>
          </div>

        </div>

        {/* ── Нижняя полоса ── */}
        <div className="border-t border-background/[0.08] py-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <p className="text-[11px] opacity-20">
            © {year} RUTZ Пространство красоты
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            <Link href="/privacy" className="text-[11px] opacity-20 hover:opacity-60 transition-luxury">
              Политика конфиденциальности
            </Link>
            <Link href="/terms" className="text-[11px] opacity-20 hover:opacity-60 transition-luxury">
              Пользовательское соглашение
            </Link>
            <Link href="/consent" className="text-[11px] opacity-20 hover:opacity-60 transition-luxury">
              Согласие на обработку данных
            </Link>
          </div>
        </div>

      </div>
    </footer>
  )
}
