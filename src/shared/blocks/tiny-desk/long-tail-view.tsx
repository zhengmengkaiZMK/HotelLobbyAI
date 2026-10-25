'use client';

/* eslint-disable @next/next/no-img-element */

import { ArrowRight } from 'lucide-react';
import { useLocale } from 'next-intl';

import { Link, useRouter } from '@/core/i18n/navigation';
import { ViralFooter } from '@/shared/blocks/viral-home/footer';
import { ViralHeader } from '@/shared/blocks/viral-home/header';
import type { VideoCostTable } from '@/shared/lib/video-yield';

import { TinyDeskLinkCluster } from './link-cluster';
import {
  buildLongTailFaq,
  resolveLongTailSteps,
  TINY_DESK_TEMPLATE_PATH,
  type LongTailEntry,
} from './long-tails';

import '@/shared/blocks/viral-home/home.css';

const EN_TEMPLATE = 'https://www.viralreel.app/tiny-desk-outstanding-ai-template';
const ZH_TEMPLATE = 'https://www.viralreel.app/zh/tiny-desk-outstanding-ai-template';

export function TinyDeskLongTailView({
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
  const makeLabel = zh ? '用照片制作粉丝戏仿' : 'Make the fan parody from your photos';
  const pricingLabel = zh ? '积分包定价' : 'Credit pack pricing';
  const subscribeLabel = zh ? '月付方案' : 'Monthly plans';

  return (
    <div className="viral-home">
      <ViralHeader onStart={() => router.push(TINY_DESK_TEMPLATE_PATH)} />
      <main>
        <section className="hero">
          <div className="container">
            <div className="hero-badge">
              <span>ViralReel · Tiny Desk Outstanding</span>
            </div>
            <h1>{entry.h1[lang]}</h1>
            <p className="lead">{entry.lead[lang]}</p>
            <div className="hero-cta">
              <Link className="btn btn-primary btn-lg" href={TINY_DESK_TEMPLATE_PATH}>
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
                ? `在 ViralReel 制作：${ZH_TEMPLATE} 。这是粉丝向戏仿，不是 NPR、Tiny Desk 或 Charlie Wilson 的官方页面，也不授权《Outstanding》。`
                : `Make it on ViralReel: ${EN_TEMPLATE}. This is a fan parody, not an official NPR, Tiny Desk, or Charlie Wilson page, and it does not license “Outstanding.”`}
            </p>
            <figure className="guide-fig">
              <img
                src="/templates/tiny-desk-outstanding-ai-og.jpg"
                alt={
                  zh
                    ? 'ViralReel 上的 Tiny Desk Outstanding AI 模板：粉丝向戏仿'
                    : 'Tiny Desk Outstanding AI template on ViralReel — a fan parody'
                }
                width={1200}
                height={630}
              />
              <figcaption>
                {zh
                  ? '模板用你的照片做新的戏仿。它不是 NPR 原片，也不带已授权的歌曲。'
                  : 'The template makes a new parody from your photos. It is not the NPR master, and it does not include a licensed song.'}
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
              <Link href={TINY_DESK_TEMPLATE_PATH}>{makeLabel}</Link>
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
              <h2>{zh ? 'Tiny Desk Outstanding 相关页面' : 'Tiny Desk Outstanding pages'}</h2>
            </div>
            <TinyDeskLinkCluster zh={zh} currentPath={`/${entry.slug}`} />
          </div>
        </section>
        <section className="final-cta">
          <div className="container">
            <h2>{zh ? '用你的照片做这条桌子戏仿' : 'Make the desk parody from your photos'}</h2>
            <p>
              {zh
                ? '模板在 ViralReel。积分包在定价页，月付方案在订阅页。与 NPR 和 Charlie Wilson 无关。'
                : 'The template is on ViralReel. Credit packs are on pricing. Monthly plans are on subscribe. Not affiliated with NPR or Charlie Wilson.'}
            </p>
            <div className="hero-cta">
              <Link className="btn btn-primary btn-lg" href={TINY_DESK_TEMPLATE_PATH}>
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
