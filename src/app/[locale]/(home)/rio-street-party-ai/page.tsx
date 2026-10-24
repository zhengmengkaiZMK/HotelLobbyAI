import { generateLongTailMetadata, LongTailRoute } from '@/shared/blocks/pedra-do-sal/long-tail-route';

const SLUG = 'rio-street-party-ai';

export const dynamic = 'force-dynamic';

export function generateMetadata(props: { params: Promise<{ locale: string }> }) {
  return generateLongTailMetadata(props, SLUG);
}

export default function Page(props: { params: Promise<{ locale: string }> }) {
  return <LongTailRoute {...props} slug={SLUG} />;
}
