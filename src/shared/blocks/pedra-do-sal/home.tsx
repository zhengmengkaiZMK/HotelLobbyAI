'use client';

/* eslint-disable @next/next/no-img-element */

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';
import { ArrowRight, Flame, Maximize, Mic, Play, Smartphone, Users, Video, Volume2, VolumeX } from 'lucide-react';
import { useLocale } from 'next-intl';
import { track } from '@/shared/lib/analytics';
import { Link } from '@/core/i18n/navigation';
import { TemplateGenerator } from '@/shared/blocks/viral-home/generator';
import { ViralHeader } from '@/shared/blocks/viral-home/header';
import { ViralFooter } from '@/shared/blocks/viral-home/footer';
import { buildHowToJsonLdFromSteps } from '@/shared/lib/howto-schema';
import { getVideoCostTable } from '@/shared/lib/video-cost';
import { getPedraDoSalFaq } from './faq';
import { PedraLinkCluster } from './link-cluster';
import { PEDRA_HOW_TO_STEPS } from './steps';
import { pedraDoSalTemplates, type PedraTemplate } from './templates';
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

export function PedraDoSalHome({ creditsPerUsd = 12, videoCosts = getVideoCostTable(), pageUrl }: { creditsPerUsd?: number; videoCosts?: ReturnType<typeof getVideoCostTable>; pageUrl?: string }) {
  const locale = useLocale();
  const zh = locale === 'zh';
  const t = (en: string, cn: string) => zh ? cn : en;
  useEffect(() => { track('view_template', { template: 'pedra_do_sal' }); }, []);
  const [template, setTemplate] = useState<PedraTemplate>(pedraDoSalTemplates[0]);
  const focusGenerator = () => { document.getElementById('generator')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); };
  const choose = (item: PedraTemplate = pedraDoSalTemplates[0]) => { track('click_generate', { template: 'pedra_do_sal', variant: item.id }); setTemplate(item); focusGenerator(); };
  const start = () => focusGenerator();
  const features = [
    [Mic, t('The Rio street-party groove','里约街头的淡定律动'), t('A packed stone square at night, market tents, floodlights over the crowd — the October 2026 clip from Rio, staged for your photo.','夜晚挤满人的石阶广场、市集帐篷、人群上方的探照灯——2026 年 10 月那条里约热片，已经按你的照片搭好场。')],
    [Video, t('One photo, you dance','一张照片，你来跳'), t('Your face takes the dancer\'s spot in the middle. The square, the crowd and the one-take camera stay.','中间跳舞的人换成你的脸。广场、人群和一镜到底的镜头都留着。')],
    [Users, t('Three ways into the same crowd','同一个人群的三种进法'), t('Night Party, Goth Look, and Wizard Elder — same crowd, same groove, different you.','夜街派对、暗黑大衣、巫师长老——同一群人，同一种律动，换的是你。')],
    [Smartphone, t('Vertical, ready to post','竖屏，拿去就能发'), t('Opens on 9:16. Add the trend sound in TikTok or Reels so the post sits with the rest of the format.','默认 9:16。发到 TikTok 或 Reels 时加上趋势原声，帖子才会进同一条趋势。')],
  ] as const;
  const steps = PEDRA_HOW_TO_STEPS.map((step) => [zh ? step.name.zh : step.name.en, zh ? step.text.zh : step.text.en] as const);
  const faq = getPedraDoSalFaq(zh, { videoCosts, creditsPerUsd });
  const howToJsonLd = buildHowToJsonLdFromSteps({
    name: t('How to make a Pedra do Sal AI video', '如何制作 Pedra do Sal AI 视频'),
    description: t('Upload one photo on ViralReel, generate a fictional Rio night-square clip, download the MP4, then add the trend sound and the AI label on TikTok, Reels, or Shorts.', '在 ViralReel 上传一张照片，生成虚构的里约夜场广场短片，下载 MP4，再在 TikTok、Reels 或 Shorts 上加上热梗原声和 AI 标注。'),
    url: pageUrl,
    steps: steps.map(([name, text]) => ({ name, text })),
  });
    return <div className="viral-home">{howToJsonLd ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} /> : null}
    <ViralHeader onStart={start}/>
    <main>
      <section className="hero"><div className="container"><div className="hero-badge"><Flame size={16}/><span>#pedradoSal is trending</span></div><h1>{t('How to make a ', '如何在 ViralReel 制作 ')}<span className="hl">Pedra do Sal</span>{t(' AI video on ViralReel', ' AI 视频')}</h1><TemplateGenerator key={template.id} template={template} open embedded onOpenChange={() => {}} preferModel="MiniMax-H3"/></div></section>
      <section className="sec templates-section" id="templates"><div className="container"><div className="sec-head"><p className="kick">{t('Templates','模板')}</p><h2>{t('Same crowd, different you','同一个人群，换的是你')}</h2><p className="sub">{t('Every card is the same night-square groove with a different dancer. Click one to open the generator.','每张卡片都是同一段夜场广场律动，换的是中间的人。点击卡片打开生成器。')}</p></div><div className="grid3">{pedraDoSalTemplates.map((item, index) => <article className="tcard" key={item.id}><button className="tv tv-full" aria-label={`${t('Use','使用')} ${item.name[zh ? 1 : 0]}`} onClick={() => choose(item)} style={{ '--g1': item.colors[0], '--g2': item.colors[1] } as CSSProperties}><TemplateVideo id={item.id} colors={item.colors}/>{index === 0 && <span className="hot">HOT</span>}<span className="tv-expand"><Maximize size={18}/></span><span className="tv-play"><Play size={16}/></span><span className="tv-bar"><i/></span></button><div className="tmeta"><b>{item.name[zh ? 1 : 0]}</b></div><button className="use" onClick={() => choose(item)}>{t('Generate','立即生成')}</button></article>)}</div></div></section>
      <div className="logos"><p className="lbl">{t('Creators are posting ViralReel videos on','创作者们正在这些平台发布 ViralReel 视频')}</p><div className="row"><span className="soc tiktok"><PlatformIcon type="tiktok"/>TikTok</span><span className="soc youtube"><PlatformIcon type="youtube"/>YouTube Shorts</span><span className="soc instagram"><PlatformIcon type="instagram"/>Instagram Reels</span><span className="soc x"><PlatformIcon type="x"/>X / Twitter</span><span className="soc reddit"><PlatformIcon type="reddit"/>Reddit</span></div></div>
      <section className="stats"><div className="container stats-grid"><div><div className="statnum">60<em>s</em></div><p>{t('Average render time','平均渲染时长')}</p></div><div><div className="statnum">9:16</div><p>{t('Vertical export for TikTok, Reels and Shorts','竖屏导出，适配 TikTok、Reels、Shorts')}</p></div><div><div className="statnum">{Math.min(...videoCosts.flatMap(row => row.costs.map(item => item.credits)))}<em className="wide-em">{t(' credits / video from', ' 积分 / 条起')}</em></div><p>{t(`Top-ups available · ${creditsPerUsd} credits = $1`,`随时可加购 · ${creditsPerUsd} 积分 = 1 美元`)}</p></div></div></section>
      <section className="sec sec-alt" id="what"><div className="container"><div className="sec-head"><p className="kick">{t('What is Pedra do Sal','Pedra do Sal 是什么')}</p><h2>{t('The night-square groove everyone is remaking','大家正在重拍的夜场广场律动')}</h2><p className="sub">{t('Floodlights, market tents, a dense crowd — and one calm dancer in the middle, rebuilt from one photo.','探照灯、市集帐篷、密集的人群——中间一个淡定的舞者，一张照片重新搭出来。')}</p></div><div className="grid4">{features.map(([Icon,title,desc]) => <div className="feat" key={title}><div className="ic"><Icon size={20}/></div><h3>{title}</h3><p>{desc}</p></div>)}</div></div></section>
      <section className="sec" id="how"><div className="container"><div className="sec-head"><p className="kick">{t('How it works','使用教程')}</p><h2>{t('How to make a Pedra do Sal AI video','如何制作 Pedra do Sal AI 视频')}</h2><p className="sub">{t('From one photo to a vertical clip in about a minute — no app, no editor.','一张照片到一条竖屏视频大约一分钟——不用装 App，不用会剪辑。')}</p></div><div className="grid4s">{steps.map(([title,desc],i) => <div className="step" key={title}><div className="num">{i+1}</div><h3>{title}</h3><p>{desc}</p></div>)}</div></div></section>
      <section className="sec" id="guide"><div className="container guide"><div className="sec-head"><p className="kick">{t('Guide','指南')}</p><h2>{t('Pedra do Sal AI video: why it went viral, and where to make one','Pedra do Sal AI 视频：为什么爆火，以及在哪里制作')}</h2></div>
        <figure className="guide-fig"><img src="/templates/pedra-do-sal-og.jpg" alt="Pedra do Sal AI video template on ViralReel — Rio street-party groove" width={1200} height={630} loading="lazy"/><figcaption>{t('Make the Pedra do Sal dance on ViralReel (viralreel.app) from one photo.','在 ViralReel（viralreel.app）用一张照片制作 Pedra do Sal 跳舞视频。')}</figcaption></figure>
        <h3>{t('What is the Pedra do Sal video?','Pedra do Sal 这条视频是什么？')}</h3>
        <p>{t('Pedra do Sal is a historic stone square in Rio de Janeiro\'s port district, one of the birthplaces of samba, and the setting of the clip behind this trend. Posted on TikTok by @seuzerj on 16 October 2026, it shows an AI-generated elderly man — Seu Zé de Madureira — dancing charme in the middle of a packed night square: market tents, a floodlit building, hundreds of people dancing around him, all in one handheld take that looks like a bystander\'s phone video.','Pedra do Sal 是里约热内卢港口区的一座历史石阶广场，桑巴的发源地之一，也是这条热片的发生地。原片由 @seuzerj 在 2026 年 10 月 16 日发上 TikTok：AI 生成的老人「Seu Zé de Madureira」在挤满人的夜场广场中央跳 charme——市集帐篷、打光的楼房、围着他跳舞的几百号人，一镜到底，拍法就像旁观者的手机视频。')}</p>
        <h3>{t('Why did the Pedra do Sal video go viral?','Pedra do Sal 这条视频为什么会爆火？')}</h3>
        <p>{t('It went viral because of the contrast at its center: a calm, almost ceremonial dancer holding a steady groove while a huge crowd parties around him, in a square people recognize as real. The one-take handheld camera makes it feel found, not filmed, and the crowd is what every remake wants — the square, the tents, the floodlights, and the same dancing wall of people with one new face in the middle. That structure made the format: keep the crowd, swap the dancer. Versions with a girl in a pink T-shirt, figures in long black coats, and silver-bearded wizards spread across TikTok, X and Instagram within days.','它会爆，是因为画面中心的反差：一个近乎仪式感般淡定的舞者稳稳律动，周围是一大群狂欢的人，而广场又是大家一眼认得出是真实存在的地方。一镜到底的手持镜头让它像「被拍到」而不是「被拍出来」，而人群正是每个重拍都想要的东西——广场、帐篷、探照灯，和同一堵舞动的人墙，只是中间换了张脸。这个结构定义了格式：保留人群，换掉舞者。粉 T 恤女孩、黑色长大衣角色、银胡子巫师的版本几天内就传遍了 TikTok、X 和 Instagram。')}</p>
        <h3>{t('Where can I generate a Pedra do Sal AI video?','在哪里可以生成 Pedra do Sal AI 视频？')}</h3>
        <p>{t('On ViralReel, at https://www.viralreel.app/pedra-do-sal-ai-template. ViralReel (viralreel.app) is an independent AI video template site. You upload one photo in the browser. You do not install an app, hunt down a reference clip, or write a prompt. The Pedra do Sal templates are Night Party, Goth Look, and Wizard Elder. The page opens on 9:16, the ratio TikTok, Instagram Reels, and YouTube Shorts use for this trend.','在 ViralReel：https://www.viralreel.app/zh/pedra-do-sal-ai-template 。ViralReel（viralreel.app）是独立的 AI 视频模板站。在浏览器里上传一张照片即可，不用安装 App，不用自己找参考视频，也不用写提示词。Pedra do Sal 的模板有夜街派对、暗黑大衣和巫师长老。页面默认 9:16，也就是这条趋势在 TikTok、Instagram Reels 和 YouTube Shorts 上使用的画幅。')}</p>
        <h3>{t('How do you make a Pedra do Sal AI video?','怎么制作 Pedra do Sal AI 视频？')}</h3>
        <ol>{steps.map(([name, text]) => <li key={name}><strong>{name}.</strong> {text}</li>)}</ol>
        <p className="guide-more"><Link href="/blog/why-pedra-do-sal-ai-videos-went-viral">{t('Read the full how-to','阅读完整教程')}</Link> · <Link href="/blog/pedra-do-sal-and-bby-wow-vs-prompt-tools">{t('Templates vs a prompt tool','模板和提示词工具对比')}</Link> · <Link href="/pricing">{t('Pricing','定价')}</Link> · <Link href="/">{t('All templates','全部模板')}</Link></p>
        <p>{t('A text prompt such as "a person dancing in a square at night" invents a new scene with a new crowd. The ViralReel template is built to keep this format: the stone square, the tents, the floodlights, the dense crowd, and your photo in the middle.','如果只写一句「一个人在夜晚的广场跳舞」，模型会另拍一个新场景、换一群新人。ViralReel 的模板是按这个格式来的：石阶广场、帐篷、探照灯、密集人群，中间用你的照片。')}</p>
        <h3>{t('Is the dancing grandpa the same as the Pedra do Sal remakes?','跳舞老爷爷和 Pedra do Sal 重拍是同一条吗？')}</h3>
        <p>{t('The grandpa is the original; the remakes are the format. Seu Zé de Madureira is the AI-generated dancer in the clip that started the wave. Every version that keeps the square and the crowd while putting a new person in the middle — including the ones you can make here — follows the format that clip set. ViralReel is not affiliated with @seuzerj or the people behind the original.','老爷爷是原片，重拍是格式。Seu Zé de Madureira 是带火这波的片子里的 AI 舞者。所有保留广场和人群、只把中间换成新人的版本——包括你在这里能做的——都遵循原片定下的格式。ViralReel 与 @seuzerj 及原作者团队没有关系。')}</p>
        <p className="guide-more"><Link href="/bby-wow-ai-dance-template">{t('Want the bread-bite party? See Bby Wow','想做咬面包派对？看 Bby Wow')}</Link> · <Link href="/bulin-47-ai-template">{t('Want the street-freestyle format? See Bulin 47','想玩街头 freestyle？看 Bulin 47')}</Link> · <Link href="/hit-the-road-dude-ai-template">{t('Hit the Road Dude','Hit the Road Dude')}</Link></p>
      </div></section>
      <section className="sec sec-alt" id="faq"><div className="container"><div className="sec-head"><p className="kick">{t('FAQ','常见问题')}</p><h2>{t('Frequently asked questions about Pedra do Sal','关于 Pedra do Sal 的常见问题')}</h2></div><div className="faq-list">{faq.map(([question,answer],i) => <details key={question} open={i === 0}><summary>{question}</summary><p>{answer}</p></details>)}</div><p className="guide-more"><Link href="/blog/why-pedra-do-sal-ai-videos-went-viral">{t('Full how-to','完整教程')}</Link> · <Link href="/pricing">{t('Pricing','定价')}</Link> · <Link href="/">{t('Homepage','首页')}</Link> · <Link href="/bby-wow-ai-dance-template">{t('Bby Wow','Bby Wow')}</Link></p></div></section>
      <section className="sec" id="related"><div className="container"><div className="sec-head"><p className="kick">{t('Related','相关')}</p><h2>{t('Pedra do Sal guides on ViralReel','ViralReel 上的 Pedra do Sal 指南')}</h2></div><PedraLinkCluster zh={zh} currentPath="/pedra-do-sal-ai-template" /></div></section>
      <section className="final-cta sec-alt"><div className="container"><h2>{t('Ready to take the dancer\'s spot?','准备好站进人群中央了吗？')}</h2><p>{t('Upload one photo and join the night-square groove while the sound is still moving.','上传一张照片，趁这段声音还在传的时候进这条夜场广场片子。')}</p><button className="btn btn-primary btn-lg" onClick={start}>{t('Upload 1 photo — start now','上传 1 张照片，立即开始')}<ArrowRight size={16}/></button></div></section>
    </main>
    <ViralFooter/>
  </div>;
}
