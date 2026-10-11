'use client';

import { ArrowRight } from 'lucide-react';
import { useLocale } from 'next-intl';

import { Link, useRouter } from '@/core/i18n/navigation';

import { PricingItem } from '@/shared/types/blocks/pricing';

import { ViralFooter } from './footer';
import { ViralHeader } from './header';
import { PricingSection } from './pricing-section';
import './home.css';

// Standalone /pricing page: plan cards + the video-generation credit table
// (the same content as the homepage pricing section), wrapped in the shared
// site chrome.
export function ViralPricingPage({ plans, creditsPerUsd = 10, videoCosts }: { plans: PricingItem[]; creditsPerUsd?: number; videoCosts: ReturnType<typeof import('@/shared/lib/video-cost').getVideoCostTable> }) {
  const zh = useLocale().startsWith('zh');
  const t = (en: string, cn: string) => (zh ? cn : en);
  const router = useRouter();
  return <div className="viral-home">
    <ViralHeader onStart={() => router.push('/')}/>
    <main>
      <section className="hero"><div className="container"><div className="hero-badge"><span>#pricing</span><span className="bar"/><b>{t(`${creditsPerUsd} credits = $1`, `${creditsPerUsd} 积分 = 1 美元`)}</b></div><h1>{t('Simple pricing. ', '定价简单，')}<span className="hl">{t('Scale when you go viral.', '爆火了再扩量。')}</span></h1><p className="lead">{t('Subscribe for monthly credits or top up on demand — every plan makes the full template library.', '订阅获取每月积分，或按需加购——所有套餐均可使用全部模板。')}</p></div></section>
      <PricingSection plans={plans} creditsPerUsd={creditsPerUsd} videoCosts={videoCosts}/>
      <section className="final-cta sec-alt"><div className="container"><h2>{t('Make your first video now','现在就做出你的第一条视频')}</h2><p>{t('Join 1.2 million creators already on the orange stage.','加入已站上橙色舞台的 120 万创作者。')}</p><Link className="btn btn-primary btn-lg" href="/">{t('Pick a template — start now','选择模板，立即开始')}<ArrowRight size={16}/></Link></div></section>
    </main>
    <ViralFooter/>
  </div>;
}
