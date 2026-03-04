/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
        ],
      },
    ]
  },
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
