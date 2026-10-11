'use client';

import { useState } from 'react';
import { Check } from 'lucide-react';
import { useLocale } from 'next-intl';
import { toast } from 'sonner';
import { Link } from '@/core/i18n/navigation';
import { PaymentModal } from '@/shared/blocks/payment/payment-modal';
import { useAppContext } from '@/shared/contexts/app';
import { getCookie } from '@/shared/lib/cookie';
import { PricingItem } from '@/shared/types/blocks/pricing';

// Pricing section shared by the homepage and the standalone /pricing page:
// Plus/Pro cards with a monthly/yearly toggle plus the video-generation
// credit table. Self-contained — owns checkout state and the payment modal.
export function PricingSection({ plans, creditsPerUsd = 10, videoCosts }: { plans: PricingItem[]; creditsPerUsd?: number; videoCosts: ReturnType<typeof import('@/shared/lib/video-cost').getVideoCostTable> }) {
  const starterM = plans.find(p => p.product_id === 'starter-monthly');
  const plusM = plans.find(p => p.product_id === 'plus-monthly');
  const proM = plans.find(p => p.product_id === 'pro-monthly');
  const starterPrice = starterM?.price || '$9.9';
  const starterCredits = starterM?.credits || 90;
  const plusPrice = plusM?.price || '$19.9';
  const plusCredits = plusM?.credits || 200;
  const proPrice = proM?.price || '$39.9';
  const proCredits = proM?.credits || 500;
  const locale = useLocale();
  const zh = locale === 'zh';
  const t = (en: string, cn: string) => zh ? cn : en;
  const { user, configs, setIsShowSignModal, setIsShowPaymentModal } = useAppContext();
  const [group, setGroup] = useState('month');
  const [payment, setPayment] = useState<PricingItem | null>(null);
  const [loading, setLoading] = useState(false);
  const available = plans.filter((p) => p.interval === group);
  const displayed = available.slice(0, 3);
  const priceSpecs = [
    { title: 'Starter', price: starterPrice, unit: starterM?.unit || ' /mo', credits: `${starterCredits} credits / month`, items: [`${starterCredits} credits every month`, 'All templates included', '720p export, watermark-free', 'Standard rendering queue', 'Instant credit top-ups whenever you need'] },
    { title: 'Plus', price: plusPrice, unit: plusM?.unit || ' /mo', credits: `${plusCredits} credits / month`, items: [`${plusCredits} credits every month`, 'All templates included', '720p export, watermark-free', 'Standard rendering queue', 'Instant credit top-ups whenever you need'] },
    { title: 'Pro', price: proPrice, unit: proM?.unit || ' /mo', credits: `${proCredits} credits / month`, items: ['Everything in Plus', `${proCredits} credits every month`, '1080p export, watermark-free', 'Priority queue — skip the line', 'Top up credits instantly, whenever you need'] },
  ];
  const checkoutPlans = displayed.length >= 3 ? displayed : plans.filter((p) => p.interval === 'month').slice(0, 3);
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
  return <>
    <section className="sec sec-alt" id="pricing"><div className="container"><div className="sec-head"><p className="kick">{t('Pricing','定价')}</p><h2>{t('Simple pricing. Scale when you go viral.','定价简单，爆火了再扩量。')}</h2></div><div className="bill-toggle"><button className={group === 'month' ? 'on' : ''} aria-pressed={group === 'month'} onClick={() => setGroup('month')}>{t('Monthly','月付')}</button><button className={group === 'year' ? 'on' : ''} aria-pressed={group === 'year'} onClick={() => setGroup('year')}>{t('Yearly','年付')} <span className="save">−20%</span></button></div><div className="price-grid">{priceSpecs.map((spec,i) => <article className={`pcard ${i === 2 ? 'pro' : ''}`} key={spec.title}>{i === 2 && <span className="tag">{t('Most popular','最受欢迎')}</span>}<h3>{spec.title}</h3><div className="price">{spec.price}<small>{spec.unit}</small></div><span className="anchor">{spec.credits}</span><ul>{spec.items.map((item) => <li key={item}><Check size={16} className="ok"/>{t(item, item)}</li>)}</ul><button disabled={loading || !checkoutPlans[i]} className={`btn ${i === 2 ? 'btn-primary' : 'btn-outline'}`} onClick={() => checkoutPlans[i] && buy(checkoutPlans[i])}>{t(`Get ${spec.title}`,`订阅 ${spec.title}`)}</button></article>)}</div><div className="video-pricing-note mt-8 rounded-xl border border-orange-200 bg-white p-6 text-slate-800"><b>{t('Video generation pricing','视频生成计费')}</b><span>{t('Image-to-video costs vary by resolution and duration. Failed or canceled jobs are refunded.','图生视频按清晰度和时长计费，任务失败或取消会退回积分。')}</span><div className="video-pricing-grid mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">{videoCosts.map((row) => <div key={row.resolution}><strong>{row.resolution}</strong>{row.costs.map((item) => <span key={item.duration} className="block">{item.duration}s · {item.credits} {t('credits','积分')}</span>)}</div>)}</div></div><p className="mt-6 text-center"><Link href="/subscribe">{t('View all plans and payment options','查看全部套餐与支付选项')} →</Link></p></div></section>
    <PaymentModal isLoading={loading} pricingItem={payment} onCheckout={checkout}/>
  </>;
}
