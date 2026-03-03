import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { AnimateOnScroll } from '@/components/AnimateOnScroll'
import { ArrowUpRight, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Отзывы о колористе Дарье Рутц — Рейтинг 5.0 | Барнаул',
  description:
    'Отзывы клиентов RUTZ о Дарье Рутц: AirTouch, балаяж, выход из нежелательного цвета. Рейтинг 5.0, более 100 довольных клиентов. Барнаул.',
  alternates: {
    canonical: 'https://rutz.beauty/reviews',
  },
  openGraph: {
    title: 'Отзывы о колористе Дарье Рутц — Рейтинг 5.0 | RUTZ Барнаул',
    description:
      'Отзывы клиентов RUTZ о Дарье Рутц: AirTouch, балаяж, выход из нежелательного цвета. Рейтинг 5.0, более 100 клиентов.',
    url: 'https://rutz.beauty/reviews',
    type: 'website',
  },
  twitter: {
    title: 'Отзывы о колористе Дарье Рутц — Рейтинг 5.0 | Барнаул',
    description:
      'Отзывы клиентов RUTZ о Дарье Рутц: AirTouch, балаяж, выход из нежелательного цвета. Рейтинг 5.0.',
  },
}

const reviews = [
  {
    name: 'Анастасия К.',
    service: 'AirTouch',
    date: 'Февраль 2025',
    stars: 5,
    text: 'Пришла с тёмными волосами мечтая о пепельном блонде. Дарья провела консультацию, объяснила весь процесс и результат превзошёл все ожидания. Волосы живые, переход нежнейший. Теперь только к ней!',
  },
  {
    name: 'Мария В.',
    service: 'Выход из нежелательного цвета',
    date: 'Январь 2025',
    stars: 5,
    text: 'После двух лет чёрной краски думала, что блонд мне не светит. Дарья сделала невозможное — за одну процедуру избавила от нежелательного пигмента без ущерба для волос. Я в шоке от результата!',
  },
  {
    name: 'Юлия П.',
    service: 'Балаяж',
    date: 'Декабрь 2024',
    stars: 5,
    text: 'Искала мастера, который делает настоящий балаяж, а не полосатое мелирование. Дарья — именно такой мастер. Цвет выглядит как будто выгорел от солнца, очень натурально. Рекомендую всем!',
  },
  {
    name: 'Екатерина Л.',
    service: 'Окрашивание с тонированием',
    date: 'Ноябрь 2024',
    stars: 5,
    text: 'Была на консультации — сразу поняла, что попала к профессионалу. Дарья проверила историю волос, предупредила о возможных рисках и предложила лучший вариант. Цвет держится уже 2 месяца, никакой желтизны.',
  },
  {
    name: 'Ольга Р.',
    service: 'Работа с сединой',
    date: 'Октябрь 2024',
    stars: 5,
    text: 'Наконец-то нашла мастера, который умеет работать с сединой красиво! Дарья сделала так, что седина стала частью образа, а не проблемой. Очень мягкий результат, буду возвращаться снова.',
  },
  {
    name: 'Татьяна С.',
    service: 'AirTouch + тонирование',
    date: 'Сентябрь 2024',
    stars: 5,
    text: 'Сидела в кресле 6 часов — и ни разу не пожалела. Дарья — мастер своего дела. Объяснила каждый шаг, результат идеальный. Волосы мягкие, блестящие. Уже записалась на следующий раз.',
  },
  {
    name: 'Диана М.',
    service: 'Мелирование (рельеф)',
    date: 'Август 2024',
    stars: 5,
    text: 'Хотела объёмное мелирование без эффекта полосок. Дарья сделала именно то, о чём я мечтала! Техника рельеф — это что-то особенное. Подруги постоянно спрашивают, где я покрасилась.',
  },
  {
    name: 'Ирина Б.',
    service: 'Консультация + выход из чёрного',
    date: 'Июль 2024',
    stars: 5,
    text: 'Переехала в Барнаул и долго искала хорошего колориста. Нашла RUTZ — и не могу нарадоваться. Дарья честно объяснила, сколько процедур потребуется для достижения цели. Никаких сюрпризов, только результат.',
  },
]

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5 fill-foreground text-foreground" strokeWidth={0} />
      ))}
    </div>
  )
}

export default function ReviewsPage() {
  return (
    <>
    <div className="min-h-screen">

      {/* ── Hero ── */}
      <section className="py-20 sm:py-28 md:py-36 border-b border-border">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <AnimateOnScroll animation="fade-up">
              <span className="text-xs uppercase tracking-luxury text-muted-foreground block mb-4">
                Пространство красоты RUTZ
              </span>
              <h1 className="serif text-5xl sm:text-6xl md:text-7xl mb-6">
                Отзывы
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Реальные отзывы клиентов о работе Дарьи Рутц.
                Каждый результат — итог глубокой диагностики и индивидуального подхода.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll animation="slide-right">
              <div className="relative h-[400px] sm:h-[520px] overflow-hidden gallery-frame">
                <Image
                  src="/image/IMG_9494.jpg"
                  alt="Результаты работы RUTZ"
                  fill
                  className="object-cover grayscale-luxury"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ── Статистика ── */}
      <section className="border-b border-border">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-3 divide-x divide-border">
            {[
              { value: '10', label: 'лет опыта' },
              { value: '100+', label: 'довольных клиентов' },
              { value: '5.0', label: 'средний рейтинг' },
            ].map(({ value, label }, i) => (
              <AnimateOnScroll key={label} animation="fade-up" delay={i * 100}>
                <div className="flex flex-col items-center gap-2 py-10 sm:py-14 px-4 text-center">
                  <span className="serif text-3xl sm:text-4xl md:text-5xl">{value}</span>
                  <span className="text-xs uppercase tracking-luxury text-muted-foreground">{label}</span>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── Отзывы ── */}
      <section className="py-16 sm:py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {reviews.map((review, i) => (
              <AnimateOnScroll key={review.name} animation="fade-up" delay={(i % 3) * 100}>
                <div className="bg-background p-7 sm:p-9 space-y-5 h-full">
                  <StarRating count={review.stars} />
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    «{review.text}»
                  </p>
                  <div className="pt-2 border-t border-border">
                    <p className="text-sm font-medium">{review.name}</p>
                    <p className="text-xs text-muted-foreground mt-1 uppercase tracking-luxury">
                      {review.service} · {review.date}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 sm:py-24 border-t border-border bg-foreground text-background">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 text-center">
          <AnimateOnScroll animation="fade-up">
            <h2 className="serif text-3xl sm:text-4xl md:text-5xl mb-6">
              Хотите поделиться опытом?
            </h2>
            <p className="opacity-70 mb-8 max-w-xl mx-auto leading-relaxed">
              Напишите нам в Telegram — ваш отзыв поможет другим клиентам сделать правильный выбор
            </p>
            <Link
              href="https://t.me/rutzprostranstvo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-background/40 text-background px-10 py-5 rounded-2xl text-xs uppercase tracking-luxury transition-luxury hover:bg-background hover:text-foreground"
            >
              Написать отзыв <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BeautySalon',
          name: 'RUTZ Пространство красоты',
          url: 'https://rutz.beauty',
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '5.0',
            bestRating: '5',
            worstRating: '1',
            ratingCount: String(reviews.length),
            reviewCount: String(reviews.length),
          },
          review: reviews.map((r) => ({
            '@type': 'Review',
            author: { '@type': 'Person', name: r.name },
            reviewBody: r.text,
            reviewRating: {
              '@type': 'Rating',
              ratingValue: String(r.stars),
              bestRating: '5',
            },
          })),
        }),
      }}
    />
    </>
  )
}
