'use client';

/* eslint-disable @next/next/no-img-element */

import { ArrowRight } from 'lucide-react';
import { useLocale } from 'next-intl';

import { Link, useRouter } from '@/core/i18n/navigation';
import { ViralFooter } from '@/shared/blocks/viral-home/footer';
import { ViralHeader } from '@/shared/blocks/viral-home/header';
import type { VideoCostTable } from '@/shared/lib/video-yield';

import { DanceWithSantaLinkCluster } from './link-cluster';
import {
  buildLongTailFaq,
  resolveLongTailSteps,
  DANCE_WITH_SANTA_TEMPLATE_PATH,
  type LongTailEntry,
} from './long-tails';

import '@/shared/blocks/viral-home/home.css';

const EN_TEMPLATE = 'https://www.viralreel.app/dance-with-santa-ai-template';
const ZH_TEMPLATE = 'https://www.viralreel.app/zh/dance-with-santa-ai-template';

export function DanceWithSantaLongTailView({
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
  const steps = resolveLongTailSteps(entry).map((step) => ({
    name: step.name[lang],
    text: step.text[lang],
  }));
  const faq = buildLongTailFaq(entry, zh, { videoCosts, creditsPerUsd });
  const makeLabel = zh ? '用一张照片和圣诞老人共舞' : 'Dance with Santa from your photo';
  const pricingLabel = zh ? '积分包定价' : 'Credit pack pricing';
  const subscribeLabel = zh ? '月付方案' : 'Monthly plans';

  return (
    <div className="viral-home">
      <ViralHeader onStart={() => router.push(DANCE_WITH_SANTA_TEMPLATE_PATH)} />
      <main>
        <section className="hero">
          <div className="container">
            <div className="hero-badge">
              <span>ViralReel · Dance with Santa</span>
            </div>
            <h1>{entry.h1[lang]}</h1>
            <p className="lead">{entry.lead[lang]}</p>
            <div className="hero-cta">
              <Link className="btn btn-primary btn-lg" href={DANCE_WITH_SANTA_TEMPLATE_PATH}>
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
                ? `在 ViralReel 制作：${ZH_TEMPLATE} 。上传一张全身照，八套阵容任选，浏览器直出 15 秒 9:16 MP4。ViralReel（viralreel.app）是独立模板站，与 TikTok、CapCut 和 @sarahicat15 无关联，也不授权模板原声。`
                : `Make it on ViralReel: ${EN_TEMPLATE}. One full-body photo, one of eight casts, a 15-second 9:16 MP4 in the browser. ViralReel (viralreel.app) is an independent template site, not affiliated with TikTok, CapCut, or @sarahicat15, and it does not license the template's sound.`}
            </p>
            <figure className="guide-fig">
              <img
                src="/templates/dance-with-santa-ai-og.jpg"
                alt={
                  zh
                    ? 'ViralReel 上的 Dance with Santa AI 模板：和圣诞老人在红毯上共舞'
                    : 'Dance with Santa AI template on ViralReel — dancing next to Santa Claus on a red carpet'
                }
                width={1200}
                height={630}
              />
              <figcaption>
                {zh
                  ? '模板用你的一张照片做出新的共舞片段。它不是原 TikTok 的拷贝，也不带已授权的声音。'
                  : 'The template makes a new dance clip from one photo. It is not a copy of the original TikTok, and it does not include a licensed sound.'}
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
              <Link href={DANCE_WITH_SANTA_TEMPLATE_PATH}>{makeLabel}</Link>
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
              <h2>{zh ? 'Dance with Santa 相关页面' : 'Dance with Santa pages'}</h2>
            </div>
            <DanceWithSantaLinkCluster zh={zh} currentPath={`/${entry.slug}`} />
          </div>
        </section>
        <section className="final-cta">
          <div className="container">
            <h2>{zh ? '圣诞老人在舞池等你' : 'Santa is waiting on the dance floor'}</h2>
            <p>
              {zh
                ? '模板在 ViralReel。积分包在定价页，月付方案在订阅页。与 TikTok、CapCut 和 @sarahicat15 无关。'
                : 'The template is on ViralReel. Credit packs are on pricing. Monthly plans are on subscribe. Not affiliated with TikTok, CapCut, or @sarahicat15.'}
            </p>
            <div className="hero-cta">
              <Link className="btn btn-primary btn-lg" href={DANCE_WITH_SANTA_TEMPLATE_PATH}>
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
