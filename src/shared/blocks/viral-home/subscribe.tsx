'use client';

import { useState } from 'react';
import { Check } from 'lucide-react';
import { useLocale } from 'next-intl';
import { toast } from 'sonner';

import { PaymentModal } from '@/shared/blocks/payment/payment-modal';
import { Link } from '@/core/i18n/navigation';
import { useAppContext } from '@/shared/contexts/app';
import { getCookie } from '@/shared/lib/cookie';
import { PricingItem } from '@/shared/types/blocks/pricing';
import './home.css';

export function SubscribeView({ plans }: { plans: PricingItem[] }) {
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

  const faq: [string, string][] = [
    [
      t('Can I cancel any time?', '可以随时取消吗？'),
      t(
        'Yes. Cancel in one click from your billing page — you keep access until the end of the current period.',
        '可以。在账单页一键取消，当前周期结束前仍可继续使用。'
      ),
    ],
    [
      t('What happens to unused credits?', '没用完的积分怎么办？'),
      t(
        'Monthly credits refresh with each billing cycle, and you can top up extra credits any time at 15 credits = $1.',
        '每月积分随账单周期刷新，也可以随时加购——15 积分 = 1 美元。'
      ),
    ],
    [
      t('Do you offer a free trial?', '有免费试用吗？'),
      t(
        'Every new account starts with free credits — enough to render your first Hotel Lobby AI template video before you pay a cent.',
        '每个新账号都赠送免费积分——不花一分钱就能先做出第一条 Hotel Lobby AI 模板视频。'
      ),
    ],
    [
      t('Do I own the videos I make?', '生成的视频归我所有吗？'),
      t(
        'Yes. Videos you generate are yours to post anywhere — paid plans are watermark-free with no strings attached.',
        '是的。生成的视频完全归你，可发布到任何平台——付费方案无水印、无附加条件。'
      ),
    ],
  ];

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
                'One subscription, unlimited trend-chasing. Every plan includes all Hotel Lobby AI templates, auto lip-sync and watermark-free export.',
                '一次订阅，随时追热梗。所有套餐均包含全部 Hotel Lobby AI 模板、自动口型同步和无水印导出。'
              )}
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
                '10 credits per video · top up any time at 15 credits = $1 · cancel any time',
                '每条视频 10 积分 · 随时加购（15 积分 = 1 美元）· 随时取消'
              )}
            </p>
          </div>
        </section>
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
                'Subscribe, upload two photos and make your first Hotel Lobby video in 60 seconds.',
                '订阅后上传两张照片，60 秒做出你的第一条 Hotel Lobby 视频。'
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
