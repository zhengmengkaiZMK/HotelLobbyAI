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
    },
    hasMerchantReturnPolicy: {
      '@type': 'MerchantReturnPolicy',
      applicableCountry: 'US',
      returnPolicyCategory: 'https://schema.org/MerchantReturnNotPermitted',
    },
  };
}
