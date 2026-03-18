import type { MetadataRoute } from 'next'
import { fetchChannelPosts } from '@/lib/telegram'

const BASE_URL = 'https://rutz.beauty'

const staticPages = [
  { url: '/', priority: 1.0, changeFrequency: 'weekly' as const },
  { url: '/about', priority: 0.8, changeFrequency: 'monthly' as const },
  { url: '/services', priority: 0.9, changeFrequency: 'monthly' as const },
  { url: '/education', priority: 0.8, changeFrequency: 'monthly' as const },
  { url: '/reviews', priority: 0.7, changeFrequency: 'weekly' as const },
  { url: '/blog', priority: 0.8, changeFrequency: 'daily' as const },
  { url: '/contacts', priority: 0.7, changeFrequency: 'monthly' as const },
  { url: '/privacy', priority: 0.3, changeFrequency: 'yearly' as const },
  { url: '/terms', priority: 0.3, changeFrequency: 'yearly' as const },
  { url: '/consent', priority: 0.3, changeFrequency: 'yearly' as const },
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const static_: MetadataRoute.Sitemap = staticPages.map(({ url, priority, changeFrequency }) => ({
    url: `${BASE_URL}${url}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }))

  let blogPosts: MetadataRoute.Sitemap = []
  try {
    const posts = await fetchChannelPosts(20)
    blogPosts = posts.map((post) => ({
      url: `${BASE_URL}/blog/${post.id}`,
      lastModified: new Date(post.date),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))
  } catch {
    // Telegram недоступен — возвращаем только статические страницы
  }

  return [...static_, ...blogPosts]
}
