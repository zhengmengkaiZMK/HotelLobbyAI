'use client';

import { useEffect, useRef, useState } from 'react';
import { Check, X } from 'lucide-react';
import { useLocale } from 'next-intl';
import { toast } from 'sonner';

import { usePathname } from '@/core/i18n/navigation';
import { PaymentModal } from '@/shared/blocks/payment/payment-modal';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from '@/shared/components/ui/dialog';
import { useAppContext } from '@/shared/contexts/app';
import { getCookie } from '@/shared/lib/cookie';
import {
  BF_HOLD_KEY,
  BF_INTENT_KEY,
  BF_LOGIN_KEY,
  BF_PENDING_KEY,
  BF_SEEN_KEY,
  BLACK_FRIDAY_OFFERS,
  isBlackFridayPopupEnabled,
  resolvePackPrice,
} from '@/shared/lib/black-friday';
import { getVideoCostTable } from '@/shared/lib/video-cost';
import {
  creditsForDuration,
  planFeatureLines,
  videosAtCost,
} from '@/shared/lib/video-yield';
import { PricingItem } from '@/shared/types/blocks/pricing';

import { useBlackFridayClock } from './black-friday-ui';

const PACKS: PricingItem[] = [
  {
    product_id: 'credits-once-popular',
    title: 'Popular',
    price: BLACK_FRIDAY_OFFERS['credits-once-popular'].fallbackOriginal,
    original_price: '',
    currency: 'USD',
    amount: 1990,
    credits: 180,
    interval: 'one-time',
    unit: ' once',
    is_featured: true,
  },
  {
    product_id: 'credits-once-creator',
    title: 'Creator',
    price: BLACK_FRIDAY_OFFERS['credits-once-creator'].fallbackOriginal,
    original_price: '',
    currency: 'USD',
    amount: 3990,
    credits: 480,
    interval: 'one-time',
    unit: ' once',
  },
];

function readStorage(store: Storage, key: string) {
  try {
    return store.getItem(key);
  } catch {
    return null;
  }
}

function writeStorage(store: Storage, key: string, value: string) {
  try {
    store.setItem(key, value);
  } catch {
    /* private mode */
  }
}

function removeStorage(store: Storage, key: string) {
  try {
    store.removeItem(key);
  } catch {
    /* private mode */
  }
}

function skipPath(pathname: string) {
  return (
    pathname.startsWith('/admin') ||
    /\/(sign-in|sign-up|verify-email|auth-popup|auth-callback|no-permission)(\/|$)/.test(
      pathname
    )
  );
}

function hasReopenIntent() {
  const session = readStorage(sessionStorage, BF_INTENT_KEY);
  const local = readStorage(localStorage, BF_INTENT_KEY);
  return (
    session === 'popup' ||
    session === 'pricing' ||
    local === 'popup' ||
    local === 'pricing'
  );
}

function setReopenIntent() {
  writeStorage(sessionStorage, BF_INTENT_KEY, 'popup');
  writeStorage(localStorage, BF_INTENT_KEY, 'popup');
}

function clearReopenIntent() {
  removeStorage(sessionStorage, BF_INTENT_KEY);
  removeStorage(localStorage, BF_INTENT_KEY);
  removeStorage(sessionStorage, BF_HOLD_KEY);
}

export function BlackFridayModal() {
  const locale = useLocale();
  const zh = locale.startsWith('zh');
  const t = (en: string, cn: string) => (zh ? cn : en);
  const pathname = usePathname() || '/';
  const {
    user,
    configs,
    isCheckSign,
    isShowSignModal,
    setIsShowSignModal,
  } = useAppContext();
  const clock = useBlackFridayClock();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [payment, setPayment] = useState<PricingItem | null>(null);
  const [payOpen, setPayOpen] = useState(false);
  const bootstrapped = useRef(false);
  const seenUserId = useRef<string | null>(null);
  const signWasOpen = useRef(false);
  const userDismiss = useRef(false);
  const loginCheckSeen = useRef(false);
  const settleTimer = useRef<number | null>(null);
  const checkingRef = useRef(isCheckSign);
  const popupEnabledRef = useRef(false);

  const configsReady = Object.keys(configs).length > 0;
  const popupOn =
    configsReady && !clock.expired && isBlackFridayPopupEnabled(configs);
  checkingRef.current = isCheckSign;
  popupEnabledRef.current = popupOn;

  const packs = PACKS.map((item) => {
    const creditsKey =
      item.product_id === 'credits-once-popular'
        ? configs.pricing_plan_credits_once_popular_credits
        : configs.pricing_plan_credits_once_creator_credits;
    const credits = Number(creditsKey) || item.credits;
    return resolvePackPrice(
      { ...item, credits },
      popupOn ? configs : { black_friday_enabled: 'false' }
    );
  });

  function markSeen() {
    writeStorage(localStorage, BF_SEEN_KEY, '1');
  }

  function reopenSalePopup() {
    removeStorage(sessionStorage, BF_PENDING_KEY);
    removeStorage(sessionStorage, BF_HOLD_KEY);
    writeStorage(sessionStorage, BF_LOGIN_KEY, '1');
    clearReopenIntent();
    setOpen(true);
  }

  function dismiss() {
    clearReopenIntent();
    markSeen();
    setOpen(false);
  }

  useEffect(() => {
    if (isShowSignModal && !user) {
      signWasOpen.current = true;
      loginCheckSeen.current = false;
      writeStorage(sessionStorage, BF_PENDING_KEY, '1');
      return;
    }
    // Closed the login dialog without signing in: put the sale popup back.
    if (signWasOpen.current && !user && hasReopenIntent() && popupOn) {
      signWasOpen.current = false;
      setOpen(true);
    }
  }, [isShowSignModal, user, popupOn]);

  useEffect(() => {
    const loginPopupPending =
      hasReopenIntent() || readStorage(sessionStorage, BF_PENDING_KEY) === '1';
    if (isCheckSign) {
      if (loginPopupPending) loginCheckSeen.current = true;
      if (settleTimer.current) {
        window.clearTimeout(settleTimer.current);
        settleTimer.current = null;
      }
      return;
    }
    if (!configsReady || !clock.ready) return;
    if (skipPath(pathname)) return;
    if (typeof window !== 'undefined' && window.location.search.includes('checkout=success')) {
      clearReopenIntent();
      return;
    }

    const userId = user?.id ?? null;
    const popupEnabled = isBlackFridayPopupEnabled(configs);
    const awaitingLoginPopup =
      !!userId &&
      (hasReopenIntent() || readStorage(sessionStorage, BF_PENDING_KEY) === '1') &&
      readStorage(sessionStorage, BF_LOGIN_KEY) !== '1';

    // Sign-in sets the user, refreshes the page, then the header session
    // check runs again. Open only after that check has finished and gone quiet.
    if (awaitingLoginPopup) {
      bootstrapped.current = true;
      seenUserId.current = userId;
      if (!popupEnabled) return;
      if (settleTimer.current) window.clearTimeout(settleTimer.current);
      const delay = loginCheckSeen.current ? 500 : 2500;
      settleTimer.current = window.setTimeout(() => {
        settleTimer.current = null;
        if (checkingRef.current || !popupEnabledRef.current) return;
        if (readStorage(sessionStorage, BF_LOGIN_KEY) === '1') return;
        reopenSalePopup();
      }, delay);
      return () => {
        if (settleTimer.current) {
          window.clearTimeout(settleTimer.current);
          settleTimer.current = null;
        }
      };
    }

    if (!bootstrapped.current) {
      bootstrapped.current = true;
      seenUserId.current = userId;
      if (
        popupEnabled &&
        readStorage(localStorage, BF_SEEN_KEY) !== '1'
      ) {
        setOpen(true);
      }
      return;
    }

    seenUserId.current = userId;
  }, [isCheckSign, configsReady, clock.ready, clock.expired, user?.id, pathname, configs]);

  function askLogin() {
    setReopenIntent();
    markSeen();
    setOpen(false);
    setIsShowSignModal(true);
  }

  async function checkout(item: PricingItem, provider?: string) {
    if (!user) {
      askLogin();
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
      const response = await fetch('/api/payment/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          product_id: item.product_id,
          currency: item.currency || 'USD',
          locale,
          payment_provider: provider || configs.default_payment_provider || '',
          metadata,
          return_url:
            typeof window !== 'undefined'
              ? `${window.location.pathname}${window.location.search}`
              : '/pricing',
        }),
      });
      const payload = await response.json();
      if (!response.ok || payload.code !== 0 || !payload.data?.checkoutUrl) {
        throw new Error(payload.message || t('Checkout failed', '创建支付失败'));
      }
      window.location.assign(payload.data.checkoutUrl);
    } catch (e) {
      toast.error(e instanceof Error ? e.message : t('Checkout failed', '创建支付失败'));
      setLoading(false);
    }
  }

  function buy(item: PricingItem) {
    if (!user) {
      askLogin();
      return;
    }
    clearReopenIntent();
    if (configs.select_payment_enabled === 'true') {
      setPayment(item);
      setPayOpen(true);
      setOpen(false);
      return;
    }
    void checkout(item, configs.default_payment_provider);
  }

  const table = getVideoCostTable(configs);
  const show = open && popupOn;

  return (
    <>
      <Dialog
        open={show}
        onOpenChange={(next) => {
          if (next) {
            setOpen(true);
            return;
          }
          if (userDismiss.current) {
            userDismiss.current = false;
          }
          dismiss();
        }}
      >
        <DialogContent
          className="max-h-[92vh] overflow-y-auto bg-white p-4 sm:max-w-3xl sm:p-8"
          showCloseButton={false}
          onInteractOutside={() => {
            userDismiss.current = true;
          }}
          onEscapeKeyDown={() => {
            userDismiss.current = true;
          }}
        >
          <button
            type="button"
            className="absolute top-4 right-4 rounded-xs opacity-70 hover:opacity-100"
            onClick={() => {
              userDismiss.current = true;
              dismiss();
            }}
          >
            <X className="size-4" />
            <span className="sr-only">{t('Close', '关闭')}</span>
          </button>
          <DialogTitle className="pr-8 text-center text-[22px] leading-snug font-semibold tracking-tight text-zinc-950 sm:text-[32px]">
            {t('Black Friday on ViralReel', 'ViralReel 黑五限时优惠')}
          </DialogTitle>
          <DialogDescription className="text-center text-[13px] text-zinc-500 sm:text-[15px]">
            {t(
              'Same credits. Limited time. Ends Nov 30, 2026, 24:00 UTC+8.',
              '积分和权益不变。限时优惠，截止 2026 年 11 月 30 日 24:00（东八区）。'
            )}
          </DialogDescription>
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 rounded-xl border border-orange-200 bg-orange-50 px-3 py-2.5 text-sm text-orange-950">
            <span className="rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-2.5 py-1 text-xs font-semibold text-orange-50">
              20% OFF
            </span>
            <span className="font-medium">
              {t('Popular $16 · Creator $28', 'Popular $16 · Creator $28')}
            </span>
            <span className="font-mono text-sm font-semibold tabular-nums text-orange-700">
              {clock.ready
                ? `${clock.days}:${pad(clock.hours)}:${pad(clock.minutes)}:${pad(clock.seconds)}`
                : '–:–:–:–'}
            </span>
          </div>
          <div className="grid gap-4 pt-3 sm:gap-6 sm:pt-4 md:grid-cols-2">
            {packs.map((item) => {
              const offer =
                BLACK_FRIDAY_OFFERS[
                  item.product_id as keyof typeof BLACK_FRIDAY_OFFERS
                ];
              const featured = item.product_id === 'credits-once-popular';
              const features = compactFeatures(item, table, zh);
              return (
                <article
                  key={item.product_id}
                  className={`relative rounded-xl border bg-white p-4 sm:p-5 ${
                    featured
                      ? 'border-orange-600 shadow-[0_8px_30px_#ea580c1a]'
                      : 'border-zinc-200'
                  }`}
                >
                  <span
                    className={`absolute top-0 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 rounded-full px-3.5 py-0.5 text-xs font-semibold whitespace-nowrap sm:block ${
                      featured
                        ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-orange-50'
                        : 'border border-orange-200 bg-orange-50 text-orange-800'
                    }`}
                  >
                    {featured ? t('Most popular', '最受欢迎') : t('Best value', '最划算')}
                  </span>
                  <div className="flex items-center justify-between gap-2 sm:mt-2">
                    <h3 className="text-base font-semibold">{item.title}</h3>
                    <span className="rounded-full border border-orange-200 bg-orange-50 px-2 py-0.5 text-[11px] font-bold text-orange-700 sm:hidden">
                      {offer.badge}
                    </span>
                  </div>
                  <p className="mt-2 text-[26px] font-semibold tracking-tight sm:mt-3 sm:text-4xl">
                    {item.price}{' '}
                    <s className="text-base font-medium text-zinc-400">
                      {item.original_price}
                    </s>
                    <span className="ml-1 text-sm font-normal text-zinc-500">
                      {t('once', '一次性')}
                    </span>
                  </p>
                  <button
                    type="button"
                    disabled={loading}
                    onClick={() => buy(item)}
                    className={`mt-3 h-10 w-full rounded-lg text-sm font-medium sm:mt-4 ${
                      featured
                        ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-orange-50 shadow-[0_1px_3px_#ea580c59]'
                        : 'border border-zinc-200 bg-white text-zinc-950'
                    }`}
                  >
                    {loading
                      ? t('Redirecting…', '正在前往支付…')
                      : t(`Get ${item.title}`, `购买 ${item.title}`)}
                  </button>
                  <ul className="mt-4 hidden space-y-1.5 text-sm text-zinc-700 sm:block">
                    {features.map((line) => (
                      <li key={line} className="flex gap-2">
                        <Check className="mt-0.5 size-4 shrink-0 text-emerald-500" />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
          <button
            type="button"
            onClick={() => {
              userDismiss.current = true;
              dismiss();
            }}
            className="mt-3 w-full text-center text-sm text-zinc-400 underline-offset-2 hover:text-zinc-600 hover:underline sm:hidden"
          >
            {t('No thanks, maybe later', '暂不需要，稍后再说')}
          </button>
        </DialogContent>
      </Dialog>
      <PaymentModal
        isLoading={loading}
        pricingItem={payment}
        open={payOpen}
        onOpenChange={setPayOpen}
        onCheckout={(item, provider) => {
          void checkout(item, provider);
        }}
      />
    </>
  );
}

function pad(value: number) {
  return String(value).padStart(2, '0');
}

function compactFeatures(
  item: PricingItem,
  table: ReturnType<typeof getVideoCostTable>,
  zh: boolean
) {
  const lines = planFeatureLines(item, table, zh);
  const credits = item.credits || 0;
  const cost = creditsForDuration(table, '720p', 15);
  const count = videosAtCost(credits, cost);
  const videoLine = zh
    ? `大约 ${count} 条 720p / 15 秒视频`
    : `About ${count} videos at 720p / 15s`;
  if (lines.length < 2) return lines;
  return [lines[0], videoLine, ...lines.slice(2)];
}
