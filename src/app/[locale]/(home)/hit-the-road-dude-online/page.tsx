import { generateLongTailMetadata, LongTailRoute } from '@/shared/blocks/hit-the-road-dude/long-tail-route';

const SLUG = 'hit-the-road-dude-online';

export const dynamic = 'force-dynamic';

export function generateMetadata(props: { params: Promise<{ locale: string }> }) {
  return generateLongTailMetadata(props, SLUG);
}

export default function Page(props: { params: Promise<{ locale: string }> }) {
  return <LongTailRoute {...props} slug={SLUG} />;
}
