import bundleAnalyzer from '@next/bundle-analyzer';
import { initOpenNextCloudflareForDev } from '@opennextjs/cloudflare';
import { createMDX } from 'fumadocs-mdx/next';
import createNextIntlPlugin from 'next-intl/plugin';

const withMDX = createMDX();

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const withNextIntl = createNextIntlPlugin({
  requestConfig: './src/core/i18n/request.ts',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.VERCEL ? undefined : 'standalone',
  reactStrictMode: false,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  // OpenNext Cloudflare will copy full packages listed here into the workerd bundle
  // when they expose a "workerd" export condition. `@libsql/client` does, and without
  // this the OpenNext bundler can fail to resolve it.
  serverExternalPackages: ['@libsql/client', '@libsql/isomorphic-ws'],
  images: {
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    qualities: [60, 70, 75],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
      },
    ],
  },
  async redirects() {
    const aliases = [
      ['/bulin47', '/bulin-47-ai-template'],
      ['/bulin47-ai-template', '/bulin-47-ai-template'],
      ['/bulin-47', '/bulin-47-ai-template'],
      ['/dame-hombro', '/dame-hombro-ai'],
      ['/state-property-meme', '/state-property-meme-ai'],
      ['/tiny-desk-outstanding', '/tiny-desk-outstanding-ai-template'],
      ['/npr-tiny-desk-outstanding', '/tiny-desk-outstanding-ai-template'],
      ['/tiny-desk-outstanding-template', '/tiny-desk-outstanding-ai-template'],
      ['/tinydesk-outstanding-ai-template', '/tiny-desk-outstanding-ai-template'],
      ['/tinydesk-outstanding', '/tiny-desk-outstanding-ai-template'],
      ['/outstanding-tiny-desk', '/tiny-desk-outstanding-ai-template'],
      ['/outstanding-tinydesk', '/tiny-desk-outstanding-ai-template'],
      ['/charlie-wilson-tiny-desk', '/charlie-wilson-tiny-desk-ai'],
      ['/tinydesk-outstanding-ai', '/outstanding-tiny-desk-ai'],
      ['/outstanding-tinydesk-ai', '/outstanding-tiny-desk-ai'],
      ['/tinydesk-outstanding-ai-video', '/outstanding-tiny-desk-ai-video'],
      ['/outstanding-tinydesk-ai-video', '/outstanding-tiny-desk-ai-video'],
      ['/tinydesk-outstanding-meme', '/outstanding-tiny-desk-meme'],
      ['/outstanding-tinydesk-meme', '/outstanding-tiny-desk-meme'],
      ['/tinydesk-outstanding-capcut', '/tiny-desk-outstanding-capcut'],
      ['/tiny-desk-outstanding-cap-cut', '/tiny-desk-outstanding-capcut'],
      ['/tinydesk-outstanding-without-capcut', '/tiny-desk-outstanding-without-capcut'],
      ['/tiny-desk-outstanding-no-capcut', '/tiny-desk-outstanding-without-capcut'],
      ['/tinydesk-outstanding-remix', '/tiny-desk-outstanding-remix'],
      ['/outstanding-tinydesk-remix', '/tiny-desk-outstanding-remix'],
      ['/tinydesk-outstanding-song', '/tiny-desk-outstanding-song'],
      ['/outstanding-tinydesk-song', '/tiny-desk-outstanding-song'],
      ['/tiny-desk-outstanding-songs', '/tiny-desk-outstanding-song'],
      ['/tinydesk-outstanding-generator', '/tiny-desk-outstanding-generator'],
      ['/tinydesk-outstanding-ai-generator', '/tiny-desk-outstanding-ai-generator'],
      ['/tiny-desk-outstanding-video-generator', '/tiny-desk-outstanding-generator'],
      ['/npr-tinydesk-outstanding-ai', '/npr-tiny-desk-outstanding-ai'],
      ['/make-outstanding-tiny-desk-ai', '/make-tiny-desk-outstanding-ai'],
      ['/tinydesk-ai-video-generator', '/tiny-desk-ai-video-generator'],
    ];
    return aliases.flatMap(([source, destination]) => [
      { source, destination, permanent: true },
      { source: `/zh${source}`, destination: `/zh${destination}`, permanent: true },
    ]);
  },
  async headers() {
    return [
      {
        source: '/imgs/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Allow OAuth popups to retain window.opener after cross-origin navigation
        source: '/:path*',
        headers: [
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin-allow-popups',
          },
        ],
      },
    ];
  },
  turbopack: {
    resolveAlias: {
      // fs: {
      //   browser: './empty.ts', // We recommend to fix code imports before using this method
      // },
    },
  },
  experimental: {
    turbopackFileSystemCacheForDev: true,
    // Disable mdxRs for Vercel deployment compatibility with fumadocs-mdx
    ...(process.env.VERCEL ? {} : { mdxRs: true }),
  },
  reactCompiler: true,
};

export default withBundleAnalyzer(withNextIntl(withMDX(nextConfig)));

if (process.env.NODE_ENV !== 'production') {
  initOpenNextCloudflareForDev();
}
