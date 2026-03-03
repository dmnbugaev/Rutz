import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { AnimateOnScroll } from '@/components/AnimateOnScroll'
import { ArrowRight, Award, Heart, Sparkles, Star } from 'lucide-react'
import { TEACHERS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Дарья Рутц — колорист Барнаул с 10-летним опытом',
  description:
    'Дарья Рутц — эксперт колористики с 10-летним опытом. Основатель RUTZ в Барнауле. Выход из нежелательного цвета, работа с сединой, обучение.',
  alternates: {
    canonical: 'https://rutz.beauty/about',
  },
  openGraph: {
    title: 'Дарья Рутц — колорист Барнаул с 10-летним опытом | RUTZ',
    description:
      'Эксперт колористики с 10-летним опытом. Основатель RUTZ в Барнауле. Выход из нежелательного цвета, работа с сединой, обучение.',
    url: 'https://rutz.beauty/about',
    type: 'profile',
  },
  twitter: {
    title: 'Дарья Рутц — колорист Барнаул с 10-летним опытом',
    description:
      'Эксперт колористики с 10-летним опытом. Основатель RUTZ в Барнауле. Выход из нежелательного цвета, работа с сединой.',
  },
}

const stats = [
  { value: '10', label: 'лет опыта', icon: Award },
  { value: '1M+', label: 'вложено в обучение', icon: Star },
  { value: '2024', label: 'открытие RUTZ', icon: Sparkles },
  { value: '∞', label: 'любовь к делу', icon: Heart },
]

const expertise = [
  {
    title: 'Выход из нежелательного цвета',
    desc: 'Эксперт метода по выходу из нежелательных пигментов и чёрного цвета без порошка и без потери качества волос.',
  },
  {
    title: 'Работа с сединой',
    desc: 'Автор работы с сединой как в классической, так и в альтернативной колористике.',
  },
  {
    title: 'Альтернативная колористика',
    desc: 'Топ в сложных случаях окрашивания. Техники AirTouch, Балаяж, Шатуш, Мелирование.',
  },
  {
    title: 'Преподавание',
    desc: 'Передаю знания тем, кто готов учиться серьёзно. Только после собеседования.',
  },
]

export default function AboutPage() {
  return (
    <>
    <div className="min-h-screen">

      {/* ── Hero ── */}
      <section className="py-20 sm:py-28 md:py-36 border-b border-border">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
          <AnimateOnScroll animation="fade-up" className="text-center">
            <span className="text-xs uppercase tracking-luxury text-muted-foreground block mb-4">
              Пространство красоты RUTZ
            </span>
            <h1 className="serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-6">
              Дарья Рутц
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Колорист с 10-летним опытом и преподаватель альтернативной колористики.
              Топ в сложных случаях окрашивания.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── Статистика ── */}
      <section className="border-b border-border">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y sm:divide-y-0 divide-border">
            {stats.map(({ value, label, icon: Icon }, i) => (
              <AnimateOnScroll key={label} animation="fade-up" delay={i * 100}>
                <div className="flex flex-col items-center gap-3 py-10 sm:py-14 px-6 text-center">
                  <Icon className="w-6 h-6 text-muted-foreground" strokeWidth={1} />
                  <span className="serif text-3xl sm:text-4xl">{value}</span>
                  <span className="text-xs uppercase tracking-luxury text-muted-foreground">{label}</span>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── История ── */}
      <section className="py-16 sm:py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">
            <AnimateOnScroll animation="slide-left">
              <div className="relative h-[450px] sm:h-[550px] md:h-[650px] overflow-hidden gallery-frame">
                <Image
                  src="/image/IMG_9475.jpg"
                  alt="Дарья Рутц — колорист"
                  fill
                  className="object-cover grayscale-luxury"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="slide-right">
              <div className="space-y-6 lg:pt-4">
                <span className="text-xs uppercase tracking-luxury text-muted-foreground">История</span>
                <h2 className="serif text-3xl sm:text-4xl md:text-5xl leading-tight">
                  Путь от нуля до эксперта
                </h2>
                <div className="space-y-5 text-muted-foreground leading-relaxed">
                  <p>
                    В профессию пришла с нуля — без наставников и финансовой поддержки.
                    Первые годы работала одна в салонах, набивая шишки и вкладывая каждую
                    копейку в обучение.
                  </p>
                  <p>
                    Прошла путь от испорченных волос до идеального цвета через личные
                    ошибки. Именно этот опыт позволяет давать клиентам не эксперимент,
                    а гарантированный результат.
                  </p>
                  <blockquote className="border-l-4 border-foreground pl-6 py-2 my-6">
                    <p className="serif text-xl italic">
                      «Приходите за выжимкой 10-летней практики. Вы получите не
                      эксперимент на ваших волосах, а проверенный результат.»
                    </p>
                  </blockquote>
                  <p>
                    Обучалась у ведущих колористов страны, вложив более 1 000 000 рублей
                    в профессиональное развитие. В 2024 году открыла Пространство красоты
                    RUTZ в Барнауле.
                  </p>
                </div>
                <Link
                  href="/contacts"
                  className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 rounded-2xl text-xs uppercase tracking-luxury transition-luxury hover:bg-foreground/80"
                >
                  Записаться на консультацию
                  <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ── Экспертиза ── */}
      <section className="py-16 sm:py-24 md:py-32 bg-accent/20 border-t border-b border-border">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="serif text-3xl sm:text-4xl md:text-5xl">Экспертиза</h2>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border">
            {expertise.map((item, i) => (
              <AnimateOnScroll key={item.title} animation="fade-up" delay={i * 100}>
                <div className="bg-background p-8 sm:p-10 space-y-4">
                  <span className="text-xs text-muted-foreground tracking-luxury">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="serif text-xl sm:text-2xl">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── Учителя ── */}
      <section className="py-16 sm:py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
          <div className="max-w-3xl mx-auto">
            <AnimateOnScroll animation="fade-up">
              <div className="text-center mb-10 sm:mb-14">
                <span className="text-xs uppercase tracking-luxury text-muted-foreground block mb-4">
                  Образование
                </span>
                <h2 className="serif text-3xl sm:text-4xl md:text-5xl mb-4">
                  Обучалась у топовых колористов
                </h2>
                <p className="text-muted-foreground">
                  Вложила более 1 000 000 рублей в профессиональное развитие
                </p>
              </div>
            </AnimateOnScroll>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {TEACHERS.map((teacher, i) => (
                <AnimateOnScroll key={teacher} animation="fade-up" delay={i * 80}>
                  <div className="flex items-center gap-4 border border-border p-4 sm:p-5">
                    <span className="text-xs text-muted-foreground tracking-luxury w-6">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-sm">{teacher}</span>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Принцип ── */}
      <section className="py-16 sm:py-24 md:py-32 bg-foreground text-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-8 text-center">
          <AnimateOnScroll animation="fade-up">
            <h2 className="serif text-3xl sm:text-4xl md:text-5xl mb-6">
              Принцип работы
            </h2>
            <p className="text-base sm:text-lg leading-relaxed opacity-80 mb-4">
              Я не работаю «с листа» или по фото из WhatsApp.
            </p>
            <p className="text-base sm:text-lg leading-relaxed opacity-80 mb-8">
              Только очная консультация. Фото врёт — камера искажает цвет,
              а история ваших волос видна только при личном осмотре.
            </p>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 border border-background/40 text-background px-8 py-4 rounded-2xl text-xs uppercase tracking-luxury transition-luxury hover:bg-background hover:text-foreground"
            >
              Посмотреть услуги <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
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
          '@type': 'Person',
          name: 'Дарья Рутц',
          jobTitle: 'Колорист, преподаватель альтернативной колористики',
          url: 'https://rutz.beauty/about',
          worksFor: {
            '@type': 'BeautySalon',
            name: 'RUTZ Пространство красоты',
            url: 'https://rutz.beauty',
          },
          knowsAbout: [
            'Альтернативная колористика',
            'AirTouch',
            'Балаяж',
            'Выход из нежелательного цвета',
            'Работа с сединой',
            'Обучение колористике',
          ],
          sameAs: [
            'https://t.me/rutzprostranstvo',
            'https://www.instagram.com/rutz_prostranstvo',
            'https://vk.ru/darya_skopa13',
          ],
        }),
      }}
    />
    </>
  )
}
