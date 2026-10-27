import { notFound } from 'next/navigation';

import {
  generateLongTailMetadata as generateHitMetadata,
  LongTailRoute as HitLongTailRoute,
} from '@/shared/blocks/hit-the-road-dude/long-tail-route';
import { getHitTheRoadLongTail } from '@/shared/blocks/hit-the-road-dude/long-tails';
import {
  generateLongTailMetadata as generateWassupMetadata,
  LongTailRoute as WassupLongTailRoute,
} from '@/shared/blocks/wassup-in-a-minute/long-tail-route';
import { getWassupLongTail } from '@/shared/blocks/wassup-in-a-minute/long-tails';

import LandingDynamicPage, {
  generateMetadata as generateLandingMetadata,
} from '../../(landing)/[...slug]/page';

/**
 * One App Router module for every Wassup and Hit the Road long-tail URL.
 * Static siblings (hubs, pricing, other series) still win over this segment.
 * Slugs that are not those long-tails are handed to the existing landing
 * catch-all so /privacy-policy and /terms-of-service keep resolving; that
 * page calls notFound() when nothing matches.
 *
 * No generateStaticParams: OpenNext should keep a single [slug] route entry.
 */
export const dynamic = 'force-dynamic';

type Params = Promise<{ locale: string; slug: string }>;

function series(slug: string): 'wassup' | 'hit' | null {
  if (getWassupLongTail(slug)) return 'wassup';
  if (getHitTheRoadLongTail(slug)) return 'hit';
  return null;
}

export async function generateMetadata({ params }: { params: Params }) {
  const { locale, slug } = await params;
  const kind = series(slug);
  const localeParams = { params: Promise.resolve({ locale }) };
  if (kind === 'wassup') return generateWassupMetadata(localeParams, slug);
  if (kind === 'hit') return generateHitMetadata(localeParams, slug);
  return generateLandingMetadata({
    params: Promise.resolve({ locale, slug }),
  });
}

export default async function Page({ params }: { params: Params }) {
  const { locale, slug } = await params;
  if (!slug || slug.includes('/') || slug.includes('.')) notFound();
  const kind = series(slug);
  const localeParams = { params: Promise.resolve({ locale }) };
  if (kind === 'wassup') return <WassupLongTailRoute {...localeParams} slug={slug} />;
  if (kind === 'hit') return <HitLongTailRoute {...localeParams} slug={slug} />;
  return <LandingDynamicPage params={Promise.resolve({ locale, slug })} />;
}
