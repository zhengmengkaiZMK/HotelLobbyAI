import { ReactNode } from 'react';
import { getTranslations } from 'next-intl/server';

import { getThemeLayout } from '@/core/theme';
import { LocaleDetector, TopBanner } from '@/shared/blocks/common';
import { ViralFooter } from '@/shared/blocks/viral-home/footer';
import { getConfigs } from '@/shared/models/config';
import {
  Header as HeaderType,
} from '@/shared/types/blocks/landing';

// Build a stable id from banner text, so that when the text changes,
// users who dismissed the old banner will see the new one again.
function bannerCacheId(text: string) {
  let hash = 0;
  for (let i = 0; i < text.length; i++) {
    hash = (hash * 31 + text.charCodeAt(i)) >>> 0;
  }
  return `topbanner-${hash.toString(36)}`;
}

export default async function LandingLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // load page data
  const t = await getTranslations('landing');

  // load layout component
  const Layout = await getThemeLayout('landing');

  // header to display
  const header: HeaderType = t.raw('header');

  // top banner: admin settings (db configs) take priority,
  // language file values are used as fallback.
  const configs = await getConfigs();
  const dbTextEn = configs.top_banner_text_en?.trim();
  const dbTextZh = configs.top_banner_text_zh?.trim();
  const dbText = locale === 'zh' ? dbTextZh || dbTextEn : dbTextEn || dbTextZh;

  const bannerEnabled = configs.top_banner_enabled !== 'false';
  const bannerText = dbText || header.topbanner?.text;

  // brand info: admin settings (db configs) take priority,
  // language file values are used as fallback.
  if (configs.app_name) {
    if (header.brand) {
      header.brand.title = configs.app_name;
    }
  }
  if (configs.app_logo) {
    if (header.brand?.logo) {
      header.brand.logo.src = configs.app_logo;
    }
  }

  return (
    <Layout header={header}>
      <LocaleDetector />
      {bannerEnabled && bannerText && (
        <TopBanner
          id={bannerCacheId(bannerText)}
          text={bannerText}
          buttonText={header.topbanner?.buttonText}
          href={header.topbanner?.href}
          target={header.topbanner?.target}
          closable
          rememberDismiss
          dismissedExpiryDays={header.topbanner?.dismissedExpiryDays ?? 1}
        />
      )}
      {children}
      <ViralFooter />
    </Layout>
  );
}
