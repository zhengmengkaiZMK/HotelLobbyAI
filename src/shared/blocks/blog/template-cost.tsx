'use client';

import { useLocale } from 'next-intl';

import { templateLiveCostAnswer } from '@/shared/lib/pricing-copy';
import { wassupFifteenSecondCostAnswer } from '@/shared/lib/wassup-cost';

/**
 * Shared credit answer so blog copy cannot drift from pricing.
 * `seconds={15}` is the wassup in a minute lock: 15-second cells, not the 8s rows.
 */
export function TemplateCostParagraph({
  en,
  zh,
  seconds,
}: {
  en: string;
  zh: string;
  seconds?: number;
}) {
  const locale = useLocale();
  const isZh = locale.startsWith('zh');
  const text =
    seconds === 15
      ? wassupFifteenSecondCostAnswer({ en, zh }, isZh)
      : templateLiveCostAnswer({ en, zh }, isZh);
  return <p>{text}</p>;
}
