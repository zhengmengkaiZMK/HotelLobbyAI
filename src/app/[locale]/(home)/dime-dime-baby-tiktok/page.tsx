import { generateLongTailMetadata, LongTailRoute } from '@/shared/blocks/bby-wow/long-tail-route';

const SLUG = 'dime-dime-baby-tiktok';

export const dynamic = 'force-dynamic';

export function generateMetadata(props: { params: Promise<{ locale: string }> }) {
  return generateLongTailMetadata(props, SLUG);
}

export default function Page(props: { params: Promise<{ locale: string }> }) {
  return <LongTailRoute {...props} slug={SLUG} />;
}
