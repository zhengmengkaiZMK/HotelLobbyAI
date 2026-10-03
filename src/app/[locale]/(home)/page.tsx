import { getTranslations, setRequestLocale } from 'next-intl/server';

import { envConfigs } from '@/config';

import { ViralHome } from '@/shared/blocks/viral-home/home';
import { getPricingPlans, getCreditsPerUsdFromConfigs } from '@/shared/services/pricing';
import { getAllConfigs } from '@/shared/models/config';
import { getVideoCostTable } from '@/shared/lib/video-cost';
import {
  buildAggregateRatingJsonLd,
  buildReviewsJsonLd,
} from '@/shared/lib/reviews';
import {
  buildOfferExtrasJsonLd,
  buildProductImageUrls,
} from '@/shared/lib/product-schema';
import { buildViralFaqJsonLd } from '@/shared/lib/viral-faq';
import { PricingItem } from '@/shared/types/blocks/pricing';

export const dynamic = 'force-dynamic';

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const plans = await getPricingPlans(locale);
  const creditsPerUsd = await getCreditsPerUsdFromConfigs();
  const videoCosts = getVideoCostTable(await getAllConfigs());

  const appUrl = envConfigs.app_url;
  const plusM = plans.find((p) => p.product_id === 'plus-monthly');
  const proM = plans.find((p) => p.product_id === 'pro-monthly');
  const faqJsonLd = buildViralFaqJsonLd({
    plusPrice: plusM?.price || '$19.9',
    plusCredits: plusM?.credits || 200,
    proPrice: proM?.price || '$39.9',
    proCredits: proM?.credits || 500,
  });

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${appUrl}/#organization`,
        name: 'ViralReel',
        url: appUrl,
        logo: `${appUrl}/logo.png`,
        email: 'support@viralreel.app',
        contactPoint: [
          {
            '@type': 'ContactPoint',
            contactType: 'customer support',
            email: 'support@viralreel.app',
            availableLanguage: ['en', 'zh'],
          },
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${appUrl}/#website`,
        name: 'ViralReel',
        url: appUrl,
        publisher: { '@id': `${appUrl}/#organization` },
        description:
          'Hotel lobby AI template: upload two photos and star in the viral orange-booth AI video in 60 seconds.',
        inLanguage: locale,
      },
      {
        '@type': 'SoftwareApplication',
        '@id': `${appUrl}/#app`,
        name: 'ViralReel',
        url: appUrl,
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Web',
        brand: { '@id': `${appUrl}/#organization` },
        description:
          'AI video template generator. Hotel lobby AI template and more: couples, pets, babies — auto lip-sync, gestures and lighting included.',
        featureList: [
          'Hotel lobby AI template',
          'AI video templates for couples, pets and babies',
          'Auto lip-sync and gestures',
          '60-second AI video generation',
        ],
        image: buildProductImageUrls(appUrl),
        ...(plans.length > 0 && {
          offers: plans.slice(0, 5).map((p) => ({
            '@type': 'Offer',
            name: p.product_name || 'ViralReel Plan',
            price: (p.amount / 100).toFixed(2),
            priceCurrency: p.currency || 'USD',
            availability: 'https://schema.org/InStock',
            url: `${appUrl}/subscribe`,
            ...buildOfferExtrasJsonLd(),
          })),
        }),
        aggregateRating: buildAggregateRatingJsonLd(),
        review: buildReviewsJsonLd(),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <ViralHome plans={plans} creditsPerUsd={creditsPerUsd} videoCosts={videoCosts} />
    </>
  );
}
