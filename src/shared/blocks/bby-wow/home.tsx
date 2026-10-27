'use client';

/* eslint-disable @next/next/no-img-element */

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';
import { ArrowRight, Cake, Flame, Maximize, Play, Smartphone, Users, Video, Volume2, VolumeX } from 'lucide-react';
import { useLocale } from 'next-intl';
import { track } from '@/shared/lib/analytics';
import { Link } from '@/core/i18n/navigation';
import { TemplateGenerator } from '@/shared/blocks/viral-home/generator';
import { ViralHeader } from '@/shared/blocks/viral-home/header';
import { ViralFooter } from '@/shared/blocks/viral-home/footer';
import { buildHowToJsonLdFromSteps } from '@/shared/lib/howto-schema';
import { getVideoCostTable } from '@/shared/lib/video-cost';
import { getBbyWowFaq } from './faq';
import { BbyLinkCluster } from './link-cluster';
import { BBY_HOW_TO_STEPS } from './steps';
import { bbyWowTemplates, type BbyWowTemplate } from './templates';
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

export function BbyWowHome({ creditsPerUsd = 12, videoCosts = getVideoCostTable(), pageUrl }: { creditsPerUsd?: number; videoCosts?: ReturnType<typeof getVideoCostTable>; pageUrl?: string }) {
  const locale = useLocale();
  const zh = locale === 'zh';
  const t = (en: string, cn: string) => zh ? cn : en;
  useEffect(() => { track('view_template', { template: 'bby_wow' }); }, []);
  const [template, setTemplate] = useState<BbyWowTemplate>(bbyWowTemplates[0]);
  const focusGenerator = () => { document.getElementById('generator')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); };
  const choose = (item: BbyWowTemplate = bbyWowTemplates[0]) => { track('click_generate', { template: 'bby_wow', variant: item.id }); setTemplate(item); focusGenerator(); };
  const start = () => focusGenerator();
  const features = [
    [Cake, t('The bread-bite party exit','咬面包 + 瞪镜头'), t('Walk in, take a big bite of a sweet bread, chew staring into the lens, dance away — the four-beat joke, staged for your photo.','走向镜头、咬一大口甜面包、嚼着与镜头对视、跳舞离场——四拍笑点，已经按你的照片搭好。')],
    [Video, t('One photo, you are the guy','一张照片，你就是主角'), t('Your face crosses the party floor. The pink-lit hall, the tables and the dancing guests stay.','穿过舞池的人换成你的脸。粉紫灯光的宴会厅、桌椅和跳舞的宾客都留着。')],
    [Users, t('Three ways into the same party','同一场派对的三种进法'), t('Suit Original, White Tee or Staff Polo — same party, same four beats, different you.','西装原版、白 T 派对版或黑 Polo 版——同一场派对，同四个节拍，换的是你。')],
    [Smartphone, t('Vertical, ready to post','竖屏，拿去就能发'), t('Opens on 9:16. Add the BbY WOW sound in TikTok or Reels so the post sits with the rest of the format.','默认 9:16。发到 TikTok 或 Reels 时加上 BbY WOW 原声，帖子才会进同一条趋势。')],
  ] as const;
  const steps = BBY_HOW_TO_STEPS.map((step) => [zh ? step.name.zh : step.name.en, zh ? step.text.zh : step.text.en] as const);
  const faq = getBbyWowFaq(zh, { videoCosts, creditsPerUsd });
  const howToJsonLd = buildHowToJsonLdFromSteps({
    name: t('How to make a Bby Wow AI dance video', '如何制作 Bby Wow AI 跳舞视频'),
    description: t('Upload one photo on ViralReel, generate a fictional bread-bite party clip, download the MP4, then add the trend sound and the AI label on TikTok, Reels, or Shorts.', '在 ViralReel 上传一张照片，生成虚构的咬面包派对短片，下载 MP4，再在 TikTok、Reels 或 Shorts 上加上热梗原声和 AI 标注。'),
    url: pageUrl,
    steps: steps.map(([name, text]) => ({ name, text })),
  });
    return <div className="viral-home">{howToJsonLd ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} /> : null}
    <ViralHeader onStart={start}/>
    <main>
      <section className="hero"><div className="container"><div className="hero-badge"><Flame size={16}/><span>#bbywow is trending</span></div><h1>{t('How to make a ', '如何在 ViralReel 制作 ')}<span className="hl">Bby Wow</span>{t(' AI dance video on ViralReel', ' AI 跳舞视频')}</h1><TemplateGenerator key={template.id} template={template} open embedded onOpenChange={() => {}} preferModel="MiniMax-H3"/></div></section>
      <section className="sec templates-section" id="templates"><div className="container"><div className="sec-head"><p className="kick">{t('Templates','模板')}</p><h2>{t('Same party, same four beats','同一场派对，同四个节拍')}</h2><p className="sub">{t('Every card is the same bread-bite exit with a different lead. Click one to open the generator.','每张卡片都是同一段咬面包离场，换的是主角。点击卡片打开生成器。')}</p></div><div className="grid3">{bbyWowTemplates.map((item, index) => <article className="tcard" key={item.id}><button className="tv tv-full" aria-label={`${t('Use','使用')} ${item.name[zh ? 1 : 0]}`} onClick={() => choose(item)} style={{ '--g1': item.colors[0], '--g2': item.colors[1] } as CSSProperties}><TemplateVideo id={item.id} colors={item.colors}/>{index === 0 && <span className="hot">HOT</span>}<span className="tv-expand"><Maximize size={18}/></span><span className="tv-play"><Play size={16}/></span><span className="tv-bar"><i/></span></button><div className="tmeta"><b>{item.name[zh ? 1 : 0]}</b></div><button className="use" onClick={() => choose(item)}>{t('Generate','立即生成')}</button></article>)}</div></div></section>
      <div className="logos"><p className="lbl">{t('Creators are posting ViralReel videos on','创作者们正在这些平台发布 ViralReel 视频')}</p><div className="row"><span className="soc tiktok"><PlatformIcon type="tiktok"/>TikTok</span><span className="soc youtube"><PlatformIcon type="youtube"/>YouTube Shorts</span><span className="soc instagram"><PlatformIcon type="instagram"/>Instagram Reels</span><span className="soc x"><PlatformIcon type="x"/>X / Twitter</span><span className="soc reddit"><PlatformIcon type="reddit"/>Reddit</span></div></div>
      <section className="stats"><div className="container stats-grid"><div><div className="statnum">60<em>s</em></div><p>{t('Average render time','平均渲染时长')}</p></div><div><div className="statnum">9:16</div><p>{t('Vertical export for TikTok, Reels and Shorts','竖屏导出，适配 TikTok、Reels、Shorts')}</p></div><div><div className="statnum">{Math.min(...videoCosts.flatMap(row => row.costs.map(item => item.credits)))}<em className="wide-em">{t(' credits / video from', ' 积分 / 条起')}</em></div><p>{t(`Top-ups available · ${creditsPerUsd} credits = $1`,`随时可加购 · ${creditsPerUsd} 积分 = 1 美元`)}</p></div></div></section>
      <section className="sec sec-alt" id="what"><div className="container"><div className="sec-head"><p className="kick">{t('What is Bby Wow','Bby Wow 是什么')}</p><h2>{t('The bread-bite party exit everyone is remaking','大家正在重拍的咬面包离场')}</h2><p className="sub">{t('A pink-lit party hall, a walk toward the camera, a bite, a stare — rebuilt from one photo.','粉紫灯光的宴会厅、走向镜头、咬一口、一个对视——一张照片重新搭出来。')}</p></div><div className="grid4">{features.map(([Icon,title,desc]) => <div className="feat" key={title}><div className="ic"><Icon size={20}/></div><h3>{title}</h3><p>{desc}</p></div>)}</div></div></section>
      <section className="sec" id="how"><div className="container"><div className="sec-head"><p className="kick">{t('How it works','使用教程')}</p><h2>{t('How to make a Bby Wow AI dance video','如何制作 Bby Wow AI 跳舞视频')}</h2><p className="sub">{t('From one photo to a vertical clip in about a minute — no app, no editor.','一张照片到一条竖屏视频大约一分钟——不用装 App，不用会剪辑。')}</p></div><div className="grid4s">{steps.map(([title,desc],i) => <div className="step" key={title}><div className="num">{i+1}</div><h3>{title}</h3><p>{desc}</p></div>)}</div></div></section>
      <section className="sec" id="guide"><div className="container guide"><div className="sec-head"><p className="kick">{t('Guide','指南')}</p><h2>{t('Bby Wow AI dance: why it went viral, and where to make one','Bby Wow AI 跳舞视频：为什么爆火，以及在哪里制作')}</h2></div>
        <figure className="guide-fig"><img src="/templates/bby-wow-ai-dance-og.jpg" alt="Bby Wow AI dance template on ViralReel — the bread-bite party exit" width={1200} height={630} loading="lazy"/><figcaption>{t('Make the Bby Wow party clip on ViralReel (viralreel.app) from one photo.','在 ViralReel（viralreel.app）用一张照片制作 Bby Wow 派对视频。')}</figcaption></figure>
        <h3>{t('What is the Bby Wow dance video?','Bby Wow 跳舞视频是什么？')}</h3>
        <p>{t('"BbY WOW" is a song by KAROL G, Judeline and rusowsky that powered a bouncy dance trend across TikTok from late August 2026 — creator @bigbowee\'s "dime dime baby" clip passed 15 million views, KAROL G posted her own version with her crew in October, and dance schools and friend groups kept the format moving. The other half of the trend is older: a quinceañera party clip of a young man who walks toward the camera, takes a big bite of a round sweet bread, chews with his cheeks full while staring deadpan into the lens, then turns and dances away. That "bby wow guy" clip came back in October 2026, and AI remakes put new faces into his spot.','《BbY WOW》是 KAROL G、Judeline 和 rusowsky 的歌，从 2026 年 8 月底开始带火一段弹跳感十足的舞蹈——创作者 @bigbowee 的「dime dime baby」那条播放超过 1500 万，KAROL G 十月也带着团队跳了一条，舞蹈教室和朋友组队跟拍，格式一直没停。趋势的另一半更早：一段生日宴派对视频里，年轻男子走向镜头、咬一大口圆形甜面包、腮帮子鼓着面无表情地直视镜头，然后转身跳舞离场。这段「bby wow guy」老片在 2026 年 10 月翻红，AI 重拍开始把新的脸放进他的位置。')}</p>
        <h3>{t('Why did the Bby Wow video go viral?','Bby Wow 这条视频为什么会爆火？')}</h3>
        <p>{t('It went viral because the joke is built on a mismatch anyone can read in one second: lively party, casual walk-in, then a completely serious stare while chewing. The bite is the setup, the stare is the punchline, and the dance exit closes it. Because the four beats never change, the format is easy to recognize and easy to remake — swap the person, keep the bread, the stare and the exit. By mid-October 2026 #bbywow had over 100,000 videos and hundreds of millions of views, and AI versions of the party guy spread across TikTok, X and Instagram alongside the dance.','它会爆，是因为笑点建立在一个一秒就能读懂的反差上：热闹的派对、随意的入场，然后是嚼面包时完全严肃的对视。咬面包是铺垫，对视是笑点，跳舞离场收尾。四个节拍从不改变，所以格式既好认又好翻拍——换掉人，保留面包、对视和离场。到 2026 年 10 月中旬，#bbywow 已有超过 10 万条视频和数亿次播放，派对老哥的 AI 版与舞蹈版一起传遍了 TikTok、X 和 Instagram。')}</p>
        <h3>{t('Where can I generate a Bby Wow AI dance video?','在哪里可以生成 Bby Wow AI 跳舞视频？')}</h3>
        <p>{t('On ViralReel, at https://www.viralreel.app/bby-wow-ai-dance-template. ViralReel (viralreel.app) is an independent AI video template site. You upload one photo in the browser. You do not install an app, hunt down a reference clip, or write a prompt. The Bby Wow templates are Suit Original, White Tee, and Staff Polo. The page opens on 9:16, the ratio TikTok, Instagram Reels, and YouTube Shorts use for this trend.','在 ViralReel：https://www.viralreel.app/zh/bby-wow-ai-dance-template 。ViralReel（viralreel.app）是独立的 AI 视频模板站。在浏览器里上传一张照片即可，不用安装 App，不用自己找参考视频，也不用写提示词。Bby Wow 的模板有西装原版、白 T 派对版和黑 Polo 版。页面默认 9:16，也就是这条趋势在 TikTok、Instagram Reels 和 YouTube Shorts 上使用的画幅。')}</p>
        <h3>{t('How do you make a Bby Wow AI dance video?','怎么制作 Bby Wow AI 跳舞视频？')}</h3>
        <ol>{steps.map(([name, text]) => <li key={name}><strong>{name}.</strong> {text}</li>)}</ol>
        <p className="guide-more"><Link href="/blog/how-to-make-bby-wow-ai-dance-video">{t('Read the full how-to','阅读完整教程')}</Link> · <Link href="/blog/what-is-dime-dime-baby">{t('What dime dime baby is','Dime dime baby 是什么')}</Link> · <Link href="/blog/how-to-make-dime-dime-baby-ai-video">{t('Make and post a Dime Dime Baby AI video','制作并发布 Dime Dime Baby AI 视频')}</Link> · <Link href="/blog/pedra-do-sal-and-bby-wow-vs-prompt-tools">{t('Templates vs a prompt tool','模板和提示词工具对比')}</Link> · <Link href="/pricing">{t('Pricing','定价')}</Link> · <Link href="/subscribe">{t('Monthly plans','月付方案')}</Link> · <Link href="/">{t('All templates','全部模板')}</Link></p>
        <p>{t('A text prompt such as "a guy eating bread at a party" invents a new scene with new guests. The ViralReel template is built to keep this format: the pink-lit hall, the tables, the dancing guests, and your photo in the four-beat sequence.','如果只写一句「一个在派对上吃面包的人」，模型会另拍一个新场景、换一批宾客。ViralReel 的模板是按这个格式来的：粉紫灯光的宴会厅、桌椅、跳舞的宾客，四拍序列里用你的照片。')}</p>
        <h3>{t('Is Bby Wow the song or the bread-bite clip?','Bby Wow 到底是歌还是咬面包那条？')}</h3>
        <p>{t('Both, and the trend mixes them. BbY WOW is the KAROL G song behind the dance; the bread-bite party clip is the "bby wow guy" meme that now usually plays under that sound. People searching for a Bby Wow AI dance usually want one of the two remakes: the dance, or the guy at the party. The ViralReel template recreates the party-guy format.','两者都是，这条趋势把它们混在了一起。BbY WOW 是 KAROL G 那首带火舞蹈的歌；咬面包的派对老片则是「bby wow guy」梗，现在通常配着这首歌玩。搜 Bby Wow AI 跳舞的人，想要的通常是两种重拍之一：跳舞，或派对老哥。ViralReel 的模板重现的是派对老哥这个格式。')}</p>
        <h3>{t('What is dime dime baby?','Dime dime baby 是什么？')}</h3>
        <p>{t('“Dime dime baby” is the nickname on @bigbowee’s dance TikTok and a sound alias for BbY WOW. It is not a third product, not a song download, and not the bread-bite file. On ViralReel the alias points at this same template: one photo, Suit Original, White Tee, or Staff Polo, then the trend sound and an AI label added in TikTok, Reels, or Shorts. The three files are separated at https://www.viralreel.app/blog/what-is-dime-dime-baby.','「Dime dime baby」是 @bigbowee 那条舞蹈 TikTok 上的别名，也是《BbY WOW》的声音别名。它不是第三个产品，不是歌曲下载，也不是咬面包那个文件。在 ViralReel，这个别名指向同一个模板：一张照片，西装原版、白 T 派对版或黑 Polo 版，然后在 TikTok、Reels 或 Shorts 里加热梗原声和 AI 标注。三个文件拆开写在 https://www.viralreel.app/zh/blog/what-is-dime-dime-baby。')}</p>
        <p className="guide-more"><Link href="/blog/what-is-dime-dime-baby">{t('Read the explainer','阅读说明')}</Link> · <Link href="/blog/how-to-make-dime-dime-baby-ai-video">{t('Make and post the AI video','制作并发布这条 AI 视频')}</Link> · <Link href="/dime-dime-baby">{t('Dime dime baby','Dime dime baby')}</Link> · <Link href="/dime-dime-baby-song">{t('The song nickname','歌曲别名')}</Link> · <Link href="/bby-wow-from-photo">{t('From one photo','从一张照片开始')}</Link></p>
        <p className="guide-more"><Link href="/pedra-do-sal-ai-template">{t('Want the Rio night square? See Pedra do Sal','想做里约夜场广场？看 Pedra do Sal')}</Link> · <Link href="/burning-bridges-ai-template">{t('Want the other party format? See Burning Bridges','想做另一场派对？看 Burning Bridges')}</Link> · <Link href="/hit-the-road-dude-ai-template">{t('Hit the Road Dude','Hit the Road Dude')}</Link> · <Link href="/blog/ba-ba-ba-dance-trend">{t('October duo dance: the Ba Ba Ba trend','10 月双人舞：Ba Ba Ba 趋势')}</Link> · <Link href="/blog/how-to-make-ba-ba-ba-dance-ai-video">{t('Make that duo from two photos','用两张照片做这条双人舞')}</Link></p>
      </div></section>
      <section className="sec sec-alt" id="faq"><div className="container"><div className="sec-head"><p className="kick">{t('FAQ','常见问题')}</p><h2>{t('Frequently asked questions about Bby Wow','关于 Bby Wow 的常见问题')}</h2></div><div className="faq-list">{faq.map(([question,answer],i) => <details key={question} open={i === 0}><summary>{question}</summary><p>{answer}</p></details>)}</div><p className="guide-more"><Link href="/blog/how-to-make-bby-wow-ai-dance-video">{t('Full how-to','完整教程')}</Link> · <Link href="/blog/what-is-dime-dime-baby">{t('What dime dime baby is','Dime dime baby 是什么')}</Link> · <Link href="/blog/how-to-make-dime-dime-baby-ai-video">{t('Make and post','制作并发布')}</Link> · <Link href="/pricing">{t('Pricing','定价')}</Link> · <Link href="/subscribe">{t('Monthly plans','月付方案')}</Link> · <Link href="/">{t('Homepage','首页')}</Link> · <Link href="/pedra-do-sal-ai-template">{t('Pedra do Sal','Pedra do Sal')}</Link></p></div></section>
      <section className="sec" id="related"><div className="container"><div className="sec-head"><p className="kick">{t('Related','相关')}</p><h2>{t('Bby Wow guides on ViralReel','ViralReel 上的 Bby Wow 指南')}</h2></div><BbyLinkCluster zh={zh} currentPath="/bby-wow-ai-dance-template" /></div></section>
      <section className="final-cta sec-alt"><div className="container"><h2>{t('Ready to take the bread bite?','准备好来咬这一口了吗？')}</h2><p>{t('Upload one photo and join the party clip while the sound is still moving.','上传一张照片，趁这段声音还在传的时候进这条派对片子。')}</p><button className="btn btn-primary btn-lg" onClick={start}>{t('Upload 1 photo — start now','上传 1 张照片，立即开始')}<ArrowRight size={16}/></button></div></section>
    </main>
    <ViralFooter/>
  </div>;
}
