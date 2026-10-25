'use client';

import { useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { useRouter } from '@/core/i18n/navigation';

/**
 * Auto-refreshes the ai-tasks list while any task is still generating,
 * so the status flips from "生成中" to "已生成" without a manual reload.
 */
export function AITasksAutoRefresh({ active }: { active: boolean }) {
  const router = useRouter();
  const t = useTranslations('activity.ai-tasks');

  useEffect(() => {
    if (!active) return;
    const timer = setInterval(() => {
      router.refresh();
    }, 20000);
    return () => clearInterval(timer);
  }, [active, router]);

  if (!active) return null;
  return (
    <p className="flex items-center gap-2 text-xs text-muted-foreground">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500" />
      </span>
      {t('list.auto_refresh')}
    </p>
  );
}
