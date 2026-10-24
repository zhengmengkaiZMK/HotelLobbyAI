'use client';

/* eslint-disable @next/next/no-img-element */

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';
import { ArrowRight, Eye, Flame, Maximize, Play, Smartphone, Users, Video, Volume2, VolumeX } from 'lucide-react';
import { useLocale } from 'next-intl';
import { track } from '@/shared/lib/analytics';
import { Link } from '@/core/i18n/navigation';
import { TemplateGenerator } from '@/shared/blocks/viral-home/generator';
import { ViralHeader } from '@/shared/blocks/viral-home/header';
import { ViralFooter } from '@/shared/blocks/viral-home/footer';
import { buildHowToJsonLdFromSteps } from '@/shared/lib/howto-schema';
import { getVideoCostTable } from '@/shared/lib/video-cost';
import { windowPeeperTemplates, type WindowPeeperTemplate } from './templates';
import { WINDOW_PEEPER_FAQ } from './faq';
import '@/shared/blocks/viral-home/home.css';

function PlatformIcon({ type }: { type: 'tiktok' | 'youtube' | 'instagram' | 'x' | 'reddit' }) {
  const paths: Record<string, ReactNode> = {
    tiktok: <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.9 2.9 0 1 1-2.31-2.84V9.25a6.35 6.35 0 1 0 5.76 6.32V8.69a8.16 8.16 0 0 0 4.77 1.52V6.79a4.85 4.85 0 0 1-1-.1z" />,
    youtube: <><path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3.02 3.02 0 0 0 .5 6.19C0 8.07 0 12 0 12s0 3.93.5 5.81a3.02 3.02 0 0 0 2.12 2.14c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 0 0 2.12-2.14C24 15.93 24 12 24 12s0-3.93-.5-5.81z"/><path fill="#fff" d="m9.55 15.57 6.27-3.57-6.27-3.57z"/></>,
    instagram: <><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></>,
    x: <path d="M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.41l-5.8-7.58-6.64 7.58H.47l8.6-9.83L0 1.15h7.59l5.24 6.93zm-1.29 19.5h2.04L6.49 3.24H4.3z" />,
    reddit: <path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm5.01 4.74a1.25 1.25 0 1 0-1.95.94l-2.91-.62a.34.34 0 0 0-.41.26l-.9 4.17c-1.87.06-3.56.62-4.79 1.5a1.76 1.76 0 1 0-.81 3.33c-.03.17-.05.35-.05.53 0 2.7 3.12 4.87 7 4.87s7-2.17 7-4.87c0-.18-.02-.36-.04-.52a1.76 1.76 0 1 0-2.95-1.11c-1.2-.86-2.85-1.42-4.68-1.49l.8-3.75 2.6.55a1.25 1.25 0 0 0 2.09-1.09zM8.6 13.02a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zm6.8 0a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0 2.5z" />,
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

export function WindowPeeperHome({ creditsPerUsd = 12, videoCosts = getVideoCostTable() }: { creditsPerUsd?: number; videoCosts?: ReturnType<typeof getVideoCostTable> }) {
  const locale = useLocale();
  const zh = locale === 'zh';
  const t = (en: string, cn: string) => zh ? cn : en;
  useEffect(() => { track('view_template', { template: 'window_peeper' }); }, []);
  const [template, setTemplate] = useState<WindowPeeperTemplate>(windowPeeperTemplates[0]);
  const focusGenerator = () => { document.getElementById('generator')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); };
  const choose = (item: WindowPeeperTemplate = windowPeeperTemplates[0]) => { track('click_generate', { template: 'window_peeper', variant: item.id }); setTemplate(item); focusGenerator(); };
  const start = () => focusGenerator();
  const features = [
    [Eye, t('The stare is the punchline','咬汉堡 + 对视'), t('The camera pushes in on the one lit window. Mid-chew they freeze and stare straight back — then slam the curtain.','镜头推向唯一的亮灯窗户，嚼到一半僵住、直勾勾盯着镜头——最后「唰」地拉上窗帘。')],
    [Video, t('One photo, you are caught','一张照片，被抓住的就是你'), t('Your face sits at the window with the burger. The dark block, the push-in and the curtain stay.','坐在窗边吃汉堡的人换成你的脸。暗楼、推镜和窗帘都留着。')],
    [Users, t('Six ways to get caught','六种被抓住的方式'), t('Hoodie Teen, Bean Look, Football Jersey, Shades Dude, Redhead or Late-Night Snacks — same beats, different you.','白卫衣少年、憨豆同款、球衣球星、墨镜大叔、红发夹克或深夜快餐——同样的节拍，换的是你。')],
    [Smartphone, t('Vertical, ready to post','竖屏，拿去就能发'), t('Opens on 9:16. Add the trend sound in TikTok or Reels so the post sits with the rest of the format.','默认 9:16。发到 TikTok 或 Reels 时加上趋势原声，帖子才会进同一条趋势。')],
  ] as const;
  const steps = [
    [t('Pick a template','选择模板'), t('Six casts, the same six-beat joke. Pick the one that fits the photo.','六种角色，同一段六拍笑点。选一个和照片最配的。')],
    [t('Upload one photo','上传一张照片'), t('Front-facing, face clear, decent light. Waist-up or full-body works best.','正脸、五官清楚、光线别太暗。半身或全身照效果最好。')],
    [t('Set ratio, resolution, length','选画幅、清晰度和时长'), t('9:16 is the default. The credit cost updates before you generate.','默认 9:16。积分会在你点生成之前按选项更新。')],
    [t('Download and post','下载并发布'), t('Export the MP4, then add the trend sound in TikTok or Reels.','导出 MP4，再到 TikTok 或 Reels 里加上趋势原声。')],
  ];
  const faq = WINDOW_PEEPER_FAQ[zh ? 'zh' : 'en'];
  const howToJsonLd = buildHowToJsonLdFromSteps({
    name: t('How to make a Window Peeper AI video', '如何制作 Window Peeper AI 视频'),
    description: t('From one photo to a vertical clip in about a minute — no app, no editor.', '一张照片到一条竖屏视频大约一分钟——不用装 App，不用会剪辑。'),
    steps: steps.map(([name, text]) => ({ name, text })),
  });
    return <div className="viral-home">{howToJsonLd ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} /> : null}
    <ViralHeader onStart={start}/>
    <main>
      <section className="hero"><div className="container"><div className="hero-badge"><Flame size={16}/><span>#windowpeeper is trending</span></div><h1>{t('Upload one photo — no prompt needed. Generate your ', '上传一张照片，无需提示词，立即生成你的 ')}<span className="hl">Window Peeper</span>{t(' AI video instantly', ' AI 视频')}</h1><TemplateGenerator key={template.id} template={template} open embedded onOpenChange={() => {}} preferModel="MiniMax-H3"/></div></section>
      <section className="sec templates-section" id="templates"><div className="container"><div className="sec-head"><p className="kick">{t('Templates','模板')}</p><h2>{t('Same window, same six beats','同扇窗，同六个节拍')}</h2><p className="sub">{t('Every card is the same caught-at-the-window clip with a different lead. Click one to open the generator.','每张卡片都是同一条窗边被拍，换的是主角。点击卡片打开生成器。')}</p></div><div className="grid3">{windowPeeperTemplates.map((item, index) => <article className="tcard" key={item.id}><button className="tv tv-full" aria-label={`${t('Use','使用')} ${item.name[zh ? 1 : 0]}`} onClick={() => choose(item)} style={{ '--g1': item.colors[0], '--g2': item.colors[1] } as CSSProperties}><TemplateVideo id={item.id} colors={item.colors} credit={item.credit}/>{index === 0 && <span className="hot">HOT</span>}<span className="tv-expand"><Maximize size={18}/></span><span className="tv-play"><Play size={16}/></span><span className="tv-bar"><i/></span></button><div className="tmeta"><b>{item.name[zh ? 1 : 0]}</b></div><button className="use" onClick={() => choose(item)}>{t('Generate','立即生成')}</button></article>)}</div></div></section>
      <div className="logos"><p className="lbl">{t('Creators are posting ViralReel videos on','创作者们正在这些平台发布 ViralReel 视频')}</p><div className="row"><span className="soc tiktok"><PlatformIcon type="tiktok"/>TikTok</span><span className="soc youtube"><PlatformIcon type="youtube"/>YouTube Shorts</span><span className="soc instagram"><PlatformIcon type="instagram"/>Instagram Reels</span><span className="soc x"><PlatformIcon type="x"/>X / Twitter</span><span className="soc reddit"><PlatformIcon type="reddit"/>Reddit</span></div></div>
      <section className="stats"><div className="container stats-grid"><div><div className="statnum">60<em>s</em></div><p>{t('Average render time','平均渲染时长')}</p></div><div><div className="statnum">9:16</div><p>{t('Vertical export for TikTok, Reels and Shorts','竖屏导出，适配 TikTok、Reels、Shorts')}</p></div><div><div className="statnum">{Math.min(...videoCosts.flatMap(row => row.costs.map(item => item.credits)))}<em className="wide-em">{t(' credits / video from', ' 积分 / 条起')}</em></div><p>{t(`Top-ups available · ${creditsPerUsd} credits = $1`,`随时可加购 · ${creditsPerUsd} 积分 = 1 美元`)}</p></div></div></section>
      <section className="sec sec-alt" id="what"><div className="container"><div className="sec-head"><p className="kick">{t('What is Window Peeper','Window Peeper 是什么')}</p><h2>{t('The caught-at-the-window clip everyone is remaking','大家正在重拍的「窗边被拍」')}</h2><p className="sub">{t('A lit window at night, a burger, a stare, a curtain — rebuilt from one photo.','夜晚的亮灯窗户、汉堡、对视、窗帘——一张照片重新搭出来。')}</p></div><div className="grid4">{features.map(([Icon,title,desc]) => <div className="feat" key={title}><div className="ic"><Icon size={20}/></div><h3>{title}</h3><p>{desc}</p></div>)}</div></div></section>
      <section className="sec" id="how"><div className="container"><div className="sec-head"><p className="kick">{t('How it works','使用教程')}</p><h2>{t('How to make a Window Peeper AI video','如何制作 Window Peeper AI 视频')}</h2><p className="sub">{t('From one photo to a vertical clip in about a minute — no app, no editor.','一张照片到一条竖屏视频大约一分钟——不用装 App，不用会剪辑。')}</p></div><div className="grid4s">{steps.map(([title,desc],i) => <div className="step" key={title}><div className="num">{i+1}</div><h3>{title}</h3><p>{desc}</p></div>)}</div></div></section>
      <section className="sec" id="guide"><div className="container guide"><div className="sec-head"><p className="kick">{t('Guide','指南')}</p><h2>{t('Window Peeper AI: the trend, the beats, and where to make one','Window Peeper AI：趋势、节拍，以及在哪里制作')}</h2></div>
        <figure className="guide-fig"><img src="/templates/window-peeper-ai-og.jpg" alt="Window Peeper AI template on ViralReel — caught eating at the lit window" width={1200} height={630} loading="lazy"/><figcaption>{t('Make the Window Peeper clip on ViralReel (viralreel.app) from one photo.','在 ViralReel（viralreel.app）用一张照片制作 Window Peeper 视频。')}</figcaption></figure>
        <h3>{t('What is the Window Peeper video?','Window Peeper 视频是什么？')}</h3>
        <p>{t('A 14-second night clip filmed from across the street. The camera pushes in on the one lit window of a dark apartment block. Inside, someone sits at a small table with a burger and a red takeout box. Mid-chew they freeze, stare straight into the lens without blinking for a few seconds, set the burger down, stand up and yank the curtain shut — and the clip ends with just the lamp glowing through the fabric.','一条 14 秒的夜晚街头视角视频。镜头从马路对面缓缓推向一栋暗楼里唯一亮灯的窗户。窗里有人坐在小桌前，手边一个汉堡和红色的外卖盒。嚼到一半他突然僵住，不眨眼地直视镜头几秒，放下汉堡，站起来一把拽上窗帘——片子最后只剩台灯的光从帘布后面透出来。')}</p>
        <h3>{t('Where did the Window Peeper trend come from?','Window Peeper 趋势从哪来的？')}</h3>
        <p>{t('The scene first appeared on 11 October 2026, when AI creator @karina.aicontent posted a concept ad for a burger chain built on this exact window shot — it passed 25 million views. On 20 October, @therealrodentspawn turned the scene into the first CapCut template with the caption "Try this filter yourself", and @isabellacapcut\'s template version passed 4.6 million views within two days. Face swaps, footballer versions and pet remakes followed within hours: by 22 October #windowpeeperfilter, #windowpeepertrend and #windowpeeperai were all filling TikTok feeds, and tutorials for the template were being posted in English, Portuguese, Spanish and French.','这个场景最早出现在 2026 年 10 月 11 日——AI 创作者 @karina.aicontent 用这个窗口镜头给一家汉堡连锁做了条概念广告，播放量超过 2500 万。10 月 20 日，@therealrodentspawn 把它做成了第一个 CapCut 模板，配文「Try this filter yourself」；@isabellacapcut 的模板帖两天内播放破 460 万。换脸版、球星版和宠物版在几小时内跟进：到 10 月 22 日，#windowpeeperfilter、#windowpeepertrend 和 #windowpeeperai 同时刷屏 TikTok，英、葡、西、法语的模板教程也开始铺开。')}</p>
        <h3>{t('Why did it go viral?','它为什么会爆火？')}</h3>
        <p>{t('The joke lands because it runs on two instincts at once. First, voyeurism: the camera sees into a stranger\'s lit window, something you are not supposed to see. Second, the reversal: the stranger sees the camera right back. The long, unblinking stare turns a cozy burger moment into a standoff, and the curtain slam closes it like a punchline. The documentary push-in, shot like a phone from across the street, makes an obviously generated clip feel caught on camera — and a fixed six-beat structure means every remake is readable in one second and only the person in the window changes.','它的爆点在于同时踩中两种本能。第一是窥视感：镜头看到了本不该看的、陌生人亮灯的窗户。第二是反转：陌生人立刻看了回来。长达几秒不眨眼的对视，把安静的吃汉堡时刻变成对峙，最后猛地拉上窗帘像一句收尾的包袱。从街对面用手机拍下的纪实推镜，让一条明显是生成的片子像真的被拍到一样——而固定的六拍结构让每个重拍一秒就能读懂，窗里的人一换，笑点原样成立。')}</p>
        <h3>{t('Where can I generate a Window Peeper AI video?','在哪里可以生成 Window Peeper AI 视频？')}</h3>
        <p>{t('On ViralReel, at https://www.viralreel.app/window-peeper-ai-template. ViralReel (viralreel.app) is an independent AI video template site. You upload one photo in the browser. You do not install an app, hunt down the CapCut template, or write a prompt. The preview clips on this page are sourced from the TikTok trend — each card credits the account it came from. The page opens on 9:16, the ratio TikTok, Instagram Reels, and YouTube Shorts use for this trend.','在 ViralReel：https://www.viralreel.app/zh/window-peeper-ai-template 。ViralReel（viralreel.app）是独立的 AI 视频模板站。在浏览器里上传一张照片即可，不用装 App，不用自己找 CapCut 模板，也不用写提示词。本页的预览片段来自 TikTok 趋势原片，每张卡片都标注了来源账号。页面默认 9:16，也就是这条趋势在 TikTok、Instagram Reels 和 YouTube Shorts 上使用的画幅。')}</p>
        <h3>{t('Is the Window Peeper clip AI?','Window Peeper 是 AI 做的吗？')}</h3>
        <p>{t('Both halves of the story are AI. The original burger-chain ad was AI-generated, and almost every popular remake — including the CapCut template versions driving the trend — recasts the person in the window with an AI face or a photo of a real one. That is exactly why the format spread so fast: if the lead is generated anyway, swapping in your own photo is the obvious next move, no editing skills required.','故事的两半都是 AI。原版汉堡广告是 AI 生成的，几乎所有热门重拍——包括带火这条趋势的 CapCut 模板版——窗里的人也都是 AI 换的脸或用真人照片替换的。这正是它传播这么快的原因：主角本来就是生成的，换成你自己的照片就是顺理成章的下一步，完全不需要剪辑功底。')}</p>
        <p className="guide-more"><Link href="/bby-wow-ai-dance-template">{t('Want the party-guy format? See the Bby Wow AI dance template','想玩派对老哥格式？看 Bby Wow AI 跳舞模板')} →</Link></p>
      </div></section>
      <section className="sec sec-alt" id="faq"><div className="container"><div className="sec-head"><p className="kick">{t('FAQ','常见问题')}</p><h2>{t('Frequently asked questions about Window Peeper','关于 Window Peeper 的常见问题')}</h2></div><div className="faq-list">{faq.map(([question,answer],i) => <details key={question} open={i === 0}><summary>{question}</summary><p>{answer}</p></details>)}</div></div></section>
      <section className="final-cta sec-alt"><div className="container"><h2>{t('Ready to get caught?','准备好被「抓住」了吗？')}</h2><p>{t('Upload one photo and take the seat at the window while the trend is still growing.','上传一张照片，趁趋势还在涨，坐到那扇窗边去。')}</p><button className="btn btn-primary btn-lg" onClick={start}>{t('Upload 1 photo — start now','上传 1 张照片，立即开始')}<ArrowRight size={16}/></button></div></section>
    </main>
    <ViralFooter/>
  </div>;
}
