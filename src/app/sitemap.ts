import type { MetadataRoute } from 'next';

import { envConfigs } from '@/config';
import { defaultLocale, locales } from '@/config/locale';
import { BABA_LONG_TAIL_ROUTES } from '@/shared/blocks/baba-dance/long-tails';
import { BBY_LONG_TAIL_ROUTES } from '@/shared/blocks/bby-wow/long-tails';
import { BULIN_LONG_TAIL_ROUTES } from '@/shared/blocks/bulin-47/long-tails';
import { HIT_THE_ROAD_LONG_TAIL_ROUTES } from '@/shared/blocks/hit-the-road-dude/long-tails';
import { NOSTALGIA_LONG_TAIL_ROUTES } from '@/shared/blocks/nostalgia/long-tails';
import { PEDRA_LONG_TAIL_ROUTES } from '@/shared/blocks/pedra-do-sal/long-tails';
import { TINY_DESK_LONG_TAIL_ROUTES } from '@/shared/blocks/tiny-desk/long-tails';
import { WASSUP_LONG_TAIL_ROUTES } from '@/shared/blocks/wassup-in-a-minute/long-tails';
import { getPostsAndCategories, isHiddenFromBlog } from '@/shared/models/post';

function safeLastModified(value: string | Date | null | undefined, fallback: Date): Date {
  if (!value) return fallback;
  const date = value instanceof Date ? value : new Date(value);
  return Number.isNaN(date.getTime()) ? fallback : date;
}

// indexable landing routes (privacy/terms are disallowed in robots.ts)
const staticRoutes = [
  { path: '/', priority: 1, changeFrequency: 'daily' as const },
  { path: '/nostalgia-ai-template', priority: 0.9, changeFrequency: 'weekly' as const },
  ...NOSTALGIA_LONG_TAIL_ROUTES,
  { path: '/wassup-in-a-minute-ai-template', priority: 0.9, changeFrequency: 'weekly' as const },
  ...WASSUP_LONG_TAIL_ROUTES,
  { path: '/ba-ba-ba-dance-ai-template', priority: 0.9, changeFrequency: 'weekly' as const },
  ...BABA_LONG_TAIL_ROUTES,
  { path: '/hotel-lobby-ai-template', priority: 0.9, changeFrequency: 'weekly' as const },
  { path: '/burning-bridges-ai-template', priority: 0.9, changeFrequency: 'weekly' as const },
  { path: '/bulin-47-ai-template', priority: 0.9, changeFrequency: 'weekly' as const },
  ...BULIN_LONG_TAIL_ROUTES,
  { path: '/tiny-desk-outstanding-ai-template', priority: 0.9, changeFrequency: 'weekly' as const },
  ...TINY_DESK_LONG_TAIL_ROUTES,
  { path: '/window-peeper-ai-template', priority: 0.9, changeFrequency: 'weekly' as const },
  { path: '/pedra-do-sal-ai-template', priority: 0.9, changeFrequency: 'weekly' as const },
  ...PEDRA_LONG_TAIL_ROUTES,
  { path: '/bby-wow-ai-dance-template', priority: 0.9, changeFrequency: 'weekly' as const },
  ...BBY_LONG_TAIL_ROUTES,
  { path: '/hit-the-road-dude-ai-template', priority: 0.9, changeFrequency: 'weekly' as const },
  ...HIT_THE_ROAD_LONG_TAIL_ROUTES,
  { path: '/ozil-ai-goal-template', priority: 0.9, changeFrequency: 'weekly' as const },
  { path: '/cat-clapping-ai-template', priority: 0.9, changeFrequency: 'weekly' as const },
  { path: '/ai-video-generator', priority: 0.9, changeFrequency: 'weekly' as const },
  { path: '/pricing', priority: 0.8, changeFrequency: 'weekly' as const },
  { path: '/subscribe', priority: 0.8, changeFrequency: 'weekly' as const },
  { path: '/ai-image-generator', priority: 0.6, changeFrequency: 'weekly' as const },
  { path: '/ai-music-generator', priority: 0.6, changeFrequency: 'weekly' as const },
  { path: '/blog', priority: 0.7, changeFrequency: 'daily' as const },
  { path: '/updates', priority: 0.5, changeFrequency: 'weekly' as const },
  { path: '/docs', priority: 0.4, changeFrequency: 'monthly' as const },
];

function localePath(locale: string, path: string): string {
  const prefix = locale === defaultLocale ? '' : `/${locale}`;
  return `${envConfigs.app_url}${prefix}${path === '/' ? '' : path}`;
}

function staticEntries(now: Date): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];
  for (const locale of locales) {
    for (const route of staticRoutes) {
      const url = localePath(locale, route.path);
      if (!url.startsWith('http')) continue;
      entries.push({
        url,
        lastModified: now,
        changeFrequency: route.changeFrequency,
        priority: route.priority,
      });
    }
  }
  return entries;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const entries = staticEntries(now);

  // blog posts from local mdx + remote db (db may be unavailable outside worker runtime)
  for (const locale of locales) {
    try {
      const { posts } = await getPostsAndCategories({ locale, page: 1, limit: 500 });
      for (const post of posts) {
        if (!post.url) continue;
        if (isHiddenFromBlog(post)) continue;
        const url = localePath(locale, post.url);
        if (!url.startsWith('http')) continue;
        entries.push({
          url,
          lastModified: safeLastModified(post.created_at, now),
          changeFrequency: 'weekly',
          priority: 0.6,
        });
      }
    } catch (e) {
      console.log('sitemap: load posts failed for locale', locale, e);
    }
  }

  return entries.length > 0 ? entries : staticEntries(now);
}
