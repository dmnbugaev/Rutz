import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { AnimateOnScroll } from '@/components/AnimateOnScroll'
import { MediaSlider } from '@/components/MediaSlider'
import { fetchChannelPosts, fetchPost } from '@/lib/telegram'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'

export const revalidate = 3600

export async function generateStaticParams() {
  const posts = await fetchChannelPosts(20)
  return posts.map((post) => ({ id: String(post.id) }))
}

export async function generateMetadata({
  params,
}: {
  params: { id: string }
}): Promise<Metadata> {
  const post = await fetchPost(Number(params.id))
  if (!post) return { title: 'Пост не найден' }

  const description = post.text.slice(0, 160).replace(/\n/g, ' ')
  const date = post.date.toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return {
    title: `Блог — ${date}`,
    description,
    openGraph: {
      description,
      ...(post.photos[0] ? { images: [{ url: post.photos[0] }] } : {}),
    },
  }
}

function formatDate(date: Date): string {
  return date.toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export default async function BlogPostPage({ params }: { params: { id: string } }) {
  const post = await fetchPost(Number(params.id))
  if (!post) notFound()

  return (
    <div className="min-h-screen">

      {/* ── Назад ── */}
      <div className="max-w-3xl mx-auto px-4 sm:px-8 pt-8 sm:pt-12">
        <AnimateOnScroll animation="fade-in">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-luxury text-muted-foreground transition-luxury hover:text-foreground hover:gap-3 duration-300"
          >
            <ArrowLeft className="w-3.5 h-3.5" strokeWidth={1.5} />
            Все посты
          </Link>
        </AnimateOnScroll>
      </div>

      {/* ── Медиа ── */}
      {(post.photos.length > 0 || post.videos.length > 0) && (
        <section className="py-8 sm:py-12">
          <div className="max-w-3xl mx-auto px-4 sm:px-8">
            <AnimateOnScroll animation="fade-up">
              <MediaSlider
                photos={post.photos}
                videos={post.videos}
                priority
              />
            </AnimateOnScroll>
          </div>
        </section>
      )}

      {/* ── Контент ── */}
      <section className="py-10 sm:py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-8">
          <AnimateOnScroll animation="fade-up">
            <time
              dateTime={post.date.toISOString()}
              className="text-xs uppercase tracking-luxury text-muted-foreground block mb-8"
            >
              {formatDate(post.date)}
            </time>

            {post.html ? (
              <div
                className="
                  text-sm sm:text-base leading-relaxed text-foreground
                  [&_p]:mb-4 [&_p:last-child]:mb-0
                  [&_strong]:font-semibold [&_b]:font-semibold
                  [&_em]:italic [&_i]:italic
                  [&_a]:underline [&_a]:underline-offset-2 [&_a]:transition-opacity [&_a]:hover:opacity-60
                  [&_code]:font-mono [&_code]:text-sm [&_code]:bg-accent [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded
                  [&_br]:hidden
                "
                dangerouslySetInnerHTML={{ __html: post.html }}
              />
            ) : (
              <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                {post.text}
              </p>
            )}
          </AnimateOnScroll>

          {/* ── Ссылка на оригинал ── */}
          <AnimateOnScroll animation="fade-up" delay={200}>
            <div className="mt-14 sm:mt-20 pt-8 border-t border-border flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              <p className="text-sm text-muted-foreground">
                Оригинал поста — Telegram-канал RUTZ
              </p>
              <Link
                href={post.messageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-foreground text-background px-7 py-3.5 text-xs uppercase tracking-luxury transition-luxury hover:bg-foreground/80 whitespace-nowrap"
              >
                Открыть в Telegram <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  )
}
