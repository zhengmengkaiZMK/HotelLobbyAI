import { notFound } from 'next/navigation';

import {
  generateLongTailMetadata as generateHitMetadata,
  LongTailRoute as HitLongTailRoute,
} from '@/shared/blocks/hit-the-road-dude/long-tail-route';
import { getHitTheRoadLongTail } from '@/shared/blocks/hit-the-road-dude/long-tails';
import {
  generateNostalgiaLongTailMetadata,
  NostalgiaLongTailRoute,
} from '@/shared/blocks/nostalgia/long-tail-route';
import { getNostalgiaLongTail } from '@/shared/blocks/nostalgia/long-tails';
import {
  generateLongTailMetadata as generateTinyDeskMetadata,
  LongTailRoute as TinyDeskLongTailRoute,
} from '@/shared/blocks/tiny-desk/long-tail-route';
import { getTinyDeskLongTail } from '@/shared/blocks/tiny-desk/long-tails';
import {
  generateLongTailMetadata as generateWassupMetadata,
  LongTailRoute as WassupLongTailRoute,
} from '@/shared/blocks/wassup-in-a-minute/long-tail-route';
import { getWassupLongTail } from '@/shared/blocks/wassup-in-a-minute/long-tails';

import LandingDynamicPage, {
  generateMetadata as generateLandingMetadata,
} from '../../(landing)/[...slug]/page';

/**
 * One App Router module for every Wassup, Hit the Road, and Tiny Desk
 * Outstanding long-tail URL. Static siblings (hubs, pricing, other series)
 * still win over this segment. Slugs that are not those long-tails are
 * handed to the existing landing catch-all so /privacy-policy and
 * /terms-of-service keep resolving; that page calls notFound() when
 * nothing matches.
 *
 * No generateStaticParams: OpenNext should keep a single [slug] route entry.
 */
export const dynamic = 'force-dynamic';

type Params = Promise<{ locale: string; slug: string }>;

function series(slug: string): 'wassup' | 'hit' | 'tiny-desk' | 'nostalgia' | null {
  if (getWassupLongTail(slug)) return 'wassup';
  if (getHitTheRoadLongTail(slug)) return 'hit';
  if (getTinyDeskLongTail(slug)) return 'tiny-desk';
  if (getNostalgiaLongTail(slug)) return 'nostalgia';
  return null;
}

export async function generateMetadata({ params }: { params: Params }) {
  const { locale, slug } = await params;
  const kind = series(slug);
  const localeParams = { params: Promise.resolve({ locale }) };
  if (kind === 'wassup') return generateWassupMetadata(localeParams, slug);
  if (kind === 'hit') return generateHitMetadata(localeParams, slug);
  if (kind === 'tiny-desk') return generateTinyDeskMetadata(localeParams, slug);
  if (kind === 'nostalgia') return generateNostalgiaLongTailMetadata(localeParams, slug);
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
  if (kind === 'tiny-desk') return <TinyDeskLongTailRoute {...localeParams} slug={slug} />;
  if (kind === 'nostalgia') return <NostalgiaLongTailRoute {...localeParams} slug={slug} />;
  return <LandingDynamicPage params={Promise.resolve({ locale, slug })} />;
}
