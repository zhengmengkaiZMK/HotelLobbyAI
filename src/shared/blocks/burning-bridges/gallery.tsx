'use client';

import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { useLocale } from 'next-intl';
import { Maximize, Play, Volume2, VolumeX } from 'lucide-react';

import { TemplateGenerator } from '@/shared/blocks/viral-home/generator';
import type { TemplateDef } from '@/shared/blocks/viral-home/templates';
import { burningBridgesTemplates, type BBTemplate } from './templates';
import '@/shared/blocks/viral-home/home.css';

function PartyVideo({ id, colors }: { id: string; colors: readonly [string, string] }) {
  const ref = useRef<HTMLVideoElement | null>(null);
  const [muted, setMuted] = useState(true);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) el.play().catch(() => {});
      else el.pause();
    }, { threshold: 0.3 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  const toggleSound = (e: { preventDefault: () => void; stopPropagation: () => void }) => {
    e.preventDefault(); e.stopPropagation();
    setMuted((m) => {
      const next = !m;
      const el = ref.current;
      if (el) { el.muted = next; if (!next) el.play().catch(() => {}); }
      return next;
    });
  };
  return <>
    <video ref={ref} className="tv-video" src={`/templates/${id}.mp4`} muted={muted} loop playsInline preload="metadata" style={{ background: `linear-gradient(165deg, ${colors[0]}, ${colors[1]})` }}/>
    <span className="tv-sound" role="button" tabIndex={0} aria-label={muted ? 'Unmute video' : 'Mute video'} onClick={toggleSound} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') toggleSound(e); }}>{muted ? <VolumeX size={15}/> : <Volume2 size={15}/>}</span>
  </>;
}

const badges = ['Hot trend', 'Fan favorite', 'Viral format', 'Community pick', 'Trending up', 'Crowd pleaser'];

export function BurningBridgesGallery() {
  const zh = useLocale().startsWith('zh');
  const t = (en: string, cn: string) => (zh ? cn : en);
  const [template, setTemplate] = useState<TemplateDef>(burningBridgesTemplates[0]);
  const [open, setOpen] = useState(false);
  const choose = (item: BBTemplate) => { setTemplate(item); setOpen(true); };

  return (
    <div className="viral-home">
      <div className="grid3">{burningBridgesTemplates.map((item, index) => <article className="tcard" key={item.id}><button className="tv" aria-label={`${t('Use', '使用')} ${item.name[zh ? 1 : 0]}`} onClick={() => choose(item)} style={{ '--g1': item.colors[0], '--g2': item.colors[1] } as CSSProperties}><PartyVideo id={item.id} colors={item.colors}/>{index === 0 && <span className="hot">HOT</span>}<span className="tv-expand"><Maximize size={18}/></span><span className="tv-play"><Play size={16}/></span><span className="tv-bar"><i/></span></button><div className="tmeta"><b>{item.name[zh ? 1 : 0]}</b><span>{t(badges[index % badges.length], ['当红玩法', '人气之选', '爆款格式', '社区精选', '热度上升', '气氛担当'][index % badges.length])}</span></div><button className="use" onClick={() => choose(item)}>{t('Generate', '立即生成')}</button></article>)}</div>
      <TemplateGenerator key={template.id} template={template} open={open} onOpenChange={setOpen} allowPromptEdit/>
    </div>
  );
}
