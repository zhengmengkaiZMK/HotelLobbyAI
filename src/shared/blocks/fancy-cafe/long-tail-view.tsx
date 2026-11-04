'use client';

/* eslint-disable @next/next/no-img-element */

import { ArrowRight } from 'lucide-react';
import { useLocale } from 'next-intl';

import { Link, useRouter } from '@/core/i18n/navigation';
import { ViralFooter } from '@/shared/blocks/viral-home/footer';
import { ViralHeader } from '@/shared/blocks/viral-home/header';
import type { VideoCostTable } from '@/shared/lib/video-yield';

import { FancyCafeLinkCluster } from './link-cluster';
import {
  buildLongTailFaq,
  resolveLongTailSteps,
  FANCY_CAFE_TEMPLATE_PATH,
  type LongTailEntry,
} from './long-tails';

import '@/shared/blocks/viral-home/home.css';

const EN_TEMPLATE = 'https://www.viralreel.app/first-time-in-a-fancy-cafe-ai-template';
const ZH_TEMPLATE = 'https://www.viralreel.app/zh/first-time-in-a-fancy-cafe-ai-template';

export function FancyCafeLongTailView({
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
  const makeLabel = zh ? '用两张照片做咖啡馆场景' : 'Make the cafe scene from two photos';
  const pricingLabel = zh ? '积分包定价' : 'Credit pack pricing';
  const subscribeLabel = zh ? '月付方案' : 'Monthly plans';

  return (
    <div className="viral-home">
      <ViralHeader onStart={() => router.push(FANCY_CAFE_TEMPLATE_PATH)} />
      <main>
        <section className="hero">
          <div className="container">
            <div className="hero-badge">
              <span>ViralReel · Your First Time in a Fancy Cafe</span>
            </div>
            <h1>{entry.h1[lang]}</h1>
            <p className="lead">{entry.lead[lang]}</p>
            <div className="hero-cta">
              <Link className="btn btn-primary btn-lg" href={FANCY_CAFE_TEMPLATE_PATH}>
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
                ? `在 ViralReel 制作：${ZH_TEMPLATE} 。新账号自带免费积分；渲染通常几分钟。这是粉丝作品，不是官方页面，也不授权趋势原声或 Steve Lacy 的《Oh Yeah?》。`
                : `Make it on ViralReel: ${EN_TEMPLATE}. New accounts start with free credits; rendering takes a few minutes. This is fan work, not an official page, and it does not license the trend sound or Steve Lacy's "Oh Yeah?".`}
            </p>
            <figure className="guide-fig">
              <img
                src="/templates/first-time-in-a-fancy-cafe-ai-og.jpg"
                alt={
                  zh
                    ? 'ViralReel 上的 Your First Time in a Fancy Cafe AI 模板：极简水泥咖啡馆场景'
                    : 'Your First Time in a Fancy Cafe AI template on ViralReel — the minimalist concrete cafe scene'
                }
                width={1200}
                height={630}
              />
              <figcaption>
                {zh
                  ? '模板用两张照片重建场景。它不是原帖的拷贝，也不带已授权的歌曲。'
                  : 'The template rebuilds the scene from two photos. It is not a copy of the original post, and it does not include a licensed song.'}
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
              <Link href={FANCY_CAFE_TEMPLATE_PATH}>{makeLabel}</Link>
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
              <h2>{zh ? 'Fancy cafe 相关页面' : 'Fancy cafe pages'}</h2>
            </div>
            <FancyCafeLinkCluster zh={zh} currentPath={`/${entry.slug}`} />
          </div>
        </section>
        <section className="final-cta">
          <div className="container">
            <h2>{zh ? '该谁坐上那张桌子了' : 'Take your seat on the table'}</h2>
            <p>
              {zh
                ? '模板在 ViralReel。积分包在定价页，月付方案在订阅页。与 Steve Lacy、CapCut 和 TikTok 无关。'
                : 'The template is on ViralReel. Credit packs are on pricing. Monthly plans are on subscribe. Not affiliated with Steve Lacy, CapCut, or TikTok.'}
            </p>
            <div className="hero-cta">
              <Link className="btn btn-primary btn-lg" href={FANCY_CAFE_TEMPLATE_PATH}>
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
