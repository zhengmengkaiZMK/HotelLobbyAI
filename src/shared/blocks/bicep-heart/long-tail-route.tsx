import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';

import { envConfigs } from '@/config';
import { buildHowToJsonLdFromSteps } from '@/shared/lib/howto-schema';
import { getVideoCostTable } from '@/shared/lib/video-cost';
import { getAllConfigs } from '@/shared/models/config';
import { getCreditsPerUsdFromConfigs } from '@/shared/services/pricing';

import { BicepHeartLongTailView } from './long-tail-view';
import {
  BICEP_HEART_LONG_TAILS,
  buildBicepHeartLongTailFaq,
  getBicepHeartLongTail,
  resolveBicepHeartLongTailSteps,
} from './long-tails';

export async function generateBicepHeartLongTailMetadata(
  { params }: { params: Promise<{ locale: string }> },
  slug: string
) {
  const { locale } = await params;
  const entry = getBicepHeartLongTail(slug);
  if (!entry) return {};
  const lang = locale === 'zh' ? 'zh' : 'en';
  const enUrl = `${envConfigs.app_url}/${entry.slug}`;
  const zhUrl = `${envConfigs.app_url}/zh/${entry.slug}`;
  const canonical = locale === 'zh' ? zhUrl : enUrl;
  const title = entry.title[lang];
  const description = entry.description[lang];
  const image = `${envConfigs.app_url}/templates/bicep-heart-ai-og.jpg`;
  return {
    title,
    description,
    keywords: entry.keyword,
    alternates: {
      canonical,
      languages: { en: enUrl, zh: zhUrl, 'x-default': enUrl },
    },
    openGraph: {
      type: 'website' as const,
      url: canonical,
      title,
      description,
      images: [image],
    },
    twitter: {
      card: 'summary_large_image' as const,
      title,
      description,
      images: [image],
    },
  };
}

export async function BicepHeartLongTailRoute({
  params,
  slug,
}: {
  params: Promise<{ locale: string }>;
  slug: string;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const entry = getBicepHeartLongTail(slug);
  if (!entry) notFound();

  const zh = locale === 'zh';
  const lang = zh ? 'zh' : 'en';
  const creditsPerUsd = await getCreditsPerUsdFromConfigs();
  const videoCosts = getVideoCostTable(await getAllConfigs(true));
  const faq = buildBicepHeartLongTailFaq(entry, zh, { videoCosts, creditsPerUsd });
  const pageUrl = zh
    ? `${envConfigs.app_url}/zh/${entry.slug}`
    : `${envConfigs.app_url}/${entry.slug}`;
  const steps = resolveBicepHeartLongTailSteps(entry).map((step) => ({
    name: step.name[lang],
    text: step.text[lang],
  }));
  const howToJsonLd = buildHowToJsonLdFromSteps({
    name: entry.guideTitle[lang],
    description: entry.description[lang],
    url: pageUrl,
    steps,
  });
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map(([question, answer]) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      {howToJsonLd ? (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />
      ) : null}
      <BicepHeartLongTailView entry={entry} videoCosts={videoCosts} creditsPerUsd={creditsPerUsd} />
    </>
  );
}

// Keep the full tail list referenced so tree-shaking cannot drop the
// sitemap routes when this module is imported from the dispatcher.
export const BICEP_HEART_ROUTES = BICEP_HEART_LONG_TAILS.length;
