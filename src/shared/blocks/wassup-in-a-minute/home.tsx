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
import { getWassupFaq } from './faq';
import { WassupLinkCluster } from './link-cluster';
import { WASSUP_HOW_TO_STEPS } from './steps';
import { wassupInAMinuteTemplates, type WassupInAMinuteTemplate } from './templates';
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

export function WassupInAMinuteHome({ creditsPerUsd = 12, videoCosts = getVideoCostTable(), pageUrl }: { creditsPerUsd?: number; videoCosts?: ReturnType<typeof getVideoCostTable>; pageUrl?: string }) {
  const locale = useLocale();
  const zh = locale === 'zh';
  const t = (en: string, cn: string) => zh ? cn : en;
  useEffect(() => { track('view_template', { template: 'wassup_in_a_minute' }); }, []);
  const [template, setTemplate] = useState<WassupInAMinuteTemplate>(wassupInAMinuteTemplates[0]);
  const focusGenerator = () => { document.getElementById('generator')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); };
  const choose = (item: WassupInAMinuteTemplate = wassupInAMinuteTemplates[0]) => { track('click_generate', { template: 'wassup_in_a_minute', variant: item.id }); setTemplate(item); focusGenerator(); };
  const start = () => focusGenerator();
  const features = [
    [Dices, t('The sway on the beat', '踩着节拍的摇摆'), t('Two sways per second from the planted feet, head and shoulders bobbing just behind — the exact motion the viral edits use.','每秒两次、从脚底起的左右摇摆，头和肩膀慢半拍跟上——和爆款剪辑完全同款。')],
    [Video, t('One photo, you are the drawing', '一张照片，你就是画中人'), t('Your face, hair, and skin tone become an original streetwear anime character. No show characters, no fan-art reuploads.','你的脸、发型和肤色变成原创街服动漫形象。不用动漫角色，不搬运粉丝画稿。')],
    [Users, t('Five outfits, same white room', '五种造型，同一面白墙'), t('Money Fan, Puffer Classic, All Black, Jersey Look, or Heavyweight — pick the fit, keep the trend.','甩钱原版、黑羽绒经典、全黑装、球衣版或大块头——选造型，不换趋势。')],
    [Smartphone, t('Vertical, ready to post', '竖屏，拿去就能发'), t('Opens on 9:16 for TikTok, Reels, and Shorts. Add the "wassup in a minute" sound when you post so the clip joins the trend.','默认 9:16，适配 TikTok、Reels 和 Shorts。发布时加上「wassup in a minute」原声，视频才会进同一条趋势。')],
  ] as const;
  const steps = WASSUP_HOW_TO_STEPS.map((step) => [zh ? step.name.zh : step.name.en, zh ? step.text.zh : step.text.en] as const);
  const faq = getWassupFaq(zh, { videoCosts, creditsPerUsd });
  const howToJsonLd = buildHowToJsonLdFromSteps({
    name: t('How to make a wassup in a minute AI video', '如何制作 wassup in a minute AI 视频'),
    description: t('Upload one photo on ViralReel, generate a swaying streetwear anime character on a white background, download the MP4, then add the trend sound and the AI label on TikTok, Reels, or Shorts.', '在 ViralReel 上传一张照片，生成白底摇摆街服动漫角色，下载 MP4，再在 TikTok、Reels 或 Shorts 上加上热梗原声和 AI 标注。'),
    url: pageUrl,
    steps: steps.map(([name, text]) => ({ name, text })),
  });
  return <div className="viral-home">{howToJsonLd ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} /> : null}
    <ViralHeader onStart={start}/>
    <main>
      <section className="hero"><div className="container"><div className="hero-badge"><Flame size={16}/><span>#wassupinaminute is trending</span></div><h1>{t('How to make a ', '如何在 ViralReel 制作 ')}<span className="hl">Wassup in a Minute</span>{t(' AI video on ViralReel', ' AI 摇摆动画视频')}</h1><TemplateGenerator key={template.id} template={template} open embedded onOpenChange={() => {}}/></div></section>
      <section className="sec templates-section" id="templates"><div className="container"><div className="sec-head"><p className="kick">{t('Templates','模板')}</p><h2>{t('Same white background, same sway','同一面白墙，同一种摇摆')}</h2><p className="sub">{t('Every card is the Atlanta Lock sway in a different outfit. Click one to open the generator.','每张卡片都是同一套 Atlanta Lock 摇摆，换的是造型。点击卡片打开生成器。')}</p></div><div className="grid3">{wassupInAMinuteTemplates.map((item, index) => <article className="tcard" key={item.id}><button className="tv tv-full" aria-label={`${t('Use','使用')} ${item.name[zh ? 1 : 0]}`} onClick={() => choose(item)} style={{ '--g1': item.colors[0], '--g2': item.colors[1] } as CSSProperties}><TemplateVideo id={item.id} colors={item.colors}/>{index === 0 && <span className="hot">HOT</span>}{'credit' in item && item.credit && <span className="tv-credit">© {item.credit}</span>}<span className="tv-expand"><Maximize size={18}/></span><span className="tv-play"><Play size={16}/></span><span className="tv-bar"><i/></span></button><div className="tmeta"><b>{item.name[zh ? 1 : 0]}</b></div><button className="use" onClick={() => choose(item)}>{t('Generate','立即生成')}</button></article>)}</div></div></section>
      <div className="logos"><p className="lbl">{t('Creators are posting ViralReel videos on','创作者们正在这些平台发布 ViralReel 视频')}</p><div className="row"><span className="soc tiktok"><PlatformIcon type="tiktok"/>TikTok</span><span className="soc youtube"><PlatformIcon type="youtube"/>YouTube Shorts</span><span className="soc instagram"><PlatformIcon type="instagram"/>Instagram Reels</span><span className="soc x"><PlatformIcon type="x"/>X / Twitter</span><span className="soc reddit"><PlatformIcon type="reddit"/>Reddit</span></div></div>
      <section className="stats"><div className="container stats-grid"><div><div className="statnum">10<em>s</em></div><p>{t('Clip length, like the trend','片长与趋势一致')}</p></div><div><div className="statnum">9:16</div><p>{t('Vertical export for TikTok, Reels and Shorts','竖屏导出，适配 TikTok、Reels、Shorts')}</p></div><div><div className="statnum">{Math.min(...videoCosts.flatMap(row => row.costs.map(item => item.credits)))}<em className="wide-em">{t(' credits / video from', ' 积分 / 条起')}</em></div><p>{t(`Top-ups available · ${creditsPerUsd} credits = $1`,`随时可加购 · ${creditsPerUsd} 积分 = 1 美元`)}</p></div></div></section>
      <section className="sec sec-alt" id="what"><div className="container"><div className="sec-head"><p className="kick">{t('What is Wassup in a Minute','Wassup in a Minute 是什么')}</p><h2>{t('The swaying anime edit everyone is remaking','大家正在重拍的摇摆动漫剪辑')}</h2><p className="sub">{t('Hand-drawn streetwear characters, a white background, a jersey-club beat — rebuilt from one photo.','手绘风街服角色、一面白墙、一段 jersey club——一张照片重新搭出来。')}</p></div><div className="grid4">{features.map(([Icon,title,desc]) => <div className="feat" key={title}><div className="ic"><Icon size={20}/></div><h3>{title}</h3><p>{desc}</p></div>)}</div></div></section>
      <section className="sec" id="how"><div className="container"><div className="sec-head"><p className="kick">{t('How it works','使用教程')}</p><h2>{t('How to make a wassup in a minute AI video','如何制作 wassup in a minute AI 视频')}</h2><p className="sub">{t('From one photo to a vertical clip in a few minutes — no app, no editor, no keyframes.','一张照片到一条竖屏视频只要几分钟——不用装 App，不用会剪辑，不用打关键帧。')}</p></div><div className="grid4s">{steps.map(([title,desc],i) => <div className="step" key={title}><div className="num">{i+1}</div><h3>{title}</h3><p>{desc}</p></div>)}</div></div></section>
      <section className="sec" id="guide"><div className="container guide"><div className="sec-head"><p className="kick">{t('Guide','指南')}</p><h2>{t('Wassup in a Minute: where the trend came from, and how to make your own','Wassup in a Minute：趋势从哪来，以及怎么做你自己的')}</h2></div>
        <figure className="guide-fig"><img src="/templates/wassup-in-a-minute-og.jpg" alt="Wassup in a Minute template on ViralReel — swaying streetwear anime character on white" width={1200} height={630} loading="lazy"/><figcaption>{t('Make the wassup in a minute sway edit on ViralReel (viralreel.app) from one photo.','在 ViralReel（viralreel.app）用一张照片制作 wassup in a minute 摇摆动画。')}</figcaption></figure>
        <h3>{t('What is the wassup in a minute trend?','wassup in a minute 趋势是什么？')}</h3>
        <p>{t('The wassup in a minute trend is a TikTok animation edit from late October 2026: hand-drawn anime characters in baggy streetwear — puffer jackets, chains, baggy jeans — sway side to side on a pure white background to a jersey-club beat. The sound carries the line "wassup, been a minute", which most people hear as "wassup in a minute", and that mishearing became the trend\'s name. Fans call the drawing style Atlanta Lock.','wassup in a minute 是 2026 年 10 月下旬爆火的 TikTok 动画剪辑：手绘风街服动漫角色（黑色羽绒服、链子、阔腿牛仔裤）在纯白背景上按 jersey club 节拍左右摇摆。原声里的歌词是「wassup, been a minute」，大多数人听成「wassup in a minute」，这个听写就成了趋势的名字。粉丝把这种画风叫 Atlanta Lock。')}</p>
        <h3>{t('Where did the wassup in a minute trend start?','wassup in a minute 趋势从哪来的？')}</h3>
        <p>{t('The look came first. For years, fans of the football anime Blue Lock drew its players as Atlanta rappers in puffer jackets and baggy jeans holding fanned-out cash — the style fans nickname Atlanta Lock. The sound is a jersey-club remix built on "From Time", the 2013 Drake song with Jhené Aiko, whose "wassup, been a minute" line became the trend audio. On 22 October 2026 the US animator @ristyisvalid posted several streetwear drawings swaying on a white background; the follow-up captioned "Wassup in a minute" passed a million views within days and named the trend. Through 24–25 October, fans redrew the edit with characters from other anime, and AI "upload one photo" tutorials pushed the format to anyone with a selfie.','画风先行。几年下来，《Blue Lock》足球动漫的粉丝一直把角色画成亚特兰大说唱歌手——羽绒服、阔腿裤、手挥一沓现金，也就是粉丝所说的 Atlanta Lock 画风。声音是取自 Drake 与 Jhené Aiko 2013 年《From Time》的 jersey club 混音，其中「wassup, been a minute」一句成了趋势原声。2026 年 10 月 22 日，美国动画师 @ristyisvalid 发布了几张街服角色在白底上摇摆的动画；次日标注「Wassup in a minute」的后续帖几天内破百万播放，趋势由此得名。10 月 24-25 日起，粉丝用其他动漫角色重绘这条剪辑，AI「上传一张照片」的教程让任何有自拍的人都能进场。')}</p>
        <h3>{t('Why did the wassup in a minute meme go viral?','wassup in a minute 梗为什么会爆火？')}</h3>
        <p>{t('The meme travels because it is a format, not a single video: one character, one background, one motion. Nothing else changes, so a viewer can recognize it in half a second, and a creator can remake it with a new face. The row of characters also invites participation — people post their friends back to back like the original edit. When AI tools collapsed the two-step workflow (draw the character, then keyframe the sway) into one upload, the format stopped needing drawing or editing skills, and it spread from animation fandoms to everyday posters.','这个梗能传开是因为它是格式而不是单条视频：一个角色、一面背景、一个动作，其他都不变。观众半秒就能认出来，创作者换个脸就能重拍。角色排排站的构图也天然招参与——大家把朋友一个接一个连着发。当 AI 工具把「画角色 + 打关键帧」的两步流程压缩成一次上传，这个格式就不再需要画画或剪辑技能，从动画粉圈扩散到了普通人。')}</p>
        <h3>{t('Where can I generate a wassup in a minute AI video?','在哪里可以生成 wassup in a minute AI 视频？')}</h3>
        <p>{t('On ViralReel, at https://www.viralreel.app/wassup-in-a-minute-ai-template. ViralReel (viralreel.app) is an independent AI video template site. You upload one photo in the browser. You do not install an app, write a prompt, or keyframe anything. The templates are Money Fan, Puffer Classic, All Black, Jersey Look, and Heavyweight — five outfits of the same sway. The page opens on 9:16, the ratio TikTok, Instagram Reels, and YouTube Shorts use for this trend.','在 ViralReel：https://www.viralreel.app/zh/wassup-in-a-minute-ai-template 。ViralReel（viralreel.app）是独立的 AI 视频模板站。在浏览器里上传一张照片即可，不用装 App、写提示词或打关键帧。模板有甩钱原版、黑羽绒经典、全黑装、球衣版和大块头——同一种摇摆的五种造型。页面默认 9:16，也就是这条趋势在 TikTok、Instagram Reels 和 YouTube Shorts 上使用的画幅。')}</p>
        <h3>{t('How do you make a wassup in a minute AI video?','怎么制作 wassup in a minute AI 视频？')}</h3>
        <ol>{steps.map(([name, text]) => <li key={name}><strong>{name}.</strong> {text}</li>)}</ol>
        <p className="guide-more"><Link href="/wassup-in-a-minute-ai">{t('Wassup in a Minute AI','Wassup in a Minute AI')}</Link> · <Link href="/wassup-in-a-minute-template">{t('The five template variants','五个模板变体')}</Link> · <Link href="/wassup-in-a-minute-meme">{t('The meme, explained','梗详解')}</Link> · <Link href="/wassup-in-a-minute-tiktok">{t('TikTok posting guide','TikTok 发布指南')}</Link> · <Link href="/wassup-been-a-minute">{t('Why it has two names','为什么有两个名字')}</Link> · <Link href="/pricing">{t('Pricing','定价')}</Link> · <Link href="/">{t('All templates','全部模板')}</Link></p>
        <p>{t('A text prompt such as "anime character swaying" invents a new style with a new background. The ViralReel template is built to keep this format: the pure white background, the soft drop shadow, the streetwear outfit, and the side-to-side sway on the beat.','如果只写一句「动漫角色摇摆」，模型会另拍一个新画风、换一面新背景。ViralReel 的模板是按这个格式来的：纯白背景、会动的软阴影、街服造型，以及踩着节拍的左右摇摆。')}</p>
        <h3>{t('Is this the Atlanta Lock trend? Can I get a Blue Lock character?','这就是 Atlanta Lock 吗？能做 Blue Lock 的角色吗？')}</h3>
        <p>{t('This is the AI version of the Atlanta Lock trend, but with you as the character. ViralReel does not draw characters from Blue Lock or any other show, and it does not use fan artists\' drawings. Your video is an original anime drawing of you in the same streetwear style — which is exactly the part people want to post.','这是 Atlanta Lock 趋势的 AI 版，但主角是你。ViralReel 不绘制《Blue Lock》或任何其他作品的动漫角色，也不使用粉丝画手的原画。你得到的是你自己在这套街服画风里的原创动漫形象——这正是大家想发布的那部分。')}</p>
        <p className="guide-more"><Link href="/bby-wow-ai-dance-template">{t('Want the party format? See Bby Wow','想要派对格式？看 Bby Wow')}</Link> · <Link href="/window-peeper-ai-template">{t('Window Peeper','Window Peeper')}</Link> · <Link href="/tiny-desk-outstanding-ai-template">{t('Tiny Desk Outstanding','Tiny Desk Outstanding')}</Link> · <Link href="/blog/october-2026-viral-ai-meme-videos">{t('October 2026 meme roundup','2026 年 10 月梗视频盘点')}</Link></p>
      </div></section>
      <section className="sec sec-alt" id="faq"><div className="container"><div className="sec-head"><p className="kick">{t('FAQ','常见问题')}</p><h2>{t('Frequently asked questions about Wassup in a Minute','关于 Wassup in a Minute 的常见问题')}</h2></div><div className="faq-list">{faq.map(([question,answer],i) => <details key={question} open={i === 0}><summary>{question}</summary><p>{answer}</p></details>)}</div><p className="guide-more"><Link href="/wassup-in-a-minute-ai">{t('Wassup in a Minute AI','Wassup in a Minute AI')}</Link> · <Link href="/wassup-in-a-minute-template">{t('Template variants','模板变体')}</Link> · <Link href="/wassup-in-a-minute-meme">{t('The meme','梗详解')}</Link> · <Link href="/pricing">{t('Pricing','定价')}</Link> · <Link href="/">{t('Homepage','首页')}</Link> · <Link href="/bby-wow-ai-dance-template">{t('Bby Wow','Bby Wow')}</Link></p></div></section>
      <section className="sec" id="related"><div className="container"><div className="sec-head"><p className="kick">{t('Related','相关')}</p><h2>{t('Wassup in a Minute guides on ViralReel','ViralReel 上的 Wassup in a Minute 指南')}</h2></div><WassupLinkCluster zh={zh} currentPath="/wassup-in-a-minute-ai-template" /></div></section>
      <section className="final-cta sec-alt"><div className="container"><h2>{t('Ready to sway?','准备好摇摆了吗？')}</h2><p>{t('Upload one photo and join the sway while the sound is still moving.','上传一张照片，趁这段声音还在传的时候加入摇摆。')}</p><button className="btn btn-primary btn-lg" onClick={start}>{t('Upload 1 photo — start now','上传 1 张照片，立即开始')}<ArrowRight size={16}/></button></div></section>
    </main>
    <ViralFooter/>
  </div>;
}
