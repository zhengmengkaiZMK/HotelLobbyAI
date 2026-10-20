/**
 * Shared JSON-LD helpers for Product / SoftwareApplication merchant data.
 *
 * ViralReel sells digital credits and subscriptions (no physical shipping),
 * so offers declare zero-cost digital delivery and a "returns not permitted"
 * policy — the standard pattern for digital SaaS products to satisfy
 * Google Merchant Listings requirements.
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

export function buildOfferExtrasJsonLd() {
  return {
    shippingDetails: {
      '@type': 'OfferShippingDetails',
      shippingRate: {
        '@type': 'MonetaryAmount',
        value: '0',
        currency: 'USD',
      },
      shippingDestination: {
        '@type': 'DefinedRegion',
        addressCountry: 'US',
      },
      // Digital delivery: credits land in the account immediately after
      // checkout. Google Merchant Listings requires deliveryTime alongside
      // shippingRate/shippingDestination — 0-day handling, 0-1 day transit.
      deliveryTime: {
        '@type': 'DeliveryTime',
        handlingTime: {
          '@type': 'QuantitativeValue',
          minValue: 0,
          maxValue: 0,
          unitCode: 'DAY',
        },
        transitTime: {
          '@type': 'QuantitativeValue',
          minValue: 0,
          maxValue: 1,
          unitCode: 'DAY',
        },
      },
    },
    hasMerchantReturnPolicy: {
      '@type': 'MerchantReturnPolicy',
      applicableCountry: 'US',
      returnPolicyCategory: 'https://schema.org/MerchantReturnNotPermitted',
    },
  };
}
