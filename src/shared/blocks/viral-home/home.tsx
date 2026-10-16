'use client';

/* eslint-disable @next/next/no-img-element */

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';
import { ArrowRight, Flame, Maximize, Mic, Play, Sparkles, Users, Video, Volume2, VolumeX } from 'lucide-react';
import { useLocale } from 'next-intl';
import { Link } from '@/core/i18n/navigation';
import { useAppContext } from '@/shared/contexts/app';
import { PricingItem } from '@/shared/types/blocks/pricing';
import { TemplateGenerator } from './generator';
import { ViralFooter } from './footer';
import { ViralHeader } from './header';
import { HomeTemplate, templates } from './templates';
import { getVideoCostTable } from '@/shared/lib/video-cost';
import { getViralFaqPairs } from '@/shared/lib/viral-faq';
import './home.css';

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
    <video ref={ref} className="tv-video" src={`/templates/${id}.mp4`} poster={`/templates/${id}-poster.jpg`} muted loop playsInline preload="none" style={{ background: `linear-gradient(165deg, ${colors[0]}, ${colors[1]})` }}/>
    <span className="tv-sound" role="button" tabIndex={0} aria-label={muted ? 'Unmute video' : 'Mute video'} onClick={toggleSound} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') toggleSound(e); }}>{muted ? <VolumeX size={15}/> : <Volume2 size={15}/>}</span>
  </>;
}

export function ViralHome({ plans, creditsPerUsd = 10, videoCosts = getVideoCostTable() }: { plans: PricingItem[]; creditsPerUsd?: number; videoCosts?: ReturnType<typeof getVideoCostTable> }) {
  const starterM = plans.find(p => p.product_id === 'starter-monthly');
  const starterPrice = starterM?.price || '$9.9';
  const starterCredits = starterM?.credits || 90;
  const plusM = plans.find(p => p.product_id === 'plus-monthly');
  const proM = plans.find(p => p.product_id === 'pro-monthly');
  const plusPrice = plusM?.price || '$19.9';
  const plusCredits = plusM?.credits || 200;
  const proPrice = proM?.price || '$39.9';
  const proCredits = proM?.credits || 500;
  const locale = useLocale();
  const zh = locale === 'zh';
  const t = (en: string, cn: string) => zh ? cn : en;
  const { user, setIsShowSignModal } = useAppContext();
  const [template, setTemplate] = useState<HomeTemplate>(templates[0]);
  const [open, setOpen] = useState(false);
  const choose = (item: HomeTemplate = templates[0]) => { setTemplate(item); setOpen(true); };
  const start = () => user ? choose() : setIsShowSignModal(true);
  const faq = getViralFaqPairs(zh, { starterPrice, starterCredits, plusPrice, plusCredits, proPrice, proCredits });
  const features = [
    [Mic, t('Iconic orange booth','标志性橙色直播间'), t('1:1 recreation of the viral COLORS-style stage, tuned lighting and framing baked in.','1:1 复刻爆火的 COLORS 风舞台，灯光与构图已预先调好。')],
    [Video, t('Auto lip-sync','自动口型同步'), t("Both performers' lips, heads and gestures sync to the beat automatically. Zero editing.",'两位表演者的口型、头部与手势自动对齐节拍，零剪辑。')],
    [Users, t('Any performer works','任何主角都行'), t('Couples, friends, two pets, or a person and a pet — pick the template that matches the two photos.','情侣、朋友、两只宠物，或者一个人和一只宠物——选一个和这两张照片匹配的模板。')],
    [Sparkles, t('9:16 ready to post','9:16 直接可发'), t('Vertical export sized for TikTok, Reels and Shorts. Add the original sound in-app.','竖屏导出，适配 TikTok、Reels 和 Shorts，原声在 App 内添加即可。')],
  ] as const;
  const steps = [[t('Pick a template','选择模板'),t('Classic orange booth, neon night or golden hour — every variant ships with lip-sync.','经典橙色直播间、霓虹夜色或黄金时刻——每个变体都自带口型同步。')],[t('Upload two photos','上传两张照片'),t('One clear, front-facing photo per performer. Keep each subject on the same side throughout.','每位主角一张清晰正面照，全程保持在画面同一侧。')],[t('Generate','生成'),t('The AI stages both performers, syncs lips and gestures to the beat, and renders in ~60s.','AI 将两位主角搬上舞台，口型与手势对齐节拍，约 60 秒渲染完成。')],[t('Download & post','下载并发布'),t('Export 9:16 vertical, share to TikTok with the original sound while the trend is peaking.','导出 9:16 竖屏，趁趋势正热配上原声发到 TikTok。')]];
  return <div className="viral-home">
    <ViralHeader onStart={start}/>
    <main><section className="hero"><div className="container"><div className="hero-badge"><Flame size={16}/><span>#hotellobbyai is trending</span><span className="bar"/><b>1.2M videos made</b></div><h1>{t('Make the viral ', '60 秒生成爆火的 ')}<span className="hl">Hotel Lobby</span>{t(' AI template video in 60 seconds', ' AI 模板视频')}</h1><p className="lead">{t('Upload two front-facing photos and step into the iconic orange booth — auto lip-sync, gestures and lighting included.', '上传两张正面照片，走进标志性的橙色直播间——自动口型同步、手势与灯光全部内置。')}</p><div className="hero-cta"><button className="btn btn-primary btn-lg" onClick={start}>{user ? t('Create Now', '立即创作') : t('Get Started', '立即开始')}<ArrowRight size={16}/></button><a className="btn btn-outline btn-lg" href="#templates">{t('See templates', '浏览模板')}</a></div><div className="hero-proof"><div className="avatars" aria-hidden="true"><span/><span/><span/><span/></div><span><b>1,240,000+</b> {t('creators joined this week', '位创作者本周加入')}</span></div></div></section>
    <section className="sec templates-section" id="templates"><div className="container"><div className="sec-head"><p className="kick">{t('Templates','模板')}</p><h2>{t('Pick a template, upload two photos, done','选模板、传两张照片，一键出片')}</h2><p className="sub">{t('Every template is a tuned variant of the viral format — click one to open the generator.','每个模板都是爆火玩法的精调版本——点击卡片立即生成。')}</p></div><div className="grid3">{templates.slice(0, 9).map((item, index) => <article className="tcard" key={item.id}><button className="tv" aria-label={`${t('Use','使用')} ${item.name[zh ? 1 : 0]}`} onClick={() => choose(item)} style={{ '--g1': item.colors[0], '--g2': item.colors[1] } as CSSProperties}><TemplateVideo id={item.id} colors={item.colors}/>{index === 0 && <span className="hot">HOT</span>}<span className="tv-expand"><Maximize size={18}/></span><span className="tv-play"><Play size={16}/></span><span className="tv-bar"><i/></span></button><div className="tmeta"><b>{item.name[zh ? 1 : 0]}</b><span>{['12.4M made', '6.1M made', '9.8M made', '7.2M made', '3.4M made', '5.6M made', '4.8M made', '8.3M made', '6.7M made'][index]}</span></div><button className="use" onClick={() => choose(item)}>{t('Generate','立即生成')}</button></article>)}</div></div></section>
    <div className="logos"><p className="lbl">{t('Creators are posting ViralReel videos on','创作者们正在这些平台发布 ViralReel 视频')}</p><div className="row"><span className="soc tiktok"><PlatformIcon type="tiktok"/>TikTok</span><span className="soc youtube"><PlatformIcon type="youtube"/>YouTube Shorts</span><span className="soc instagram"><PlatformIcon type="instagram"/>Instagram Reels</span><span className="soc x"><PlatformIcon type="x"/>X / Twitter</span><span className="soc reddit"><PlatformIcon type="reddit"/>Reddit</span></div></div>
    <section className="stats"><div className="container stats-grid"><div><div className="statnum">1.2M<em>+</em></div><p>{t('Videos generated','已生成视频')}</p></div><div><div className="statnum">60<em>s</em></div><p>{t('Average render time','平均渲染时长')}</p></div><div><div className="statnum">4.8<em>★</em></div><p>{t('From 3,100+ reviews','来自 3,100+ 条评价')}</p></div><div><div className="statnum">{Math.min(...videoCosts.flatMap(row => row.costs.map(item => item.credits)))}<em className="wide-em">{t(' credits / video from', ' 积分 / 条起')}</em></div><p>{t(`Top-ups available · ${creditsPerUsd} credits = $1`,`随时可加购 · ${creditsPerUsd} 积分 = 1 美元`)}</p></div></div></section>
    <section className="sec sec-alt" id="what"><div className="container"><div className="sec-head"><p className="kick">{t('What is ViralReel','ViralReel 是什么')}</p><h2>{t('Everything you need to join the trend','参与这波趋势所需的一切')}</h2><p className="sub">{t('The orange booth, the hanging mic, the back-and-forth verses — recreated by AI from just two photos.','橙色直播间、吊麦、你来我往的对唱——只需两张照片，AI 全部还原。')}</p></div><div className="grid4">{features.map(([Icon,title,desc]) => <div className="feat" key={title}><div className="ic"><Icon size={20}/></div><h3>{title}</h3><p>{desc}</p></div>)}</div></div></section>
    <section className="sec" id="how"><div className="container"><div className="sec-head"><p className="kick">{t('How it works','使用教程')}</p><h2>{t('How to make a Hotel Lobby AI template video','如何用 Hotel Lobby AI 模板制作视频')}</h2><p className="sub">{t('From photos to a postable video in about a minute — no app, no editing skills.','从照片到可发布视频只要一分钟——不用装 App，不用会剪辑。')}</p></div><div className="grid4s">{steps.map(([title,desc],i) => <div className="step" key={title}><div className="num">{i+1}</div><h3>{title}</h3><p>{desc}</p></div>)}</div></div></section>
    <section className="sec"><div className="container"><div className="sec-head"><p className="kick">{t('Testimonials','用户评价')}</p><h2>{t('People love ViralReel','用户都爱 ViralReel')}</h2><p className="sub">{t('…for making the trend easy to join before it peaks.','…因为它让人人都能在趋势见顶前轻松上车。')}</p></div><div className="quote-viewport"><div className="quote-grid">{[[t('Jake M.','Jake M.'),'“Made a cat duo video in literally 2 minutes. It hit 800k views on TikTok the same night. The lip-sync is shockingly good.”','@jakemakes · 412K followers','/avatars/review-1.jpg'],[t('Sofia R.','Sofia R.'),'“Starrd wanted $5 per clip. Here one video costs just 10 credits — I batch-made 12 videos for our meme page in one sitting.”','Runs @dailydoseofmemes','/avatars/review-2.jpg'],[t('Tom K.','Tom K.'),'“The pet edition is a cheat code. No editing, no app, works on my phone browser. Posted 6 videos in a row, all took off.”','@tompetsdaily · 208K followers','/avatars/review-3.jpg'],[t('Liam P.','Liam P.'),'“Our whole office did the orange-booth trend after the holiday party. The render queue is fast enough that we posted everything same-day.”','@liam.plays · 96K followers','/avatars/review-4.jpg'],[t('Emma L.','Emma L.'),'“I am not a video editor at all. Uploaded me and my dog, picked Pet & Owner, and the thing basically edited itself. 1.2M views and counting.”','@emmadaybyday · 340K followers','/avatars/review-5.jpg'],[t('Marcus J.','Marcus J.'),'“The 9:16 export is the detail nobody else gets right. No cropping, no watermark panic — straight to Shorts and Reels.”','@marcusmakes · 155K followers','/avatars/review-6.jpg']].map(([name,quote,handle,img]) => <article className="qcard" key={name}><div className="stars">★★★★★</div><p>{quote}</p><div className="who"><span className="av" style={{ backgroundImage: `url(${img})` }}/><div><b>{name}</b><span>{handle}</span></div></div></article>)}{[[t('Jake M.','Jake M.'),'“Made a cat duo video in literally 2 minutes. It hit 800k views on TikTok the same night. The lip-sync is shockingly good.”','@jakemakes · 412K followers','/avatars/review-1.jpg'],[t('Sofia R.','Sofia R.'),'“Starrd wanted $5 per clip. Here one video costs just 10 credits — I batch-made 12 videos for our meme page in one sitting.”','Runs @dailydoseofmemes','/avatars/review-2.jpg'],[t('Tom K.','Tom K.'),'“The pet edition is a cheat code. No editing, no app, works on my phone browser. Posted 6 videos in a row, all took off.”','@tompetsdaily · 208K followers','/avatars/review-3.jpg'],[t('Liam P.','Liam P.'),'“Our whole office did the orange-booth trend after the holiday party. The render queue is fast enough that we posted everything same-day.”','@liam.plays · 96K followers','/avatars/review-4.jpg'],[t('Emma L.','Emma L.'),'“I am not a video editor at all. Uploaded me and my dog, picked Pet & Owner, and the thing basically edited itself. 1.2M views and counting.”','@emmadaybyday · 340K followers','/avatars/review-5.jpg'],[t('Marcus J.','Marcus J.'),'“The 9:16 export is the detail nobody else gets right. No cropping, no watermark panic — straight to Shorts and Reels.”','@marcusmakes · 155K followers','/avatars/review-6.jpg']].map(([name,quote,handle,img]) => <article className="qcard" aria-hidden="true" key={'b-'+name}><div className="stars">★★★★★</div><p>{quote}</p><div className="who"><span className="av" style={{ backgroundImage: `url(${img})` }}/><div><b>{name}</b><span>{handle}</span></div></div></article>)}</div></div></div></section>
    <section className="sec" id="guide"><div className="container guide"><div className="sec-head"><p className="kick">{t('Guide','指南')}</p><h2>{t('Hotel Lobby AI video: why it went viral, and where to make one','Hotel Lobby AI 视频：为什么爆火，以及在哪里制作')}</h2></div>
      <figure className="guide-fig"><img src="/og-image.jpg" alt="Hotel Lobby AI video on ViralReel — two performers in the orange booth" width={1200} height={630} loading="lazy"/><figcaption>{t('Make the Hotel Lobby orange-booth video on ViralReel (viralreel.app) from two photos.','在 ViralReel（viralreel.app）用两张照片制作 Hotel Lobby 橙色棚视频。')}</figcaption></figure>
      <h3>{t('What is the Hotel Lobby AI video?','Hotel Lobby AI 视频是什么？')}</h3>
      <p>{t('The Hotel Lobby AI video is the orange-booth duet all over TikTok, Reels and Shorts. The name comes from the song Hotel Lobby: in 2022 Quavo and Takeoff, as Unc & Phew, performed it on A COLORS SHOW in a seamless orange room with one microphone hanging between them. The scene is not a hotel. In September 2026 people started putting friends, couples and pets into that booth with AI.','Hotel Lobby AI 视频就是刷屏 TikTok、Reels 和 Shorts 的橙色棚对唱。名字来自歌曲 Hotel Lobby：2022 年，Quavo 和 Takeoff 以 Unc & Phew 的名义在 A COLORS SHOW 上表演这首歌，场景是一整面橙色的房间，一支话筒吊在两人中间。它并不是酒店大堂。2026 年 9 月，大家开始用 AI 把朋友、情侣和宠物放进这个棚。')}</p>
      <h3>{t('Why did the Hotel Lobby AI video go viral?','Hotel Lobby AI 视频为什么会爆火？')}</h3>
      <p>{t('It went viral because the orange wall and the hanging mic are recognizable in one second, and the joke is who you put in the booth. It is a two-person format, so a couple, two friends, two pets, or a person and a pet can each take a side. Once a template could build the booth from two ordinary photos, people could join the same week the trend peaked.','它会爆，是因为橙色的墙和吊麦一秒就能认出来，笑点在于你把谁放进这个棚。它是双人格式，情侣、两个朋友、两只宠物，或者一个人和一只宠物，都可以各站一边。等模板能用两张普通照片搭出这个棚，大家就能在趋势见顶的同一周跟上。')}</p>
      <h3>{t('Where can I generate a Hotel Lobby AI video?','在哪里可以生成 Hotel Lobby AI 视频？')}</h3>
      <p>{t('On ViralReel, at https://www.viralreel.app/. ViralReel (viralreel.app) is an independent AI video template site. You upload two photos in the browser. You do not install an app or write a prompt. The templates are Original Hotel Lobby, Cinematic Gold, Girl Duo, Pets Edition, Pet & Owner, Bro Edition, Muscle Duo, Star Edition and Anime Edition. The generator opens on 16:9. Switch to 9:16 for TikTok, Instagram Reels and YouTube Shorts.','在 ViralReel：https://www.viralreel.app/zh 。ViralReel（viralreel.app）是独立的 AI 视频模板站。在浏览器里上传两张照片即可，不用安装 App，也不用写提示词。模板有原版 Hotel Lobby、电影感版、闺蜜版、宠物版、人宠版、兄弟版、猛男版、明星版和动漫版。生成器默认 16:9。发给 TikTok、Instagram Reels 和 YouTube Shorts 时改成 9:16。')}</p>
      <h3>{t('How do you make a Hotel Lobby AI video?','怎么制作 Hotel Lobby AI 视频？')}</h3>
      <ol>
        <li>{t('Open ViralReel at https://www.viralreel.app/ and pick the template that fits the two photos.','打开 ViralReel：https://www.viralreel.app/zh ，选一个和这两张照片匹配的模板。')}</li>
        <li>{t('Upload two clear, front-facing photos, one subject each. Even light, no sunglasses, no group shots. The first photo stays on one side of the booth and the second stays on the other.','上传两张清晰的正面照，每张一个主体。光线均匀，不要戴墨镜，不要用合照。第一张留在棚的一侧，第二张留在另一侧。')}</li>
        <li>{t('Choose the ratio, resolution and length. The credit cost is shown before you generate. Length goes up to 15 seconds.','选好画幅、分辨率和时长。生成前会显示本次积分。时长最长 15 秒。')}</li>
        <li>{t('Download the MP4. In TikTok, Reels or Shorts, add the Hotel Lobby trend sound so the post joins the same format, and turn on the AI label where the platform asks.','下载 MP4。在 TikTok、Reels 或 Shorts 里加上 Hotel Lobby 的热梗原声，帖子才会进同一条趋势；平台要求标注 AI 生成时，按要求打开。')}</li>
      </ol>
      <p>{t('A text prompt such as "two people rapping in an orange room" invents a new shot. The ViralReel template is built to keep this booth: the orange set, one hanging mic, and your two photos on opposite sides.','如果只写一句「两个人在橙色房间里对唱」，模型会另拍一条新片子。ViralReel 的模板是按这个棚来的：橙色布景、一支吊麦，两张照片各站一边。')}</p>
      <h3>{t('Is the Hotel Lobby AI video filmed in a hotel?','Hotel Lobby AI 视频是在酒店里拍的吗？')}</h3>
      <p>{t('No. Hotel Lobby is the name of the song. The viral picture is the orange COLORS booth, not a hotel lobby. ViralReel is not affiliated with Quavo, Takeoff, A COLORS SHOW, or the song. Use only photos you have permission to use.','不是。Hotel Lobby 是歌名。大家认出来的画面是 COLORS 的橙色棚，不是酒店大堂。ViralReel 与 Quavo、Takeoff、A COLORS SHOW 以及这首歌都没有关系。只用你有权使用的照片。')}</p>
      <p className="guide-more"><Link href="/hotel-lobby-ai-template">{t('Read the full Hotel Lobby AI video guide','阅读完整的 Hotel Lobby AI 视频指南')} →</Link></p>
    </div></section>
    <section className="sec sec-alt" id="faq"><div className="container"><div className="sec-head"><p className="kick">{t('FAQ','常见问题')}</p><h2>{t('Frequently asked questions about the Hotel Lobby AI video','关于 Hotel Lobby AI 视频的常见问题')}</h2></div><div className="faq-list">{faq.map(([question,answer],i) => <details key={question} open={i === 0}><summary>{question}</summary><p>{answer}</p></details>)}</div></div></section>
    <section className="final-cta sec-alt"><div className="container"><h2>{t('Make your first Hotel Lobby AI template video','用 Hotel Lobby AI 模板做出你的第一条视频')}</h2><p>{t('Join 1.2 million creators already on the orange stage.','加入已站上橙色舞台的 120 万创作者。')}</p><button className="btn btn-primary btn-lg" onClick={() => choose()}>{t('Upload 2 photos — start now','上传 2 张照片，立即开始')}<ArrowRight size={16}/></button></div></section></main>
    <ViralFooter/>
    <TemplateGenerator key={template.id} template={template} open={open} onOpenChange={setOpen}/>
  </div>;
}
