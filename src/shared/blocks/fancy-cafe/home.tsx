'use client';

/* eslint-disable @next/next/no-img-element */

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';
import { ArrowRight, Coffee, Dog, Flame, ImagePlus, Maximize, Play, Smartphone, Users, Volume2, VolumeX } from 'lucide-react';
import { useLocale } from 'next-intl';
import { track } from '@/shared/lib/analytics';
import { Link } from '@/core/i18n/navigation';
import { TemplateGenerator } from '@/shared/blocks/viral-home/generator';
import { ViralHeader } from '@/shared/blocks/viral-home/header';
import { ViralFooter } from '@/shared/blocks/viral-home/footer';
import { buildHowToJsonLdFromSteps } from '@/shared/lib/howto-schema';
import { fancyCafeFifteenSecondCosts } from '@/shared/lib/fancy-cafe-cost';
import { getVideoCostTable } from '@/shared/lib/video-cost';
import { fancyCafeTemplates, type FancyCafeTemplate } from './templates';
import { getFancyCafeFaq } from './faq';
import { FancyCafeLinkCluster } from './link-cluster';
import { FANCY_CAFE_POSTS } from './long-tails';
import { FANCY_CAFE_HOW_TO_STEPS } from './steps';
import '@/shared/blocks/viral-home/home.css';

function PlatformIcon({ type }: { type: 'tiktok' | 'youtube' | 'instagram' | 'x' | 'reddit' }) {
  const paths: Record<string, ReactNode> = {
    tiktok: <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.9 2.9 0 1 1-2.31-2.84V9.25a6.35 6.35 0 1 0 5.76 6.32V8.69a8.16 8.16 0 0 0 4.77 1.52V6.79a4.85 4.85 0 0 1-1-.1z" />,
    youtube: <><path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3.02 3.02 0 0 0 .5 6.19C0 8.07 0 12 0 12s0 3.93.5 5.81a3.02 3.02 0 0 0 2.12 2.14c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 0 0 2.12-2.14C24 15.93 24 12 24 12s0-3.93-.5-5.81z"/><path fill="#fff" d="m9.55 15.57 6.27-3.57-6.27-3.57z"/></>,
    instagram: <><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></>,
    x: <path d="M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.41l-5.8-7.58-6.64 7.58H.47l8.6-9.83L0 1.15h7.59l5.24 6.93zm-1.29 19.5h2.04L6.49 3.24H4.3z" />,
    reddit: <path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm5.01 4.74a1.25 1.25 0 1 0-1.95.94l-2.91-.62a.34.34 0 0 0-.41.26l-.9 4.17c-1.87.06-3.56.62-4.79 1.5a1.76 1.76 0 1 0-.81 3.33c-.03.17-.05.35-.05.53 0 2.7 3.12 4.87 7 4.87s7-2.17 7-4.87c0-.18-.02-.36-.04-.52a1.76 1.76 0 1 0-2.95-1.11c-1.2-.86-2.85-1.42-4.68-1.49l.8-3.75 2.6.55a1.25 1.25 0 0 0 2.09-1.09zM8.6 13.02a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zm6.8 0a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5z" />,
  };
  return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">{paths[type]}</svg>;
}

const activeVideos: HTMLVideoElement[] = [];

function TemplateVideo({ id, colors }: { id: string; colors: readonly [string, string] }) {
  const ref = useRef<HTMLVideoElement | null>(null);
  const [muted, setMuted] = useState(true);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { activeVideos.push(el); while (activeVideos.length > 3) { const v = activeVideos.shift(); if (v && v !== el) v.pause(); } el.play().catch(() => {}); }else { const vi = activeVideos.indexOf(el); if (vi >= 0) activeVideos.splice(vi, 1); el.pause(); }
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
    <video ref={ref} className="tv-video" src={`/templates/${id}.mp4`} poster={`/templates/${id}-poster.jpg`} muted={muted} loop autoPlay playsInline preload="metadata" style={{ background: `linear-gradient(165deg, ${colors[0]}, ${colors[1]})` }}/>
    <span className="tv-sound" role="button" tabIndex={0} aria-label={muted ? 'Unmute video' : 'Mute video'} onClick={toggleSound} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') toggleSound(e); }}>{muted ? <VolumeX size={15}/> : <Volume2 size={15}/>}</span>
  </>;
}

export function FancyCafeHome({ creditsPerUsd = 12, videoCosts = getVideoCostTable(), pageUrl }: { creditsPerUsd?: number; videoCosts?: ReturnType<typeof getVideoCostTable>; pageUrl?: string }) {
  const locale = useLocale();
  const zh = locale === 'zh';
  const t = (en: string, cn: string) => zh ? cn : en;
  useEffect(() => { track('view_template', { template: 'fancy_cafe' }); }, []);
  // hero 示意默认原版坐桌（趋势的原场景）
  const [template, setTemplate] = useState<FancyCafeTemplate>(fancyCafeTemplates.find((item) => item.id === 'fancycafe-original') ?? fancyCafeTemplates[0]);
  const focusGenerator = () => { document.getElementById('generator')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); };
  const choose = (item: FancyCafeTemplate = fancyCafeTemplates[0]) => { track('click_generate', { template: 'fancy_cafe', variant: item.id }); setTemplate(item); focusGenerator(); };
  const start = () => focusGenerator();
  const costs = fancyCafeFifteenSecondCosts({ creditsPerUsd, videoCosts });
  const minCredits = costs.p480;
  const features = [
    [Coffee, t('The table is the whole joke','那张桌子就是全部笑点'), t('A knee-high round steel table in a bare concrete cafe, mistaken for a stool. The person on it is perfectly relaxed — right up until a stranger puts a coffee on it. The AI keeps the room, the timing and the sound, and redraws only the people.','极简水泥咖啡馆里一张齐膝高的小圆钢桌，被当成了凳子。坐上去的人淡定极了——直到陌生人把咖啡放上他的桌子。AI 保留房间、节奏和声音，只换人。')],
    [ImagePlus, t('Two photos: table first, walk-in second','两张照片：坐桌第一张，进店第二张'), t('Photo 1 sits on the table, photo 2 walks in and shows how it is done. Full body, one person per photo, relaxed poses — the joke is in the legs: knees up on the table, then the quiet climb-down.','第 1 张照片坐上桌子，第 2 张走进来示范正确用法。全身照、每张一个人、姿势放松——笑点全在腿上：膝盖顶着桌子，再默默爬下来。')],
    [Users, t('Cast yourself, a friend, or your dog','可以是自己、朋友，或者狗'), t('Six cafe casts: the Original Table Sitter, Cream Suit, Korean Couple, Spanish POV, Green Trousers — and a Great Pyrenees on the table. Put your friend on the table and play the calm one yourself.','六套阵容：原版坐桌、奶油西装、韩国情侣、西语 POV、绿裤——还有一只坐上桌子的大白熊犬。把朋友放桌上，自己演那个淡定的。')],
    [Smartphone, t('15 seconds, 9:16, sound on','15 秒、9:16、带声音'), t('The page opens on 9:16 with the length fixed at 15 seconds — the full scene from the perch to the climb-down. Post it with the POV caption and the trend sound in TikTok, Reels, or Shorts.','页面默认 9:16，时长固定 15 秒——从坐上桌到爬下来的完整一幕。配 POV 文案，在 TikTok、Reels 或 Shorts 里加热梗原声。')],
  ] as const;
  const steps = FANCY_CAFE_HOW_TO_STEPS.map((step) => [zh ? step.name.zh : step.name.en, zh ? step.text.zh : step.text.en] as const);
  const faq = getFancyCafeFaq(zh, { creditsPerUsd, videoCosts });
  const quickAnswers = [
    [t('What is it?', '这是什么？'), t('A 15-second TikTok scene posted by @leehoustonx on 1 November 2026: a man perches on a tiny cafe table as if it were a stool, until a woman puts her cup on it. 9.8M plays in two days.','2026 年 11 月 1 日 @leehoustonx 发的 15 秒 TikTok 场景：男人把咖啡馆小桌当凳子坐，直到有人把咖啡放上桌。两天播放 980 万。')],
    [t('How do I make one?', '怎么做？'), t('2 full-body photos and 1 of 6 cafe clips. The browser export is 15 seconds at 9:16, with no app.','2 张全身照，6 条咖啡馆片段里选 1 条。浏览器导出 15 秒 9:16，不用装 App。')],
    [t('How much is it?', '多少钱？'), t(`A 15-second clip is ${costs.p480} credits at 480p, ${costs.p720} at 720p (about ${costs.usd720}), and ${costs.p1080} at 1080p. Packs start at $9.9 for 90 credits; ${creditsPerUsd} credits = $1.`,`15 秒成片 480p 是 ${costs.p480} 积分，720p 是 ${costs.p720} 积分（约 ${costs.usd720}），1080p 是 ${costs.p1080} 积分。积分包 $9.9 起，含 90 积分；${creditsPerUsd} 积分 = 1 美元。`)],
    [t('How long does it take?', '多久出片？'), t('The clip is 15 seconds at 9:16; rendering typically takes a few minutes and lands in History.','成片 15 秒 9:16；渲染一般几分钟，完成后在「历史记录」取。')],
  ] as const;
  const howToJsonLd = buildHowToJsonLdFromSteps({
    name: t('How to make a Your First Time in a Fancy Cafe AI video', '如何制作 Your First Time in a Fancy Cafe AI 视频'),
    description: t('Pick a cafe clip, upload two full-body photos, download the 15-second MP4, then caption the POV, add the trend sound and an AI label.', '选一条咖啡馆片段，上传两张全身照，下载 15 秒 MP4，再配 POV 文案、加热梗原声和 AI 标注。'),
    url: pageUrl,
    steps: steps.map(([name, text]) => ({ name, text })),
  });
  return <div className="viral-home">{howToJsonLd ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} /> : null}
    <ViralHeader onStart={start}/>
    <main>
      <section className="hero"><div className="container"><div className="hero-badge"><Flame size={16}/><span>#yourfirsttimeinafancycafe is trending</span></div><h1>{t('Create a ', 'Create a ')}<span className="hl">First Time in a Fancy Cafe</span>{t(' AI Video', ' AI Video')}</h1><p className="lead">{t('Upload two photos and generate a 15-second vertical cafe scene in minutes.', '上传两张照片，几分钟生成 15 秒竖屏咖啡馆场景。')}</p><TemplateGenerator key={template.id} template={template} open embedded onOpenChange={() => {}}/></div></section>
      <section className="sec templates-section" id="templates"><div className="container"><div className="sec-head"><p className="kick">{t('Templates','模板')}</p><h2>{t('First Time in a Fancy Cafe Viral Video Template','First Time in a Fancy Cafe 爆火视频模板')}</h2><p className="sub">{t('The clips below are the model reference videos for this template. Click one to load it in the generator.','以下片段为该模板的模型视频参考，点击可在生成器中切换预览。')}</p></div><div className="grid3">{fancyCafeTemplates.map((item, index) => <article className="tcard" key={item.id}><button className="tv tv-full" aria-label={`${t('Use','使用')} ${item.name[zh ? 1 : 0]}`} onClick={() => choose(item)} style={{ '--g1': item.colors[0], '--g2': item.colors[1] } as CSSProperties}><TemplateVideo id={item.id} colors={item.colors}/>{index === 0 && <span className="hot">HOT</span>}<span className="tv-expand"><Maximize size={18}/></span><span className="tv-play"><Play size={16}/></span><span className="tv-bar"><i/></span></button><div className="tmeta"><b>{item.name[zh ? 1 : 0]}</b></div><button className="use" onClick={() => choose(item)}>{t('Generate','立即生成')}</button></article>)}</div></div></section>
      <section className="sec" id="quick-answers"><div className="container"><div className="sec-head"><p className="kick">{t('Quick answers','快速回答')}</p><h2>{t('The five things everyone asks','所有人都在问的五个问题')}</h2></div><div className="grid4">{quickAnswers.map(([title,desc]) => <div className="feat" key={title}><h3>{title}</h3><p>{desc}</p></div>)}</div></div></section>
      <div className="logos"><p className="lbl">{t('Creators are posting ViralReel videos on','创作者们正在这些平台发布 ViralReel 视频')}</p><div className="row"><span className="soc tiktok"><PlatformIcon type="tiktok"/>TikTok</span><span className="soc youtube"><PlatformIcon type="youtube"/>YouTube Shorts</span><span className="soc instagram"><PlatformIcon type="instagram"/>Instagram Reels</span><span className="soc x"><PlatformIcon type="x"/>X / Twitter</span><span className="soc reddit"><PlatformIcon type="reddit"/>Reddit</span></div></div>
      <section className="stats"><div className="container stats-grid"><div><div className="statnum">15<em>s</em></div><p>{t('Fixed clip length, full scene','固定时长，完整一幕')}</p></div><div><div className="statnum">9:16</div><p>{t('Vertical export for TikTok, Reels and Shorts','竖屏导出，适配 TikTok、Reels、Shorts')}</p></div><div><div className="statnum">2</div><p>{t('Photos: one on the table, one walks in','两张照片：一张坐桌，一张进店')}</p></div><div><div className="statnum">{minCredits}<em className="wide-em">{t(' credits / 15s from', ' 积分 / 15 秒起')}</em></div><p>{t(`720p ${costs.p720} · 1080p ${costs.p1080} · ${creditsPerUsd} credits = $1`,`720p ${costs.p720} · 1080p ${costs.p1080} · ${creditsPerUsd} 积分 = 1 美元`)}</p></div></div></section>
      <section className="sec sec-alt" id="what"><div className="container"><div className="sec-head"><p className="kick">{t('What is the fancy cafe trend','fancy cafe 趋势是什么')}</p><h2>{t('The minimalist cafe where you cannot tell the seats from the tables','一间分不清座位和桌子的极简咖啡馆')}</h2><p className="sub">{t('Concrete walls, steel tables the size of a dinner plate, and one very relaxed mistake.','水泥墙、餐盘大小的钢桌，和一个非常淡定的错误。')}</p></div><div className="grid4">{features.map(([Icon,title,desc]) => <div className="feat" key={title}><div className="ic"><Icon size={20}/></div><h3>{title}</h3><p>{desc}</p></div>)}</div></div></section>
      <section className="sec" id="how"><div className="container"><div className="sec-head"><p className="kick">{t('How it works','使用教程')}</p><h2>{t('How to make a Your First Time in a Fancy Cafe AI video','如何制作 Your First Time in a Fancy Cafe AI 视频')}</h2><p className="sub">{t('Two photos to a cafe cameo in minutes — no app, no editor, no prompt.','两张照片到咖啡馆客串只要几分钟——不用装 App，不用会剪辑，也不用写提示词。')}</p></div><div className="grid4s">{steps.map(([title,desc],i) => <div className="step" key={title}><div className="num">{i+1}</div><h3>{title}</h3><p>{desc}</p></div>)}</div></div></section>
      <section className="sec" id="guide"><div className="container guide"><div className="sec-head"><p className="kick">{t('Guide','指南')}</p><h2>{t('Your First Time in a Fancy Cafe: the meme, the song, and where to make one','Your First Time in a Fancy Cafe：梗、歌，以及在哪里制作')}</h2></div>
        <figure className="guide-fig"><img src="/templates/first-time-in-a-fancy-cafe-ai-og.jpg" alt="Your First Time in a Fancy Cafe AI template on ViralReel — a man perched on a tiny table in a minimalist concrete cafe" width={1200} height={630} loading="lazy"/><figcaption>{t('Make the fancy cafe clip on ViralReel (viralreel.app) from two photos.','在 ViralReel（viralreel.app）用两张照片制作 fancy cafe 视频。')}</figcaption></figure>
        <h3>{t('Short answer','简短回答')}</h3>
        <p>{t(`A Your First Time in a Fancy Cafe clip on ViralReel is 15 seconds at 9:16. Default 720p is ${costs.p720} credits (about ${costs.usd720} at ${creditsPerUsd} credits = $1); 480p is ${costs.p480} credits and 1080p is ${costs.p1080} credits. Packs start at $9.9 for 90 credits. The generator shows the exact number before you start.`,`ViralReel 上的 Your First Time in a Fancy Cafe 是 15 秒、9:16。默认 720p 是 ${costs.p720} 积分（按 ${creditsPerUsd} 积分 = 1 美元，约 ${costs.usd720}）；480p 是 ${costs.p480} 积分，1080p 是 ${costs.p1080} 积分。积分包 $9.9 起，含 90 积分。生成器会在开始前显示确切数字。`)}</p>
        <h3>{t('What is the fancy cafe trend?','fancy cafe 趋势是什么？')}</h3>
        <p>{t('A 15-second vertical scene: a man perches on a tiny round steel table in a bare concrete cafe as if it were a stool, until a woman walks in and sets her cup on the table he is sitting on — one sideways look, and he quietly climbs down. Posted by @leehoustonx on 1 November 2026 to Steve Lacy\'s "Oh Yeah?", it passed 9.8M plays in two days; the next day cream-suit and Korean-couple face swaps pushed past 4.7M and 2.9M, and by 3 November the hashtag held 1,023 posts.','一条 15 秒竖屏场景：男人在空旷水泥咖啡馆里把小圆钢桌当凳子坐着，直到一个女人走进来、把咖啡杯放在他坐的那张桌子上——一个斜眼，他默默爬下来。2026 年 11 月 1 日 @leehoustonx 发布，配 Steve Lacy 的《Oh Yeah?》，两天破 980 万播放；第二天奶油西装版和韩国情侣版换脸冲过 470 万和 290 万，到 11 月 3 日标签下已有 1,023 条帖子。完整时间线见趋势百科。')}</p>
        <p className="guide-more"><Link href={FANCY_CAFE_POSTS.explained}>{t('Read the full trend encyclopedia — origin, timeline, and versions it gets confused with','阅读完整趋势百科——起源、时间线、易混淆版本')} →</Link></p>
        <h3>{t('The song: Steve Lacy\'s "Oh Yeah?"','歌：Steve Lacy 的《Oh Yeah?》')}</h3>
        <p>{t('The trend sound is "Oh Yeah?" by Steve Lacy — the title track of his 2026 album and the Spider-Man: Brand New Day credits song. The title line lands right as the guy realizes what he is sitting on. Add it from your posting app\'s library; ViralReel does not license it.','趋势原声是 Steve Lacy 的《Oh Yeah?》——他 2026 年同名专辑主打歌，也是《蜘蛛侠：崭新一日》片尾曲。歌名那句正好落在男人意识到自己坐的是什么的那一刻。发帖时从 App 曲库添加；ViralReel 不授权该歌曲。')}</p>
        <p className="guide-more"><Link href={FANCY_CAFE_POSTS.song}>{t('Everything about the fancy cafe song','关于 fancy cafe 原声的一切')} →</Link></p>
        <h3>{t('Where can I generate a fancy cafe AI video?','在哪里可以生成 fancy cafe AI 视频？')}</h3>
        <p>{t('On ViralReel, at https://www.viralreel.app/first-time-in-a-fancy-cafe-ai-template — an independent AI video template site. Pick one of the six cafe clips, upload two photos in the browser, and generate: no CapCut account, no prompt, no watermark on paid exports. The format is AI — use photos you have the right to use, and turn on the AI-generated label when you post.','在 ViralReel：https://www.viralreel.app/zh/first-time-in-a-fancy-cafe-ai-template ——独立的 AI 视频模板站。六条咖啡馆片段任选，浏览器里上传两张照片直接生成：不用注册 CapCut、不用写提示词，付费导出无水印。格式是 AI——只用你有权使用的照片，发布时打开 AI 生成标注。')}</p>
        <p className="guide-more"><Link href={FANCY_CAFE_POSTS.howTo}>{t('Read the full how-to','阅读完整教程')}</Link> · <Link href={FANCY_CAFE_POSTS.capcut}>{t('ViralReel vs CapCut','ViralReel 和 CapCut')}</Link> · <Link href="/first-time-in-a-fancy-cafe-ai">{t('Fancy cafe AI','Fancy cafe AI')}</Link> · <Link href="/first-time-in-a-fancy-cafe-tiktok">{t('The TikTok trend','TikTok 趋势')}</Link> · <Link href="/fancy-cafe-meme">{t('The meme, explained','梗，一页讲清')}</Link> · <Link href="/fancy-cafe-generator">{t('AI video generator','AI 视频生成器')}</Link> · <Link href="/fancy-cafe-with-friend">{t('With a friend','和朋友一起')}</Link> · <Link href="/fancy-cafe-dog">{t('The dog version','狗狗版')}</Link> · <Link href="/pricing">{t('Credit packs','积分包')}</Link> · <Link href="/subscribe">{t('Monthly plans','月付方案')}</Link></p>
      </div></section>
      <section className="sec sec-alt" id="faq"><div className="container"><div className="sec-head"><p className="kick">{t('FAQ','常见问题')}</p><h2>{t('Frequently asked questions about Your First Time in a Fancy Cafe','关于 Your First Time in a Fancy Cafe 的常见问题')}</h2></div><div className="faq-list">{faq.map(([question,answer],i) => <details key={question} open={i === 0}><summary>{question}</summary><p>{answer}</p></details>)}</div></div></section>
      <section className="sec" id="related"><div className="container"><div className="sec-head"><p className="kick">{t('Related','相关')}</p><h2>{t('Fancy cafe guides on ViralReel','ViralReel 上的 fancy cafe 指南')}</h2></div><FancyCafeLinkCluster zh={zh} currentPath="/first-time-in-a-fancy-cafe-ai-template" /></div></section>
      <section className="final-cta sec-alt"><div className="container"><h2>{t('Your First Time in a Fancy Cafe starts here','Your First Time in a Fancy Cafe，从这里开始')}</h2><p>{t('Pick a clip, upload two photos, and post the POV with the trend sound and an AI label.','选一条片段，上传两张照片，配上热梗原声和 AI 标注，把 POV 帖发出去。')}</p><button className="btn btn-primary btn-lg" onClick={start}>{t('Upload photos — start now','上传照片，立即开始')}<ArrowRight size={16}/></button></div></section>
    </main>
    <ViralFooter/>
  </div>;
}
