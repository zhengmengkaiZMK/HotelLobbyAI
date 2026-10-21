'use client';

import { ArrowRight } from 'lucide-react';
import { useLocale } from 'next-intl';

import { Link, useRouter } from '@/core/i18n/navigation';

import { getPricingPackFaq } from '@/shared/lib/pricing-copy';
import { PricingItem } from '@/shared/types/blocks/pricing';

import { TopupCard } from './topup';
import { ViralFooter } from './footer';
import { ViralHeader } from './header';
import { PricingSection } from './pricing-section';
import './home.css';

// Standalone /pricing page: plan cards + the video-generation credit table
// (the same content as the homepage pricing section), wrapped in the shared
// site chrome.
export function ViralPricingPage({ plans, creditsPerUsd = 12, videoCosts, hasSubscription = false }: { plans: PricingItem[]; creditsPerUsd?: number; videoCosts: ReturnType<typeof import('@/shared/lib/video-cost').getVideoCostTable>; hasSubscription?: boolean }) {
  const zh = useLocale().startsWith('zh');
  const t = (en: string, cn: string) => (zh ? cn : en);
  const router = useRouter();
  const faq = getPricingPackFaq(zh, creditsPerUsd);
  return <div className="viral-home">
    <ViralHeader onStart={() => router.push('/')}/>
    <main>
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
      <section className="sec" id="faq">
        <div className="container">
          <div className="sec-head">
            <p className="kick">{t('FAQ', '常见问题')}</p>
            <h2>{t('Credit pack questions', '积分包相关的问题')}</h2>
          </div>
          <div className="faq-list">
            {faq.map(([q, a], i) => (
              <details key={q} open={i === 0}>
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
          <p className="mt-6 text-center">
            <Link href="/subscribe">{t('Monthly plans are on Subscribe', '月付套餐在订阅页')} →</Link>
          </p>
        </div>
      </section>
      <section className="final-cta sec-alt"><div className="container"><h2>{t('Make your first video now','现在就做出你的第一条视频')}</h2><p>{t('Join 1.2 million creators already on the orange stage.','加入已站上橙色舞台的 120 万创作者。')}</p><Link className="btn btn-primary btn-lg" href="/">{t('Pick a template — start now','选择模板，立即开始')}<ArrowRight size={16}/></Link></div></section>
    </main>
    <ViralFooter/>
  </div>;
}
