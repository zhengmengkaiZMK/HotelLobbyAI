import { setRequestLocale } from 'next-intl/server';

import { envConfigs } from '@/config';
import { BLOG_AUTHOR } from '@/shared/lib/blog-author';
import { Link } from '@/core/i18n/navigation';

export const revalidate = 3600;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const zh = locale === 'zh';
  const canonical =
    locale === 'zh'
      ? `${envConfigs.app_url}/zh${BLOG_AUTHOR.path}`
      : `${envConfigs.app_url}${BLOG_AUTHOR.path}`;
  const title = zh ? `${BLOG_AUTHOR.name} · 作者简介` : `${BLOG_AUTHOR.name} · Author`;
  const description = zh ? BLOG_AUTHOR.bioZh : BLOG_AUTHOR.bioEn;
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: 'profile' as const,
      url: canonical,
      title,
      description,
      siteName: 'ViralReel',
    },
  };
}

export default async function LenaOrtizPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const zh = locale === 'zh';
  const pageUrl =
    locale === 'zh'
      ? `${envConfigs.app_url}/zh${BLOG_AUTHOR.path}`
      : `${envConfigs.app_url}${BLOG_AUTHOR.path}`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: BLOG_AUTHOR.name,
    jobTitle: zh ? BLOG_AUTHOR.roleZh : BLOG_AUTHOR.role,
    url: pageUrl,
    description: zh ? BLOG_AUTHOR.bioZh : BLOG_AUTHOR.bioEn,
    worksFor: {
      '@type': 'Organization',
      name: 'ViralReel',
      url: envConfigs.app_url,
    },
  };

  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <p className="text-sm text-zinc-500">{zh ? '作者简介' : 'Author'}</p>
      <h1 className="mt-2 text-4xl font-semibold tracking-tight">{BLOG_AUTHOR.name}</h1>
      <p className="mt-2 text-zinc-500">{zh ? BLOG_AUTHOR.roleZh : BLOG_AUTHOR.role}</p>
      <p className="mt-6 text-lg leading-relaxed">{zh ? BLOG_AUTHOR.bioZh : BLOG_AUTHOR.bioEn}</p>
      <p className="mt-8">
        <Link href="/blog" className="underline underline-offset-4">
          {zh ? '查看她写的教程' : 'Read her guides'}
        </Link>
      </p>
    </main>
  );
}
