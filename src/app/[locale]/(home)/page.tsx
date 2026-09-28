import { getTranslations, setRequestLocale } from 'next-intl/server';

import { ViralHome } from '@/shared/blocks/viral-home/home';
import { PricingItem } from '@/shared/types/blocks/pricing';

export const revalidate = 3600;

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('pages.pricing');
  const plans = t.raw('page.sections.pricing.items') as PricingItem[];
  return <ViralHome plans={plans} />;
}
