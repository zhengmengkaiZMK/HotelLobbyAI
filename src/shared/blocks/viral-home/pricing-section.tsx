'use client';

import { useState } from 'react';
import { Check } from 'lucide-react';
import { useLocale } from 'next-intl';
import { toast } from 'sonner';

import { Link } from '@/core/i18n/navigation';
import { PaymentModal } from '@/shared/blocks/payment/payment-modal';
import { useAppContext } from '@/shared/contexts/app';
import { getCookie } from '@/shared/lib/cookie';
import { planFeatureLines } from '@/shared/lib/video-yield';
import { PricingItem } from '@/shared/types/blocks/pricing';

// Pricing section shared by the homepage historically and the /pricing page.
// The pricing page offers one-time credit packs (Pay Once) as the default tab,
// plus monthly and yearly plans. Feature copy, including ≈ videos, comes from
// the same credit table rendered under the cards.
export function PricingSection({
  plans,
  videoCosts,
  enablePayOnce = false,
}: {
  plans: PricingItem[];
  creditsPerUsd?: number;
  videoCosts: ReturnType<typeof import('@/shared/lib/video-cost').getVideoCostTable>;
  enablePayOnce?: boolean;
}) {
  const { user, configs, setIsShowSignModal, setIsShowPaymentModal } = useAppContext();
  const [group, setGroup] = useState(enablePayOnce ? 'one-time' : 'month');
  const [payment, setPayment] = useState<PricingItem | null>(null);
  const [loading, setLoading] = useState(false);
  const locale = useLocale();
  const zh = locale === 'zh';
  const t = (en: string, cn: string) => (zh ? cn : en);
  const available = plans.filter((p) => p.interval === group);
  const creditPacks = plans.filter((p) => p.interval === 'one-time');
  const showingPacks = enablePayOnce && group === 'one-time';
  const cards = showingPacks ? creditPacks : available;

  async function checkout(item: PricingItem, provider?: string) {
    if (!user) {
      setIsShowSignModal(true);
      return;
    }
    setLoading(true);
    try {
      const metadata: Record<string, string> = {};
      if (configs.affonso_enabled === 'true') metadata.affonso_referral = getCookie('affonso_referral') || '';
      if (configs.promotekit_enabled === 'true') metadata.promotekit_referral = getCookie('promotekit_referral') || '';
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
      if (!response.ok || payload.code !== 0 || !payload.data?.checkoutUrl) {
        throw new Error(payload.message || t('Checkout failed', '创建支付失败'));
      }
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

  return (
    <>
      <section className="sec sec-alt" id="pricing">
        <div className="container">
          <div className="sec-head">
            <p className="kick">{t('Pricing', '定价')}</p>
            <h2>{t('Simple pricing. Scale when you go viral.', '定价简单，爆火了再扩量。')}</h2>
          </div>
          <div className={`bill-toggle${enablePayOnce ? ' with-once' : ''}`}>
            {enablePayOnce && (
              <button
                className={group === 'one-time' ? 'on' : ''}
                aria-pressed={group === 'one-time'}
                onClick={() => setGroup('one-time')}
              >
                {t('Pay Once', '一次性')}
              </button>
            )}
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
          {showingPacks && (
            <p className="pay-once-note">
              {t('Buy only what you need. No monthly fee.', '需要多少买多少，不用按月付费。')}
            </p>
          )}
          <div className={`price-grid${showingPacks ? ' cols-4' : ''}`}>
            {cards.map((item) => {
              const features = planFeatureLines(item, videoCosts, zh);
              const featured = !!item.is_featured;
              return (
                <article className={`pcard ${featured ? 'pro' : ''}`} key={item.product_id}>
                  {featured && <span className="tag">{t('Most popular', '最受欢迎')}</span>}
                  {item.label && !featured && (
                    <span className="tag">{t(item.label, item.label === 'Most popular' ? '最受欢迎' : item.label)}</span>
                  )}
                  <h3>{item.title}</h3>
                  <div className="price">
                    {item.price}
                    <small>{item.unit}</small>
                  </div>
                  <span className="anchor">
                    {t(
                      `${(item.credits || 0).toLocaleString()} credits`,
                      `${(item.credits || 0).toLocaleString()} 积分`
                    )}
                  </span>
                  <ul>
                    {features.map((line) => (
                      <li key={line}>
                        <Check size={16} className="ok" />
                        {line}
                      </li>
                    ))}
                  </ul>
                  <button
                    disabled={loading}
                    className={`btn ${featured ? 'btn-primary' : 'btn-outline'}`}
                    onClick={() => buy(item)}
                  >
                    {showingPacks
                      ? t(`Buy ${item.title}`, `购买 ${item.title}`)
                      : t(`Get ${item.title}`, `订阅 ${item.title}`)}
                  </button>
                </article>
              );
            })}
          </div>
          <div className="video-pricing-note mt-8 rounded-xl border border-orange-200 bg-white p-6 text-slate-800">
            <b>{t('Video generation pricing', '视频生成计费')}</b>
            <span>
              {t(
                'Costs vary by resolution and duration — billed per output second, the reference video is not charged. Failed or canceled jobs are refunded. Counts above use 720p / 8s as the baseline.',
                '按清晰度和时长计费，只按输出秒数收费，参考视频不计费；任务失败或取消会退回积分。上面的条数以 720p / 8 秒为基准。'
              )}
            </span>
            <div className="video-pricing-grid mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {videoCosts.map((row) => (
                <div key={row.resolution}>
                  <strong>{row.resolution}</strong>
                  {row.costs.map((item) => (
                    <span key={item.duration} className="block">
                      {item.duration}s · {item.credits} {t('credits', '积分')}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <p className="mt-6 text-center">
            <Link href="/subscribe">{t('View all plans and payment options', '查看全部套餐与支付选项')} →</Link>
          </p>
        </div>
      </section>
      <PaymentModal isLoading={loading} pricingItem={payment} onCheckout={checkout} />
    </>
  );
}
