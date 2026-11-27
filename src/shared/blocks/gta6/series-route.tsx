import { setRequestLocale } from 'next-intl/server';

import { envConfigs } from '@/config';
import { Gta6SeriesHome } from '@/shared/blocks/gta6/series-view';
import { Gta6HubHome } from '@/shared/blocks/gta6/hub-view';
import { GTA6_HUB_FAQ, getGta6Series } from '@/shared/blocks/gta6/series-data';
import { getAllConfigs } from '@/shared/models/config';
import { getVideoCostTable } from '@/shared/lib/video-cost';
import { buildTemplateSoftwareJsonLd } from '@/shared/lib/product-schema';
import { getCreditsPerUsdFromConfigs } from '@/shared/services/pricing';

export const revalidate = 300;

type Locale = string;

function metaFor(slug: string, locale: Locale) {
  const series = getGta6Series(slug);
  if (!series) return null;
  const zh = locale === 'zh';
  const path = `/${slug}`;
  return {
    series,
    title: zh ? series.meta.title[1] : series.meta.title[0],
    description: zh ? series.meta.description[1] : series.meta.description[0],
    keywords: zh ? series.meta.keywords[1] : series.meta.keywords[0],
    canonical: `${envConfigs.app_url}${zh ? '/zh' : ''}${path}`,
    og: `${envConfigs.app_url}/templates/${series.templateId}-og.jpg`,
  };
}

function hubMeta(locale: Locale) {
  const zh = locale === 'zh';
  const path = '/gta-6-ai-templates';
  const title = zh
    ? 'GTA 6 AI 模板专题：六个把照片放进罪恶都市的系列'
    : 'GTA 6 AI Templates – Six Series That Put You in Vice City';
  const description = zh
    ? 'GTA 6 AI 模板专题页：GTA 6 Trailer AI（12 秒 1 张照片）、Wanted Level（10 秒 1 张）、Lovers on the Run（15 秒 2 张）、Vice City Story（15 秒 1 张、16:9）、Nightclub（12 秒 1 张）、Getaway Duo（12 秒 2 张）。720p 下通常 2–7 分钟出片。粉丝向 AI 内容，与 Rockstar Games 无关联。'
    : 'The GTA 6 AI hub: GTA 6 Trailer AI (12s, 1 photo), Wanted Level (10s, 1), Lovers on the Run (15s, 2), Vice City Story (15s, 1, 16:9), Nightclub (12s, 1), Getaway Duo (12s, 2). Renders at 720p in 2–7 minutes depending on clip length. Fan-made AI content, not affiliated with Rockstar Games.';
  const keywords = zh
    ? 'gta 6 ai, gta 6 ai 模板, gta 6 ai 视频, gta 6 trailer ai, gta 6 wanted level, gta 6 lovers on the run, gta 6 vice city story, gta 6 nightclub, gta 6 getaway duo, 照片生成 gta 6 视频'
    : 'gta 6 ai, gta 6 ai templates, gta 6 ai video, gta 6 trailer ai, gta 6 wanted level, gta 6 lovers on the run, gta 6 vice city story, gta 6 nightclub, gta 6 getaway duo, photo to gta 6 video';
  return {
    title,
    description,
    keywords,
    canonical: `${envConfigs.app_url}${zh ? '/zh' : ''}${path}`,
    og: `${envConfigs.app_url}/templates/gta-6-trailer-ai-og.jpg`,
  };
}

export async function generateGta6Metadata(slug: string, locale: Locale) {
  const isHub = slug === 'gta-6-ai-templates';
  const m = isHub ? hubMeta(locale) : metaFor(slug, locale);
  if (!m) return {};
  const enUrl = `${envConfigs.app_url}${slug === 'gta-6-ai-templates' ? '/gta-6-ai-templates' : `/${slug}`}`;
  const zhUrl = `${envConfigs.app_url}/zh${slug === 'gta-6-ai-templates' ? '/gta-6-ai-templates' : `/${slug}`}`;
  return {
    title: m.title,
    description: m.description,
    keywords: m.keywords,
    alternates: {
      canonical: m.canonical,
      languages: { en: enUrl, zh: zhUrl, 'x-default': enUrl },
    },
    openGraph: {
      type: 'website' as const,
      url: m.canonical,
      title: m.title,
      description: m.description,
      images: [m.og],
    },
    twitter: {
      card: 'summary_large_image' as const,
      title: m.title,
      description: m.description,
      images: [m.og],
    },
  } as Record<string, unknown>;
}

/** FAQ JSON-LD for a series page or the hub (hub FAQ is the visible hub list). */
function faqJsonLdFor(slug: string, zh: boolean) {
  let pairs: readonly [string, string][];
  if (slug === 'gta-6-ai-templates') {
    // Exactly the Q&As rendered visibly in the hub FAQ section — never more,
    // never fewer.
    pairs = GTA6_HUB_FAQ.map(
      (item) => [zh ? item.q[1] : item.q[0], zh ? item.a[1] : item.a[0]] as [string, string]
    );
  } else {
    const series = getGta6Series(slug);
    if (!series) return null;
    pairs = zh ? series.faqZh : series.faqEn;
  }
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: pairs.map(([q, a]) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };
}

export async function Gta6SeriesRoute({ slug, locale }: { slug: string; locale: Locale }) {
  setRequestLocale(locale);
  const zh = locale === 'zh';
  const creditsPerUsd = await getCreditsPerUsdFromConfigs();
  const videoCosts = getVideoCostTable(await getAllConfigs());
  const isHub = slug === 'gta-6-ai-templates';
  const faqJsonLd = faqJsonLdFor(slug, zh);
  const pageUrl = `${envConfigs.app_url}${zh ? '/zh' : ''}/${slug}`;

  const softwareJsonLd = buildTemplateSoftwareJsonLd({
    appUrl: envConfigs.app_url,
    pageUrl,
    description: isHub
      ? hubMeta(locale).description
      : (metaFor(slug, locale)?.description ?? ''),
  });

  return (
    <>
      {faqJsonLd ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} /> : null}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }} />
      {isHub ? (
        <Gta6HubHome creditsPerUsd={creditsPerUsd} videoCosts={videoCosts} pageUrl={pageUrl} />
      ) : (
        <Gta6SeriesHome series={getGta6Series(slug)!} creditsPerUsd={creditsPerUsd} videoCosts={videoCosts} pageUrl={pageUrl} />
      )}
    </>
  );
}
