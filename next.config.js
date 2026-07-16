/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    unoptimized: false,
    formats: ['image/webp', 'image/avif'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn-icons-png.flaticon.com',
      },
      {
        protocol: 'https',
        hostname: 'profit.pakistantoday.com.pk',
      },
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  redirects: async () => [
    { source: '/leadership', destination: '/about/management-team', permanent: true },
    { source: '/structure', destination: '/about/management-team', permanent: true },
    // British-English URL migration: old American slugs → new British slugs (preserve SEO / inbound links)
    { source: '/programs/ai-tech-programs', destination: '/programmes/ai-tech-programmes', permanent: true },
    { source: '/programs/skill-development-center', destination: '/programmes/skill-development-centre', permanent: true },
    { source: '/programs/incubation-collective-startups', destination: '/programmes/incubation-collective-startups', permanent: true },
    // /initiatives/ai-tech-programs was a duplicate of the programmes page — consolidated to one canonical URL
    { source: '/initiatives/ai-tech-programs', destination: '/programmes/ai-tech-programmes', permanent: true },
    { source: '/initiatives/ai-tech-programmes', destination: '/programmes/ai-tech-programmes', permanent: true },
  ],
  headers: async () => [
    {
      source: '/image/:path*',
      headers: [
        { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
      ],
    },
    {
      source: '/:path*.mp4',
      headers: [
        { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
      ],
    },
  ],
}

module.exports = nextConfig
