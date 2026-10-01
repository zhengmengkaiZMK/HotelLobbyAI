import { getTranslations, setRequestLocale } from 'next-intl/server';

import { envConfigs } from '@/config';

import { ViralHome } from '@/shared/blocks/viral-home/home';
import { getPricingPlans, getCreditsPerUsdFromConfigs } from '@/shared/services/pricing';
import { PricingItem } from '@/shared/types/blocks/pricing';

export const dynamic = 'force-dynamic';

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const plans = await getPricingPlans(locale);
  const creditsPerUsd = await getCreditsPerUsdFromConfigs();

  const appUrl = envConfigs.app_url;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${appUrl}/#website`,
        name: 'ViralReel',
        url: appUrl,
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
        description:
          'AI video template generator. Hotel lobby AI template and more: couples, pets, babies — auto lip-sync, gestures and lighting included.',
        featureList: [
          'Hotel lobby AI template',
          'AI video templates for couples, pets and babies',
          'Auto lip-sync and gestures',
          '60-second AI video generation',
        ],
        ...(plans.length > 0 && {
          offers: plans.slice(0, 5).map((p) => ({
            '@type': 'Offer',
            name: p.product_name || 'ViralReel Plan',
            price: (p.amount / 100).toFixed(2),
            priceCurrency: p.currency || 'USD',
            availability: 'https://schema.org/InStock',
            url: `${appUrl}/subscribe`,
          })),
        }),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ViralHome plans={plans} creditsPerUsd={creditsPerUsd} />
    </>
  );
}
