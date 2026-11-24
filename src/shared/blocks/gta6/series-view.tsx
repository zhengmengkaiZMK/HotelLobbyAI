'use client';

/* eslint-disable @next/next/no-img-element */

import { useEffect, useState, type CSSProperties, type ReactNode } from 'react';
import { ArrowRight, ArrowRightLeft, Camera, Clapperboard, Wand2 } from 'lucide-react';
import { useLocale } from 'next-intl';

import { Link } from '@/core/i18n/navigation';
import { TemplateCardVideo } from '@/shared/blocks/common/lazy-video';
import { ViralFooter } from '@/shared/blocks/viral-home/footer';
import { ViralHeader } from '@/shared/blocks/viral-home/header';
import { TemplateGenerator } from '@/shared/blocks/viral-home/generator';
import { track } from '@/shared/lib/analytics';
import { buildHowToJsonLdFromSteps } from '@/shared/lib/howto-schema';
import { getVideoCostTable } from '@/shared/lib/video-cost';
import { creditsForDuration } from '@/shared/lib/video-yield';
import type { TemplateDef } from '@/shared/blocks/viral-home/templates';
import {
  gta6GetawayTemplates,
  gta6LoversTemplates,
  gta6NightclubTemplates,
  gta6TrailerTemplates,
  gta6ViceTemplates,
  gta6WantedTemplates,
} from './templates';
import { GTA6_SERIES, type Gta6SeriesData } from './series-data';
import './gta6.css';

const ALL_GTA6_TEMPLATES: readonly TemplateDef[] = [
  ...gta6TrailerTemplates,
  ...gta6WantedTemplates,
  ...gta6LoversTemplates,
  ...gta6ViceTemplates,
  ...gta6NightclubTemplates,
  ...gta6GetawayTemplates,
];

/**
 * Per-series layout variants. Every page keeps the same content blocks (flow,
 * storyboard, how-to, trend, stats, FAQ, related, CTA) but in a different
 * order with different hero/heading alignment and flow direction — so the six
 * pages read as six distinct documents rather than one template stamped six
 * times, while each keyword still gets the full GEO treatment.
 */
const LAYOUTS: Record<
  string,
  { hero: 'left' | 'center'; heads: 'left' | 'center'; sections: string[] }
> = {
  'gta-6-trailer-ai': {
    hero: 'center', heads: 'left',
    sections: ['flow', 'scenes', 'how', 'stats', 'trend', 'faq', 'related'],
  },
  'gta-6-wanted-level': {
    hero: 'center', heads: 'center',
    sections: ['scenes', 'flow', 'how', 'trend', 'faq', 'stats', 'related'],
  },
  'gta-6-lovers-on-the-run': {
    hero: 'center', heads: 'left',
    sections: ['flow', 'how', 'scenes', 'trend', 'faq', 'stats', 'related'],
  },
  'gta-6-vice-city-story': {
    hero: 'center', heads: 'left',
    sections: ['flow', 'trend', 'scenes', 'how', 'faq', 'stats', 'related'],
  },
  'gta-6-nightclub': {
    hero: 'center', heads: 'center',
    sections: ['scenes', 'how', 'flow', 'stats', 'faq', 'trend', 'related'],
  },
  'gta-6-getaway-duo': {
    hero: 'center', heads: 'left',
    sections: ['how', 'flow', 'scenes', 'faq', 'trend', 'stats', 'related'],
  },
};

/**
 * GTA 6 series page — the generator (first screen) is the shared
 * TemplateGenerator, so the backend behavior is identical to every other
 * family. Sections and alignment vary per series (see LAYOUTS).
 */
export function Gta6SeriesHome({
  series,
  creditsPerUsd = 12,
  videoCosts = getVideoCostTable(),
  pageUrl,
}: {
  series: Gta6SeriesData;
  creditsPerUsd?: number;
  videoCosts?: ReturnType<typeof getVideoCostTable>;
  pageUrl?: string;
}) {
  const locale = useLocale();
  const zh = locale === 'zh';
  const t = (en: string, cn: string) => (zh ? cn : en);
  const template = ALL_GTA6_TEMPLATES.find((item) => item.id === series.templateId) ?? ALL_GTA6_TEMPLATES[0];
  const others = GTA6_SERIES.filter((item) => item.slug !== series.slug);
  const layout =
    LAYOUTS[series.slug] ??
    { hero: 'center' as const, heads: 'left' as const, sections: ['flow', 'scenes', 'how', 'stats', 'trend', 'faq', 'related'] };
  const landscape = series.ratio[0].startsWith('16:9');
  const [started, setStarted] = useState(false);
  useEffect(() => {
    track('view_template', { template: series.family });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const focusGenerator = () => {
    document.getElementById('g6-generator')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  const start = () => {
    setStarted(true);
    focusGenerator();
  };
  const photosWord = series.photos === 2 ? t('two photos', '两张照片') : t('one photo', '一张照片');
  const howToJsonLd = buildHowToJsonLdFromSteps({
    name: t(`How to make a ${series.name[0]} video`, `如何制作${series.name[1]}视频`),
    description: t(
      `Upload ${photosWord}, keep the fixed ${series.duration}-second spec, and render in about 2–3 minutes on ViralReel.`,
      `上传${photosWord}，保持固定的 ${series.duration} 秒规格，在 ViralReel 约 2-3 分钟出片。`
    ),
    url: pageUrl,
    steps: series.howTo.map((step) => ({
      name: zh ? step.name[1] : step.name[0],
      text: zh ? step.text[1] : step.text[0],
    })),
  });
  const faq = zh ? series.faqZh : series.faqEn;

  const head = (kick: ReactNode, title: string, sub?: string) => (
    <div className={`g6-sec-head ${layout.heads === 'center' ? 'center' : ''}`}>
      <p className="g6-kick">{kick}</p>
      <h2>{title}</h2>
      {sub ? <p className="g6-sub">{sub}</p> : null}
    </div>
  );

  const hero = (
    <section className={`g6-hero ${layout.hero === 'center' ? 'g6-hero-center' : ''}`} id="g6-generator">
      <div className="container">
        <p className="g6-badge">
          <Clapperboard size={15} aria-hidden="true" />
          <span>{zh ? series.badge[1] : series.badge[0]}</span>
        </p>
        <h1>
          {zh ? (
            <>
              上传{photosWord}，无需提示词。生成你的 <span className="g6-hl">{series.name[1]}</span> 视频
            </>
          ) : (
            <>
              Upload {photosWord} — no prompt needed. Generate your <span className="g6-hl">{series.name[0]}</span> video
            </>
          )}
        </h1>
        <p className="g6-pitch">{zh ? series.pitch[1] : series.pitch[0]}</p>
        <div className="g6-specs" role="list">
          <span role="listitem">{t('Duration', '时长')} · {series.duration}s</span>
          <span role="listitem">{t('Photos', '照片')} · {series.photos}</span>
          <span role="listitem">{t('Render', '出片')} · 2–3 {t('min', '分钟')}</span>
          <span role="listitem">{zh ? series.ratio[1] : series.ratio[0]}</span>
        </div>
        <div className="g6-genbox">
          <TemplateGenerator key={template.id} template={template} open embedded onOpenChange={() => {}} />
        </div>
      </div>
    </section>
  );

  const flow = (
    <section className="g6-sec" id="g6-showcase" key="flow">
      <div className="container">
        {head(
          t('Photo in, video out', '原图进，成片出'),
          zh ? series.showcase.heading[1] : series.showcase.heading[0]
        )}
        <div className="g6-flow">
          <figure className="g6-src">
            <div className={`g6-photos ${series.photos === 2 ? 'two' : ''}`}>
              {series.uploadHints.map((hint, i) => (
                <div className="g6-photo" key={hint}>
                  <img
                    src={hint}
                    alt={
                      series.photos === 2
                        ? `${zh ? series.showcase.beforeAlt[1] : series.showcase.beforeAlt[0]} — ${zh ? series.slotLabels?.[i]?.[1] : series.slotLabels?.[i]?.[0] ?? `photo ${i + 1}`}`
                        : zh ? series.showcase.beforeAlt[1] : series.showcase.beforeAlt[0]
                    }
                    width={186}
                    height={280}
                    loading="lazy"
                    decoding="async"
                  />
                  <figcaption>
                    {series.photos === 2
                      ? `${t('Example', '示例')} · ${zh ? series.slotLabels?.[i]?.[1] : series.slotLabels?.[i]?.[0] ?? `Photo ${i + 1}`}`
                      : t('Example source photo', '示例原图')}
                  </figcaption>
                </div>
              ))}
            </div>
          </figure>
          <div className="g6-arrow" aria-hidden="true">
            <Wand2 size={18} />
            <ArrowRight size={26} />
          </div>
          <figure className="g6-out">
            <div className={`tv tv-full g6-clip ${landscape ? 'landscape' : ''}`}>
              <TemplateCardVideo
                id={series.templateId}
                src={`/templates/${series.templateId}.mp4`}
                poster={`/templates/${series.templateId}-poster.jpg`}
                colors={series.accent}
                priority
              />
              <span className="g6-clip-tag">{t('Example result', '示例效果')}</span>
            </div>
            <figcaption>{zh ? series.showcase.afterAlt[1] : series.showcase.afterAlt[0]}</figcaption>
          </figure>
        </div>
        <p className="g6-flow-note">{zh ? series.showcase.note[1] : series.showcase.note[0]}</p>
        <div className="g6-evidence">
          <b>{t('About this example', '示例说明')}</b>
          <span>
            {t(
              'Demo material, shown to illustrate the fixed format — not a user generation. Your own video is rendered fresh from the photo you upload: ',
              '以下为示意素材，用于展示固定格式，非用户实际生成。你的视频是用你上传的照片现场渲染的：'
            )}
            {series.photos === 2 ? t('2 photos in', '2 张照片进') : t('1 photo in', '1 张照片进')} · {t('fixed', '固定')} {series.duration}s · {zh ? series.ratio[1] : series.ratio[0]}
          </span>
          <span>
            {t(
              'The credit cost for your chosen resolution shows on the generate button before you start; failed renders are refunded automatically. Blurry, dark, filtered or group photos are the most common cause of a weak result — see the photo tips above before uploading.',
              '所选分辨率的确切积分会在开始前显示在生成按钮上；失败自动退回积分。模糊、偏暗、重滤镜或多人合照是最常见的翻车原因——上传前先看上方的照片建议。'
            )}
          </span>
        </div>
        <div className="g6-cta-row">
          <button type="button" className="g6-btn" onClick={start}>
            <Camera size={16} />
            {series.photos === 2
              ? t('Upload two photos — start now', '上传两张照片，立即开始')
              : t('Upload one photo — start now', '上传一张照片，立即开始')}
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );

  const scenes = (
    <section className="g6-sec g6-alt" id="g6-scenes" key="scenes">
      <div className="container">
        {head(
          <><ArrowRightLeft size={14} aria-hidden="true" />{t('Shot by shot', '逐镜头拆解')}</>,
          t(
            `What the ${series.duration}-second ${series.name[0]} clip shows`,
            `${series.duration} 秒的${series.name[1]}成片里有什么`
          ),
          t(
            'The shots and their order are fixed — your photo decides who stars in them, nothing else changes.',
            '镜头和顺序都是固定的——你的照片决定的只是谁来主演，其他都不变。'
          )
        )}
        <div className={`g6-story ${series.scenes.length >= 5 ? 'dense' : ''}`}>
          {series.scenes.map((scene, i) => (
            <article className="g6-scene" key={scene.name[0]}>
              <span className="g6-num" style={{ '--g6a': series.accent[0], '--g6b': series.accent[1] } as CSSProperties}>
                {i + 1}
              </span>
              <h3>{zh ? scene.name[1] : scene.name[0]}</h3>
              <p>{zh ? scene.desc[1] : scene.desc[0]}</p>
            </article>
          ))}
        </div>
        <div className="g6-tip">
          <p>
            <strong>{t('Which photo works best:', '什么样的照片最合适：')}</strong>
            {zh ? series.photoTips[1] : series.photoTips[0]}
          </p>
        </div>
      </div>
    </section>
  );

  const how = (
    <section className="g6-sec" id="g6-how" key="how">
      <div className="container">
        {head(
          t('How it works', '使用教程'),
          t(`How to make a ${series.name[0]} video`, `如何制作${series.name[1]}视频`),
          t(
            'Four steps, no prompt, no editing app — the whole render happens in the browser.',
            '四步搞定，不用提示词，不用剪辑软件——渲染全程在浏览器里完成。'
          )
        )}
        <ol className="g6-steps">
          {series.howTo.map((step, i) => (
            <li key={step.name[0]}>
              <span className="g6-stepnum">{i + 1}</span>
              <div>
                <h3>{zh ? step.name[1] : step.name[0]}</h3>
                <p>{zh ? step.text[1] : step.text[0]}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );

  const trend = (
    <section className="g6-sec g6-alt" id="g6-trend" key="trend">
      <div className="container g6-prose">
        <p className="g6-kick">
          <Clapperboard size={14} aria-hidden="true" />
          {t('The trend behind this template', '这条模板背后的趋势')}
        </p>
        {series.trend.map((block) => (
          <div key={block.heading[0]}>
            <h2>{zh ? block.heading[1] : block.heading[0]}</h2>
            <p>{zh ? block.text[1] : block.text[0]}</p>
          </div>
        ))}
      </div>
    </section>
  );

  const stats = (
    <section className="g6-stats" key="stats">
      <div className="container g6-stats-grid">
        <div>
          <div className="g6-statnum">{series.duration}s</div>
          <p>{t('Fixed clip length — no duration picker guessing', '固定片长，不用猜时长')}</p>
        </div>
        <div>
          <div className="g6-statnum">{series.photos}</div>
          <p>
            {series.photos === 2
              ? t('Photos uploaded — one adult each, that is the whole input', '张照片，每人一张，就是全部输入')
              : t('Photo uploaded — that is the whole input', '张照片，就是全部输入')}
          </p>
        </div>
        <div>
          <div className="g6-statnum">{creditsForDuration(videoCosts, '720p', series.duration)}<em className="g6-wide-em">{t(' credits at 720p', ' 积分 · 720p')}</em></div>
          <p>{t(`Top-ups available · ${creditsPerUsd} credits = $1`, `随时可加购 · ${creditsPerUsd} 积分 = 1 美元`)}</p>
        </div>
      </div>
    </section>
  );

  const faqSection = (
    <section className="g6-sec" id="g6-faq" key="faq">
      <div className="container">
        {head(
          t('FAQ', '常见问题'),
          t(`Frequently asked questions about ${series.name[0]}`, `关于${series.name[1]}的常见问题`)
        )}
        <div className="g6-faq-list">
          {faq.map(([question, answer], i) => (
            <details key={question} open={i === 0}>
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );

  const related = (
    <section className="g6-sec g6-alt" id="g6-related" key="related">
      <div className="container">
        {head(
          t('More GTA 6 AI formats', '更多 GTA 6 AI 玩法'),
          t('The other five GTA 6 series on ViralReel', 'ViralReel 上的另外五个 GTA 6 系列')
        )}
        <div className="g6-rel">
          {others.map((item) => (
            <Link className="g6-relcard" href={`/${item.slug}`} key={item.slug}>
              <img
                src={`/templates/${item.templateId}-poster.jpg`}
                alt={zh ? item.name[1] : item.name[0]}
                width={86}
                height={153}
                loading="lazy"
                decoding="async"
              />
              <div>
                <b>{zh ? item.name[1] : item.name[0]}</b>
                <span>
                  {item.duration}s · {item.photos} {t('photo(s)', '张照片')}
                </span>
                <p>{zh ? item.pitch[1] : item.pitch[0]}</p>
              </div>
            </Link>
          ))}
        </div>
        <p className="g6-relmore">
          <Link href="/gta-6-ai-templates">{t('See the full GTA 6 AI collection', '查看 GTA 6 AI 专题全集')} →</Link>
        </p>
      </div>
    </section>
  );

  const sectionMap: Record<string, ReactNode> = { flow, scenes, how, trend, stats, faq: faqSection, related };

  return (
    <div className="viral-home g6">
      {howToJsonLd ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} /> : null}
      <ViralHeader onStart={start} />
      <main>
        {hero}
        {layout.sections.map((key) => sectionMap[key])}
        <section className="g6-cta">
          <div className="container">
            <h2>
              {t(`Your ${series.duration} seconds of Vice City`, `属于你的 ${series.duration} 秒罪恶都市`)}
            </h2>
            <p>{zh ? series.pitch[1] : series.pitch[0]}</p>
            <button type="button" className="g6-btn g6-btn-lg" onClick={start}>
              <Wand2 size={16} />
              {t('Generate now', '立即生成')}
              <ArrowRight size={16} />
            </button>
          </div>
        </section>
      </main>
      <ViralFooter />
    </div>
  );
}
