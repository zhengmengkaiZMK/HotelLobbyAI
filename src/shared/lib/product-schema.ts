/**
 * Shared JSON-LD helpers for Product / SoftwareApplication merchant data.
 *
 * ViralReel sells digital credits. Offers describe the credit pack in USD
 * and do not include shipping, delivery country, or a physical return policy.
 */

export function buildProductImageUrls(appUrl: string) {
  return [`${appUrl}/og-image.jpg`, `${appUrl}/logo.png`];
}

/** Entry offers only: the one-time starter pack and the monthly starter plan. */
export function buildTemplateSoftwareJsonLd({
  appUrl,
  pageUrl,
  description,
}: {
  appUrl: string;
  pageUrl: string;
  description: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'ViralReel',
    applicationCategory: 'MultimediaApplication',
    operatingSystem: 'Web',
    url: pageUrl,
    description,
    brand: { '@type': 'Brand', name: 'ViralReel' },
    offers: [
      {
        '@type': 'Offer',
        name: 'Starter credit pack',
        price: '9.90',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        url: `${appUrl}/pricing`,
        description: 'One-time pack, 90 credits',
      },
      {
        '@type': 'Offer',
        name: 'Starter monthly',
        price: '9.90',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        url: `${appUrl}/subscribe`,
        description: 'Monthly plan, 90 credits per month',
      },
    ],
  };
}

/** Price text for a digital credit offer. No shipping or destination fields. */
export function digitalCreditOfferDescription(
  credits: number,
  interval: 'one-time' | 'month' | 'year'
) {
  const delivery =
    'Digital product priced in USD. Credits are added to the account after payment. No shipping and no delivery address.';
  if (interval === 'one-time') {
    return `${credits} credits, one-time purchase. ${delivery}`;
  }
  const period = interval === 'year' ? 'year' : 'month';
  return `${credits} credits per ${period}. ${delivery}`;
}
