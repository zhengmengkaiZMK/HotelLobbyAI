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

type PackId = 'popular' | 'starter';

const PACK_PRODUCT_IDS: Record<PackId, string> = {
  popular: 'credits-once-popular',
  starter: 'credits-once-starter',
};

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
  // default selection: Popular ($19.9, unlocks 720p/1080p)
  const [selected, setSelected] = useState<PackId>('popular');
  const packs: Record<
    PackId,
    { name: string; price: string; credits: number; note: string }
  > = {
    popular: {
      name: 'Popular',
      price:
        configs.pricing_plan_credits_once_popular_price ||
        CANONICAL_PRICING.packPopularPrice,
      credits:
        Number(configs.pricing_plan_credits_once_popular_credits) ||
        CANONICAL_PRICING.packPopularCredits,
      note: t('Supports 720p & 1080p video generation', '支持生成 720p、1080p 视频'),
    },
    starter: {
      name: 'Starter',
      price:
        configs.pricing_plan_credits_once_starter_price ||
        CANONICAL_PRICING.packStarterPrice,
      credits:
        Number(configs.pricing_plan_credits_once_starter_credits) ||
        CANONICAL_PRICING.packStarterCredits,
      note: t('Only supports 480p & 720p video generation', '仅支持生成 480p、720p 视频'),
    },
  };

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
          product_id: PACK_PRODUCT_IDS[selected],
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
              `This video needs ${costCredits} credits. Your balance is ${balance}. Pick a credit pack — you will return to this page after checkout.`,
              `本次生成需要 ${costCredits} 积分，当前余额 ${balance}。选择一个积分包，支付后会回到本页继续。`
            )}
          </DrawerDescription>
        </DrawerHeader>
        <div className="space-y-2 px-4" role="radiogroup" aria-label={t('Credit packs', '积分包')}>
          {(Object.keys(packs) as PackId[]).map((id) => {
            const pack = packs[id];
            const isSelected = selected === id;
            return (
              <button
                key={id}
                type="button"
                role="radio"
                aria-checked={isSelected}
                disabled={loading}
                onClick={() => setSelected(id)}
                className={`flex w-full items-center justify-between gap-3 rounded-xl border p-4 text-left transition-colors ${
                  isSelected
                    ? 'border-orange-500 bg-orange-50'
                    : 'border-zinc-200 bg-white hover:border-zinc-300'
                }`}
              >
                <span>
                  <span className="flex items-center gap-2">
                    <span className="text-sm font-semibold">{pack.name}</span>
                    {id === 'popular' && (
                      <span className="rounded-full bg-orange-100 px-2 py-0.5 text-xs font-medium text-orange-700">
                        {t('HD', '高清')}
                      </span>
                    )}
                  </span>
                  <span className="mt-0.5 block text-2xl font-semibold tracking-tight">
                    {pack.price}
                    <span className="ml-1 text-sm font-normal text-zinc-500">
                      {t('once', '一次性')}
                    </span>
                  </span>
                  <span className="mt-1 block text-sm text-zinc-600">
                    {t(`${pack.credits} credits · never expire`, `${pack.credits} 积分 · 永不过期`)}
                  </span>
                  <span className="mt-0.5 block text-sm text-zinc-600">{pack.note}</span>
                </span>
                <span
                  aria-hidden="true"
                  className={`flex size-5 flex-none items-center justify-center rounded-full border-2 ${
                    isSelected ? 'border-orange-500' : 'border-zinc-300'
                  }`}
                >
                  <span
                    className={`size-2.5 rounded-full ${
                      isSelected ? 'bg-orange-500' : 'bg-transparent'
                    }`}
                  />
                </span>
              </button>
            );
          })}
        </div>
        <DrawerFooter className="pt-4">
          <Button
            className="h-11 bg-gradient-to-r from-orange-500 to-orange-600 text-white"
            disabled={loading}
            onClick={() => void buy()}
          >
            {loading
              ? t('Redirecting to checkout…', '正在前往支付…')
              : t(
                  `Buy ${packs[selected].name} — ${packs[selected].price}`,
                  `购买 ${packs[selected].name}（${packs[selected].price}）`
                )}
          </Button>
          <DrawerClose asChild>
            <Button variant="outline">{t('Not now', '稍后再说')}</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
