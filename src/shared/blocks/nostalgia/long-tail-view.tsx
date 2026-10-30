'use client';

/* eslint-disable @next/next/no-img-element */

import { ArrowRight } from 'lucide-react';
import { useLocale } from 'next-intl';

import { Link, useRouter } from '@/core/i18n/navigation';
import { ViralFooter } from '@/shared/blocks/viral-home/footer';
import { ViralHeader } from '@/shared/blocks/viral-home/header';
import type { VideoCostTable } from '@/shared/lib/video-yield';

import { NostalgiaLinkCluster } from './link-cluster';
import {
  NOSTALGIA_TEMPLATE_PATH,
  buildNostalgiaLongTailFaq,
  resolveNostalgiaLongTailSteps,
  type NostalgiaLongTailEntry,
} from './long-tails';

import '@/shared/blocks/viral-home/home.css';

export function NostalgiaLongTailView({
  entry,
  videoCosts,
  creditsPerUsd,
}: {
  entry: NostalgiaLongTailEntry;
  videoCosts: VideoCostTable;
  creditsPerUsd: number;
}) {
  void videoCosts;
  void creditsPerUsd;
  const locale = useLocale();
  const zh = locale.startsWith('zh');
  const lang = zh ? 'zh' : 'en';
  const router = useRouter();
  const steps = resolveNostalgiaLongTailSteps(entry).map((step) => ({
    name: step.name[lang],
    text: step.text[lang],
  }));
  const faq = buildNostalgiaLongTailFaq(entry, zh);
  const makeLabel = zh ? '用一张照片制作 AI 视频' : 'Make the AI video from one photo';
  const pricingLabel = zh ? '查看定价' : 'See pricing';

  return (
    <div className="viral-home">
      <ViralHeader onStart={() => router.push(NOSTALGIA_TEMPLATE_PATH)} />
      <main>
        <section className="hero">
          <div className="container">
            <div className="hero-badge">
              <span>ViralReel · NostalgIA CapCut</span>
            </div>
            <h1>{entry.h1[lang]}</h1>
            <p className="lead">{entry.lead[lang]}</p>
            <div className="hero-cta">
              <Link className="btn btn-primary btn-lg" href={NOSTALGIA_TEMPLATE_PATH}>
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
                src="/templates/nostalgia-og.jpg"
                alt={
                  zh
                    ? 'ViralReel 上的 NostalgIA CapCut 模板：把你放进复古老电视广告'
                    : 'NostalgIA CapCut template on ViralReel — you inside a recreated retro TV ad'
                }
                width={1200}
                height={630}
              />
              <figcaption>
                {zh
                  ? '模板用一张照片生成虚构的戏仿广告。它不是原片，也不带已授权的声音。'
                  : 'The template makes a fictional parody ad from one photo. It is not the original edit, and it does not include a licensed sound.'}
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
              <Link href={NOSTALGIA_TEMPLATE_PATH}>{makeLabel}</Link>
              {' · '}
              <Link href="/nostalgia-capcut">{zh ? '与 CapCut 的对照' : 'NostalgIA CapCut comparison'}</Link>
              {' · '}
              <Link href="/nostalgia-tiktok">{zh ? 'TikTok 玩法' : 'TikTok how-to'}</Link>
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
              <h2>{zh ? 'NostalgIA 相关页面' : 'NostalgIA pages'}</h2>
            </div>
            <NostalgiaLinkCluster zh={zh} currentPath={`/${entry.slug}`} />
          </div>
        </section>
        <section className="final-cta">
          <div className="container">
            <h2>{zh ? '用一张照片走进那支老广告' : 'Step into the old ad from one photo'}</h2>
            <p>
              {zh
                ? '模板在 ViralReel。定价页列出积分包和月付方案。'
                : 'The template is on ViralReel. Pricing lists credit packs and monthly plans.'}
            </p>
            <div className="hero-cta">
              <Link className="btn btn-primary btn-lg" href={NOSTALGIA_TEMPLATE_PATH}>
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
