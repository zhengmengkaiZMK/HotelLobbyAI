import { generateBabaLongTailMetadata, BabaLongTailRoute } from '@/shared/blocks/baba-dance/long-tail-route';

const SLUG = 'make-ba-ba-ba-dance-ai';

export const dynamic = 'force-dynamic';

export function generateMetadata(props: { params: Promise<{ locale: string }> }) {
  return generateBabaLongTailMetadata(props, SLUG);
}

export default function Page(props: { params: Promise<{ locale: string }> }) {
  return <BabaLongTailRoute {...props} slug={SLUG} />;
}
