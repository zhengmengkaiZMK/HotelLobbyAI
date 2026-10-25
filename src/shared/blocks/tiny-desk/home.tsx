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
import { tinyDeskTemplates, type TinyDeskTemplate } from './templates';
import { TINY_DESK_FAQ } from './faq';
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

function TemplateVideo({ id, colors, credit }: { id: string; colors: readonly [string, string]; credit?: string }) {
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
    {credit && <span className="tv-credit">© {credit}</span>}
    <span className="tv-sound" role="button" tabIndex={0} aria-label={muted ? 'Unmute video' : 'Mute video'} onClick={toggleSound} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') toggleSound(e); }}>{muted ? <VolumeX size={15}/> : <Volume2 size={15}/>}</span>
  </>;
}

export function TinyDeskHome({ creditsPerUsd = 12, videoCosts = getVideoCostTable() }: { creditsPerUsd?: number; videoCosts?: ReturnType<typeof getVideoCostTable> }) {
  const locale = useLocale();
  const zh = locale === 'zh';
  const t = (en: string, cn: string) => zh ? cn : en;
  useEffect(() => { track('view_template', { template: 'tiny_desk_outstanding' }); }, []);
  const [template, setTemplate] = useState<TinyDeskTemplate>(tinyDeskTemplates[0]);
  const focusGenerator = () => { document.getElementById('generator')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); };
  const choose = (item: TinyDeskTemplate = tinyDeskTemplates[0]) => { track('click_generate', { template: 'tiny_desk_outstanding', variant: item.id }); setTemplate(item); focusGenerator(); };
  const start = () => focusGenerator();
  const features = [
    [Music, t('The set stays, only the band changes','场景不动，只换乐队'), t('The cramped NPR office, the desk, the grin, the hand wave and the sax solo — the AI keeps every beat and the song, and swaps in your people.','狭小的办公室、桌子、咧嘴笑、挥手和萨克斯独奏——AI 保留每一个节拍和原声，只把人换成你的。')],
    [ImagePlus, t('Cast the lead and the sax','主唱和萨克斯由你定'), t('Photo 1 takes the lead vocal, photo 2 takes the sax solo, and everyone keeps the clothes from their own photo.','照片 1 当主唱，照片 2 吹萨克斯，每个人保留自己照片里的穿着。')],
    [Users, t('Six Outstanding sets','六套 Outstanding 阵容'), t('All-Loss Coaches, Cowboys Legends, NFC East Band, Rams Band, Spurs Big Men or Uncle Charlie — pick the set closest to your crew.','输球教练团、牛仔传奇、国联东区乐队、公羊队、马刺大个子或真身 Charlie——选一套和你的团体最像的。')],
    [Smartphone, t('Same sound as the trend','和趋势同一条原声'), t('Vertical 9:16, and the generated clip keeps the Outstanding audio, so it lands on the same sound as the rest of the trend.','竖屏 9:16，生成视频保留《Outstanding》原声，发出去自动落进同一条趋势。')],
  ] as const;
  const steps = [
    [t('Pick an Outstanding set','选一套阵容'), t('Six casts, the same Tiny Desk joke. Pick the one that looks most like your group.','六套角色，同一个 Tiny Desk 笑点。选一套和你的团体最像的。')],
    [t('Upload your photos','上传照片'), t('One photo makes the lead singer. Add a second for the sax solo. Front-facing, face clear, decent light.','一张照片当主唱，再加一张吹萨克斯。正脸、五官清楚、光线别太暗。')],
    [t('Set ratio, resolution, length','选画幅、清晰度和时长'), t('9:16 is the default. The credit cost updates before you generate.','默认 9:16。积分会在你点生成之前按选项更新。')],
    [t('Download and post','下载并发布'), t('Export the MP4 and post it with the trend — the clip keeps the Outstanding audio.','导出 MP4 直接发趋势——视频自带《Outstanding》原声。')],
  ];
  const faq = TINY_DESK_FAQ[zh ? 'zh' : 'en'];
  const howToJsonLd = buildHowToJsonLdFromSteps({
    name: t('How to make a Tiny Desk Outstanding AI video', '如何制作 Tiny Desk Outstanding AI 视频'),
    description: t('From a couple of photos to a band-at-the-desk clip in minutes — no app, no editor.', '几张照片到一条乐队演出视频只要几分钟——不用装 App，不用会剪辑。'),
    steps: steps.map(([name, text]) => ({ name, text })),
  });
    return <div className="viral-home">{howToJsonLd ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} /> : null}
    <ViralHeader onStart={start}/>
    <main>
      <section className="hero"><div className="container"><div className="hero-badge"><Flame size={16}/><span>#tinydeskconcertai is trending</span></div><h1>{t('Upload your photos — no prompt needed. Generate your ', '上传照片，无需提示词，立即生成你的 ')}<span className="hl">Tiny Desk Outstanding</span>{t(' AI video instantly', ' AI 视频')}</h1><TemplateGenerator key={template.id} template={template} open embedded onOpenChange={() => {}}/></div></section>
      <section className="sec templates-section" id="templates"><div className="container"><div className="sec-head"><p className="kick">{t('Templates','模板')}</p><h2>{t('Six Outstanding sets to remix','六套可翻拍的 Outstanding 阵容')}</h2><p className="sub">{t('Every card is the same Tiny Desk set with a different band. Click one to open the generator.','每张卡片都是同一个 Tiny Desk 现场，换的是乐队。点击卡片打开生成器。')}</p></div><div className="grid3">{tinyDeskTemplates.map((item, index) => <article className="tcard" key={item.id}><button className="tv tv-full" aria-label={`${t('Use','使用')} ${item.name[zh ? 1 : 0]}`} onClick={() => choose(item)} style={{ '--g1': item.colors[0], '--g2': item.colors[1] } as CSSProperties}><TemplateVideo id={item.id} colors={item.colors} credit={item.credit}/>{index === 0 && <span className="hot">HOT</span>}<span className="tv-expand"><Maximize size={18}/></span><span className="tv-play"><Play size={16}/></span><span className="tv-bar"><i/></span></button><div className="tmeta"><b>{item.name[zh ? 1 : 0]}</b></div><button className="use" onClick={() => choose(item)}>{t('Generate','立即生成')}</button></article>)}</div></div></section>
      <div className="logos"><p className="lbl">{t('Creators are posting ViralReel videos on','创作者们正在这些平台发布 ViralReel 视频')}</p><div className="row"><span className="soc tiktok"><PlatformIcon type="tiktok"/>TikTok</span><span className="soc youtube"><PlatformIcon type="youtube"/>YouTube Shorts</span><span className="soc instagram"><PlatformIcon type="instagram"/>Instagram Reels</span><span className="soc x"><PlatformIcon type="x"/>X / Twitter</span><span className="soc reddit"><PlatformIcon type="reddit"/>Reddit</span></div></div>
      <section className="stats"><div className="container stats-grid"><div><div className="statnum">60<em>s</em></div><p>{t('Average render time','平均渲染时长')}</p></div><div><div className="statnum">9:16</div><p>{t('Vertical export for TikTok, Reels and Shorts','竖屏导出，适配 TikTok、Reels、Shorts')}</p></div><div><div className="statnum">{Math.min(...videoCosts.flatMap(row => row.costs.map(item => item.credits)))}<em className="wide-em">{t(' credits / video from', ' 积分 / 条起')}</em></div><p>{t(`Top-ups available · ${creditsPerUsd} credits = $1`,`随时可加购 · ${creditsPerUsd} 积分 = 1 美元`)}</p></div></div></section>
      <section className="sec sec-alt" id="what"><div className="container"><div className="sec-head"><p className="kick">{t('What is Tiny Desk Outstanding','Tiny Desk Outstanding 是什么')}</p><h2>{t('The Tiny Desk concert everyone is recasting','大家正在重排的 Tiny Desk 现场')}</h2><p className="sub">{t('An AI-rebuilt NPR office, the Gap Band\'s "Outstanding", and your people behind the desk.','AI 重搭的 NPR 办公室、Gap Band 的《Outstanding》，桌子后面站着的是你的人。')}</p></div><div className="grid4">{features.map(([Icon,title,desc]) => <div className="feat" key={title}><div className="ic"><Icon size={20}/></div><h3>{title}</h3><p>{desc}</p></div>)}</div></div></section>
      <section className="sec" id="how"><div className="container"><div className="sec-head"><p className="kick">{t('How it works','使用教程')}</p><h2>{t('How to make a Tiny Desk Outstanding AI video','如何制作 Tiny Desk Outstanding AI 视频')}</h2><p className="sub">{t('From a couple of photos to a band-at-the-desk clip in minutes — no app, no editor.','几张照片到一条乐队演出视频只要几分钟——不用装 App，不用会剪辑。')}</p></div><div className="grid4s">{steps.map(([title,desc],i) => <div className="step" key={title}><div className="num">{i+1}</div><h3>{title}</h3><p>{desc}</p></div>)}</div></div></section>
      <section className="sec" id="guide"><div className="container guide"><div className="sec-head"><p className="kick">{t('Guide','指南')}</p><h2>{t('Tiny Desk Outstanding AI: the trend, the song, and where to make one','Tiny Desk Outstanding AI：趋势、原曲，以及在哪里制作')}</h2></div>
        <figure className="guide-fig"><img src="/templates/tiny-desk-outstanding-ai-og.jpg" alt="Tiny Desk Outstanding AI template on ViralReel — a Tiny Desk band singing Outstanding" width={1200} height={630} loading="lazy"/><figcaption>{t('Make the Tiny Desk Outstanding clip on ViralReel (viralreel.app) from your photos.','在 ViralReel（viralreel.app）用你的照片制作 Tiny Desk Outstanding 视频。')}</figcaption></figure>
        <h3>{t('What is the Tiny Desk Outstanding video?','Tiny Desk Outstanding 视频是什么？')}</h3>
        <p>{t('It is a short AI video that drops new faces into one very specific scene: Charlie Wilson closing his NPR Tiny Desk concert with "Outstanding", the 1982 hit he made with the Gap Band. The cramped NPR office stays. The desk cluttered with mugs and records stays. The lead singer grinning into the camera and waving a hand on the hook stays. The backup singers swaying and clapping stay. The sax solo stays. Only the band changes — and that is the whole joke. Losing coaches, whole NFL rosters, basketball teams and groups of friends have all taken the same spot behind the desk, singing a celebration their week did not earn.','它是一条把新的脸放进一个非常具体场景的 AI 短视频：Charlie Wilson 用 Gap Band 1982 年的名曲《Outstanding》为自己的 NPR Tiny Desk 演唱会收尾。狭小的 NPR 办公室没变，堆满马克杯和唱片的桌子没变，主唱对着镜头咧嘴笑、在副歌部分挥手没变，和声歌手摇摆拍手没变，萨克斯独奏也没变——变的只有乐队本身，而这就是全部笑点。输球的教练、整支 NFL 球队、篮球队和一桌朋友都先后站到了同一张桌子后面，唱着一首他们这周并不配拥有的庆祝之歌。')}</p>
        <h3>{t('Where did the Tiny Desk Outstanding trend come from?','Tiny Desk Outstanding 趋势从哪来的？')}</h3>
        <p>{t('The source scene is real. On 5 June 2023 NPR Music posted Charlie Wilson\'s Tiny Desk concert, and he closed it with "Outstanding" — nineteen seconds of that performance became a meme of its own, the clip sports TikTok played over players past their prime until it was known as the "washed anthem". The AI trend itself started on 18 October 2026, the day after a chaotic college football Saturday when five of the top seven ranked teams all lost on 17 October — the first time that had happened in regular-season history. A 23-year-old Alabama fan posting as @theburnerfromhe11 answered the carnage with the "College Football\'s Week 8 All-Loss Tiny Desk Concert": Alabama\'s Kalen DeBoer on lead, Texas\' Steve Sarkisian and Indiana\'s Curt Cignetti on backing vocals, Georgia\'s Kirby Smart on tambourine and Notre Dame\'s Marcus Freeman on sax, built with an AI motion-transfer tool. It passed two million TikTok plays in two days, drew two million views on Instagram and up to six million impressions on X, and The Athletic wrote the story up on 23 October.','源头场景是真的。2023 年 6 月 5 日，NPR Music 发布了 Charlie Wilson 的 Tiny Desk 演唱会，他用《Outstanding》收尾——其中 19 秒片段自己就长成了梗，体育 TikTok 反复把它配在状态下滑的球员身上，直到它被叫做「washed anthem（过气赞歌）」。AI 趋势本身则始于 2026 年 10 月 18 日：前一天（10 月 17 日）的大学橄榄球乱局里，排名前七的球队有五支同日输球，常规赛历史头一回。一位 23 岁的阿拉巴马球迷用小号 @theburnerfromhe11 发布了「College Football\'s Week 8 All-Loss Tiny Desk Concert」——阿拉巴马的 DeBoer 领唱，德州的 Sarkisian 和印第安纳的 Cignetti 和声，佐治亚的 Smart 打铃鼓，圣母大学的 Freeman 吹萨克斯，用 AI 动作迁移工具做成。视频两天内 TikTok 播放破 200 万、Instagram 200 万、X 最多 600 万曝光，《The Athletic》在 10 月 23 日写了报道。')}</p>
        <h3>{t('Why did it go viral?','它为什么会爆火？')}</h3>
        <p>{t('Three forces stack up. First, the contrast: "Outstanding" is pure celebration, and the funniest casts are the ones least entitled to celebrate — coaches the day after a loss, rosters mid-slump. Second, the format is fixed: same office, same 19 seconds, same beats, so every remake is readable in one second and the only variable is who is behind the desk. Third, the cameos escalate: the NFC East version put owner Jerry Jones on the sax, the Patriots version gave the solo to NFL reporter Diana Russini, and each unexpected sax cameo raised the bar for the next group. Within a week the sets covered college coaches, the Rams, the Cowboys, the Seahawks, the Spurs — and, on 24 October, a CapCut template turned it into a one-photo trend with #tinydeskconcertai tutorials everywhere.','三层力量叠在一起。第一是反差：《Outstanding》是纯粹的庆祝之歌，而最有笑点的阵容恰恰最没资格庆祝——昨天刚输球的教练、正处低谷的球队。第二是格式固定：同样的办公室、同样的 19 秒、同样的节拍，让每个重拍一秒就能读懂，唯一的变量是桌子后面站的是谁。第三是客串不断升级：国联东区版让老板 Jerry Jones 吹萨克斯，爱国者版把独奏给了 NFL 记者 Diana Russini，每个意外的萨克斯嘉宾都把下一家的门槛抬高了一截。一周之内，阵容覆盖了大学教练、公羊、牛仔、海鹰、马刺——而 10 月 24 日 CapCut 模板出现后，它变成了一张照片就能玩的风潮，#tinydeskconcertai 的教程铺满了 TikTok。')}</p>
        <h3>{t('Who is in each viral Tiny Desk Outstanding set?','每一套爆火阵容里都是谁？')}</h3>
        <p>{t('The All-Loss set is the five coaches from the original clip. The Cowboys version dresses the franchise legends in suits and ties, led by a silver-haired singer hitting every note. The NFC East set crams four division coaches behind one desk with Jerry Jones on sax. The Rams set has head coach Sean McVay in a team hoodie leading his growing injury-list roster. The Spurs set was the trend\'s first basketball team, with Victor Wembanyama and teammates in their jerseys. And the "real one" is Uncle Charlie himself — blue beanie, gold shades — the performance every AI version copies shot by shot.','「输球教练团」就是原片里的五位教练。牛仔版给球队传奇们穿上西装领带，银发主唱一个音都不跑。国联东区版把四支分区的教练塞到一张桌子后面，Jerry Jones 吹萨克斯。公羊版是主帅 Sean McVay 穿着球队卫衣，带着不断变长的伤病名单阵容领唱。马刺版是趋势里第一支篮球队，Wembanyama 和队友们穿着球衣登场。而「真身版」就是 Uncle Charlie 本人——蓝色毛线帽、金色墨镜——所有 AI 版本逐镜头复刻的正是这一段。')}</p>
        <h3>{t('Where can I generate a Tiny Desk Outstanding AI video?','在哪里可以生成 Tiny Desk Outstanding AI 视频？')}</h3>
        <p>{t('On ViralReel, at https://www.viralreel.app/tiny-desk-outstanding-ai-template. ViralReel (viralreel.app) is an independent AI video template site. You pick one of the six Outstanding sets, upload your photos in the browser, and generate — no app to install, no CapCut template to hunt down, no prompt to write. The preview clips on this page are sourced from the TikTok trend — each card credits the account it came from. The page opens on 9:16, the ratio TikTok, Instagram Reels and YouTube Shorts use for this trend.','在 ViralReel：https://www.viralreel.app/zh/tiny-desk-outstanding-ai-template 。ViralReel（viralreel.app）是独立的 AI 视频模板站。选一套 Outstanding 阵容，在浏览器里上传照片直接生成——不用装 App，不用自己找 CapCut 模板，也不用写提示词。本页的预览片段来自 TikTok 趋势原片，每张卡片都标注了来源账号。页面默认 9:16，也就是这条趋势在 TikTok、Instagram Reels 和 YouTube Shorts 上使用的画幅。')}</p>
        <h3>{t('Is the Tiny Desk Outstanding clip AI?','Tiny Desk Outstanding 是 AI 做的吗？')}</h3>
        <p>{t('Yes — that is the point. The original coaches video was made with AI motion-transfer tools, and every spin-off recasts the band with generated or photo-swapped faces. The concert itself is real, but nobody in these clips actually sang anything. Post responsibly: use photos of yourself or people who agreed to be in the video, keep parody clearly parody, and label the post with the AI-generated tag TikTok and Instagram both offer.','是——这正是它的本质。原版教练片就是用 AI 动作迁移工具做的，之后每个衍生版都是用生成脸或照片换脸来重排乐队。演唱会本身是真的，但这些片段里没有人真的在唱。请负责任地发布：只用自己的或经对方同意的照片，让戏仿保持戏仿，并使用 TikTok 和 Instagram 都提供的 AI 生成标注。')}</p>
        <p>{t('This is a fan-made parody tool and is not connected to NPR, NPR Music, Tiny Desk Concerts or Charlie Wilson.','这是一个粉丝向戏仿工具，与 NPR、NPR Music、Tiny Desk Concerts 和 Charlie Wilson 均无关联。')}</p>
        <p className="guide-more"><Link href="/window-peeper-ai-template">{t('Want the caught-at-the-window format? See the Window Peeper AI template','想玩「窗边被拍」格式？看 Window Peeper AI 模板')} →</Link></p>
      </div></section>
      <section className="sec sec-alt" id="faq"><div className="container"><div className="sec-head"><p className="kick">{t('FAQ','常见问题')}</p><h2>{t('Frequently asked questions about Tiny Desk Outstanding','关于 Tiny Desk Outstanding 的常见问题')}</h2></div><div className="faq-list">{faq.map(([question,answer],i) => <details key={question} open={i === 0}><summary>{question}</summary><p>{answer}</p></details>)}</div></div></section>
      <section className="final-cta sec-alt"><div className="container"><h2>{t('Your turn at the Tiny Desk','该你上 Tiny Desk 了')}</h2><p>{t('Pick a set, cast the lead and the sax, and post your Tiny Desk Outstanding video while every fanbase is making one.','选一套阵容，定好主唱和萨克斯，趁每个粉丝圈都在做的时候，把你的 Tiny Desk Outstanding 视频发出去。')}</p><button className="btn btn-primary btn-lg" onClick={start}>{t('Upload photos — start now','上传照片，立即开始')}<ArrowRight size={16}/></button></div></section>
    </main>
    <ViralFooter/>
  </div>;
}
