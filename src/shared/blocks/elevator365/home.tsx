'use client';

/* eslint-disable @next/next/no-img-element */

import { useState } from 'react';
import {
  ArrowRight,
  Camera,
  CheckCircle2,
  Clock3,
  Flame,
  ImagePlus,
  Music,
  ShieldCheck,
  Users,
  Video,
  Wrench,
  XCircle,
} from 'lucide-react';
import { useLocale } from 'next-intl';
import { track } from '@/shared/lib/analytics';
import { TemplateCardVideo } from '@/shared/blocks/common/lazy-video';
import { TemplateGenerator } from '@/shared/blocks/viral-home/generator';
import { ViralHeader } from '@/shared/blocks/viral-home/header';
import { ViralFooter } from '@/shared/blocks/viral-home/footer';
import { buildHowToJsonLdFromSteps } from '@/shared/lib/howto-schema';
import { getVideoCostTable } from '@/shared/lib/video-cost';
import { creditsForDuration } from '@/shared/lib/video-yield';
import { elevator365Templates } from './templates';
import { ELEVATOR_365_FAQ } from './faq';
import { ELEVATOR_365_STEPS } from './steps';
import '@/shared/blocks/viral-home/home.css';
import './elev.css';

/** The recommended 365 Elevator prompt, shown as copyable reference copy. */
const PROMPT_EN =
  'A photorealistic 4:3 video inside a brushed-steel elevator under two bright overhead strip lights, locked front-facing camera, one continuous take, no cuts, no dialogue. Person 1 already stands inside on the right, waiting calmly. The sliding doors open, Person 2 walks in from the foreground with their back to the camera, steps to the left, turns round to face the lens, puts in an earbud, brushes their hair back and glances at their phone. The two then mouth the song straight at the camera with deadpan faces, counting on their fingers. Preserve each reference subject\'s face, hairstyle and outfit exactly, one head per person, exactly two people. Keep the elevator, the strip lights, the camera angle and the timing from the reference video unchanged. Slight phone-camera feel, not cinematic, no text or watermark.';
const PROMPT_ZH =
  '一段写实风格的 4:3 视频：拉丝钢电梯内部，顶部两排明亮的条形灯，固定正面机位，一镜到底，无剪辑，无对白。人物 1 已站在电梯内侧右方，安静等待。滑门打开，人物 2 背对镜头从前景走入，站到左侧，转身面向镜头，戴上一只耳机，拨一下头发，瞥一眼手机。随后两人面无表情地直视镜头对口型，用手指打节拍。严格保留每位参考人物的脸、发型和穿着，一人一头，画面中恰好两个人。电梯、条形灯、机位角度和节奏全部与参考视频一致。轻微手机拍摄质感，非电影感，无文字无水印。';

const BEATS = [
  {
    time: '0–3s',
    en: 'The sliding doors part on the person already inside — slot 1, standing right of center, waiting calmly. The second person enters from the foreground with their back to the camera.',
    zh: '滑门打开，露出已经在电梯里的人——位置 1，站在中偏右，安静等待。第二个人背对镜头，从镜头前走入。',
  },
  {
    time: '3–6s',
    en: 'The arrival steps to the left, turns round to face forward, puts in an earbud, brushes their hair back and glances at the phone — the trend\'s signature move.',
    zh: '进来的人站到左侧，转身面向前方，戴上耳机、拨一下头发、瞥一眼手机——这条趋势的标志性动作。',
  },
  {
    time: '6–10s',
    en: 'The two settle side by side, shoulder to shoulder, trading small deadpan glances while the club beat carries the shot.',
    zh: '两人并肩站好，互相递几个面无表情的小眼神，电子节拍撑住整个镜头。',
  },
  {
    time: '10–15s',
    en: 'Both mouth the hook straight down the lens, counting on their fingers, and hold the unbothered two-shot until the bass fades out.',
    zh: '两人一起对着镜头对口型、用手指打拍子，面不改色地撑到贝斯收尾。',
  },
];

const TIMELINE = [
  {
    date: '2026-10-22',
    en: 'Sampagne (@sampagnebaby) posts the first teaser of "365" — the sound every elevator take now runs on.',
    zh: 'Sampagne（@sampagnebaby）发布《365》首支先导片段——如今每条电梯视频用的都是这条声音。',
  },
  {
    date: '2026-11-10',
    en: 'The song drops, and Sampagne posts his own steel-elevator clip the same day: a man waits, a woman walks in. About 891K plays.',
    zh: '歌曲正式发行，Sampagne 当天发出自己的钢电梯片段：一人等待、一人走入。播放约 89.1 万。',
  },
  {
    date: '2026-11-19',
    en: 'The German edit account @neoausdermatrix33 casts its first famous duo in the same elevator and asks the comments who rides next. The trend format is born.',
    zh: '德国剪辑账号 @neoausdermatrix33 把第一对名人组合放进同一台电梯，并在评论区问「下一个想看谁」。趋势格式就此诞生。',
  },
  {
    date: '2026-11-20 → 21',
    en: 'The celebrity wave lands: the Ronaldo & Messi GOAT-debate edit passes roughly 978K plays, then Zahide & Chiara, Nader & Louisa Jindaoui (1.6M) and Justin & Selena pile in.',
    zh: '名人浪潮到来：C罗与梅西的「GOAT 之争」剪辑播放破约 97.8 万，随后 Zahide & Chiara、Nader & Louisa Jindaoui（160 万）、Justin & Selena 陆续登场。',
  },
  {
    date: '2026-11-22',
    en: 'Cem & Lena from Türkisch für Anfänger hit 1.6M plays, two CapCut templates appear, and the sound is gaining roughly 2,000 new videos a day.',
    zh: '《土耳其语入门》的 Cem & Lena 版播放破 160 万，两个 CapCut 模板上线，这条声音每天新增约 2000 条视频。',
  },
  {
    date: '2026-11-23',
    en: 'English "365 elevator trend tutorial" posts push the format beyond Germany — the duo elevator is now a global template.',
    zh: '英语「365 elevator trend tutorial」教程帖把玩法带出德国——双人电梯成了全球模板。',
  },
];

const DUO_IDEAS = [
  {
    en: ['You and your partner', 'The classic. Two front-facing portraits, one elevator, the whole "365 Tage" premise — waiting a year for someone — acted out by actual you.'],
    zh: ['你和对象', '经典款。两张正脸照、一部电梯，《365 Tage》「愿意等上一整年」的歌词前提，由真实的你们亲自出演。'],
  },
  {
    en: ['You and your best friend', 'Cast yourselves as the deadpan duo. The contrast between the romantic song and two friends avoiding eye contact is half the joke.'],
    zh: ['你和最好的朋友', '把你们俩排成面无表情双人组。浪漫的情歌配两个不敢对视的朋友，笑点就赢了一半。'],
  },
  {
    en: ['Then vs. now', 'An old photo of yourself walks in to meet the present you. One of the most-liked takes in the trend (the "Bibi then vs. now" edit crossed 600K plays).'],
    zh: ['今昔对比', '让旧照片里的自己走进来见现在的你。趋势里点赞最高的玩法之一（「Bibi then vs. now」剪辑播放破 60 万）。'],
  },
  {
    en: ['Boss and intern, or two rivals', 'Unexpected pairings made the trend: put the two people nobody would share an elevator with into the same one and let the comments argue about the GOAT.'],
    zh: ['老板和实习生，或一对对手', '意外组合正是趋势的爆点：让谁都不会同乘一部电梯的两个人同框，让评论区去争谁才是 GOAT。'],
  },
];

const PHOTO_DO = [
  ['Front-facing portraits, eyes clearly visible', '正脸照，眼睛清晰可见'],
  ['Chest-up or knee-up framing — the clip shows both people standing', '取景到胸口或膝盖以上——成片里两人是站着的'],
  ['One person per photo, calm posture, even light', '一张照片一个人，姿态自然，光线均匀'],
  ['Wear the outfit you want to appear in — the render copies it', '穿你想在成片里出现的衣服——渲染会照搬'],
  ['A photo the other person approved first', '先经过对方同意的照片'],
];

const PHOTO_DONT = [
  ['Sunglasses — the overhead strip lights glare off the lenses', '墨镜——顶部条形灯会在镜片上反光'],
  ['Heavy filters or beauty modes that flatten the face', '把脸抹平的重滤镜或美颜'],
  ['Group photos — the generator needs one clear subject per slot', '合照——每个照片位需要一个清晰主体'],
  ['Extreme side angles — faces smear after the 180° walk-in turn', '极端侧面角度——180° 走进转身之后脸会糊'],
  ['Minors, celebrities, or anyone who did not agree', '未成年人、名人或任何未同意出镜的人'],
];

const TROUBLES = [
  {
    problem: ['The two people come out on the wrong sides', '两个人出来的站位反了'],
    fix: [
      'The slots are order-sensitive: slot 1 waits inside on the right, slot 2 walks in on the left. Swap the two photos and render again.',
      '照片位对顺序敏感：位置 1 在电梯里等（右），位置 2 走入（左）。把两张照片对调再生成一次。',
    ],
  },
  {
    problem: ['The face smears or drifts during the turn', '转身阶段脸糊了或飘了'],
    fix: [
      'Side-angle or low-light photos give the model weak facial landmarks after the pivot. Retake the photo straight-on with even light and visible eyes.',
      '侧面角度或昏暗照片在转身后给模型的五官参考太弱。换成正面、光线均匀、眼睛清晰的照片重拍。',
    ],
  },
  {
    problem: ['The outfit does not match the photo', '成片衣服和照片不符'],
    fix: [
      'The render copies what you wear in the photo. If the outfit matters, upload a photo where you are already wearing it — do not expect the model to invent clothes.',
      '渲染会照搬照片里的穿着。衣服重要的话，直接穿好再拍上传——别指望模型自己设计服装。',
    ],
  },
  {
    problem: ['Leftover details from the original duo (caps, prints, scarves)', '残留了原版两人的细节（帽子、印花、围巾）'],
    fix: [
      'This means the reference identity was not fully replaced — render again with sharper front-on portraits. One or two retries normally clear it; failed renders are refunded.',
      '这说明参考身份没有被完全替换——用更清晰的正脸照再生成一次。通常重试一两次就能清干净；失败会退积分。',
    ],
  },
];

export function Elevator365Home({
  creditsPerUsd = 12,
  videoCosts = getVideoCostTable(),
  pageUrl,
}: {
  creditsPerUsd?: number;
  videoCosts?: ReturnType<typeof getVideoCostTable>;
  pageUrl?: string;
}) {
  const locale = useLocale();
  const zh = locale === 'zh';
  const t = (en: string, cn: string) => (zh ? cn : en);
  const [template] = useState(elevator365Templates[0]);
  const [copied, setCopied] = useState(false);
  track('view_template', { template: 'elevator_365' });
  const start = () => {
    track('click_generate', { template: 'elevator_365' });
    document.getElementById('generator')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  const copyPrompt = async () => {
    try {
      await navigator.clipboard.writeText(zh ? PROMPT_EN : PROMPT_EN);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };
  const steps = ELEVATOR_365_STEPS.map((step) => [zh ? step.name.zh : step.name.en, zh ? step.text.zh : step.text.en] as const);
  const faq = ELEVATOR_365_FAQ[zh ? 'zh' : 'en'];
  const howToJsonLd = buildHowToJsonLdFromSteps({
    name: t('How to make a 365 Elevator AI video', '如何制作 365 Elevator AI 视频'),
    description: t(
      'Upload two photos — the person already inside and the one who walks in — render a 15-second 4:3 clip, then add Sampagne\'s "365" sound and an AI label.',
      '上传两张照片——电梯里的人和走进去的人——渲染 15 秒 4:3 片段，再挂上 Sampagne 的《365》原声和 AI 标注。'
    ),
    url: pageUrl,
    steps: steps.map(([name, text]) => ({ name, text })),
  });

  return (
    <div className="viral-home elev">
      {howToJsonLd ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} /> : null}
      <ViralHeader onStart={start} />
      <main>
        {/* ── 第一屏：生成器 ── */}
        <section className="elev-hero">
          <div className="container">
            <div className="elev-floor-row" aria-hidden="true">
              <span className="elev-floor">
                <b>365</b>
                <i>{t('ELEV', '电梯')}</i>
              </span>
              <span className="elev-cam">CAM 03 · ELEV · REC ●</span>
            </div>
            <div className="hero-badge">
              <Flame size={16} />
              <span>#365elevator {t('is trending', '正在爆火')}</span>
            </div>
            <h1>
              {t('Upload two photos — ride the ', '上传两张照片，搭上 ')}
              <span className="hl">365 Elevator</span>
              {t(' AI video trend', ' AI 视频热梗')}
            </h1>
            <p className="elev-hero-sub">
              {t(
                'One person waits inside the steel box singing. The doors open, the second walks in, turns round, earbud in — and both mouth "365" straight at the lens. Two photos is all it takes.',
                '一个人在钢制电梯里等着开唱。门开了，第二个人走进来、转身、戴上耳机——两人一起对着镜头对口型《365》。需要的只是两张照片。'
              )}
            </p>
            <TemplateGenerator key={template.id} template={template} open embedded onOpenChange={() => {}} />
            <p className="elev-specs-note">
              {t(
                'Aspect ratio: keep it on auto — the framing follows the reference clip (4:3) automatically, no manual pick needed.',
                '画幅选 auto 即可——自动跟随参考片段（4:3），不用手选。'
              )}
            </p>
          </div>
        </section>

        {/* ── 原图进，成片出 ── */}
        <section className="sec" id="showcase">
          <div className="container">
            <div className="sec-head">
              <p className="kick">{t('Example', '示例')}</p>
              <h2>{t('Two photos in, one elevator duo out', '两张原图进去，一条电梯双人片出来')}</h2>
              <p className="sub">
                {t(
                  'This is the famous "Ronaldo & Messi, the GOAT debate" edit that helped push the trend past a million plays. The two portraits below are the input a render like it needs — one per slot.',
                  '这就是那条把趋势推向百万播放的著名「C罗 & 梅西，GOAT 之争」剪辑。下面两张人像就是这类成片需要的输入——每个位置一张。'
                )}
              </p>
            </div>
            <div className="elev-io">
              <div className="elev-inputs">
                <figure className="elev-shot">
                  <img src="/templates/elevator-365-singer.jpg" alt={t('Input photo 1 — the person already inside the elevator', '输入照片 1——已经在电梯里的人')} width={680} height={908} loading="lazy" decoding="async" />
                  <figcaption>
                    <b>{t('Slot 1 · already inside', '位置 1 · 电梯里的人')}</b>
                    <span>{t('The one who sings first, standing right', '先开口唱、站右边的那位')}</span>
                  </figcaption>
                </figure>
                <figure className="elev-shot">
                  <img src="/templates/elevator-365-walkin.jpg" alt={t('Input photo 2 — the person who walks in', '输入照片 2——走进去的人')} width={600} height={800} loading="lazy" decoding="async" />
                  <figcaption>
                    <b>{t('Slot 2 · walks in', '位置 2 · 走进去的人')}</b>
                    <span>{t('Back to camera, turns round, earbud in', '背对镜头走入，转身，戴耳机')}</span>
                  </figcaption>
                </figure>
              </div>
              <div className="elev-arrow" aria-hidden="true">
                <ArrowRight size={26} />
                <span>{t('AI swap', 'AI 替换')}</span>
              </div>
              <div className="elev-output">
                <div className="elev-clip">
                  <TemplateCardVideo
                    id="elevator-365"
                    src="/templates/elevator-365.mp4"
                    poster="/templates/elevator-365-poster.jpg"
                    colors={['#facc15', '#1c1917']}
                    credit="@neoausdermatrix33"
                    priority
                  />
                </div>
                <p className="elev-out-cap">
                  <b>{t('Output · 15s · 4:3', '输出 · 15 秒 · 4:3')}</b>
                  {t('Same steel box, same walk-in, same deadpan lip-sync — your two people in the frame.', '同一台钢电梯、同一次走进、同样的面无表情对口型——画面里换成你的两个人。')}
                </p>
              </div>
            </div>
            <p className="elev-note">
              {t(
                'Demo material, not a customer render: the clip above is the TikTok reference the template copies, credited to its creator. Your render is a new 15-second MP4 built from your photos. Blurry, dark or heavily filtered photos are the most common failure — see the photo guide below before you spend credits.',
                '以上为演示素材而非用户成片：上面的片段是模板复刻的 TikTok 参考原片，已标注原作者。你的成片是用你的照片新生成的 15 秒 MP4。模糊、昏暗或重度滤镜的照片是最常见的翻车原因——花积分之前先看下面的照片指南。'
              )}
            </p>
          </div>
        </section>

        {/* ── 逐秒剧情 ── */}
        <section className="sec sec-alt" id="beats">
          <div className="container">
            <div className="sec-head">
              <p className="kick">{t('The plot', '情节')}</p>
              <h2>{t('What happens in the clip, second by second', '这条视频每一秒在演什么')}</h2>
              <p className="sub">
                {t(
                  'One locked front-facing shot, no cuts, no dialogue — the whole 15 seconds ride on timing. This is the beat sheet every viral version follows.',
                  '一个固定正面机位，无剪辑、无对白——整整 15 秒全靠节奏撑住。所有爆火版本走的都是这张节拍表。'
                )}
              </p>
            </div>
            <div className="elev-beats">
              {BEATS.map((beat, i) => (
                <div className="elev-beat" key={beat.time}>
                  <span className="elev-beat-time">{beat.time}</span>
                  <div>
                    <h3>{t(`Beat ${i + 1}`, `节拍 ${i + 1}`)}</h3>
                    <p>{zh ? beat.zh : beat.en}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 教程 ── */}
        <section className="sec" id="how">
          <div className="container">
            <div className="sec-head">
              <p className="kick">{t('How it works', '使用教程')}</p>
              <h2>{t('How to make a 365 Elevator AI video', '如何制作 365 Elevator AI 视频')}</h2>
              <p className="sub">
                {t('From two portraits to a duo-in-the-elevator MP4 in minutes — no app, no editor, no prompt.', '两张人像到一条电梯双人 MP4 只要几分钟——不用装 App，不用会剪辑，不用写提示词。')}
              </p>
            </div>
            <div className="grid4s elev-steps">
              {steps.map(([title, desc], i) => (
                <div className="step" key={title}>
                  <div className="num">{i + 1}</div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 积分/规格 ── */}
        <section className="stats">
          <div className="container stats-grid">
            <div>
              <div className="statnum">{creditsForDuration(videoCosts, '720p', 15)}<em className="wide-em">{t(' credits at 720p / 15s', ' 积分 · 720p / 15 秒')}</em></div>
              <p>{t(`Exact cost shows on the generate button before you start · ${creditsPerUsd} credits = $1`, '开始前按钮上显示确切费用 · 12 积分 = 1 美元')}</p>
            </div>
            <div>
              <div className="statnum">4:3</div>
              <p>{t('The framing follows the reference clip automatically — the viral versions are 4:3, not 9:16', '画幅自动跟随参考片段——爆火版本是 4:3，不是 9:16')}</p>
            </div>
            <div>
              <div className="statnum">min</div>
              <p>{t('Renders usually take a few minutes; failed renders are refunded', '渲染通常几分钟；失败会退回积分')}</p>
            </div>
          </div>
        </section>

        {/* ── 推荐提示词 ── */}
        <section className="sec" id="prompt">
          <div className="container">
            <div className="sec-head">
              <p className="kick">{t('Prompt', '提示词')}</p>
              <h2>{t('The 365 Elevator prompt, spelled out', '365 Elevator 的推荐提示词')}</h2>
              <p className="sub">
                {t(
                  'You never need to write a prompt on ViralReel — the generator runs the one below against your photos automatically. It is here so you can check exactly what the model is told, or paste it into any photo-to-video tool that accepts reference images.',
                  '在 ViralReel 你完全不用写提示词——生成器会自动把下面这条用在你的照片上。放在这里是为了让你看清模型到底收到了什么指令，也可以把它粘贴进任何接受参考图的图生视频工具。'
                )}
              </p>
            </div>
            <div className="elev-prompt-box">
              <div className="elev-prompt-head">
                <span><Camera size={15} /> 365 Elevator · 2 photos · 4:3</span>
                <button type="button" onClick={copyPrompt}>{copied ? t('Copied ✓', '已复制 ✓') : <><Video size={14} />{t('Copy prompt', '复制提示词')}</>}</button>
              </div>
              <p className="elev-prompt-body">{zh ? PROMPT_ZH : PROMPT_EN}</p>
            </div>
          </div>
        </section>

        {/* ── 照片指南 ── */}
        <section className="sec sec-alt" id="photos">
          <div className="container">
            <div className="sec-head">
              <p className="kick">{t('Photo guide', '照片指南')}</p>
              <h2>{t('The best photos for a 365 Elevator video', '最适合 365 Elevator 的照片')}</h2>
              <p className="sub">
                {t(
                  'The clip shows both people from head to knee, so your portraits need standing-room framing — not tight selfies. Front-on beats angle every time.',
                  '成片里两人是从头到膝盖站着的，所以人像要留出站姿空间——别用怼脸自拍。正脸永远优于角度。'
                )}
              </p>
            </div>
            <div className="elev-pg-grid">
              <div className="elev-pg do">
                <h3><CheckCircle2 size={17} /> {t('Do', '这样做')}</h3>
                <ul>{PHOTO_DO.map(([en, zhh]) => <li key={en}>{zh ? zhh : en}</li>)}</ul>
              </div>
              <div className="elev-pg dont">
                <h3><XCircle size={17} /> {t('Avoid', '避免')}</h3>
                <ul>{PHOTO_DONT.map(([en, zhh]) => <li key={en}>{zh ? zhh : en}</li>)}</ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── 常见生成问题 ── */}
        <section className="sec" id="trouble">
          <div className="container">
            <div className="sec-head">
              <p className="kick">{t('Troubleshooting', '问题处理')}</p>
              <h2>{t('Common 365 Elevator problems and the exact fix', '常见生成问题与具体解决办法')}</h2>
            </div>
            <div className="elev-trouble">
              {TROUBLES.map((item) => (
                <div className="elev-tr" key={item.problem[0]}>
                  <div className="elev-tr-p"><Wrench size={15} />{zh ? item.problem[1] : item.problem[0]}</div>
                  <div className="elev-tr-f">{zh ? item.fix[1] : item.fix[0]}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 起源时间线 ── */}
        <section className="sec sec-alt" id="origin">
          <div className="container">
            <div className="sec-head">
              <p className="kick">{t('Origin', '由来')}</p>
              <h2>{t('Where the 365 Elevator trend came from', '365 Elevator 趋势的爆发时间线')}</h2>
              <p className="sub">
                {t(
                  'The sound is German, the format is one fixed elevator shot, and the explosion took eight days. Every date below is documented in the trend\'s TikTok posts.',
                  '声音来自德国，格式是一台固定电梯的固定镜头，爆发只用了八天。下面的每个日期都有趋势对应的 TikTok 帖子为证。'
                )}
              </p>
            </div>
            <div className="elev-timeline">
              {TIMELINE.map((item) => (
                <div className="elev-tl" key={item.date}>
                  <span className="elev-tl-date">{item.date}</span>
                  <p>{zh ? item.zh : item.en}</p>
                </div>
              ))}
            </div>
            <div className="elev-prose">
              <h3>{t('The song: "365" by Sampagne', '歌曲：Sampagne 的《365》')}</h3>
              <p>
                {t(
                  '"365" is by Sampagne, a German-language singer who posts as @sampagnebaby — and the artist\'s name is spelled Sampagne, not Champagne. The hook is "365 Tage": 365 days, as in the singer would wait every day of the year for someone. That waiting-room romanticism is why an elevator works so well as a stage. The trend runs on the artist\'s own TikTok sound titled "365", so every post keeps the song attached and the view counts stack on one sound page.',
                  '《365》的作者是 Sampagne——一位以 @sampagnebaby 账号发歌的德语歌手，艺名拼写是 Sampagne 而不是 Champagne。副歌是「365 Tage」：365 天，意思是愿意等上一年里的每一天。这种「等候室式的浪漫」正是电梯能当舞台的原因。趋势用的是歌手自己的 TikTok 原声「365」，每条帖子都挂着这首歌，播放量也都叠在同一个声音页面上。'
                )}
              </p>
              <h3>{t('Not the elevator scene from the movie "365 Days"', '不是电影《365 Days》的电梯名场面')}</h3>
              <p>
                {t(
                  'Search "365 elevator" and you will also hit the well-known elevator scene from the Netflix film 365 Days, which fans have been editing since 2020 to other songs. That is a different thing — a film clip, no walk-in, no duo of your own. The 365 Elevator trend is about Sampagne\'s song: two people, a steel box, one walk-in, and the words mouthed straight at the camera.',
                  '搜「365 elevator」你也会刷到 Netflix 电影《365 Days》那场著名电梯戏——2020 年起就有人拿它配各种歌曲剪辑。那是另一回事：电影片段、没有走进动作、也没有属于你自己的双人组。365 Elevator 趋势说的是 Sampagne 的歌：两个人、一台钢电梯、一次走进动作、直视镜头对口型。'
                )}
              </p>
              <h3>{t('Why the celebrity duos lit the fuse', '名人双人组为什么点燃了引线')}</h3>
              <p>
                {t(
                  'The joke is the casting. Put a famous pair with unresolved history — Ronaldo and Messi, a broken-up TV couple, two rivals — into a space built for two, have them avoid eye contact for three seconds and then mouth a love song together, and the comments section does the rest: "wer ist denn jetzt der goat?" ("so who is the GOAT now?") under the Ronaldo-Messi edit became its own meme. Every new pairing is a punchline the audience writes for you.',
                  '笑点在于选角。把一对有「未解之谜」的名人——C罗和梅西、分手的荧幕情侣、两位宿敌——放进一个只为两人设计的空间，让他们先互不对视三秒，再一起对口型唱情歌，剩下的交给评论区：C罗梅西版下面那句「wer ist denn jetzt der goat?」（所以现在谁是 GOAT？）自己就长成了新梗。每一对新组合都是观众替你写好的段子。'
                )}
              </p>
              <p className="elev-disclaimer">
                <ShieldCheck size={15} />
                {t(
                  'ViralReel is an independent AI video template site. It is not affiliated with Sampagne, TikTok, or the creators behind the trend clips, and it does not license the song "365" — add the sound in TikTok, Reels or Shorts and keep the AI-generated label on when you post.',
                  'ViralReel 是独立的 AI 视频模板站，与 Sampagne、TikTok 及趋势片段的原作者均无关联，也不授权歌曲《365》——发布时请在 TikTok、Reels 或 Shorts 里挂原声，并保留 AI 生成标注。'
                )}
              </p>
              <p className="elev-bloglinks">
                <a href={zh ? '/zh/blog/how-to-make-365-elevator-ai-video' : '/blog/how-to-make-365-elevator-ai-video'}>{t('Read the full how-to: make a 365 Elevator AI video', '阅读完整教程：怎么制作 365 Elevator AI 视频')} →</a>
                {' · '}
                <a href={zh ? '/zh/blog/why-365-elevator-trend-viral' : '/blog/why-365-elevator-trend-viral'}>{t('Why the 365 Elevator trend went viral', '为什么 365 Elevator 趋势会爆火')} →</a>
              </p>
            </div>
          </div>
        </section>

        {/* ── 为什么火 + 玩法场景 ── */}
        <section className="sec" id="why">
          <div className="container">
            <div className="sec-head">
              <p className="kick">{t('Why it works', '为什么会火')}</p>
              <h2>{t('Why the 365 Elevator trend went viral', '365 Elevator 为什么会爆火')}</h2>
            </div>
            <div className="elev-why">
              <div className="elev-why-item">
                <Clock3 size={20} />
                <h3>{t('The format is fixed, so every take reads instantly', '格式完全固定，每条视频一秒读懂')}</h3>
                <p>
                  {t(
                    'Same steel box, same strip lights, same walk-in, same deadpan stare. Nothing about the scene changes between versions, so the only variable is the duo — which is exactly what makes a trend remixable at speed.',
                    '同一台钢电梯、同一条顶灯、同一次走进、同一个面无表情的眼神。场景在不同版本之间纹丝不动，唯一的变量是双人组——而这正是趋势能被高速翻拍的全部原因。'
                  )}
                </p>
              </div>
              <div className="elev-why-item">
                <Users size={20} />
                <h3>{t('The pairing is the punchline', '选角本身就是笑点')}</h3>
                <p>
                  {t(
                    'A love song about waiting 365 days, performed by two people who famously should not be in the same frame. The unexpected-duo structure lets every fandom, office and group chat write its own version of the joke with two photos.',
                    '一首关于等待 365 天的情歌，由两个「著名的不同框」的人来演绎。意外双人组的结构让每个粉丝圈、每间办公室、每个群聊都能用两张照片写出自己的版本。'
                  )}
                </p>
              </div>
              <div className="elev-why-item">
                <Music size={20} />
                <h3>{t('One sound page, compounding numbers', '一个声音页，播放量滚动叠加')}</h3>
                <p>
                  {t(
                    'Because every edit keeps Sampagne\'s original sound, the view counts stack on a single TikTok sound page — a few thousand videos in, the sound itself trends and drags every new take up with it. Roughly 2,000 new videos a day were landing by 23 November.',
                    '因为每条剪辑都保留 Sampagne 的原声，播放量全部叠在同一个 TikTok 声音页——几千条视频之后，声音本身上了热榜，又把每条新视频一起往上带。到 11 月 23 日，每天新增约 2000 条。'
                  )}
                </p>
              </div>
            </div>
            <div className="sec-head elev-duo-head">
              <p className="kick">{t('Scenes', '玩法场景')}</p>
              <h2>{t('Duos to put in your elevator', '可以放进你电梯里的双人组')}</h2>
            </div>
            <div className="grid4 elev-duos">
              {DUO_IDEAS.map((idea) => (
                <div className="feat" key={idea.en[0]}>
                  <div className="ic"><ImagePlus size={20} /></div>
                  <h3>{zh ? idea.zh[0] : idea.en[0]}</h3>
                  <p>{zh ? idea.zh[1] : idea.en[1]}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="sec sec-alt" id="faq">
          <div className="container">
            <div className="sec-head">
              <p className="kick">{t('FAQ', '常见问题')}</p>
              <h2>{t('365 Elevator questions, answered', '365 Elevator 常见问题')}</h2>
            </div>
            <div className="faq-list elev-faq">
              {faq.map(([question, answer], i) => (
                <details key={question} open={i === 0}>
                  <summary>{question}</summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── 尾部 CTA ── */}
        <section className="final-cta sec-alt">
          <div className="container">
            <h2>{t('Your duo is one elevator ride away', '你的双人组只差一趟电梯')}</h2>
            <p>
              {t(
                'Upload two photos, render the 15-second 4:3 clip, add the "365" sound and an AI label — and ask the comments who should ride next.',
                '上传两张照片，渲染 15 秒 4:3 片段，挂上《365》原声和 AI 标注——再在评论区问一句：下一个想看谁？'
              )}
            </p>
            <button className="btn btn-primary btn-lg" onClick={start}>
              {t('Upload photos — start now', '上传照片，立即开始')}
              <ArrowRight size={16} />
            </button>
          </div>
        </section>
      </main>
      <ViralFooter />
    </div>
  );
}
