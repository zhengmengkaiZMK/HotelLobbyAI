'use client';

/* eslint-disable @next/next/no-img-element */

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';
import { ArrowRight, Check, Flame, Maximize, Menu, Mic, Play, Sparkles, Users, Video, Volume2, VolumeX } from 'lucide-react';
import { useLocale } from 'next-intl';
import { toast } from 'sonner';
import { Link } from '@/core/i18n/navigation';
import { LocaleSelector } from '@/shared/blocks/common/locale-selector';
import { SignUser } from '@/shared/blocks/sign/sign-user';
import { PaymentModal } from '@/shared/blocks/payment/payment-modal';
import { useAppContext } from '@/shared/contexts/app';
import { getCookie } from '@/shared/lib/cookie';
import { PricingItem } from '@/shared/types/blocks/pricing';
import { TemplateGenerator } from './generator';
import { Brand, ViralFooter } from './footer';
import { HomeTemplate, templates } from './templates';
import { getVideoCostTable } from '@/shared/lib/video-cost';
import { getViralFaqPairs } from '@/shared/lib/viral-faq';
import './home.css';

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

export function ViralHome({ plans, creditsPerUsd = 12, videoCosts = getVideoCostTable() }: { plans: PricingItem[]; creditsPerUsd?: number; videoCosts?: ReturnType<typeof getVideoCostTable> }) {
  const plusM = plans.find(p => p.product_id === 'plus-monthly');
  const proM = plans.find(p => p.product_id === 'pro-monthly');
  const plusPrice = plusM?.price || '$19.9';
  const plusCredits = plusM?.credits || 200;
  const proPrice = proM?.price || '$39.9';
  const proCredits = proM?.credits || 500;
  const locale = useLocale();
  const zh = locale === 'zh';
  const t = (en: string, cn: string) => zh ? cn : en;
  const { user, configs, setIsShowSignModal, setIsShowPaymentModal } = useAppContext();
  const [template, setTemplate] = useState<HomeTemplate>(templates[0]);
  const [open, setOpen] = useState(false);
  const [group, setGroup] = useState('month');
  const [payment, setPayment] = useState<PricingItem | null>(null);
  const [loading, setLoading] = useState(false);
  const available = plans.filter((p) => p.interval === group);
  const displayed = available.slice(0, 2);
  const priceSpecs = [
    { title: 'Plus', price: plusPrice, unit: plusM?.unit || ' /mo', credits: `${plusCredits} credits / month`, items: [`${plusCredits} credits every month`, 'All templates included', '720p export, watermark-free', 'Standard rendering queue', 'Instant credit top-ups whenever you need'] },
    { title: 'Pro', price: proPrice, unit: proM?.unit || ' /mo', credits: `${proCredits} credits / month`, items: ['Everything in Plus', `${proCredits} credits every month`, '1080p export, watermark-free', 'Priority queue — skip the line', 'Top up credits instantly, whenever you need'] },
  ];
  const checkoutPlans = displayed.length >= 2 ? displayed : plans.filter((p) => p.interval === 'month').slice(0, 2);
  const choose = (item: HomeTemplate = templates[0]) => { setTemplate(item); setOpen(true); };
  const start = () => user ? choose() : setIsShowSignModal(true);
  async function checkout(item: PricingItem, provider?: string) {
    if (!user) { setIsShowSignModal(true); return; }
    setLoading(true);
    try {
      const metadata: Record<string, string> = {};
      if (configs.affonso_enabled === 'true') metadata.affonso_referral = getCookie('affonso_referral') || '';
      if (configs.promotekit_enabled === 'true') metadata.promotekit_referral = getCookie('promotekit_referral') || '';
      const response = await fetch('/api/payment/checkout', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ product_id: item.product_id, currency: item.currency, locale, payment_provider: provider || '', metadata }) });
      const payload = await response.json();
      if (!response.ok || payload.code !== 0 || !payload.data?.checkoutUrl) throw new Error(payload.message || t('Checkout failed', '创建支付失败'));
      window.location.assign(payload.data.checkoutUrl);
    } catch (e) { toast.error(e instanceof Error ? e.message : t('Checkout failed', '创建支付失败')); }
    finally { setLoading(false); }
  }
  function buy(item: PricingItem) {
    if (!user) { setIsShowSignModal(true); return; }
    if (configs.select_payment_enabled === 'true') { setPayment(item); setIsShowPaymentModal(true); }
    else void checkout(item, configs.default_payment_provider);
  }
  const nav = [['templates', t('Templates','模板')], ['how', t('How it works','使用教程')], ['pricing', t('Pricing','定价')], ['faq', t('FAQ','常见问题')], ['bb', t('Burning Bridges','Burning Bridges')], ['blog', t('Blog','博客')]];
  const features = [
    [Mic, t('Iconic orange booth','标志性橙色直播间'), t('1:1 recreation of the viral COLORS-style stage, tuned lighting and framing baked in.','1:1 复刻爆火的 COLORS 风舞台，灯光与构图已预先调好。')],
    [Video, t('Auto lip-sync','自动口型同步'), t("Both performers' lips, heads and gestures sync to the beat automatically. Zero editing.",'两位表演者的口型、头部与手势自动对齐节拍，零剪辑。')],
    [Users, t('Any performer works','任何主角都行'), t('Cats, dogs, babies, friends or original characters — the most-shared variants all supported.','猫、狗、宝宝、朋友或原创角色——最热门的变体全部支持。')],
    [Sparkles, t('9:16 ready to post','9:16 直接可发'), t('Vertical export sized for TikTok, Reels and Shorts. Add the original sound in-app.','竖屏导出，适配 TikTok、Reels 和 Shorts，原声在 App 内添加即可。')],
  ] as const;
  const steps = [[t('Pick a template','选择模板'),t('Classic orange booth, neon night or golden hour — every variant ships with lip-sync.','经典橙色直播间、霓虹夜色或黄金时刻——每个变体都自带口型同步。')],[t('Upload two photos','上传两张照片'),t('One clear, front-facing photo per performer. Keep each subject on the same side throughout.','每位主角一张清晰正面照，全程保持在画面同一侧。')],[t('Generate','生成'),t('The AI stages both performers, syncs lips and gestures to the beat, and renders in ~60s.','AI 将两位主角搬上舞台，口型与手势对齐节拍，约 60 秒渲染完成。')],[t('Download & post','下载并发布'),t('Export 9:16 vertical, share to TikTok with the original sound while the trend is peaking.','导出 9:16 竖屏，趁趋势正热配上原声发到 TikTok。')]];
  const faq = getViralFaqPairs(zh, { plusPrice, plusCredits, proPrice, proCredits });
  return <div className="viral-home">
    <header className="site"><div className="container"><div className="nav"><Brand/><nav className="menu" aria-label={t('Main navigation','主导航')}>{nav.map(([id,label]) => id === 'blog' ? <Link key={id} href="/blog">{label}</Link> : id === 'bb' ? <Link key={id} href="/burning-bridges-ai-template">{label}</Link> : <a key={id} href={`#${id}`}>{label}</a>)}</nav><div className="right"><LocaleSelector type="button"/><div className="signin"><SignUser userNav={{ show_name: true, show_credits: true, show_sign_out: true, items: [{ title: t('My generations','生成记录'), url: '/activity/ai-tasks', icon: 'Video' }] }}/></div><button className="btn btn-primary start-button" onClick={start}>{t('Start creating','开始创作')}</button><details className="mobile-menu"><summary aria-label={t('Open menu','打开菜单')}><Menu size={20}/></summary><nav>{nav.map(([id,label]) => id === 'blog' ? <Link key={id} href="/blog" onClick={(e) => e.currentTarget.closest('details')?.removeAttribute('open')}>{label}</Link> : <a key={id} href={`#${id}`} onClick={(e) => e.currentTarget.closest('details')?.removeAttribute('open')}>{label}</a>)}</nav></details></div></div></div></header>
    <main><section className="hero"><div className="container"><div className="hero-badge"><Flame size={16}/><span>#hotellobbyai is trending</span><span className="bar"/><b>1.2M videos made</b></div><h1>{t('Make the viral ', '60 秒生成爆火的 ')}<span className="hl">Hotel Lobby</span>{t(' AI template video in 60 seconds', ' AI 模板视频')}</h1><p className="lead">{t('Upload two front-facing photos and step into the iconic orange booth — auto lip-sync, gestures and lighting included.', '上传两张正面照片，走进标志性的橙色直播间——自动口型同步、手势与灯光全部内置。')}</p><div className="hero-cta"><button className="btn btn-primary btn-lg" onClick={start}>{user ? t('Create Now', '立即创作') : t('Get Started', '立即开始')}<ArrowRight size={16}/></button><a className="btn btn-outline btn-lg" href="#templates">{t('See templates', '浏览模板')}</a></div><div className="hero-proof"><div className="avatars" aria-hidden="true"><span/><span/><span/><span/></div><span><b>1,240,000+</b> {t('creators joined this week', '位创作者本周加入')}</span></div></div></section>
    <section className="sec templates-section" id="templates"><div className="container"><div className="sec-head"><p className="kick">{t('Templates','模板')}</p><h2>{t('Pick a template, upload two photos, done','选模板、传两张照片，一键出片')}</h2><p className="sub">{t('Every template is a tuned variant of the viral format — click one to open the generator.','每个模板都是爆火玩法的精调版本——点击卡片立即生成。')}</p></div><div className="grid3">{templates.slice(0, 9).map((item, index) => <article className="tcard" key={item.id}><button className="tv" aria-label={`${t('Use','使用')} ${item.name[zh ? 1 : 0]}`} onClick={() => choose(item)} style={{ '--g1': item.colors[0], '--g2': item.colors[1] } as CSSProperties}><TemplateVideo id={item.id} colors={item.colors}/>{index === 0 && <span className="hot">HOT</span>}<span className="tv-expand"><Maximize size={18}/></span><span className="tv-play"><Play size={16}/></span><span className="tv-bar"><i/></span></button><div className="tmeta"><b>{item.name[zh ? 1 : 0]}</b><span>{['12.4M made', '6.1M made', '9.8M made', '7.2M made', '3.4M made', '5.6M made', '4.8M made', '8.3M made', '6.7M made'][index]}</span></div><button className="use" onClick={() => choose(item)}>{t('Generate','立即生成')}</button></article>)}</div></div></section>
    <div className="logos"><p className="lbl">{t('Creators are posting ViralReel videos on','创作者们正在这些平台发布 ViralReel 视频')}</p><div className="row"><span className="soc tiktok"><PlatformIcon type="tiktok"/>TikTok</span><span className="soc youtube"><PlatformIcon type="youtube"/>YouTube Shorts</span><span className="soc instagram"><PlatformIcon type="instagram"/>Instagram Reels</span><span className="soc x"><PlatformIcon type="x"/>X / Twitter</span><span className="soc reddit"><PlatformIcon type="reddit"/>Reddit</span></div></div>
    <section className="stats"><div className="container stats-grid"><div><div className="statnum">1.2M<em>+</em></div><p>{t('Videos generated','已生成视频')}</p></div><div><div className="statnum">60<em>s</em></div><p>{t('Average render time','平均渲染时长')}</p></div><div><div className="statnum">4.8<em>★</em></div><p>{t('From 3,100+ reviews','来自 3,100+ 条评价')}</p></div><div><div className="statnum">{Math.min(...videoCosts.flatMap(row => row.costs.map(item => item.credits)))}<em className="wide-em">{t(' credits / video from', ' 积分 / 条起')}</em></div><p>{t(`Top-ups available · ${creditsPerUsd} credits = $1`,`随时可加购 · ${creditsPerUsd} 积分 = 1 美元`)}</p></div></div></section>
    <section className="sec sec-alt" id="what"><div className="container"><div className="sec-head"><p className="kick">{t('What is ViralReel','ViralReel 是什么')}</p><h2>{t('Everything you need to join the trend','参与这波趋势所需的一切')}</h2><p className="sub">{t('The orange booth, the hanging mic, the back-and-forth verses — recreated by AI from just two photos.','橙色直播间、吊麦、你来我往的对唱——只需两张照片，AI 全部还原。')}</p></div><div className="grid4">{features.map(([Icon,title,desc]) => <div className="feat" key={title}><div className="ic"><Icon size={20}/></div><h3>{title}</h3><p>{desc}</p></div>)}</div></div></section>
    <section className="sec" id="how"><div className="container"><div className="sec-head"><p className="kick">{t('How it works','使用教程')}</p><h2>{t('How to make a Hotel Lobby AI template video','如何用 Hotel Lobby AI 模板制作视频')}</h2><p className="sub">{t('From photos to a postable video in about a minute — no app, no editing skills.','从照片到可发布视频只要一分钟——不用装 App，不用会剪辑。')}</p></div><div className="grid4s">{steps.map(([title,desc],i) => <div className="step" key={title}><div className="num">{i+1}</div><h3>{title}</h3><p>{desc}</p></div>)}</div></div></section>
    <section className="sec sec-alt" id="pricing"><div className="container"><div className="sec-head"><p className="kick">{t('Pricing','定价')}</p><h2>{t('Simple pricing. Scale when you go viral.','定价简单，爆火了再扩量。')}</h2></div><div className="bill-toggle"><button className={group === 'month' ? 'on' : ''} aria-pressed={group === 'month'} onClick={() => setGroup('month')}>{t('Monthly','月付')}</button><button className={group === 'year' ? 'on' : ''} aria-pressed={group === 'year'} onClick={() => setGroup('year')}>{t('Yearly','年付')} <span className="save">−20%</span></button></div><div className="price-grid">{priceSpecs.map((spec,i) => <article className={`pcard ${i === 1 ? 'pro' : ''}`} key={spec.title}>{i === 1 && <span className="tag">{t('Most popular','最受欢迎')}</span>}<h3>{spec.title}</h3><div className="price">{spec.price}<small>{spec.unit}</small></div><span className="anchor">{spec.credits}</span><ul>{spec.items.map((item) => <li key={item}><Check size={16} className="ok"/>{t(item, item)}</li>)}</ul><button disabled={loading || !checkoutPlans[i]} className={`btn ${i === 1 ? 'btn-primary' : 'btn-outline'}`} onClick={() => checkoutPlans[i] && buy(checkoutPlans[i])}>{t(`Get ${spec.title}`,`订阅 ${spec.title}`)}</button></article>)}</div><div className="video-pricing-note mt-8 rounded-xl border border-orange-200 bg-white p-6 text-slate-800"><b>{t('Video generation pricing','视频生成计费')}</b><span>{t('Image-to-video costs vary by resolution and duration. Failed or canceled jobs are refunded.','图生视频按清晰度和时长计费，任务失败或取消会退回积分。')}</span><div className="video-pricing-grid mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">{videoCosts.map((row) => <div key={row.resolution}><strong>{row.resolution}</strong>{row.costs.map((item) => <span key={item.duration} className="block">{item.duration}s · {item.credits} {t('credits','积分')}</span>)}</div>)}</div></div><p className="mt-6 text-center"><Link href="/subscribe">{t('View all plans and payment options','查看全部套餐与支付选项')} →</Link></p></div></section>
    <section className="sec"><div className="container"><div className="sec-head"><p className="kick">{t('Testimonials','用户评价')}</p><h2>{t('People love ViralReel','用户都爱 ViralReel')}</h2><p className="sub">{t('…for making the trend easy to join before it peaks.','…因为它让人人都能在趋势见顶前轻松上车。')}</p></div><div className="quote-viewport"><div className="quote-grid">{[[t('Jake M.','Jake M.'),'“Made a cat duo video in literally 2 minutes. It hit 800k views on TikTok the same night. The lip-sync is shockingly good.”','@jakemakes · 412K followers','/avatars/review-1.jpg'],[t('Sofia R.','Sofia R.'),'“Starrd wanted $5 per clip. Here one video costs just 10 credits — I batch-made 12 videos for our meme page in one sitting.”','Runs @dailydoseofmemes','/avatars/review-2.jpg'],[t('Tom K.','Tom K.'),'“The pet edition is a cheat code. No editing, no app, works on my phone browser. Posted 6 videos in a row, all took off.”','@tompetsdaily · 208K followers','/avatars/review-3.jpg'],[t('Liam P.','Liam P.'),'“Our whole office did the orange-booth trend after the holiday party. The render queue is fast enough that we posted everything same-day.”','@liam.plays · 96K followers','/avatars/review-4.jpg'],[t('Emma L.','Emma L.'),'“I am not a video editor at all. Uploaded me and my dog, picked Pet & Owner, and the thing basically edited itself. 1.2M views and counting.”','@emmadaybyday · 340K followers','/avatars/review-5.jpg'],[t('Marcus J.','Marcus J.'),'“The 9:16 export is the detail nobody else gets right. No cropping, no watermark panic — straight to Shorts and Reels.”','@marcusmakes · 155K followers','/avatars/review-6.jpg']].map(([name,quote,handle,img]) => <article className="qcard" key={name}><div className="stars">★★★★★</div><p>{quote}</p><div className="who"><span className="av" style={{ backgroundImage: `url(${img})` }}/><div><b>{name}</b><span>{handle}</span></div></div></article>)}{[[t('Jake M.','Jake M.'),'“Made a cat duo video in literally 2 minutes. It hit 800k views on TikTok the same night. The lip-sync is shockingly good.”','@jakemakes · 412K followers','/avatars/review-1.jpg'],[t('Sofia R.','Sofia R.'),'“Starrd wanted $5 per clip. Here one video costs just 10 credits — I batch-made 12 videos for our meme page in one sitting.”','Runs @dailydoseofmemes','/avatars/review-2.jpg'],[t('Tom K.','Tom K.'),'“The pet edition is a cheat code. No editing, no app, works on my phone browser. Posted 6 videos in a row, all took off.”','@tompetsdaily · 208K followers','/avatars/review-3.jpg'],[t('Liam P.','Liam P.'),'“Our whole office did the orange-booth trend after the holiday party. The render queue is fast enough that we posted everything same-day.”','@liam.plays · 96K followers','/avatars/review-4.jpg'],[t('Emma L.','Emma L.'),'“I am not a video editor at all. Uploaded me and my dog, picked Pet & Owner, and the thing basically edited itself. 1.2M views and counting.”','@emmadaybyday · 340K followers','/avatars/review-5.jpg'],[t('Marcus J.','Marcus J.'),'“The 9:16 export is the detail nobody else gets right. No cropping, no watermark panic — straight to Shorts and Reels.”','@marcusmakes · 155K followers','/avatars/review-6.jpg']].map(([name,quote,handle,img]) => <article className="qcard" aria-hidden="true" key={'b-'+name}><div className="stars">★★★★★</div><p>{quote}</p><div className="who"><span className="av" style={{ backgroundImage: `url(${img})` }}/><div><b>{name}</b><span>{handle}</span></div></div></article>)}</div></div></div></section>
    <section className="sec" id="guide"><div className="container guide"><div className="sec-head"><p className="kick">{t('Guide','指南')}</p><h2>{t('Hotel Lobby AI template: the complete guide','Hotel Lobby AI 模板完全指南')}</h2></div>
      <figure className="guide-fig"><img src="/og-image.jpg" alt="Hotel Lobby AI template preview — two performers in the iconic orange booth" width={1200} height={630} loading="lazy"/><figcaption>{t('The Hotel Lobby AI template recreates the iconic orange booth from just two photos.','Hotel Lobby AI 模板只需两张照片即可还原标志性橙色直播间。')}</figcaption></figure>
      <h3>{t('What is the Hotel Lobby AI template?','什么是 Hotel Lobby AI 模板？')}</h3>
      <p>{t('The Hotel Lobby AI template is the viral video format you have seen all over TikTok, Reels and Shorts: two performers trading verses in the iconic orange-booth stage, with the hanging mic, warm spotlight and moody backdrop. Until recently, making one meant filming in a real venue or stitching together edits. ViralReel turns it into a one-minute job — the template stages both performers automatically from two uploaded photos, syncs their lips and gestures to the beat, and renders a vertical 9:16 video that is ready to post.','Hotel Lobby AI 模板就是你在 TikTok、Reels 和 Shorts 上到处可见的爆火视频玩法：两位表演者在标志性橙色直播间舞台上来回对唱，吊麦、暖光和氛围背景一应俱全。以前做一条要么去现场拍、要么反复剪辑，而 ViralReel 把它变成一分钟的事——模板根据你上传的两张照片自动生成两位表演者，口型和手势对齐节拍，渲染出可直接发布的 9:16 竖屏视频。')}</p>
      <h3>{t('Why the Hotel Lobby AI template went viral','Hotel Lobby AI 模板为什么能爆火')}</h3>
      <p>{t('Three reasons. First, the format is instantly recognizable — the orange booth is a visual hook, so viewers stop scrolling. Second, it is a two-person format, which means every video doubles your audience: both performers share it, and pet owners, couples and friends all want their own version. Third, the barrier to entry collapsed. What used to require a camera crew now needs two photos and about sixty seconds, so thousands of creators can join the trend the same week it peaks. That mix of recognition and accessibility is exactly why the format keeps spawning variants — couples, best friends, dogs and cats, parents and babies.','三个原因。第一，格式辨识度极高——橙色直播间就是视觉钩子，观众会立刻停下滑动。第二，这是双人格式，等于每条视频自带双倍曝光：两位主角都会转发，养宠人、情侣和朋友都想要自己的版本。第三，参与门槛崩塌了。过去需要拍摄团队，现在只要两张照片加约六十秒，成千上万的创作者能在趋势见顶的同一周跟上。这种「高辨识度 + 低门槛」的组合，正是 Hotel Lobby AI 模板不断衍生变体的原因——情侣、闺蜜、猫狗、亲子和宝宝版层出不穷。')}</p>
      <h3>{t('How to get the best results from the Hotel Lobby AI template','如何用 Hotel Lobby AI 模板做出最佳效果')}</h3>
      <p>{t('Photo quality decides video quality. Use one clear, front-facing photo per performer — good lighting, no sunglasses or heavy motion blur, and the full face in frame. Keep each performer on the same side across your photos so the AI keeps identities stable, and avoid group photos where faces overlap. Pick the variant that matches your subjects: the classic version for two people, the pet edition for dogs and cats, the pet-owner edition for you and your animal, or the baby version for family clips. Generate, preview, and post while the trend is still climbing — consistency beats perfection, and creators who publish three to five videos in a row see the strongest reach.','照片质量决定视频质量。每位主角准备一张清晰的正面照——光线充足、不戴墨镜、没有明显运动模糊，脸部完整入画。同一主角的多张照片尽量保持在画面同一侧，让人工智能稳定识别身份；避免使用脸部重叠的合影。根据主角选择合适版本：双人用经典版，猫狗用宠物版，你和宠物用养宠版，家庭片段用宝宝版。生成、预览，然后趁趋势还在上升期发布——持续比完美更重要，连发三到五条 Hotel Lobby AI 模板视频的创作者往往能获得最强的传播效果。')}</p>
      <p className="guide-more"><Link href="/hotel-lobby-ai-template">{t('Read the full Hotel Lobby AI template guide','阅读完整的 Hotel Lobby AI 模板指南')} →</Link></p>
    </div></section>
    <section className="sec sec-alt" id="faq"><div className="container"><div className="sec-head"><p className="kick">{t('FAQ','常见问题')}</p><h2>{t('Frequently asked questions about ViralReel','关于 ViralReel 的常见问题')}</h2></div><div className="faq-list">{faq.map(([question,answer],i) => <details key={question} open={i === 0}><summary>{question}</summary><p>{answer}</p></details>)}</div></div></section>
    <section className="final-cta sec-alt"><div className="container"><h2>{t('Make your first Hotel Lobby AI template video','用 Hotel Lobby AI 模板做出你的第一条视频')}</h2><p>{t('Join 1.2 million creators already on the orange stage.','加入已站上橙色舞台的 120 万创作者。')}</p><button className="btn btn-primary btn-lg" onClick={() => choose()}>{t('Upload 2 photos — start now','上传 2 张照片，立即开始')}<ArrowRight size={16}/></button></div></section></main>
    <ViralFooter/>
    <TemplateGenerator key={template.id} template={template} open={open} onOpenChange={setOpen}/><PaymentModal isLoading={loading} pricingItem={payment} onCheckout={checkout}/>
  </div>;
}
