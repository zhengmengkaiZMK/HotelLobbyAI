import { ReactNode } from 'react';
import { getTranslations } from 'next-intl/server';

import { ConsoleLayout } from '@/shared/blocks/console/layout';

export default async function CreditsLayout({
  children,
}: {
  children: ReactNode;
}) {
  const t = await getTranslations('credits.sidebar');

  // credits title
  const title = t('title');

  // credits nav
  const nav = t.raw('nav');

  const topNav = t.raw('top_nav');

  const support = t.raw('support');

  return (
    <ConsoleLayout
      title={title}
      nav={nav}
      topNav={topNav}
      support={support}
      className="py-16 md:py-20"
    >
      {children}
    </ConsoleLayout>
  );
}
