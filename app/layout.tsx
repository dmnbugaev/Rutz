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
    'Дарья Рутц — колорист с 10-летним опытом, преподаватель альтернативной колористики. Пространство красоты RUTZ в Барнауле. Выход из нежелательного цвета, AirTouch, Балаяж.',
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
  ],
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    siteName: 'RUTZ Пространство красоты',
    title: 'RUTZ — Пространство красоты | Дарья Рутц, колорист Барнаул',
    description:
      'Колорист с 10-летним опытом. Выход из нежелательного цвета, сложные техники окрашивания, обучение. Барнаул.',
  },
  robots: {
    index: true,
    follow: true,
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
      </body>
    </html>
  )
}
