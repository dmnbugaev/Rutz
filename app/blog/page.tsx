import type { Metadata } from 'next'
import Link from 'next/link'
import { AnimateOnScroll } from '@/components/AnimateOnScroll'
import { PhotoSlider } from '@/components/PhotoSlider'
import { fetchChannelPosts } from '@/lib/telegram'
import { ArrowRight, ArrowUpRight } from 'lucide-react'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Блог',
  description:
    'Блог пространства красоты RUTZ. Советы по уходу за волосами, новинки колористики и истории преображений из Telegram-канала Дарьи Рутц.',
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
  const posts = await fetchChannelPosts(20)

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

      {/* ── Посты ── */}
      <section className="py-16 sm:py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
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
                className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 text-xs uppercase tracking-luxury transition-luxury hover:bg-foreground/80"
              >
                Открыть Telegram-канал <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
              </Link>
            </AnimateOnScroll>

          ) : (

            /* Сетка постов */
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border">
              {posts.map((post, i) => (
                <AnimateOnScroll key={post.id} animation="fade-up" delay={(i % 2) * 80}>
                  <article className="bg-background flex flex-col h-full group">

                    {/* Фото / слайдер */}
                    {post.photos.length > 0 ? (
                      <Link href={`/blog/${post.id}`} className="block overflow-hidden">
                        <PhotoSlider
                          photos={post.photos}
                          className="aspect-[3/4] transition-transform duration-700 group-hover:scale-[1.02]"
                          priority={i < 2}
                        />
                      </Link>
                    ) : (
                      /* Текстовый пост — декоративная заглушка */
                      <Link href={`/blog/${post.id}`} className="block aspect-[3/4] bg-accent/40 flex items-center justify-center overflow-hidden">
                        <span className="serif text-6xl sm:text-7xl text-muted-foreground/20 select-none">
                          RUTZ
                        </span>
                      </Link>
                    )}

                    {/* Текст карточки */}
                    <div className="p-7 sm:p-9 flex flex-col gap-4 flex-1 border-t border-border">
                      <time
                        dateTime={post.date.toISOString()}
                        className="text-xs uppercase tracking-luxury text-muted-foreground"
                      >
                        {formatDate(post.date)}
                      </time>

                      {post.text && (
                        <p className="text-sm leading-relaxed text-muted-foreground line-clamp-4 flex-1">
                          {truncate(post.text, 240)}
                        </p>
                      )}

                      <Link
                        href={`/blog/${post.id}`}
                        className="inline-flex items-center gap-1.5 text-xs uppercase tracking-luxury transition-luxury hover:gap-3 duration-300 mt-auto"
                      >
                        Читать далее <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                      </Link>
                    </div>
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
