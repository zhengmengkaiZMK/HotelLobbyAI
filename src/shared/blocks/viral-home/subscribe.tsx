'use client';

import { useState } from 'react';
import { Check } from 'lucide-react';
import { useLocale } from 'next-intl';
import { toast } from 'sonner';

import { PaymentModal } from '@/shared/blocks/payment/payment-modal';
import { TopupCard } from '@/shared/blocks/viral-home/topup';
import { Link } from '@/core/i18n/navigation';
import { useAppContext } from '@/shared/contexts/app';
import { getCookie } from '@/shared/lib/cookie';
import { getSubscribeFaq } from '@/shared/lib/pricing-copy';
import { PricingItem } from '@/shared/types/blocks/pricing';
import './home.css';

export function SubscribeView({
  plans,
  creditsPerUsd = 12,
  hasSubscription = false,
}: {
  plans: PricingItem[];
  creditsPerUsd?: number;
  hasSubscription?: boolean;
}) {
  const locale = useLocale();
  const zh = locale === 'zh';
  const t = (en: string, cn: string) => (zh ? cn : en);
  const { user, configs, setIsShowSignModal, setIsShowPaymentModal } =
    useAppContext();
  const [group, setGroup] = useState('month');
  const [payment, setPayment] = useState<PricingItem | null>(null);
  const [loading, setLoading] = useState(false);

  const items = plans.filter((p) => p.interval === group);
  const featured = items.find((p) => p.is_featured);
  const cards = items.length > 0 ? items : plans.filter((p) => p.interval === 'month');

  async function checkout(item: PricingItem, provider?: string) {
    if (!user) {
      setIsShowSignModal(true);
      return;
    }
    setLoading(true);
    try {
      const metadata: Record<string, string> = {};
      if (configs.affonso_enabled === 'true')
        metadata.affonso_referral = getCookie('affonso_referral') || '';
      if (configs.promotekit_enabled === 'true')
        metadata.promotekit_referral = getCookie('promotekit_referral') || '';
      const response = await fetch('/api/payment/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          product_id: item.product_id,
          currency: item.currency,
          locale,
          payment_provider: provider || '',
          metadata,
        }),
      });
      const payload = await response.json();
      if (!response.ok || payload.code !== 0 || !payload.data?.checkoutUrl)
        throw new Error(payload.message || t('Checkout failed', '创建支付失败'));
      window.location.assign(payload.data.checkoutUrl);
    } catch (e) {
      toast.error(e instanceof Error ? e.message : t('Checkout failed', '创建支付失败'));
    } finally {
      setLoading(false);
    }
  }

  function buy(item: PricingItem) {
    if (!user) {
      setIsShowSignModal(true);
      return;
    }
    if (configs.select_payment_enabled === 'true') {
      setPayment(item);
      setIsShowPaymentModal(true);
    } else {
      void checkout(item, configs.default_payment_provider);
    }
  }

  const faq = getSubscribeFaq(zh, creditsPerUsd);

  return (
    <div className="viral-home">
      <main>
        <section className="sub-hero">
          <div className="container">
            <p className="kick">{t('Pricing', '订阅套餐')}</p>
            <h1>
              {t('Subscribe to ViralReel', '订阅 ViralReel')}
            </h1>
            <p className="sub">
              {t(
                'One subscription, unlimited trend-chasing. Every plan includes the ViralReel template library, auto lip-sync and watermark-free export.',
                '一次订阅，随时追热梗。所有套餐均包含全部 ViralReel 模板、自动口型同步和无水印导出。'
              )}
            </p>
            <p className="sub-rating" aria-label="5 out of 5 stars">
              <span className="stars">★★★★★</span>
              <span>
                {t('5/5 from creator reviews', '创作者评价 5/5')}
              </span>
            </p>
            <div className="bill-toggle">
              <button
                className={group === 'month' ? 'on' : ''}
                aria-pressed={group === 'month'}
                onClick={() => setGroup('month')}
              >
                {t('Monthly', '月付')}
              </button>
              <button
                className={group === 'year' ? 'on' : ''}
                aria-pressed={group === 'year'}
                onClick={() => setGroup('year')}
              >
                {t('Yearly', '年付')} <span className="save">−20%</span>
              </button>
            </div>
          </div>
        </section>
        <section className="sec sec-alt" id="plans">
          <div className="container">
            <div className="price-grid">
              {cards.map((item, i) => (
                <article
                  className={`pcard ${item.is_featured || (!featured && i === 1) ? 'pro' : ''}`}
                  key={item.product_id || i}
                >
                  {item.label && <span className="tag">{t(item.label, item.label === 'Most popular' ? '最受欢迎' : item.label)}</span>}
                  <h2>{t(item.title || 'Plan', item.title === 'Plus' ? 'Plus' : item.title === 'Pro' ? 'Pro' : (item.title || 'Plan'))}</h2>
                  <div className="price">
                    {item.price}
                    <small>{item.unit}</small>
                  </div>
                  {item.original_price && <span className="anchor was">{item.original_price}</span>}
                  <span className="anchor">{item.description}</span>
                  <ul>
                    {item.features?.map((f) => (
                      <li key={f}>
                        <Check size={16} className="ok" />
                        {t(f, zh ? PLAN_FEATURES_ZH[f] || f : f)}
                      </li>
                    ))}
                  </ul>
                  <button
                    disabled={loading}
                    className={`btn ${item.is_featured || (!featured && i === 1) ? 'btn-primary' : 'btn-outline'}`}
                    onClick={() => buy(item)}
                  >
                    {loading
                      ? t('Processing…', '处理中…')
                      : t(`Get ${item.title}`, `订阅 ${item.title === 'Plus' ? 'Plus' : item.title === 'Pro' ? 'Pro' : item.title}`)}
                  </button>
                </article>
              ))}
            </div>
            <p className="sub-note">
              {t(
                `Credit cost depends on resolution and duration — see Pricing. Top up any time at ${creditsPerUsd} credits = $1. Cancel any time.`,
                `积分随清晰度和时长变化，详见定价页。随时加购（${creditsPerUsd} 积分 = 1 美元）。随时取消。`
              )}{' '}
              <Link href="/pricing">{t('One-time packs', '一次性积分包')}</Link>
            </p>
          </div>
        </section>
        {hasSubscription && (
          <section className="sec" id="credits">
            <div className="container">
              <div className="sec-head">
                <p className="kick">{t('Credit Top-up', '积分加购')}</p>
                <h2>{t('Need more credits?', '积分不够用？')}</h2>
                <p className="sub">
                  {t(
                    'Top up any time — credits never expire and work with your plan.',
                    '随时加购——积分永不过期，与你的套餐通用。'
                  )}
                </p>
              </div>
              <TopupCard rate={creditsPerUsd} hasSubscription={hasSubscription} />
            </div>
          </section>
        )}
        <section className="sec" id="faq">
          <div className="container">
            <div className="sec-head">
              <p className="kick">{t('FAQ', '常见问题')}</p>
              <h2>{t('Subscription questions', '订阅相关的问题')}</h2>
            </div>
            <div className="faq-list">
              {faq.map(([q, a]) => (
                <details key={q} open={q === faq[0][0]}>
                  <summary>{q}</summary>
                  <p>{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
        <section className="final-cta sec-alt">
          <div className="container">
            <h2>{t('Ready to go viral?', '准备爆火了吗？')}</h2>
            <p>
              {t(
                'Subscribe, upload your photos, and make your first ViralReel template video in about a minute.',
                '订阅后上传照片，大约一分钟做出你的第一条 ViralReel 模板视频。'
              )}
            </p>
            <Link className="btn btn-primary btn-lg" href="/">
              {t('Back to templates', '回到模板页')}
            </Link>
          </div>
        </section>
      </main>
      <PaymentModal isLoading={loading} pricingItem={payment} onCheckout={checkout} />
    </div>
  );
}

const PLAN_FEATURES_ZH: Record<string, string> = {
  '200 credits every month (≈ 20 videos)': '每月 200 积分（约 20 条视频）',
  '500 credits every month (≈ 50 videos)': '每月 500 积分（约 50 条视频）',
  '2,400 credits per year (≈ 240 videos)': '每年 2,400 积分（约 240 条视频）',
  '6,000 credits per year (≈ 600 videos)': '每年 6,000 积分（约 600 条视频）',
  'All templates included': '包含全部模板',
  '720p export, watermark-free': '720p 导出，无水印',
  '1080p export, watermark-free': '1080p 导出，无水印',
  'Standard rendering queue': '标准渲染队列',
  'Priority queue — skip the line': '优先生成队列，免排队',
  'Instant credit top-ups whenever you need': '积分不够可随时加购',
};
