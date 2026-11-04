'use client';

import { useLocale } from 'next-intl';

import { fancyCafeFifteenSecondCostAnswer } from '@/shared/lib/fancy-cafe-cost';
import { templateLiveCostAnswer } from '@/shared/lib/pricing-copy';
import { wassupFifteenSecondCostAnswer } from '@/shared/lib/wassup-cost';

/**
 * Shared credit answer so blog copy cannot drift from pricing.
 * `seconds={15}` is the wassup in a minute lock: the published 15-second
 * cells (60 / 75 / 90), not the 8-second rows and not 9 / 18 / 36.
 * `lock="fancy-cafe"` is the same 15-second table for Your First Time in a
 * Fancy Cafe. Display copy only — it does not change generator billing.
 */
export function TemplateCostParagraph({
  en,
  zh,
  seconds,
  lock,
}: {
  en: string;
  zh: string;
  seconds?: number;
  lock?: 'wassup' | 'fancy-cafe';
}) {
  const locale = useLocale();
  const isZh = locale.startsWith('zh');
  const product = { en, zh };
  const text =
    lock === 'fancy-cafe'
      ? fancyCafeFifteenSecondCostAnswer(product, isZh)
      : seconds === 15 || lock === 'wassup'
        ? wassupFifteenSecondCostAnswer(product, isZh)
        : templateLiveCostAnswer(product, isZh);
  return <p>{text}</p>;
}
