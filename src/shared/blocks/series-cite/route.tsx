import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';

import { envConfigs } from '@/config';

import { getCiteEntry, type CiteEntry } from './catalog';
import { CiteView } from './view';

function urls(entry: CiteEntry) {
  const origin = envConfigs.app_url.replace(/\/$/, '');
  const enUrl = `${origin}/${entry.slug}`;
  const zhUrl = `${origin}/zh/${entry.slug}`;
  return { enUrl, zhUrl };
}

export async function generateCiteMetadata(
  { params }: { params: Promise<{ locale: string }> },
  slug: string
) {
  const { locale } = await params;
  const entry = getCiteEntry(slug);
  if (!entry) return {};
  const lang = locale === 'zh' ? 'zh' : 'en';
  const { enUrl, zhUrl } = urls(entry);
  const canonical = locale === 'zh' ? zhUrl : enUrl;
  const image = `${envConfigs.app_url.replace(/\/$/, '')}${entry.ogPath}`;
  return {
    title: entry.title[lang],
    description: entry.description[lang],
    keywords: entry.keyword,
    alternates: {
      canonical,
      languages: { en: enUrl, zh: zhUrl, 'x-default': enUrl },
    },
    openGraph: {
      type: 'website' as const,
      url: canonical,
      title: entry.title[lang],
      description: entry.description[lang],
      images: [image],
    },
    twitter: {
      card: 'summary_large_image' as const,
      title: entry.title[lang],
      description: entry.description[lang],
      images: [image],
    },
  };
}

export async function CiteRoute({
  params,
  slug,
}: {
  params: Promise<{ locale: string }>;
  slug: string;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const entry = getCiteEntry(slug);
  if (!entry) notFound();
  const zh = locale === 'zh';
  const lang = zh ? 'zh' : 'en';
  const { enUrl, zhUrl } = urls(entry);
  const pageUrl = zh ? zhUrl : enUrl;
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: entry.faq.map((item) => ({
      '@type': 'Question',
      name: item.q[lang],
      acceptedAnswer: { '@type': 'Answer', text: item.a[lang] },
    })),
  };
  const howToJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: entry.guideTitle[lang],
    description: entry.description[lang],
    url: pageUrl,
    step: [
      {
        '@type': 'HowToStep',
        name: zh ? '打开模板' : 'Open the template',
        text: pageUrl,
      },
      {
        '@type': 'HowToStep',
        name: zh ? '上传照片' : 'Upload the photos',
        text: entry.lead[lang],
      },
      {
        '@type': 'HowToStep',
        name: zh ? '看清按钮再生成' : 'Read the button, then generate',
        text: zh
          ? '以生成器按钮上的本次积分为准。没有免费积分。'
          : 'The generator button is the exact price. There are no free credits.',
      },
      {
        '@type': 'HowToStep',
        name: zh ? '下载并标注 AI' : 'Download and label it AI',
        text: zh
          ? '下载 MP4，在平台曲库加原声，并打开 AI 标注。'
          : 'Download the MP4, add a library sound, and turn on the AI label.',
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />
      <CiteView entry={entry} />
    </>
  );
}
