import { MetadataRoute } from 'next';

import { absoluteSiteUrl } from '@/config/site-url';

export default function robots(): MetadataRoute.Robots {
  const appUrl = absoluteSiteUrl('/');

  const disallow = [
    '/*?*q=',
    '/privacy-policy',
    '/terms-of-service',
    '/settings/*',
    '/activity/*',
    '/admin/*',
    '/api/*',
  ];

  // AI crawlers are explicitly welcomed (GEO): we want AI search engines
  // to retrieve and cite the site's public pages.
  const aiCrawlers = [
    'GPTBot',
    'OAI-SearchBot',
    'ChatGPT-User',
    'ClaudeBot',
    'Claude-User',
    'PerplexityBot',
    'Perplexity-User',
    'Google-Extended',
    'Applebot-Extended',
    'Amazonbot',
    'meta-externalagent',
    'Bytespider',
  ];

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow,
      },
      ...aiCrawlers.map((userAgent) => ({
        userAgent,
        allow: '/',
        disallow,
      })),
    ],
    sitemap: `${appUrl}/sitemap.xml`,
  };
}

