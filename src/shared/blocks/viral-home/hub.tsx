'use client';

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from 'react';
import { ArrowRight, Check, Flame, Sparkles, Users, Video } from 'lucide-react';
import { useLocale } from 'next-intl';

import { Link } from '@/core/i18n/navigation';
import {
  TRENDING_TEMPLATES,
  TRENDING_VIBES,
  type TrendingTemplate,
  type TrendingVibeId,
} from '@/config/trending-templates';
import { getHubFaqPairs } from '@/shared/lib/hub-faq';
import { CANONICAL_PRICING } from '@/shared/lib/pricing-copy';
import { VIRAL_REVIEWS } from '@/shared/lib/reviews';
import { getVideoCostTable } from '@/shared/lib/video-cost';
import {
  planFeatureLines,
  usdFromCredits,
  videoCreditCost,
  videoYieldFromCredits,
  videoYieldLines,
} from '@/shared/lib/video-yield';
import { PricingItem } from '@/shared/types/blocks/pricing';

import { ViralFooter } from './footer';
import { ViralHeader } from './header';

import './home.css';

const REVIEW_META = [
  ['@jakemakes · 412K followers', '/avatars/review-1.jpg'],
  ['Runs @dailydoseofmemes', '/avatars/review-2.jpg'],
  ['@tompetsdaily · 208K followers', '/avatars/review-3.jpg'],
  ['@liam.plays · 96K followers', '/avatars/review-4.jpg'],
  ['@emmadaybyday · 340K followers', '/avatars/review-5.jpg'],
  ['@marcusmakes · 155K followers', '/avatars/review-6.jpg'],
] as const;

function PlatformIcon({ type }: { type: 'tiktok' | 'youtube' | 'instagram' }) {
  const paths: Record<string, ReactNode> = {
    tiktok: (
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.9 2.9 0 1 1-2.31-2.84V9.25a6.35 6.35 0 1 0 5.76 6.32V8.69a8.16 8.16 0 0 0 4.77 1.52V6.79a4.85 4.85 0 0 1-1-.1z" />
    ),
    youtube: (
      <>
        <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3.02 3.02 0 0 0 .5 6.19C0 8.07 0 12 0 12s0 3.93.5 5.81a3.02 3.02 0 0 0 2.12 2.14c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 0 0 2.12-2.14C24 15.93 24 12 24 12s0-3.93-.5-5.81z" />
        <path fill="#fff" d="m9.55 15.57 6.27-3.57-6.27-3.57z" />
      </>
    ),
    instagram: (
      <>
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle
          cx="12"
          cy="12"
          r="4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
      </>
    ),
  };
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      {paths[type]}
    </svg>
  );
}

function TrendVideo({
  src,
  poster,
  colors,
}: {
  src: string;
  poster?: string;
  colors: readonly [string, string];
}) {
  const ref = useRef<HTMLVideoElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.play().catch(() => {});
        else el.pause();
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return (
    <video
      ref={ref}
      className="tv-video"
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      preload="none"
      style={{
        background: `linear-gradient(165deg, ${colors[0]}, ${colors[1]})`,
      }}
    />
  );
}

function TrendCard({ item, zh }: { item: TrendingTemplate; zh: boolean }) {
  const t = (en: string, cn: string) => (zh ? cn : en);
  const name = item.name[zh ? 1 : 0];
  const pitch = item.pitch[zh ? 1 : 0];
  const media = (
    <>
      {item.video ? (
        <TrendVideo
          src={item.video}
          poster={item.poster}
          colors={item.colors}
        />
      ) : (
        <span className="tv-stage" />
      )}
      {item.badge === 'hot' && <span className="hot">HOT</span>}
      {item.badge === 'classic' && (
        <span className="classic-badge">{t('Classic', '经典')}</span>
      )}
      {!item.href && (
        <span className="soon">{t('COMING SOON', '即将上线')}</span>
      )}
    </>
  );
  const style = {
    '--g1': item.colors[0],
    '--g2': item.colors[1],
  } as CSSProperties;
  return (
    <article className={item.href ? 'tcard' : 'tcard is-soon'}>
      {item.href ? (
        <Link
          className="tv"
          href={item.href}
          aria-label={`${t('Make', '制作')} ${name}`}
          style={style}
        >
          {media}
        </Link>
      ) : (
        <div className="tv" style={style}>
          {media}
        </div>
      )}
      <div className="tmeta">
        <b>{name}</b>
      </div>
      <p className="tpitch">{pitch}</p>
      {item.href ? (
        <Link className="use" href={item.href}>
          {t('Make this', '做这个')}
        </Link>
      ) : (
        <button className="use" type="button" disabled>
          {t('Coming soon', '即将上线')}
        </button>
      )}
    </article>
  );
}

export function ViralHub({
  plans,
  creditsPerUsd = 12,
  videoCosts = getVideoCostTable(),
}: {
  plans: PricingItem[];
  creditsPerUsd?: number;
  videoCosts?: ReturnType<typeof getVideoCostTable>;
}) {
  const zh = useLocale().startsWith('zh');
  const t = (en: string, cn: string) => (zh ? cn : en);
  const [vibe, setVibe] = useState<TrendingVibeId | 'all'>('all');
  const cards =
    vibe === 'all'
      ? TRENDING_TEMPLATES
      : TRENDING_TEMPLATES.filter((item) => item.vibes.includes(vibe));
  const fallbackPacks: PricingItem[] = [
    {
      product_id: 'credits-once-starter',
      title: 'Starter',
      price: CANONICAL_PRICING.packStarterPrice,
      currency: 'USD',
      amount: 990,
      unit: zh ? ' 一次性' : ' once',
      credits: CANONICAL_PRICING.packStarterCredits,
      interval: 'one-time',
    },
    {
      product_id: 'credits-once-popular',
      title: 'Popular',
      price: CANONICAL_PRICING.packPopularPrice,
      currency: 'USD',
      amount: 1990,
      unit: zh ? ' 一次性' : ' once',
      credits: CANONICAL_PRICING.packPopularCredits,
      interval: 'one-time',
      is_featured: true,
    },
    {
      product_id: 'credits-once-creator',
      title: 'Creator',
      price: CANONICAL_PRICING.packCreatorPrice,
      currency: 'USD',
      amount: 3990,
      unit: zh ? ' 一次性' : ' once',
      credits: CANONICAL_PRICING.packCreatorCredits,
      interval: 'one-time',
    },
    {
      product_id: 'credits-once-max',
      title: 'Max',
      price: CANONICAL_PRICING.packMaxPrice,
      currency: 'USD',
      amount: 6990,
      unit: zh ? ' 一次性' : ' once',
      credits: CANONICAL_PRICING.packMaxCredits,
      interval: 'one-time',
    },
  ];
  const livePacks = plans.filter((plan) => plan.interval === 'one-time');
  const packs = livePacks.length > 0 ? livePacks : fallbackPacks;
  const fallbackSubs: PricingItem[] = [
    {
      product_id: 'sub-monthly-starter',
      title: 'Starter',
      price: CANONICAL_PRICING.monthlyStarterPrice,
      currency: 'USD',
      amount: 990,
      unit: zh ? ' /月' : ' /mo',
      credits: CANONICAL_PRICING.monthlyStarterCredits,
      interval: 'month',
    },
    {
      product_id: 'sub-monthly-plus',
      title: 'Plus',
      price: CANONICAL_PRICING.plusPrice,
      currency: 'USD',
      amount: 1990,
      unit: zh ? ' /月' : ' /mo',
      credits: CANONICAL_PRICING.plusCredits,
      interval: 'month',
      is_featured: true,
    },
    {
      product_id: 'sub-monthly-pro',
      title: 'Pro',
      price: CANONICAL_PRICING.proPrice,
      currency: 'USD',
      amount: 3990,
      unit: zh ? ' /月' : ' /mo',
      credits: CANONICAL_PRICING.proCredits,
      interval: 'month',
    },
  ];
  const liveSubs = plans.filter(
    (plan) => plan.interval === 'month' || plan.interval === 'year'
  );
  const subs = liveSubs.length > 0 ? liveSubs : fallbackSubs;
  const baselineCost = videoCreditCost(videoCosts, '720p', 8);
  const baselineUsd = usdFromCredits(baselineCost, creditsPerUsd);
  const faq = getHubFaqPairs(zh, { videoCosts, creditsPerUsd });
  const scrollToTrends = () =>
    document.getElementById('trending')?.scrollIntoView({ behavior: 'smooth' });
  const why = [
    [
      Sparkles,
      t('Template-first, not prompt-first', '先选模板，而不是先写提示词'),
      t(
        'Each trend is a fixed format. Your photos go into that set, motion, and framing.',
        '每条趋势都是固定格式。你的照片进入既定的布景、动作和构图。'
      ),
    ],
    [
      Users,
      t('Any duo or single subject', '双人、单人都可以'),
      t(
        'Couples, friends, pets, or one person. The template page tells you how many photos it needs.',
        '情侣、朋友、宠物，或只有一个人。模板页会写明需要几张照片。'
      ),
    ],
    [
      Video,
      t('9:16, ready to post', '9:16，可以直接发'),
      t(
        'Export a vertical video for TikTok, Reels, and Shorts, then add the trend sound in the app.',
        '导出竖屏视频，发给 TikTok、Reels 和 Shorts，再在 App 里加上热梗原声。'
      ),
    ],
    [
      Flame,
      t('Credits you can see first', '积分事先看得到'),
      t(
        `The generator shows the cost before you render. Top-ups are ${creditsPerUsd} credits = $1.`,
        `生成器会在渲染前显示本次消耗。加购是 ${creditsPerUsd} 积分 = 1 美元。`
      ),
    ],
  ] as const;
  const steps = [
    [
      t('Pick a template', '选一个模板'),
      t(
        'Choose a trend that is live this week. Coming-soon cards are not linked.',
        '选一个这周已经上线的趋势。即将上线的卡片没有链接。'
      ),
    ],
    [
      t('Upload your photos', '上传照片'),
      t(
        'One clear photo per subject. The template page says whether it needs one or two.',
        '每个主体一张清晰照片。模板页会说明要一张还是两张。'
      ),
    ],
    [
      t('Generate in about a minute', '大约一分钟生成'),
      t(
        'Lip-sync and gestures are part of the template. Most renders finish in about 60 seconds.',
        '口型同步和手势包含在模板里。大多数渲染大约 60 秒完成。'
      ),
    ],
    [
      t('Download and post', '下载并发布'),
      t(
        'Save the MP4, add the trend sound, and label the post as AI-generated where the app asks.',
        '保存 MP4，加上热梗原声，并按平台要求标注 AI 生成。'
      ),
    ],
  ];
  const quotes = VIRAL_REVIEWS.map((review, index) => ({
    name: review.name,
    body: review.body,
    handle: REVIEW_META[index]?.[0] || '',
    img: REVIEW_META[index]?.[1] || '',
  }));

  return (
    <div className="viral-home">
      <ViralHeader onStart={scrollToTrends} />
      <main>
        <section className="hero">
          <div className="container">
            <div className="hero-badge">
              <Flame size={16} />
              <span>
                {t('Trending AI video templates', '正在流行的 AI 视频模板')}
              </span>
            </div>
            <h1>
              {t(
                'Make viral AI videos from your photos',
                '用你的照片做爆火 AI 视频'
              )}
            </h1>
            <p className="lead">
              {t(
                'Pick a trending template, upload your photos, and export a 9:16 video in about a minute — auto lip-sync and gestures included. No prompts. No editing apps.',
                '选一个正在流行的模板，上传照片，大约一分钟导出 9:16 竖屏视频——自动口型同步和手势都包含在内。不用写提示词，也不用剪辑软件。'
              )}
            </p>
            <div className="hero-cta">
              <a className="btn btn-primary btn-lg" href="#trending">
                {t('Browse trending templates', '浏览热门模板')}
                <ArrowRight size={16} />
              </a>
              <Link className="btn btn-outline btn-lg" href="/pricing">
                {t('See pricing', '查看定价')}
              </Link>
            </div>
          </div>
        </section>

        <div className="logos">
          <p className="lbl">
            {t('Made for the apps where trends move', '做给趋势最快的那些 App')}
          </p>
          <div className="row">
            <span className="soc tiktok">
              <PlatformIcon type="tiktok" />
              TikTok
            </span>
            <span className="soc youtube">
              <PlatformIcon type="youtube" />
              YouTube Shorts
            </span>
            <span className="soc instagram">
              <PlatformIcon type="instagram" />
              Instagram Reels
            </span>
          </div>
        </div>

        <section className="sec templates-section" id="trending">
          <span id="templates" />
          <div className="container">
            <div className="sec-head">
              <p className="kick">{t('This week', '本周')}</p>
              <h2>{t('This week’s trending templates', '本周热门模板')}</h2>
              <p className="sub">
                {t(
                  'Open a live template to upload photos and generate. Cards marked coming soon do not link anywhere yet.',
                  '打开已上线的模板，上传照片并生成。标为即将上线的卡片暂时没有链接。'
                )}
              </p>
            </div>
            <div
              className="vibe-row"
              role="toolbar"
              aria-label={t('Browse by vibe', '按氛围浏览')}
            >
              <button
                type="button"
                className="vibe"
                aria-pressed={vibe === 'all'}
                onClick={() => setVibe('all')}
              >
                {t('All', '全部')}
              </button>
              {TRENDING_VIBES.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className="vibe"
                  aria-pressed={vibe === item.id}
                  onClick={() => setVibe(item.id)}
                >
                  {item.label[zh ? 1 : 0]}
                </button>
              ))}
            </div>
            {cards.length === 0 ? (
              <p className="empty-trend">
                {t('Nothing in this vibe yet.', '这个氛围下还没有模板。')}
              </p>
            ) : (
              <div className="grid3">
                {cards.map((item) => (
                  <TrendCard key={item.id} item={item} zh={zh} />
                ))}
              </div>
            )}
          </div>
        </section>

        <section className="sec" id="how">
          <div className="container">
            <div className="sec-head">
              <p className="kick">{t('How it works', '使用教程')}</p>
              <h2>
                {t(
                  'From a photo to a post in four steps',
                  '从照片到可发布，四步完成'
                )}
              </h2>
            </div>
            <div className="grid4s">
              {steps.map(([title, desc], index) => (
                <div className="step" key={title}>
                  <div className="num">{index + 1}</div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="sec sec-alt" id="why">
          <div className="container">
            <div className="sec-head">
              <p className="kick">{t('Why ViralReel', '为什么选 ViralReel')}</p>
              <h2>
                {t(
                  'A template for the trend, not a blank prompt box',
                  '对着趋势的模板，不是空白提示词框'
                )}
              </h2>
            </div>
            <div className="grid4">
              {why.map(([Icon, title, desc]) => (
                <div className="feat" key={title}>
                  <div className="ic">
                    <Icon size={20} />
                  </div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="sec">
          <div className="container">
            <div className="sec-head">
              <p className="kick">{t('Testimonials', '用户评价')}</p>
              <h2>
                {t(
                  'Creators already posting with these templates',
                  '创作者已经在用这些模板发视频'
                )}
              </h2>
              <p className="sub">
                {t(
                  'A few notes from people who tried a template and posted the result.',
                  '几位试过模板并发布成片的用户留言。'
                )}
              </p>
            </div>
            <div className="quote-viewport">
              <div className="quote-grid">
                {[...quotes, ...quotes].map((quote, index) => (
                  <article
                    className="qcard"
                    key={`${quote.name}-${index}`}
                    aria-hidden={index >= quotes.length || undefined}
                  >
                    <div className="stars">★★★★★</div>
                    <p>{`“${quote.body}”`}</p>
                    <div className="who">
                      <span
                        className="av"
                        style={
                          quote.img
                            ? { backgroundImage: `url(${quote.img})` }
                            : undefined
                        }
                      />
                      <div>
                        <b>{quote.name}</b>
                        <span>{quote.handle}</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="sec sec-alt" id="pricing">
          <div className="container">
            <div className="sec-head">
              <p className="kick">{t('Pricing', '定价')}</p>
              <h2>
                {t('Flexible plans', '灵活的套餐选择')}
              </h2>
              <p className="sub">
                {t(
                  'One-time credit packs or subscription plans — choose whatever fits your needs.',
                  '提供一次性购买积分和订阅套餐方式，根据你的需要自由选择。'
                )}
              </p>
            </div>
            <div className="price-grid cols-4">
              {packs.map((plan) => {
                const credits = plan.credits || 0;
                const yieldLines = videoYieldLines(credits, videoCosts, zh);
                const featured = !!plan.is_featured;
                return (
                  <article
                    className={`pcard ${featured ? 'pro' : ''}`}
                    key={plan.product_id || plan.title}
                  >
                    {featured && (
                      <span className="tag">{t('Most popular', '最受欢迎')}</span>
                    )}
                    <h3>{plan.title}</h3>
                    <div className="price">
                      {plan.price}
                      <small>{plan.unit}</small>
                    </div>
                    <span className="anchor">
                      {t(
                        `${credits.toLocaleString()} credits`,
                        `${credits.toLocaleString()} 积分`
                      )}
                    </span>
                    {yieldLines.map((line) => (
                      <p className="quiet" key={line}>
                        {line}
                      </p>
                    ))}
                    <Link
                      className={`btn ${featured ? 'btn-primary' : 'btn-outline'}`}
                      href="/pricing"
                    >
                      {t('See this pack', '查看这个积分包')}
                      <ArrowRight size={16} />
                    </Link>
                  </article>
                );
              })}
            </div>
            <div className="sec-head sub-plan-head">
              <h3>{t('Subscription plans', '订阅套餐')}</h3>
              <p className="sub">
                {t(
                  'Credits refresh every billing cycle. Cancel any time from billing.',
                  '积分按账单周期刷新，可随时在账单页取消。'
                )}
              </p>
            </div>
            <div className="price-grid">
              {subs.map((plan) => {
                const credits = plan.credits || 0;
                const featured = !!plan.is_featured;
                return (
                  <article
                    className={`pcard ${featured ? 'pro' : ''}`}
                    key={plan.product_id || plan.title}
                  >
                    {featured && (
                      <span className="tag">{t('Most popular', '最受欢迎')}</span>
                    )}
                    <h3>{plan.title}</h3>
                    <div className="price">
                      {plan.price}
                      <small>{plan.unit}</small>
                    </div>
                    <span className="anchor">
                      {t(
                        `${credits.toLocaleString()} credits`,
                        `${credits.toLocaleString()} 积分`
                      )}
                    </span>
                    <ul>
                      {planFeatureLines(plan, videoCosts, zh).map((line) => (
                        <li key={line}>
                          <Check size={16} className="ok" />
                          {line}
                        </li>
                      ))}
                    </ul>
                    <Link
                      className={`btn ${featured ? 'btn-primary' : 'btn-outline'}`}
                      href="/subscribe"
                    >
                      {t(`Get ${plan.title}`, `订阅 ${plan.title}`)}
                      <ArrowRight size={16} />
                    </Link>
                  </article>
                );
              })}
            </div>
            <div className="hub-cta">
              <Link className="btn btn-primary btn-lg" href="/pricing">
                {t('View credit packs', '查看积分包')}
                <ArrowRight size={16} />
              </Link>
              <Link className="btn btn-outline btn-lg" href="/pricing">
                {t('Open pricing', '打开定价页')}
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        <section className="sec" id="compare">
          <div className="container">
            <div className="sec-head">
              <p className="kick">{t('Comparison', '对比')}</p>
              <h2>
                {t(
                  'Remaking a trend vs starting from a prompt',
                  '重拍一条趋势，和从提示词做起'
                )}
              </h2>
              <p className="sub">
                {t(
                  'Kling (可灵), Medio.ai, and Higgsfield are general AI video tools. ViralReel is a template for a format people already recognize. Competitor prices are not quoted here.',
                  '可灵、Medio.ai 和 Higgsfield 是通用 AI 视频工具。ViralReel 是一个别人已经认得出来的格式模板。这里不引用竞品价格。'
                )}
              </p>
            </div>
            <div className="compare-wrap">
              <table className="compare">
                <caption className="sr-only">
                  {t(
                    'ViralReel compared with Kling, Medio.ai, and Higgsfield for remaking trend videos',
                    'ViralReel 与可灵、Medio.ai、Higgsfield 在重拍趋势视频上的对比'
                  )}
                </caption>
                <thead>
                  <tr>
                    <th scope="col">{t('For a trend remake', '做趋势重拍时')}</th>
                    <th scope="col" className="us">
                      ViralReel
                    </th>
                    <th scope="col">Kling (可灵)</th>
                    <th scope="col">Medio.ai</th>
                    <th scope="col">Higgsfield</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">{t('Starting point', '从哪里开始')}</th>
                    <td className="us">
                      {t(
                        'Pick a trending template and upload photos. The set, motion, and framing are already the format.',
                        '选一个正在流行的模板，上传照片。布景、动作和构图已经是这个格式。'
                      )}
                    </td>
                    <td>
                      {t(
                        'A general video model. You describe the shot, or start from an image, and the model makes a new clip.',
                        '通用视频模型。你描述镜头，或从一张图开始，模型另做一条新片子。'
                      )}
                    </td>
                    <td>
                      {t(
                        'A separate AI video product. This page does not describe its feature list.',
                        '另一款 AI 视频产品。本页不描述它的功能清单。'
                      )}
                    </td>
                    <td>
                      {t(
                        'A multi-model studio. You choose a model and write or generate a prompt. Effect presets still follow that prompt.',
                        '多模型工作室。你选一个模型，再写或生成提示词。效果预设仍然跟着这条提示词走。'
                      )}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">{t('Prompt work', '提示词')}</th>
                    <td className="us">
                      {t(
                        'None for a template remake. You are not prompt-engineering the trend.',
                        '模板重拍不需要。你不用为这条趋势写提示词。'
                      )}
                    </td>
                    <td>
                      {t(
                        'Required if the clip has to match a specific trend.',
                        '如果片子必须对上某一条趋势，就需要自己写。'
                      )}
                    </td>
                    <td>
                      {t(
                        'Not verified here. Check that product for how a clip is specified.',
                        '这里未核实。一条片子怎么指定，以该产品为准。'
                      )}
                    </td>
                    <td>
                      {t(
                        'Required. A preset does not replace the prompt for a named trend.',
                        '需要。预设不能代替某一条具名趋势的提示词。'
                      )}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">{t('Cost of one clip', '一条片子的成本')}</th>
                    <td className="us">
                      {t(
                        `${baselineCost} credits at 720p / 8s (${baselineUsd} at ${creditsPerUsd} credits = $1). A ${CANONICAL_PRICING.packStarterPrice} Starter pack (${CANONICAL_PRICING.packStarterCredits} credits) covers about ${videoYieldFromCredits(CANONICAL_PRICING.packStarterCredits, videoCosts).atBaseline} of those clips. The generator shows the exact cost first.`,
                        `720p / 8 秒 ${baselineCost} 积分（按 ${creditsPerUsd} 积分 = 1 美元，约 ${baselineUsd}）。${CANONICAL_PRICING.packStarterPrice} 的 Starter 积分包（${CANONICAL_PRICING.packStarterCredits} 积分）大约够 ${videoYieldFromCredits(CANONICAL_PRICING.packStarterCredits, videoCosts).atBaseline} 条。生成器会先显示本次消耗。`
                      )}
                    </td>
                    <td>
                      {t(
                        'See Kling’s own pricing. Not quoted here.',
                        '以可灵自己的定价为准。这里不引用。'
                      )}
                    </td>
                    <td>
                      {t(
                        'See Medio.ai’s own pricing. Not quoted here.',
                        '以 Medio.ai 自己的定价为准。这里不引用。'
                      )}
                    </td>
                    <td>
                      {t(
                        'See Higgsfield’s own pricing. Credits vary by model. Not quoted here.',
                        '以 Higgsfield 自己的定价为准。积分因模型而异。这里不引用。'
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
              <p className="compare-note">
              {t(
                `A 720p / 8s remake is ${baselineCost} credits on our table (${baselineUsd} at ${creditsPerUsd} credits = $1). That is the per-clip price. Kling, Medio.ai, and Higgsfield prices are not quoted here.`,
                `按我们的积分表，720p / 8 秒一条是 ${baselineCost} 积分（${creditsPerUsd} 积分 = 1 美元，约 ${baselineUsd}）。这就是单条成本。这里不引用可灵、Medio.ai 和 Higgsfield 的价格。`
              )}{' '}
              <Link href="/pricing">{t('Credit table', '积分对照表')}</Link>
            </p>
          </div>
        </section>

        <section className="sec" id="faq">
          <div className="container">
            <div className="sec-head">
              <p className="kick">{t('FAQ', '常见问题')}</p>
              <h2>{t('Questions about ViralReel', '关于 ViralReel 的问题')}</h2>
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

        <section className="final-cta">
          <div className="container">
            <h2>
              {t(
                'Pick a template and make the video',
                '选一个模板，把视频做出来'
              )}
            </h2>
            <p>
              {t(
                'Live templates open on their own pages. Upload photos there.',
                '已上线的模板在各自的页面打开。在那里上传照片。'
              )}
            </p>
            <a className="btn btn-primary btn-lg" href="#trending">
              {t('Browse trending templates', '浏览热门模板')}
              <ArrowRight size={16} />
            </a>
          </div>
        </section>
      </main>
      <ViralFooter />
    </div>
  );
}
