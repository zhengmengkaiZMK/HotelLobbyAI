import {
  generateLongTailMetadata,
  LongTailRoute,
} from '@/shared/blocks/bulin-47/long-tail-route';

const SLUG = 'bulin-47-ai-video';

export const dynamic = 'force-dynamic';

export function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}) {
  return generateLongTailMetadata(props, SLUG);
}

export default function Page(props: { params: Promise<{ locale: string }> }) {
  return <LongTailRoute {...props} slug={SLUG} />;
}
