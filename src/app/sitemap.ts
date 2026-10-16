import type { MetadataRoute } from 'next';

import { envConfigs } from '@/config';
import { defaultLocale, locales } from '@/config/locale';
import { getPostsAndCategories } from '@/shared/models/post';

// indexable landing routes (privacy/terms are disallowed in robots.ts)
const staticRoutes = [
  { path: '/', priority: 1, changeFrequency: 'daily' as const },
  { path: '/hotel-lobby-ai-template', priority: 0.9, changeFrequency: 'weekly' as const },
  { path: '/burning-bridges-ai-template', priority: 0.9, changeFrequency: 'weekly' as const },
  { path: '/bulin-47-ai-template', priority: 0.9, changeFrequency: 'weekly' as const },
  { path: '/ai-video-generator', priority: 0.9, changeFrequency: 'weekly' as const },
  { path: '/pricing', priority: 0.8, changeFrequency: 'weekly' as const },
  { path: '/subscribe', priority: 0.8, changeFrequency: 'weekly' as const },
  { path: '/ai-image-generator', priority: 0.6, changeFrequency: 'weekly' as const },
  { path: '/ai-music-generator', priority: 0.6, changeFrequency: 'weekly' as const },
  { path: '/blog', priority: 0.7, changeFrequency: 'daily' as const },
  { path: '/showcases', priority: 0.5, changeFrequency: 'weekly' as const },
  { path: '/updates', priority: 0.5, changeFrequency: 'weekly' as const },
  { path: '/docs', priority: 0.4, changeFrequency: 'monthly' as const },
];

function localePath(locale: string, path: string): string {
  const prefix = locale === defaultLocale ? '' : `/${locale}`;
  return `${envConfigs.app_url}${prefix}${path === '/' ? '' : path}`;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const route of staticRoutes) {
      entries.push({
        url: localePath(locale, route.path),
        lastModified: now,
        changeFrequency: route.changeFrequency,
        priority: route.priority,
      });
    }
  }

  // blog posts from local mdx + remote db (db may be unavailable outside worker runtime)
  for (const locale of locales) {
    try {
      const { posts } = await getPostsAndCategories({ locale, page: 1, limit: 500 });
      for (const post of posts) {
        if (!post.url) continue;
        entries.push({
          url: localePath(locale, post.url),
          lastModified: post.created_at ? new Date(post.created_at) : now,
          changeFrequency: 'weekly',
          priority: 0.6,
        });
      }
    } catch (e) {
      console.log('sitemap: load posts failed for locale', locale, e);
    }
  }

  return entries;
}
