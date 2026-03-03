import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { CookieConsent } from '@/components/CookieConsent'

const playfair = Playfair_Display({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://rutz.beauty'),
  title: {
    default: 'RUTZ — Пространство красоты | Дарья Рутц, колорист Барнаул',
    template: '%s | RUTZ',
  },
  description:
    'Дарья Рутц — колорист с 10-летним опытом в Барнауле. AirTouch, балаяж, выход из нежелательного цвета. Запишитесь на бесплатную консультацию!',
  keywords: [
    'колорист Барнаул',
    'окрашивание волос Барнаул',
    'альтернативная колористика',
    'RUTZ',
    'Дарья Рутц',
    'AirTouch Барнаул',
    'балаяж Барнаул',
    'выход из черного цвета',
    'обучение колористике',
    'пространство красоты Барнаул',
    'мелирование Барнаул',
    'шатуш Барнаул',
    'выход из нежелательного цвета Барнаул',
  ],
  authors: [{ name: 'Дарья Рутц', url: 'https://rutz.beauty/about' }],
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    siteName: 'RUTZ Пространство красоты',
    title: 'RUTZ — Пространство красоты | Дарья Рутц, колорист Барнаул',
    description:
      'Колорист с 10-летним опытом. Выход из нежелательного цвета, сложные техники окрашивания, обучение. Барнаул.',
    url: 'https://rutz.beauty',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RUTZ — Пространство красоты | Дарья Рутц, колорист Барнаул',
    description:
      'Колорист с 10-летним опытом. Выход из нежелательного цвета, сложные техники окрашивания, обучение. Барнаул.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={`${playfair.variable} ${inter.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          <Header />
          <main className="pt-[57px] sm:pt-[65px]">{children}</main>
          <Footer />
          <CookieConsent />
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BeautySalon',
              name: 'RUTZ Пространство красоты',
              description:
                'Дарья Рутц — колорист с 10-летним опытом. AirTouch, балаяж, выход из нежелательного цвета, обучение колористике. Барнаул.',
              url: 'https://rutz.beauty',
              telephone: '+79833962244',
              email: 'info@rutz.beauty',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Павловский тракт, 162',
                addressLocality: 'Барнаул',
                addressRegion: 'Алтайский край',
                postalCode: '656038',
                addressCountry: 'RU',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 53.3476,
                longitude: 83.7765,
              },
              openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                opens: '10:00',
                closes: '21:00',
              },
              priceRange: '₽₽',
              currenciesAccepted: 'RUB',
              paymentAccepted: 'Cash, Credit Card',
              sameAs: [
                'https://t.me/rutzprostranstvo',
                'https://www.instagram.com/rutz_prostranstvo',
                'https://vk.ru/darya_skopa13',
              ],
            }),
          }}
        />
      </body>
    </html>
  )
}
