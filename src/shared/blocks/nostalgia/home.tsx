'use client';

/* eslint-disable @next/next/no-img-element */

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';
import { ArrowRight, Dices, Flame, Maximize, Play, Smartphone, Users, Video, Volume2, VolumeX } from 'lucide-react';
import { useLocale } from 'next-intl';
import { track } from '@/shared/lib/analytics';
import { Link } from '@/core/i18n/navigation';
import { TemplateGenerator } from '@/shared/blocks/viral-home/generator';
import { ViralHeader } from '@/shared/blocks/viral-home/header';
import { ViralFooter } from '@/shared/blocks/viral-home/footer';
import { buildHowToJsonLdFromSteps } from '@/shared/lib/howto-schema';
import { getVideoCostTable } from '@/shared/lib/video-cost';
import { getNostalgiaFaq } from './faq';
import { NostalgiaLinkCluster } from './link-cluster';
import { NOSTALGIA_HOW_TO_STEPS } from './steps';
import { nostalgiaTemplates, type NostalgiaTemplate } from './templates';
import '@/shared/blocks/viral-home/home.css';

function PlatformIcon({ type }: { type: 'tiktok' | 'youtube' | 'instagram' | 'x' | 'reddit' }) {
  const paths: Record<string, ReactNode> = {
    tiktok: <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.9 2.9 0 1 1-2.31-2.84V9.25a6.35 6.35 0 1 0 5.76 6.32V8.69a8.16 8.16 0 0 0 4.77 1.52V6.79a4.85 4.85 0 0 1-1-.1z" />,
    youtube: <><path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3.02 3.02 0 0 0 .5 6.19C0 8.07 0 12 0 12s0 3.93.5 5.81a3.02 3.02 0 0 0 2.12 2.14c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 0 0 2.12-2.14C24 15.93 24 12 24 12s0-3.93-.5-5.81z"/><path fill="#fff" d="m9.55 15.57 6.27-3.57-6.27-3.57z"/></>,
    instagram: <><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></>,
    x: <path d="M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.41l-5.8-7.58-6.64 7.58H.47l8.6-9.83L0 1.15h7.59l5.24 6.93zm-1.29 19.5h2.04L6.49 3.24H4.3z" />,
    reddit: <path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm5.01 4.74a1.25 1.25 0 1 0-1.95.94l-2.91-.62a.34.34 0 0 0-.41.26l-.9 4.17c-1.87.06-3.56.62-4.79 1.5a1.76 1.76 0 1 0-.81 3.33c-.03.17-.05.35-.05.53 0 2.7 3.12 4.87 7 4.87s7-2.17 7-4.87c0-.18-.02-.36-.04-.52a1.76 1.76 0 0 0-2.95-1.11c-1.2-.86-2.85-1.42-4.68-1.49l.8-3.75 2.6.55a1.25 1.25 0 0 0 2.09-1.09zM8.6 13.02a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zm6.8 0a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 2.5 0z" />,
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

export function NostalgiaHome({ creditsPerUsd = 12, videoCosts = getVideoCostTable(), pageUrl }: { creditsPerUsd?: number; videoCosts?: ReturnType<typeof getVideoCostTable>; pageUrl?: string }) {
  const locale = useLocale();
  const zh = locale === 'zh';
  const t = (en: string, cn: string) => zh ? cn : en;
  useEffect(() => { track('view_template', { template: 'nostalgia_capcut' }); }, []);
  const [template, setTemplate] = useState<NostalgiaTemplate>(nostalgiaTemplates[0]);
  const focusGenerator = () => { document.getElementById('generator')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); };
  const choose = (item: NostalgiaTemplate = nostalgiaTemplates[0]) => { track('click_generate', { template: 'nostalgia_capcut', variant: item.id }); setTemplate(item); focusGenerator(); };
  const start = () => focusGenerator();
  const features = [
    [Dices, t('You, inside the old ad', '你，走进那支老广告'), t('AI recreates a classic candy-bar TV spot with your face as the star — the bite, the grin, the whole pitch.','AI 复刻一支经典糖果电视广告，你的脸就是主角——咬一口、对镜头笑，整套推销。')],
    [Video, t('The retro look, built in', '复古观感，全部内置'), t('Letterboxed SD picture, analog noise, warm grading, red jingle text, the pov caption format — everything the posts share.','黑边 SD 画质、模拟噪点、暖调、红色 jingle 文字、pov 文案格式——爆款帖共有的元素全部内置。')],
    [Users, t('Five lead roles', '五个主角位'), t('Classic Sweetheart, Blonde Bob, Long Hair, Butterfly Necklace, or Star \'85 — same ad, different star.','经典女主版、金发波波版、长发少年版、蝴蝶项链版或星条 85 版——同一支广告，换的是主角。')],
    [Smartphone, t('Vertical, ready to post', '竖屏，拿去就能发'), t('8 seconds, 9:16, loops like the trend posts. Add the trend sound in TikTok when you post so the clip joins the feed.','8 秒，9:16，和趋势帖一样可循环。发布时在 TikTok 加趋势原声，视频才会进同一条信息流。')],
  ] as const;
  const steps = NOSTALGIA_HOW_TO_STEPS.map((step) => [zh ? step.name.zh : step.name.en, zh ? step.text.zh : step.text.en] as const);
  const faq = getNostalgiaFaq(zh, { videoCosts, creditsPerUsd });
  const howToJsonLd = buildHowToJsonLdFromSteps({
    name: t('How to make a NostalgIA AI video', '如何制作 NostalgIA AI 视频'),
    description: t('Upload one photo on ViralReel, generate a recreated retro TV commercial with you as the star, download the MP4, then add the trend sound and the AI label on TikTok, Reels, or Shorts.', '在 ViralReel 上传一张照片，生成以你为主角的复古老电视广告，下载 MP4，再在 TikTok、Reels 或 Shorts 上加趋势原声和 AI 标注。'),
    url: pageUrl,
    steps: steps.map(([name, text]) => ({ name, text })),
  });
  return <div className="viral-home">{howToJsonLd ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} /> : null}
    <ViralHeader onStart={start}/>
    <main>
      <section className="hero"><div className="container"><div className="hero-badge"><Flame size={16}/><span>#nostalgia is trending</span></div><h1>{t('How to make a ', '如何在 ViralReel 制作 ')}<span className="hl">NostalgIA CapCut</span>{t(' AI video on ViralReel', ' 复古老广告 AI 视频')}</h1><TemplateGenerator key={template.id} template={template} open embedded onOpenChange={() => {}}/></div></section>
      <section className="sec templates-section" id="templates"><div className="container"><div className="sec-head"><p className="kick">{t('Templates','模板')}</p><h2>{t('Same retro ad, five lead roles','同一支复古广告，五个主角位')}</h2><p className="sub">{t('Every card is the recreated TV commercial with a different lead character. Click one to open the generator.','每张卡片都是同一支复刻电视广告，换的是主角造型。点击卡片打开生成器。')}</p></div><div className="grid3">{nostalgiaTemplates.map((item, index) => <article className="tcard" key={item.id}><button className="tv tv-full" aria-label={`${t('Use','使用')} ${item.name[zh ? 1 : 0]}`} onClick={() => choose(item)} style={{ '--g1': item.colors[0], '--g2': item.colors[1] } as CSSProperties}><TemplateVideo id={item.id} colors={item.colors}/>{index === 0 && <span className="hot">HOT</span>}<span className="tv-expand"><Maximize size={18}/></span><span className="tv-play"><Play size={16}/></span><span className="tv-bar"><i/></span></button><div className="tmeta"><b>{item.name[zh ? 1 : 0]}</b></div><button className="use" onClick={() => choose(item)}>{t('Generate','立即生成')}</button></article>)}</div></div></section>
      <div className="logos"><p className="lbl">{t('Creators are posting ViralReel videos on','创作者们正在这些平台发布 ViralReel 视频')}</p><div className="row"><span className="soc tiktok"><PlatformIcon type="tiktok"/>TikTok</span><span className="soc youtube"><PlatformIcon type="youtube"/>YouTube Shorts</span><span className="soc instagram"><PlatformIcon type="instagram"/>Instagram Reels</span><span className="soc x"><PlatformIcon type="x"/>X / Twitter</span><span className="soc reddit"><PlatformIcon type="reddit"/>Reddit</span></div></div>
      <section className="stats"><div className="container stats-grid"><div><div className="statnum">8<em>s</em></div><p>{t('Clip length, like the trend','片长与趋势一致')}</p></div><div><div className="statnum">9:16</div><p>{t('Vertical export for TikTok, Reels and Shorts','竖屏导出，适配 TikTok、Reels、Shorts')}</p></div><div><div className="statnum">{Math.min(...videoCosts.flatMap(row => row.costs.map(item => item.credits)))}<em className="wide-em">{t(' credits / video from', ' 积分 / 条起')}</em></div><p>{t(`Top-ups available · ${creditsPerUsd} credits = $1`,`随时可加购 · ${creditsPerUsd} 积分 = 1 美元`)}</p></div></div></section>
      <section className="sec sec-alt" id="what"><div className="container"><div className="sec-head"><p className="kick">{t('What is NostalgIA','NostalgIA 是什么')}</p><h2>{t('The retro-ad trend everyone is remaking','大家正在重拍的复古广告趋势')}</h2><p className="sub">{t('One photo, one recreated TV commercial, and you finally star in the ad you remember.','一张照片，一支复刻电视广告，你终于当上记忆里那条广告的主角。')}</p></div><div className="grid4">{features.map(([Icon,title,desc]) => <div className="feat" key={title}><div className="ic"><Icon size={20}/></div><h3>{title}</h3><p>{desc}</p></div>)}</div></div></section>
      <section className="sec" id="how"><div className="container"><div className="sec-head"><p className="kick">{t('How it works','使用教程')}</p><h2>{t('How to make a NostalgIA AI video','如何制作 NostalgIA AI 视频')}</h2><p className="sub">{t('From one photo to a vertical retro ad in a few minutes — no app, no editor, no prompt.','一张照片到一条竖屏复古广告只要几分钟——不用装 App，不用会剪辑，不用写提示词。')}</p></div><div className="grid4s">{steps.map(([title,desc],i) => <div className="step" key={title}><div className="num">{i+1}</div><h3>{title}</h3><p>{desc}</p></div>)}</div></div></section>
      <section className="sec" id="guide"><div className="container guide"><div className="sec-head"><p className="kick">{t('Guide','指南')}</p><h2>{t('NostalgIA CapCut: what the trend is, and how to make your own','NostalgIA CapCut：趋势是什么，以及怎么做你自己的')}</h2></div>
        <figure className="guide-fig"><img src="/templates/nostalgia-og.jpg" alt="NostalgIA CapCut template on ViralReel — you inside a recreated retro TV ad" width={1200} height={630} loading="lazy"/><figcaption>{t('Make the NostalgIA retro-ad video on ViralReel (viralreel.app) from one photo.','在 ViralReel（viralreel.app）用一张照片制作 NostalgIA 复古老广告视频。')}</figcaption></figure>
        <h3>{t('Short answer','简短回答')}</h3>
        <p>{t('A NostalgIA AI video is a new 9:16 parody commercial you make on ViralReel at https://www.viralreel.app/nostalgia-ai-template from one photo. The lead roles are Classic Sweetheart, Blonde Bob, Long Hair, Butterfly Necklace, and Star \'85: a recreated retro chocolate-bar TV spot with the letterboxed SD look, not a real commercial and not a brand ad. ViralReel does not license the trend audio and is not affiliated with the trend creators or any brand. Add the sound in TikTok, Reels, or Shorts and label the post as AI.','NostalgIA AI 视频是你在 ViralReel 用一张照片做的新 9:16 戏仿广告：https://www.viralreel.app/zh/nostalgia-ai-template 。主角位是经典女主版、金发波波版、长发少年版、蝴蝶项链版和星条 85 版：复刻的复古巧克力棒电视广告，带黑边 SD 画质——不是真实广告，也不是品牌广告。ViralReel 不授权趋势原声，与趋势作者和任何品牌无关。请在 TikTok、Reels 或 Shorts 里加原声，并把帖子标成 AI。')}</p>
        <h3>{t('What is the NostalgIA trend?','NostalgIA 趋势是什么？')}</h3>
        <p>{t('The NostalgIA trend is a TikTok video format from late October 2026: AI-generated clips styled as recreated retro TV commercials. A letterboxed SD frame, a sunny suburban backyard, a chocolate crisp bar, one bite, then a straight-to-camera pitch with a red jingle text card — captioned "pov: you always wanted to know how you\'d look in this ad." The name is a pun on nostalgia plus IA (the Spanish/Portuguese abbreviation for AI).','NostalgIA 趋势是 2026 年 10 月底出现的 TikTok 视频格式：AI 生成的、仿复古老电视广告的片段。黑边 SD 画框、阳光后院、巧克力棒、咬一口，然后对镜头来一段推销，红色 jingle 文字卡一闪而过——文案是「pov: you always wanted to know how you\'d look in this ad」。名字是 nostalgia 加 IA（西语/葡语里 AI 的缩写）的双关。')}</p>
        <h3>{t('Is NostalgIA the 2023 Bad Bunny song?','NostalgIA 是 2023 年 Bad Bunny 那首歌吗？')}</h3>
        <p>{t('No — and this distinction matters when you search. The 2023 "NostalgIA" is an AI-voice reggaeton track by the Chilean producer FlowGPT that went viral for cloning Bad Bunny\'s singing. The 2026 NostalgIA CapCut trend is a completely different meme: the retro-ad video format. Same word, unrelated memes; search results mix them, so check which one a page is actually about.','不是——搜索时这个区分很重要。2023 年的《NostalgIA》是智利制作人 FlowGPT 的 AI 换声雷鬼顿歌曲，因模仿 Bad Bunny 嗓音走红。2026 年的 NostalgIA CapCut 是完全不同的梗：复古广告视频格式。同一个词，两个不相干的梗；搜索结果经常混在一起，看页面时要分清。')}</p>
        <h3>{t('Why did the NostalgIA meme go viral?','NostalgIA 梗为什么会爆火？')}</h3>
        <p>{t('Because the variable is exactly one thing: you. The set, the outfit, the prop, the jingle text — nothing else changes, so every remake reads at a glance and one photo is the whole production. Nostalgia was already TikTok\'s dominant aesthetic, and this format turns it personal: the 2000s broadcast era becomes something you can star in. The AI label in the corner is part of the joke, not a flaw — the ad never existed.','因为变量只有一个：你。布景、造型、道具、jingle 文字都不变，每条重制一眼就能读懂，一张照片就是全部制作成本。怀旧本来就是 TikTok 的主流审美，而这个格式把它变成了私人物品：2000 年代的电视广播时代，人人都能主演。角落的 AI 标注是梗的一部分，不是瑕疵——这支广告从未存在过。')}</p>
        <h3>{t('Where can I generate a NostalgIA AI video?','在哪里可以生成 NostalgIA AI 视频？')}</h3>
        <p>{t('On ViralReel, at https://www.viralreel.app/nostalgia-ai-template. ViralReel (viralreel.app) is an independent AI video template site. You upload one photo in the browser. You do not install an app, write a prompt, or edit anything. The template fixes the length at 8 seconds and opens on 9:16 — the vertical ratio TikTok, Instagram Reels, and YouTube Shorts use for this trend.','在 ViralReel：https://www.viralreel.app/zh/nostalgia-ai-template 。ViralReel（viralreel.app）是独立的 AI 视频模板站。在浏览器里上传一张照片即可，不用装 App、写提示词或做剪辑。模板时长固定 8 秒，默认 9:16——也就是这条趋势在 TikTok、Instagram Reels 和 YouTube Shorts 上使用的竖屏画幅。')}</p>
        <h3>{t('How do you make a NostalgIA AI video?','怎么制作 NostalgIA AI 视频？')}</h3>
        <ol>{steps.map(([name, text]) => <li key={name}><strong>{name}.</strong> {text}</li>)}</ol>
        <p className="guide-more"><Link href="/nostalgia-ai">{t('NostalgIA AI','NostalgIA AI')}</Link> · <Link href="/nostalgia-template">{t('The five template variants','五个模板变体')}</Link> · <Link href="/nostalgia-capcut">{t('NostalgIA CapCut comparison','NostalgIA CapCut 对照')}</Link> · <Link href="/nostalgia-tiktok">{t('TikTok posting guide','TikTok 发布指南')}</Link> · <Link href="/how-youd-look-in-this-ad">{t('The pov caption, explained','pov 文案详解')}</Link> · <Link href="/pricing">{t('Pricing','定价')}</Link> · <Link href="/">{t('All templates','全部模板')}</Link></p>
        <h3>{t('Is this the real chocolate-bar commercial?','这是真的巧克力棒广告吗？')}</h3>
        <p>{t('No. The style recreates classic candy-bar jingle ads — the sunny backyard, the bite, the pitch — but the output is an original parody: the bar prop has no readable brand logos, nothing like it ever aired, and the star is whoever uploaded the photo. ViralReel is not affiliated with or licensed by the original brand, and the video should be posted with the AI label on.','不是。它复刻的是经典糖果 jingle 广告的风格——阳光后院、咬一口、对镜头推销——但成片是原创戏仿：巧克力棒道具没有可读品牌标识，没有哪条真的播过，主角就是上传照片的人。ViralReel 与原品牌方没有隶属或授权关系，发布时请打开 AI 标注。')}</p>
        <p className="guide-more"><Link href="/nostalgia-meme">{t('The meme, explained','梗详解')}</Link> · <Link href="/nostalgia-trend">{t('The trend, explained','趋势详解')}</Link> · <Link href="/blog/october-2026-viral-ai-meme-videos">{t('October 2026 meme roundup','2026 年 10 月梗视频盘点')}</Link> · <Link href="/blog/what-is-nostalgia-capcut">{t('What is NostalgIA CapCut','NostalgIA CapCut 是什么')}</Link> · <Link href="/blog/how-to-make-nostalgia-ai-video">{t('How to make a NostalgIA AI video','怎么制作 NostalgIA AI 视频')}</Link> · <Link href="/blog/what-does-nostalgia-ai-mean">{t('What NostalgIA AI means','NostalgIA AI 是什么意思')}</Link></p>
      </div></section>
      <section className="sec sec-alt" id="faq"><div className="container"><div className="sec-head"><p className="kick">{t('FAQ','常见问题')}</p><h2>{t('Frequently asked questions about NostalgIA','关于 NostalgIA 的常见问题')}</h2></div><div className="faq-list">{faq.map(([question,answer],i) => <details key={question} open={i === 0}><summary>{question}</summary><p>{answer}</p></details>)}</div><p className="guide-more"><Link href="/nostalgia-ai">{t('NostalgIA AI','NostalgIA AI')}</Link> · <Link href="/nostalgia-template">{t('Template variants','模板变体')}</Link> · <Link href="/nostalgia-meme">{t('The meme','梗详解')}</Link> · <Link href="/pricing">{t('Pricing','定价')}</Link> · <Link href="/">{t('Homepage','首页')}</Link> · <Link href="/bby-wow-ai-dance-template">{t('Bby Wow','Bby Wow')}</Link></p></div></section>
      <section className="sec" id="related"><div className="container"><div className="sec-head"><p className="kick">{t('Related','相关')}</p><h2>{t('NostalgIA guides on ViralReel','ViralReel 上的 NostalgIA 指南')}</h2></div><NostalgiaLinkCluster zh={zh} currentPath="/nostalgia-ai-template" /></div></section>
      <section className="final-cta sec-alt"><div className="container"><h2>{t('Ready to star in the ad?','准备好当广告主角了吗？')}</h2><p>{t('Upload one photo and step into the retro commercial while the sound is still moving.','上传一张照片，趁这段声音还在传的时候走进那支复古老广告。')}</p><button className="btn btn-primary btn-lg" onClick={start}>{t('Upload 1 photo — start now','上传 1 张照片，立即开始')}<ArrowRight size={16}/></button></div></section>
    </main>
    <ViralFooter/>
  </div>;
}
