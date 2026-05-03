import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { AnimateOnScroll } from '@/components/AnimateOnScroll'
import { RutzLogo } from '@/components/RutzLogo'
import { ArrowRight, ArrowUpRight } from 'lucide-react'

export const metadata: Metadata = {
  title: {
    absolute: 'RUTZ — Пространство красоты | Колорист Барнаул, Дарья Рутц',
  },
  description:
    'Профессиональное окрашивание в Барнауле: AirTouch, балаяж, выход из нежелательного цвета. 10 лет опыта. Запишитесь на бесплатную консультацию!',
  alternates: {
    canonical: 'https://rutz.beauty',
  },
  openGraph: {
    title: 'RUTZ — Пространство красоты | Колорист Барнаул, Дарья Рутц',
    description:
      'Профессиональное окрашивание в Барнауле: AirTouch, балаяж, выход из нежелательного цвета. 10 лет опыта. Запишитесь!',
    url: 'https://rutz.beauty',
    type: 'website',
  },
  twitter: {
    title: 'RUTZ — Пространство красоты | Колорист Барнаул, Дарья Рутц',
    description:
      'Профессиональное окрашивание в Барнауле: AirTouch, балаяж, выход из нежелательного цвета. 10 лет опыта.',
  },
}

const services = [
  {
    title: 'Окрашивание',
    desc: 'Классическое и альтернативное окрашивание. В каждую процедуру входит уход и укладка.',
    price: 'от 10 000 ₽',
  },
  {
    title: 'AirTouch / Балаяж',
    desc: 'Техники объёмного окрашивания для натурального, живого цвета.',
    price: 'от 19 500 ₽',
  },
  {
    title: 'Выход из нежелательного цвета',
    desc: 'Без порошка и без потери качества волос. Гарантированный результат.',
    price: 'от 25 000 ₽',
  },
  {
    title: 'Стрижка',
    desc: 'Авторская стрижка с учётом формы лица и структуры волос.',
    price: '3 000 ₽',
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen">

      {/* ── Hero ── */}
      <section className="relative min-h-[calc(100vh-57px)] flex flex-col items-center justify-center px-4 sm:px-8 py-20 overflow-hidden">
<div className="text-center max-w-5xl w-full">
          {/* Big logo */}
          <div className="flex justify-center mb-8 sm:mb-12">
            <RutzLogo
              variant="full"
              className="w-full max-w-[560px] sm:max-w-[720px] text-foreground animate-fade-in"
            />
          </div>

          <AnimateOnScroll animation="fade-up" delay={200}>
            <h1 className="sr-only">
              Колорист в Барнауле с 10-летним опытом | RUTZ Пространство красоты
            </h1>
            <p className="text-xs sm:text-sm uppercase tracking-luxury text-muted-foreground mb-10 sm:mb-14">
              Пространство красоты · Барнаул · 10 лет экспертизы
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up" delay={500}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://dikidi.net/1348080?p=0.pi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-foreground text-background px-8 sm:px-12 py-4 sm:py-5 rounded-2xl text-xs uppercase tracking-luxury transition-luxury hover:bg-foreground/80"
              >
                Записаться
                <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 border border-border/60 px-8 sm:px-12 py-4 sm:py-5 rounded-2xl text-xs uppercase tracking-luxury transition-luxury hover:bg-accent/60 glass-subtle"
              >
                Услуги и цены
                <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </Link>
            </div>
          </AnimateOnScroll>
        </div>

      </section>

      {/* ── Фото-секция ── */}
      <section className="py-16 sm:py-24 md:py-32 bg-accent/20 border-t border-b border-border">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <AnimateOnScroll animation="slide-left">
              <div className="relative h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden gallery-frame">
                <Image
                  src="/images/about/daria-rutz_1.jpg"
                  alt="Окрашивание волос в салоне RUTZ"
                  fill
                  className="object-cover grayscale-luxury"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="slide-right">
              <div className="space-y-6 sm:space-y-8">
                <span className="text-xs uppercase tracking-luxury text-muted-foreground">
                  О мастере
                </span>
                <h2 className="serif text-3xl sm:text-4xl md:text-5xl leading-tight">
                  Дарья Рутц
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  В профессию пришла с нуля — без наставников и финансовой поддержки.
                  Прошла путь от испорченных волос до идеального цвета через личные ошибки.
                  Именно этот опыт позволяет давать не эксперимент, а гарантированный результат.
                </p>
                <ul className="space-y-3">
                  {[
                    '10 лет практики — топ в сложных случаях',
                    'Эксперт выхода из нежелательных пигментов',
                    'Работа с сединой в классике и альтернативе',
                    'Открытие пространства RUTZ в 2024 году',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <span className="w-1 h-1 rounded-full bg-foreground flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-luxury border border-border/60 px-6 py-3 rounded-xl transition-luxury hover:bg-accent/60 glass-subtle"
                >
                  Узнать больше <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ── Принцип работы (KEY MESSAGE) ── */}
      <section className="py-16 sm:py-24 md:py-32 border-t border-border/40 bg-accent/20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
          <AnimateOnScroll animation="fade-up">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-xs uppercase tracking-luxury text-muted-foreground mb-6 block">
                Важно знать
              </span>
              <h2 className="serif text-3xl sm:text-4xl md:text-5xl mb-8 leading-snug">
                Запись на окрашивание возможна только после личной консультации
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-10">
                Чтобы результат превзошёл ожидания, а волосы остались здоровыми,
                мы начинаем с личной консультации — онлайн или в салоне.
                Только после анализа ваших волос и обсуждения всех деталей
                я бронирую время на окрашивание.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto mb-10">
                {[
                  'Диагностика структуры волос',
                  'Выявление «сюрпризов» (старый пигмент)',
                  'Точный план достижения вашего цвета',
                  'Фиксированная цена, которая не вырастет',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-1.5 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
              <Link
                href="https://dikidi.net/1348080?p=0.pi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-luxury hover:gap-4 transition-all duration-300"
              >
                Записаться на консультацию
                <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── Услуги ── */}
      <section className="py-16 sm:py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
          <AnimateOnScroll animation="fade-up">
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 sm:mb-16 gap-4">
              <div>
                <span className="text-xs uppercase tracking-luxury text-muted-foreground mb-3 block">
                  Прайс-лист
                </span>
                <h2 className="serif text-3xl sm:text-4xl md:text-5xl">Услуги</h2>
              </div>
              <Link
                href="/services"
                className="flex items-center gap-2 text-xs uppercase tracking-luxury text-muted-foreground hover:text-foreground transition-luxury"
              >
                Все услуги <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </Link>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {services.map((s, i) => (
              <AnimateOnScroll key={s.title} animation="fade-up" delay={i * 100}>
                <div className="glass-card p-6 sm:p-8 h-full flex flex-col gap-4 group hover-lift">
                  <span className="text-xs text-muted-foreground tracking-luxury">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="serif text-xl sm:text-2xl">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">{s.desc}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-border/50">
                    <span className="serif text-lg">{s.price}</span>
                    <Link
                      href="/services"
                      className="text-muted-foreground group-hover:text-foreground transition-luxury"
                    >
                      <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                    </Link>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── Обучение ── */}
      <section className="py-16 sm:py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <AnimateOnScroll animation="fade-up">
              <span className="text-xs uppercase tracking-luxury text-muted-foreground mb-4 block">
                Для профессионалов
              </span>
              <h2 className="serif text-3xl sm:text-4xl md:text-5xl mb-6">
                Обучение колористике
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
                Я вложила 1 000 000 рублей в свои знания и передаю их тем,
                кто готов учиться серьёзно. Попасть на обучение можно только
                после бесплатного онлайн-собеседования.
              </p>
              <Link
                href="/education"
                className="inline-flex items-center gap-2 bg-foreground text-background px-8 sm:px-12 py-4 sm:py-5 rounded-2xl text-xs uppercase tracking-luxury transition-luxury hover:bg-foreground/80"
              >
                Узнать об обучении <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </Link>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ── Running text ── */}
      <div className="border-t border-b border-border py-5 overflow-hidden bg-foreground text-background">
        <div className="animate-marquee whitespace-nowrap flex gap-8">
          {Array(2).fill(null).map((_, idx) => (
            <span key={idx} className="flex gap-8">
              {['Окрашивание', 'AirTouch', 'Балаяж', 'Выход из нежелательного цвета', 'Мелирование', 'Стрижка', 'Обучение', 'Консультация'].map((item) => (
                <span key={item} className="text-xs uppercase tracking-luxury">
                  {item} <span className="mx-4 opacity-40">·</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* ── CTA ── */}
      <section className="py-20 sm:py-28 md:py-40">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 text-center">
          <AnimateOnScroll animation="fade-up">
            <h2 className="serif text-4xl sm:text-5xl md:text-6xl mb-6 sm:mb-8">
              Готовы к преображению?
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed">
              Запишитесь на консультацию и получите индивидуальный план окрашивания
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://dikidi.net/1348080?p=0.pi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-foreground text-background px-10 sm:px-14 py-5 sm:py-6 rounded-2xl text-xs uppercase tracking-luxury transition-luxury hover:bg-foreground/80"
              >
                Записаться онлайн
                <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
              </Link>
              <Link
                href="https://t.me/rutzprostranstvo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-border/60 px-10 sm:px-14 py-5 sm:py-6 rounded-2xl text-xs uppercase tracking-luxury transition-luxury hover:bg-accent/60 glass-subtle"
              >
                Написать в Telegram
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  )
}
