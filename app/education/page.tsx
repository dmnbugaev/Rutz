import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { AnimateOnScroll } from '@/components/AnimateOnScroll'
import { ArrowRight, ArrowUpRight, Check, CheckCircle, GraduationCap } from 'lucide-react'
import { TEACHERS } from '@/lib/constants'
//sdfsdf
export const metadata: Metadata = {
  title: 'Обучение колористике у Дарьи Рутц — Барнаул и онлайн',
  description:
    'Обучение альтернативной колористике у Дарьи Рутц — 10 лет опыта. Только после собеседования. AirTouch, балаяж, работа с сединой. Запишитесь!',
  alternates: {
    canonical: 'https://rutz.beauty/education',
  },
  openGraph: {
    title: 'Обучение колористике у Дарьи Рутц — Барнаул и онлайн | RUTZ',
    description:
      'Обучение альтернативной колористике у Дарьи Рутц — 10 лет опыта. Только после собеседования. AirTouch, балаяж, работа с сединой.',
    url: 'https://rutz.beauty/education',
    type: 'website',
  },
  twitter: {
    title: 'Обучение колористике у Дарьи Рутц — Барнаул и онлайн',
    description:
      'Обучение альтернативной колористике — 10 лет опыта. Только после собеседования. AirTouch, балаяж, работа с сединой.',
  },
}

const achievements = [
  'Эксперт метода по выходу из нежелательных пигментов и чёрного цвета без порошка',
  'Автор работы с сединой как в классической, так и в альтернативной колористике',
  'Открытие пространства красоты RUTZ в 2024 году',
  'Построение личного бренда в индустрии красоты',
]

const steps = [
  {
    num: '01',
    title: 'Подайте заявку',
    desc: 'Напишите мне в Telegram или запишитесь через форму. Укажите ваш опыт и цели.',
  },
  {
    num: '02',
    title: 'Бесплатное собеседование',
    desc: 'Онлайн-встреча, на которой обсудим ваш опыт, цели и подберём подходящий формат обучения.',
  },
  {
    num: '03',
    title: 'Попадание в группу',
    desc: 'После собеседования вы либо попадаете в группу, либо получаете рекомендации для подготовки.',
  },
  {
    num: '04',
    title: 'Обучение',
    desc: 'Практические занятия с разбором реальных кейсов. Гарантированный результат для ваших клиентов.',
  },
]

export default function EducationPage() {
  return (
    <>
    <div className="min-h-screen">

      {/* ── Hero ── */}
      <section className="relative min-h-[calc(100vh-57px)] flex items-center border-b border-border overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 w-full">
          <AnimateOnScroll animation="fade-up" className="text-center">
            <span className="text-xs uppercase tracking-luxury text-muted-foreground block mb-4">
              Для профессионалов
            </span>
            <h1 className="serif text-5xl sm:text-6xl md:text-7xl mb-6">
              Обучение колористике в Барнауле
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Альтернативная колористика от эксперта с 10-летним опытом.
              Обучение возможно только после бесплатного собеседования, на котором
              мы определим ваш уровень и подберём программу.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── Преподаватель ── */}
      <section className="py-16 sm:py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">
            <AnimateOnScroll animation="slide-left">
              <div className="relative h-[400px] sm:h-[520px] md:h-[620px] overflow-hidden gallery-frame">
                <Image
                  src="/images/portfolio/IMG_9491.jpg"
                  alt="Дарья Рутц — преподаватель"
                  fill
                  className="object-cover grayscale-luxury"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="slide-right">
              <div className="space-y-6 lg:pt-6">
                <span className="text-xs uppercase tracking-luxury text-muted-foreground">Преподаватель</span>
                <h2 className="serif text-3xl sm:text-4xl md:text-5xl">Дарья Рутц</h2>
                <p className="text-sm uppercase tracking-luxury text-muted-foreground">
                  Колорист с 10-летним опытом · Топ в сложных случаях
                </p>

                <blockquote className="border-l-4 border-foreground pl-6 py-2">
                  <p className="text-muted-foreground leading-relaxed italic">
                    «Я прошла путь в профессию с самого нуля, полагаясь только на собственное упорство и постоянную практику. Годы глубокого погружения в колористику и огромная насмотренность позволяют мне сегодня не экспериментировать, а гарантировать результат. Я убеждена, что шаблонных решений не существует: каждый клиент уникален, поэтому я создаю индивидуальные рецепты окрашивания, которые подчеркивают именно вашу природную красоту.»
                  </p>
                </blockquote>

                <p className="text-muted-foreground leading-relaxed">
                  Я вложила <strong>1 000 000 рублей</strong> в свои знания и передаю
                  их тем, кто готов учиться серьёзно. 10 лет практики — это ваша гарантия безопасности и предсказуемого результата.
                </p>

                <div className="space-y-3">
                  {achievements.map((item) => (
                    <div key={item} className="flex gap-3 items-start">
                      <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-foreground" strokeWidth={1} />
                      <p className="text-sm text-muted-foreground leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ── Учителя ── */}
      <section className="py-12 sm:py-16 md:py-24 bg-accent/20 border-t border-b border-border">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-10 sm:mb-14">
              <h2 className="serif text-2xl sm:text-3xl md:text-4xl mb-3">
                Обучалась у топовых колористов
              </h2>
              <p className="text-sm text-muted-foreground">
                Вложила более 1 000 000 ₽ в профессиональное развитие
              </p>
            </div>
          </AnimateOnScroll>
          <div className="flex flex-wrap justify-center gap-3">
            {TEACHERS.map((teacher, i) => (
              <AnimateOnScroll key={teacher} animation="fade-up" delay={i * 60}>
                <div className="border border-border px-5 py-3 text-sm text-muted-foreground">
                  {teacher}
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── Как попасть ── */}
      <section className="py-16 sm:py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-12 sm:mb-16">
              <GraduationCap className="w-12 h-12 mx-auto mb-6 text-muted-foreground" strokeWidth={1} />
              <h2 className="serif text-3xl sm:text-4xl md:text-5xl mb-4">
                Как попасть на обучение
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Стать учеником можно только после собеседования — чтобы обучение
                было максимально полезным именно для вас
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border mb-12 sm:mb-16">
            {steps.map((step, i) => (
              <AnimateOnScroll key={step.num} animation="fade-up" delay={i * 100}>
                <div className="bg-background p-7 sm:p-9 space-y-4">
                  <span className="serif text-3xl sm:text-4xl text-muted-foreground/40">{step.num}</span>
                  <h3 className="serif text-xl">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── Детали собеседования ── */}
      <section className="py-16 sm:py-24 border-t border-border bg-accent/20">
        <div className="max-w-3xl mx-auto px-4 sm:px-8">
          <AnimateOnScroll animation="fade-up">
            <div className="border border-border bg-background p-8 sm:p-12 md:p-16">
              <h2 className="serif text-2xl sm:text-3xl md:text-4xl mb-6 text-center">
                Что происходит на собеседовании
              </h2>
              <p className="text-muted-foreground text-center mb-8 leading-relaxed">
                Бесплатная онлайн-встреча, после которой вы точно поймёте,
                подходит ли вам это обучение
              </p>

              <ul className="space-y-4 mb-10">
                {[
                  'Обсудим ваш текущий опыт — нужен ли базовый курс или сразу продвинутый',
                  'Я расскажу, чему именно вы научитесь, и покажу результаты учеников',
                  'Вы поймёте, подходит ли вам мой стиль преподавания',
                ].map((item) => (
                  <li key={item} className="flex gap-4 items-start">
                    <span className="w-5 h-5 border border-foreground flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3" strokeWidth={2} />
                    </span>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>

              <div className="border-l-4 border-foreground pl-6 py-3 mb-10">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong>Результат:</strong> вы либо попадаете в группу, либо получаете
                  рекомендации, что подучить предварительно, чтобы не тратить деньги зря.
                </p>
              </div>

              <div className="text-center">
                <Link
                  href="https://t.me/rutzprostranstvo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-foreground text-background px-8 sm:px-12 py-4 sm:py-5 rounded-2xl text-xs uppercase tracking-luxury transition-luxury hover:bg-foreground/80"
                >
                  Записаться на собеседование
                  <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
                </Link>
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
              Готовы учиться серьёзно?
            </h2>
            <p className="text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed">
              Напишите мне — и мы договоримся о бесплатном собеседовании
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://t.me/rutzprostranstvo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-foreground text-background px-10 py-5 rounded-2xl text-xs uppercase tracking-luxury transition-luxury hover:bg-foreground/80"
              >
                Написать в Telegram <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
              </Link>
              <Link
                href="/contacts"
                className="inline-flex items-center justify-center gap-2 border border-border/60 px-10 py-5 rounded-2xl text-xs uppercase tracking-luxury transition-luxury hover:bg-accent/60 glass-subtle"
              >
                Контакты <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
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
          '@type': 'Course',
          name: 'Обучение альтернативной колористике',
          description:
            'Авторский курс Дарьи Рутц по альтернативной колористике: AirTouch, балаяж, выход из нежелательного цвета, работа с сединой. Только после собеседования.',
          url: 'https://rutz.beauty/education',
          provider: {
            '@type': 'Person',
            name: 'Дарья Рутц',
            url: 'https://rutz.beauty/about',
          },
          hasCourseInstance: [
            {
              '@type': 'CourseInstance',
              courseMode: ['onsite', 'online'],
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
            },
          ],
          teaches: [
            'Альтернативная колористика',
            'AirTouch',
            'Балаяж',
            'Выход из нежелательного цвета',
            'Работа с сединой',
          ],
          educationalLevel: 'Intermediate to Advanced',
          inLanguage: 'ru',
        }),
      }}
    />
    </>
  )
}
