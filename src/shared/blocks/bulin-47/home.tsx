'use client';

/* eslint-disable @next/next/no-img-element */

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';
import { ArrowRight, Flame, Maximize, Mic, Play, Smartphone, Users, Video, Volume2, VolumeX } from 'lucide-react';
import { useLocale } from 'next-intl';
import { Link } from '@/core/i18n/navigation';
import { TemplateGenerator } from '@/shared/blocks/viral-home/generator';
import { ViralHeader } from '@/shared/blocks/viral-home/header';
import { ViralFooter } from '@/shared/blocks/viral-home/footer';
import { getVideoCostTable } from '@/shared/lib/video-cost';
import { useAppContext } from '@/shared/contexts/app';
import { bulin47Templates, type BulinTemplate } from './templates';
import { BULIN_FAQ } from './faq';
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

export function Bulin47Home({ creditsPerUsd = 10, videoCosts = getVideoCostTable() }: { creditsPerUsd?: number; videoCosts?: ReturnType<typeof getVideoCostTable> }) {
  const locale = useLocale();
  const zh = locale === 'zh';
  const t = (en: string, cn: string) => zh ? cn : en;
  const { user, setIsShowSignModal } = useAppContext();
  const [template, setTemplate] = useState<BulinTemplate>(bulin47Templates[0]);
  const [open, setOpen] = useState(false);
  const choose = (item: BulinTemplate = bulin47Templates[0]) => { setTemplate(item); setOpen(true); };
  const start = () => user ? choose() : setIsShowSignModal(true);
  const madeBy = ['4.7M plays', '6.1M plays', '3.4M plays', '2.8M plays', '5.2M plays'];
  const features = [
    [Mic, t('The red-light freestyle','红光街头说唱'), t('Restaurant entrance, portable speaker on a shoulder, phones in the crowd — the October 2026 clip, staged for your photo.','餐厅门口、肩上音箱、人群举着手机——2026 年 10 月那条视频的场景，已经按你的照片搭好。')],
    [Video, t('One photo, you freestyle','一张照片，你来接'), t('Your face replaces the person in the middle. The speaker, the crowd and the handheld camera stay.','中间的人换成你的脸。音箱、围观的人和手持镜头都留着。')],
    [Users, t('Five ways into the same clip','同一条片子的五种进法'), t('Street, suit, night crowd, sharp vest, and a pet in the freestyle spot.','街头原版、西装、夜场人群、马甲绅士，以及把宠物放进说唱位。')],
    [Smartphone, t('Vertical, ready to post','竖屏，拿去就能发'), t('Opens on 9:16. Add the trend sound in TikTok or Reels so the post sits with the rest of the format.','默认 9:16。发到 TikTok 或 Reels 时加上热梗原声，帖子才会进同一条趋势。')],
  ] as const;
  const steps = [
    [t('Pick a template','选择模板'), t('Five variants of the same red-lit freestyle. Pick the one that fits the photo.','同一条红光 freestyle 的五个变体。选一个和照片最配的。')],
    [t('Upload one photo','上传一张照片'), t('Front-facing, face clear, decent light. The pet template wants one photo of the animal.','正脸、五官清楚、光线别太暗。宠物版上传一张动物的照片。')],
    [t('Set ratio, resolution, length','选画幅、清晰度和时长'), t('9:16 is the default. The credit cost updates before you generate.','默认 9:16。积分会在你点生成之前按选项更新。')],
    [t('Download and post','下载并发布'), t('Export the MP4, then add the Bulin 47 trend audio in TikTok or Reels.','导出 MP4，再到 TikTok 或 Reels 里加上 Bulin 47 的热梗音频。')],
  ];
  const faq = BULIN_FAQ[zh ? 'zh' : 'en'];
  const reviews = [
    [t('Jake M.','Jake M.'),'“Dropped my own face into the red-light freestyle and posted it the same night. The speaker and the crowd are what make people stop.”','@jakemakes · 412K followers','/avatars/review-1.jpg'],
    [t('Sofia R.','Sofia R.'),'“I needed five versions for the meme page. One photo each, same scene, different outfits. The queue kept up.”','Runs @dailydoseofmemes','/avatars/review-2.jpg'],
    [t('Tom K.','Tom K.'),'“Put the cat in the freestyle spot. No editor, just the phone browser. That one outperformed the human clips.”','@tompetsdaily · 208K followers','/avatars/review-3.jpg'],
    [t('Liam P.','Liam P.'),'“The suit version is the one my group chat actually shared. Vertical export, no crop, straight to Reels.”','@liam.plays · 96K followers','/avatars/review-4.jpg'],
    [t('Emma L.','Emma L.'),'“I am not a video editor. Uploaded one photo, picked Street Freestyle, and it looked like a phone video instead of an ad.”','@emmadaybyday · 340K followers','/avatars/review-5.jpg'],
    [t('Marcus J.','Marcus J.'),'“9:16 from the start is the part that matters. I was not fighting a landscape render just to post a Short.”','@marcusmakes · 155K followers','/avatars/review-6.jpg'],
  ] as const;
  return <div className="viral-home">
    <ViralHeader onStart={start}/>
    <main>
      <section className="hero"><div className="container"><div className="hero-badge"><Flame size={16}/><span>#bulin47 is trending</span><span className="bar"/><b>50M+ views</b></div><h1>{t('Step into the viral ', '60 秒进入爆火的 ')}<span className="hl">Bulin 47</span>{t(' freestyle in 60 seconds', ' 街头 freestyle')}</h1><p className="lead">{t('Upload one front-facing photo and take the spot in the red-lit freestyle — the speaker, the crowd and the phone camera stay.', '上传一张正面照，站进红光下的 freestyle——音箱、人群和手机镜头都留在原位。')}</p><div className="hero-cta"><button className="btn btn-primary btn-lg" onClick={start}>{user ? t('Create Now', '立即创作') : t('Get Started', '立即开始')}<ArrowRight size={16}/></button><a className="btn btn-outline btn-lg" href="#templates">{t('See templates', '浏览模板')}</a></div><div className="hero-proof"><div className="avatars" aria-hidden="true"><span/><span/><span/><span/></div><span><b>50,000,000+</b> {t('views on the original trend', '次原趋势播放')}</span></div></div></section>
      <section className="sec templates-section" id="templates"><div className="container"><div className="sec-head"><p className="kick">{t('Templates','模板')}</p><h2>{t('Pick a look, upload one photo, done','选一个造型、传一张照片，一键出片')}</h2><p className="sub">{t('Every card is the same freestyle with a different cast. Click one to open the generator.','每张卡片都是同一条 freestyle，换的是中间的人。点击卡片打开生成器。')}</p></div><div className="grid3">{bulin47Templates.map((item, index) => <article className="tcard" key={item.id}><button className="tv" aria-label={`${t('Use','使用')} ${item.name[zh ? 1 : 0]}`} onClick={() => choose(item)} style={{ '--g1': item.colors[0], '--g2': item.colors[1] } as CSSProperties}><TemplateVideo id={item.id} colors={item.colors}/>{index === 0 && <span className="hot">HOT</span>}<span className="tv-expand"><Maximize size={18}/></span><span className="tv-play"><Play size={16}/></span><span className="tv-bar"><i/></span></button><div className="tmeta"><b>{item.name[zh ? 1 : 0]}</b><span>{madeBy[index]}</span></div><button className="use" onClick={() => choose(item)}>{t('Generate','立即生成')}</button></article>)}</div></div></section>
      <div className="logos"><p className="lbl">{t('Creators are posting ViralReel videos on','创作者们正在这些平台发布 ViralReel 视频')}</p><div className="row"><span className="soc tiktok"><PlatformIcon type="tiktok"/>TikTok</span><span className="soc youtube"><PlatformIcon type="youtube"/>YouTube Shorts</span><span className="soc instagram"><PlatformIcon type="instagram"/>Instagram Reels</span><span className="soc x"><PlatformIcon type="x"/>X / Twitter</span><span className="soc reddit"><PlatformIcon type="reddit"/>Reddit</span></div></div>
      <section className="stats"><div className="container stats-grid"><div><div className="statnum">50<em>M+</em></div><p>{t('Views on the source trend','原趋势播放量')}</p></div><div><div className="statnum">60<em>s</em></div><p>{t('Average render time','平均渲染时长')}</p></div><div><div className="statnum">4.8<em>★</em></div><p>{t('From 3,100+ reviews','来自 3,100+ 条评价')}</p></div><div><div className="statnum">{Math.min(...videoCosts.flatMap(row => row.costs.map(item => item.credits)))}<em className="wide-em">{t(' credits / video from', ' 积分 / 条起')}</em></div><p>{t(`Top-ups available · ${creditsPerUsd} credits = $1`,`随时可加购 · ${creditsPerUsd} 积分 = 1 美元`)}</p></div></div></section>
      <section className="sec sec-alt" id="what"><div className="container"><div className="sec-head"><p className="kick">{t('What is Bulin 47','Bulin 47 是什么')}</p><h2>{t('The freestyle people are remaking','大家正在重拍的那条 freestyle')}</h2><p className="sub">{t('Red LEDs, a speaker on a shoulder, phones in the crowd — rebuilt from one photo.','红光灯带、肩上的音箱、人群里的手机——一张照片重新搭出来。')}</p></div><div className="grid4">{features.map(([Icon,title,desc]) => <div className="feat" key={title}><div className="ic"><Icon size={20}/></div><h3>{title}</h3><p>{desc}</p></div>)}</div></div></section>
      <section className="sec" id="how"><div className="container"><div className="sec-head"><p className="kick">{t('How it works','使用教程')}</p><h2>{t('How to make a Bulin 47 AI video','如何制作 Bulin 47 AI 视频')}</h2><p className="sub">{t('From one photo to a vertical clip in about a minute — no app, no editor.','一张照片到一条竖屏视频大约一分钟——不用装 App，不用会剪辑。')}</p></div><div className="grid4s">{steps.map(([title,desc],i) => <div className="step" key={title}><div className="num">{i+1}</div><h3>{title}</h3><p>{desc}</p></div>)}</div></div></section>
      <section className="sec"><div className="container"><div className="sec-head"><p className="kick">{t('Testimonials','用户评价')}</p><h2>{t('People are posting the freestyle','大家都在发这条 freestyle')}</h2><p className="sub">{t('…because one photo is enough to join before the sound peaks.','…因为一条音频见顶之前，一张照片就够上车。')}</p></div><div className="quote-viewport"><div className="quote-grid">{reviews.map(([name,quote,handle,img]) => <article className="qcard" key={name}><div className="stars">★★★★★</div><p>{quote}</p><div className="who"><span className="av" style={{ backgroundImage: `url(${img})` }}/><div><b>{name}</b><span>{handle}</span></div></div></article>)}{reviews.map(([name,quote,handle,img]) => <article className="qcard" aria-hidden="true" key={'b-'+name}><div className="stars">★★★★★</div><p>{quote}</p><div className="who"><span className="av" style={{ backgroundImage: `url(${img})` }}/><div><b>{name}</b><span>{handle}</span></div></div></article>)}</div></div></div></section>
      <section className="sec" id="guide"><div className="container guide"><div className="sec-head"><p className="kick">{t('Guide','指南')}</p><h2>{t('Bulin 47 AI template: the complete guide','Bulin 47 AI 模板完全指南')}</h2></div>
        <figure className="guide-fig"><img src="/templates/bulin-47-og.jpg" alt="Bulin 47 AI template preview — a freestyle at a red-lit restaurant entrance" width={1200} height={630} loading="lazy"/><figcaption>{t('The Bulin 47 AI template puts your photo into the red-lit street freestyle.','Bulin 47 AI 模板把你的照片放进红光下的街头 freestyle。')}</figcaption></figure>
        <h3>{t('What is the Bulin 47 AI template?','什么是 Bulin 47 AI 模板？')}</h3>
        <p>{t('Bulin 47 is the stage name of Dominican dembow artist Hancel Teodoro Vargas Reynoso. On 2 October 2026, creator Kevin Wai stopped him outside a restaurant in Spain, speaker on his shoulder, and Bulin answered a dembow beat with an improvised freestyle while everyone around filmed. The clip passed tens of millions of views. As an AI template, the format is a photo swap: your picture replaces the person in the middle, and the model keeps the red entrance, the speaker, the crowd and the shaky phone camera.','Bulin 47 是多米尼加 dembow 艺人 Hancel Teodoro Vargas Reynoso 的艺名。2026 年 10 月 2 日，创作者 Kevin Wai 在西班牙一家餐厅门口拦住他，肩上扛着音箱，Bulin 47 顺着一段 dembow 节奏即兴 freestyle，周围的人都在拍。这条片子播放量到了几千万。做成 AI 模板之后，它就是一次换人：你的照片替换中间的人，红光门口、音箱、人群和晃动的手机镜头留在场景里。')}</p>
        <h3>{t('Why the remakes took off','重拍为什么能传开')}</h3>
        <p>{t('The picture is recognizable in one second: red LEDs, a speaker at chest height, phones in the foreground. It is also a one-person format, so a friend, a parent or a pet can take the spot without a second photo. The camera has to stay rough. A smooth cinematic move makes it look like an ad and drops it out of the trend. The AI versions started around 6 October, including pet swaps, and the #bulin47freestyle tag was already in the tens of millions of views within a few days.','画面一秒就能认出来：红光灯带、胸口高度的音箱、前景里的手机。它还是单人格式，朋友、父母或者宠物都能上，不需要第二张照片。镜头必须保持粗糙。运镜一顺，看起来就像广告，也就脱离了这条趋势。AI 版本从 10 月 6 日左右开始出现，包括宠物换人，#bulin47freestyle 几天内播放量就到了几千万。')}</p>
        <h3>{t('How to get the best results','如何做出最佳效果')}</h3>
        <p>{t('Use one clear, front-facing photo. Even light matters more here than on other templates, because the red LEDs crush a dark face. Keep one subject in the frame. The beats people expect are short: a step into the circle, a gesture at the speaker, a look straight at the camera, then the crowd reacting. Generate a vertical clip, preview the face through the head turns, and post it with the trend sound while the audio is still climbing. Label the video as AI-generated where the platform asks.','用一张清晰的正面照。这里比其他模板更吃光线，红光会把偏暗的脸压没。画面里只留一个主体。大家期待的动作很短：走进圈里、对着音箱比划、直视镜头，然后人群起反应。生成竖屏，预览时看转头过程里的脸，趁音频还在上升期配上热梗声音发出去。平台要求标注 AI 生成时，按要求标。')}</p>
        <p className="guide-more"><Link href="/burning-bridges-ai-template">{t('Want the party-dance format? See the Burning Bridges AI template','想玩派对舞？看 Burning Bridges AI 模板')} →</Link></p>
      </div></section>
      <section className="sec sec-alt" id="faq"><div className="container"><div className="sec-head"><p className="kick">{t('FAQ','常见问题')}</p><h2>{t('Frequently asked questions about Bulin 47','关于 Bulin 47 的常见问题')}</h2></div><div className="faq-list">{faq.map(([question,answer],i) => <details key={question} open={i === 0}><summary>{question}</summary><p>{answer}</p></details>)}</div></div></section>
      <section className="final-cta sec-alt"><div className="container"><h2>{t('Ready to take the freestyle spot?','准备好站进 freestyle 了吗？')}</h2><p>{t('Upload one photo and join the red-light clip while the sound is still moving.','上传一张照片，趁这段声音还在传的时候进这条红光片子。')}</p><button className="btn btn-primary btn-lg" onClick={() => choose()}>{t('Upload 1 photo — start now','上传 1 张照片，立即开始')}<ArrowRight size={16}/></button></div></section>
    </main>
    <ViralFooter/>
    <TemplateGenerator key={template.id} template={template} open={open} onOpenChange={setOpen} preferModel="MiniMax-H3"/>
  </div>;
}
