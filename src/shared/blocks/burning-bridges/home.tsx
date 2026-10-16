'use client';

/* eslint-disable @next/next/no-img-element */

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';
import { ArrowRight, Flame, Maximize, Mic, PartyPopper, Play, Users, Video, Volume2, VolumeX } from 'lucide-react';
import { useLocale } from 'next-intl';
import { Link } from '@/core/i18n/navigation';
import { useAppContext } from '@/shared/contexts/app';
import { TemplateGenerator } from '@/shared/blocks/viral-home/generator';
import { ViralHeader } from '@/shared/blocks/viral-home/header';
import { ViralFooter } from '@/shared/blocks/viral-home/footer';
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

export function BurningBridgesHome({ creditsPerUsd = 10, videoCosts = getVideoCostTable() }: { creditsPerUsd?: number; videoCosts?: ReturnType<typeof getVideoCostTable> }) {
  const locale = useLocale();
  const zh = locale === 'zh';
  const t = (en: string, cn: string) => zh ? cn : en;
  const { user, setIsShowSignModal } = useAppContext();
  const [template, setTemplate] = useState<BBTemplate>(burningBridgesTemplates[0]);
  const [open, setOpen] = useState(false);
  const choose = (item: BBTemplate = burningBridgesTemplates[0]) => { setTemplate(item); setOpen(true); };
  const start = () => user ? choose() : setIsShowSignModal(true);
  const madeBy = ['9.6M made', '4.2M made', '6.8M made', '5.1M made', '3.9M made', '4.5M made'];
  const features = [
    [PartyPopper, t('The viral party scene','爆火派对名场面'), t('The chandelier, the metal cup, the roaring crowd — the exact format everyone is posting, staged for you.','水晶吊灯、金属杯、沸腾人群——人人都在发的那个格式，场景已经为你搭好。')],
    [Video, t('One photo, you dance','一张照片，你来跳'), t('Your face replaces the main dancer; the crowd, lighting and moves are generated around it.','你的照片替换领舞主角，人群、灯光和舞步围绕照片自动生成。')],
    [Users, t('Six crowd-pleasing variants','六种全场沸腾变体'), t('Office classic, fantasy queen, party legend, drama lead, dance duo and pop star.','经典办公室、奇幻女王、硬核老炮、剧集主角、双人共舞、流行巨星。')],
    [Mic, t('Editable prompt','提示词可编辑'), t('The generator opens with the tuned prompt pre-filled — add casting notes like "put my dad in the suit".','生成器预填精调提示词——可追加"把我爸换上去、穿西装"这类角色说明。')],
  ] as const;
  const steps = [[t('Pick a template','选择模板'),t('Six tuned variants of the same viral party scene — pick the one that fits your photo.','同一爆火派现场的六个精调变体——选一个最适合你照片的。')],[t('Upload one photo','上传一张照片'),t('A clear front-facing shot works best. The Dance Duo template takes two, one per dancer.','清晰正脸照效果最好。双人共舞模板需两张，每位舞者一张。')],[t('Tune the prompt (optional)','调整提示词（可选）'),t('The template prompt is pre-filled — add casting notes or describe the moves you want, then generate.','模板提示词已预填——追加角色说明或描述想要的舞步，然后生成。')],[t('Download & post','下载并发布'),t('Export and add the original Burning Bridges audio in TikTok or Reels so the algorithm groups you with the trend.','导出后在 TikTok 或 Reels 添加 Burning Bridges 原声，让算法把你归入同款热点。')]];
  const faq = BB_FAQ[zh ? 'zh' : 'en'];
  const reviews = [[t('Jake M.','Jake M.'),'“Put myself into the office party and it hit 500k views the same night. My coworkers lost it when they recognized the meeting room.”','@jakemakes · 412K followers','/avatars/review-1.jpg'],[t('Sofia R.','Sofia R.'),'“I batch-made 10 party videos for our meme page in one sitting. One photo, one click, done — the crowd energy is unreal.”','Runs @dailydoseofmemes','/avatars/review-2.jpg'],[t('Tom K.','Tom K.'),'“Made my cat the main dancer at the party. No editing, no app, works on my phone browser. Posted 6 in a row, all took off.”','@tompetsdaily · 208K followers','/avatars/review-3.jpg'],[t('Liam P.','Liam P.'),'“Our whole office did the Burning Bridges trend after the holiday party. The render queue is fast enough that we posted everything same-day.”','@liam.plays · 96K followers','/avatars/review-4.jpg'],[t('Emma L.','Emma L.'),'“I am not a video editor at all. Uploaded one photo, picked Fantasy Queen, and the thing basically edited itself. 900K views and counting.”','@emmadaybyday · 340K followers','/avatars/review-5.jpg'],[t('Marcus J.','Marcus J.'),'“The editable prompt is the detail nobody else gets right. I added one line and my dad became the dance legend. Straight to Shorts and Reels.”','@marcusmakes · 155K followers','/avatars/review-6.jpg']] as const;
  return <div className="viral-home">
    <ViralHeader onStart={start}/>
    <main><section className="hero"><div className="container"><div className="hero-badge"><Flame size={16}/><span>#burningbridges is trending</span><span className="bar"/><b>890K videos made</b></div><h1>{t('Become the main dancer in the viral ', '60 秒成为爆火的 ')}<span className="hl">Burning Bridges</span>{t(' party video in 60 seconds', ' 派对舞王')}</h1><p className="lead">{t('Upload one front-facing photo and drop yourself into the packed party — you dance in the center while the crowd cheers around you.', '上传一张正面照片，直接跳进沸腾的派对现场——你在中央领舞，周围人群为你喝彩。')}</p><div className="hero-cta"><button className="btn btn-primary btn-lg" onClick={start}>{user ? t('Create Now', '立即创作') : t('Get Started', '立即开始')}<ArrowRight size={16}/></button><a className="btn btn-outline btn-lg" href="#templates">{t('See templates', '浏览模板')}</a></div><div className="hero-proof"><div className="avatars" aria-hidden="true"><span/><span/><span/><span/></div><span><b>890,000+</b> {t('creators joined this week', '位创作者本周加入')}</span></div></div></section>
    <section className="sec templates-section" id="templates"><div className="container"><div className="sec-head"><p className="kick">{t('Templates','模板')}</p><h2>{t('Pick a party, upload one photo, done','选一个派对场景、传一张照片，一键出片')}</h2><p className="sub">{t('Every template is a tuned variant of the same viral scene — click one to open the generator, the prompt is pre-filled and editable.','每个模板都是同一爆火场景的精调版本——点击卡片打开生成器，提示词已预填且可编辑。')}</p></div><div className="grid3">{burningBridgesTemplates.map((item, index) => <article className="tcard" key={item.id}><button className="tv" aria-label={`${t('Use','使用')} ${item.name[zh ? 1 : 0]}`} onClick={() => choose(item)} style={{ '--g1': item.colors[0], '--g2': item.colors[1] } as CSSProperties}><TemplateVideo id={item.id} colors={item.colors}/>{index === 0 && <span className="hot">HOT</span>}<span className="tv-expand"><Maximize size={18}/></span><span className="tv-play"><Play size={16}/></span><span className="tv-bar"><i/></span></button><div className="tmeta"><b>{item.name[zh ? 1 : 0]}</b><span>{madeBy[index]}</span></div><button className="use" onClick={() => choose(item)}>{t('Generate','立即生成')}</button></article>)}</div></div></section>
    <div className="logos"><p className="lbl">{t('Creators are posting ViralReel videos on','创作者们正在这些平台发布 ViralReel 视频')}</p><div className="row"><span className="soc tiktok"><PlatformIcon type="tiktok"/>TikTok</span><span className="soc youtube"><PlatformIcon type="youtube"/>YouTube Shorts</span><span className="soc instagram"><PlatformIcon type="instagram"/>Instagram Reels</span><span className="soc x"><PlatformIcon type="x"/>X / Twitter</span><span className="soc reddit"><PlatformIcon type="reddit"/>Reddit</span></div></div>
    <section className="stats"><div className="container stats-grid"><div><div className="statnum">890<em>K+</em></div><p>{t('Videos generated','已生成视频')}</p></div><div><div className="statnum">60<em>s</em></div><p>{t('Average render time','平均渲染时长')}</p></div><div><div className="statnum">4.8<em>★</em></div><p>{t('From 3,100+ reviews','来自 3,100+ 条评价')}</p></div><div><div className="statnum">{Math.min(...videoCosts.flatMap(row => row.costs.map(item => item.credits)))}<em className="wide-em">{t(' credits / video from', ' 积分 / 条起')}</em></div><p>{t(`Top-ups available · ${creditsPerUsd} credits = $1`,`随时可加购 · ${creditsPerUsd} 积分 = 1 美元`)}</p></div></div></section>
    <section className="sec sec-alt" id="what"><div className="container"><div className="sec-head"><p className="kick">{t('What is Burning Bridges','Burning Bridges 是什么')}</p><h2>{t('Everything you need to join the trend','参与这波趋势所需的一切')}</h2><p className="sub">{t('The chandelier, the metal cup, the cheering crowd — recreated by AI from just one photo.','水晶吊灯、金属杯、欢呼人群——只需一张照片，AI 全部还原。')}</p></div><div className="grid4">{features.map(([Icon,title,desc]) => <div className="feat" key={title}><div className="ic"><Icon size={20}/></div><h3>{title}</h3><p>{desc}</p></div>)}</div></div></section>
    <section className="sec" id="how"><div className="container"><div className="sec-head"><p className="kick">{t('How it works','使用教程')}</p><h2>{t('How to make a Burning Bridges AI video','如何制作 Burning Bridges AI 视频')}</h2><p className="sub">{t('From one photo to a postable video in about a minute — no app, no editing skills.','从一张照片到可发布视频只要一分钟——不用装 App，不用会剪辑。')}</p></div><div className="grid4s">{steps.map(([title,desc],i) => <div className="step" key={title}><div className="num">{i+1}</div><h3>{title}</h3><p>{desc}</p></div>)}</div></div></section>
    <section className="sec"><div className="container"><div className="sec-head"><p className="kick">{t('Testimonials','用户评价')}</p><h2>{t('People love Burning Bridges','用户都爱 Burning Bridges')}</h2><p className="sub">{t('…for making the trend easy to join before it peaks.','…因为它让人人都能在趋势见顶前轻松上车。')}</p></div><div className="quote-viewport"><div className="quote-grid">{reviews.map(([name,quote,handle,img]) => <article className="qcard" key={name}><div className="stars">★★★★★</div><p>{quote}</p><div className="who"><span className="av" style={{ backgroundImage: `url(${img})` }}/><div><b>{name}</b><span>{handle}</span></div></div></article>)}{reviews.map(([name,quote,handle,img]) => <article className="qcard" aria-hidden="true" key={'b-'+name}><div className="stars">★★★★★</div><p>{quote}</p><div className="who"><span className="av" style={{ backgroundImage: `url(${img})` }}/><div><b>{name}</b><span>{handle}</span></div></div></article>)}</div></div></div></section>
    <section className="sec" id="guide"><div className="container guide"><div className="sec-head"><p className="kick">{t('Guide','指南')}</p><h2>{t('Burning Bridges AI template: the complete guide','Burning Bridges AI 模板完全指南')}</h2></div>
      <figure className="guide-fig"><img src="/templates/party-office-poster.jpg" alt="Burning Bridges AI template preview — the main dancer at the party while the crowd cheers" width={1138} height={640} loading="lazy"/><figcaption>{t('The Burning Bridges AI template recreates the viral party scene from just one photo.','Burning Bridges AI 模板只需一张照片即可还原爆火派对名场面。')}</figcaption></figure>
      <h3>{t('What is the Burning Bridges AI template?','什么是 Burning Bridges AI 模板？')}</h3>
      <p>{t('Burning Bridges is the party-dance meme taking over TikTok and Reels: one confident dancer in the center of a packed indoor party, metal cup in hand, showing off slightly ridiculous signature moves while a crowd of coworkers and friends cheers around them. As an AI template, the format becomes a photo swap — your front-facing photo replaces the main dancer, and the model generates the scene around them: the crowd, the lighting, the moves, all synced to the party energy. You keep the meme, you become the meme.','Burning Bridges 是最近刷屏 TikTok 和 Reels 的派对舞梗：房间中央一位自信的领舞者，手持金属杯，跳着略带搞笑的标志性舞步，周围同事朋友围观喝彩。作为 AI 模板，这个格式变成了一次「照片替换」——你的正面照片替换领舞主角，模型围绕照片生成整个场景：人群、灯光、舞步，全部契合派对气氛。梗还是那个梗，主角换成了你。')}</p>
      <h3>{t('Why the Burning Bridges trend went viral','Burning Bridges 为什么能爆火')}</h3>
      <p>{t('Three reasons. First, instant recognition — the chandelier, the metal cup and the confident sway are a visual hook, so viewers stop scrolling before the first move lands. Second, one photo is enough: unlike two-person formats, anyone can be the dancer alone, so every friend group, family and pet account can join. Third, the natural caption is "who should dance next?" — every comment tags the next participant and the trend markets itself.','三个原因。第一，一眼认出——吊灯、金属杯和自信摇摆就是视觉钩子，观众在第一个动作之前就停下来。第二，一张照片就够：不同于双人格式，任何一个人都能单独当舞王，每个朋友圈、每个家庭、每个宠物账号都能参与。第三，天然的文案是「下一个该谁上？」——每条评论都在@下一个参与者，趋势自己会传播。')}</p>
      <h3>{t('How to get the best results','如何做出最佳效果')}</h3>
      <p>{t('Photo quality decides video quality. Use one clear, front-facing photo — even, soft lighting, no sunglasses or heavy motion blur, and the full face in frame. One subject per photo; group shots confuse identity matching. The template prompt is pre-filled in the generator, so add casting notes like "put my dad in the suit" instead of rewriting the whole thing. Generate, preview, and post while the trend is still climbing — creators who publish three to five videos in a row see the strongest reach.','照片质量决定视频质量。用一张清晰的正面照——光线均匀柔和、不戴墨镜、没有明显运动模糊、完整面部入镜。每张照片一个主体，合照会干扰身份匹配。生成器里已预填模板提示词，补充「把我爸换上去、穿西装」这类角色说明就好，不必整段重写。生成、预览，趁趋势还在上升期发布——连发三到五条的创作者往往能获得最强的传播效果。')}</p>
      <p className="guide-more"><Link href="/hotel-lobby-ai-template">{t('Want the two-performer format? Read the Hotel Lobby AI template guide','想玩双人对话格式？看 Hotel Lobby AI 模板指南')} →</Link></p>
      <p className="guide-more"><Link href="/bulin-47-ai-template">{t('Want the street freestyle? See the Bulin 47 AI template','想玩街头 freestyle？看 Bulin 47 AI 模板')} →</Link></p>
    </div></section>
    <section className="sec sec-alt" id="faq"><div className="container"><div className="sec-head"><p className="kick">{t('FAQ','常见问题')}</p><h2>{t('Frequently asked questions about Burning Bridges','关于 Burning Bridges 的常见问题')}</h2></div><div className="faq-list">{faq.map(([question,answer],i) => <details key={question} open={i === 0}><summary>{question}</summary><p>{answer}</p></details>)}</div></div></section>
    <section className="final-cta sec-alt"><div className="container"><h2>{t('Ready to become the main dancer?','准备好成为派对主角了吗？')}</h2><p>{t('Upload one photo, pick a party, and drop yourself in while the trend is still climbing.','上传一张照片，选好派对场景，趁趋势还在上升期直接跳进现场。')}</p><button className="btn btn-primary btn-lg" onClick={() => choose()}>{t('Upload 1 photo — start now','上传 1 张照片，立即开始')}<ArrowRight size={16}/></button></div></section></main>
    <ViralFooter/>
    <TemplateGenerator key={template.id} template={template} open={open} onOpenChange={setOpen} preferModel="MiniMax-H3"/>
  </div>;
}
