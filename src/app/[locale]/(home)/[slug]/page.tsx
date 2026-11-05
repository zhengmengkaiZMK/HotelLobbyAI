import { notFound } from 'next/navigation';

import {
  generateLongTailMetadata as generatePimpwalkMetadata,
  LongTailRoute as PimpwalkLongTailRoute,
} from '@/shared/blocks/pimpwalk-entrance/long-tail-route';
import { getPimpwalkLongTail } from '@/shared/blocks/pimpwalk-entrance/long-tails';
import {
  generateLongTailMetadata as generateFancyCafeMetadata,
  LongTailRoute as FancyCafeLongTailRoute,
} from '@/shared/blocks/fancy-cafe/long-tail-route';
import { getFancyCafeLongTail } from '@/shared/blocks/fancy-cafe/long-tails';
import {
  generateLongTailMetadata as generateCharlieBrownMetadata,
  LongTailRoute as CharlieBrownLongTailRoute,
} from '@/shared/blocks/charlie-brown-christmas/long-tail-route';
import { getCharlieBrownLongTail } from '@/shared/blocks/charlie-brown-christmas/long-tails';
import {
  generateAlorsOnDanseLongTailMetadata,
  AlorsOnDanseLongTailRoute,
} from '@/shared/blocks/alors-on-danse/long-tail-route';
import { getAlorsOnDanseLongTail } from '@/shared/blocks/alors-on-danse/long-tails';
import {
  generateSashaLaCatrinaLongTailMetadata,
  SashaLaCatrinaLongTailRoute,
} from '@/shared/blocks/sasha-la-catrina/long-tail-route';
import { getSashaLaCatrinaLongTail } from '@/shared/blocks/sasha-la-catrina/long-tails';
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
export const revalidate = 300;

type Params = Promise<{ locale: string; slug: string }>;

function series(slug: string): 'wassup' | 'hit' | 'tiny-desk' | 'nostalgia' | 'alors' | 'catrina' | 'charlie-brown' | 'fancy-cafe' | 'pimpwalk' | null {
  if (getPimpwalkLongTail(slug)) return 'pimpwalk';
  if (getFancyCafeLongTail(slug)) return 'fancy-cafe';
  if (getSashaLaCatrinaLongTail(slug)) return 'catrina';
  if (getAlorsOnDanseLongTail(slug)) return 'alors';
  if (getCharlieBrownLongTail(slug)) return 'charlie-brown';
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
  if (kind === 'alors') return generateAlorsOnDanseLongTailMetadata(localeParams, slug);
  if (kind === 'catrina') return generateSashaLaCatrinaLongTailMetadata(localeParams, slug);
  if (kind === 'charlie-brown') return generateCharlieBrownMetadata(localeParams, slug);
  if (kind === 'fancy-cafe') return generateFancyCafeMetadata(localeParams, slug);
  if (kind === 'pimpwalk') return generatePimpwalkMetadata(localeParams, slug);
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
  if (kind === 'alors') return <AlorsOnDanseLongTailRoute {...localeParams} slug={slug} />;
  if (kind === 'catrina') return <SashaLaCatrinaLongTailRoute {...localeParams} slug={slug} />;
  if (kind === 'charlie-brown') return <CharlieBrownLongTailRoute {...localeParams} slug={slug} />;
  if (kind === 'fancy-cafe') return <FancyCafeLongTailRoute {...localeParams} slug={slug} />;
  if (kind === 'pimpwalk') return <PimpwalkLongTailRoute {...localeParams} slug={slug} />;
  return <LandingDynamicPage params={Promise.resolve({ locale, slug })} />;
}
