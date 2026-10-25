import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';

import { envConfigs } from '@/config';
import { buildHowToJsonLdFromSteps } from '@/shared/lib/howto-schema';
import { getVideoCostTable } from '@/shared/lib/video-cost';
import { getAllConfigs } from '@/shared/models/config';
import { getCreditsPerUsdFromConfigs } from '@/shared/services/pricing';

import { TinyDeskLongTailView } from './long-tail-view';
import {
  buildLongTailFaq,
  getTinyDeskLongTail,
  resolveLongTailSteps,
} from './long-tails';

export async function generateLongTailMetadata(
  { params }: { params: Promise<{ locale: string }> },
  slug: string
) {
  const { locale } = await params;
  const entry = getTinyDeskLongTail(slug);
  if (!entry) return {};
  const lang = locale === 'zh' ? 'zh' : 'en';
  const enUrl = `${envConfigs.app_url}/${entry.slug}`;
  const zhUrl = `${envConfigs.app_url}/zh/${entry.slug}`;
  const canonical = locale === 'zh' ? zhUrl : enUrl;
  const title = entry.title[lang];
  const description = entry.description[lang];
  const image = `${envConfigs.app_url}/templates/tiny-desk-outstanding-ai-og.jpg`;
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

export async function LongTailRoute({
  params,
  slug,
}: {
  params: Promise<{ locale: string }>;
  slug: string;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const entry = getTinyDeskLongTail(slug);
  if (!entry) notFound();

  const zh = locale === 'zh';
  const lang = zh ? 'zh' : 'en';
  const creditsPerUsd = await getCreditsPerUsdFromConfigs();
  const videoCosts = getVideoCostTable(await getAllConfigs(true));
  const faq = buildLongTailFaq(entry, zh, { videoCosts, creditsPerUsd });
  const pageUrl = zh
    ? `${envConfigs.app_url}/zh/${entry.slug}`
    : `${envConfigs.app_url}/${entry.slug}`;
  const steps = resolveLongTailSteps(entry).map((step) => ({
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
      <TinyDeskLongTailView entry={entry} videoCosts={videoCosts} creditsPerUsd={creditsPerUsd} />
    </>
  );
}
