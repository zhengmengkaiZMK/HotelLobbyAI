'use client';

/* eslint-disable @next/next/no-img-element */

import { ArrowRight } from 'lucide-react';
import { useLocale } from 'next-intl';

import { Link, useRouter } from '@/core/i18n/navigation';
import { ViralFooter } from '@/shared/blocks/viral-home/footer';
import { ViralHeader } from '@/shared/blocks/viral-home/header';
import type { VideoCostTable } from '@/shared/lib/video-yield';

import { BabaLinkCluster } from './link-cluster';
import {
  buildBabaLongTailFaq,
  resolveBabaLongTailSteps,
  BABA_TEMPLATE_PATH,
  type LongTailEntry,
} from './long-tails';

import '@/shared/blocks/viral-home/home.css';

const EN_TEMPLATE = 'https://www.viralreel.app/ba-ba-ba-dance-ai-template';
const ZH_TEMPLATE = 'https://www.viralreel.app/zh/ba-ba-ba-dance-ai-template';

export function BabaLongTailView({
  entry,
  videoCosts,
  creditsPerUsd,
}: {
  entry: LongTailEntry;
  videoCosts: VideoCostTable;
  creditsPerUsd: number;
}) {
  const locale = useLocale();
  const zh = locale.startsWith('zh');
  const lang = zh ? 'zh' : 'en';
  const router = useRouter();
  const steps = resolveBabaLongTailSteps(entry).map((step) => ({
    name: step.name[lang],
    text: step.text[lang],
  }));
  const faq = buildBabaLongTailFaq(entry, zh, { videoCosts, creditsPerUsd });
  const makeLabel = zh ? '用照片做双人舞视频' : 'Make the duo dance from your photos';
  const pricingLabel = zh ? '积分包定价' : 'Credit pack pricing';
  const subscribeLabel = zh ? '月付方案' : 'Monthly plans';

  return (
    <div className="viral-home">
      <ViralHeader onStart={() => router.push(BABA_TEMPLATE_PATH)} />
      <main>
        <section className="hero">
          <div className="container">
            <div className="hero-badge">
              <span>ViralReel · Ba Ba Ba Dance</span>
            </div>
            <h1>{entry.h1[lang]}</h1>
            <p className="lead">{entry.lead[lang]}</p>
            <div className="hero-cta">
              <Link className="btn btn-primary btn-lg" href={BABA_TEMPLATE_PATH}>
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
                ? `在 ViralReel 制作：${ZH_TEMPLATE} 。这是粉丝向作品，不是 TikTok 或原作者的官方页面，也不授权这首歌。`
                : `Make it on ViralReel: ${EN_TEMPLATE}. This is a fan-made tool, not an official TikTok or creator page, and it does not license the song.`}
            </p>
            <figure className="guide-fig">
              <img
                src="/templates/ba-ba-ba-dance-ai-og.jpg"
                alt={
                  zh
                    ? 'ViralReel 上的 Ba Ba Ba Dance AI 模板：双人舞'
                    : 'Ba Ba Ba Dance AI template on ViralReel — the duo dance'
                }
                width={1200}
                height={630}
              />
              <figcaption>
                {zh
                  ? '模板用你的照片做新的双人舞视频。它不是原始 TikTok，也不带已授权的歌曲。'
                  : 'The template makes a new duo-dance clip from your photos. It is not the original TikTok, and it does not include a licensed song.'}
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
              <Link href={BABA_TEMPLATE_PATH}>{makeLabel}</Link>
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
              <h2>{zh ? 'Ba Ba Ba Dance 相关页面' : 'Ba Ba Ba Dance pages'}</h2>
            </div>
            <BabaLinkCluster zh={zh} currentPath={`/${entry.slug}`} />
          </div>
        </section>
        <section className="final-cta">
          <div className="container">
            <h2>{zh ? '用你的照片加入这场双人舞' : 'Join the duo dance with your photos'}</h2>
            <p>
              {zh
                ? '模板在 ViralReel。积分包在定价页，月付方案在订阅页。与 TikTok 和原作者无关。'
                : 'The template is on ViralReel. Credit packs are on pricing. Monthly plans are on subscribe. Not affiliated with TikTok or the original creators.'}
            </p>
            <div className="hero-cta">
              <Link className="btn btn-primary btn-lg" href={BABA_TEMPLATE_PATH}>
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
