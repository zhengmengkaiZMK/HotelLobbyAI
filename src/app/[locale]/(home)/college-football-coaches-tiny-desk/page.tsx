import { generateLongTailMetadata, LongTailRoute } from '@/shared/blocks/tiny-desk/long-tail-route';

const SLUG = 'college-football-coaches-tiny-desk';

export const dynamic = 'force-dynamic';

export function generateMetadata(props: { params: Promise<{ locale: string }> }) {
  return generateLongTailMetadata(props, SLUG);
}

export default function Page(props: { params: Promise<{ locale: string }> }) {
  return <LongTailRoute {...props} slug={SLUG} />;
}
