'use client';

import { useState } from 'react';
import { useLocale } from 'next-intl';
import { toast } from 'sonner';

import { Button } from '@/shared/components/ui/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from '@/shared/components/ui/drawer';
import { useAppContext } from '@/shared/contexts/app';
import { getCookie } from '@/shared/lib/cookie';
import { CANONICAL_PRICING } from '@/shared/lib/pricing-copy';

const STARTER_PRODUCT_ID = 'credits-once-starter';

export function StarterPackDialog({
  open,
  onOpenChange,
  costCredits,
  balance,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  costCredits: number;
  balance: number;
}) {
  const locale = useLocale();
  const zh = locale.startsWith('zh');
  const t = (en: string, cn: string) => (zh ? cn : en);
  const { user, configs, setIsShowSignModal } = useAppContext();
  const [loading, setLoading] = useState(false);
  const price =
    configs.pricing_plan_credits_once_starter_price ||
    CANONICAL_PRICING.packStarterPrice;
  const credits =
    Number(configs.pricing_plan_credits_once_starter_credits) ||
    CANONICAL_PRICING.packStarterCredits;

  async function buy() {
    if (!user) {
      setIsShowSignModal(true);
      return;
    }
    setLoading(true);
    try {
      const metadata: Record<string, string> = {};
      if (configs.affonso_enabled === 'true') {
        metadata.affonso_referral = getCookie('affonso_referral') || '';
      }
      if (configs.promotekit_enabled === 'true') {
        metadata.promotekit_referral = getCookie('promotekit_referral') || '';
      }
      const returnUrl =
        typeof window !== 'undefined'
          ? `${window.location.pathname}${window.location.search}`
          : '/';
      const response = await fetch('/api/payment/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          product_id: STARTER_PRODUCT_ID,
          currency: 'USD',
          locale,
          payment_provider: configs.default_payment_provider || 'stripe',
          return_url: returnUrl,
          metadata,
        }),
      });
      const payload = await response.json();
      if (!response.ok || payload.code !== 0 || !payload.data?.checkoutUrl) {
        throw new Error(payload.message || t('Checkout failed', '创建支付失败'));
      }
      window.location.assign(payload.data.checkoutUrl);
    } catch (e) {
      toast.error(
        e instanceof Error ? e.message : t('Checkout failed', '创建支付失败')
      );
      setLoading(false);
    }
  }

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>
            {t('Not enough credits', '积分不足')}
          </DrawerTitle>
          <DrawerDescription>
            {t(
              `This video needs ${costCredits} credits. Your balance is ${balance}. Buy the Starter pack to continue on this page.`,
              `本次生成需要 ${costCredits} 积分，当前余额 ${balance}。购买 Starter 积分包后会回到本页继续。`
            )}
          </DrawerDescription>
        </DrawerHeader>
        <div className="px-4">
          <div className="rounded-xl border border-orange-200 bg-white p-4">
            <p className="text-sm font-semibold">Starter</p>
            <p className="mt-1 text-2xl font-semibold tracking-tight">
              {price}
              <span className="ml-1 text-sm font-normal text-zinc-500">
                {t('once', '一次性')}
              </span>
            </p>
            <p className="mt-2 text-sm text-zinc-600">
              {t(`${credits} credits · never expire`, `${credits} 积分 · 永不过期`)}
            </p>
          </div>
        </div>
        <DrawerFooter className="pt-4">
          <Button
            className="h-11 bg-gradient-to-r from-orange-500 to-orange-600 text-white"
            disabled={loading}
            onClick={() => void buy()}
          >
            {loading
              ? t('Redirecting to checkout…', '正在前往支付…')
              : t('Buy credits', '购买积分')}
          </Button>
          <DrawerClose asChild>
            <Button variant="outline">{t('Not now', '稍后再说')}</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
