'use client';

import { useLocale } from 'next-intl';

import { templateLiveCostAnswer } from '@/shared/lib/pricing-copy';

/** Renders the shared credit answer so blog copy cannot drift from pricing. */
export function TemplateCostParagraph({ en, zh }: { en: string; zh: string }) {
  const locale = useLocale();
  return <p>{templateLiveCostAnswer({ en, zh }, locale.startsWith('zh'))}</p>;
}
