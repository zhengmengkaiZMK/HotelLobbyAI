import { getTranslations } from 'next-intl/server';

import { AITaskStatus } from '@/extensions/ai';
import { AudioPlayer, Empty } from '@/shared/blocks/common';
import { AITasksAutoRefresh } from '@/shared/blocks/common/task-auto-refresh';
import { TaskMediaPreview } from '@/shared/blocks/common/task-media-preview';
import { TableCard } from '@/shared/blocks/table';
import { AITask, getAITasks, getAITasksCount } from '@/shared/models/ai_task';
import { getUserInfo } from '@/shared/models/user';
import { refreshPendingAITasks } from '@/shared/services/ai';
import { Button } from '@/shared/types/blocks/common';
import { type Table } from '@/shared/types/blocks/table';

function parseTaskData(value: string | null) {
  try {
    return value ? JSON.parse(value) : null;
  } catch {
    return null;
  }
}

const GENERATING_STATUSES = [AITaskStatus.PENDING, AITaskStatus.PROCESSING];

/** Localized status badge: 生成中 / 已生成 / 生成失败 / 已取消. */
function StatusBadge({ status, t }: { status: string | null; t: (key: string) => string }) {
  const wrap = (label: string, className: string, pulse = false) => (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium ${className}`}
    >
      {pulse && (
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-current opacity-75" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-current" />
        </span>
      )}
      {label}
    </span>
  );
  switch (status) {
    case AITaskStatus.PENDING:
    case AITaskStatus.PROCESSING:
      return wrap(t('list.status.generating'), 'bg-amber-100 text-amber-700', true);
    case AITaskStatus.SUCCESS:
      return wrap(t('list.status.completed'), 'bg-emerald-100 text-emerald-700');
    case AITaskStatus.FAILED:
      return wrap(t('list.status.failed'), 'bg-red-100 text-red-700');
    case AITaskStatus.CANCELED:
      return wrap(t('list.status.canceled'), 'bg-zinc-100 text-zinc-600');
    default:
      return <span>{status}</span>;
  }
}

function mediaUrls(value: unknown, type: 'image' | 'video', depth = 0): string[] {
  if (!value || depth > 5) return [];
  if (typeof value === 'string') {
    try {
      const url = new URL(value);
      return ['https:', 'http:'].includes(url.protocol) && !url.username && !url.password ? [url.href] : [];
    } catch {
      return [];
    }
  }
  if (Array.isArray(value)) return value.flatMap((entry) => mediaUrls(entry, type, depth + 1));
  if (typeof value !== 'object') return [];
  const result = value as Record<string, unknown>;
  const keys = type === 'image'
    ? ['images', 'imageUrl', 'image', 'output', 'data', 'url', 'uri', 'src']
    : ['videos', 'videoUrl', 'video', 'output', 'data', 'url', 'uri', 'src'];
  for (const key of keys) {
    const urls = mediaUrls(result[key], type, depth + 1);
    if (urls.length) return [...new Set(urls)];
  }
  return [];
}

export default async function AiTasksPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: number; pageSize?: number; type?: string }>;
}) {
  const { page: pageNum, pageSize, type } = await searchParams;
  const page = pageNum || 1;
  const limit = pageSize || 20;

  const user = await getUserInfo();
  if (!user) {
    return <Empty message="no auth" />;
  }

  const t = await getTranslations('activity.ai-tasks');

  // backfill results for tasks left pending/processing (e.g. user closed the page)
  await refreshPendingAITasks({ userId: user.id });

  const aiTasks = await getAITasks({
    userId: user.id,
    mediaType: type,
    page,
    limit,
  });

  const total = await getAITasksCount({
    userId: user.id,
    mediaType: type,
  });

  const table: Table = {
    title: t('list.title'),
    columns: [
      {
        name: 'result',
        title: t('fields.result'),
        className: 'min-w-[240px]',
        callback: (item: AITask) => {
          const parsedInfo = parseTaskData(item.taskInfo);
          if (item.mediaType === 'image' || item.mediaType === 'video') {
            const primary = mediaUrls(parsedInfo, item.mediaType);
            const urls = [...new Set(primary.length ? primary : mediaUrls(parseTaskData(item.taskResult), item.mediaType))];
            if (urls.length) {
              return <TaskMediaPreview urls={urls} mediaType={item.mediaType} prompt={item.prompt || ''} />;
            }
          }
          if (parsedInfo) {
            const taskInfo = parsedInfo;
            if (taskInfo.errorMessage) {
              return (
                <div className="text-red-500">
                  Failed: {taskInfo.errorMessage}
                </div>
              );
            } else if (taskInfo.songs && taskInfo.songs.length > 0) {
              const songs: any[] = taskInfo.songs.filter(
                (song: any) => song.audioUrl
              );
              if (songs.length > 0) {
                return (
                  <div className="flex flex-col gap-2">
                    {songs.map((song: any) => (
                      <AudioPlayer
                        key={song.id}
                        src={song.audioUrl}
                        title={song.title}
                        className="w-80"
                      />
                    ))}
                  </div>
                );
              }
            } else {
              return '-';
            }
          }

          return '-';
        },
      },
      { name: 'mediaType', title: t('fields.media_type'), type: 'label' },
      { name: 'provider', title: t('fields.provider'), type: 'label' },
      { name: 'model', title: t('fields.model'), type: 'label' },
      {
        name: 'status',
        title: t('fields.status'),
        callback: (item: AITask) => <StatusBadge status={item.status} t={t} />,
      },
      { name: 'costCredits', title: t('fields.cost_credits'), type: 'label' },
      { name: 'createdAt', title: t('fields.created_at'), type: 'time' },
      {
        name: 'action',
        title: t('fields.action'),
        type: 'dropdown',
        callback: (item: AITask) => {
          const items: Button[] = [];

          if (GENERATING_STATUSES.includes(item.status as AITaskStatus)) {
            items.push({
              title: t('list.buttons.refresh'),
              url: `/activity/ai-tasks/${item.id}/refresh`,
              icon: 'RiRefreshLine',
            });
          }

          return items;
        },
      },
    ],
    data: aiTasks,
    emptyMessage: t('list.empty_message'),
    pagination: {
      total,
      page,
      limit,
    },
  };

  return (
    <div className="space-y-8">
      <AITasksAutoRefresh
        active={aiTasks.some((task) =>
          GENERATING_STATUSES.includes(task.status as AITaskStatus)
        )}
      />
      <TableCard title={t('list.title')} table={table} />
    </div>
  );
}
