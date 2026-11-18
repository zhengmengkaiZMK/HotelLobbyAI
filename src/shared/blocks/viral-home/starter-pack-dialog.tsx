'use client';

import { useState } from 'react';
import { useLocale } from 'next-intl';
import { toast } from 'sonner';

import { Button } from '@/shared/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from '@/shared/components/ui/dialog';
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
import { useMediaQuery } from '@/shared/hooks/use-media-query';
import { getCookie } from '@/shared/lib/cookie';
import {
  blackFridayOffer,
  packOnSale,
  resolvePackPrice,
} from '@/shared/lib/black-friday';
import { CANONICAL_PRICING } from '@/shared/lib/pricing-copy';

import { useBlackFridayExpired } from './black-friday-ui';

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
  const [selected, setSelected] = useState<PackId>('popular');
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const expired = useBlackFridayExpired();
  const configsReady = Object.keys(configs).length > 0;
  const effective = !configsReady
    ? null
    : expired
      ? { ...configs, black_friday_enabled: 'false' }
      : configs;

  const packs: Record<
    PackId,
    { name: string; price: string; original: string; badge: string; credits: number; note: string }
  > = {
    popular: pricedPack(
      'Popular',
      'credits-once-popular',
      configs.pricing_plan_credits_once_popular_price || CANONICAL_PRICING.packPopularPrice,
      Number(configs.pricing_plan_credits_once_popular_credits) || CANONICAL_PRICING.packPopularCredits,
      1990,
      t('Supports 720p & 1080p video generation', '支持生成 720p、1080p 视频'),
      effective
    ),
    starter: pricedPack(
      'Starter',
      'credits-once-starter',
      configs.pricing_plan_credits_once_starter_price || CANONICAL_PRICING.packStarterPrice,
      Number(configs.pricing_plan_credits_once_starter_credits) || CANONICAL_PRICING.packStarterCredits,
      990,
      t('Only supports 480p & 720p video generation', '仅支持生成 480p、720p 视频'),
      effective
    ),
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

  const title = t('Not enough credits', '积分不足');
  const description = t(
    `This video needs ${costCredits} credits. Your balance is ${balance}. Pick a credit pack — you will return to this page after checkout.`,
    `本次生成需要 ${costCredits} 积分，当前余额 ${balance}。选择一个积分包，支付后会回到本页继续。`
  );
  const choices = (
    <PackChoices
      packs={packs}
      selected={selected}
      loading={loading}
      compact={!isDesktop}
      onSelect={setSelected}
      t={t}
    />
  );
  const actions = (
    <>
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
      <Button variant="outline" onClick={() => onOpenChange(false)}>
        {t('Not now', '稍后再说')}
      </Button>
    </>
  );

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-md">
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
          {choices}
          <div className="flex flex-col gap-2">{actions}</div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>{title}</DrawerTitle>
          <DrawerDescription>{description}</DrawerDescription>
        </DrawerHeader>
        {choices}
        <DrawerFooter className="pt-4">
          {actions}
          <DrawerClose asChild>
            <span className="sr-only">{t('Close', '关闭')}</span>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

function pricedPack(
  name: string,
  productId: string,
  listPrice: string,
  credits: number,
  amount: number,
  note: string,
  configs: { black_friday_enabled?: string } | null
) {
  const item = resolvePackPrice(
    {
      product_id: productId,
      price: listPrice,
      amount,
      original_price: '',
    },
    configs
  );
  const onSale = packOnSale(item);
  return {
    name,
    price: item.price || listPrice,
    original: onSale ? item.original_price || '' : '',
    badge: onSale ? blackFridayOffer(productId)?.badge || '' : '',
    credits,
    note,
  };
}

function PackChoices({
  packs,
  selected,
  loading,
  compact,
  onSelect,
  t,
}: {
  packs: Record<
    PackId,
    { name: string; price: string; original: string; badge: string; credits: number; note: string }
  >;
  selected: PackId;
  loading: boolean;
  compact: boolean;
  onSelect: (id: PackId) => void;
  t: (en: string, cn: string) => string;
}) {
  return (
    <div className="space-y-2 px-4 md:px-0" role="radiogroup" aria-label={t('Credit packs', '积分包')}>
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
            onClick={() => onSelect(id)}
            className={`flex w-full items-center justify-between gap-3 rounded-xl border p-4 text-left transition-colors ${
              isSelected
                ? 'border-orange-500 bg-orange-50'
                : 'border-zinc-200 bg-white hover:border-zinc-300'
            }`}
          >
            <span className="min-w-0">
              <span className="flex flex-wrap items-center gap-2">
                <span className="text-sm font-semibold">{pack.name}</span>
                {pack.badge ? (
                  <span className="rounded-full border border-orange-200 bg-orange-50 px-2 py-0.5 text-xs font-medium text-orange-700">
                    {pack.badge}
                  </span>
                ) : null}
                {id === 'popular' && !pack.badge ? (
                  <span className="rounded-full bg-orange-100 px-2 py-0.5 text-xs font-medium text-orange-700">
                    {t('HD', '高清')}
                  </span>
                ) : null}
              </span>
              {compact ? null : (
                <span className="mt-0.5 block text-2xl font-semibold tracking-tight">
                  {pack.price}
                  {pack.original ? (
                    <s className="ml-2 text-base font-medium text-zinc-400">{pack.original}</s>
                  ) : null}
                  <span className="ml-1 text-sm font-normal text-zinc-500">
                    {t('once', '一次性')}
                  </span>
                </span>
              )}
              <span className="mt-1 block text-sm text-zinc-600">
                {t(`${pack.credits} credits · never expire`, `${pack.credits} 积分 · 永不过期`)}
              </span>
              <span className="mt-0.5 block text-sm text-zinc-600">{pack.note}</span>
            </span>
            <span className="flex shrink-0 items-center gap-3">
              {compact ? (
                <span className="text-right">
                  <span className="block text-xl font-semibold">{pack.price}</span>
                  {pack.original ? (
                    <s className="block text-sm font-medium text-zinc-400">{pack.original}</s>
                  ) : (
                    <span className="block text-xs text-zinc-500">{t('once', '一次性')}</span>
                  )}
                </span>
              ) : null}
              <span
                aria-hidden="true"
                className={`flex size-5 items-center justify-center rounded-full border-2 ${
                  isSelected ? 'border-orange-500' : 'border-zinc-300'
                }`}
              >
                <span
                  className={`size-2.5 rounded-full ${
                    isSelected ? 'bg-orange-500' : 'bg-transparent'
                  }`}
                />
              </span>
            </span>
          </button>
        );
      })}
    </div>
  );
}
