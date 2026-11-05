'use client';

/* eslint-disable @next/next/no-img-element */

import { ArrowRight } from 'lucide-react';
import { useLocale } from 'next-intl';

import { Link, useRouter } from '@/core/i18n/navigation';
import { ViralFooter } from '@/shared/blocks/viral-home/footer';
import { ViralHeader } from '@/shared/blocks/viral-home/header';
import type { VideoCostTable } from '@/shared/lib/video-yield';

import { BicepHeartLinkCluster } from './link-cluster';
import {
  BICEP_HEART_TEMPLATE_PATH,
  buildBicepHeartLongTailFaq,
  resolveBicepHeartLongTailSteps,
  type BicepHeartLongTailEntry,
} from './long-tails';

import '@/shared/blocks/viral-home/home.css';

const EN_TEMPLATE = 'https://www.viralreel.app/bicep-heart-ai-template';
const ZH_TEMPLATE = 'https://www.viralreel.app/zh/bicep-heart-ai-template';

export function BicepHeartLongTailView({
  entry,
  videoCosts,
  creditsPerUsd,
}: {
  entry: BicepHeartLongTailEntry;
  videoCosts: VideoCostTable;
  creditsPerUsd: number;
}) {
  const locale = useLocale();
  const zh = locale.startsWith('zh');
  const lang = zh ? 'zh' : 'en';
  const router = useRouter();
  const steps = resolveBicepHeartLongTailSteps(entry).map((step) => ({
    name: step.name[lang],
    text: step.text[lang],
  }));
  const faq = buildBicepHeartLongTailFaq(entry, zh, { videoCosts, creditsPerUsd });
  const makeLabel = zh ? '用一张照片做比心视频' : 'Make the bicep heart from one photo';
  const pricingLabel = zh ? '积分包定价' : 'Credit pack pricing';
  const subscribeLabel = zh ? '月付方案' : 'Monthly plans';

  return (
    <div className="viral-home">
      <ViralHeader onStart={() => router.push(BICEP_HEART_TEMPLATE_PATH)} />
      <main>
        <section className="hero">
          <div className="container">
            <div className="hero-badge">
              <span>ViralReel · Bicep Heart</span>
            </div>
            <h1>{entry.h1[lang]}</h1>
            <p className="lead">{entry.lead[lang]}</p>
            <div className="hero-cta">
              <Link className="btn btn-primary btn-lg" href={BICEP_HEART_TEMPLATE_PATH}>
                {makeLabel}
                <ArrowRight size={16} />
              </Link>
              <Link className="btn btn-outline btn-lg" href="/pricing">
                {pricingLabel}
              </Link>
            </div>
          </div>
        </section>
        <section className="sec" id="guide">
          <div className="container guide">
            <div className="sec-head">
              <p className="kick">{zh ? '说明' : 'What this page is'}</p>
              <h2>{entry.guideTitle[lang]}</h2>
            </div>
            <h3>{zh ? '简短回答' : 'Short answer'}</h3>
            <p>
              {entry.lead[lang]}{' '}
              {zh
                ? `在 ViralReel 制作：${ZH_TEMPLATE} 。上传一张你有权使用的成年人照片（或你自己的宠物），生成一条新的 7 秒 9:16 MP4。这是粉丝向模板工具，与 TikTok、X 或趋势原作者无关，也不授权热梗原声。`
                : `Make it on ViralReel: ${EN_TEMPLATE}. Upload one photo of a consenting adult (or your own pet) and generate a new 7-second 9:16 MP4. This is a fan-made template tool, not an official TikTok or X page, and it does not license the trend sound.`}
            </p>
            <figure className="guide-fig">
              <img
                src="/templates/bicep-heart-ai-og.jpg"
                alt={
                  zh
                    ? 'ViralReel 上的 Bicep Heart AI 模板：一条手臂弯起，另一只手比出一颗心'
                    : 'Bicep Heart AI template on ViralReel — one arm flexed, a hand curled into a heart'
                }
                width={1200}
                height={630}
              />
              <figcaption>
                {zh
                  ? '模板用你的一张照片做新的比心视频。导出无声，热梗原声在平台里另加。'
                  : 'The template makes a new bicep heart clip from one photo. The export is silent; add the trend sound in the app.'}
              </figcaption>
            </figure>
            {entry.body[lang].map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
            {steps.length > 0 ? (
              <ol>
                {steps.map((step) => (
                  <li key={step.name}>
                    <strong>{step.name}.</strong> {step.text}
                  </li>
                ))}
              </ol>
            ) : null}
            <p className="guide-more">
              <Link href={BICEP_HEART_TEMPLATE_PATH}>{makeLabel}</Link>
              {' · '}
              <Link href="/pricing">{pricingLabel}</Link>
              {' · '}
              <Link href="/subscribe">{subscribeLabel}</Link>
            </p>
          </div>
        </section>
        <section className="sec sec-alt" id="faq">
          <div className="container">
            <div className="sec-head">
              <p className="kick">FAQ</p>
              <h2>{zh ? '常见问题' : 'Frequently asked questions'}</h2>
            </div>
            <div className="faq-list">
              {faq.map(([question, answer], index) => (
                <details key={question} open={index === 0}>
                  <summary>{question}</summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
        <section className="sec" id="related">
          <div className="container">
            <div className="sec-head">
              <p className="kick">{zh ? '相关' : 'Related'}</p>
              <h2>{zh ? 'Bicep heart 相关页面' : 'Bicep heart pages'}</h2>
            </div>
            <BicepHeartLinkCluster zh={zh} currentPath={`/${entry.slug}`} />
          </div>
        </section>
        <section className="final-cta">
          <div className="container">
            <h2>{zh ? '用一张照片比出一颗小心心' : 'Close a little heart from one photo'}</h2>
            <p>
              {zh
                ? '模板在 ViralReel。积分包在定价页，月付方案在订阅页。导出无声，热梗原声在 App 里加。'
                : 'The template is on ViralReel. Credit packs are on pricing. Monthly plans are on subscribe. The export is silent; add the sound in the app.'}
            </p>
            <div className="hero-cta">
              <Link className="btn btn-primary btn-lg" href={BICEP_HEART_TEMPLATE_PATH}>
                {makeLabel}
                <ArrowRight size={16} />
              </Link>
              <Link className="btn btn-outline btn-lg" href="/pricing">
                {pricingLabel}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <ViralFooter />
    </div>
  );
}
