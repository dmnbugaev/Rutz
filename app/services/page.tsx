import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { AnimateOnScroll } from '@/components/AnimateOnScroll'
import { ArrowRight, ArrowUpRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Услуги и цены — Окрашивание, Балаяж, AirTouch Барнаул',
  description:
    'Прайс RUTZ Барнаул: окрашивание от 10 000 ₽, AirTouch и балаяж от 19 500 ₽, выход из нежелательного цвета от 25 000 ₽. Уход и укладка включены!',
  alternates: {
    canonical: 'https://rutz.beauty/services',
  },
  openGraph: {
    title: 'Услуги и цены — Окрашивание, Балаяж, AirTouch Барнаул | RUTZ',
    description:
      'Прайс RUTZ Барнаул: окрашивание от 10 000 ₽, AirTouch и балаяж от 19 500 ₽, выход из нежелательного цвета от 25 000 ₽. Уход и укладка включены!',
    url: 'https://rutz.beauty/services',
    type: 'website',
  },
  twitter: {
    title: 'Услуги и цены — Окрашивание, Балаяж, AirTouch Барнаул',
    description:
      'Прайс RUTZ Барнаул: окрашивание от 10 000 ₽, AirTouch и балаяж от 19 500 ₽, выход из нежелательного цвета от 25 000 ₽.',
  },
}

const categories = [
  {
    id: 'consultation',
    title: 'Консультация',
    desc: 'Я не работаю вслепую. Начинаем с личной консультации: диагностика структуры, проверка истории волос, точный план и фиксированная цена.',
    note: 'Без фото из WhatsApp · Только очно',
    image: '/image/IMG_9478.jpg',
    imageAlt: 'Консультация',
    services: [
      { name: 'Диагностика структуры волос', price: 'Бесплатно' },
      { name: 'Проверка на «сюрпризы» (старый пигмент)', price: 'Бесплатно' },
      { name: 'Точный план достижения вашего цвета', price: 'Бесплатно' },
      { name: 'Фиксированная цена процедуры', price: 'Гарантия' },
    ],
  },
  {
    id: 'coloring',
    title: 'Окрашивание',
    desc: 'Классическое и альтернативное окрашивание: тонирование, матирование, камуфляж, баня. В каждую процедуру входит УХОД + УКЛАДКА по форме стрижки бесплатно.',
    note: 'УХОД + УКЛАДКА — включены',
    image: '/image/IMG_9488.jpg',
    imageAlt: 'Окрашивание волос',
    services: [
      { name: 'Окрашивание / Тонирование', price: 'от 10 000 ₽' },
      { name: 'Альтернатива (матирование, камуфляж, баня)', price: 'от 10 000 ₽' },
    ],
  },
  {
    id: 'techniques',
    title: 'Техники окрашивания',
    desc: 'AirTouch, Мелирование (рельеф), Балаяж, Начёс (шатуш). Работа с учётом индивидуальных особенностей ваших волос. Включает УХОД + УКЛАДКА.',
    note: 'УХОД + УКЛАДКА — включены',
    image: '/image/IMG_9501.jpg',
    imageAlt: 'Техники окрашивания',
    services: [
      { name: 'AirTouch', price: 'от 19 500 ₽' },
      { name: 'Мелирование (рельеф)', price: 'от 19 500 ₽' },
      { name: 'Балаяж', price: 'от 19 500 ₽' },
      { name: 'Начёс (шатуш)', price: 'от 19 500 ₽' },
    ],
  },
  {
    id: 'correction',
    title: 'Выход из нежелательного цвета',
    desc: 'Эксперт метода по выходу из нежелательных пигментов и чёрного цвета. Без порошка и без потери качества волос. Гарантированный результат на основе 10-летнего опыта.',
    note: 'Без порошка · Без потери качества',
    image: '/image/IMG_9504.jpg',
    imageAlt: 'Выход из нежелательного цвета',
    services: [
      { name: 'Выход из нежелательного цвета', price: 'от 25 000 ₽' },
    ],
  },
  {
    id: 'haircut',
    title: 'Стрижка и укладка',
    desc: 'Авторские стрижки с учётом формы лица и структуры волос. Профессиональные укладки для любого образа.',
    note: null,
    image: '/image/IMG_9507.jpg',
    imageAlt: 'Стрижка',
    services: [
      { name: 'Стрижка', price: '3 000 ₽' },
      { name: 'Укладка', price: 'от 3 000 ₽' },
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
    <div className="min-h-screen">

      {/* ── Hero ── */}
      <section className="min-h-[calc(100vh-57px)] flex items-center border-b border-border">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 w-full">
          <AnimateOnScroll animation="fade-up" className="text-center">
            <span className="text-xs uppercase tracking-luxury text-muted-foreground block mb-4">
              Прайс-лист
            </span>
            <h1 className="serif text-5xl sm:text-6xl md:text-7xl mb-6">
              Услуги
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Альтернативная колористика от эксперта с 10-летним опытом.
              В каждую процедуру окрашивания входит уход и укладка — бесплатно.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── Важное уведомление ── */}
      <section className="border-b border-border bg-accent/30">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 py-10 sm:py-14">
          <AnimateOnScroll animation="fade-up">
            <div className="max-w-3xl">
              <div className="flex gap-6 items-start">
                <div className="w-0.5 bg-foreground self-stretch flex-shrink-0" />
                <div>
                  <h2 className="serif text-2xl sm:text-3xl mb-4">Важно!</h2>
                  <p className="text-muted-foreground leading-relaxed mb-2">
                    Я не работаю вслепую. Чтобы результат превзошёл ожидания, а волосы остались здоровыми,
                    мы начинаем с личной консультации (онлайн или в салоне).
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Только после анализа ваших волос и обсуждения всех деталей я бронирую время на окрашивание.
                  </p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── Категории услуг ── */}
      <section className="py-16 sm:py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 space-y-20 sm:space-y-28 md:space-y-36">
          {categories.map((cat, i) => (
            <div key={cat.id}>
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start ${i % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                {/* Image */}
                <AnimateOnScroll animation={i % 2 === 0 ? 'slide-left' : 'slide-right'}>
                  <div className={`relative h-[300px] sm:h-[400px] md:h-[520px] overflow-hidden gallery-frame ${i % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <Image
                      src={cat.image}
                      alt={cat.imageAlt}
                      fill
                      className="object-cover grayscale-luxury"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </AnimateOnScroll>

                {/* Content */}
                <AnimateOnScroll animation={i % 2 === 0 ? 'slide-right' : 'slide-left'}>
                  <div className="space-y-6 sm:space-y-8 lg:py-4">
                    <div>
                      <span className="text-xs text-muted-foreground tracking-luxury">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <h2 className="serif text-3xl sm:text-4xl md:text-5xl mt-2 mb-4">{cat.title}</h2>
                      <p className="text-muted-foreground leading-relaxed">{cat.desc}</p>
                      {cat.note && (
                        <p className="text-xs uppercase tracking-luxury text-muted-foreground mt-3 font-medium">
                          {cat.note}
                        </p>
                      )}
                    </div>

                    {/* Price table */}
                    <div className="border-t border-b border-border py-6 space-y-0">
                      {cat.services.map((srv) => (
                        <div
                          key={srv.name}
                          className="flex items-baseline justify-between py-3 gap-4 border-b border-border/50 last:border-0"
                        >
                          <span className="text-sm">{srv.name}</span>
                          <span className="serif text-base whitespace-nowrap text-muted-foreground">
                            {srv.price}
                          </span>
                        </div>
                      ))}
                    </div>

                    <Link
                      href="https://dikidi.net/1348080?p=0.pi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs uppercase tracking-luxury transition-luxury hover:gap-4 duration-300"
                    >
                      Записаться <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
                    </Link>
                  </div>
                </AnimateOnScroll>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Итоговая таблица ── */}
      <section className="py-16 sm:py-24 bg-accent/20 border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-8">
          <AnimateOnScroll animation="fade-up">
            <h2 className="serif text-3xl sm:text-4xl text-center mb-10">
              Сводный прайс-лист
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-up" delay={200}>
            <div className="border border-border">
              {[
                { name: 'Консультация', price: 'Бесплатно' },
                { name: 'Окрашивание / тонирование', price: 'от 10 000 ₽' },
                { name: 'Альтернатива (матирование, камуфляж)', price: 'от 10 000 ₽' },
                { name: 'AirTouch', price: 'от 19 500 ₽' },
                { name: 'Мелирование (рельеф)', price: 'от 19 500 ₽' },
                { name: 'Балаяж', price: 'от 19 500 ₽' },
                { name: 'Начёс (шатуш)', price: 'от 19 500 ₽' },
                { name: 'Выход из нежелательного цвета', price: 'от 25 000 ₽' },
                { name: 'Стрижка', price: '3 000 ₽' },
                { name: 'Укладка', price: 'от 3 000 ₽' },
              ].map((item, i) => (
                <div
                  key={item.name}
                  className={`flex items-center justify-between px-6 py-4 gap-4 ${i < 9 ? 'border-b border-border' : ''}`}
                >
                  <span className="text-sm">{item.name}</span>
                  <span className="serif text-base text-muted-foreground whitespace-nowrap">{item.price}</span>
                </div>
              ))}
              <div className="px-6 py-4 bg-accent/30 border-t border-border">
                <p className="text-xs text-muted-foreground">
                  * В процедуры окрашивания входят уход и укладка по форме стрижки — бесплатно.
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 sm:py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 text-center">
          <AnimateOnScroll animation="fade-up">
            <h2 className="serif text-3xl sm:text-4xl md:text-5xl mb-6">
              Готовы к преображению?
            </h2>
            <p className="text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed">
              Запишитесь на консультацию — это бесплатно и без обязательств
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://dikidi.net/1348080?p=0.pi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-foreground text-background px-10 py-5 rounded-2xl text-xs uppercase tracking-luxury transition-luxury hover:bg-foreground/80"
              >
                Записаться онлайн <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
              </Link>
              <Link
                href="https://t.me/rutzprostranstvo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-border/60 px-10 py-5 rounded-2xl text-xs uppercase tracking-luxury transition-luxury hover:bg-accent/60 glass-subtle"
              >
                Написать в Telegram <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: 'Услуги пространства красоты RUTZ',
          url: 'https://rutz.beauty/services',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              item: {
                '@type': 'Service',
                name: 'Консультация колориста',
                description: 'Диагностика структуры волос, план достижения цвета. Бесплатно.',
                provider: { '@type': 'BeautySalon', name: 'RUTZ Пространство красоты' },
                offers: { '@type': 'Offer', price: '0', priceCurrency: 'RUB' },
              },
            },
            {
              '@type': 'ListItem',
              position: 2,
              item: {
                '@type': 'Service',
                name: 'Окрашивание волос',
                description: 'Классическое и альтернативное окрашивание. Уход и укладка включены.',
                provider: { '@type': 'BeautySalon', name: 'RUTZ Пространство красоты' },
                offers: { '@type': 'Offer', price: '10000', priceCurrency: 'RUB' },
              },
            },
            {
              '@type': 'ListItem',
              position: 3,
              item: {
                '@type': 'Service',
                name: 'AirTouch / Балаяж / Мелирование',
                description: 'Техники объёмного окрашивания для натурального живого цвета.',
                provider: { '@type': 'BeautySalon', name: 'RUTZ Пространство красоты' },
                offers: { '@type': 'Offer', price: '19500', priceCurrency: 'RUB' },
              },
            },
            {
              '@type': 'ListItem',
              position: 4,
              item: {
                '@type': 'Service',
                name: 'Выход из нежелательного цвета',
                description: 'Без порошка, без потери качества. Гарантированный результат.',
                provider: { '@type': 'BeautySalon', name: 'RUTZ Пространство красоты' },
                offers: { '@type': 'Offer', price: '25000', priceCurrency: 'RUB' },
              },
            },
            {
              '@type': 'ListItem',
              position: 5,
              item: {
                '@type': 'Service',
                name: 'Стрижка',
                description: 'Авторская стрижка с учётом формы лица и структуры волос.',
                provider: { '@type': 'BeautySalon', name: 'RUTZ Пространство красоты' },
                offers: { '@type': 'Offer', price: '3000', priceCurrency: 'RUB' },
              },
            },
          ],
        }),
      }}
    />
    </>
  )
}
