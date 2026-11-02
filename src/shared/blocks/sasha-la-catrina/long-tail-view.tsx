'use client';

/* eslint-disable @next/next/no-img-element */

import { ArrowRight } from 'lucide-react';
import { useLocale } from 'next-intl';

import { Link, useRouter } from '@/core/i18n/navigation';
import { ViralFooter } from '@/shared/blocks/viral-home/footer';
import { ViralHeader } from '@/shared/blocks/viral-home/header';
import type { VideoCostTable } from '@/shared/lib/video-yield';

import { SashaLaCatrinaLinkCluster } from './link-cluster';
import {
  SASHA_LA_CATRINA_TEMPLATE_PATH,
  buildSashaLaCatrinaLongTailFaq,
  resolveSashaLaCatrinaLongTailSteps,
  type SashaLaCatrinaLongTailEntry,
} from './long-tails';

import '@/shared/blocks/viral-home/home.css';

export function SashaLaCatrinaLongTailView({
  entry,
  videoCosts,
  creditsPerUsd,
}: {
  entry: SashaLaCatrinaLongTailEntry;
  videoCosts: VideoCostTable;
  creditsPerUsd: number;
}) {
  void videoCosts;
  void creditsPerUsd;
  const locale = useLocale();
  const zh = locale.startsWith('zh');
  const lang = zh ? 'zh' : 'en';
  const router = useRouter();
  const steps = resolveSashaLaCatrinaLongTailSteps(entry).map((step) => ({
    name: step.name[lang],
    text: step.text[lang],
  }));
  const faq = buildSashaLaCatrinaLongTailFaq(entry, zh);
  const makeLabel = zh ? '用一张照片变身 Catrina' : 'Turn one photo into Catrina';
  const pricingLabel = zh ? '查看定价' : 'See pricing';

  return (
    <div className="viral-home">
      <ViralHeader onStart={() => router.push(SASHA_LA_CATRINA_TEMPLATE_PATH)} />
      <main>
        <section className="hero">
          <div className="container">
            <div className="hero-badge">
              <span>ViralReel · Sasha La Catrina</span>
            </div>
            <h1>{entry.h1[lang]}</h1>
            <p className="lead">{entry.lead[lang]}</p>
            <div className="hero-cta">
              <Link className="btn btn-primary btn-lg" href={SASHA_LA_CATRINA_TEMPLATE_PATH}>
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
            <figure className="guide-fig">
              <img
                src="/templates/catrina-og.jpg"
                alt={
                  zh
                    ? 'ViralReel 上的 Sasha La Catrina 模板：一张照片变身的童话卡特里娜'
                    : 'Sasha La Catrina template on ViralReel — the fairytale Catrina reveal from one photo'
                }
                width={1200}
                height={630}
              />
              <figcaption>
                {zh
                  ? '模板用一张照片生成虚构的 AI 变身。它不是真妆，也不含已授权的声音。'
                  : 'The template makes a fictional AI reveal from one photo. It is not real face paint, and it does not include a licensed sound.'}
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
              <Link href={SASHA_LA_CATRINA_TEMPLATE_PATH}>{makeLabel}</Link>
              {' · '}
              <Link href="/sasha-la-catrina-template">{zh ? '七个变身' : 'The seven reveals'}</Link>
              {' · '}
              <Link href="/sasha-la-catrina-tiktok">{zh ? 'TikTok 发布指南' : 'TikTok posting guide'}</Link>
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
              <h2>{zh ? 'Sasha La Catrina 相关页面' : 'Sasha La Catrina pages'}</h2>
            </div>
            <SashaLaCatrinaLinkCluster zh={zh} currentPath={`/${entry.slug}`} />
          </div>
        </section>
        <section className="final-cta">
          <div className="container">
            <h2>{zh ? '趁万寿菊还开着，变回来' : 'Come back as Catrina while the marigolds are up'}</h2>
            <p>
              {zh
                ? '模板在 ViralReel。定价页列出积分包和月付方案。'
                : 'The template is on ViralReel. Pricing lists credit packs and monthly plans.'}
            </p>
            <div className="hero-cta">
              <Link className="btn btn-primary btn-lg" href={SASHA_LA_CATRINA_TEMPLATE_PATH}>
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
