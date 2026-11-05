import { ReactNode } from 'react';
import Script from 'next/script';

import { AnalyticsProvider } from '.';

/**
 * Google Ads tag constants (Google Ads conversion tracking).
 * GTM container loads via gtm.js (the "Google tag" variant Google Ads
 * generates for conversion actions); conversion event snippets are fired
 * through the shared dataLayer (see src/shared/lib/ads-conversion.ts).
 */
export const GOOGLE_ADS_GTM_ID = 'GTM-KXD6GQQT';

/** Event snippet for 网页浏览 conversion page — fires once per page load. */
export const GOOGLE_ADS_PAGEVIEW_CONVERSION =
  'AW-18550889826/OdfUCOaLpbIdEOK64I1F';

/**
 * Google Ads provider
 *
 * Injects the Google tag (GTM container) on every page plus the 网页浏览
 * conversion event. Both are async / afterInteractive: nothing here blocks
 * rendering, and a dataLayer failure can never break page logic.
 */
export class GoogleAdsProvider implements AnalyticsProvider {
  readonly name = 'google-ads';

  getHeadScripts(): ReactNode {
    return (
      <>
        {/* Google tag (GTM container) — async, non-blocking */}
        <Script
          src={`https://www.googletagmanager.com/gtm.js?id=${GOOGLE_ADS_GTM_ID}`}
          strategy="afterInteractive"
          async
        />
        <Script
          id={this.name}
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              /* Event snippet for 网页浏览 conversion page */
              gtag('event', 'conversion', {'send_to': '${GOOGLE_ADS_PAGEVIEW_CONVERSION}'});
            `,
          }}
        />
      </>
    );
  }
}
