'use client';

import { useEffect, useState } from 'react';

import { useAppContext } from '@/shared/contexts/app';
import {
  BLACK_FRIDAY_ENDS_AT,
  packOnSale,
  resolvePackPrice,
} from '@/shared/lib/black-friday';
import { PricingItem } from '@/shared/types/blocks/pricing';

export function useBlackFridayClock() {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    const tick = () => setNow(Date.now());
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  const remain = now === null ? null : Math.max(0, BLACK_FRIDAY_ENDS_AT - now);
  const total = remain === null ? 0 : Math.floor(remain / 1000);
  return {
    ready: now !== null,
    expired: remain !== null && remain <= 0,
    days: Math.floor(total / 86400),
    hours: Math.floor((total % 86400) / 3600),
    minutes: Math.floor((total % 3600) / 60),
    seconds: total % 60,
  };
}

function pad(value: number) {
  return String(value).padStart(2, '0');
}

export function useBlackFridayExpired() {
  const [expired, setExpired] = useState(false);

  useEffect(() => {
    const remain = BLACK_FRIDAY_ENDS_AT - Date.now();
    if (remain <= 0) {
      setExpired(true);
      return;
    }
    const id = window.setTimeout(() => setExpired(true), remain);
    return () => window.clearTimeout(id);
  }, []);

  return expired;
}

/** Apply the admin switch on top of server-rendered prices. */
export function useSalePlans(plans: PricingItem[]) {
  const { configs } = useAppContext();
  const expired = useBlackFridayExpired();
  const configsReady = Object.keys(configs).length > 0;
  const effective = !configsReady
    ? null
    : expired
      ? { ...configs, black_friday_enabled: 'false' }
      : configs;
  const priceOf = (item: PricingItem) =>
    effective ? resolvePackPrice(item, effective) : item;
  const view = plans.map(priceOf);
  const active = view.some((item) => packOnSale(item));
  return { view, priceOf, active, configs, configsReady };
}

export function BlackFridayIntro({ zh }: { zh: boolean }) {
  const clock = useBlackFridayClock();
  if (clock.expired) return null;
  return (
    <>
      <div className="sec-head">
        <p className="kick">{zh ? '黑五' : 'Black Friday'}</p>
        <h2>{zh ? 'Black Friday 限时优惠' : 'Black Friday limited offer'}</h2>
        <p className="sub">
          {zh
            ? '只优惠一次性积分包，积分和权益不变。截止 11 月 30 日 24:00（东八区）。'
            : 'One-time packs only. Credits stay the same. Ends Nov 30, 24:00 UTC+8.'}
        </p>
      </div>
      <div className="bf-banner" role="timer" aria-live="off">
        <span className="bf-off">20% OFF</span>
        <span>
          {zh
            ? '黑五限时：Popular $16，Creator $28'
            : 'Black Friday: Popular $16, Creator $28'}
        </span>
        <span className="bf-clock">
          <b>{clock.ready ? clock.days : '–'}</b>
          <i>D</i>
          <b>{clock.ready ? pad(clock.hours) : '–'}</b>
          <i>H</i>
          <b>{clock.ready ? pad(clock.minutes) : '–'}</b>
          <i>M</i>
          <b>{clock.ready ? pad(clock.seconds) : '–'}</b>
          <i>S</i>
        </span>
      </div>
    </>
  );
}

export function SalePrice({
  price,
  original,
  unit,
}: {
  price?: string;
  original?: string;
  unit?: string;
}) {
  return (
    <div className="price">
      {price}
      {original ? <s className="was">{original}</s> : null}
      {unit ? <small>{unit}</small> : null}
    </div>
  );
}
