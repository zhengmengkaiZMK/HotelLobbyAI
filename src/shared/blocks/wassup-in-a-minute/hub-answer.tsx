import { createElement } from 'react';

import type { TemplateCostContext } from '@/shared/lib/pricing-copy';
import { wassupHubLead } from '@/shared/lib/wassup-cost';

/**
 * Server-rendered answer under the hub H1.
 * Imported only from the route (a Server Component), then passed into the
 * generator island so this paragraph ships in the HTML.
 */
export function WassupHubAnswer({
  zh,
  ctx,
}: {
  zh: boolean;
  ctx?: TemplateCostContext;
}) {
  return createElement(
    'p',
    { className: 'lead wassup-answer', id: 'wassup-answer' },
    wassupHubLead(zh, ctx)
  );
}
