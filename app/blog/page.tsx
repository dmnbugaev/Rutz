import type { Metadata } from 'next'
import Link from 'next/link'
import { AnimateOnScroll } from '@/components/AnimateOnScroll'
import { MediaSlider } from '@/components/MediaSlider'
import { fetchChannelPosts } from '@/lib/telegram'
import { ArrowRight, ArrowUpRight } from 'lucide-react'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Блог — Советы по колористике и уходу за волосами',
  description:
    'Блог RUTZ: советы по уходу за волосами, техники окрашивания и истории преображений от Дарьи Рутц. Подписывайтесь на Telegram-канал!',
  alternates: {
    canonical: 'https://rutz.beauty/blog',
  },
  openGraph: {
    title: 'Блог RUTZ — Советы по колористике и уходу за волосами',
    description:
      'Советы по уходу за волосами, техники окрашивания и истории преображений от Дарьи Рутц. Барнаул.',
    url: 'https://rutz.beauty/blog',
    type: 'website',
  },
  twitter: {
    title: 'Блог RUTZ — Советы по колористике и уходу за волосами',
    description:
      'Советы по уходу за волосами, техники окрашивания и истории преображений от Дарьи Рутц.',
  },
}

function formatDate(date: Date): string {
  return date.toLocaleDateString('ru-RU', {
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
  const posts = await fetchChannelPosts(7)

  return (
    <div className="min-h-screen">

      {/* ── Hero ── */}
      <section className="py-20 sm:py-28 md:py-36 border-b border-border">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
          <AnimateOnScroll animation="fade-up" className="text-center">
            <span className="text-xs uppercase tracking-luxury text-muted-foreground block mb-4">
              Пространство красоты RUTZ
            </span>
            <h1 className="serif text-5xl sm:text-6xl md:text-7xl mb-6">Блог</h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
              Советы по уходу за волосами, техники окрашивания и истории преображений
              из Telegram-канала Дарьи Рутц.
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

      {/* ── Лента постов ── */}
      <section className="py-16 sm:py-24 md:py-32">
        <div className="max-w-[680px] mx-auto px-4 sm:px-8">
          {posts.length === 0 ? (

            /* Заглушка */
            <AnimateOnScroll animation="fade-up" className="text-center max-w-xl mx-auto">
              <p className="text-muted-foreground leading-relaxed mb-8">
                Посты из Telegram-канала появятся здесь автоматически.
                Пока заходите напрямую в канал.
              </p>
              <Link
                href="https://t.me/rutzprostranstvo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-foreground text-background px-8 py-4 rounded-2xl text-xs uppercase tracking-luxury transition-luxury hover:bg-foreground/80"
              >
                Открыть Telegram-канал <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
              </Link>
            </AnimateOnScroll>

          ) : (

            /* Вертикальная лента */
            <div className="divide-y divide-border/40">
              {posts.map((post, i) => (
                <AnimateOnScroll
                  key={post.id}
                  animation="fade-up"
                  delay={i * 60}
                >
                  <article className="py-10 first:pt-0">

                    {/* Медиа-блок — без рамок, во всю ширину поста */}
                    {(post.photos.length > 0 || post.videos.length > 0) && (
                      <div className="overflow-hidden mb-6">
                        <MediaSlider
                          photos={post.photos}
                          videos={post.videos}
                          priority={i === 0}
                        />
                      </div>
                    )}

                    {/* Дата */}
                    <time
                      dateTime={post.date.toISOString()}
                      className="text-xs uppercase tracking-luxury text-muted-foreground block mb-4"
                    >
                      {formatDate(post.date)}
                    </time>

                    {/* Текст поста */}
                    {post.text && (
                      <p className="text-sm sm:text-base leading-relaxed text-muted-foreground mb-5 whitespace-pre-line">
                        {truncate(post.text, 256)}
                      </p>
                    )}

                    {/* Ссылка на оригинал */}
                    <Link
                      href={post.messageUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs uppercase tracking-luxury transition-luxury hover:gap-3 duration-300"
                    >
                      Смотреть в Telegram <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                    </Link>
                  </article>
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
            <h2 className="serif text-3xl sm:text-4xl mb-6">Больше в Telegram</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed">
              Подписывайтесь на канал — там все работы, советы и акции первыми
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://t.me/rutzprostranstvo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-foreground text-background px-10 py-5 rounded-2xl text-xs uppercase tracking-luxury transition-luxury hover:bg-foreground/80"
              >
                Telegram-канал <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
              </Link>
              <Link
                href="/contacts"
                className="inline-flex items-center justify-center gap-2 border border-border/60 px-10 py-5 rounded-2xl text-xs uppercase tracking-luxury transition-luxury hover:bg-accent/60 glass-subtle"
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
