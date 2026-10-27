import bundleAnalyzer from '@next/bundle-analyzer';
import path from 'node:path';
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
  // Alias the `shiki` main entry to a slim bundle: the full package registers
  // ~200 TextMate grammars + oniguruma wasm, which the OpenNext bundler inlines
  // into handler.mjs and pushed the worker past Cloudflare's 63.9 MiB limit
  // (error 10027). The shim keeps the same public API with a small allow-list.
  // The exact-match `$` aliases leave subpaths (shiki/core, shiki/langs/*)
  // pointing at the real package, which the shim itself imports.
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      shiki$: path.resolve('./src/shared/lib/shiki-slim.ts'),
      'shiki/engine/oniguruma$': path.resolve(
        './src/shared/lib/shiki-oniguruma-stub.ts'
      ),
      'shiki/wasm$': path.resolve('./src/shared/lib/shiki-wasm-stub.ts'),
    };
    // Next externalizes `import("shiki")` (it appears verbatim as
    // `a.exports = import("shiki")` in the server chunks), and webpack
    // externals take precedence over resolve.alias — so the alias above only
    // works once shiki requests are removed from the externals list.
    const skipExternal = (request) =>
      typeof request === 'string' && request.startsWith('shiki');
    const externals = config.externals;
    if (Array.isArray(externals)) {
      config.externals = externals.map((external) => {
        if (typeof external !== 'function') return external;
        return (context, callback) => {
          if (skipExternal(context.request)) return callback();
          return external(context, callback);
        };
      });
    } else if (typeof externals === 'function') {
      const original = externals;
      config.externals = (context, callback) => {
        if (skipExternal(context.request)) return callback();
        return original(context, callback);
      };
    }
    return config;
  },
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
      ['/tinydesk-outstanding-original', '/tiny-desk-outstanding-original'],
      ['/tiny-desk-outstanding-original-video', '/tiny-desk-outstanding-original'],
      ['/outstanding-tiny-desk-original', '/tiny-desk-outstanding-original'],
      ['/photo-to-tiny-desk-outstanding', '/tiny-desk-outstanding-from-photo'],
      ['/tiny-desk-outstanding-from-photos', '/tiny-desk-outstanding-from-photo'],
      ['/tinydesk-outstanding-from-photo', '/tiny-desk-outstanding-from-photo'],
      ['/tinydesk-outstanding-online', '/tiny-desk-outstanding-online'],
      ['/tiny-desk-outstanding-ai-online', '/tiny-desk-outstanding-online'],
      ['/outstanding-tiny-desk-online', '/tiny-desk-outstanding-online'],
      ['/create-outstanding-tiny-desk-ai', '/create-tiny-desk-outstanding-ai'],
      ['/create-tinydesk-outstanding-ai', '/create-tiny-desk-outstanding-ai'],
      ['/charlie-wilson-outstanding', '/charlie-wilson-outstanding-ai'],
      ['/charlie-wilson-outstanding-tiny-desk', '/charlie-wilson-outstanding-ai'],
      ['/washed-anthem-tinydesk', '/washed-anthem-tiny-desk'],
      ['/washed-anthem-tiny-desk-ai', '/washed-anthem-tiny-desk'],
      ['/tiny-desk-outstanding-reels', '/tiny-desk-outstanding-instagram'],
      ['/tiny-desk-outstanding-instagram-reels', '/tiny-desk-outstanding-instagram'],
      ['/tinydesk-outstanding-instagram', '/tiny-desk-outstanding-instagram'],
      ['/tiny-desk-outstanding-shorts', '/tiny-desk-outstanding-youtube-shorts'],
      ['/tinydesk-outstanding-youtube-shorts', '/tiny-desk-outstanding-youtube-shorts'],
      ['/outstanding-tiny-desk-shorts', '/tiny-desk-outstanding-youtube-shorts'],
      ['/tinydesk-outstanding-mp4', '/tiny-desk-outstanding-mp4'],
      ['/tiny-desk-outstanding-download', '/tiny-desk-outstanding-mp4'],
      ['/outstanding-tiny-desk-mp4', '/tiny-desk-outstanding-mp4'],
      ['/gap-band-tinydesk-ai', '/gap-band-tiny-desk-ai'],
      ['/gapband-tiny-desk-ai', '/gap-band-tiny-desk-ai'],
      ['/gap-band-tiny-desk', '/gap-band-tiny-desk-ai'],
      ['/tiny-desk-outstanding-parody', '/tiny-desk-outstanding-fan-parody'],
      ['/tinydesk-outstanding-fan-parody', '/tiny-desk-outstanding-fan-parody'],
      ['/outstanding-tiny-desk-fan-parody', '/tiny-desk-outstanding-fan-parody'],
      ['/outstanding-tinydesk-generator', '/outstanding-tiny-desk-generator'],
      ['/outstanding-tiny-desk-ai-generator', '/outstanding-tiny-desk-generator'],
      ['/how-to-make-tiny-desk-outstanding', '/blog/how-to-make-tiny-desk-outstanding-ai-video'],
      ['/how-to-make-tiny-desk-outstanding-ai', '/blog/how-to-make-tiny-desk-outstanding-ai-video'],
      ['/tiny-desk-outstanding-three-photos', '/tiny-desk-outstanding-from-photo'],
      ['/uncle-charlie-tiny-desk', '/charlie-wilson-tiny-desk-ai'],
      ['/uncle-charlie-tiny-desk-ai', '/charlie-wilson-tiny-desk-ai'],
      ['/ba-ba-ba-dance', '/ba-ba-ba-dance-ai-template'],
      ['/bababa-dance', '/ba-ba-ba-dance-ai-template'],
      ['/bababa-dance-ai-template', '/ba-ba-ba-dance-ai-template'],
      ['/baba-ba-ba-dance', '/ba-ba-ba-dance-ai-template'],
      ['/ba-ba-ba-dace', '/ba-ba-ba-dance-ai-template'],
      ['/ba-ba-ba-dance-from-sing', '/ba-ba-ba-dance-ai-template'],
      ['/bababa-dance-ai', '/ba-ba-ba-dance-ai'],
      ['/ba-ba-ba-dace-ai', '/ba-ba-ba-dance-ai'],
      ['/bababa-dance-ai-video', '/ba-ba-ba-dance-ai-video'],
      ['/ba-ba-ba-dace-ai-video', '/ba-ba-ba-dance-ai-video'],
      ['/bababa-dance-template', '/ba-ba-ba-dance-template'],
      ['/ba-ba-ba-dace-template', '/ba-ba-ba-dance-template'],
      ['/bababa-dance-tiktok', '/ba-ba-ba-dance-tiktok'],
      ['/ba-ba-ba-dace-tiktok', '/ba-ba-ba-dance-tiktok'],
      ['/ba-ba-ba-duo', '/ba-ba-ba-duo-dance'],
      ['/bababa-duo-dance', '/ba-ba-ba-duo-dance'],
      ['/bababa-dance-meme', '/ba-ba-ba-dance-meme'],
      ['/ba-ba-ba-dace-meme', '/ba-ba-ba-dance-meme'],
      ['/bababa-dance-generator', '/ba-ba-ba-dance-generator'],
      ['/ba-ba-ba-dace-generator', '/ba-ba-ba-dance-generator'],
      ['/ba-ba-ba-dance-video-generator', '/ba-ba-ba-dance-generator'],
      ['/bababa-dance-ai-generator', '/ba-ba-ba-dance-ai-generator'],
      ['/ba-ba-ba-dace-ai-generator', '/ba-ba-ba-dance-ai-generator'],
      ['/bababa-dance-capcut', '/ba-ba-ba-dance-capcut'],
      ['/ba-ba-ba-dace-capcut', '/ba-ba-ba-dance-capcut'],
      ['/ba-ba-ba-dance-cap-cut', '/ba-ba-ba-dance-capcut'],
      ['/bababa-dance-without-capcut', '/ba-ba-ba-dance-without-capcut'],
      ['/ba-ba-ba-dace-without-capcut', '/ba-ba-ba-dance-without-capcut'],
      ['/ba-ba-ba-dance-no-capcut', '/ba-ba-ba-dance-without-capcut'],
      ['/bababa-dance-no-capcut', '/ba-ba-ba-dance-without-capcut'],
      ['/bababa-dance-song', '/ba-ba-ba-dance-song'],
      ['/ba-ba-ba-dace-song', '/ba-ba-ba-dance-song'],
      ['/ba-ba-ba-dance-songs', '/ba-ba-ba-dance-song'],
      ['/make-bababa-dance-ai', '/make-ba-ba-ba-dance-ai'],
      ['/make-ba-ba-ba-dace-ai', '/make-ba-ba-ba-dance-ai'],
      ['/bababa-dance-original', '/ba-ba-ba-dance-original'],
      ['/ba-ba-ba-dace-original', '/ba-ba-ba-dance-original'],
      ['/ba-ba-ba-tiktok', '/ba-ba-ba-tiktok-dance'],
      ['/bababa-tiktok-dance', '/ba-ba-ba-tiktok-dance'],
      ['/ba-ba-ba-dace-tiktok-dance', '/ba-ba-ba-tiktok-dance'],
      ['/bby-wow', '/bby-wow-ai-dance-template'],
      ['/bbywow', '/bby-wow-ai-dance-template'],
      ['/bby-wow-template', '/bby-wow-ai-dance-template'],
      ['/bby-wow-online', '/bby-wow-ai-dance-template'],
      ['/bby-wow-ai-online', '/bby-wow-ai-dance-template'],
      ['/bb-y-wow', '/bby-wow-song'],
      ['/bby-wow-track', '/bby-wow-song'],
      ['/karol-g-bby-wow', '/bby-wow-song'],
      ['/karol-g-bby-wow-ai', '/bby-wow-song'],
      ['/bby-wow-generator', '/bby-wow-ai-generator'],
      ['/bbywow-ai-generator', '/bby-wow-ai-generator'],
      ['/bby-wow-video-generator', '/bby-wow-ai-generator'],
      ['/bby-wow-mp4', '/bby-wow-ai-video'],
      ['/bby-wow-ai-mp4', '/bby-wow-ai-video'],
      ['/bby-wow-download', '/bby-wow-ai-video'],
      ['/bby-wow-from-photos', '/bby-wow-from-photo'],
      ['/photo-to-bby-wow', '/bby-wow-from-photo'],
      ['/bby-wow-photo', '/bby-wow-from-photo'],
      ['/bby-wow-capcut', '/dime-dime-baby-capcut'],
      ['/bby-wow-cap-cut', '/dime-dime-baby-capcut'],
      ['/bby-wow-without-capcut', '/dime-dime-baby-without-capcut'],
      ['/bby-wow-no-capcut', '/dime-dime-baby-without-capcut'],
      ['/bread-bite-ai', '/bby-wow-meme'],
      ['/bread-bite-meme', '/bby-wow-meme'],
      ['/concha-bite-meme', '/quince-concha-meme'],
      ['/concha-bite-ai', '/quince-concha-meme'],
      ['/dimedimebaby', '/dime-dime-baby'],
      ['/dime-dimebaby', '/dime-dime-baby'],
      ['/dime-dime-baby-ai-generator', '/dime-dime-baby-generator'],
      ['/dimedime-baby-generator', '/dime-dime-baby-generator'],
      ['/make-dime-dime-baby', '/make-dime-dime-baby-ai'],
      ['/make-dimedime-baby-ai', '/make-dime-dime-baby-ai'],
      ['/dime-dime-baby-sound', '/dime-dime-baby-song'],
      ['/dime-dime-baby-audio', '/dime-dime-baby-song'],
      ['/dime-dime-baby-songs', '/dime-dime-baby-song'],
      ['/dime-dime-baby-video', '/dime-dime-baby-ai-video'],
      ['/dime-dime-baby-mp4', '/dime-dime-baby-ai-video'],
      ['/dime-dime-baby-download', '/dime-dime-baby-ai-video'],
      ['/dime-dime-baby-from-photo', '/bby-wow-from-photo'],
      ['/dime-dime-baby-cap-cut', '/dime-dime-baby-capcut'],
      ['/dimedime-baby-capcut', '/dime-dime-baby-capcut'],
      ['/dime-dime-baby-no-capcut', '/dime-dime-baby-without-capcut'],
      ['/dime-dime-baby-capcut-alternative', '/dime-dime-baby-without-capcut'],
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
