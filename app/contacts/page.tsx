import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { AnimateOnScroll } from '@/components/AnimateOnScroll'
import { ArrowUpRight, MapPin, Phone, Clock, CalendarCheck, MessageCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Контакты — Запись к колористу в Барнауле',
  description:
    'Запишитесь к колористу Дарье Рутц в Барнауле. Адрес: Павловский тракт 162. Телефон +7 (983) 396-22-44. Онлайн-запись и Telegram. Работаем 10–21 ч.',
  alternates: {
    canonical: 'https://rutz.beauty/contacts',
  },
  openGraph: {
    title: 'Контакты RUTZ — Запись к колористу в Барнауле',
    description:
      'Запишитесь к колористу Дарье Рутц в Барнауле. Адрес: Павловский тракт 162. Телефон +7 (983) 396-22-44. Работаем 10–21 ч.',
    url: 'https://rutz.beauty/contacts',
    type: 'website',
  },
  twitter: {
    title: 'Контакты RUTZ — Запись к колористу в Барнауле',
    description:
      'Запишитесь к колористу Дарье Рутц в Барнауле. Адрес: Павловский тракт 162. Телефон +7 (983) 396-22-44.',
  },
}

const contacts = [
  {
    icon: MapPin,
    title: 'Адрес',
    main: 'Павловский тракт, 162',
    sub: 'Барнаул, ЖК Питер',
    link: 'https://yandex.ru/maps/?text=53.3476,83.7765',
    linkText: 'Маршрут',
  },
  {
    icon: Phone,
    title: 'Телефон',
    main: '+7 (983) 396-22-44',
    sub: 'Ежедневно с 10:00 до 20:00',
    link: 'tel:+79833962244',
    linkText: 'Позвонить',
  },
  {
    icon: Clock,
    title: 'Часы работы',
    main: 'Пн – Вс: 10:00 – 20:00',
    sub: 'По предварительной записи',
    link: 'https://dikidi.net/1348080?p=0.pi',
    linkText: 'Записаться',
  },
]

const socials = [
  { name: 'Telegram', url: 'https://t.me/rutzprostranstvo', note: null },
  { name: 'Instagram*', url: 'https://www.instagram.com/rutz_prostranstvo', note: '* Meta признана экстремистской организацией в РФ' },
  { name: 'ВКонтакте', url: 'https://vk.ru/darya_skopa13', note: null },
]

const bookingOptions = [
  {
    icon: CalendarCheck,
    title: 'Онлайн-запись',
    sub: 'Выберите удобное время в системе Dikidi',
    href: 'https://dikidi.net/1348080?p=0.pi',
    external: true,
  },
  {
    icon: MessageCircle,
    title: 'Написать в Telegram',
    sub: 'Отвечу в течение часа',
    href: 'https://t.me/rutzprostranstvo',
    external: true,
  },
  {
    icon: Phone,
    title: 'Позвонить',
    sub: '+7 (983) 396-22-44',
    href: 'tel:+79833962244',
    external: false,
  },
]

export default function ContactsPage() {
  return (
    <div className="min-h-screen">

      {/* ── Hero ── */}
      <section className="min-h-[calc(100vh-57px)] flex items-center border-b border-border">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 w-full">
          <AnimateOnScroll animation="fade-up" className="text-center">
            <span className="text-xs uppercase tracking-luxury text-muted-foreground block mb-4">
              Связаться
            </span>
            <h1 className="serif text-5xl sm:text-6xl md:text-7xl mb-6">Контакты</h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Запись только после личной консультации. Напишите мне — и мы
              обсудим все детали.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── Фото ── */}
      <section className="border-b border-border">
        <AnimateOnScroll animation="fade-in">
          <div className="relative h-[320px] sm:h-[420px] md:h-[500px] overflow-hidden">
            <Image
              src="/image/IMG_9526.jpg"
              alt="Пространство красоты RUTZ"
              fill
              className="object-cover grayscale-luxury"
              sizes="100vw"
              priority
            />
          </div>
        </AnimateOnScroll>
      </section>

      {/* ── Контактные карточки ── */}
      <section className="border-b border-border">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border">
            {contacts.map(({ icon: Icon, title, main, sub, link, linkText }, i) => (
              <AnimateOnScroll key={title} animation="fade-up" delay={i * 100}>
                <div className="flex flex-col gap-4 py-10 sm:py-14 px-6 sm:px-8">
                  <Icon className="w-5 h-5 text-muted-foreground" strokeWidth={1} />
                  <div>
                    <p className="text-xs uppercase tracking-luxury text-muted-foreground mb-2">{title}</p>
                    <p className="text-base font-medium">{main}</p>
                    <p className="text-sm text-muted-foreground mt-1">{sub}</p>
                  </div>
                  <Link
                    href={link}
                    target={link.startsWith('http') ? '_blank' : undefined}
                    rel={link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-luxury transition-luxury hover:gap-3 duration-300"
                  >
                    {linkText} <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                  </Link>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── Карта + Запись ── */}
      <section className="py-16 sm:py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

            {/* Карта */}
            <AnimateOnScroll animation="slide-left">
              <div>
                <h2 className="serif text-2xl sm:text-3xl mb-6">Как нас найти</h2>
                <div className="overflow-hidden border border-border mb-4">
                  <iframe
                    id="map_204174384"
                    frameBorder="0"
                    width="100%"
                    height="460"
                    src="https://makemap.2gis.ru/widget?data=eJw1j1FvgkAQhP_L9lFiD44DIfHBYqomxKCJGtv4QGSll5wcOc62lvjfu0C7jzOzk29a0KZAg8UC9RWtkdhA_N6CvdcIMbxibm8GwYHa6BqN7f0WzlppQ_4TY657uZBvpVXdx07td4dyOiWpwOZsZG2lrsjIlrMRS5-35ToZseNyW9rFjKXzzWexeGHHdNPYZLRaJwE7zjfNmrQ07DJplkRf2VD4s6oK_IbYZf_3cKAcwO8d1h91pmVlKX_WNE5Wue1HTfg4CJhwuSP4mPuhz6MT_cuCCt1APE4OXPM6040ciFtQuYW4CwuPRZ4IheBMOKA6t2_zwokXBb7gvkt0Wl-pyqNO2q2VOnwgqrdeteaGj18tTW6k"
                    sandbox="allow-modals allow-forms allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation"
                    title="Карта RUTZ — 2GIS"
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  Барнаул, ЖК Питер, Павловский тракт, 162
                </p>
                <div className="flex flex-wrap gap-3 mt-6">
                  {socials.map((s) => (
                    <Link
                      key={s.name}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-border/60 px-5 py-2.5 rounded-xl text-xs uppercase tracking-luxury transition-luxury hover:bg-accent/60 glass-subtle"
                    >
                      {s.name}
                    </Link>
                  ))}
                </div>
                <p className="text-[11px] text-muted-foreground/60 mt-3">
                  * Meta признана экстремистской организацией в РФ
                </p>
              </div>
            </AnimateOnScroll>

            {/* Способы записи */}
            <AnimateOnScroll animation="slide-right">
              <div>
                <h2 className="serif text-2xl sm:text-3xl mb-3">Записаться</h2>
                <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
                  Выберите удобный способ — я свяжусь с вами для уточнения деталей
                  и записи на консультацию.
                </p>

                <div className="flex flex-col divide-y divide-border border border-border">
                  {bookingOptions.map(({ icon: Icon, title, sub, href, external }, i) => (
                    <Link
                      key={title}
                      href={href}
                      target={external ? '_blank' : undefined}
                      rel={external ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-5 px-6 py-5 transition-luxury hover:bg-accent group"
                    >
                      <div className="w-10 h-10 flex items-center justify-center border border-border flex-shrink-0 transition-luxury group-hover:border-foreground/40">
                        <Icon className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-luxury" strokeWidth={1} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium">{title}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{sub}</p>
                      </div>
                      <ArrowUpRight
                        className="w-4 h-4 text-muted-foreground/50 group-hover:text-foreground transition-luxury flex-shrink-0"
                        strokeWidth={1.5}
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>

          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 sm:py-24 border-t border-border bg-foreground text-background">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 text-center">
          <AnimateOnScroll animation="fade-up">
            <h2 className="serif text-3xl sm:text-4xl md:text-5xl mb-6">
              Запишитесь прямо сейчас
            </h2>
            <p className="opacity-70 mb-8 max-w-xl mx-auto leading-relaxed">
              Выберите удобный мессенджер или запишитесь онлайн через систему
              бронирования Dikidi — выберите время сами, без звонков
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://dikidi.net/1348080?p=0.pi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-background text-foreground px-10 sm:px-14 py-5 rounded-2xl text-xs uppercase tracking-luxury transition-luxury hover:bg-background/90"
              >
                Онлайн-запись <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
              </Link>
              <Link
                href="https://t.me/rutzprostranstvo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-background/40 text-background px-10 sm:px-14 py-5 rounded-2xl text-xs uppercase tracking-luxury transition-luxury hover:bg-background hover:text-foreground"
              >
                Написать в Telegram <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  )
}
