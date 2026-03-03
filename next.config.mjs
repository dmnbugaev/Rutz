/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // Telegram CDN — фотографии из постов канала
      {
        protocol: 'https',
        hostname: '**.telegram.st',
      },
      {
        protocol: 'https',
        hostname: '**.telesco.pe',
      },
      {
        protocol: 'https',
        hostname: 'api.telegram.org',
      },
    ],
  },
}

export default nextConfig
