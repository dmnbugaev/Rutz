import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { AnimateOnScroll } from '@/components/AnimateOnScroll'
import { ReviewsGrid } from '@/components/ReviewsGrid'
import { reviews, TWO_GIS_REVIEWS_URL } from '@/lib/reviews'

export const metadata: Metadata = {
  title: 'Отзывы о пространстве красоты RUTZ — рейтинг 5.0 | Барнаул',
  description: 'Отзывы клиентов о мастерах и услугах пространства красоты RUTZ. Окрашивание, стрижки, уход и макияж в Барнауле.',
  alternates: { canonical: 'https://rutz.beauty/reviews' },
  openGraph: {
    title: 'Отзывы о RUTZ — пространство красоты в Барнауле',
    description: 'Реальные отзывы клиентов RUTZ о мастерах, сервисе и результатах.',
    url: 'https://rutz.beauty/reviews',
    type: 'website',
  },
}

export default function ReviewsPage() {
  return (
    <div className="min-h-screen">
      <section className="flex min-h-[calc(100vh-57px)] items-center border-b border-border">
        <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-8">
          <AnimateOnScroll animation="fade-up" className="text-center">
            <span className="mb-4 block text-xs uppercase tracking-luxury text-muted-foreground">Пространство красоты RUTZ</span>
            <h1 className="serif mb-6 text-5xl sm:text-6xl md:text-7xl">Отзывы</h1>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl">
              Опыт клиентов и результаты работы команды RUTZ. Каждая история — о внимательном отношении, честной консультации и индивидуальном подходе.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="border-b border-border">
        <AnimateOnScroll animation="fade-in">
          <div className="relative h-[320px] overflow-hidden sm:h-[420px] md:h-[500px]">
            <Image src="/images/portfolio/IMG_9519.jpg" alt="Работы мастеров RUTZ" fill className="grayscale-luxury object-cover" sizes="100vw" priority />
          </div>
        </AnimateOnScroll>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
          <div className="grid grid-cols-3 divide-x divide-border">
            {[
              { value: '5.0', label: 'рейтинг' },
              { value: '102', label: 'отзыва' },
              { value: '118', label: 'оценок' },
            ].map(({ value, label }, index) => (
              <AnimateOnScroll key={label} animation="fade-up" delay={index * 100}>
                <div className="flex flex-col items-center gap-2 px-2 py-10 text-center sm:px-4 sm:py-14">
                  <span className="serif text-3xl sm:text-4xl md:text-5xl">{value}</span>
                  <span className="text-[10px] uppercase tracking-luxury text-muted-foreground sm:text-xs">{label}</span>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
          <p className="border-t border-border py-4 text-center text-xs text-muted-foreground">
            По данным <Link href={TWO_GIS_REVIEWS_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">2ГИС</Link> на 6 августа 2026 года
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
          <div className="mb-10 max-w-2xl sm:mb-14">
            <span className="mb-3 block text-xs uppercase tracking-luxury text-muted-foreground">2026 · 2ГИС</span>
            <h2 className="serif text-3xl sm:text-4xl">Реальные истории клиентов</h2>
          </div>
          <ReviewsGrid reviews={reviews} />
        </div>
      </section>

      <section className="border-t border-border bg-accent/20 py-12 sm:py-16">
        <div className="mx-auto max-w-[1400px] px-4 text-center sm:px-8">
          <h2 className="serif mb-3 text-2xl sm:text-3xl">Все отзывы на 2ГИС</h2>
          <p className="mb-8 text-sm text-muted-foreground">Откройте карточку RUTZ, чтобы прочитать все отзывы и поделиться своим опытом.</p>
          <Link href={TWO_GIS_REVIEWS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-foreground px-8 py-4 text-xs uppercase tracking-luxury text-background transition-luxury hover:bg-foreground/80">
            Открыть 2ГИС <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
          </Link>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'BeautySalon', name: 'RUTZ Пространство красоты', url: 'https://rutz.beauty',
        aggregateRating: { '@type': 'AggregateRating', ratingValue: '5.0', bestRating: '5', worstRating: '1', ratingCount: '118', reviewCount: '102' },
        review: reviews.map((review) => ({ '@type': 'Review', author: { '@type': 'Person', name: review.author }, datePublished: review.isoDate, reviewBody: review.text, reviewRating: { '@type': 'Rating', ratingValue: String(review.rating), bestRating: '5' } })),
      }) }} />
    </div>
  )
}
