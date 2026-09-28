'use client';

import { useState, type CSSProperties } from 'react';
import { ArrowRight, Check, Flame, Maximize, Menu, Mic, Play, Sparkles, Users, Video } from 'lucide-react';
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
  return <Link href="/" className="brand"><svg width="32" height="32" viewBox="0 0 32 32" aria-hidden="true"><rect width="32" height="32" rx="8" fill="#f97316"/><path d="m13 9 11 7-11 7z" fill="white"/><path d="M8 9v14" stroke="white" strokeWidth="2"/></svg><span className="name">Viral<i>Reel</i></span></Link>;
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
  const nav = [['templates', t('Templates','模板')], ['how-it-works', t('How it works','使用教程')], ['pricing', t('Pricing','定价')], ['faq', t('FAQ','常见问题')]];
  const features = [
    [Video, t('The iconic orange booth','标志性橙色直播间'), t('A template inspired by the recording-booth aesthetic, with warm lighting and a hanging mic.','以橙色录音间为灵感的模板，搭配暖色灯光与吊麦。')],
    [Mic, t('AI-powered motion','AI 动态演绎'), t('Turn your reference photos into a performance with a ready-to-use prompt.','使用预设提示词，将参考照片变成动态表演。')],
    [Users, t('Make it your own','任何主角都行'), t('Try friends, pets or original characters with six different template styles.','朋友、宠物或原创角色，六种不同风格任你选择。')],
    [Sparkles, t('Ready for your feed','为短视频创作'), t('Choose your aspect ratio, download your video and add music in your favorite editor.','选择画幅、下载视频，在你喜欢的剪辑工具中添加音乐。')],
  ] as const;
  const steps = [[t('Pick a template','选择模板'),t('Classic orange, neon night or golden hour — choose your favorite look.','经典橙色、霓虹夜色或黄金时刻，选择你喜欢的风格。')],[t('Upload your photos','上传照片'),t('Use clear photos of each subject, or a group photo for single-image models.','使用清晰的主角照片，单图模型请上传合照。')],[t('Generate','生成'),t('Our existing AI models turn your references into video. Follow progress in your task history.','使用现有 AI 模型生成视频，可在生成记录中查看任务。')],[t('Download & share','下载并发布'),t('Download your finished video, add your soundtrack and share it with the world.','下载成片，添加喜欢的音乐，发布到社交平台。')]];
  const faq = [[t('How does pricing work?','ViralReel 怎么收费？'),t('Plans use the existing credit system. Image-to-video generation costs 8 credits per request. See the plans above for current prices and credit amounts.','套餐沿用现有积分系统，图生视频每次消耗 8 积分，当前价格与积分数量见上方套餐。')],[t('Do I need two photos?','为什么需要两张照片？'),t('Multi-image models can use separate references. For a single-image model, upload one photo containing both subjects. Model limits are shown in the generator.','多图模型可以使用独立参考照片；单图模型请上传包含两位主角的合照。生成器会提示模型限制。')],[t('Can I use pets or babies?','可以用宠物或宝宝吗？'),t('Yes, the pet and baby templates provide suitable prompts. The final result depends on the selected model and reference images.','可以，宠物版和宝宝版提供对应的提示词，最终效果取决于模型和参考图片。')],[t('What happens to my photos?','我的照片会怎么处理？'),t('Photos are uploaded through our storage service and sent to the selected AI provider for generation. See the privacy policy before uploading sensitive content.','照片通过存储服务上传，并发送至所选 AI 服务商用于生成。上传敏感内容前请阅读隐私政策。')],[t('Do I need to install an app?','需要安装 App 吗？'),t('No. Create in your browser, then download the result. You can also find existing tasks in your generation history.','不需要，在浏览器中即可创作并下载视频，也可以在生成记录中查看已有任务。')]];
  return <div className="viral-home">
    <header className="site"><div className="container"><div className="nav"><Brand/><nav className="menu" aria-label={t('Main navigation','主导航')}>{nav.map(([id,label]) => <a key={id} href={`#${id}`}>{label}</a>)}</nav><div className="right"><LocaleSelector type="button"/><div className="signin"><SignUser userNav={{ show_name: true, show_credits: true, show_sign_out: true, items: [{ title: t('My generations','生成记录'), url: '/activity/ai-tasks', icon: 'Video' }] }}/></div><button className="btn btn-primary start-button" onClick={start}>{t('Create Now','立即创作')}</button><details className="mobile-menu"><summary aria-label={t('Open menu','打开菜单')}><Menu size={20}/></summary><nav>{nav.map(([id,label]) => <a key={id} href={`#${id}`} onClick={(e) => e.currentTarget.closest('details')?.removeAttribute('open')}>{label}</a>)}</nav></details></div></div></div></header>
    <main><section className="hero"><div className="container"><div className="hero-badge"><Flame size={16}/><span>#hotellobbyai</span><span className="bar"/><b>{t('Your next creative remix','开启你的下一次创作')}</b></div><h1>{t('Create your own','制作你的专属')} <span className="hl">Hotel Lobby</span><br/>{t('AI video','AI 视频')}</h1><p className="lead">{t('Upload your photos and step into the iconic orange booth. Pick a template, make it yours, and let AI bring it to life.','上传照片，走进标志性的橙色直播间。选择模板，让 AI 将你的创意变成动态视频。')}</p><div className="hero-cta"><button className="btn btn-primary btn-lg" onClick={start}>{user ? t('Create Now','立即创作') : t('Get Started','立即开始')}<ArrowRight size={16}/></button><a className="btn btn-outline btn-lg" href="#templates">{t('Browse Templates','浏览模板')}</a></div><div className="hero-proof"><div className="avatars" aria-hidden="true"><span/><span/><span/><span/></div><span>{t('Made for creators. Powered by AI.','为创作者打造，由 AI 驱动。')}</span></div></div></section>
    <section className="sec" id="templates"><div className="container"><div className="sec-head"><p className="kick">{t('Templates','模板')}</p><h2>{t('Pick a template. Upload photos. Make it yours.','选模板、传照片，一键出片')}</h2><p className="sub">{t('Six fresh takes on the recording-booth trend — click a card to start creating.','六种录音间风格模板，点击卡片开始创作。')}</p></div><div className="grid3">{templates.map((item, index) => <article className="tcard" key={item.id}><button className="tv" aria-label={`${t('Use','使用')} ${item.name[zh ? 1 : 0]}`} onClick={() => choose(item)} style={{ '--g1': item.colors[0], '--g2': item.colors[1] } as CSSProperties}><div className="tv-stage"><div className="tvm"/><div className="tvmp"/><div className="tvd"><div className="tvf"/><div className="tvf b"/></div></div>{index === 0 && <span className="hot">HOT</span>}<span className="tv-expand"><Maximize size={18}/></span><span className="tv-play"><Play size={16}/></span><span className="tv-bar"><i/></span></button><div className="tmeta"><b>{item.name[zh ? 1 : 0]}</b><span>{t('AI template','AI 模板')}</span></div><button className="use" onClick={() => choose(item)}>{t('Generate Now','立即生成')}</button></article>)}</div></div></section>
    <div className="logos"><p className="lbl">{t('Create videos for your favorite platforms','为你喜欢的平台创作视频')}</p><div className="row"><span className="soc">TikTok</span><span className="soc">Instagram Reels</span><span className="soc">YouTube Shorts</span></div></div>
    <section className="stats"><div className="container stats-grid">{[['6',t('Creative templates','创意模板')],['AI',t('Image to video','照片生成视频')],['9:16',t('Portrait format','支持竖屏画幅')],['8',t('Credits per generation','积分 / 次生成')]].map(([value,label]) => <div key={label}><h3>{value}</h3><p>{label}</p></div>)}</div></section>
    <section className="sec sec-alt"><div className="container"><div className="sec-head"><p className="kick">{t('What is ViralReel','ViralReel 是什么')}</p><h2>{t('Everything you need to join the trend','参与这波趋势所需的一切')}</h2><p className="sub">{t('The orange booth, the hanging mic, your own creative twist.','橙色直播间、吊麦，加上你独特的创意。')}</p></div><div className="grid4">{features.map(([Icon,title,desc]) => <div className="feat" key={title}><div className="ic"><Icon size={20}/></div><h3>{title}</h3><p>{desc}</p></div>)}</div></div></section>
    <section className="sec" id="how-it-works"><div className="container"><div className="sec-head"><p className="kick">{t('How it works','使用教程')}</p><h2>{t('How to make a Hotel Lobby AI video','如何制作 Hotel Lobby AI 视频')}</h2><p className="sub">{t('From your photos to a downloadable video — no app required.','从照片到可下载视频，无需安装 App。')}</p></div><div className="grid4s">{steps.map(([title,desc],i) => <div className="step" key={title}><div className="num">{i+1}</div><h3>{title}</h3><p>{desc}</p></div>)}</div></div></section>
    <section className="sec sec-alt" id="pricing"><div className="container"><div className="sec-head"><p className="kick">{t('Pricing','定价')}</p><h2>{t('Simple plans. More room to create.','定价简单，创作自由。')}</h2></div><div className="bill-toggle">{[['month',t('Monthly','月付')],['year',t('Yearly','年付')],['one-time',t('Pay as you go','一次性')]].filter(([id]) => plans.some((p) => p.interval === id)).map(([id,label]) => <button key={id} className={group === id ? 'on' : ''} aria-pressed={group === id} onClick={() => setGroup(id)}>{label}</button>)}</div><div className="price-grid">{displayed.map((plan,i) => <article className={`pcard ${i === 1 ? 'pro' : ''}`} key={plan.product_id}>{i === 1 && <span className="tag">{t('More credits','更多积分')}</span>}<h3>{plan.title}</h3><div className="price">{plan.price}<small>{plan.unit}</small></div><span className="anchor">{plan.credits ?? 0} {t('credits','积分')}</span><ul><li><Check size={16} className="ok"/>{t('All six creative templates','全部六种创意模板')}</li><li><Check size={16} className="ok"/>{t('Existing AI generation tools','现有 AI 生成工具')}</li><li><Check size={16} className="ok"/>{t('Download your generated videos','下载生成的视频')}</li><li><Check size={16} className="ok"/>{plan.valid_days ? `${plan.valid_days} ${t('days credit validity','天积分有效期')}` : t('See checkout for plan details','套餐详情以结账页为准')}</li></ul><button disabled={loading} className={`btn ${i === 1 ? 'btn-primary' : 'btn-outline'}`} onClick={() => buy(plan)}>{t('Get','选择')} {plan.title}</button></article>)}</div><p className="mt-6 text-center"><Link href="/pricing">{t('View all plans and payment options','查看全部套餐与支付选项')} →</Link></p></div></section>
    <section className="sec"><div className="container"><div className="sec-head"><p className="kick">{t('Made for creators','为创作者打造')}</p><h2>{t('Your idea. Your cast. Your video.','你的创意，你的主角，你的视频。')}</h2><p className="sub">{t('Explore a few ways to make the templates your own.','探索属于你的模板玩法。')}</p></div><div className="quote-grid">{[[t('Remix with friends','和朋友一起创作'),t('Bring your own cast to the orange booth and create a playful duet.','让你的主角站上橙色舞台，制作趣味双人视频。')],[t('Give pets the spotlight','让宠物成为主角'),t('Try the pet template for a different kind of studio session.','试试宠物模板，开启不一样的录音间创作。')],[t('Find your visual style','找到你的视觉风格'),t('Switch from neon nights to golden-hour lighting in a click.','一键切换霓虹夜色与黄金时刻的灯光风格。')]].map(([title,desc],i) => <article className="qcard" key={title}><p>{desc}</p><div className="who"><span className="av">{i+1}</span><div><b>{title}</b><span>{t('Creative inspiration','创作灵感')}</span></div></div></article>)}</div></div></section>
    <section className="sec sec-alt" id="faq"><div className="container"><div className="sec-head"><p className="kick">{t('FAQ','常见问题')}</p><h2>{t('Questions about ViralReel','关于 ViralReel 的常见问题')}</h2></div><div className="faq-list">{faq.map(([question,answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></div></section>
    <section className="final-cta"><div className="container"><h2>{t('Make your first Hotel Lobby video','做出你的第一条 Hotel Lobby 视频')}</h2><p>{t('Your turn to step into the orange booth.','现在轮到你站上橙色舞台。')}</p><button className="btn btn-primary btn-lg" onClick={() => choose()}>{t('Upload photos & get started','上传照片，立即开始')}<ArrowRight size={16}/></button></div></section></main>
    <footer><div className="container"><div className="fgrid"><div><Brand/><p>{t('AI video templates for creators. Make your next creative remix in your browser.','为创作者打造的 AI 视频模板，在浏览器中开启你的下一次创作。')}</p></div><div><h4>{t('Product','产品')}</h4><a href="#templates">{t('Templates','模板')}</a><a href="#pricing">{t('Pricing','定价')}</a><Link href="/ai-video-generator">{t('Video Generator','视频生成器')}</Link></div><div><h4>{t('Resources','资源')}</h4><a href="#how-it-works">{t('How it works','使用教程')}</a><Link href="/blog">{t('Blog','博客')}</Link><a href="#faq">{t('FAQ','常见问题')}</a></div><div><h4>{t('Company','公司')}</h4><Link href="/privacy-policy">{t('Privacy Policy','隐私政策')}</Link><Link href="/terms-of-service">{t('Terms of Service','服务条款')}</Link></div></div><div className="legal">© {new Date().getFullYear()} ViralReel · All rights reserved.</div></div></footer>
    <TemplateGenerator key={template.id} template={template} open={open} onOpenChange={setOpen}/><PaymentModal isLoading={loading} pricingItem={payment} onCheckout={checkout}/>
  </div>;
}
