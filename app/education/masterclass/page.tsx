import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { AnimateOnScroll } from '@/components/AnimateOnScroll'
import { ArrowRight, ArrowUpRight, Calendar, CheckCircle, MapPin, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Мастер-класс: Выход из нежелательных оттенков — Дарья Рутц, 20 июня',
  description:
    'Мастер-класс Дарьи Рутц — как безопасно выйти из нежелательных оттенков, сохранив качество волос и сократить посещение салонов. Барнаул, 20 июня.',
  alternates: {
    canonical: 'https://rutz.beauty/education/masterclass',
  },
  openGraph: {
    title: 'Мастер-класс: Выход из нежелательных оттенков | RUTZ',
    description:
      'Дарья Рутц проведёт мастер-класс о том, как безопасно выйти из нежелательных оттенков, сохранив качество волос. 20 июня, Барнаул.',
    url: 'https://rutz.beauty/education/masterclass',
    type: 'website',
  },
  twitter: {
    title: 'Мастер-класс: Выход из нежелательных оттенков — Дарья Рутц',
    description:
      'Как безопасно выйти из нежелательных оттенков, сохранив качество волос. 20 июня, Барнаул.',
  },
}

const program = [
  {
    num: '01',
    title: 'Диагностика и анализ',
    desc: 'Как правильно определить структуру волоса и оценить «историю» пигмента. Инструменты и методы профессионального анализа.',
  },
  {
    num: '02',
    title: 'Безопасный выход без порошка',
    desc: 'Авторская методика выхода из нежелательных оттенков без агрессивных средств. Как сохранить структуру волоса в процессе.',
  },
  {
    num: '03',
    title: 'Поддержание результата дома',
    desc: 'Что делать между визитами в салон, чтобы цвет держался дольше. Домашний уход и профессиональные рекомендации.',
  },
  {
    num: '04',
    title: 'Сокращение визитов в салон',
    desc: 'Как правильно выстроить долгосрочный план окрашивания, чтобы реже бывать у мастера без ущерба для качества.',
  },
]

const forWhom = [
  'Хотите избавиться от нежелательного цвета без ущерба для волос',
  'Устали от частых визитов в салон и ищете способ продлить результат',
  'Хотите понять, как устроена профессиональная работа с цветом',
  'Интересуетесь альтернативной колористикой и современными техниками',
  'Планируете самостоятельно поддерживать цвет между процедурами',
]

export default function MasterclassPage() {
  return (
    <>
      <div className="min-h-screen">

        {/* ── Hero ── */}
        <section className="relative min-h-[calc(100vh-57px)] flex items-center border-b border-border overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-8 w-full">
            <AnimateOnScroll animation="fade-up" className="text-center">
              <div className="flex items-center justify-center gap-2 mb-6">
                <Calendar className="w-4 h-4 text-muted-foreground" strokeWidth={1.5} />
                <span className="text-xs uppercase tracking-luxury text-muted-foreground">
                  20 июня · Барнаул
                </span>
              </div>
              <h1 className="serif text-5xl sm:text-6xl md:text-7xl mb-6 max-w-4xl mx-auto leading-tight">
                Выход из нежелательных оттенков
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10">
                Мастер-класс Дарьи Рутц — эксперта по выходу из нежелательных пигментов.
                Как сохранить качество волос и при этом сократить посещение салонов красоты.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="https://t.me/rutzprostranstvo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-foreground text-background px-8 sm:px-12 py-4 sm:py-5 rounded-2xl text-xs uppercase tracking-luxury transition-luxury hover:bg-foreground/80"
                >
                  Записаться в Telegram
                  <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
                </Link>
                <a
                  href="#program"
                  className="inline-flex items-center justify-center gap-2 border border-border/60 px-8 sm:px-12 py-4 sm:py-5 rounded-2xl text-xs uppercase tracking-luxury transition-luxury hover:bg-accent/60 glass-subtle"
                >
                  Программа <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                </a>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* ── О мастер-классе ── */}
        <section className="py-16 sm:py-24 md:py-32 bg-accent/20 border-b border-border">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
              <AnimateOnScroll animation="slide-left">
                <div className="relative h-[400px] sm:h-[520px] overflow-hidden gallery-frame">
                  <Image
                    src="/images/master/IMG_5579.JPG"
                    alt="Мастер-класс Дарьи Рутц — выход из нежелательных оттенков"
                    fill
                    className="object-cover grayscale-luxury"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll animation="slide-right">
                <div className="space-y-6 lg:pt-6">
                  <span className="text-xs uppercase tracking-luxury text-muted-foreground">
                    О мастер-классе
                  </span>
                  <h2 className="serif text-3xl sm:text-4xl md:text-5xl leading-tight">
                    Дарья Рутц
                  </h2>
                  <p className="text-sm uppercase tracking-luxury text-muted-foreground">
                    Колорист · Эксперт по выходу из нежелательных оттенков · Основатель RUTZ
                  </p>

                  <blockquote className="border-l-4 border-foreground pl-6 py-2">
                    <p className="text-muted-foreground leading-relaxed">
                      Дарья Рутц — колорист, эксперт по выходу из нежелательных оттенков и основатель
                      собственного пространства красоты. 20 июня проведёт мастер-класс о том, как
                      безопасно выйти из нежелательных оттенков, сохранив качество волос и при этом
                      сократить посещение салонов красоты.
                    </p>
                  </blockquote>

                  <div className="space-y-3 pt-2">
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 flex-shrink-0" strokeWidth={1.5} />
                      <span>20 июня 2025 года</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 flex-shrink-0" strokeWidth={1.5} />
                      <span>RUTZ Пространство красоты, Павловский тракт, 162, ЖК Питер, Барнаул</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 flex-shrink-0" strokeWidth={1.5} />
                      <span>Уточняйте время при записи</span>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* ── Видео ── */}
        <section className="py-16 sm:py-24 md:py-32">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
            <AnimateOnScroll animation="fade-up">
              <div className="text-center mb-10 sm:mb-14">
                <span className="text-xs uppercase tracking-luxury text-muted-foreground mb-4 block">
                  Превью
                </span>
                <h2 className="serif text-3xl sm:text-4xl md:text-5xl">
                  Посмотрите как это выглядит
                </h2>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-up" delay={150}>
              <div className="max-w-3xl mx-auto gallery-frame overflow-hidden">
                <video
                  src="/images/master/IMG_5557.mp4"
                  controls
                  playsInline
                  className="w-full h-auto"
                  poster="/images/master/IMG_5579.JPG"
                />
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* ── Программа ── */}
        <section id="program" className="py-16 sm:py-24 md:py-32 bg-accent/20 border-t border-b border-border">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
            <AnimateOnScroll animation="fade-up">
              <div className="text-center mb-12 sm:mb-16">
                <span className="text-xs uppercase tracking-luxury text-muted-foreground mb-4 block">
                  Содержание
                </span>
                <h2 className="serif text-3xl sm:text-4xl md:text-5xl mb-4">
                  Программа мастер-класса
                </h2>
                <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
                  Разберём весь процесс — от диагностики волос до долгосрочного плана поддержания цвета
                </p>
              </div>
            </AnimateOnScroll>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border">
              {program.map((item, i) => (
                <AnimateOnScroll key={item.num} animation="fade-up" delay={i * 100}>
                  <div className="bg-background p-7 sm:p-10 space-y-4">
                    <span className="serif text-3xl sm:text-4xl text-muted-foreground/40">{item.num}</span>
                    <h3 className="serif text-xl sm:text-2xl">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* ── Для кого ── */}
        <section className="py-16 sm:py-24 md:py-32">
          <div className="max-w-3xl mx-auto px-4 sm:px-8">
            <AnimateOnScroll animation="fade-up">
              <div className="border border-border bg-background p-8 sm:p-12 md:p-16">
                <h2 className="serif text-2xl sm:text-3xl md:text-4xl mb-6 text-center">
                  Для кого этот мастер-класс
                </h2>
                <p className="text-muted-foreground text-center mb-8 leading-relaxed">
                  Мастер-класс подойдёт всем, кто хочет лучше понять свои волосы
                  и научиться управлять цветом без ущерба для их здоровья
                </p>
                <ul className="space-y-4">
                  {forWhom.map((item) => (
                    <li key={item} className="flex gap-4 items-start">
                      <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-foreground" strokeWidth={1} />
                      <p className="text-sm text-muted-foreground leading-relaxed">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* ── О преподавателе ── */}
        <section className="py-16 sm:py-24 md:py-32 bg-accent/20 border-t border-b border-border">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
            <div className="max-w-3xl mx-auto">
              <AnimateOnScroll animation="fade-up">
                <span className="text-xs uppercase tracking-luxury text-muted-foreground mb-4 block text-center">
                  Ведущая мастер-класса
                </span>
                <h2 className="serif text-3xl sm:text-4xl md:text-5xl mb-8 text-center">
                  Дарья Рутц
                </h2>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-up" delay={100}>
                <blockquote className="border-l-4 border-foreground pl-6 py-2 mb-8">
                  <p className="text-muted-foreground leading-relaxed italic">
                    «Я прошла путь в профессию с самого нуля, полагаясь только на собственное упорство
                    и постоянную практику. Годы глубокого погружения в колористику и огромная
                    насмотренность позволяют мне сегодня не экспериментировать, а гарантировать
                    результат. Я убеждена, что шаблонных решений не существует: каждый клиент уникален,
                    поэтому я создаю индивидуальные рецепты окрашивания, которые подчёркивают именно
                    вашу природную красоту.»
                  </p>
                </blockquote>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-up" delay={150}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    '10 лет практики в колористике',
                    'Эксперт выхода из нежелательных пигментов и чёрного цвета без порошка',
                    'Вложила более 1 000 000 ₽ в профессиональное развитие',
                    'Основатель RUTZ Пространства красоты в Барнауле',
                    'Обучалась у топовых колористов России',
                    'Автор работы с сединой в классической и альтернативной колористике',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-1.5 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-up" delay={200}>
                <div className="text-center mt-8">
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-luxury border border-border/60 px-6 py-3 rounded-xl transition-luxury hover:bg-accent/60 glass-subtle"
                  >
                    Подробнее об авторе <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                  </Link>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-16 sm:py-24 md:py-32">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-8 text-center">
            <AnimateOnScroll animation="fade-up">
              <span className="text-xs uppercase tracking-luxury text-muted-foreground mb-4 block">
                20 июня · Барнаул
              </span>
              <h2 className="serif text-3xl sm:text-4xl md:text-5xl mb-6">
                Хотите попасть на мастер-класс?
              </h2>
              <p className="text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed">
                Напишите в Telegram — уточним детали, время и стоимость участия
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="https://t.me/rutzprostranstvo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-foreground text-background px-10 py-5 rounded-2xl text-xs uppercase tracking-luxury transition-luxury hover:bg-foreground/80"
                >
                  Записаться в Telegram
                  <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
                </Link>
                <Link
                  href="/education"
                  className="inline-flex items-center justify-center gap-2 border border-border/60 px-10 py-5 rounded-2xl text-xs uppercase tracking-luxury transition-luxury hover:bg-accent/60 glass-subtle"
                >
                  Другие форматы обучения
                  <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
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
            '@type': 'Event',
            name: 'Мастер-класс: Выход из нежелательных оттенков',
            description:
              'Мастер-класс Дарьи Рутц о том, как безопасно выйти из нежелательных оттенков, сохранив качество волос и сократить посещение салонов красоты.',
            url: 'https://rutz.beauty/education/masterclass',
            startDate: '2025-06-20',
            eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
            eventStatus: 'https://schema.org/EventScheduled',
            location: {
              '@type': 'Place',
              name: 'RUTZ Пространство красоты',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Павловский тракт, 162',
                addressLocality: 'Барнаул',
                addressCountry: 'RU',
              },
            },
            organizer: {
              '@type': 'Person',
              name: 'Дарья Рутц',
              url: 'https://rutz.beauty/about',
            },
          }),
        }}
      />
    </>
  )
}
