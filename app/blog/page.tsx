import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { AnimateOnScroll } from '@/components/AnimateOnScroll'
import { fetchChannelPosts } from '@/lib/telegram'
import { ArrowUpRight, ArrowRight } from 'lucide-react'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Блог',
  description:
    'Блог пространства красоты RUTZ. Советы по уходу за волосами, новинки колористики, работы Дарьи Рутц — Барнаул.',
}

function formatDate(unixTimestamp: number): string {
  return new Date(unixTimestamp * 1000).toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

function truncate(text: string, max: number): string {
  if (text.length <= max) return text
  return text.slice(0, max).trimEnd() + '…'
}

export default async function BlogPage() {
  let posts = await fetchChannelPosts(20).catch(() => [])

  return (
    <div className="min-h-screen">

      {/* ── Hero ── */}
      <section className="py-20 sm:py-28 md:py-36 border-b border-border">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
          <AnimateOnScroll animation="fade-up" className="text-center">
            <span className="text-xs uppercase tracking-luxury text-muted-foreground block mb-4">
              Пространство красоты RUTZ
            </span>
            <h1 className="serif text-5xl sm:text-6xl md:text-7xl mb-6">
              Блог
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
              Советы по уходу за волосами, новинки колористики и истории преображений
              прямо из Telegram-канала.
            </p>
            <Link
              href="https://t.me/rutzprostranstvo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-luxury transition-luxury hover:gap-4 duration-300"
            >
              Подписаться на канал <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
            </Link>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── Посты ── */}
      <section className="py-16 sm:py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
          {posts.length === 0 ? (
            /* Заглушка */
            <AnimateOnScroll animation="fade-up" className="text-center">
              <div className="max-w-xl mx-auto space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  Посты из Telegram-канала появятся здесь автоматически.
                  Пока заходите напрямую в канал, чтобы не пропустить ничего интересного.
                </p>
                <Link
                  href="https://t.me/rutzprostranstvo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 text-xs uppercase tracking-luxury transition-luxury hover:bg-foreground/80"
                >
                  Открыть Telegram-канал <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
                </Link>
              </div>
            </AnimateOnScroll>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
              {posts.map((post, i) => (
                <AnimateOnScroll key={post.id} animation="fade-up" delay={(i % 3) * 100}>
                  <div className="bg-background flex flex-col h-full">
                    {post.photoUrl && (
                      <div className="relative h-52 sm:h-60 overflow-hidden">
                        <Image
                          src={post.photoUrl}
                          alt="Фото из поста"
                          fill
                          className="object-cover grayscale-luxury"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </div>
                    )}
                    <div className="p-7 sm:p-8 flex flex-col flex-1 space-y-4">
                      <span className="text-xs uppercase tracking-luxury text-muted-foreground">
                        {formatDate(post.date)}
                      </span>
                      <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                        {truncate(post.text, 200)}
                      </p>
                      <Link
                        href={post.messageUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs uppercase tracking-luxury transition-luxury hover:gap-3 duration-300 mt-auto"
                      >
                        Читать в Telegram <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                      </Link>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 sm:py-24 border-t border-border bg-accent/20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 text-center">
          <AnimateOnScroll animation="fade-up">
            <h2 className="serif text-3xl sm:text-4xl mb-6">
              Больше в Telegram
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed">
              Подписывайтесь на канал — там все работы, советы и акции первыми
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://t.me/rutzprostranstvo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-foreground text-background px-10 py-5 text-xs uppercase tracking-luxury transition-luxury hover:bg-foreground/80"
              >
                Telegram-канал <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
              </Link>
              <Link
                href="/contacts"
                className="inline-flex items-center justify-center gap-2 border border-border px-10 py-5 text-xs uppercase tracking-luxury transition-luxury hover:bg-accent"
              >
                Записаться <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  )
}
