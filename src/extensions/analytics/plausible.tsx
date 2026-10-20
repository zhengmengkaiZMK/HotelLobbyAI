import { ReactNode } from 'react';
import Script from 'next/script';

import { AnalyticsConfigs, AnalyticsProvider } from '.';

/**
 * Plausible analytics configs
 * @docs https://plausible.io/docs/integration-guides
 */
export interface PlausibleAnalyticsConfigs extends AnalyticsConfigs {
  /** Per-account script URL, e.g. https://plausible.io/js/pa-XXXX.js */
  src: string;
  /** Legacy field (old data-domain format); unused by the current snippet */
  domain?: string;
}

/**
 * Plausible provider (new script format)
 *
 * Plausible's current snippet loads a per-account `pa-XXXX.js` script and
 * then calls `plausible.init()` — without the init call nothing is tracked.
 * The domain is baked into the pa-XXXX.js URL, so no data-domain attribute
 * is needed.
 * @website https://plausible.io/
 */
export class PlausibleAnalyticsProvider implements AnalyticsProvider {
  readonly name = 'plausible';

  configs: PlausibleAnalyticsConfigs;

  constructor(configs: PlausibleAnalyticsConfigs) {
    this.configs = configs;
  }

  getHeadScripts(): ReactNode {
    return (
      <>
        <Script
          id={`${this.name}-script`}
          src={this.configs.src}
          strategy="afterInteractive"
          async
        />
        <Script
          id={`${this.name}-init`}
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
                window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};
                plausible.init();
            `,
          }}
        />
      </>
    );
  }
}
