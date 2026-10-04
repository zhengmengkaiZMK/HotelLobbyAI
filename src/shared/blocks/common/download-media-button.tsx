'use client';

import { useLocale } from 'next-intl';
import { useState } from 'react';
import { Download } from 'lucide-react';

import { Button } from '@/shared/components/ui/button';

function guessFilename(url: string, mediaType: 'image' | 'video') {
  const extFromUrl = (() => {
    try {
      const path = new URL(url).pathname;
      const match = path.match(/\.(mp4|mov|webm|jpg|jpeg|png|webp|gif)$/i);
      return match ? match[1].toLowerCase() : null;
    } catch {
      return null;
    }
  })();
  const ext = extFromUrl || (mediaType === 'video' ? 'mp4' : 'png');
  return `viralreel-${mediaType}-${Date.now()}.${ext}`;
}

export function DownloadMediaButton({
  url,
  mediaType,
  className,
}: {
  url: string;
  mediaType: 'image' | 'video';
  className?: string;
}) {
  const zh = useLocale().startsWith('zh');
  const [busy, setBusy] = useState(false);
  const label = zh ? '下载' : 'Download';

  async function handleClick(event: React.MouseEvent) {
    // keep the parent preview trigger from opening the dialog
    event.preventDefault();
    event.stopPropagation();
    if (busy) return;
    setBusy(true);
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const blob = await response.blob();
      const objectUrl = URL.createObjectURL(blob);
      const anchor = document.createElement('a');
      anchor.href = objectUrl;
      anchor.download = guessFilename(url, mediaType);
      document.body.appendChild(anchor);
      anchor.click();
      anchor.remove();
      URL.revokeObjectURL(objectUrl);
    } catch {
      // blob download failed (CORS / expired link) — fall back to direct open
      window.open(url, '_blank', 'noopener,noreferrer');
    } finally {
      setBusy(false);
    }
  }

  return (
    <Button
      type="button"
      variant="outline"
      size="sm"
      className={className}
      disabled={busy}
      onClick={handleClick}
    >
      <Download className="h-4 w-4" />
      {busy ? (zh ? '下载中…' : 'Downloading…') : label}
    </Button>
  );
}
