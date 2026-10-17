'use client';

import { ArrowRight } from 'lucide-react';
import { useLocale } from 'next-intl';

import { Link, useRouter } from '@/core/i18n/navigation';

import { PricingItem } from '@/shared/types/blocks/pricing';

import { TopupCard } from './topup';
import { ViralFooter } from './footer';
import { ViralHeader } from './header';
import { PricingSection } from './pricing-section';
import './home.css';

// Standalone /pricing page: plan cards + the video-generation credit table
// (the same content as the homepage pricing section), wrapped in the shared
// site chrome.
export function ViralPricingPage({ plans, creditsPerUsd = 10, videoCosts, hasSubscription = false }: { plans: PricingItem[]; creditsPerUsd?: number; videoCosts: ReturnType<typeof import('@/shared/lib/video-cost').getVideoCostTable>; hasSubscription?: boolean }) {
  const zh = useLocale().startsWith('zh');
  const t = (en: string, cn: string) => (zh ? cn : en);
  const router = useRouter();
  return <div className="viral-home">
    <ViralHeader onStart={() => router.push('/')}/>
    <main>
      <section className="hero"><div className="container"><div className="hero-badge"><span>#pricing</span><span className="bar"/><b>{t(`${creditsPerUsd} credits = $1`, `${creditsPerUsd} 积分 = 1 美元`)}</b></div><h1>{t('Simple pricing. ', '定价简单，')}<span className="hl">{t('Scale when you go viral.', '爆火了再扩量。')}</span></h1><p className="lead">{t('Buy credits once, or subscribe monthly or yearly — every plan makes the full template library.', '一次性购买积分，或按月、按年订阅——所有套餐均可使用全部模板。')}</p></div></section>
      <PricingSection plans={plans} creditsPerUsd={creditsPerUsd} videoCosts={videoCosts} enablePayOnce/>
      {hasSubscription && (
        <section className="sec sec-alt" id="credits">
          <div className="container">
            <div className="sec-head">
              <p className="kick">{t('Credit Top-up', '积分加购')}</p>
              <h2>{t('Need more credits?', '积分不够用？')}</h2>
              <p className="sub">
                {t(
                  'Top up any time — credits never expire and work with your plan.',
                  '随时加购——积分永不过期，与你的套餐通用。'
                )}
              </p>
            </div>
            <TopupCard rate={creditsPerUsd} hasSubscription={hasSubscription} />
          </div>
        </section>
      )}
      <section className="final-cta sec-alt"><div className="container"><h2>{t('Make your first video now','现在就做出你的第一条视频')}</h2><p>{t('Join 1.2 million creators already on the orange stage.','加入已站上橙色舞台的 120 万创作者。')}</p><Link className="btn btn-primary btn-lg" href="/">{t('Pick a template — start now','选择模板，立即开始')}<ArrowRight size={16}/></Link></div></section>
    </main>
    <ViralFooter/>
  </div>;
}
