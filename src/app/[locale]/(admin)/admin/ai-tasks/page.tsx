import { getTranslations, setRequestLocale } from 'next-intl/server';

import { PERMISSIONS, requirePermission } from '@/core/rbac';
import { Header, Main, MainHeader } from '@/shared/blocks/dashboard';
import { TableCard } from '@/shared/blocks/table';
import { getAITasks, getAITasksCount } from '@/shared/models/ai_task';
import { refreshPendingAITasks } from '@/shared/services/ai';
import { Button, Crumb, Tab } from '@/shared/types/blocks/common';
import { type Table } from '@/shared/types/blocks/table';

export default async function AiTasksPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ page?: number; pageSize?: number; type?: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  // Check if user has permission to read api keys
  await requirePermission({
    code: PERMISSIONS.AITASKS_READ,
    redirectUrl: '/admin/no-permission',
    locale,
  });

  const t = await getTranslations('admin.ai-tasks');

  const { page: pageNum, pageSize } = await searchParams;
  const page = pageNum || 1;
  const limit = pageSize || 30;

  const crumbs: Crumb[] = [
    { title: t('list.crumbs.admin'), url: '/admin' },
    { title: t('list.crumbs.ai-tasks'), is_active: true },
  ];

  // only show video tasks for now
  const total = await getAITasksCount({
    mediaType: 'video',
  });

  // backfill results for tasks left pending/processing (e.g. user closed the page)
  await refreshPendingAITasks();

  const aiTasks = await getAITasks({
    getUser: true,
    page,
    limit,
    mediaType: 'video',
  });

  const table: Table = {
    columns: [
      {
        name: 'taskResult',
        title: t('fields.result'),
        className: 'min-w-[240px]',
        callback: (item: any) => {
          if (!item.taskResult) return '-';
          let result: any;
          try {
            result = JSON.parse(item.taskResult);
          } catch {
            return item.taskResult;
          }
          const videoUrl =
            result.video?.url ||
            result.video_url ||
            result.output?.video_url || // baidu wan
            result.content?.video_url || // baidu seedance
            result.output?.url ||
            result.url;
          if (item.mediaType === 'video' && videoUrl && typeof videoUrl === 'string' && videoUrl.startsWith('http')) {
            return <video src={videoUrl} controls preload="metadata" className="w-56 rounded-md" />;
          }
          return <pre className="max-w-xs overflow-auto text-xs whitespace-pre-wrap break-all">{item.taskResult}</pre>;
        },
      },
      { name: 'createdAt', title: t('fields.created_at'), type: 'time' },
      { name: 'user', title: t('fields.user'), type: 'user' },
      { name: 'status', title: t('fields.status'), type: 'label' },
      { name: 'costCredits', title: t('fields.cost_credits'), type: 'label' },
    ],
    data: aiTasks,
    pagination: {
      total,
      page,
      limit,
    },
  };

  const actions: Button[] = [];

  const tabs: Tab[] = [];

  return (
    <>
      <Header crumbs={crumbs} />
      <Main>
        <MainHeader title={t('list.title')} tabs={tabs} actions={actions} />
        <TableCard table={table} />
      </Main>
    </>
  );
}
