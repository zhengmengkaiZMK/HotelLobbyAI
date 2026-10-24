'use client';

/* eslint-disable @next/next/no-img-element */
import { ArrowRight } from 'lucide-react';
import { useLocale } from 'next-intl';

import { Link, useRouter } from '@/core/i18n/navigation';
import { ViralFooter } from '@/shared/blocks/viral-home/footer';
import { ViralHeader } from '@/shared/blocks/viral-home/header';
import type { VideoCostTable } from '@/shared/lib/video-yield';

import { BulinLinkCluster } from './link-cluster';
import {
  buildLongTailFaq,
  BULIN_TEMPLATE_PATH,
  resolveLongTailSteps,
  type LongTailEntry,
} from './long-tails';

import '@/shared/blocks/viral-home/home.css';

export function BulinLongTailView({
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
  const makeLabel = zh
    ? '用一张照片制作 AI 视频'
    : 'Make the AI video from one photo';
  const pricingLabel = zh ? '查看定价' : 'See pricing';
  const templateUrl = zh
    ? `https://www.viralreel.app/zh${BULIN_TEMPLATE_PATH}`
    : `https://www.viralreel.app${BULIN_TEMPLATE_PATH}`;

  return (
    <div className="viral-home">
      <ViralHeader onStart={() => router.push(BULIN_TEMPLATE_PATH)} />
      <main>
        <section className="hero">
          <div className="container">
            <div className="hero-badge">
              <span>ViralReel · Bulin 47</span>
            </div>
            <h1>{entry.h1[lang]}</h1>
            <p className="lead">{entry.lead[lang]}</p>
            <div className="hero-cta">
              <Link
                className="btn btn-primary btn-lg"
                href={BULIN_TEMPLATE_PATH}
              >
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
          <div className="guide container">
            <div className="sec-head">
              <p className="kick">{zh ? '说明' : 'What this page is'}</p>
              <h2>{entry.guideTitle[lang]}</h2>
            </div>
            <h3>{zh ? '简短回答' : 'Short answer'}</h3>
            <p>
              {entry.lead[lang]}{' '}
              {zh
                ? `在 ViralReel 制作：${templateUrl} 。重拍是虚构的街头 freestyle，不是 Dame Hombro 的 MV。ViralReel 不是官方页面，也不授权原声。`
                : `Make it on ViralReel: ${templateUrl}. The remake is a fictional street freestyle, not the Dame Hombro music video. ViralReel is not the official page, and it does not license the original audio.`}
            </p>
            <figure className="guide-fig">
              <img
                src="/templates/bulin-47-og.jpg"
                alt={
                  zh
                    ? 'ViralReel 上的 Bulin 47 AI 模板：红光餐厅门口 freestyle'
                    : 'Bulin 47 AI template on ViralReel — red-lit restaurant freestyle'
                }
                width={1200}
                height={630}
              />
              <figcaption>
                {zh
                  ? '模板用一张照片做虚构重拍。它不是马德里原片，也不带已授权的歌曲。'
                  : 'The template makes a fictional remake from one photo. It is not the Madrid clip, and it does not include a licensed song.'}
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
              <Link href={BULIN_TEMPLATE_PATH}>{makeLabel}</Link>
              {' · '}
              <Link href="/pricing">{pricingLabel}</Link>
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
              <h2>{zh ? 'Bulin 47 相关页面' : 'Bulin 47 pages'}</h2>
            </div>
            <BulinLinkCluster zh={zh} currentPath={`/${entry.slug}`} />
          </div>
        </section>
        <section className="final-cta">
          <div className="container">
            <h2>
              {zh
                ? '用一张照片做出这条街头 freestyle'
                : 'Make the street freestyle from one photo'}
            </h2>
            <p>
              {zh
                ? '模板在 ViralReel。定价页列出积分包，订阅页列出月付方案。'
                : 'The template is on ViralReel. Pricing lists credit packs. Subscribe lists monthly plans.'}
            </p>
            <div className="hero-cta">
              <Link
                className="btn btn-primary btn-lg"
                href={BULIN_TEMPLATE_PATH}
              >
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
