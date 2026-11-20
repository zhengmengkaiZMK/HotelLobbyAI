'use client';

import { useEffect, useMemo, useState } from 'react';
import { useLocale } from 'next-intl';

import { ImageUploader, ImageUploaderValue } from '@/shared/blocks/common';
import { StarterPackDialog } from '@/shared/blocks/viral-home/starter-pack-dialog';
import { Link } from '@/core/i18n/navigation';
import { useAppContext } from '@/shared/contexts/app';
import type { PublicImageCatalog, PublicImageStyle } from '@/shared/lib/image-tool';

const DRAFT_KEY = 'gta-image-draft';
const POLL_MS = 5000;
const WAIT_MS = 180000;

function urlsFromTaskInfo(taskInfo: unknown): string[] {
  let value = taskInfo;
  if (typeof value === 'string') {
    try {
      value = JSON.parse(value);
    } catch {
      return [];
    }
  }
  const found: string[] = [];
  const walk = (entry: unknown, depth: number) => {
    if (!entry || depth > 6) return;
    if (typeof entry === 'string') {
      try {
        const url = new URL(entry);
        if (url.protocol === 'https:') found.push(url.toString());
      } catch {
        // Ignore non-URL strings.
      }
      return;
    }
    if (Array.isArray(entry)) {
      entry.forEach((item) => walk(item, depth + 1));
      return;
    }
    if (typeof entry === 'object') {
      Object.entries(entry as Record<string, unknown>).forEach(([key, child]) => {
        if (key === 'prompt') return;
        walk(child, depth + 1);
      });
    }
  };
  walk(value, 0);
  return [...new Set(found)];
}

export function GtaStyleTool({ initialCatalog }: { initialCatalog: PublicImageCatalog }) {
  const zh = useLocale().startsWith('zh');
  const t = (en: string, cn: string) => (zh ? cn : en);
  const { user, setIsShowSignModal, fetchUserCredits } = useAppContext();
  const [catalog, setCatalog] = useState(initialCatalog);
  const [styleId, setStyleId] = useState(initialCatalog.styles[0]?.id || '');
  const [referenceUrl, setReferenceUrl] = useState('');
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState(false);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState('');
  const [taskId, setTaskId] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [packOpen, setPackOpen] = useState(false);
  const [startedAt, setStartedAt] = useState<number | null>(null);

  const style = useMemo(
    () => catalog.styles.find((item) => item.id === styleId) || null,
    [catalog.styles, styleId]
  );
  const paidCredits = referenceUrl ? catalog.imageCredits : catalog.textCredits;
  const modeReady = referenceUrl ? catalog.imageToImage : catalog.textToImage;

  useEffect(() => {
    const raw = sessionStorage.getItem(DRAFT_KEY);
    if (!raw) return;
    try {
      const draft = JSON.parse(raw) as { styleId?: string; referenceUrl?: string };
      if (draft.styleId) setStyleId(draft.styleId);
      if (draft.referenceUrl) setReferenceUrl(draft.referenceUrl);
    } catch {
      sessionStorage.removeItem(DRAFT_KEY);
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem(DRAFT_KEY, JSON.stringify({ styleId, referenceUrl }));
  }, [styleId, referenceUrl]);

  async function refreshCatalog() {
    const response = await fetch('/api/ai/image/catalog', { cache: 'no-store' });
    const payload = await response.json();
    if (payload?.code === 0 && payload.data) setCatalog(payload.data as PublicImageCatalog);
  }

  useEffect(() => {
    void refreshCatalog();
  }, [user?.id]);

  function onPhotos(items: ImageUploaderValue[]) {
    setUploading(items.some((item) => item.status === 'uploading'));
    setUploadError(items.some((item) => item.status === 'error'));
    const url = items.find((item) => item.status === 'uploaded' && item.url)?.url || '';
    setReferenceUrl(url);
  }

  async function poll(id: string, began: number) {
    if (Date.now() - began > WAIT_MS) {
      setBusy(false);
      setMessage(
        t(
          'The provider has not finished. This wait does not cancel the attempt or start a second free image. Check My generations for the result.',
          '提供方还没完成。这次等待不会取消任务，也不会再给一张免费图片。请到生成记录查看结果。'
        )
      );
      return;
    }
    const response = await fetch('/api/ai/query', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ taskId: id }),
    });
    const payload = await response.json();
    if (payload?.code !== 0) {
      setBusy(false);
      setMessage(payload?.message || t('Could not check the image', '暂时查不到这张图片'));
      await refreshCatalog();
      return;
    }
    const status = payload.data?.status;
    const urls = urlsFromTaskInfo(payload.data?.taskInfo);
    if (status === 'success' && urls[0]) {
      setImageUrl(urls[0]);
      setBusy(false);
      setMessage('');
      await refreshCatalog();
      await fetchUserCredits();
      return;
    }
    if (status === 'failed' || status === 'canceled') {
      setBusy(false);
      setMessage(
        t(
          'The provider did not return an image. If this was your free image, it is available again. Paid credits are returned when a charge was made.',
          '提供方没有返回图片。如果这次用的是每日免费图片，额度会退回。如果扣了积分，积分会退回。'
        )
      );
      await refreshCatalog();
      await fetchUserCredits();
      return;
    }
    window.setTimeout(() => void poll(id, began), POLL_MS);
  }

  async function generate() {
    if (!user) {
      setIsShowSignModal(true);
      return;
    }
    if (!catalog.configured || !style || !modeReady || uploading || uploadError) return;
    setBusy(true);
    setMessage('');
    setImageUrl('');
    const began = Date.now();
    setStartedAt(began);
    try {
      const response = await fetch('/api/ai/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          mediaType: 'image',
          styleId: style.id,
          idempotencyKey: crypto.randomUUID(),
          options: referenceUrl ? { image_input: [referenceUrl] } : {},
        }),
      });
      const payload = await response.json();
      if (payload?.code !== 0) {
        setBusy(false);
        const code = payload?.data?.code || String(payload?.message || '').split(':')[0];
        if (code === 'INSUFFICIENT_CREDITS') {
          setPackOpen(true);
          setMessage(t('The daily free image is used, and the balance is short.', '今日免费图片已用完，而且余额不够。'));
        } else if (code === 'NOT_SIGNED_IN') {
          setIsShowSignModal(true);
        } else {
          setMessage(String(payload?.message || t('Could not start the image', '没能开始生成')).replace(/^[A-Z_]+:\s*/, ''));
        }
        await refreshCatalog();
        await fetchUserCredits();
        return;
      }
      const id = payload.data?.id as string;
      setTaskId(id);
      const urls = urlsFromTaskInfo(payload.data?.taskInfo);
      if (payload.data?.status === 'success' && urls[0]) {
        setImageUrl(urls[0]);
        setBusy(false);
        await refreshCatalog();
        await fetchUserCredits();
        return;
      }
      void poll(id, began);
    } catch {
      setBusy(false);
      setMessage(t('Could not reach the generator. If nothing was accepted, try again.', '没能连上生成器。如果任务没被接受，可以再试一次。'));
      await refreshCatalog();
    }
  }

  const fileHref = taskId ? `/api/ai/image/file?taskId=${encodeURIComponent(taskId)}` : '';
  const resetLabel = catalog.resetsAt
    ? new Intl.DateTimeFormat(zh ? 'zh-CN' : 'en-US', {
        timeZone: 'Asia/Shanghai',
        hour: '2-digit',
        minute: '2-digit',
        month: 'short',
        day: 'numeric',
      }).format(new Date(catalog.resetsAt))
    : '';

  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm md:p-6">
      {!catalog.configured ? (
        <p className="rounded-lg bg-amber-50 px-3 py-2 text-sm text-amber-900">
          {t(
            'This tool is not configured yet. An admin still needs to save the drawing relay and at least one style. Nothing is charged.',
            '这个工具还没配置好。管理员需要先保存绘画中转和至少一个风格。现在不会扣费。'
          )}
        </p>
      ) : null}
      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {catalog.styles.map((item: PublicImageStyle) => {
          const selected = item.id === styleId;
          const label = zh ? item.nameZh || item.name : item.name;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setStyleId(item.id)}
              aria-pressed={selected}
              className={`overflow-hidden rounded-xl border text-left ${selected ? 'border-orange-500 ring-2 ring-orange-200' : 'border-zinc-200'}`}
            >
              {item.thumbnail ? (
                <img src={item.thumbnail} alt="" className="h-36 w-full object-cover" />
              ) : (
                <div className="flex h-36 items-end bg-gradient-to-br from-orange-100 via-zinc-100 to-teal-100 p-3 text-xs text-zinc-700">
                  {t('No sample image uploaded', '还没有上传示例图')}
                </div>
              )}
              <span className="block px-3 py-2 text-sm font-medium">{label}</span>
            </button>
          );
        })}
      </div>
      <div className="mt-6">
        <ImageUploader
          title={t('Your photo, optional', '你的照片，可选')}
          allowMultiple={false}
          maxImages={1}
          maxSizeMB={10}
          emptyHint={t(
            'Upload one person photo for a styled image. Leave it empty to generate from the style alone.',
            '上传一张人物照片来做风格图。留空则只用风格生成。'
          )}
          defaultPreviews={referenceUrl ? [referenceUrl] : []}
          onChange={onPhotos}
        />
        {uploadError ? <p className="mt-2 text-sm text-red-600">{t('The photo did not upload.', '照片没有上传成功。')}</p> : null}
      </div>
      <div className="mt-4 rounded-lg bg-zinc-50 px-3 py-3 text-sm text-zinc-700">
        <p>
          {catalog.freeRemaining === 1
            ? t(
                `Your free image for this Asia/Shanghai day is still available. After that, this choice costs ${paidCredits} credits.`,
                `你在这个上海自然日的免费图片还没用。用完之后，当前选择需要 ${paidCredits} 积分。`
              )
            : catalog.freeRemaining === 0
              ? t(
                  `Today's free image is used. This choice costs ${paidCredits} credits. Balance: ${catalog.balance ?? 0}.`,
                  `今日免费图片已用完。当前选择需要 ${paidCredits} 积分。余额：${catalog.balance ?? 0}。`
                )
              : t(
                  `Sign in to use one free image per Asia/Shanghai day. After that, a style without a photo costs ${catalog.textCredits} credits and a photo style costs ${catalog.imageCredits} credits.`,
                  `登录后每个上海自然日可以生成一张免费图片。用完之后，不上传照片是 ${catalog.textCredits} 积分，上传照片是 ${catalog.imageCredits} 积分。`
                )}
        </p>
        <p className="mt-1">
          {t('The free image resets at 00:00 Asia/Shanghai', '免费图片在上海时间 00:00 重置')}
          {resetLabel ? ` (${resetLabel})` : ''}. {t('One image is returned per attempt.', '每次只返回一张图片。')}
        </p>
      </div>
      <div className="mt-4 flex flex-wrap gap-3">
        <button
          type="button"
          className="rounded-md bg-orange-600 px-4 py-3 text-sm font-semibold text-white disabled:opacity-60"
          disabled={busy || uploading || !catalog.configured || !style || !modeReady}
          onClick={() => void generate()}
        >
          {busy ? t('Generating…', '生成中…') : t('Generate image', '生成图片')}
        </button>
        <Link href="/activity/ai-tasks?type=image" className="rounded-md border border-zinc-300 px-4 py-3 text-sm">
          {t('My generations', '生成记录')}
        </Link>
      </div>
      {!modeReady && catalog.configured ? (
        <p className="mt-3 text-sm text-amber-800">
          {t(
            'The selected drawing model does not support this mode. Remove the photo or ask an admin to choose a model that supports it. No other provider is used.',
            '当前绘画模型不支持这个模式。可以去掉照片，或让管理员改选支持该模式的模型。不会改用别的供应商。'
          )}
        </p>
      ) : null}
      {message ? <p className="mt-3 text-sm text-zinc-700">{message}</p> : null}
      {startedAt && busy ? <p className="mt-2 text-xs text-zinc-500">{t('Waiting for the provider.', '正在等提供方。')}</p> : null}
      {imageUrl && fileHref ? (
        <figure className="mt-6">
          <a href={fileHref} target="_blank" rel="noopener">
            <img src={fileHref} alt={t('Generated image', '生成的图片')} className="max-h-[640px] w-full rounded-xl border object-contain" />
          </a>
          <figcaption className="mt-3 flex flex-wrap gap-3 text-sm">
            <a className="rounded-md border px-3 py-2" href={fileHref} target="_blank" rel="noopener">
              {t('Open full size', '查看原图')}
            </a>
            <a className="rounded-md bg-zinc-900 px-3 py-2 text-white" href={`${fileHref}&download=1`}>
              {t('Download', '下载')}
            </a>
          </figcaption>
        </figure>
      ) : null}
      <StarterPackDialog
        open={packOpen}
        onOpenChange={setPackOpen}
        costCredits={paidCredits}
        balance={catalog.balance ?? 0}
        subject="image"
        subjectZh="图片"
      />
    </div>
  );
}
