'use client';

/* eslint-disable @next/next/no-img-element */

import { ArrowRight } from 'lucide-react';
import { useLocale } from 'next-intl';

import { Link, useRouter } from '@/core/i18n/navigation';
import { ViralFooter } from '@/shared/blocks/viral-home/footer';
import { ViralHeader } from '@/shared/blocks/viral-home/header';
import type { VideoCostTable } from '@/shared/lib/video-yield';

import { HitTheRoadLinkCluster } from './link-cluster';
import {
  buildLongTailFaq,
  HIT_THE_ROAD_TEMPLATE_PATH,
  resolveLongTailSteps,
  type LongTailEntry,
} from './long-tails';

import '@/shared/blocks/viral-home/home.css';

export function HitTheRoadLongTailView({
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
  const makeLabel = zh ? '用一张照片制作 AI 视频' : 'Make the AI video from one photo';
  const pricingLabel = zh ? '查看定价' : 'See pricing';

  return (
    <div className="viral-home">
      <ViralHeader onStart={() => router.push(HIT_THE_ROAD_TEMPLATE_PATH)} />
      <main>
        <section className="hero">
          <div className="container">
            <div className="hero-badge">
              <span>{zh ? 'ViralReel · Hit the Road Dude' : 'ViralReel · Hit the Road Dude'}</span>
            </div>
            <h1>{entry.h1[lang]}</h1>
            <p className="lead">{entry.lead[lang]}</p>
            <div className="hero-cta">
              <Link className="btn btn-primary btn-lg" href={HIT_THE_ROAD_TEMPLATE_PATH}>
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
                ? '在 ViralReel 制作：https://www.viralreel.app/zh/hit-the-road-dude-ai-template 。State Property、Private Property 和 Lock ’Em Up 是同一段对话。重拍是虚构的，ViralReel 不是官方页面，也不授权原声。'
                : 'Make it on ViralReel: https://www.viralreel.app/hit-the-road-dude-ai-template. State Property, Private Property, and Lock ’Em Up are the same exchange. The remake is fictional, ViralReel is not the official page, and it does not license the original audio.'}
            </p>
            <figure className="guide-fig">
              <img
                src="/templates/hit-the-road-dude-og.jpg"
                alt={
                  zh
                    ? 'ViralReel 上的 Hit the Road Dude AI 模板：白色皮卡司机反应'
                    : 'Hit the Road Dude AI template on ViralReel — white pickup driver reaction'
                }
                width={1200}
                height={630}
              />
              <figcaption>
                {zh
                  ? '模板用一张照片做虚构重拍。卡片参考片不是原片。'
                  : 'The template makes a fictional remake from one photo. Reference clips are not the original.'}
              </figcaption>
            </figure>
            {entry.body[lang].map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
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
              <Link href={HIT_THE_ROAD_TEMPLATE_PATH}>{makeLabel}</Link>
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
              <h2>{zh ? 'Hit the Road Dude 相关页面' : 'Hit the Road Dude pages'}</h2>
            </div>
            <HitTheRoadLinkCluster zh={zh} currentPath={`/${entry.slug}`} />
          </div>
        </section>
        <section className="final-cta">
          <div className="container">
            <h2>{zh ? '用一张照片做出这条路边短片' : 'Make the roadside clip from one photo'}</h2>
            <p>
              {zh
                ? '模板在 ViralReel。定价页列出积分包和月付方案。'
                : 'The template is on ViralReel. Pricing lists credit packs and monthly plans.'}
            </p>
            <div className="hero-cta">
              <Link className="btn btn-primary btn-lg" href={HIT_THE_ROAD_TEMPLATE_PATH}>
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
