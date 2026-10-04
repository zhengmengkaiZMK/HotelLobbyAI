'use client';

import { useState } from 'react';
import { useLocale } from 'next-intl';

import { DownloadMediaButton } from '@/shared/blocks/common/download-media-button';
import { Button } from '@/shared/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@/shared/components/ui/dialog';

export function TaskMediaPreview({
  urls,
  mediaType,
  prompt,
}: {
  urls: string[];
  mediaType: 'image' | 'video';
  prompt: string;
}) {
  const zh = useLocale().startsWith('zh');
  const [selected, setSelected] = useState<string | null>(null);
  const [failed, setFailed] = useState(false);
  const label = zh ? '打开预览' : 'Open preview';

  return (
    <Dialog open={selected !== null} onOpenChange={(open) => {
      if (!open) setSelected(null);
    }}>
      <div className="flex w-64 flex-wrap gap-2">
        {urls.map((url, index) => (
          <div key={url} className="flex w-full flex-col items-stretch gap-2">
            <DialogTrigger asChild>
              <button
                type="button"
                className="bg-muted hover:bg-accent flex w-full flex-col items-center gap-2 overflow-hidden rounded-lg border p-2 text-sm"
                onClick={() => { setFailed(false); setSelected(url); }}
                aria-label={`${label} ${index + 1}`}
              >
                {mediaType === 'image' ? (
                  <img src={url} alt={`${label} ${index + 1}`} loading="lazy" className="h-32 w-full object-contain" />
                ) : (
                  <video src={url} preload="metadata" muted playsInline className="pointer-events-none h-32 w-full object-contain" />
                )}
                <span>{label} · {index + 1}</span>
              </button>
            </DialogTrigger>
            {mediaType === 'video' && (
              <DownloadMediaButton url={url} mediaType={mediaType} className="w-full" />
            )}
          </div>
        ))}
      </div>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-4xl">
        <DialogTitle>{label}</DialogTitle>
        <DialogDescription className="line-clamp-3 break-words">{prompt || (zh ? '生成结果' : 'Generated result')}</DialogDescription>
        {selected && (mediaType === 'image' ? (
          <img key={selected} src={selected} alt={prompt || label} className="max-h-[65vh] w-full object-contain" onError={() => setFailed(true)} />
        ) : (
          <video key={selected} src={selected} controls playsInline preload="metadata" className="max-h-[65vh] w-full" onError={() => setFailed(true)} />
        ))}
        {failed && <p role="alert" className="text-destructive text-sm">{zh ? '媒体加载失败，链接可能已过期，请尝试打开原文件。' : 'Media could not load. The link may have expired; try opening the original file.'}</p>}
        {selected && (
          <div className="flex flex-wrap gap-2">
            {mediaType === 'video' && (
              <DownloadMediaButton url={selected} mediaType={mediaType} />
            )}
            <Button asChild variant="outline"><a href={selected} target="_blank" rel="noopener noreferrer">{zh ? '打开原文件' : 'Open original file'}</a></Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
