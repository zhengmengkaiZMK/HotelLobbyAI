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

function TemplateVideo({ id, colors }: { id: string; colors: readonly [string, string] }) {
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
    [t('Can I try it free?', '能免费试吗？'), t(`1 starter video on a new account. After that a 15-second clip is ${costs.p480} / ${costs.p720} / ${costs.p1080} credits. Not free forever.`,`新账号先做 1 条。之后 15 秒成片是 ${costs.p480} / ${costs.p720} / ${costs.p1080} 积分。不是永远免费。`)],
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
      <section className="hero"><div className="container"><div className="hero-badge"><Flame size={16}/><span>#yourfirsttimeinafancycafe is trending</span></div><h1>{t('Two photos - Your ', '两张照片 - Your ')}<span className="hl">First Time in a Fancy Cafe</span></h1><TemplateGenerator key={template.id} template={template} open embedded onOpenChange={() => {}}/></div></section>
      <section className="sec" id="quick-answers"><div className="container"><div className="sec-head"><p className="kick">{t('Quick answers','快速回答')}</p><h2>{t('The five things everyone asks','所有人都在问的五个问题')}</h2></div><div className="grid4">{quickAnswers.map(([title,desc]) => <div className="feat" key={title}><h3>{title}</h3><p>{desc}</p></div>)}</div></div></section>
      <section className="sec templates-section" id="templates"><div className="container"><div className="sec-head"><p className="kick">{t('Templates','模板')}</p><h2>{t('Six cafe casts to remix','六套可翻拍的咖啡馆阵容')}</h2><p className="sub">{t('Every card runs the same scene with a different cast. Click one to open the generator.','每张卡片跑的都是同一个场景，出镜的人不同。点击卡片打开生成器。')}</p></div><div className="grid3">{fancyCafeTemplates.map((item, index) => <article className="tcard" key={item.id}><button className="tv tv-full" aria-label={`${t('Use','使用')} ${item.name[zh ? 1 : 0]}`} onClick={() => choose(item)} style={{ '--g1': item.colors[0], '--g2': item.colors[1] } as CSSProperties}><TemplateVideo id={item.id} colors={item.colors}/>{index === 0 && <span className="hot">HOT</span>}<span className="tv-expand"><Maximize size={18}/></span><span className="tv-play"><Play size={16}/></span><span className="tv-bar"><i/></span></button><div className="tmeta"><b>{item.name[zh ? 1 : 0]}</b></div><button className="use" onClick={() => choose(item)}>{t('Generate','立即生成')}</button></article>)}</div></div></section>
      <div className="logos"><p className="lbl">{t('Creators are posting ViralReel videos on','创作者们正在这些平台发布 ViralReel 视频')}</p><div className="row"><span className="soc tiktok"><PlatformIcon type="tiktok"/>TikTok</span><span className="soc youtube"><PlatformIcon type="youtube"/>YouTube Shorts</span><span className="soc instagram"><PlatformIcon type="instagram"/>Instagram Reels</span><span className="soc x"><PlatformIcon type="x"/>X / Twitter</span><span className="soc reddit"><PlatformIcon type="reddit"/>Reddit</span></div></div>
      <section className="stats"><div className="container stats-grid"><div><div className="statnum">15<em>s</em></div><p>{t('Fixed clip length, full scene','固定时长，完整一幕')}</p></div><div><div className="statnum">9:16</div><p>{t('Vertical export for TikTok, Reels and Shorts','竖屏导出，适配 TikTok、Reels、Shorts')}</p></div><div><div className="statnum">2</div><p>{t('Photos: one on the table, one walks in','两张照片：一张坐桌，一张进店')}</p></div><div><div className="statnum">{minCredits}<em className="wide-em">{t(' credits / 15s from', ' 积分 / 15 秒起')}</em></div><p>{t(`720p ${costs.p720} · 1080p ${costs.p1080} · ${creditsPerUsd} credits = $1`,`720p ${costs.p720} · 1080p ${costs.p1080} · ${creditsPerUsd} 积分 = 1 美元`)}</p></div></div></section>
      <section className="sec sec-alt" id="what"><div className="container"><div className="sec-head"><p className="kick">{t('What is the fancy cafe trend','fancy cafe 趋势是什么')}</p><h2>{t('The minimalist cafe where you cannot tell the seats from the tables','一间分不清座位和桌子的极简咖啡馆')}</h2><p className="sub">{t('Concrete walls, steel tables the size of a dinner plate, and one very relaxed mistake.','水泥墙、餐盘大小的钢桌，和一个非常淡定的错误。')}</p></div><div className="grid4">{features.map(([Icon,title,desc]) => <div className="feat" key={title}><div className="ic"><Icon size={20}/></div><h3>{title}</h3><p>{desc}</p></div>)}</div></div></section>
      <section className="sec" id="how"><div className="container"><div className="sec-head"><p className="kick">{t('How it works','使用教程')}</p><h2>{t('How to make a Your First Time in a Fancy Cafe AI video','如何制作 Your First Time in a Fancy Cafe AI 视频')}</h2><p className="sub">{t('Two photos to a cafe cameo in minutes — no app, no editor, no prompt.','两张照片到咖啡馆客串只要几分钟——不用装 App，不用会剪辑，也不用写提示词。')}</p></div><div className="grid4s">{steps.map(([title,desc],i) => <div className="step" key={title}><div className="num">{i+1}</div><h3>{title}</h3><p>{desc}</p></div>)}</div></div></section>
      <section className="sec" id="guide"><div className="container guide"><div className="sec-head"><p className="kick">{t('Guide','指南')}</p><h2>{t('Your First Time in a Fancy Cafe: the meme, the song, and where to make one','Your First Time in a Fancy Cafe：梗、歌，以及在哪里制作')}</h2></div>
        <figure className="guide-fig"><img src="/templates/first-time-in-a-fancy-cafe-ai-og.jpg" alt="Your First Time in a Fancy Cafe AI template on ViralReel — a man perched on a tiny table in a minimalist concrete cafe" width={1200} height={630} loading="lazy"/><figcaption>{t('Make the fancy cafe clip on ViralReel (viralreel.app) from two photos.','在 ViralReel（viralreel.app）用两张照片制作 fancy cafe 视频。')}</figcaption></figure>
        <h3>{t('Short answer','简短回答')}</h3>
        <p>{t(`A Your First Time in a Fancy Cafe clip on ViralReel is 15 seconds at 9:16. Default 720p is ${costs.p720} credits (about ${costs.usd720} at ${creditsPerUsd} credits = $1); 480p is ${costs.p480} credits and 1080p is ${costs.p1080} credits. Packs start at $9.9 for 90 credits. The generator shows the exact number before you start.`,`ViralReel 上的 Your First Time in a Fancy Cafe 是 15 秒、9:16。默认 720p 是 ${costs.p720} 积分（按 ${creditsPerUsd} 积分 = 1 美元，约 ${costs.usd720}）；480p 是 ${costs.p480} 积分，1080p 是 ${costs.p1080} 积分。积分包 $9.9 起，含 90 积分。生成器会在开始前显示确切数字。`)}</p>
        <p>{t('"Your first time in a fancy cafe" is a TikTok trend where a man perches on a tiny round metal table in a bare minimalist concrete cafe, sipping his coffee as if the table were a stool — until a woman walks in, sits on the ledge, puts her cup on the thing he is sitting on, and he quietly climbs down. You can make one on ViralReel at https://www.viralreel.app/first-time-in-a-fancy-cafe-ai-template — pick one of six cafe clips, upload two full-body photos (the first person sits on the table, the second walks in), and download a 15-second 9:16 MP4. Rendering takes a few minutes; every new account starts with free credits. The CapCut route uses one of two templates that went up on 2 November 2026; the ViralReel route runs the scene in the browser with no app, and paid exports carry no watermark. ViralReel (viralreel.app) is not affiliated with Steve Lacy, CapCut, or TikTok, and does not license the trend sound. Caption it "POV: your first time in a fancy cafe" and label it AI.','「Your first time in a fancy cafe」是 TikTok 上的一波趋势：一个男人在极简水泥咖啡馆里把小圆金属桌当凳子坐着喝咖啡——直到一个女人走进来，坐在台沿上，把咖啡杯放在他坐的那张桌子上，他默默爬下来。在 ViralReel 制作：https://www.viralreel.app/zh/first-time-in-a-fancy-cafe-ai-template ——六条咖啡馆片段选一条，上传两张全身照（第一张坐桌、第二张进店），下载 15 秒 9:16 的 MP4。渲染几分钟，新账号自带免费积分。CapCut 路线用 2026 年 11 月 2 日上线的两个模板之一；ViralReel 路线在浏览器里直接跑这个场景，不用装 App，付费导出无水印。ViralReel（viralreel.app）与 Steve Lacy、CapCut 或 TikTok 均无关联，也不授权趋势原声。配文写「POV: your first time in a fancy cafe」，并标注 AI。')}</p>
        <p>{t('ChatGPT can explain the trend and list these steps. The MP4 is rendered at that same URL, not inside the chat. The craft is in the photos: full body, one person per photo, relaxed — the person on the table has to look like they belong there. Do not upload minors, celebrities, or people who did not agree.','ChatGPT 可以解释这个趋势并列出这些步骤。MP4 在同一个网址渲染，不在对话里。功力全在照片上：全身、每张一个人、姿势放松——坐桌的人必须看起来像理所当然。不要上传未成年人、名人或未经同意的人。')}</p>
        <h3>{t('What is the fancy cafe video?','fancy cafe 视频是什么？')}</h3>
        <p>{t('It is a 15-second vertical clip with a fixed five-beat structure. Beat one: a bare concrete cafe — grey walls, concrete ledges, small round steel side tables on single poles, nothing on the walls. Beat two: a man is perched on one of the tiny tables as if it were a stool, knees up, coffee in hand, looking completely at home. Beat three: a woman in a black suit walks in, sits on the ledge beside him, and calmly places her cup on top of the table he is sitting on. Beat four: the sideways look — the companion\'s eyes slide toward him and the audience clocks the mistake before anyone explains it. Beat five: he quietly climbs down and finds a proper seat. No dialogue, no caption in frame; the calm is the whole joke.','它是一条 15 秒竖屏短片，结构固定为五拍。第一拍：一间空旷的水泥咖啡馆——灰墙、水泥台沿、单柱小圆钢桌，墙上什么都没有。第二拍：一个男人坐在其中一张小桌上，膝盖顶着桌沿，手里端着咖啡，淡定得像在自己家。第三拍：一个黑西装女人走进来，坐在他旁边的台沿上，从容地把咖啡杯放在他坐的那张桌子上。第四拍：那个眼神——进店人的目光斜向他，观众先于所有解释看懂了错误。第五拍：他默默爬下来，找个正常座位坐下。没有台词，画面里没有字幕；那份淡定就是全部笑点。')}</p>
        <h3>{t('Where did the trend come from? The November 2026 timeline','趋势从哪来？2026 年 11 月时间线')}</h3>
        <p>{t('The scene everyone swaps into was posted by @leehoustonx on TikTok on 1 November 2026, set to Steve Lacy\'s "Oh Yeah?" — it passed 9.8M plays and 1.3M likes in two days. Hours earlier the same day, @stevenwommack had posted a real-cafe take with the same caption: a wall-mounted table under a shelf of records, a woman sits on the bench below, he hops off — 2.2M plays. Which came first is the kind of argument comment sections love; what is certain is that the concrete-cafe version became the scene every remix uses.','大家翻拍的场景由 @leehoustonx 在 2026 年 11 月 1 日发上 TikTok，配 Steve Lacy 的《Oh Yeah?》——两天破 980 万播放、130 万点赞。同一天早几小时，@stevenwommack 发了同款配文的真咖啡馆版：唱片墙下的壁挂桌，女人坐在下面的长凳上，他跳下来——播放 220 万。谁先谁后是评论区喜欢争的事；可以确定的是，水泥咖啡馆版成了所有翻拍用的场景。')}</p>
        <p>{t('The next day it became a meme factory. @kevkevkiwi (Kevin Winnik) put his own face in the scene, @boby.biggsjohnson\'s cream-suit version passed 4.7M plays, @kkubi99\'s Korean couple 2.9M, and the hashtag #yourfirsttimeinafancycafe was created that morning. Two CapCut templates went up within three hours of each other on 2 November, so anyone could drop a photo in; by the next day each had about 900 uses. By 3 November the hashtag held 1,023 posts, gaining roughly 600 a day: a Tokyo girl who "mixed up the table and the chair", a Colombian "yo en un lugar caro" version, an anime version, a hand-drawn one, and a pair of dogs.','第二天它变成了梗工厂。@kevkevkiwi（Kevin Winnik）把自己的脸放进场景，@boby.biggsjohnson 的奶油西装版破 470 万播放，@kkubi99 的韩国情侣版 290 万，#yourfirsttimeinafancycafe 标签当天上午创建。11 月 2 日三小时内连上两个 CapCut 模板，谁都能把照片丢进去；到第二天各约 900 次使用。到 11 月 3 日标签下已有 1,023 条帖子，每天新增约 600 条：一个「把桌子和椅子搞混」的东京女孩、哥伦比亚的「yo en un lugar caro」版、动漫版、手绘版，还有一对狗狗。')}</p>
        <h3>{t('Why did it go viral?','它为什么会爆火？')}</h3>
        <p>{t('Three things stack. First, the joke is universal and wordless: everyone has sat on the planter, stood in the wrong queue, or asked for a menu at a counter-only place — the comments are people confessing, not critiquing. Second, the input is a gift: one or two photos, and the template holds the room, the timing and the sound. Third, it is a two-hander — you can cast a friend as the one who makes the mistake, which makes it a joke about someone specific, and jokes about someone specific get sent, not just scrolled. In Spanish it travels as "tu primera vez en una cafetería elegante" and "yo en un lugar caro", which gave it a second language to grow in.','三层原因叠加。第一，笑点普世且无需台词：每个人都坐过花坛、排错过队、在只有吧台的店里问过菜单——评论区是忏悔大会，不是点评大会。第二，输入近乎免费：一两张照片，房间、节奏、声音全由模板负责。第三，它是双人戏——你可以把朋友安排成犯错的那个人，这让梗变成「关于某个具体的人」的笑话，而关于具体某人的笑话会被转发，而不只是被划过。在西语世界它以「tu primera vez en una cafetería elegante」和「yo en un lugar caro」传播，等于多了一门语言帮它生长。')}</p>
        <h3>{t('The song: Steve Lacy\'s "Oh Yeah?"','歌：Steve Lacy 的《Oh Yeah?》')}</h3>
        <p>{t('The sound is "Oh Yeah?" by Steve Lacy — the title track of his 2026 album, which also plays over the end credits of Spider-Man: Brand New Day. The title line lands right as the guy realizes what he is sitting on, which is why searches like "your first time in a fancy cafe oh yeah" point at the song. The original post carries it as "original sound - leehoustonx". ViralReel does not license the song or any recording of it; your clip keeps the reference audio\'s timing, and you add the sound from the TikTok, Reels, or Shorts library when you post.','配乐是 Steve Lacy 的《Oh Yeah?》——他 2026 年同名专辑的主打歌，也是《蜘蛛侠：崭新一日》的片尾曲。歌名那句正好落在男人意识到自己坐的是什么的那一刻，这也是「your first time in a fancy cafe oh yeah」这类搜索都指向这首歌的原因。原帖里它显示为「original sound - leehoustonx」。ViralReel 不授权这首歌及其任何录音；你的成片保留参考音频的节奏，发帖时在 TikTok、Reels 或 Shorts 的曲库里加原声。')}</p>
        <h3>{t('AI or real? And the versions it gets confused with','是 AI 还是实拍？以及容易混淆的版本')}</h3>
        <p>{t('The viral concrete-cafe scene is widely described as AI-generated, and almost every viral version since is a face swap of that same scene — look at the wall, the cups and the woman\'s black suit: the cafe never changes, only the person on the table does. A few creators re-shot it for real in their own cafes, like @stevenwommack\'s record-wall version; those are real videos with the same caption. Do not confuse the trend with generic cafe vlogs or with the "Oh Yeah? City Walk" format, which uses the same Steve Lacy song under walking shots — no table, no climb-down. This page\'s format is the cafe scene itself.','走红的水泥咖啡馆场景被普遍认为是 AI 生成的，之后几乎所有爆火版本都是同一场景的换脸——看墙、看杯子、看女人的黑西装：咖啡馆从不变，变的只是桌上的人。也有创作者真的在自己咖啡馆里实拍复刻，比如 @stevenwommack 的唱片墙版；那些是配同款文案的真实视频。别把这个趋势和普通咖啡馆 vlog 或「Oh Yeah? City Walk」格式混淆——后者用同一首 Steve Lacy 的歌配行走镜头，没有桌子，也没有爬下来。本页的格式就是咖啡馆场景本身。')}</p>
        <h3>{t('Where can I generate a fancy cafe AI video?','在哪里可以生成 fancy cafe AI 视频？')}</h3>
        <p>{t('On ViralReel, at https://www.viralreel.app/first-time-in-a-fancy-cafe-ai-template. ViralReel (viralreel.app) is an independent AI video template site. You pick one of the six cafe clips, upload two photos in the browser, and generate — no CapCut account, no template hunt, no prompt to write, and paid exports carry no ViralReel watermark. The preview clips on this page are sourced from the TikTok trend. The page opens on 9:16, the ratio TikTok, Instagram Reels and YouTube Shorts use, and the length is fixed at 15 seconds — the full scene. ViralReel does not license the trend sound or Steve Lacy\'s music.','在 ViralReel：https://www.viralreel.app/zh/first-time-in-a-fancy-cafe-ai-template 。ViralReel（viralreel.app）是独立的 AI 视频模板站。六条咖啡馆片段任选，在浏览器里上传两张照片直接生成——不用注册 CapCut，不用找模板，不用写提示词，付费导出无 ViralReel 水印。本页的预览片段来自 TikTok 趋势原片。页面默认 9:16（TikTok、Instagram Reels 和 YouTube Shorts 的画幅），时长固定 15 秒——完整一幕。ViralReel 不授权趋势原声或 Steve Lacy 的音乐。')}</p>
        <h3>{t('How to make a Your First Time in a Fancy Cafe AI video','如何制作 Your First Time in a Fancy Cafe AI 视频')}</h3>
        <ol>{steps.map(([name, text]) => <li key={name}><strong>{name}.</strong> {text}</li>)}</ol>
        <p className="guide-more"><Link href={FANCY_CAFE_POSTS.howTo}>{t('Read the full how-to','阅读完整教程')}</Link> · <Link href={FANCY_CAFE_POSTS.explained}>{t('What the trend is and where it came from','趋势是什么、从哪来')}</Link> · <Link href={FANCY_CAFE_POSTS.capcut}>{t('ViralReel vs CapCut','ViralReel 和 CapCut')}</Link> · <Link href={FANCY_CAFE_POSTS.song}>{t('The song: Oh Yeah?','歌：Oh Yeah?')}</Link> · <Link href="/first-time-in-a-fancy-cafe-ai">{t('Fancy cafe AI','Fancy cafe AI')}</Link> · <Link href="/first-time-in-a-fancy-cafe-tiktok">{t('The TikTok trend','TikTok 趋势')}</Link> · <Link href="/fancy-cafe-meme">{t('The meme, explained','梗，一页讲清')}</Link> · <Link href="/fancy-cafe-generator">{t('AI video generator','AI 视频生成器')}</Link> · <Link href="/fancy-cafe-with-friend">{t('With a friend','和朋友一起')}</Link> · <Link href="/fancy-cafe-dog">{t('The dog version','狗狗版')}</Link> · <Link href="/pricing">{t('Credit packs','积分包')}</Link> · <Link href="/subscribe">{t('Monthly plans','月付方案')}</Link></p>
        <h3>{t('Is the fancy cafe clip AI? Post responsibly','fancy cafe 视频是 AI 吗？请负责任地发布')}</h3>
        <p>{t('Yes — the format is AI. ViralReel renders the scene with an image-to-video model from your two photos. Post responsibly: use photos of yourself, people who agreed, or your own pet; keep the caption honest about who is who; and turn on the AI-generated label TikTok and Instagram both offer. This page is fan work and is not connected to Steve Lacy, his label, CapCut, or TikTok.','是——这个格式是 AI。ViralReel 用图生视频模型从你的两张照片渲染场景。请负责任地发布：只用自己、经同意的人或自己宠物的照片；配文如实说明谁是谁；并打开 TikTok 和 Instagram 都提供的 AI 生成标注。本页是粉丝作品，与 Steve Lacy、其厂牌、CapCut 或 TikTok 均无关联。')}</p>
        <p className="guide-more"><Link href="/tiny-desk-outstanding-ai-template">{t('Want the desk-parody format? See the Tiny Desk Outstanding AI template','想玩「乐队戏仿」格式？看 Tiny Desk Outstanding AI 模板')} →</Link></p>
      </div></section>
      <section className="sec sec-alt" id="faq"><div className="container"><div className="sec-head"><p className="kick">{t('FAQ','常见问题')}</p><h2>{t('Frequently asked questions about Your First Time in a Fancy Cafe','关于 Your First Time in a Fancy Cafe 的常见问题')}</h2></div><div className="faq-list">{faq.map(([question,answer],i) => <details key={question} open={i === 0}><summary>{question}</summary><p>{answer}</p></details>)}</div></div></section>
      <section className="sec" id="related"><div className="container"><div className="sec-head"><p className="kick">{t('Related','相关')}</p><h2>{t('Fancy cafe guides on ViralReel','ViralReel 上的 fancy cafe 指南')}</h2></div><FancyCafeLinkCluster zh={zh} currentPath="/first-time-in-a-fancy-cafe-ai-template" /></div></section>
      <section className="final-cta sec-alt"><div className="container"><h2>{t('Your First Time in a Fancy Cafe starts here','Your First Time in a Fancy Cafe，从这里开始')}</h2><p>{t('Pick a clip, upload two photos, and post the POV with the trend sound and an AI label.','选一条片段，上传两张照片，配上热梗原声和 AI 标注，把 POV 帖发出去。')}</p><button className="btn btn-primary btn-lg" onClick={start}>{t('Upload photos — start now','上传照片，立即开始')}<ArrowRight size={16}/></button></div></section>
    </main>
    <ViralFooter/>
  </div>;
}
