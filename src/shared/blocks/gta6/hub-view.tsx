'use client';

import { useEffect, useState, type CSSProperties } from 'react';
import { ArrowRight, Wand2 } from 'lucide-react';
import { useLocale } from 'next-intl';

import { Link } from '@/core/i18n/navigation';
import { TemplateCardVideo } from '@/shared/blocks/common/lazy-video';
import { ViralFooter } from '@/shared/blocks/viral-home/footer';
import { ViralHeader } from '@/shared/blocks/viral-home/header';
import { track } from '@/shared/lib/analytics';
import { getVideoCostTable } from '@/shared/lib/video-cost';
import { GTA6_HUB_FAQ, GTA6_SERIES } from './series-data';
import './gta6.css';

/**
 * GTA 6 AI hub — lists the six series templates in the same "Vice night"
 * theme as the series pages. Server wiring renders FAQPage + SoftwareApplist
 * JSON-LD (see the hub route page).
 */
export function Gta6HubHome({ creditsPerUsd = 12, videoCosts = getVideoCostTable(), pageUrl }: { creditsPerUsd?: number; videoCosts?: ReturnType<typeof getVideoCostTable>; pageUrl?: string }) {
  const locale = useLocale();
  const zh = locale === 'zh';
  const t = (en: string, cn: string) => (zh ? cn : en);
  const [active, setActive] = useState(0);
  useEffect(() => {
    track('view_template', { template: 'gta6_hub' });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const go = (i: number) => setActive(i);
  const scrollToGenerator = () => {
    document.getElementById('g6-hub-generator')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="viral-home g6">
      <ViralHeader onStart={scrollToGenerator} />
      <main>
        <section className="g6-hero" id="g6-hub-generator">
          <div className="container g6-hub-hero-grid">
            <div className="g6-hub-hero-copy">
              <p className="g6-badge">
                <Wand2 size={15} aria-hidden="true" />
                <span>{t('GTA VI shipped Nov 19, 2026 — six series, 1–2 photos each', 'GTA VI 已于 2026 年 11 月 19 日发售——六个系列，1-2 张照片即可开做')}</span>
              </p>
              <h1>
                {t('GTA 6 AI Templates — six series that put you in Vice City', 'GTA 6 AI 模板专题——六个带你进罪恶都市的系列')}
              </h1>
              <p>
                {t(
                  'Explore six GTA-inspired AI video templates: a four-shot fan trailer, a five-star one-take chase, a two-photo romance, a widescreen cutscene story, a nightclub entrance, or a duo getaway. Upload one or two photos, depending on the template you choose, and your video is ready in 2–7 minutes at 720p.',
                  '六个 GTA 风格 AI 视频模板任你选：四镜头粉丝预告片、五星通缉一镜到底、双人追逐爱情、横版过场故事、夜店入场、双人逃亡。按模板要求上传 1-2 张照片，720p 下通常 2–7 分钟就能拿到你的成片。'
                )}
              </p>
              <div className="g6-specs" role="list">
                <span role="listitem">6 × {t('series', '系列')}</span>
                <span role="listitem">10–15s</span>
                <span role="listitem">1–2 {t('photos', '张照片')}</span>
                <span role="listitem">{t('Render', '出片')} · 2–3 {t('min', '分钟')}</span>
              </div>
            </div>
            <div className="g6-hub-hero-media">
              <div className="tv tv-full g6-hub-preview">
                <TemplateCardVideo
                  id={GTA6_SERIES[active].templateId}
                  src={`/templates/${GTA6_SERIES[active].templateId}.mp4`}
                  poster={`/templates/${GTA6_SERIES[active].templateId}-poster.jpg`}
                  colors={GTA6_SERIES[active].accent}
                  priority
                />
                <span className="g6-clip-tag">{zh ? GTA6_SERIES[active].name[1] : GTA6_SERIES[active].name[0]}</span>
              </div>
            </div>
          </div>
        </section>

        <section className="g6-sec" id="g6-series">
          <div className="container">
            <p className="g6-kick">{t('All six formats', '全部六种玩法')}</p>
            <h2>{t('The GTA 6 AI series, in one place', 'GTA 6 AI 系列，一页看完')}</h2>
            <p className="g6-sub">
              {t(
                'Each card spells out who it is for — solo or duo — the scene it drops you into and the clip it outputs, with photo count and duration on every card. Hover to preview, click to open the series.',
                '每张卡片都写清了适合单人还是双人、把你放进什么场景、输出什么效果，照片数量和时长标在卡片上。悬停预览，点击进入系列页。'
              )}
            </p>
            <div className="g6-hubgrid">
              {GTA6_SERIES.map((item, i) => (
                <article
                  className={`g6-hubcard ${i === active ? 'sel' : ''}`}
                  key={item.slug}
                  onMouseEnter={() => go(i)}
                  onFocus={() => go(i)}
                  style={{ '--g6a': item.accent[0], '--g6b': item.accent[1] } as CSSProperties}
                >
                  <Link href={`/${item.slug}`} className="g6-hubmedia" aria-label={zh ? item.name[1] : item.name[0]}>
                    <TemplateCardVideo
                      id={item.templateId}
                      src={`/templates/${item.templateId}.mp4`}
                      poster={`/templates/${item.templateId}-poster.jpg`}
                      colors={item.accent}
                    />
                    <span className="g6-hubdur">{item.duration}s</span>
                  </Link>
                  <div className="g6-hubmeta">
                    <b>{zh ? item.name[1] : item.name[0]}</b>
                    <span>
                      {item.photos === 2 ? t('2 photos', '2 张照片') : t('1 photo', '1 张照片')} · {zh ? item.ratio[1] : item.ratio[0]}
                    </span>
                    <p>{zh ? item.pitch[1] : item.pitch[0]}</p>
                    <Link className="g6-hubopen" href={`/${item.slug}`}>
                      {t('Open the series', '进入系列')} <ArrowRight size={14} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="g6-stats">
          <div className="container g6-stats-grid">
            <div>
              <div className="g6-statnum">6</div>
              <p>{t('Series in the GTA 6 collection', '个系列组成 GTA 6 专题')}</p>
            </div>
            <div>
              <div className="g6-statnum">10–15s</div>
              <p>{t('A fixed length per series — upload a photo and generate', '每个系列时长固定，传上照片就能生成')}</p>
            </div>
            <div>
              <div className="g6-statnum">{creditsPerUsd}</div>
              <p>{t('Credits = $1 on top-ups; cost shows before you render', '积分 = 1 美元加购；渲染前显示费用')}</p>
            </div>
          </div>
        </section>

        <section className="g6-sec g6-alt" id="g6-hub-why">
          <div className="container g6-prose">
            <p className="g6-kick">{t('Why this hub exists', '这个专题是什么')}</p>
            <h2>{t('Pick a series, upload a photo, post it tonight', '挑一个系列，上传照片，今晚就发')}</h2>
            <p>
              {t(
                'Grand Theft Auto VI shipped on 19 November 2026 for PS5 and Xbox Series X|S, and launch week turned AI-made, GTA-styled clips into a format of their own. This hub collects the six ViralReel series built for that moment: GTA 6 Trailer AI (12s, one photo), GTA 6 Wanted Level (10s, one photo), GTA 6 Lovers on the Run (15s, two photos), GTA 6 Vice City Story (15s, one photo, 16:9), GTA 6 Nightclub (12s, one photo), and GTA 6 Getaway Duo (12s, two photos). Five are 9:16 vertical for TikTok, Reels and Shorts; Vice City Story is 16:9 landscape for YouTube and gaming channels.',
                '《侠盗猎车手 VI》于 2026 年 11 月 19 日登陆 PS5 和 Xbox Series X|S，发售周把 AI 制作的 GTA 风格片段变成了独立的内容格式。这个专题收录了 ViralReel 为这一时刻做的六个系列：GTA 6 Trailer AI（12 秒、1 张照片）、GTA 6 Wanted Level（10 秒、1 张照片）、GTA 6 Lovers on the Run（15 秒、2 张照片）、GTA 6 Vice City Story（15 秒、1 张照片、16:9）、GTA 6 Nightclub（12 秒、1 张照片）和 GTA 6 Getaway Duo（12 秒、2 张照片）。五个是适配 TikTok、Reels 和 Shorts 的 9:16 竖屏；Vice City Story 是给 YouTube 和游戏频道的 16:9 横版。'
              )}
            </p>
            <p>
              {t(
                'Every series is a fixed format — the shots, their order and the duration never change — so the only variable is who stars in it. That is also what makes the pages honest: every render is fan-made AI content, labeled as such, and ViralReel (viralreel.app) is not affiliated with Rockstar Games or Take-Two Interactive. Use photos of adults who agreed to appear, and publish with the AI-generated tag.',
                '每个系列都是固定格式——镜头、顺序和时长都不变——唯一的变量是谁来主演。这也是这些页面诚实的原因：每条成片都是粉丝向 AI 内容并明确标注，ViralReel（viralreel.app）与 Rockstar Games 或 Take-Two Interactive 无关联。请使用已同意出镜的成年人照片，并在发布时打开 AI 生成标注。'
              )}
            </p>
          </div>
        </section>

        <section className="g6-sec" id="g6-hub-faq">
          <div className="container">
            {(() => {
              const faq = GTA6_HUB_FAQ;
              return (
                <>
                  <div className="g6-sec-head center">
                    <p className="g6-kick">{t('Choosing a series', '选择系列')}</p>
                    <h2>{t('GTA 6 AI templates, answered', 'GTA 6 AI 模板常见问题')}</h2>
                    <p className="g6-sub">
                      {t(
                        'Short answers to the questions people ask before picking a series — who each one is for and what it renders.',
                        '选系列之前最常问的问题，一条条答清楚——每个系列适合谁、输出什么。'
                      )}
                    </p>
                  </div>
                  <div className="g6-faq-list">
                    {faq.map((item) => (
                      <details key={item.q[0]}>
                        <summary>{zh ? item.q[1] : item.q[0]}</summary>
                        <p>{zh ? item.a[1] : item.a[0]}</p>
                      </details>
                    ))}
                  </div>
                </>
              );
            })()}
          </div>
        </section>

        <section className="g6-cta">
          <div className="container">
            <h2>{t('Pick a series, upload a photo, post it this week', '选一个系列，上传照片，这周就发')}</h2>
            <p>
              {t(
                'Pick your series, drop in a photo, and your video is ready in 2–7 minutes at 720p. Six Vice City looks are waiting — the only thing missing is your face in one of them.',
                '选一个系列，上传一张照片，720p 下通常 2–7 分钟成片就到手。六种罪恶都市玩法都在等你——缺的只是把你的脸放进去。'
              )}
            </p>
            <Link className="g6-btn g6-btn-lg" href="#g6-series" onClick={scrollToGenerator}>
              {t('Browse the six series', '浏览六个系列')} <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </main>
      <ViralFooter />
    </div>
  );
}
