import { generateLongTailMetadata, LongTailRoute } from '@/shared/blocks/wassup-in-a-minute/long-tail-route';

const SLUG = 'wassup-in-a-minute-capcut';

export const dynamic = 'force-dynamic';

export function generateMetadata(props: { params: Promise<{ locale: string }> }) {
  return generateLongTailMetadata(props, SLUG);
}

export default function Page(props: { params: Promise<{ locale: string }> }) {
  return <LongTailRoute {...props} slug={SLUG} />;
}
