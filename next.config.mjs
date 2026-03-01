/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      // Telegram CDN — фотографии из постов канала
      {
        protocol: 'https',
        hostname: '**.telegram.st',
      },
      {
        protocol: 'https',
        hostname: 'api.telegram.org',
      },
    ],
  },
}

export default nextConfig
