'use client';

import { useState } from 'react';
import { Check } from 'lucide-react';
import { useLocale } from 'next-intl';
import { toast } from 'sonner';

import { Link } from '@/core/i18n/navigation';
import { PaymentModal } from '@/shared/blocks/payment/payment-modal';
import { useAppContext } from '@/shared/contexts/app';
import { getCookie } from '@/shared/lib/cookie';
import { blackFridayOffer, packOnSale } from '@/shared/lib/black-friday';
import { CANONICAL_PRICING } from '@/shared/lib/pricing-copy';
import { creditsForDuration, planFeatureLines, videosAtCost } from '@/shared/lib/video-yield';
import { PricingItem } from '@/shared/types/blocks/pricing';

import { BlackFridayIntro, SalePrice, useSalePlans } from './black-friday-ui';

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
  const { view, active } = useSalePlans(plans);
  const available = view.filter((p) => p.interval === group);
  const creditPacks = view.filter((p) => p.interval === 'one-time');
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
          {enablePayOnce ? (
            <div className="sec-head">
              <p className="kick">{t('Pricing', '定价')}</p>
              <h1>{t('Simple pricing. Scale when you go viral.', '定价简单，爆火了再扩量。')}</h1>
            </div>
          ) : active ? null : (
            <div className="sec-head">
              <p className="kick">{t('Pricing', '定价')}</p>
              <h2>{t('Simple pricing. Scale when you go viral.', '定价简单，爆火了再扩量。')}</h2>
            </div>
          )}
          {active ? <BlackFridayIntro zh={zh} /> : null}
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
                <article className={`pcard ${featured ? 'pro' : ''}`} key={item.product_id} id={showingPacks && featured ? 'popular-pack' : undefined}>
                  {featured && <span className="tag">{t('Most popular', '最受欢迎')}</span>}
                  {item.label && !featured && (
                    <span className="tag">{t(item.label, item.label === 'Most popular' ? '最受欢迎' : item.label)}</span>
                  )}
                  <div className="pcard-title">
                    <h3>{item.title}</h3>
                    {packOnSale(item) && blackFridayOffer(item.product_id) ? (
                      <span className="off-pill">{blackFridayOffer(item.product_id)?.badge}</span>
                    ) : null}
                  </div>
                  <SalePrice
                    price={item.price}
                    original={packOnSale(item) ? item.original_price : ''}
                    unit={item.unit}
                  />
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
                'Costs vary by resolution and duration — billed per output second, the reference video is not charged. Failed or canceled jobs are refunded. Counts above use a default 15-second 720p clip. Longer templates cost more. The generator button is the price for the current render.',
                '按清晰度和时长计费，只按输出秒数收费，参考视频不计费；任务失败或取消会退回积分。上面的条数按默认 15 秒 720p 计算。更长的模板更贵。以生成器按钮上的本次积分为准。'
              )}
            </span>
            <p className="mt-3 text-sm">
              {t(
                'Those video prices do not apply to images. The GTA 6 Style image tool gives each signed-in user one image per Asia/Shanghai day. After that, an image without a photo costs 2 credits and an image with a photo costs 4 credits. One-time packs on this page are the top-up. Video stays paid, and there is no signup credit grant.',
                '上面的视频价格不用于图片。GTA 6 Style 图片工具给每位登录用户每个上海自然日一张图片。用完之后，不上传照片 2 积分，上传照片 4 积分。本页的一次性积分包用来加购。视频仍然付费，也没有注册赠送积分。'
              )}
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full border-collapse text-left text-sm">
                <caption className="mb-2 text-left font-medium">
                  {t(
                    'Credits per second of output video. The reference video is not charged.',
                    '按输出视频的每秒积分计费。参考视频不计费。'
                  )}
                </caption>
                <thead>
                  <tr className="border-b border-orange-200">
                    <th className="py-2 pr-3 font-semibold">{t('Resolution', '清晰度')}</th>
                    <th className="py-2 pr-3 font-semibold">{t('Credits per second', '每秒积分')}</th>
                    <th className="py-2 pr-3 font-semibold">{t('15-second clip', '15 秒成片')}</th>
                  </tr>
                </thead>
                <tbody>
                  {videoCosts.map((row) => {
                    const fifteen = creditsForDuration(videoCosts, row.resolution, 15);
                    const perSecond = fifteen > 0 ? Math.round((fifteen / 15) * 10) / 10 : 0;
                    return (
                      <tr key={row.resolution} className="border-b border-orange-100">
                        <td className="py-2 pr-3">{row.resolution}</td>
                        <td className="py-2 pr-3">{perSecond}</td>
                        <td className="py-2 pr-3">{fifteen} {t('credits', '积分')}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          {enablePayOnce && <CreditPackTable zh={zh} videoCosts={videoCosts} />}
          <p className="mt-6 text-center">
            <Link href="/subscribe">{t('View all plans and payment options', '查看全部套餐与支付选项')} →</Link>
          </p>
        </div>
      </section>
      <PaymentModal isLoading={loading} pricingItem={payment} onCheckout={checkout} />
    </>
  );
}

function CreditPackTable({
  zh,
  videoCosts,
}: {
  zh: boolean;
  videoCosts: ReturnType<typeof import('@/shared/lib/video-cost').getVideoCostTable>;
}) {
  const t = (en: string, cn: string) => (zh ? cn : en);
  const clip = creditsForDuration(videoCosts, '720p', 15) || 75;
  const perSecond = Math.round((clip / 15) * 10) / 10;
  const secondPerCredit = perSecond > 0 ? Math.round((1 / perSecond) * 100) / 100 : 0.2;
  const packs = [
    ['Starter', CANONICAL_PRICING.packStarterPrice, CANONICAL_PRICING.packStarterCredits],
    ['Popular', CANONICAL_PRICING.packPopularPrice, CANONICAL_PRICING.packPopularCredits],
    ['Creator', CANONICAL_PRICING.packCreatorPrice, CANONICAL_PRICING.packCreatorCredits],
    ['Max', CANONICAL_PRICING.packMaxPrice, CANONICAL_PRICING.packMaxCredits],
  ] as const;

  return (
    <div className="mt-8 overflow-x-auto rounded-xl border border-orange-200 bg-white p-6 text-slate-800">
      <table className="w-full border-collapse text-left text-sm">
        <caption className="mb-3 text-left font-medium">
          {t(
            `One-time packs in US dollars. At 720p, 1 credit is ${secondPerCredit} seconds of output video (${perSecond} credits per second, ${clip} credits for 15 seconds). Pack credits do not expire. A failed or canceled generation returns those credits. Unused credits are not refunded as cash.`,
            `一次性积分包价格为美元。720p 下 1 积分等于 ${secondPerCredit} 秒输出视频（每秒 ${perSecond} 积分，15 秒 ${clip} 积分）。积分包不过期。生成失败或取消会退回本次积分。没用完的积分不按现金退款。`
          )}
        </caption>
        <thead>
          <tr className="border-b border-orange-200">
            <th className="py-2 pr-3 font-semibold">{t('Pack', '积分包')}</th>
            <th className="py-2 pr-3 font-semibold">{t('Price (USD)', '价格（美元）')}</th>
            <th className="py-2 pr-3 font-semibold">{t('Credits', '积分')}</th>
            <th className="py-2 pr-3 font-semibold">{t('720p / 15s videos', '720p / 15 秒条数')}</th>
            <th className="py-2 pr-3 font-semibold">{t('Expires', '是否过期')}</th>
            <th className="py-2 pr-3 font-semibold">{t('Failed generation', '生成失败')}</th>
          </tr>
        </thead>
        <tbody>
          {packs.map(([name, price, credits]) => (
            <tr key={name} className="border-b border-orange-100">
              <td className="py-2 pr-3">{name}</td>
              <td className="py-2 pr-3">{price} USD</td>
              <td className="py-2 pr-3">{credits}</td>
              <td className="py-2 pr-3">{videosAtCost(credits, clip)}</td>
              <td className="py-2 pr-3">{t('No', '不过期')}</td>
              <td className="py-2 pr-3">{t('Credits returned', '退回积分')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
