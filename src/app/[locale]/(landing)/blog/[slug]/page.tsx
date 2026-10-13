import { getTranslations, setRequestLocale } from 'next-intl/server';

import { getThemePage } from '@/core/theme';
import { envConfigs } from '@/config';
import { Empty } from '@/shared/blocks/common';
import { getPost } from '@/shared/models/post';
import { buildHowToJsonLd } from '@/shared/lib/howto-schema';
import { DynamicPage } from '@/shared/types/blocks/landing';

export const revalidate = 3600;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const t = await getTranslations('pages.blog.metadata');

  const canonicalUrl =
    locale !== envConfigs.locale
      ? `${envConfigs.app_url}/${locale}/blog/${slug}`
      : `${envConfigs.app_url}/blog/${slug}`;

  const post = await getPost({ slug, locale });
  if (!post) {
    return {
      title: `${slug} | ${t('title')}`,
      description: t('description'),
      alternates: {
        canonical: canonicalUrl,
      },
    };
  }

  const ogImage = post.image ? `${envConfigs.app_url}${post.image}` : undefined;
  const isoDate = post.created_at && !Number.isNaN(new Date(post.created_at).getTime())
    ? new Date(post.created_at).toISOString()
    : undefined;

  return {
    title: `${post.title} | ${t('title')}`,
    description: post.description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: 'article' as const,
      url: canonicalUrl,
      title: post.title,
      description: post.description,
      siteName: 'ViralReel',
      publishedTime: isoDate,
      authors: post.author_name ? [post.author_name] : undefined,
      images: ogImage ? [{ url: ogImage }] : undefined,
      locale: locale === 'zh' ? 'zh_CN' : 'en_US',
    },
    twitter: {
      card: ogImage ? ('summary_large_image' as const) : ('summary' as const),
      title: post.title,
      description: post.description,
      images: ogImage ? [ogImage] : undefined,
    },
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const post = await getPost({ slug, locale });

  if (!post) {
    return <Empty message={`Post not found`} />;
  }

  // Article JSON-LD for search engines and AI answer engines (SEO + GEO)
  const postUrl =
    locale !== envConfigs.locale
      ? `${envConfigs.app_url}/${locale}/blog/${slug}`
      : `${envConfigs.app_url}/blog/${slug}`;
  const isoDate = post.created_at && !Number.isNaN(new Date(post.created_at).getTime())
    ? new Date(post.created_at).toISOString()
    : undefined;
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    image: post.image ? `${envConfigs.app_url}${post.image}` : undefined,
    datePublished: isoDate,
    dateModified: isoDate,
    author: post.author_name
      ? { '@type': 'Person', name: post.author_name }
      : undefined,
    publisher: {
      '@type': 'Organization',
      name: 'ViralReel',
      url: envConfigs.app_url,
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': postUrl },
    inLanguage: locale === 'zh' ? 'zh-CN' : 'en',
  };

  // HowTo JSON-LD for tutorial posts (GEO: step-by-step guides are highly
  // citable by AI answer engines). Only slugs with curated steps emit this.
  const howtoJsonLd = buildHowToJsonLd({
    slug,
    name: post.title || post.slug || 'Guide',
    description: post.description || '',
    url: postUrl,
    image: post.image ? `${envConfigs.app_url}${post.image}` : undefined,
  });

  // build page sections
  const page: DynamicPage = {
    sections: {
      blogDetail: {
        block: 'blog-detail',
        data: {
          post,
        },
      },
    },
  };

  const Page = await getThemePage('dynamic-page');

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      {howtoJsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howtoJsonLd) }}
        />
      ) : null}
      <Page locale={locale} page={page} />
    </>
  );
}
