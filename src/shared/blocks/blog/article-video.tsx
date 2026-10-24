'use client';

import { useEffect, useRef, type ComponentProps, type RefObject } from 'react';

import { cn } from '@/shared/lib/utils';

const boundVideos = new WeakSet<HTMLVideoElement>();

function isFullscreen(el: HTMLVideoElement) {
  return (
    document.fullscreenElement === el ||
    Boolean(
      (el as HTMLVideoElement & { webkitDisplayingFullscreen?: boolean })
        .webkitDisplayingFullscreen
    )
  );
}

export function bindArticleVideo(el: HTMLVideoElement) {
  if (boundVideos.has(el)) return () => {};
  boundVideos.add(el);

  el.playsInline = true;
  el.setAttribute('playsinline', '');
  el.removeAttribute('muted');
  el.muted = false;
  el.defaultMuted = false;

  const unmute = () => {
    el.muted = false;
    el.defaultMuted = false;
    if (el.volume === 0) el.volume = 1;
  };

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting || isFullscreen(el) || el.paused) return;
      el.pause();
    },
    { threshold: 0 }
  );
  observer.observe(el);
  el.addEventListener('play', unmute);
  el.addEventListener('playing', unmute);

  return () => {
    el.removeEventListener('play', unmute);
    el.removeEventListener('playing', unmute);
    observer.disconnect();
    boundVideos.delete(el);
  };
}

export function useArticleVideos(
  containerRef: RefObject<HTMLElement | null>,
  key?: string
) {
  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;
    const cleanups = [...root.querySelectorAll('video')].map(bindArticleVideo);
    return () => cleanups.forEach((fn) => fn());
  }, [containerRef, key]);
}

export function ArticleVideo({
  className,
  muted: _muted,
  ...props
}: ComponentProps<'video'>) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    return bindArticleVideo(el);
  }, []);

  return (
    <video
      ref={ref}
      className={cn('rounded-md border', className)}
      controls
      playsInline
      {...props}
      muted={false}
    />
  );
}
