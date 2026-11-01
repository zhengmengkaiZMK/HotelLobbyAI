'use client';

/* eslint-disable @next/next/no-img-element */

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';
import { ArrowRight, Flame, ImagePlus, Maximize, Music, Play, Smartphone, Users, Video, Volume2, VolumeX } from 'lucide-react';
import { useLocale } from 'next-intl';
import { track } from '@/shared/lib/analytics';
import { Link } from '@/core/i18n/navigation';
import { TemplateGenerator } from '@/shared/blocks/viral-home/generator';
import { ViralHeader } from '@/shared/blocks/viral-home/header';
import { ViralFooter } from '@/shared/blocks/viral-home/footer';
import { buildHowToJsonLdFromSteps } from '@/shared/lib/howto-schema';
import { getVideoCostTable } from '@/shared/lib/video-cost';
import { alorsOnDanseTemplates, type AlorsOnDanseTemplate } from './templates';
import { getAlorsOnDanseFaq } from './faq';
import { AlorsOnDanseLinkCluster } from './link-cluster';
import { ALORS_ON_DANSE_POSTS } from './long-tails';
import { ALORS_ON_DANSE_HOW_TO_STEPS } from './steps';
import '@/shared/blocks/viral-home/home.css';

function PlatformIcon({ type }: { type: 'tiktok' | 'youtube' | 'instagram' | 'x' | 'reddit' }) {
  const paths: Record<string, ReactNode> = {
    tiktok: <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.9 2.9 0 1 1-2.31-2.84V9.25a6.35 6.35 0 1 0 5.76 6.32V8.69a8.16 8.16 0 0 0 4.77 1.52V6.79a4.85 4.85 0 0 1-1-.1z" />,
    youtube: <><path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3.02 3.02 0 0 0 .5 6.19C0 8.07 0 12 0 12s0 3.93.5 5.81a3.02 3.02 0 0 0 2.12 2.14c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 0 0 2.12-2.14C24 15.93 24 12 24 12s0-3.93-.5-5.81z"/><path fill="#fff" d="m9.55 15.57 6.27-3.57-6.27-3.57z"/></>,
    instagram: <><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></>,
    x: <path d="M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.41l-5.8-7.58-6.64 7.58H.47l8.6-9.83L0 1.15h7.59l5.24 6.93zm-1.29 19.5h2.04L6.49 3.24H4.3z" />,
    reddit: <path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm5.01 4.74a1.25 1.25 0 1 0-1.95.94l-2.91-.62a.34.34 0 0 0-.41.26l-.9 4.17c-1.87.06-3.56.62-4.79 1.5a1.76 1.76 0 1 0-.81 3.33c-.03.17-.05.35-.05.53 0 2.7 3.12 4.87 7 4.87s7-2.17 7-4.87c0-.18-.02-.36-.04-.52a1.76 1.76 0 1 0-2.95-1.11c-1.2-.86-2.85-1.42-4.68-1.49l.8-3.75 2.6.55a1.25 1.25 0 1 0 2.09-1.09zM8.6 13.02a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zm6.8 0a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5z" />,
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

export function AlorsOnDanseHome({ creditsPerUsd = 12, videoCosts = getVideoCostTable(), pageUrl }: { creditsPerUsd?: number; videoCosts?: ReturnType<typeof getVideoCostTable>; pageUrl?: string }) {
  const locale = useLocale();
  const zh = locale === 'zh';
  const t = (en: string, cn: string) => zh ? cn : en;
  useEffect(() => { track('view_template', { template: 'alors_on_danse' }); }, []);
  const [template, setTemplate] = useState<AlorsOnDanseTemplate>(alorsOnDanseTemplates.find((item) => item.id === 'alors-on-danse-ai-giant') ?? alorsOnDanseTemplates[0]);
  const focusGenerator = () => { document.getElementById('generator')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); };
  const choose = (item: AlorsOnDanseTemplate = alorsOnDanseTemplates[0]) => { track('click_generate', { template: 'alors_on_danse', variant: item.id }); setTemplate(item); focusGenerator(); };
  const start = () => focusGenerator();
  const features = [
    [Users, t('Two photos, two roles', '两张照片，两个角色'), t('Image 1 is the Keyboard Player who plays it straight; Image 2 is the Dance Partner who commits far too hard. The generator labels both slots.','照片 1 是一本正经弹键盘的人；照片 2 是用力过猛的伴舞搭档。生成器把两个位置都标好了。')],
    [Music, t('The beat does the heavy lifting', '节拍包办一切'), t('Every version rides the same Stromae beat, so your clip reads in one second. The room, the keyboard and the timing never change — only the two people do.','每个版本都踩着同一段 Stromae 节拍，你的片子一秒就能读懂。房间、键盘和节奏从不变——变的只有这两个人。')],
    [Video, t('Seven studio versions', '七个白棚版本'), t('Studio Giant, Original Sketch, Football Duo, Spider Duo, Fantasy Duo, Racing Duo and Football Keyboard — pick the one closest to your pair.','白棚巨人版、原版小剧场、足球双人版、蜘蛛侠双人版、奇幻双人版、赛车双人版和足球键盘版——选一个和你们最像的。')],
    [Smartphone, t('~30 seconds, 16:9, ready to post', '约 30 秒，16:9，拿去就能发'), t('The studio versions are landscape, and the template opens on 16:9 with the length fixed at about 30 seconds. Add the trend sound in TikTok when you post.','白棚版本是横屏构图，模板默认 16:9、时长固定约 30 秒。发布时在 TikTok 加趋势原声。')],
  ] as const;
  const steps = ALORS_ON_DANSE_HOW_TO_STEPS.map((step) => [zh ? step.name.zh : step.name.en, zh ? step.text.zh : step.text.en] as const);
  const faq = getAlorsOnDanseFaq(zh, { videoCosts, creditsPerUsd });
  const howToJsonLd = buildHowToJsonLdFromSteps({
    name: t('How to make an Alors On Danse AI video', '如何制作 Alors On Danse AI 视频'),
    description: t('Upload two photos on ViralReel, pick one of seven studio versions, download the ~30-second MP4, then add the trend sound and the AI label.', '在 ViralReel 上传两张照片，七个白棚版本任选，下载约 30 秒的 MP4，再加上趋势原声和 AI 标注。'),
    url: pageUrl,
    steps: steps.map(([name, text]) => ({ name, text })),
  });
  return <div className="viral-home">{howToJsonLd ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} /> : null}
    <ViralHeader onStart={start}/>
    <main>
      <section className="hero"><div className="container"><div className="hero-badge"><Flame size={16}/><span>#alors on danse is trending</span></div><h1>{t('Two photos. One white-studio sketch. Your ', '两张照片，一条白棚小品，你的 ')}<span className="hl">Alors On Danse</span>{t(' AI video', ' AI 视频')}</h1><TemplateGenerator key={template.id} template={template} open embedded onOpenChange={() => {}}/></div></section>
      <section className="sec templates-section" id="templates"><div className="container"><div className="sec-head"><p className="kick">{t('Templates','模板')}</p><h2>{t('Seven versions of the studio sketch','白棚小品的七个版本')}</h2><p className="sub">{t('Every card is the same white studio with a different pair. Click one to open the generator.','每张卡片都是同一个白棚，换的是里面那对搭档。点击卡片打开生成器。')}</p></div><div className="grid3">{alorsOnDanseTemplates.map((item, index) => <article className="tcard" key={item.id}><button className="tv tv-full" aria-label={`${t('Use','使用')} ${item.name[zh ? 1 : 0]}`} onClick={() => choose(item)} style={{ '--g1': item.colors[0], '--g2': item.colors[1] } as CSSProperties}><TemplateVideo id={item.id} colors={item.colors}/>{index === 0 && <span className="hot">HOT</span>}<span className="tv-expand"><Maximize size={18}/></span><span className="tv-play"><Play size={16}/></span><span className="tv-bar"><i/></span></button><div className="tmeta"><b>{item.name[zh ? 1 : 0]}</b></div><button className="use" onClick={() => choose(item)}>{t('Generate','立即生成')}</button></article>)}</div></div></section>
      <div className="logos"><p className="lbl">{t('Creators are posting ViralReel videos on','创作者们正在这些平台发布 ViralReel 视频')}</p><div className="row"><span className="soc tiktok"><PlatformIcon type="tiktok"/>TikTok</span><span className="soc youtube"><PlatformIcon type="youtube"/>YouTube Shorts</span><span className="soc instagram"><PlatformIcon type="instagram"/>Instagram Reels</span><span className="soc x"><PlatformIcon type="x"/>X / Twitter</span><span className="soc reddit"><PlatformIcon type="reddit"/>Reddit</span></div></div>
      <section className="stats"><div className="container stats-grid"><div><div className="statnum">30<em>s</em></div><p>{t('Clip length, like the trend','片长与趋势一致')}</p></div><div><div className="statnum">16:9</div><p>{t('Landscape export, like the studio versions','横屏导出，与白棚版本一致')}</p></div><div><div className="statnum">{Math.min(...videoCosts.flatMap(row => row.costs.map(item => item.credits)))}<em className="wide-em">{t(' credits / video from', ' 积分 / 条起')}</em></div><p>{t(`Top-ups available · ${creditsPerUsd} credits = $1`,`随时可加购 · ${creditsPerUsd} 积分 = 1 美元`)}</p></div></div></section>
      <section className="sec sec-alt" id="what"><div className="container"><div className="sec-head"><p className="kick">{t('What is Alors On Danse','Alors On Danse 是什么')}</p><h2>{t('The studio sketch everyone is recasting','大家正在重排的白棚小品')}</h2><p className="sub">{t('Stromae keeps playing. Jamel keeps dancing. Only the two faces change.','Stromae 继续弹琴，Jamel 继续跳舞——变的只有两张脸。')}</p></div><div className="grid4">{features.map(([Icon,title,desc]) => <div className="feat" key={title}><div className="ic"><Icon size={20}/></div><h3>{title}</h3><p>{desc}</p></div>)}</div></div></section>
      <section className="sec" id="how"><div className="container"><div className="sec-head"><p className="kick">{t('How it works','使用教程')}</p><h2>{t('How to make an Alors On Danse AI video','如何制作 Alors On Danse AI 视频')}</h2><p className="sub">{t('From two photos to a posted recast in minutes — no app, no editor, no prompt.','两张照片到一条发出去的重排版只要几分钟——不用装 App，不用会剪辑，不用写提示词。')}</p></div><div className="grid4s">{steps.map(([title,desc],i) => <div className="step" key={title}><div className="num">{i+1}</div><h3>{title}</h3><p>{desc}</p></div>)}</div></div></section>
      <section className="sec" id="guide"><div className="container guide"><div className="sec-head"><p className="kick">{t('Guide','指南')}</p><h2>{t('Alors On Danse AI: the trend, the sketch, and how to make your own','Alors On Danse AI：趋势、小品，以及怎么做你自己的')}</h2></div>
        <figure className="guide-fig"><img src="/templates/alors-on-danse-og.jpg" alt="Alors On Danse AI template on ViralReel — a white-studio duo sketch recast with your photos" width={1200} height={630} loading="lazy"/><figcaption>{t('Make the Alors On Danse recast on ViralReel (viralreel.app) from two photos.','在 ViralReel（viralreel.app）用两张照片制作 Alors On Danse 重排版。')}</figcaption></figure>
        <h3>{t('Short answer','简短回答')}</h3>
        <p>{t('An Alors On Danse AI video is a fan remix you make on ViralReel at https://www.viralreel.app/alors-on-danse-ai-template from two photos: one person plays the keyboard, the other dances beside them, inside a recreation of the 2010 white-studio sketch from Jamel Debbouze\'s show Made in Jamel. The clip is about 30 seconds at 16:9. ViralReel does not license "Alors on danse" and is not affiliated with Stromae or Jamel Debbouze — add the trend sound in TikTok, Reels, or Shorts and label the post as AI.','Alors On Danse AI 视频是你在 ViralReel（https://www.viralreel.app/zh/alors-on-danse-ai-template ）用两张照片做的粉丝向重排：一个人弹键盘，另一个人在旁边跳舞，场景复刻自 2010 年 Jamel Debbouze 综艺《Made in Jamel》里的白棚小品。成片约 30 秒、16:9。ViralReel 不授权《Alors on danse》，与 Stromae 和 Jamel Debbouze 均无关联——请在 TikTok、Reels 或 Shorts 加趋势原声，并把帖子标成 AI。')}</p>
        <h3>{t('What is the Alors On Danse trend?','Alors On Danse 趋势是什么？')}</h3>
        <p>{t('It is the TikTok wave of rebuilding one fixed sketch with new casting. The source is the 2010 comedy bit from Made in Jamel: Jamel Debbouze crashes Stromae\'s white studio mid-session, dances with one arm up, points at the lens and mouths along, while Stromae keeps playing the mini keyboard like nothing is happening. The AI versions keep the room, the camera, the timing and the "Alors on danse" beat, and swap only the two people — which is why every remake is readable in one second.','它是 TikTok 上用新选角重排同一个小品的浪潮。源头是 2010 年《Made in Jamel》里的喜剧桥段：Jamel Debbouze 中途闯进 Stromae 的白棚，举着手臂跳舞、指着镜头对口型，而 Stromae 面无表情地继续弹迷你键盘。AI 版本保留房间、运镜、节奏和《Alors on danse》的节拍，只换两个人——所以每条重排一秒就能读懂。')}</p>
        <h3>{t('Who is the other guy in the Alors on danse video?','视频里「另一个人」是谁？')}</h3>
        <p>{t('The calm one at the keyboard is Stromae, the Belgian artist Paul Van Haver, whose 2009 single "Alors on danse" went to number one across Europe and got a Kanye West remix in 2010. The one dancing, pointing and pretending to coach the beat is the French comedian Jamel Debbouze. The sketch parodies how the song was written — and the joke is that Stromae actually wrote it alone.','键盘前面无表情的是 Stromae，比利时音乐人 Paul Van Haver，他 2009 年的单曲《Alors on danse》横扫欧洲多国冠军，2010 年还出了 Kanye West 混音版。跳舞、指镜头、假装指导节拍的是法国喜剧演员 Jamel Debbouze。小品戏仿的是这首歌「怎么写出来的」——而笑点在于，Stromae 其实是一个人写完的。')}</p>
        <h3>{t('How did the trend move?','这波趋势是怎么走起来的？')}</h3>
        <p>{t('The sketch itself went round again in April 2026 for the song\'s 16th birthday, passing 21 million plays. The first AI recasts landed on 2 October — two F1 drivers at the keyboard, then Gandalf with Frodo. On 5 October, Mr. X and Leon from Resident Evil took the two roles and became the biggest recast of the wave at 341.7K plays. Footballers followed on 8 October — DJ Yamal on the keys with MC Messi and MC Ronaldo dancing. By 21 October, a plain repost of the sketch passed 551K plays in days, and how-to posts were everywhere.','2026 年 4 月，这首歌 16 岁生日时小品原片又被翻出来转了一轮，播放破 2100 万。10 月 2 日第一批 AI 重排上线——两个 F1 车手坐键盘，然后是甘道夫和弗罗多。10 月 5 日，《生化危机》的 Mr. X 和 Leon 接管两个角色，以 34.17 万播放成为这波最大的重排版。10 月 8 日轮到足球运动员——DJ Yamal 弹键盘，MC Messi 和 MC Ronaldo 伴舞。到 10 月 21 日，一条纯转发的原片几天就过了 55.1 万播放，教程帖铺天盖地。')}</p>
        <h3>{t('Why did it go viral?','它为什么会爆火？')}</h3>
        <p>{t('Because the variable is exactly one thing: the casting. The script, the room, the beat and the 30 seconds never change, so every remake reads at a glance and two photos are the whole production. The joke needs contrast — one person playing it straight, one committing far too hard — which is why couples, siblings, a quiet friend and a loud one, and any two characters who would never share a studio work so well. Pets, babies and cartoon characters take the dance role without changing anything else.','因为变量只有一个：选角。剧本、房间、节拍和 30 秒从不变，每条重排一眼就能读懂，两张照片就是全部制作成本。这个梗需要反差——一个人一本正经，一个人用力过猛——所以情侣、兄妹、一个闷一个闹的朋友、任何「永远不可能同框」的两个人组都特别合适。宠物、小孩和卡通角色放伴舞位，其余一切照旧。')}</p>
        <h3>{t('Where can I generate an Alors On Danse AI video?','在哪里可以生成 Alors On Danse AI 视频？')}</h3>
        <p>{t('On ViralReel, at https://www.viralreel.app/alors-on-danse-ai-template. ViralReel (viralreel.app) is an independent AI video template site. You upload two photos in the browser — no app to install, no CapCut template to hunt down, no prompt to write. The page opens on 16:9 with the length fixed at about 30 seconds, and the generator slots are labeled Keyboard Player and Dance Partner. ViralReel does not license the song.','在 ViralReel：https://www.viralreel.app/zh/alors-on-danse-ai-template 。ViralReel（viralreel.app）是独立的 AI 视频模板站。在浏览器里上传两张照片——不用装 App，不用找 CapCut 模板，不用写提示词。页面默认 16:9、时长固定约 30 秒，生成器位置写的是弹键盘的人和伴舞的人。ViralReel 不授权这首歌。')}</p>
        <h3>{t('How do you make an Alors On Danse AI video?','怎么制作 Alors On Danse AI 视频？')}</h3>
        <ol>{steps.map(([name, text]) => <li key={name}><strong>{name}.</strong> {text}</li>)}</ol>
        <p className="guide-more"><Link href="/alors-on-danse-ai">{t('Alors On Danse AI','Alors On Danse AI')}</Link> · <Link href="/alors-on-danse-template">{t('The seven versions','七个版本')}</Link> · <Link href="/alors-on-danse-video">{t('The ~30s MP4','约 30 秒 MP4')}</Link> · <Link href="/alors-on-danse-tiktok">{t('TikTok posting guide','TikTok 发布指南')}</Link> · <Link href="/alors-on-danse-generator">{t('The generator','生成器')}</Link> · <Link href="/alors-on-danse-sound">{t('Sound is not in the file','原声不在文件里')}</Link> · <Link href="/alors-on-danse-capcut">{t('CapCut comparison','和 CapCut 对照')}</Link> · <Link href="/alors-on-danse-pets">{t('Pets in the dance role','宠物放伴舞位')}</Link> · <Link href="/alors-on-danse-song">{t('The song','这首歌')}</Link> · <Link href="/alors-on-danse-meaning">{t('What the title means','歌名含义')}</Link> · <Link href="/stromae-jamel-debbouze-ai">{t('Stromae & Jamel Debbouze AI','Stromae 与 Jamel Debbouze AI')}</Link> · <Link href="/alors-on-danse-making-of">{t('Real making-of?','是真实幕后吗')}</Link> · <Link href="/alors-on-danse-meme">{t('The meme, explained','梗详解')}</Link> · <Link href="/how-to-make-alors-on-danse-ai">{t('Four-step guide','四步指南')}</Link> · <Link href="/pricing">{t('Pricing','定价')}</Link></p>
        <h3>{t('Is the recast the real sketch?','重排版是原版小品吗？')}</h3>
        <p>{t('No. The sketch belongs to Jamel Debbouze and Stromae, and "Alors on danse" is Stromae\'s song. The recasts are fan remixes made for fun — not an official video from either artist, and not the real making-of. Use photos of yourself or people who agreed, keep parody clearly parody, and label the post with the AI-generated tag TikTok and Instagram both offer.','不是。小品属于 Jamel Debbouze 和 Stromae，《Alors on danse》是 Stromae 的歌。重排版是为了好玩做的粉丝向二创——既不是两位艺术家的官方视频，也不是真实的创作幕后。只用你本人的或经同意的照片，让戏仿保持戏仿，并使用 TikTok 和 Instagram 都提供的 AI 生成标注。')}</p>
        <p>{t('This is a fan-made parody tool and is not connected to Stromae, Jamel Debbouze, or any rights holder.','这是一个粉丝向戏仿工具，与 Stromae、Jamel Debbouze 或任何版权方均无关联。')}</p>
        <p className="guide-more"><Link href={ALORS_ON_DANSE_POSTS.explained}>{t('What the trend is','趋势是什么')}</Link> · <Link href={ALORS_ON_DANSE_POSTS.howTo}>{t('Full how-to blog','完整教程博客')}</Link> · <Link href={ALORS_ON_DANSE_POSTS.song}>{t('The song and its meaning','歌与歌名含义')}</Link> · <Link href={ALORS_ON_DANSE_POSTS.generators}>{t('Best generators, November 2026','2026 年 11 月生成器对照')}</Link> · <Link href={ALORS_ON_DANSE_POSTS.photos}>{t('Photo tips','照片建议')}</Link> · <Link href={ALORS_ON_DANSE_POSTS.roundup}>{t('October 2026 meme roundup','2026 年 10 月梗视频盘点')}</Link></p>
      </div></section>
      <section className="sec sec-alt" id="faq"><div className="container"><div className="sec-head"><p className="kick">{t('FAQ','常见问题')}</p><h2>{t('Frequently asked questions about Alors On Danse','关于 Alors On Danse 的常见问题')}</h2></div><div className="faq-list">{faq.map(([question,answer],i) => <details key={question} open={i === 0}><summary>{question}</summary><p>{answer}</p></details>)}</div></div></section>
      <section className="sec" id="related"><div className="container"><div className="sec-head"><p className="kick">{t('Related','相关')}</p><h2>{t('Alors On Danse guides on ViralReel','ViralReel 上的 Alors On Danse 指南')}</h2></div><AlorsOnDanseLinkCluster zh={zh} currentPath="/alors-on-danse-ai-template" /></div></section>
      <section className="final-cta sec-alt"><div className="container"><h2>{t('Your turn in the studio','该你们进棚了')}</h2><p>{t('Pick a version, fill the Keyboard Player and Dance Partner slots, and post the recast with the trend sound and an AI label.','选一个版本，填好弹键盘的人和伴舞的人，带上趋势原声和 AI 标注，把重排版发出去。')}</p><button className="btn btn-primary btn-lg" onClick={start}>{t('Upload two photos — start now','上传两张照片，立即开始')}<ArrowRight size={16}/></button></div></section>
    </main>
    <ViralFooter/>
  </div>;
}
