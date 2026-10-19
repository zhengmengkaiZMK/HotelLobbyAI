'use client';

/* eslint-disable @next/next/no-img-element */

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';
import { ArrowRight, Flame, Maximize, Mic, PartyPopper, Play, Users, Video, Volume2, VolumeX } from 'lucide-react';
import { useLocale } from 'next-intl';
import { track } from '@/shared/lib/analytics';
import { Link } from '@/core/i18n/navigation';
import { useAppContext } from '@/shared/contexts/app';
import { TemplateGenerator } from '@/shared/blocks/viral-home/generator';
import { ViralHeader } from '@/shared/blocks/viral-home/header';
import { ViralFooter } from '@/shared/blocks/viral-home/footer';
import { buildHowToJsonLdFromSteps } from '@/shared/lib/howto-schema';
import { getVideoCostTable } from '@/shared/lib/video-cost';
import { burningBridgesTemplates, type BBTemplate } from './templates';
import { BB_FAQ } from './faq';
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
    <video ref={ref} className="tv-video" src={`/templates/${id}.mp4`} poster={`/templates/${id}-poster.jpg`} muted loop playsInline preload="none" style={{ background: `linear-gradient(165deg, ${colors[0]}, ${colors[1]})` }}/>
    <span className="tv-sound" role="button" tabIndex={0} aria-label={muted ? 'Unmute video' : 'Mute video'} onClick={toggleSound} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') toggleSound(e); }}>{muted ? <VolumeX size={15}/> : <Volume2 size={15}/>}</span>
  </>;
}

export function BurningBridgesHome({ creditsPerUsd = 12, videoCosts = getVideoCostTable() }: { creditsPerUsd?: number; videoCosts?: ReturnType<typeof getVideoCostTable> }) {
  const locale = useLocale();
  const zh = locale === 'zh';
  const t = (en: string, cn: string) => zh ? cn : en;
  useEffect(() => { track('view_template', { template: 'burning_bridges' }); }, []);
  const { user, setIsShowSignModal } = useAppContext();
  const [template, setTemplate] = useState<BBTemplate>(burningBridgesTemplates[0]);
  const [open, setOpen] = useState(false);
  const choose = (item: BBTemplate = burningBridgesTemplates[0]) => { track('click_generate', { template: 'burning_bridges', variant: item.id }); setTemplate(item); setOpen(true); };
  const start = () => { if (!user) { track('signup_wall', { template: 'burning_bridges', surface: 'template_hero' }); setIsShowSignModal(true); return; } choose(); };
  const features = [
    [PartyPopper, t('The viral party scene','爆火派对名场面'), t('The chandelier, the metal cup, the roaring crowd — the exact format everyone is posting, staged for you.','水晶吊灯、金属杯、沸腾人群——人人都在发的那个格式，场景已经为你搭好。')],
    [Video, t('One photo, you dance','一张照片，你来跳'), t('Your face replaces the main dancer; the crowd, lighting and moves are generated around it.','你的照片替换领舞主角，人群、灯光和舞步围绕照片自动生成。')],
    [Users, t('Six crowd-pleasing variants','六种全场沸腾变体'), t('Office classic, fantasy queen, party legend, drama lead, dance duo and pop star.','经典办公室、奇幻女王、硬核老炮、剧集主角、双人共舞、流行巨星。')],
    [Mic, t('No prompt to write','不用写提示词'), t('The party, the crowd and the cup are already in the template. Upload a photo and pick the ratio.','派对、人群和杯子已经在模板里。上传照片、选好画幅就行。')],
  ] as const;
  const steps = [[t('Pick a template','选择模板'),t('Six tuned variants of the same viral party scene — pick the one that fits your photo.','同一爆火派现场的六个精调变体——选一个最适合你照片的。')],[t('Upload one photo','上传一张照片'),t('A clear front-facing shot works best. The Dance Duo template takes two, one per dancer.','清晰正脸照效果最好。双人共舞模板需两张，每位舞者一张。')],[t('Set ratio, resolution, length','选画幅、清晰度和时长'),t('16:9 matches the original party. Switch to 9:16 for TikTok, Reels and Shorts. The credit cost updates before you generate.','16:9 对应原片的宽画幅。发 TikTok、Reels 和 Shorts 时改成 9:16。积分会在生成前更新。')],[t('Download & post','下载并发布'),t('Export and add the original Burning Bridges audio in TikTok or Reels so the algorithm groups you with the trend.','导出后在 TikTok 或 Reels 添加 Burning Bridges 原声，让算法把你归入同款热点。')]];
  const faq = BB_FAQ[zh ? 'zh' : 'en'];
    const howToJsonLd = buildHowToJsonLdFromSteps({
    name: t('How to make a Burning Bridges AI video', '如何制作 Burning Bridges AI 视频'),
    description: t('From one photo to a postable video in about a minute — no app, no editing skills.', '从一张照片到可发布视频只要一分钟——不用装 App，不用会剪辑。'),
    steps: steps.map(([name, text]) => ({ name, text })),
  });
  return <div className="viral-home">{howToJsonLd ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} /> : null}
    <ViralHeader onStart={start}/>
    <main><section className="hero"><div className="container"><div className="hero-badge"><Flame size={16}/><span>#burningbridges is trending</span></div><h1>{t('Become the main dancer in the viral ', '60 秒成为爆火的 ')}<span className="hl">Burning Bridges</span>{t(' party video in 60 seconds', ' 派对舞王')}</h1><p className="lead">{t('Upload one front-facing photo and drop yourself into the packed party — you dance in the center while the crowd cheers around you.', '上传一张正面照片，直接跳进沸腾的派对现场——你在中央领舞，周围人群为你喝彩。')}</p><div className="hero-cta"><button className="btn btn-primary btn-lg" onClick={start}>{user ? t('Create Now', '立即创作') : t('Get Started', '立即开始')}<ArrowRight size={16}/></button><a className="btn btn-outline btn-lg" href="#templates">{t('See templates', '浏览模板')}</a></div></div></section>
    <section className="sec templates-section" id="templates"><div className="container"><div className="sec-head"><p className="kick">{t('Templates','模板')}</p><h2>{t('Pick a party, upload one photo, done','选一个派对场景、传一张照片，一键出片')}</h2><p className="sub">{t('Every template is a tuned variant of the same viral scene — click one to open the generator.','每个模板都是同一爆火场景的精调版本——点击卡片打开生成器。')}</p></div><div className="grid3">{burningBridgesTemplates.map((item, index) => <article className="tcard" key={item.id}><button className="tv" aria-label={`${t('Use','使用')} ${item.name[zh ? 1 : 0]}`} onClick={() => choose(item)} style={{ '--g1': item.colors[0], '--g2': item.colors[1] } as CSSProperties}><TemplateVideo id={item.id} colors={item.colors}/>{index === 0 && <span className="hot">HOT</span>}<span className="tv-expand"><Maximize size={18}/></span><span className="tv-play"><Play size={16}/></span><span className="tv-bar"><i/></span></button><div className="tmeta"><b>{item.name[zh ? 1 : 0]}</b></div><button className="use" onClick={() => choose(item)}>{t('Generate','立即生成')}</button></article>)}</div></div></section>
    <div className="logos"><p className="lbl">{t('Creators are posting ViralReel videos on','创作者们正在这些平台发布 ViralReel 视频')}</p><div className="row"><span className="soc tiktok"><PlatformIcon type="tiktok"/>TikTok</span><span className="soc youtube"><PlatformIcon type="youtube"/>YouTube Shorts</span><span className="soc instagram"><PlatformIcon type="instagram"/>Instagram Reels</span><span className="soc x"><PlatformIcon type="x"/>X / Twitter</span><span className="soc reddit"><PlatformIcon type="reddit"/>Reddit</span></div></div>
    <section className="stats"><div className="container stats-grid"><div><div className="statnum">60<em>s</em></div><p>{t('Average render time','平均渲染时长')}</p></div><div><div className="statnum">9:16</div><p>{t('Vertical export for TikTok, Reels and Shorts','竖屏导出，适配 TikTok、Reels、Shorts')}</p></div><div><div className="statnum">{Math.min(...videoCosts.flatMap(row => row.costs.map(item => item.credits)))}<em className="wide-em">{t(' credits / video from', ' 积分 / 条起')}</em></div><p>{t(`Top-ups available · ${creditsPerUsd} credits = $1`,`随时可加购 · ${creditsPerUsd} 积分 = 1 美元`)}</p></div></div></section>
    <section className="sec sec-alt" id="what"><div className="container"><div className="sec-head"><p className="kick">{t('What is Burning Bridges','Burning Bridges 是什么')}</p><h2>{t('Everything you need to join the trend','参与这波趋势所需的一切')}</h2><p className="sub">{t('The chandelier, the metal cup, the cheering crowd — recreated by AI from just one photo.','水晶吊灯、金属杯、欢呼人群——只需一张照片，AI 全部还原。')}</p></div><div className="grid4">{features.map(([Icon,title,desc]) => <div className="feat" key={title}><div className="ic"><Icon size={20}/></div><h3>{title}</h3><p>{desc}</p></div>)}</div></div></section>
    <section className="sec" id="how"><div className="container"><div className="sec-head"><p className="kick">{t('How it works','使用教程')}</p><h2>{t('How to make a Burning Bridges AI video','如何制作 Burning Bridges AI 视频')}</h2><p className="sub">{t('From one photo to a postable video in about a minute — no app, no editing skills.','从一张照片到可发布视频只要一分钟——不用装 App，不用会剪辑。')}</p></div><div className="grid4s">{steps.map(([title,desc],i) => <div className="step" key={title}><div className="num">{i+1}</div><h3>{title}</h3><p>{desc}</p></div>)}</div></div></section>
    <section className="sec" id="guide"><div className="container guide"><div className="sec-head"><p className="kick">{t('Guide','指南')}</p><h2>{t('Burning Bridges AI video: why it went viral, and where to make one','Burning Bridges AI 视频：为什么爆火，以及在哪里制作')}</h2></div>
      <figure className="guide-fig"><img src="/templates/party-office-poster.jpg" alt="Burning Bridges AI video on ViralReel — the chandelier party from one photo" width={1138} height={640} loading="lazy"/><figcaption>{t('Make the Burning Bridges party video on ViralReel (viralreel.app) from one photo.','在 ViralReel（viralreel.app）用一张照片制作 Burning Bridges 派对视频。')}</figcaption></figure>
      <h3>{t('What is the Burning Bridges AI video?','Burning Bridges AI 视频是什么？')}</h3>
      <p>{t('The Burning Bridges AI video puts a new person at the center of a packed party: crystal chandeliers, a metal cup, a cheering crowd, and the "where she at?" gesture with a hand over the eyes. The scene comes from the end of the Drake song Burning Bridges, released in May 2026 on the album Iceman. As an AI template, your photo takes that center spot and the room stays.','Burning Bridges AI 视频是把一个新人放到挤满人的派对中间：水晶吊灯、金属杯、欢呼的人群，以及「where she at?」时用手遮住眼睛的动作。这个场景来自 Drake 的歌曲 Burning Bridges 结尾，歌曲于 2026 年 5 月收录在专辑 Iceman。做成 AI 模板之后，你的照片站到中间，房间留在原处。')}</p>
      <h3>{t('Why did the Burning Bridges AI video go viral?','Burning Bridges AI 视频为什么会爆火？')}</h3>
      <p>{t('It went viral because the chandelier, the cup and the hand over the eyes are recognizable before the first move finishes. One photo is enough, so a friend, a parent or a pet can take the center without a second picture. The line people quote is "where she at?", which gives every remake the same caption and the same sound to join.','它会爆，是因为吊灯、杯子和遮眼睛的手，在第一个动作做完之前就能被认出来。一张照片就够，朋友、父母或宠物都能站到中间，不需要第二张。大家引用的那句是「where she at?」，所以每条重拍都能用同一句文案、同一段声音进同一条趋势。')}</p>
      <h3>{t('Where can I generate a Burning Bridges AI video?','在哪里可以生成 Burning Bridges AI 视频？')}</h3>
      <p>{t('On ViralReel, at https://www.viralreel.app/burning-bridges-ai-template. ViralReel (viralreel.app) is an independent AI video template site. You upload one photo in the browser. You do not install an app or write a prompt. The templates are Office Party Classic, Fantasy Queen, Party Legend, Drama Lead, Pop Star and Dance Duo. Dance Duo is the one that uses two photos. The generator opens on 16:9. Switch to 9:16 for TikTok, Instagram Reels and YouTube Shorts.','在 ViralReel：https://www.viralreel.app/zh/burning-bridges-ai-template 。ViralReel（viralreel.app）是独立的 AI 视频模板站。在浏览器里上传一张照片即可，不用安装 App，也不用写提示词。模板有经典办公室派对、奇幻女王版、硬核老炮版、剧集聚主角版、流行巨星版和双人共舞版。只有双人共舞版用两张照片。生成器默认 16:9。发给 TikTok、Instagram Reels 和 YouTube Shorts 时改成 9:16。')}</p>
      <h3>{t('How do you make a Burning Bridges AI video?','怎么制作 Burning Bridges AI 视频？')}</h3>
      <ol>
        <li>{t('Open the Burning Bridges template on ViralReel: https://www.viralreel.app/burning-bridges-ai-template. Pick the party that fits the photo.','打开 ViralReel 的 Burning Bridges 模板：https://www.viralreel.app/zh/burning-bridges-ai-template 。选一个和照片匹配的派对。')}</li>
        <li>{t('Upload one clear, front-facing photo of one subject. Dance Duo needs a second photo, one per dancer. Even light matters, because the amber room hides a dark face. Skip sunglasses and group shots.','上传一张清晰的单人正面照。双人共舞版再传一张，每位舞者一张。光线要均匀，琥珀色的房间会把偏暗的脸压没。不要戴墨镜，也不要用合照。')}</li>
        <li>{t('Keep 16:9 to match the original party, or switch to 9:16 for a phone post. Check the credit cost shown before you generate. Length goes up to 15 seconds.','想贴近原片就留在 16:9，发手机全屏就改成 9:16。生成前看清页面显示的积分。时长最长 15 秒。')}</li>
        <li>{t('Download the MP4. In TikTok, Reels or Shorts, add the Burning Bridges trend sound so the post joins the same format, and turn on the AI label where the platform asks.','下载 MP4。在 TikTok、Reels 或 Shorts 里加上 Burning Bridges 的热梗原声，帖子才会进同一条趋势；平台要求标注 AI 生成时，按要求打开。')}</li>
      </ol>
      <p>{t('A text prompt such as "a person dancing at a chandelier party" invents a new shot. The ViralReel template is built to keep this party: the chandeliers, the crowd, the metal cup, and your photo in the center.','如果只写一句「一个人在吊灯派对里跳舞」，模型会另拍一条新片子。ViralReel 的模板是按这场派对来的：吊灯、人群、金属杯，中间用你的照片。')}</p>
      <p className="guide-more"><Link href="/hotel-lobby-ai-template">{t('Want the two-performer format? Read the Hotel Lobby AI template guide','想玩双人对话格式？看 Hotel Lobby AI 模板指南')} →</Link></p>
      <p className="guide-more"><Link href="/bulin-47-ai-template">{t('Want the street freestyle? See the Bulin 47 AI template','想玩街头 freestyle？看 Bulin 47 AI 模板')} →</Link></p>
    </div></section>
    <section className="sec sec-alt" id="faq"><div className="container"><div className="sec-head"><p className="kick">{t('FAQ','常见问题')}</p><h2>{t('Frequently asked questions about the Burning Bridges AI video','关于 Burning Bridges AI 视频的常见问题')}</h2></div><div className="faq-list">{faq.map(([question,answer],i) => <details key={question} open={i === 0}><summary>{question}</summary><p>{answer}</p></details>)}</div></div></section>
    <section className="final-cta sec-alt"><div className="container"><h2>{t('Ready to become the main dancer?','准备好成为派对主角了吗？')}</h2><p>{t('Upload one photo, pick a party, and drop yourself in while the trend is still climbing.','上传一张照片，选好派对场景，趁趋势还在上升期直接跳进现场。')}</p><button className="btn btn-primary btn-lg" onClick={() => choose()}>{t('Upload 1 photo — start now','上传 1 张照片，立即开始')}<ArrowRight size={16}/></button></div></section></main>
    <ViralFooter/>
    <TemplateGenerator key={template.id} template={template} open={open} onOpenChange={setOpen} preferModel="MiniMax-H3"/>
  </div>;
}
