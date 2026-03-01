import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { AnimateOnScroll } from '@/components/AnimateOnScroll'
import { fetchChannelPosts } from '@/lib/telegram'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'

export const revalidate = 3600

export async function generateStaticParams() {
  const posts = await fetchChannelPosts(20).catch(() => [])
  return posts.map((post) => ({ id: String(post.id) }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  const posts = await fetchChannelPosts(20).catch(() => [])
  const post = posts.find((p) => String(p.id) === id)

  if (!post) {
    return { title: 'Пост не найден' }
  }

  const description = post.text.slice(0, 160).replace(/\n/g, ' ')

  return {
    title: `Блог — ${new Date(post.date * 1000).toLocaleDateString('ru-RU', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })}`,
    description,
    openGraph: {
      description,
      ...(post.photoUrl ? { images: [{ url: post.photoUrl }] } : {}),
    },
  }
}

function formatDate(unixTimestamp: number): string {
  return new Date(unixTimestamp * 1000).toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const posts = await fetchChannelPosts(20).catch(() => [])
  const post = posts.find((p) => String(p.id) === id)

  if (!post) notFound()

  return (
    <div className="min-h-screen">

      {/* ── Back link ── */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 pt-8 sm:pt-12">
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

      {/* ── Фото ── */}
      {post.photoUrl && (
        <section className="py-8 sm:py-12">
          <div className="max-w-3xl mx-auto px-4 sm:px-8">
            <AnimateOnScroll animation="fade-up">
              <div className="relative h-[300px] sm:h-[460px] overflow-hidden gallery-frame">
                <Image
                  src={post.photoUrl}
                  alt="Фото из поста"
                  fill
                  className="object-cover grayscale-luxury"
                  sizes="(max-width: 768px) 100vw, 768px"
                  priority
                />
              </div>
            </AnimateOnScroll>
          </div>
        </section>
      )}

      {/* ── Контент ── */}
      <section className="py-12 sm:py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-8">
          <AnimateOnScroll animation="fade-up">
            <span className="text-xs uppercase tracking-luxury text-muted-foreground block mb-8">
              {formatDate(post.date)}
            </span>
            <div
              className="prose prose-sm sm:prose-base max-w-none text-foreground
                prose-strong:text-foreground prose-a:text-foreground prose-a:underline
                prose-code:text-foreground prose-code:bg-accent prose-code:px-1 prose-code:rounded"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up" delay={200}>
            <div className="mt-12 sm:mt-16 pt-8 border-t border-border flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              <p className="text-sm text-muted-foreground">
                Оригинал поста в Telegram-канале RUTZ
              </p>
              <Link
                href={post.messageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-foreground text-background px-7 py-3.5 text-xs uppercase tracking-luxury transition-luxury hover:bg-foreground/80"
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
