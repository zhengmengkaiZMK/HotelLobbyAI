'use client';

import { useMemo, useState } from 'react';
import { Coins, Loader } from 'lucide-react';
import { useLocale } from 'next-intl';
import { toast } from 'sonner';

import { PaymentModal } from '@/shared/blocks/payment/payment-modal';
import { useAppContext } from '@/shared/contexts/app';
import { getCookie } from '@/shared/lib/cookie';
import { PricingItem } from '@/shared/types/blocks/pricing';

const PRESETS = [5, 10, 20, 50];

const TOPUP_PRODUCT_ID = 'credits_topup';

/**
 * Credit top-up card — usable on the subscribe page and in the user
 * dashboard. Credits are granted server-side at the admin-configured
 * rate (1 USD = N credits, default 12).
 */
export function TopupCard({
  rate,
  hasSubscription = true,
  className = '',
}: {
  rate: number;
  hasSubscription?: boolean;
  className?: string;
}) {
  const locale = useLocale();
  const zh = locale === 'zh';
  const t = (en: string, cn: string) => (zh ? cn : en);

  const { user, configs, setIsShowSignModal, setIsShowPaymentModal } =
    useAppContext();
  const [usd, setUsd] = useState<number>(10);
  const [custom, setCustom] = useState('');
  const [loading, setLoading] = useState(false);
  const [payment, setPayment] = useState<PricingItem | null>(null);

  const amount = useMemo(() => {
    if (custom.trim() !== '') {
      const num = Number(custom);
      return Number.isFinite(num) ? num : 0;
    }
    return usd;
  }, [custom, usd]);

  const credits = Number.isFinite(amount) && amount > 0 ? Math.floor(amount * rate) : 0;

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
          product_id: TOPUP_PRODUCT_ID,
          amount_usd: item.amount / 100,
          currency: 'USD',
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

  function buy() {
    if (!user) {
      setIsShowSignModal(true);
      return;
    }
    if (!hasSubscription) {
      // non-subscribers get an explicit prompt instead of a dead button —
      // the checkout API enforces the same rule server-side
      toast.error(
        t(
          'Credit top-ups are exclusive to Plus/Pro subscribers — please subscribe to a plan first.',
          '积分加购仅面向 Plus/Pro 订阅用户，请先订阅套餐后再购买。'
        )
      );
      return;
    }
    if (!credits || credits <= 0) {
      toast.error(t('Please enter a valid amount', '请输入有效金额'));
      return;
    }
    const item: PricingItem = {
      product_id: TOPUP_PRODUCT_ID,
      title: t('Credit Top-up', '积分加购'),
      product_name: 'ViralReel Credits Top-up',
      amount: Math.round(amount * 100),
      price: `$${amount.toFixed(2)}`,
      currency: 'USD',
      credits,
      interval: 'one-time',
    };
    if (configs.select_payment_enabled === 'true') {
      setPayment(item);
      setIsShowPaymentModal(true);
    } else {
      void checkout(item, configs.default_payment_provider);
    }
  }

  return (
    <div
      className={`w-full overflow-hidden rounded-lg border bg-card text-card-foreground ${className}`}
    >
      <div className="border-b px-6 py-5">
        <div className="flex items-center gap-2">
          <Coins className="size-5 text-primary" />
          <h3 className="text-lg font-semibold">
            {t('Buy credits', '购买积分')}
          </h3>
        </div>
        <p className="mt-2 text-sm text-muted-foreground">
          {t(
            `Top up any time — $1 = ${rate} credits. Credits never expire.`,
            `随时加购——1 美元 = ${rate} 积分，积分永不过期。`
          )}
        </p>
      </div>
      <div className="space-y-5 px-6 py-6">
        {!hasSubscription && (
          <p className="rounded-lg border border-amber-500/50 bg-amber-500/10 px-3 py-2 text-sm text-amber-700 dark:text-amber-400">
            {t(
              'Credit top-ups are exclusive to Plus/Pro subscribers — please subscribe to a plan first.',
              '积分加购仅面向 Plus/Pro 订阅用户，请先订阅套餐后再购买。'
            )}
          </p>
        )}
        <div className="flex flex-wrap gap-2">
          {PRESETS.map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => {
                setUsd(p);
                setCustom('');
              }}
              className={`rounded-lg border px-4 py-2 text-sm font-medium transition-colors ${
                custom.trim() === '' && usd === p
                  ? 'border-primary bg-primary text-primary-foreground'
                  : 'bg-background hover:bg-accent'
              }`}
            >
              ${p}
            </button>
          ))}
          <div className="flex items-center gap-2">
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
                $
              </span>
              <input
                type="number"
                min={1}
                max={1000}
                step="1"
                value={custom}
                onChange={(e) => setCustom(e.target.value)}
                placeholder={t('Custom', '自定义')}
                className="h-9 w-28 rounded-lg border bg-background pl-7 pr-3 text-sm outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-4 bg-muted px-6 py-4">
        <p className="text-sm">
          {credits > 0 ? (
            <>
              {t('You will get', '将获得')}{' '}
              <span className="font-semibold text-primary">
                {credits.toLocaleString()} {t('credits', '积分')}
              </span>{' '}
              <span className="text-muted-foreground">
                (${amount.toFixed(2)})
              </span>
            </>
          ) : (
            <span className="text-muted-foreground">
              {t('Enter an amount to see credits', '输入金额查看可得积分')}
            </span>
          )}
        </p>
        <button
          type="button"
          disabled={loading || credits <= 0}
          onClick={buy}
          className="inline-flex h-9 items-center gap-2 rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground disabled:pointer-events-none disabled:opacity-50"
        >
          {loading && <Loader className="size-4 animate-spin" />}
          {loading ? t('Processing…', '处理中…') : t('Buy credits', '购买积分')}
        </button>
      </div>
      <PaymentModal isLoading={loading} pricingItem={payment} onCheckout={checkout} />
    </div>
  );
}
