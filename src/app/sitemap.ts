import type { MetadataRoute } from 'next';

import { absoluteSiteUrl } from '@/config/site-url';
import { defaultLocale, locales } from '@/config/locale';
import { isPrunedPath } from '@/config/seo-pruning';
import { BABA_LONG_TAIL_ROUTES } from '@/shared/blocks/baba-dance/long-tails';
import { BICEP_HEART_LONG_TAIL_ROUTES } from '@/shared/blocks/bicep-heart/long-tails';
import { BBY_LONG_TAIL_ROUTES } from '@/shared/blocks/bby-wow/long-tails';
import { BULIN_LONG_TAIL_ROUTES } from '@/shared/blocks/bulin-47/long-tails';
import { CHARLIE_BROWN_LONG_TAIL_ROUTES } from '@/shared/blocks/charlie-brown-christmas/long-tails';
import { DANCE_WITH_SANTA_LONG_TAIL_ROUTES } from '@/shared/blocks/dance-with-santa/long-tails';
import { GIVE_IT_ALL_LONG_TAIL_ROUTES } from '@/shared/blocks/give-it-all/long-tails';
import { FANCY_CAFE_LONG_TAIL_ROUTES } from '@/shared/blocks/fancy-cafe/long-tails';
import { PIMPWALK_LONG_TAIL_ROUTES } from '@/shared/blocks/pimpwalk-entrance/long-tails';
import { HIT_THE_ROAD_LONG_TAIL_ROUTES } from '@/shared/blocks/hit-the-road-dude/long-tails';
import { NOSTALGIA_LONG_TAIL_ROUTES } from '@/shared/blocks/nostalgia/long-tails';
import { ALORS_ON_DANSE_LONG_TAIL_ROUTES } from '@/shared/blocks/alors-on-danse/long-tails';
import { SASHA_LA_CATRINA_LONG_TAIL_ROUTES } from '@/shared/blocks/sasha-la-catrina/long-tails';
import { PEDRA_LONG_TAIL_ROUTES } from '@/shared/blocks/pedra-do-sal/long-tails';
import { TINY_DESK_LONG_TAIL_ROUTES } from '@/shared/blocks/tiny-desk/long-tails';
import { WASSUP_LONG_TAIL_ROUTES } from '@/shared/blocks/wassup-in-a-minute/long-tails';
import { CITE_ROUTES } from '@/shared/blocks/series-cite/catalog';
import { getPostsAndCategories, isHiddenFromBlog } from '@/shared/models/post';

function safeLastModified(value: string | Date | null | undefined, fallback: Date): Date {
  if (!value) return fallback;
  const date = value instanceof Date ? value : new Date(value);
  return Number.isNaN(date.getTime()) ? fallback : date;
}

// indexable landing routes. Privacy and terms are allowed in robots.txt.
const staticRoutes = [
  { path: '/', priority: 1, changeFrequency: 'daily' as const },
  { path: '/sasha-la-catrina-ai-template', priority: 0.9, changeFrequency: 'weekly' as const },
  ...SASHA_LA_CATRINA_LONG_TAIL_ROUTES,
  { path: '/pimpwalk-entrance-ai-template', priority: 0.9, changeFrequency: 'weekly' as const },
  ...PIMPWALK_LONG_TAIL_ROUTES,
  { path: '/first-time-in-a-fancy-cafe-ai-template', priority: 0.9, changeFrequency: 'weekly' as const },
  ...FANCY_CAFE_LONG_TAIL_ROUTES,
  { path: '/charlie-brown-christmas-ai-template', priority: 0.9, changeFrequency: 'weekly' as const },
  ...CHARLIE_BROWN_LONG_TAIL_ROUTES,
  { path: '/dance-with-santa-ai-template', priority: 0.9, changeFrequency: 'weekly' as const },
  ...DANCE_WITH_SANTA_LONG_TAIL_ROUTES,
  { path: '/gta-5-goodbye-ai-template', priority: 0.9, changeFrequency: 'weekly' as const },
  { path: '/give-it-all-ai-template', priority: 0.9, changeFrequency: 'weekly' as const },
  ...GIVE_IT_ALL_LONG_TAIL_ROUTES,
  { path: '/nostalgia-ai-template', priority: 0.9, changeFrequency: 'weekly' as const },
  { path: '/alors-on-danse-ai-template', priority: 0.9, changeFrequency: 'weekly' as const },
  ...NOSTALGIA_LONG_TAIL_ROUTES,
  ...ALORS_ON_DANSE_LONG_TAIL_ROUTES,
  { path: '/wassup-in-a-minute-ai-template', priority: 0.9, changeFrequency: 'weekly' as const },
  ...WASSUP_LONG_TAIL_ROUTES,
  { path: '/ba-ba-ba-dance-ai-template', priority: 0.9, changeFrequency: 'weekly' as const },
  ...BABA_LONG_TAIL_ROUTES,
  { path: '/hotel-lobby-ai-template', priority: 0.9, changeFrequency: 'weekly' as const },
  { path: '/burning-bridges-ai-template', priority: 0.9, changeFrequency: 'weekly' as const },
  { path: '/bulin-47-ai-template', priority: 0.9, changeFrequency: 'weekly' as const },
  ...BULIN_LONG_TAIL_ROUTES,
  { path: '/bicep-heart-ai-template', priority: 0.9, changeFrequency: 'weekly' as const },
  ...BICEP_HEART_LONG_TAIL_ROUTES,
  { path: '/vossi-bop-dance-ai-template', priority: 0.9, changeFrequency: 'weekly' as const },
  { path: '/gangstas-paradise-ai-template', priority: 0.9, changeFrequency: 'weekly' as const },
  { path: '/never-let-her-pay-ai-template', priority: 0.9, changeFrequency: 'weekly' as const },
  { path: '/santa-nice-list-ai-template', priority: 0.9, changeFrequency: 'weekly' as const },
  { path: '/grandpa-said-hed-handle-dinner-ai-template', priority: 0.9, changeFrequency: 'weekly' as const },
  { path: '/tiny-desk-outstanding-ai-template', priority: 0.9, changeFrequency: 'weekly' as const },
  ...TINY_DESK_LONG_TAIL_ROUTES,
  { path: '/window-peeper-ai-template', priority: 0.9, changeFrequency: 'weekly' as const },
  ...CITE_ROUTES,
  { path: '/pedra-do-sal-ai-template', priority: 0.9, changeFrequency: 'weekly' as const },
  ...PEDRA_LONG_TAIL_ROUTES,
  { path: '/bby-wow-ai-dance-template', priority: 0.9, changeFrequency: 'weekly' as const },
  ...BBY_LONG_TAIL_ROUTES,
  { path: '/hit-the-road-dude-ai-template', priority: 0.9, changeFrequency: 'weekly' as const },
  ...HIT_THE_ROAD_LONG_TAIL_ROUTES,
  { path: '/ozil-ai-goal-template', priority: 0.9, changeFrequency: 'weekly' as const },
  { path: '/cat-clapping-ai-template', priority: 0.9, changeFrequency: 'weekly' as const },
  { path: '/ai-duet-video-maker', priority: 0.8, changeFrequency: 'monthly' as const },
  // /ai-video-generator-from-photos is retired: the page file was removed and
  // seo-pruning.ts 301s the URL to the homepage. /ai-video-generator,
  // /ai-image-generator, and /ai-music-generator stay
  // routable but are noindex and omitted here. They are thin boilerplate pages.
  { path: '/pricing', priority: 0.8, changeFrequency: 'weekly' as const },
  { path: '/subscribe', priority: 0.8, changeFrequency: 'weekly' as const },
  { path: '/blog', priority: 0.7, changeFrequency: 'daily' as const },
  { path: '/authors/lena-ortiz', priority: 0.3, changeFrequency: 'monthly' as const },
  { path: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly' as const },
  { path: '/terms-of-service', priority: 0.3, changeFrequency: 'yearly' as const },
  { path: '/updates', priority: 0.5, changeFrequency: 'weekly' as const },
  { path: '/docs', priority: 0.4, changeFrequency: 'monthly' as const },
];

function localePath(locale: string, path: string): string {
  const prefix = locale === defaultLocale ? '' : `/${locale}`;
  const localized = `${prefix}${path === '/' ? '' : path}` || '/';
  return absoluteSiteUrl(localized);
}

// static pages: omit lastmod entirely — regenerating it at deploy time would
// stamp every unchanged page as "modified now", which engines distrust and
// ignore; blog posts below keep their real created_at timestamps
function staticEntries(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];
  for (const locale of locales) {
    for (const route of staticRoutes) {
      // 410/301 pages stay out of the sitemap: listing a URL we answer with
      // Gone or Redirect is a contradictory signal. See config/seo-pruning.
      if (isPrunedPath(route.path)) continue;
      const url = localePath(locale, route.path);
      if (!url.startsWith('https://') && !url.startsWith('http://localhost')) continue;
      entries.push({
        url,
        changeFrequency: route.changeFrequency,
        priority: route.priority,
      });
    }
  }
  return entries;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const entries = staticEntries();

  // blog posts from local mdx + remote db (db may be unavailable outside worker runtime)
  for (const locale of locales) {
    try {
      const { posts } = await getPostsAndCategories({ locale, page: 1, limit: 500 });
      for (const post of posts) {
        if (!post.url) continue;
        if (isHiddenFromBlog(post)) continue;
        // 中文博客 noindex（用户要求），同步从 sitemap 移除，避免混合信号
        if (locale === 'zh') continue;
        const url = localePath(locale, post.url);
        if (!url.startsWith('https://') && !url.startsWith('http://localhost')) continue;
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

  return entries.length > 0 ? entries : staticEntries();
}
