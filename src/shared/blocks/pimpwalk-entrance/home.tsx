'use client';

/* eslint-disable @next/next/no-img-element */

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';
import { ArrowRight, DoorOpen, Flame, ImagePlus, Maximize, Play, Smartphone, Sparkles, Users, Volume2, VolumeX } from 'lucide-react';
import { useLocale } from 'next-intl';
import { track } from '@/shared/lib/analytics';
import { Link } from '@/core/i18n/navigation';
import { TemplateGenerator } from '@/shared/blocks/viral-home/generator';
import { ViralHeader } from '@/shared/blocks/viral-home/header';
import { ViralFooter } from '@/shared/blocks/viral-home/footer';
import { buildHowToJsonLdFromSteps } from '@/shared/lib/howto-schema';
import { getVideoCostTable } from '@/shared/lib/video-cost';
import { pimpwalkEntranceTemplates, type PimpwalkEntranceTemplate } from './templates';
import { PIMPWALK_FAQ } from './faq';
import { PimpwalkLinkCluster } from './link-cluster';
import { PIMPWALK_POSTS } from './long-tails';
import { PIMPWALK_HOW_TO_STEPS } from './steps';
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
      if (entry.isIntersecting && !window.matchMedia('(hover: none), (pointer: coarse)').matches) el.play().catch(() => {});
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

export function PimpwalkHome({ creditsPerUsd = 12, videoCosts = getVideoCostTable(), pageUrl }: { creditsPerUsd?: number; videoCosts?: ReturnType<typeof getVideoCostTable>; pageUrl?: string }) {
  const locale = useLocale();
  const zh = locale === 'zh';
  const t = (en: string, cn: string) => zh ? cn : en;
  useEffect(() => { track('view_template', { template: 'pimpwalk_entrance' }); }, []);
  // hero 示意默认汉堡店花花公子（趋势最火的 592K 播放版本）
  const [template, setTemplate] = useState<PimpwalkEntranceTemplate>(pimpwalkEntranceTemplates.find((item) => item.id === 'pimpwalk-burger') ?? pimpwalkEntranceTemplates[0]);
  const focusGenerator = () => { document.getElementById('generator')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); };
  const choose = (item: PimpwalkEntranceTemplate = pimpwalkEntranceTemplates[0]) => { track('click_generate', { template: 'pimpwalk_entrance', variant: item.id }); setTemplate(item); focusGenerator(); };
  const start = () => focusGenerator();
  const minCredits = Math.min(...videoCosts.flatMap(row => row.costs.map(item => item.credits)));
  const features = [
    [DoorOpen, t('One door, held open, every time','一扇永远被拉开的门'), t('A small shop at night, red-trimmed cream walls, a friend grooving beside the open door. The doorway never changes — only the person coming through it does. That consistency is why every render reads as the same meme.','夜晚的小店、红边奶油色墙面、一个在门边摇摆的朋友。门永远不变——变的只有走进来的人。这种一致性让每次渲染都读成同一个梗。')],
    [Sparkles, t('The walk does the talking','步伐替你说话'), t('A slow, low, leaned-back pimp walk: knees bent, shoulders rolled, a drop almost to the crouch, then the rise into a close-up like they own the place. No dance to learn — the AI makes the entrance from your photo.','慢、低、后仰的 pimp walk：屈膝、塌肩、几乎蹲到底，再起身给一个特写，像全场都是他的。不用学舞——AI 用你的照片完成这次进场。')],
    [ImagePlus, t('Two photos: walker first, door second','两张照片：进门第一张，拉门第二张'), t('Photo 1 makes the entrance; photo 2 holds the door. Full body beats waist-up — the whole walk happens below the chest — and the last second is a face filling the frame, so keep it sharp, no filters.','第 1 张照片进场；第 2 张拉门。全身照优于半身——整个动作都在胸部以下——最后一秒是一张脸填满画面，照片要清晰、别加滤镜。')],
    [Users, t('Cast anyone: dad, boss, your dog','谁都能进场：你爸、老板、你的狗'), t('The 2026 pimp walk is an entrance someone else is made to do, which is why it works best on the people least likely to walk like that. Put your friend on the door, your dad through it, or your dog strut-totally in.','2026 版 pimp walk 是「让别人替你走出这一步」，所以最适合那些最不可能这么走的人。朋友拉门、你爸进场、或者你的狗大摇大摆走进来。')],
  ] as const;
  const steps = PIMPWALK_HOW_TO_STEPS.map((step) => [zh ? step.name.zh : step.name.en, zh ? step.text.zh : step.text.en] as const);
  const faq = PIMPWALK_FAQ[zh ? 'zh' : 'en'];
  const quickAnswers = [
    [t('What is it?', '这是什么？'), t('A 15-second TikTok scene from 17 October 2026: a friend holds the shop door, someone pimp-walks in low and slow, then rises into the close-up. The breakout clip passed 592K plays.','2026 年 10 月 17 日起的 15 秒 TikTok 场景：朋友拉住店门，有人低慢 pimp walk 进场，起身给特写。最火一条播放破 59 万。')],
    [t('How do I make one?', '怎么做？'), t('Two photos, one of three doorway clips, four steps — the video generates in the browser, no app.','两张照片、三条门口片段选一、四步搞定——浏览器直接生成，不用装 App。')],
    [t('Can I try it free?', '能免费试吗？'), t('Yes — every new account starts with free credits, enough to render your first video before paying.','能——新账号自带免费积分，够先做完第一条再决定付费。')],
    [t('How much is it?', '多少钱？'), t(`From ${minCredits} credits per video (${creditsPerUsd} credits = $1); credit packs on the pricing page.`,`每条 ${minCredits} 积分起（${creditsPerUsd} 积分 = 1 美元），积分包见定价页。`)],
    [t('How long does it take?', '多久出片？'), t('The clip is 15 seconds at 9:16; rendering typically takes a few minutes and lands in History.','成片 15 秒 9:16；渲染一般几分钟，完成后在「历史记录」取。')],
  ] as const;
  const howToJsonLd = buildHowToJsonLdFromSteps({
    name: t('How to make a Pimpwalk Entrance AI video', '如何制作 Pimpwalk Entrance AI 视频'),
    description: t('Pick a doorway clip, upload two photos, download the 15-second MP4, then caption the destination, add the trend sound and an AI label.', '选一条门口片段，上传两张照片，下载 15 秒 MP4，再配「走进哪里」的文案、加热梗原声和 AI 标注。'),
    url: pageUrl,
    steps: steps.map(([name, text]) => ({ name, text })),
  });
  return <div className="viral-home">{howToJsonLd ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} /> : null}
    <ViralHeader onStart={start}/>
    <main>
      <section className="hero"><div className="container"><div className="hero-badge"><Flame size={16}/><span>#pimpwalkentrance is trending</span></div><h1>{t('Two photos - ', '两张照片 - ')}<span className="hl">Pimpwalk Entrance</span></h1><TemplateGenerator key={template.id} template={template} open embedded onOpenChange={() => {}}/></div></section>
      <section className="sec" id="quick-answers"><div className="container"><div className="sec-head"><p className="kick">{t('Quick answers','快速回答')}</p><h2>{t('The five things everyone asks','所有人都在问的五个问题')}</h2></div><div className="grid4">{quickAnswers.map(([title,desc]) => <div className="feat" key={title}><h3>{title}</h3><p>{desc}</p></div>)}</div></div></section>
      <section className="sec templates-section" id="templates"><div className="container"><div className="sec-head"><p className="kick">{t('Templates','模板')}</p><h2>{t('Three doorway casts to remix','三条可翻拍的门口阵容')}</h2><p className="sub">{t('Every card runs the same doorway with a different cast. Click one to open the generator.','每张卡片跑的都是同一扇门，出镜的人不同。点击卡片打开生成器。')}</p></div><div className="grid3">{pimpwalkEntranceTemplates.map((item, index) => <article className="tcard" key={item.id}><button className="tv tv-full" aria-label={`${t('Use','使用')} ${item.name[zh ? 1 : 0]}`} onClick={() => choose(item)} style={{ '--g1': item.colors[0], '--g2': item.colors[1] } as CSSProperties}><TemplateVideo id={item.id} colors={item.colors}/>{index === 0 && <span className="hot">HOT</span>}<span className="tv-expand"><Maximize size={18}/></span><span className="tv-play"><Play size={16}/></span><span className="tv-bar"><i/></span></button><div className="tmeta"><b>{item.name[zh ? 1 : 0]}</b></div><button className="use" onClick={() => choose(item)}>{t('Generate','立即生成')}</button></article>)}</div></div></section>
      <div className="logos"><p className="lbl">{t('Creators are posting ViralReel videos on','创作者们正在这些平台发布 ViralReel 视频')}</p><div className="row"><span className="soc tiktok"><PlatformIcon type="tiktok"/>TikTok</span><span className="soc youtube"><PlatformIcon type="youtube"/>YouTube Shorts</span><span className="soc instagram"><PlatformIcon type="instagram"/>Instagram Reels</span><span className="soc x"><PlatformIcon type="x"/>X / Twitter</span><span className="soc reddit"><PlatformIcon type="reddit"/>Reddit</span></div></div>
      <section className="stats"><div className="container stats-grid"><div><div className="statnum">15<em>s</em></div><p>{t('Fixed clip length, full scene','固定时长，完整一幕')}</p></div><div><div className="statnum">9:16</div><p>{t('Vertical export for TikTok, Reels and Shorts','竖屏导出，适配 TikTok、Reels、Shorts')}</p></div><div><div className="statnum">2</div><p>{t('Photos: one walks in, one holds the door','两张照片：一张进场，一张拉门')}</p></div><div><div className="statnum">{minCredits}<em className="wide-em">{t(' credits / video from', ' 积分 / 条起')}</em></div><p>{t(`Top-ups available · ${creditsPerUsd} credits = $1`,`随时可加购 · ${creditsPerUsd} 积分 = 1 美元`)}</p></div></div></section>
      <section className="sec sec-alt" id="what"><div className="container"><div className="sec-head"><p className="kick">{t('What is Pimpwalk Entrance','Pimpwalk Entrance 是什么')}</p><h2>{t('The hold-the-door trend: one doorway, a new legend every render','扶门趋势：同一扇门，每次渲染一个新传奇')}</h2><p className="sub">{t('Night, a shop door held wide, and the slowest, lowest entrance of 2026.','夜晚、拉开的店门，和 2026 年最慢最低的一次进场。')}</p></div><div className="grid4">{features.map(([Icon,title,desc]) => <div className="feat" key={title}><div className="ic"><Icon size={20}/></div><h3>{title}</h3><p>{desc}</p></div>)}</div></div></section>
      <section className="sec" id="how"><div className="container"><div className="sec-head"><p className="kick">{t('How it works','使用教程')}</p><h2>{t('How to make a Pimpwalk Entrance AI video','如何制作 Pimpwalk Entrance AI 视频')}</h2><p className="sub">{t('Two photos to a doorway entrance in minutes — no app, no editor, no prompt.','两张照片到门口进场只要几分钟——不用装 App，不用会剪辑，也不用写提示词。')}</p></div><div className="grid4s">{steps.map(([title,desc],i) => <div className="step" key={title}><div className="num">{i+1}</div><h3>{title}</h3><p>{desc}</p></div>)}</div></div></section>
      <section className="sec" id="guide"><div className="container guide"><div className="sec-head"><p className="kick">{t('Guide','指南')}</p><h2>{t('Pimpwalk Entrance: the meme, the sound, and where to make one','Pimpwalk Entrance：梗、原声，以及在哪里制作')}</h2></div>
        <figure className="guide-fig"><img src="/templates/pimpwalk-entrance-ai-og.jpg" alt="Pimpwalk Entrance AI template on ViralReel — a guest strutting through a shop doorway held open at night" width={1200} height={630} loading="lazy"/><figcaption>{t('Make the Pimpwalk Entrance clip on ViralReel (viralreel.app) from two photos.','在 ViralReel（viralreel.app）用两张照片制作 Pimpwalk Entrance 视频。')}</figcaption></figure>
        <h3>{t('Short answer','简短回答')}</h3>
        <p>{t('The Pimpwalk Entrance (also called the hold-the-door trend) is a TikTok meme from 17 October 2026: a friend pulls a shop door open at night and grooves beside it, while someone walks through in a slow, low, leaned-back pimp walk, drops almost to a crouch, and rises into a close-up like they own the place. You can make one on ViralReel at https://www.viralreel.app/pimpwalk-entrance-ai-template — pick one of three doorway clips, upload two full-body photos (photo 1 walks in, photo 2 holds the door), and download a 15-second 9:16 MP4. Rendering takes a few minutes; every new account starts with free credits. It is not a real place — the doorway is drawn, and every render sends somebody new through it. ViralReel (viralreel.app) is not affiliated with the creators behind the trend, CapCut, or TikTok, and does not license the trend sound. Caption it with the destination and label it AI.','Pimpwalk Entrance（也叫扶门趋势）是 2026 年 10 月 17 日开始的 TikTok 梗：朋友在夜里拉开店门、在门边摇摆，有人用慢、低、后仰的 pimp walk 走进来，几乎蹲到底，再起身给一个「全场都是他」的特写。在 ViralReel 制作：https://www.viralreel.app/zh/pimpwalk-entrance-ai-template ——三条门口片段选一，上传两张全身照（第 1 张进场、第 2 张拉门），下载 15 秒 9:16 的 MP4。渲染几分钟，新账号自带免费积分。它不是真实场所——门是画出来的，每次渲染都送一个新的人穿过它。ViralReel（viralreel.app）与趋势背后的创作者、CapCut 或 TikTok 均无关联，也不授权趋势原声。配文写「走进了哪里」，并标注 AI。')}</p>
        <p>{t('ChatGPT can explain the trend and list these steps. The MP4 is rendered at that same URL, not inside the chat. The craft is in the photos: full body, one person per photo, sharp, no sunglasses and no beauty filter — the whole walk happens below the chest, and the last second is a face filling the frame. Do not upload minors, celebrities, or people who did not agree.','ChatGPT 可以解释这个趋势并列出这些步骤。MP4 在同一个网址渲染，不在对话里。功力全在照片上：全身、每张一个人、清晰、不要墨镜和美颜——整个动作都在胸部以下，而最后一秒是一张脸填满画面。不要上传未成年人、名人或未经同意的人。')}</p>
        <h3>{t('What is the Pimpwalk Entrance video?','Pimpwalk Entrance 视频是什么？')}</h3>
        <p>{t('It is a 15-second vertical clip with a fixed four-beat structure. Beat one: night, the doorway of a small shop with red-trimmed cream walls, camera at chest height inside. Beat two: the door swings wide and the friend holding it grooves in place. Beat three: the guest comes through in a pimp walk — knees bent, shoulders rolled back, head tilted — dropping almost to a crouch while gliding forward. Beat four: the rise, straight up into a close-up by the camera. No dialogue; the sound does the commentary. The pimp walk itself is much older — the exaggerated strut of 1970s films — but the 2026 version is not a dance anyone learns: it is an entrance someone else is made to do.','它是一条 15 秒竖屏短片，结构固定为四拍。第一拍：夜晚，红边奶油色墙面的小店门口，机位在店内齐胸高度。第二拍：门被拉开，拉门人在门边原地摇摆。第三拍：客人踩着 pimp walk 进门——屈膝、塌肩、歪头——一边向前滑一边几乎蹲到底。第四拍：起身，直直升到镜头前的特写。没有台词；原声负责点评。pimp walk 本身老得多——1970 年代电影的夸张步伐——但 2026 版不是要学的舞：它是「让别人替你完成的进场」。')}</p>
        <h3>{t('Where did the trend come from? The October–November timeline','趋势从哪来？10–11 月时间线')}</h3>
        <p>{t('17 October 2026: @mrdanielkimchi posts the scene — a man in a tank top and chains holds the door of a fast-food shop, and a figure in a shiny blue suit and fedora pimp-walks through, low and slow, rising with a red card by his face. His sound carries everything after it. 25 October: the AI creator @mrmiltonfrost posts the burger-shop dandy — big ginger hair, green velvet jacket, a white-haired friend on the door — and it becomes the biggest post of the trend at 592K plays and 28K likes. 30 October: @thegurst puts two sisters in green-and-gold costumes through the same doorway, 192K plays — the scene is now a format.','2026 年 10 月 17 日：@mrdanielkimchi 发出这个场景——背心金链男拉住快餐店的门，亮蓝西装礼帽男低慢 pimp walk 走进来，起身时手里举着一张红卡。他的原声带火了之后的一切。10 月 25 日：AI 创作者 @mrmiltonfrost 发出汉堡店花花公子——姜黄色大头发、绿色天鹅绒西装、白发朋友拉门——成为趋势最火的帖子：59 万播放、2.8 万点赞。10 月 30 日：@thegurst 把两个穿绿金戏装的姐妹送进同一扇门，19.2 万播放——场景正式变成格式。')}</p>
        <p>{t('31 October: the CapCut wave starts — "how to make the viral doorway entrance pimpwalk hold the door trend" posts appear, a render followed by a screen-recorded tutorial. 1 November: a template account runs Gus Fring, Mr Bean, Walter White and Messi through the doorway under the name "pimpwalk into barbershop"; the top clip reaches 361K plays. 3 November: the two CapCut templates stand at 8,387 and 4,694 uses, the sound at 511 videos, and the biggest tutorial at 442K plays — all inside three days.','10 月 31 日：CapCut 浪潮启动——「how to make the viral doorway entrance pimpwalk hold the door trend」帖子出现，先一条成片、后一段录屏教程。11 月 1 日：一个模板账号以「pimpwalk into barbershop」之名把 Gus Fring、Mr Bean、Walter White 和 Messi 依次送进门口，最高一条 36.1 万播放。11 月 3 日：两个 CapCut 模板分别 8,387 和 4,694 次使用、原声 511 条视频、最大教程帖 44.2 万播放——全部发生在三天内。')}</p>
        <h3>{t('Is Pimpwalk Entrance a real place?','Pimpwalk Entrance 是真实场所吗？')}</h3>
        <p>{t('No — and this is the most common confusion around the trend. There is no club, barbershop, or venue called Pimpwalk Entrance, nothing to get into, and no address to find. The doorway is drawn: the original is a fast-food shop in the AI-generated clip @mrdanielkimchi posted, and every version since keeps the same drawn shop with a new cast. So "how do I get into Pimpwalk" has a meme answer: you get in by making your own version — pick a doorway clip, upload your photo, and the AI walks you through. "What happened at Pimpwalk entrance recently" means the latest renders, not news from a location. If you searched this expecting a place, the place is the meme.','不是——这是趋势周围最常见的误解。没有什么叫 Pimpwalk Entrance 的俱乐部、理发店或场所，进不去，也查不到地址。门是画出来的：原版是 @mrdanielkimchi 那条 AI 生成片段里的快餐店，之后的每个版本都保留同一扇画出来的门、只换人。所以「how do I get into Pimpwalk」的梗答案是：做一条你自己的版本就「进去」了——选门口片段、传照片，AI 送你过门。「Pimpwalk entrance 最近发生了什么」指的是最新的渲染，不是某地的新闻。如果你在找一个地方——这个地方就是梗本身。')}</p>
        <h3>{t('Why did it go viral?','它为什么会爆火？')}</h3>
        <p>{t('Three things stack. First, the scene is a two-hander with one star: the door holder grooves so the guest can arrive, and every render casts a new guest — a 1970s dandy, costumed sisters, Mr Bean, Walter White, Messi, your dad. Second, the entrance is status played for laughs: the strut, the drop, the rise into the close-up is pure main-character energy, and putting it on the person least likely to walk like that is the joke. Third, the input is nearly free — one or two photos, and the doorway, the timing and the sound are held by the template. In a season of one-person trends, this one gives you someone to tag.','三层原因叠加。第一，这是一个「单人主角」的双人戏：拉门人负责摇摆，客人才好登场，而每次渲染都安排一位新客人——1970 年代花花公子、戏装姐妹、Mr Bean、Walter White、Messi、你爸。第二，进场是拿来搞笑的排面：步伐、下蹲、起身特写是纯粹的主角光环，把它安在最不可能这么走的人身上就是笑点。第三，输入近乎免费——一两张照片，门、节奏、声音全由模板负责。在一堆单人趋势里，这一条还送你一个可以 @ 的人。')}</p>
        <h3>{t('The sound: original sound - mrdanielkimchi','原声：original sound - mrdanielkimchi')}</h3>
        <p>{t('There is no commercial song under the trend — the audio is "original sound - mrdanielkimchi", the sound from the 17 October clip, used by 511 videos as of 3 November. ViralReel does not license the sound or any recording of it; your clip keeps the reference timing, and you add the audio from the TikTok, Reels, or Shorts library when you post. Search the sound name, or open it from any clip using the trend.','趋势下面没有商业歌曲——音频是「original sound - mrdanielkimchi」，即 10 月 17 日那条的原声，截至 11 月 3 日已有 511 条视频使用。ViralReel 不授权该声音及其任何录音；你的成片保留参考节奏，发帖时在 TikTok、Reels 或 Shorts 的曲库里加音频。直接搜声音名，或从任何用趋势的片子里点开。')}</p>
        <h3>{t('What it is not: older hold-the-door memes and "then I walk in"','它不是什么：更早的扶门梗和「then I walk in」')}</h3>
        <p>{t('TikTok has seen hold-the-door memes before — the Game of Thrones "Hodor" edits, door-closing pranks — and those are different. So is "then I walk in": a deadpan selfie walk toward the camera with words on screen. The Pimpwalk Entrance is specifically a two-person scene at a drawn shop door: one holds it grooving, one struts through low. Same family of name, different meme.','TikTok 上早有过扶门梗——《权力的游戏》Hodor 剪辑、关门整蛊——那些是别的东西。「then I walk in」也不是：那是面无表情冲镜头的自拍走、画面配字。Pimpwalk Entrance 特指画出来的店门口的双人戏：一个边拉门边摇摆，一个低姿进场。名字像一家人，梗不是同一个。')}</p>
        <h3>{t('Where can I generate a Pimpwalk Entrance AI video?','在哪里可以生成 Pimpwalk Entrance AI 视频？')}</h3>
        <p>{t('On ViralReel, at https://www.viralreel.app/pimpwalk-entrance-ai-template. ViralReel (viralreel.app) is an independent AI video template site. You pick one of the three doorway clips, upload two photos in the browser, and generate — no CapCut account, no template hunt, no prompt to write, and paid exports carry no ViralReel watermark. The preview clips on this page are sourced from the TikTok trend. The page opens on 9:16, the ratio TikTok, Instagram Reels and YouTube Shorts use, and the length is fixed at 15 seconds — the full scene from the door opening to the close-up. ViralReel does not license the trend sound.','在 ViralReel：https://www.viralreel.app/zh/pimpwalk-entrance-ai-template 。ViralReel（viralreel.app）是独立的 AI 视频模板站。三条门口片段任选，在浏览器里上传两张照片直接生成——不用注册 CapCut，不用找模板，不用写提示词，付费导出无 ViralReel 水印。本页的预览片段来自 TikTok 趋势原片。页面默认 9:16（TikTok、Instagram Reels 和 YouTube Shorts 的画幅），时长固定 15 秒——从开门到特写的完整一幕。ViralReel 不授权趋势原声。')}</p>
        <h3>{t('How to make a Pimpwalk Entrance AI video','如何制作 Pimpwalk Entrance AI 视频')}</h3>
        <ol>{steps.map(([name, text]) => <li key={name}><strong>{name}.</strong> {text}</li>)}</ol>
        <p className="guide-more"><Link href={PIMPWALK_POSTS.howTo}>{t('Read the full how-to','阅读完整教程')}</Link> · <Link href={PIMPWALK_POSTS.explained}>{t('What the trend is and where it came from','趋势是什么、从哪来')}</Link> · <Link href={PIMPWALK_POSTS.place}>{t('Is it a real place?','它是真实场所吗？')}</Link> · <Link href={PIMPWALK_POSTS.capcut}>{t('ViralReel vs CapCut','ViralReel 和 CapCut')}</Link> · <Link href={PIMPWALK_POSTS.song}>{t('The sound, explained','原声解析')}</Link> · <Link href="/pimpwalk-entrance-tiktok">{t('The TikTok trend','TikTok 趋势')}</Link> · <Link href="/pimpwalk-entrance-template">{t('Pimpwalk Entrance template','Pimpwalk Entrance 模板')}</Link> · <Link href="/pimpwalk-entrance-generator">{t('AI video generator','AI 视频生成器')}</Link> · <Link href="/pimpwalk-barbershop">{t('The barbershop cast','理发店名人版')}</Link> · <Link href="/hold-the-door-trend">{t('Hold the door trend','扶门趋势')}</Link> · <Link href="/pricing">{t('Credit packs','积分包')}</Link> · <Link href="/subscribe">{t('Monthly plans','月付方案')}</Link></p>
        <h3>{t('Is the Pimpwalk Entrance clip AI? Post responsibly','Pimpwalk Entrance 是 AI 吗？请负责任地发布')}</h3>
        <p>{t('Yes — nearly every version of the trend is AI, and ViralReel renders the scene with an image-to-video model from your two photos. Post responsibly: use photos of yourself, people who agreed, or your own pet; keep the caption honest about who is who; and turn on the AI-generated label TikTok and Instagram both offer. This page is fan work and is not connected to the creators behind the trend, CapCut, or TikTok.','是——趋势里几乎每个版本都是 AI，ViralReel 用图生视频模型从你的两张照片渲染场景。请负责任地发布：只用自己、经同意的人或自己宠物的照片；配文如实说明谁是谁；并打开 TikTok 和 Instagram 都提供的 AI 生成标注。本页是粉丝作品，与趋势背后的创作者、CapCut 或 TikTok 均无关联。')}</p>
        <p className="guide-more"><Link href="/first-time-in-a-fancy-cafe-ai-template">{t('Want the cafe version? See First Time in a Fancy Cafe','想玩咖啡馆版？看 First Time in a Fancy Cafe')} →</Link></p>
      </div></section>
      <section className="sec sec-alt" id="faq"><div className="container"><div className="sec-head"><p className="kick">{t('FAQ','常见问题')}</p><h2>{t('Frequently asked questions about Pimpwalk Entrance','关于 Pimpwalk Entrance 的常见问题')}</h2></div><div className="faq-list">{faq.map(([question,answer],i) => <details key={question} open={i === 0}><summary>{question}</summary><p>{answer}</p></details>)}</div></div></section>
      <section className="sec" id="related"><div className="container"><div className="sec-head"><p className="kick">{t('Related','相关')}</p><h2>{t('Pimpwalk Entrance guides on ViralReel','ViralReel 上的 Pimpwalk Entrance 指南')}</h2></div><PimpwalkLinkCluster zh={zh} currentPath="/pimpwalk-entrance-ai-template" /></div></section>
      <section className="final-cta sec-alt"><div className="container"><h2>{t('Your Pimpwalk Entrance starts here','你的 Pimpwalk Entrance，从这里开始')}</h2><p>{t('Pick a doorway, upload two photos, and post the entrance with the trend sound and an AI label.','选一扇门，上传两张照片，配上热梗原声和 AI 标注，把进场视频发出去。')}</p><button className="btn btn-primary btn-lg" onClick={start}>{t('Upload photos — start now','上传照片，立即开始')}<ArrowRight size={16}/></button></div></section>
    </main>
    <ViralFooter/>
  </div>;
}
