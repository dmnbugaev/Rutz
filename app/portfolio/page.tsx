import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { AnimateOnScroll } from '@/components/AnimateOnScroll'
import { BeforeAfter } from '@/components/BeforeAfter'
import { ArrowRight, ArrowUpRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Портфолио — Работы колориста Дарьи Рутц в Барнауле',
  description:
    'Портфолио работ Дарьи Рутц: выход из нежелательного пигмента, матирование, техники AirTouch и балаяж. Фотографии до и после с переключением.',
  alternates: {
    canonical: 'https://rutz.beauty/portfolio',
  },
  openGraph: {
    title: 'Портфолио — Работы колориста Дарьи Рутц | RUTZ',
    description:
      'Реальные работы: выход из нежелательного пигмента, матирование, техники AirTouch и балаяж. Фото до и после.',
    url: 'https://rutz.beauty/portfolio',
    type: 'website',
  },
  twitter: {
    title: 'Портфолио — Работы Дарьи Рутц, колорист Барнаул',
    description:
      'Реальные работы: выход из нежелательного пигмента, матирование, техники AirTouch и балаяж.',
  },
}

// ── Хелперы для путей к изображениям ──
const E = encodeURIComponent
const pig = (f: string) => `/image/new_image/${E('выход из нежелательного пигмента')}/${f}`
const mat = (f: string) => `/image/new_image/${E('Матирование')}/${f}`
const tec = (f: string) => `/image/new_image/${E('окрашивание техники')}/${f}`

// ── Пары До/После ──

const pigmentPairs = [
  { before: pig('IMG_2560.jpg'), after: pig('IMG_2559.jpg') },
  { before: pig('IMG_1647.JPG'), after: pig('IMG_1663.JPG') },
  { before: pig('IMG_6851.JPG'), after: pig('IMG_6906.JPG') },
  { before: pig('IMG_7597.JPG'), after: pig('IMG_7600.JPG') },
]

const pigmentGallery = [
  pig('IMG_6093.JPG'),
  pig('IMG_6096.JPG'),
  pig('IMG_9123.JPG'),
  pig('IMG_5592.JPG'),
  pig('IMG_5596.JPG'),
]

const mattingPairs = [
  { before: mat('IMG_1190.JPG'), after: mat('IMG_1249.JPG') },
  { before: mat('IMG_8133.JPG'), after: mat('IMG_8176.JPG') },
]

const mattingGallery = [mat('IMG_8186.JPG')]

const techPairs = [
  { before: tec('IMG_4185.JPG'), after: tec('IMG_4243.JPG') },
]

const techGallery = [
  tec('IMG_4251.JPG'),
  tec('IMG_8680.JPG'),
  tec('IMG_8684.JPG'),
  tec('IMG_8661.JPG'),
  tec('IMG_7481.JPG'),
  tec('IMG_5699.JPG'),
  tec('IMG_6140.jpg'),
  tec('IMG_6155.jpg'),
  tec('IMG_6158.jpg'),
  tec('IMG_1197.jpg'),
  tec('IMG_4228.JPG'),
  tec('IMG_4189.JPG'),
]

export default function PortfolioPage() {
  return (
    <>
      <div className="min-h-screen">

        {/* ── Hero ── */}
        <section className="min-h-[calc(100vh-57px)] flex items-center border-b border-border">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-8 w-full">
            <AnimateOnScroll animation="fade-up" className="text-center">
              <span className="text-xs uppercase tracking-luxury text-muted-foreground block mb-4">
                Пространство красоты RUTZ
              </span>
              <h1 className="serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-6">
                Портфолио
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-12">
                Реальные работы — фотографии до и после. Нажимайте&nbsp;«До»&nbsp;/&nbsp;«После»
                на карточках, чтобы увидеть трансформацию.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link
                  href="#pigment"
                  className="px-5 py-2.5 border border-border text-xs uppercase tracking-luxury rounded-full transition-luxury hover:bg-foreground hover:text-background"
                >
                  Выход из нежелательного пигмента
                </Link>
                <Link
                  href="#matting"
                  className="px-5 py-2.5 border border-border text-xs uppercase tracking-luxury rounded-full transition-luxury hover:bg-foreground hover:text-background"
                >
                  Матирование
                </Link>
                <Link
                  href="#techniques"
                  className="px-5 py-2.5 border border-border text-xs uppercase tracking-luxury rounded-full transition-luxury hover:bg-foreground hover:text-background"
                >
                  Техники окрашивания
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* ── 01: Выход из нежелательного пигмента ── */}
        <section id="pigment" className="py-16 sm:py-24 md:py-32 border-b border-border scroll-mt-20">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-8">

            <AnimateOnScroll animation="fade-up">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
                <div>
                  <span className="text-xs text-muted-foreground tracking-luxury block mb-3">01</span>
                  <h2 className="serif text-3xl sm:text-4xl md:text-5xl">
                    Выход из нежелательного пигмента
                  </h2>
                  <p className="text-muted-foreground mt-4 max-w-2xl leading-relaxed">
                    Эксперт метода по выходу из нежелательных пигментов и чёрного цвета.
                    Без порошка, без потери качества волос. Результат закреплён 10-летней практикой.
                  </p>
                </div>
                <Link
                  href="/services#correction"
                  className="flex-shrink-0 inline-flex items-center gap-2 text-xs uppercase tracking-luxury transition-luxury hover:gap-4 duration-300 whitespace-nowrap"
                >
                  Услуга и цены <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
                </Link>
              </div>
            </AnimateOnScroll>

            {/* Пары До/После */}
            <AnimateOnScroll animation="fade-up" delay={100}>
              <p className="text-[10px] uppercase tracking-luxury text-muted-foreground mb-4">
                Нажмите «До» или «После» на каждой карточке
              </p>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-10">
                {pigmentPairs.map((pair, i) => (
                  <BeforeAfter
                    key={i}
                    before={pair.before}
                    after={pair.after}
                  />
                ))}
              </div>
            </AnimateOnScroll>

            {/* Галерея */}
            <AnimateOnScroll animation="fade-up" delay={150}>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
                {pigmentGallery.map((src, i) => (
                  <div key={i} className="relative aspect-square overflow-hidden gallery-frame">
                    <Image
                      src={src}
                      alt={`Выход из нежелательного пигмента — работа ${i + 1}`}
                      fill
                      className="object-cover grayscale-luxury"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    />
                    {(i === 0 || i === 1 || i === 2) && (
                      <div className="absolute top-2 left-2 px-2 py-1 text-[9px] uppercase tracking-luxury bg-black/55 backdrop-blur-sm text-white/90 rounded-full">
                        До / После
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </AnimateOnScroll>

          </div>
        </section>

        {/* ── 02: Матирование ── */}
        <section id="matting" className="py-16 sm:py-24 md:py-32 border-b border-border bg-accent/20 scroll-mt-20">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-8">

            <AnimateOnScroll animation="fade-up">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
                <div>
                  <span className="text-xs text-muted-foreground tracking-luxury block mb-3">02</span>
                  <h2 className="serif text-3xl sm:text-4xl md:text-5xl">
                    Матирование
                  </h2>
                  <p className="text-muted-foreground mt-4 max-w-2xl leading-relaxed">
                    Убирает нежелательные жёлтые и тёплые тона, делая цвет благородным и глубоким.
                    Идеально для осветлённых волос с нежелательным пигментом.
                  </p>
                </div>
                <Link
                  href="/services#coloring"
                  className="flex-shrink-0 inline-flex items-center gap-2 text-xs uppercase tracking-luxury transition-luxury hover:gap-4 duration-300 whitespace-nowrap"
                >
                  Услуга и цены <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
                </Link>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={100}>
              <p className="text-[10px] uppercase tracking-luxury text-muted-foreground mb-4">
                Нажмите «До» или «После» на каждой карточке
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                {mattingPairs.map((pair, i) => (
                  <BeforeAfter key={i} before={pair.before} after={pair.after} />
                ))}
                {mattingGallery.map((src, i) => (
                  <div key={i} className="relative aspect-[3/4] overflow-hidden gallery-frame">
                    <Image
                      src={src}
                      alt="Матирование — до и после"
                      fill
                      className="object-cover grayscale-luxury"
                      sizes="(max-width: 640px) 50vw, 33vw"
                    />
                    <div className="absolute top-2 left-2 px-2 py-1 text-[9px] uppercase tracking-luxury bg-black/55 backdrop-blur-sm text-white/90 rounded-full">
                      До / После
                    </div>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>

          </div>
        </section>

        {/* ── 03: Техники окрашивания ── */}
        <section id="techniques" className="py-16 sm:py-24 md:py-32 border-b border-border scroll-mt-20">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-8">

            <AnimateOnScroll animation="fade-up">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
                <div>
                  <span className="text-xs text-muted-foreground tracking-luxury block mb-3">03</span>
                  <h2 className="serif text-3xl sm:text-4xl md:text-5xl">
                    Техники окрашивания
                  </h2>
                  <p className="text-muted-foreground mt-4 max-w-2xl leading-relaxed">
                    AirTouch, Балаяж, Мелирование (рельеф), Начёс (шатуш).
                    Каждая работа — индивидуальный подбор техники с учётом особенностей волос и желаемого результата.
                  </p>
                </div>
                <Link
                  href="/services#techniques"
                  className="flex-shrink-0 inline-flex items-center gap-2 text-xs uppercase tracking-luxury transition-luxury hover:gap-4 duration-300 whitespace-nowrap"
                >
                  Услуга и цены <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
                </Link>
              </div>
            </AnimateOnScroll>

            {/* Пара До/После + первые 2 галерейных фото в одном ряду */}
            <AnimateOnScroll animation="fade-up" delay={100}>
              <p className="text-[10px] uppercase tracking-luxury text-muted-foreground mb-4">
                Нажмите «До» или «После» на карточке трансформации
              </p>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-3 sm:mb-4">
                {techPairs.map((pair, i) => (
                  <BeforeAfter key={i} before={pair.before} after={pair.after} />
                ))}
                {techGallery.slice(0, 3).map((src, i) => (
                  <div key={i} className="relative aspect-[3/4] overflow-hidden gallery-frame">
                    <Image
                      src={src}
                      alt="Техники окрашивания"
                      fill
                      className="object-cover grayscale-luxury"
                      sizes="(max-width: 640px) 50vw, 25vw"
                    />
                    {i < 2 && (
                      <div className="absolute top-2 left-2 px-2 py-1 text-[9px] uppercase tracking-luxury bg-black/55 backdrop-blur-sm text-white/90 rounded-full">
                        До / После
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </AnimateOnScroll>

            {/* Основная галерея */}
            <AnimateOnScroll animation="fade-up" delay={200}>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                {techGallery.slice(3).map((src, i) => (
                  <div key={i} className="relative aspect-[3/4] overflow-hidden gallery-frame">
                    <Image
                      src={src}
                      alt={`Техники окрашивания — работа ${i + 4}`}
                      fill
                      className="object-cover grayscale-luxury"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                  </div>
                ))}
              </div>
            </AnimateOnScroll>

          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-16 sm:py-24 md:py-32">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-8 text-center">
            <AnimateOnScroll animation="fade-up">
              <h2 className="serif text-3xl sm:text-4xl md:text-5xl mb-6">
                Хотите такой результат?
              </h2>
              <p className="text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed">
                Запишитесь на бесплатную консультацию — разберём историю ваших волос
                и составим точный план достижения желаемого цвета
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
            '@type': 'ImageGallery',
            name: 'Портфолио — работы колориста Дарьи Рутц',
            description: 'Фотографии до и после окрашивания: выход из нежелательного пигмента, матирование, AirTouch, балаяж.',
            url: 'https://rutz.beauty/portfolio',
            author: {
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
