import { getTranslations } from 'next-intl/server';

import { Empty } from '@/shared/blocks/common';
import { TopupCard } from '@/shared/blocks/viral-home/topup';
import { getCurrentSubscription } from '@/shared/models/subscription';
import { getUserInfo } from '@/shared/models/user';
import { getCreditsPerUsdFromConfigs } from '@/shared/services/pricing';

export default async function CreditsTopupPage() {
  const user = await getUserInfo();
  if (!user) {
    return <Empty message="no auth" />;
  }

  const t = await getTranslations('settings.credits');
  const currentSubscription = await getCurrentSubscription(user.id);
  const creditsPerUsd = await getCreditsPerUsdFromConfigs();

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold">{t('view.buttons.purchase')}</h2>
        <p className="mt-2 text-muted-foreground">
          {t('topup.description')}
        </p>
      </div>
      <TopupCard
        rate={creditsPerUsd}
        hasSubscription={!!currentSubscription}
        className="max-w-none"
      />
    </div>
  );
}
