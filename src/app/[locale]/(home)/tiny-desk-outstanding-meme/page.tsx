import { generateLongTailMetadata, LongTailRoute } from '@/shared/blocks/tiny-desk/long-tail-route';

const SLUG = 'tiny-desk-outstanding-meme';

export const dynamic = 'force-dynamic';

export function generateMetadata(props: { params: Promise<{ locale: string }> }) {
  return generateLongTailMetadata(props, SLUG);
}

export default function Page(props: { params: Promise<{ locale: string }> }) {
  return <LongTailRoute {...props} slug={SLUG} />;
}
