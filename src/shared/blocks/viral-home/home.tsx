'use client';

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
import { HomeTemplate, templates } from './templates';
import './home.css';

function Brand() {
  return <Link href="/" className="brand"><svg width="32" height="32" viewBox="0 0 64 64" aria-hidden="true"><defs><linearGradient id="viral-brand" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#f97316"/><stop offset="1" stopColor="#ea580c"/></linearGradient></defs><rect width="64" height="64" rx="12" fill="url(#viral-brand)"/><line x1="32" y1="14" x2="32" y2="26" stroke="#fff" strokeWidth="3" strokeLinecap="round"/><circle cx="32" cy="32" r="7" fill="#fff"/><circle cx="32" cy="32" r="2.6" fill="#ea580c"/><rect x="14" y="46" width="10" height="8" rx="4" fill="#fff" opacity=".9"/><rect x="40" y="46" width="10" height="8" rx="4" fill="#fff" opacity=".9"/></svg><span className="name">Viral<i>Reel</i></span>  </Link>;
}

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
    <video ref={ref} className="tv-video" src={`/templates/${id}.mp4`} muted loop playsInline preload="metadata" style={{ background: `linear-gradient(165deg, ${colors[0]}, ${colors[1]})` }}/>
    <span className="tv-sound" role="button" tabIndex={0} aria-label={muted ? 'Unmute video' : 'Mute video'} onClick={toggleSound} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') toggleSound(e); }}>{muted ? <VolumeX size={15}/> : <Volume2 size={15}/>}</span>
  </>;
}

export function ViralHome({ plans }: { plans: PricingItem[] }) {
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
    { title: 'Plus', price: '$19.9', unit: ' /mo', credits: '200 credits / month ≈ 20 videos', items: ['200 credits every month (≈ 20 videos)', 'All templates included', '720p export, watermark-free', 'Standard rendering queue', 'Top-up any time: 15 credits = $1'] },
    { title: 'Pro', price: '$39.9', unit: ' /mo', credits: '500 credits / month ≈ 50 videos', items: ['Everything in Plus', '500 credits every month (≈ 50 videos)', '1080p export, watermark-free', 'Priority queue — skip the line', 'Top-up any time: 15 credits = $1'] },
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
  const nav = [['templates', t('Templates','模板')], ['how', t('How it works','使用教程')], ['pricing', t('Pricing','定价')], ['faq', t('FAQ','常见问题')]];
  const features = [
    [Mic, t('Iconic orange booth','标志性橙色直播间'), t('1:1 recreation of the viral COLORS-style stage, tuned lighting and framing baked in.','1:1 复刻爆火的 COLORS 风舞台，灯光与构图已预先调好。')],
    [Video, t('Auto lip-sync','自动口型同步'), t("Both performers' lips, heads and gestures sync to the beat automatically. Zero editing.",'两位表演者的口型、头部与手势自动对齐节拍，零剪辑。')],
    [Users, t('Any performer works','任何主角都行'), t('Cats, dogs, babies, friends or original characters — the most-shared variants all supported.','猫、狗、宝宝、朋友或原创角色——最热门的变体全部支持。')],
    [Sparkles, t('9:16 ready to post','9:16 直接可发'), t('Vertical export sized for TikTok, Reels and Shorts. Add the original sound in-app.','竖屏导出，适配 TikTok、Reels 和 Shorts，原声在 App 内添加即可。')],
  ] as const;
  const steps = [[t('Pick a template','选择模板'),t('Classic orange booth, neon night or golden hour — every variant ships with lip-sync.','经典橙色直播间、霓虹夜色或黄金时刻——每个变体都自带口型同步。')],[t('Upload two photos','上传两张照片'),t('One clear, front-facing photo per performer. Keep each subject on the same side throughout.','每位主角一张清晰正面照，全程保持在画面同一侧。')],[t('Generate','生成'),t('The AI stages both performers, syncs lips and gestures to the beat, and renders in ~60s.','AI 将两位主角搬上舞台，口型与手势对齐节拍，约 60 秒渲染完成。')],[t('Download & post','下载并发布'),t('Export 9:16 vertical, share to TikTok with the original sound while the trend is peaking.','导出 9:16 竖屏，趁趋势正热配上原声发到 TikTok。')]];
  const faq = [[t('How much does ViralReel cost?','ViralReel 怎么收费？'),t('Plus is $19.9/mo with 200 credits (≈ 20 videos). Pro is $39.9/mo with 500 credits (≈ 50 videos). One video costs 10 credits — and you can top up any time at 15 credits = $1.','Plus 每月 $19.9，含 200 积分（约 20 条视频）；Pro 每月 $39.9，含 500 积分（约 50 条视频）。每条视频消耗 10 积分，用完可随时加购——15 积分 = 1 美元。')],[t('Why do I need two photos?','为什么需要两张照片？'),t('The format is a two-person back-and-forth performance. Two separate front-facing photos keep each identity clean and prevent face blending.','这个玩法是双人你来我往的对唱，两张独立正面照能保持各自身份清晰，避免人脸融合。')],[t('Can I use pets or babies?','可以用宠物或宝宝吗？'),t('Absolutely — pet and baby versions are the most-shared variants of the trend. Keep each performer on the same side throughout the video.','当然可以——宠物版和宝宝版是这波趋势传播最广的变体。请让每位主角全程保持在画面同一侧。')],[t('What happens to my photos?','我的照片会怎么处理？'),t('Photos are used only to render your video and are automatically deleted after 24 hours. We never train models on your uploads.','照片仅用于渲染你的视频，24 小时后自动删除。我们绝不会用你上传的内容训练模型。')],[t('Which apps make the Hotel Lobby trend?','哪些 App 能做 Hotel Lobby 效果？'),t('ViralReel works in any browser with no install. Alternatives include Starrd, Summrs and CapCut templates — ViralReel works right in your browser.','ViralReel 在任何浏览器可用、无需安装。其他选择包括 Starrd、Summrs 和 CapCut 模板——ViralReel 在浏览器里直接用。')]];
  return <div className="viral-home">
    <header className="site"><div className="container"><div className="nav"><Brand/><nav className="menu" aria-label={t('Main navigation','主导航')}>{nav.map(([id,label]) => <a key={id} href={`#${id}`}>{label}</a>)}</nav><div className="right"><LocaleSelector type="button"/><div className="signin"><SignUser userNav={{ show_name: true, show_credits: true, show_sign_out: true, items: [{ title: t('My generations','生成记录'), url: '/activity/ai-tasks', icon: 'Video' }] }}/></div><button className="btn btn-primary start-button" onClick={start}>{t('Start creating','开始创作')}</button><details className="mobile-menu"><summary aria-label={t('Open menu','打开菜单')}><Menu size={20}/></summary><nav>{nav.map(([id,label]) => <a key={id} href={`#${id}`} onClick={(e) => e.currentTarget.closest('details')?.removeAttribute('open')}>{label}</a>)}</nav></details></div></div></div></header>
    <main><section className="hero"><div className="container"><div className="hero-badge"><Flame size={16}/><span>#hotellobbyai is trending</span><span className="bar"/><b>1.2M videos made</b></div><h1>{t('Make the viral ', '60 秒生成爆火的 ')}<span className="hl">Hotel Lobby</span>{t(' AI template video in 60 seconds', ' AI 模板视频')}</h1><p className="lead">{t('Upload two front-facing photos and step into the iconic orange booth — auto lip-sync, gestures and lighting included.', '上传两张正面照片，走进标志性的橙色直播间——自动口型同步、手势与灯光全部内置。')}</p><div className="hero-cta"><button className="btn btn-primary btn-lg" onClick={start}>{user ? t('Create Now', '立即创作') : t('Get Started', '立即开始')}<ArrowRight size={16}/></button><a className="btn btn-outline btn-lg" href="#templates">{t('See templates', '浏览模板')}</a></div><div className="hero-proof"><div className="avatars" aria-hidden="true"><span/><span/><span/><span/></div><span><b>1,240,000+</b> {t('creators joined this week', '位创作者本周加入')}</span></div></div></section>
    <section className="sec templates-section" id="templates"><div className="container"><div className="sec-head"><p className="kick">{t('Templates','模板')}</p><h2>{t('Pick a template, upload two photos, done','选模板、传两张照片，一键出片')}</h2><p className="sub">{t('Every template is a tuned variant of the viral format — click one to open the generator.','每个模板都是爆火玩法的精调版本——点击卡片立即生成。')}</p></div><div className="grid3">{templates.slice(0, 6).map((item, index) => <article className="tcard" key={item.id}><button className="tv" aria-label={`${t('Use','使用')} ${item.name[zh ? 1 : 0]}`} onClick={() => choose(item)} style={{ '--g1': item.colors[0], '--g2': item.colors[1] } as CSSProperties}><TemplateVideo id={item.id} colors={item.colors}/>{index === 0 && <span className="hot">HOT</span>}<span className="tv-expand"><Maximize size={18}/></span><span className="tv-play"><Play size={16}/></span><span className="tv-bar"><i/></span></button><div className="tmeta"><b>{item.name[zh ? 1 : 0]}</b><span>{['12.4M made', '6.1M made', '9.8M made', '7.2M made', '3.4M made', '5.6M made'][index]}</span></div><button className="use" onClick={() => choose(item)}>{t('Generate','立即生成')}</button></article>)}</div></div></section>
    <div className="logos"><p className="lbl">{t('Creators are posting ViralReel videos on','创作者们正在这些平台发布 ViralReel 视频')}</p><div className="row"><span className="soc tiktok"><PlatformIcon type="tiktok"/>TikTok</span><span className="soc youtube"><PlatformIcon type="youtube"/>YouTube Shorts</span><span className="soc instagram"><PlatformIcon type="instagram"/>Instagram Reels</span><span className="soc x"><PlatformIcon type="x"/>X / Twitter</span><span className="soc reddit"><PlatformIcon type="reddit"/>Reddit</span></div></div>
    <section className="stats"><div className="container stats-grid"><div><h3>1.2M<em>+</em></h3><p>{t('Videos generated','已生成视频')}</p></div><div><h3>60<em>s</em></h3><p>{t('Average render time','平均渲染时长')}</p></div><div><h3>4.8<em>★</em></h3><p>{t('From 3,100+ reviews','来自 3,100+ 条评价')}</p></div><div><h3>10<em className="wide-em"> credits / video</em></h3><p>{t('Top up any time · 15 credits = $1','随时加购 · 15 积分 = 1 美元')}</p></div></div></section>
    <section className="sec sec-alt" id="what"><div className="container"><div className="sec-head"><p className="kick">{t('What is ViralReel','ViralReel 是什么')}</p><h2>{t('Everything you need to join the trend','参与这波趋势所需的一切')}</h2><p className="sub">{t('The orange booth, the hanging mic, the back-and-forth verses — recreated by AI from just two photos.','橙色直播间、吊麦、你来我往的对唱——只需两张照片，AI 全部还原。')}</p></div><div className="grid4">{features.map(([Icon,title,desc]) => <div className="feat" key={title}><div className="ic"><Icon size={20}/></div><h3>{title}</h3><p>{desc}</p></div>)}</div></div></section>
    <section className="sec" id="how"><div className="container"><div className="sec-head"><p className="kick">{t('How it works','使用教程')}</p><h2>{t('How to make a Hotel Lobby AI video','如何制作 Hotel Lobby AI 视频')}</h2><p className="sub">{t('From photos to a postable video in about a minute — no app, no editing skills.','从照片到可发布视频只要一分钟——不用装 App，不用会剪辑。')}</p></div><div className="grid4s">{steps.map(([title,desc],i) => <div className="step" key={title}><div className="num">{i+1}</div><h3>{title}</h3><p>{desc}</p></div>)}</div></div></section>
    <section className="sec sec-alt" id="pricing"><div className="container"><div className="sec-head"><p className="kick">{t('Pricing','定价')}</p><h2>{t('Simple pricing. Scale when you go viral.','定价简单，爆火了再扩量。')}</h2></div><div className="bill-toggle"><button className={group === 'month' ? 'on' : ''} aria-pressed={group === 'month'} onClick={() => setGroup('month')}>{t('Monthly','月付')}</button><button className={group === 'year' ? 'on' : ''} aria-pressed={group === 'year'} onClick={() => setGroup('year')}>{t('Yearly','年付')} <span className="save">−20%</span></button></div><div className="price-grid">{priceSpecs.map((spec,i) => <article className={`pcard ${i === 1 ? 'pro' : ''}`} key={spec.title}>{i === 1 && <span className="tag">{t('Most popular','最受欢迎')}</span>}<h3>{spec.title}</h3><div className="price">{spec.price}<small>{spec.unit}</small></div><span className="anchor">{spec.credits}</span><ul>{spec.items.map((item) => <li key={item}><Check size={16} className="ok"/>{t(item, item)}</li>)}</ul><button disabled={loading || !checkoutPlans[i]} className={`btn ${i === 1 ? 'btn-primary' : 'btn-outline'}`} onClick={() => checkoutPlans[i] && buy(checkoutPlans[i])}>{t(`Get ${spec.title}`,`订阅 ${spec.title}`)}</button></article>)}</div><p className="mt-6 text-center"><Link href="/pricing">{t('View all plans and payment options','查看全部套餐与支付选项')} →</Link></p></div></section>
    <section className="sec"><div className="container"><div className="sec-head"><p className="kick">{t('Testimonials','用户评价')}</p><h2>{t('People love ViralReel','用户都爱 ViralReel')}</h2><p className="sub">{t('…for making the trend easy to join before it peaks.','…因为它让人人都能在趋势见顶前轻松上车。')}</p></div><div className="quote-grid">{[[t('Jake M.','Jake M.'),'“Made a cat duo video in literally 2 minutes. It hit 800k views on TikTok the same night. The lip-sync is shockingly good.”','@jakemakes · 412K followers','JM'],[t('Sofia R.','Sofia R.'),'“Starrd wanted $5 per clip. Here one video costs just 10 credits — I batch-made 12 videos for our meme page in one sitting.”','Runs @dailydoseofmemes','SR'],[t('Tom K.','Tom K.'),'“The pet edition is a cheat code. No editing, no app, works on my phone browser. Posted 6 videos in a row, all took off.”','@tompetsdaily · 208K followers','TK']].map(([name,quote,handle,initials]) => <article className="qcard" key={name}><div className="stars">★★★★★</div><p>{quote}</p><div className="who"><span className="av">{initials}</span><div><b>{name}</b><span>{handle}</span></div></div></article>)}</div></div></section>
    <section className="sec sec-alt" id="faq"><div className="container"><div className="sec-head"><p className="kick">{t('FAQ','常见问题')}</p><h2>{t('Frequently asked questions about ViralReel','关于 ViralReel 的常见问题')}</h2></div><div className="faq-list">{faq.map(([question,answer],i) => <details key={question} open={i === 0}><summary>{question}</summary><p>{answer}</p></details>)}</div></div></section>
    <section className="final-cta sec-alt"><div className="container"><h2>{t('Make your first Hotel Lobby video','做出你的第一条 Hotel Lobby 视频')}</h2><p>{t('Join 1.2 million creators already on the orange stage.','加入已站上橙色舞台的 120 万创作者。')}</p><button className="btn btn-primary btn-lg" onClick={() => choose()}>{t('Upload 2 photos — start now','上传 2 张照片，立即开始')}<ArrowRight size={16}/></button></div></section></main>
    <footer><div className="container"><div className="fgrid"><div><Brand/><p>{t('AI trend video templates for creators. Make any viral video in 60 seconds.','为创作者打造的 AI 热梗视频模板，60 秒做出任何爆火视频。')}</p></div><div><h4>{t('Product','产品')}</h4><a href="#templates">{t('Templates','模板')}</a><a href="#pricing">{t('Pricing','定价')}</a><Link href="/ai-video-generator">{t('Video generator','视频生成器')}</Link></div><div><h4>{t('Resources','资源')}</h4><a href="#how">{t('How it works','使用教程')}</a><a href="#faq">{t('FAQ','常见问题')}</a></div><div><h4>{t('Company','公司')}</h4><Link href="/privacy-policy">{t('Privacy Policy','隐私政策')}</Link><Link href="/terms-of-service">{t('Terms of Service','服务条款')}</Link></div></div><div className="legal">© {new Date().getFullYear()} ViralReel · All rights reserved.</div></div></footer>
    <TemplateGenerator key={template.id} template={template} open={open} onOpenChange={setOpen}/><PaymentModal isLoading={loading} pricingItem={payment} onCheckout={checkout}/>
  </div>;
}
