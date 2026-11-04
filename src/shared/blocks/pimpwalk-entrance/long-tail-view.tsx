'use client';

/* eslint-disable @next/next/no-img-element */

import { ArrowRight } from 'lucide-react';
import { useLocale } from 'next-intl';

import { Link, useRouter } from '@/core/i18n/navigation';
import { ViralFooter } from '@/shared/blocks/viral-home/footer';
import { ViralHeader } from '@/shared/blocks/viral-home/header';
import type { VideoCostTable } from '@/shared/lib/video-yield';

import { PimpwalkLinkCluster } from './link-cluster';
import {
  buildLongTailFaq,
  resolveLongTailSteps,
  PIMPWALK_TEMPLATE_PATH,
  type LongTailEntry,
} from './long-tails';

import '@/shared/blocks/viral-home/home.css';

const EN_TEMPLATE = 'https://www.viralreel.app/pimpwalk-entrance-ai-template';
const ZH_TEMPLATE = 'https://www.viralreel.app/zh/pimpwalk-entrance-ai-template';

export function PimpwalkLongTailView({
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
  const makeLabel = zh ? '用两张照片做门口进场' : 'Make the doorway entrance from two photos';
  const pricingLabel = zh ? '积分包定价' : 'Credit pack pricing';
  const subscribeLabel = zh ? '月付方案' : 'Monthly plans';

  return (
    <div className="viral-home">
      <ViralHeader onStart={() => router.push(PIMPWALK_TEMPLATE_PATH)} />
      <main>
        <section className="hero">
          <div className="container">
            <div className="hero-badge">
              <span>ViralReel · Your Pimpwalk Entrance</span>
            </div>
            <h1>{entry.h1[lang]}</h1>
            <p className="lead">{entry.lead[lang]}</p>
            <div className="hero-cta">
              <Link className="btn btn-primary btn-lg" href={PIMPWALK_TEMPLATE_PATH}>
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
                ? `在 ViralReel 制作：${ZH_TEMPLATE} 。新账号自带免费积分；渲染通常几分钟。这是粉丝作品，不是官方页面，也不授权趋势原声。`
                : `Make it on ViralReel: ${EN_TEMPLATE}. New accounts start with free credits; rendering takes a few minutes. This is fan work, not an official page, and it does not license the trend sound.`}
            </p>
            <figure className="guide-fig">
              <img
                src="/templates/pimpwalk-entrance-ai-og.jpg"
                alt={
                  zh
                    ? 'ViralReel 上的 Your Pimpwalk Entrance AI 模板：极简水泥咖啡馆场景'
                    : 'Your Pimpwalk Entrance AI template on ViralReel — a guest strutting through a shop doorway held open at night'
                }
                width={1200}
                height={630}
              />
              <figcaption>
                {zh
                  ? '模板用两张照片重建场景。它不是原帖的拷贝，也不带已授权的原声。'
                  : 'The template rebuilds the scene from two photos. It is not a copy of the original post, and it does not include a licensed sound.'}
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
              <Link href={PIMPWALK_TEMPLATE_PATH}>{makeLabel}</Link>
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
              <h2>{zh ? 'Pimpwalk Entrance 相关页面' : 'Pimpwalk Entrance pages'}</h2>
            </div>
            <PimpwalkLinkCluster zh={zh} currentPath={`/${entry.slug}`} />
          </div>
        </section>
        <section className="final-cta">
          <div className="container">
            <h2>{zh ? '该你进场了' : 'Time to make your entrance'}</h2>
            <p>
              {zh
                ? '模板在 ViralReel。积分包在定价页，月付方案在订阅页。与趋势背后的创作者、CapCut 和 TikTok 无关。'
                : 'The template is on ViralReel. Credit packs are on pricing. Monthly plans are on subscribe. Not affiliated with the creators behind the trend, CapCut, or TikTok.'}
            </p>
            <div className="hero-cta">
              <Link className="btn btn-primary btn-lg" href={PIMPWALK_TEMPLATE_PATH}>
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
