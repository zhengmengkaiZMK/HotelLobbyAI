import { generateGta6Metadata, Gta6SeriesRoute } from '@/shared/blocks/gta6/series-route';

export const revalidate = 300;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return generateGta6Metadata('gta-6-trailer-ai', locale);
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <Gta6SeriesRoute slug="gta-6-trailer-ai" locale={locale} />;
}
