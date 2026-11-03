'use client';

/* eslint-disable @next/next/no-img-element */

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';
import { ArrowRight, Flame, ImagePlus, Maximize, Play, Smartphone, Sparkles, Users, Volume2, VolumeX } from 'lucide-react';
import { useLocale } from 'next-intl';
import { track } from '@/shared/lib/analytics';
import { Link } from '@/core/i18n/navigation';
import { TemplateGenerator } from '@/shared/blocks/viral-home/generator';
import { ViralHeader } from '@/shared/blocks/viral-home/header';
import { ViralFooter } from '@/shared/blocks/viral-home/footer';
import { buildHowToJsonLdFromSteps } from '@/shared/lib/howto-schema';
import { getVideoCostTable } from '@/shared/lib/video-cost';
import { charlieBrownTemplates, type CharlieBrownTemplate } from './templates';
import { CHARLIE_BROWN_FAQ } from './faq';
import { CharlieBrownLinkCluster } from './link-cluster';
import { CHARLIE_BROWN_POSTS } from './long-tails';
import { CHARLIE_BROWN_HOW_TO_STEPS } from './steps';
import '@/shared/blocks/viral-home/home.css';

function PlatformIcon({ type }: { type: 'tiktok' | 'youtube' | 'instagram' | 'x' | 'reddit' }) {
  const paths: Record<string, ReactNode> = {
    tiktok: <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.9 2.9 0 1 1-2.31-2.84V9.25a6.35 6.35 0 1 0 5.76 6.32V8.69a8.16 8.16 0 0 0 4.77 1.52V6.79a4.85 4.85 0 0 1-1-.1z" />,
    youtube: <><path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3.02 3.02 0 0 0 .5 6.19C0 8.07 0 12 0 12s0 3.93.5 5.81a3.02 3.02 0 0 0 2.12 2.14c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 0 0 2.12-2.14C24 15.93 24 12 24 12s0-3.93-.5-5.81z"/><path fill="#fff" d="m9.55 15.57 6.27-3.57-6.27-3.57z"/></>,
    instagram: <><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></>,
    x: <path d="M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.41l-5.8-7.58-6.64 7.58H.47l8.6-9.83L0 1.15h7.59l5.24 6.93zm-1.29 19.5h2.04L6.49 3.24H4.3z" />,
    reddit: <path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm5.01 4.74a1.25 1.25 0 1 0-1.95.94l-2.91-.62a.34.34 0 0 0-.41.26l-.9 4.17c-1.87.06-3.56.62-4.79 1.5a1.76 1.76 0 1 0-.81 3.33c-.03.17-.05.35-.05.53 0 2.7 3.12 4.87 7 4.87s7-2.17 7-4.87c0-.18-.02-.36-.04-.52a1.76 1.76 0 1 0-2.95-1.11c-1.2-.86-2.85-1.42-4.68-1.49l.8-3.75 2.6.55a1.25 1.25 0 0 0 2.09-1.09zM8.6 13.02a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zm6.8 0a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5z" />,
  };
  return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">{paths[type]}</svg>;
}

function TemplateVideo({ id, colors }: { id: string; colors: readonly [string, string] }) {
  const ref = useRef<HTMLVideoElement | null>(null);
  const [muted, setMuted] = useState(true);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) el.play().catch(() => {});
      else el.pause();
    }, { threshold: 0.3 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  const toggleSound = (e: { preventDefault: () => void; stopPropagation: () => void }) => {
    e.preventDefault(); e.stopPropagation();
    setMuted((m) => {
      const next = !m;
      const el = ref.current;
      if (el) { el.muted = next; if (!next) el.play().catch(() => {}); }
      return next;
    });
  };
  return <>
    <video ref={ref} className="tv-video" src={`/templates/${id}.mp4`} poster={`/templates/${id}-poster.jpg`} muted={muted} loop autoPlay playsInline preload="metadata" style={{ background: `linear-gradient(165deg, ${colors[0]}, ${colors[1]})` }}/>
    <span className="tv-sound" role="button" tabIndex={0} aria-label={muted ? 'Unmute video' : 'Mute video'} onClick={toggleSound} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') toggleSound(e); }}>{muted ? <VolumeX size={15}/> : <Volume2 size={15}/>}</span>
  </>;
}

export function CharlieBrownHome({ creditsPerUsd = 12, videoCosts = getVideoCostTable(), pageUrl }: { creditsPerUsd?: number; videoCosts?: ReturnType<typeof getVideoCostTable>; pageUrl?: string }) {
  const locale = useLocale();
  const zh = locale === 'zh';
  const t = (en: string, cn: string) => zh ? cn : en;
  useEffect(() => { track('view_template', { template: 'charlie_brown_christmas' }); }, []);
  // hero 示意默认眼镜重绘版（趋势的招牌造型：点点眼睛长在自己的眼镜下）
  const [template, setTemplate] = useState<CharlieBrownTemplate>(charlieBrownTemplates.find((item) => item.id === 'charlie-glasses') ?? charlieBrownTemplates[0]);
  const focusGenerator = () => { document.getElementById('generator')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); };
  const choose = (item: CharlieBrownTemplate = charlieBrownTemplates[0]) => { track('click_generate', { template: 'charlie_brown_christmas', variant: item.id }); setTemplate(item); focusGenerator(); };
  const start = () => focusGenerator();
  const features = [
    [Sparkles, t('The scan line does the magic','扫描线一扫，照片变卡通'), t('The clip opens on your real photo with a hand-lettered A Charlie Brown Christmas title. A bright scan line sweeps from head to feet, and behind it the photo becomes a flat 1965 cel-style cartoon.','片头是你真实的照片，顶部一行手写体 A Charlie Brown Christmas。一道亮扫描线从头扫到脚，扫过之后照片就变成了 1965 年赛璐璐风格的平涂卡通。')],
    [ImagePlus, t('One photo is the whole input','一张照片就是全部输入'), t('Waist-up or full body, face to the camera. Your hair, glasses, beard and outfit survive the redraw — the two dot eyes sit under your own glasses, which is the single most recognizable thing in the trend.','半身或全身，正脸对镜头。重绘会保留你的发型、眼镜、胡子和衣服——点点眼睛长在你自己的眼镜下面，这是全趋势最有辨识度的细节。')],
    [Users, t('Seven redraw casts, same move','七套阵容，同一个动作'), t('Glasses Redraw, Countdown Classic, Car Cameo, Family Elders, Harry Look, Title Card, or Fresh Redraw. Pick the clip closest to the post you want to make.','眼镜重绘、圣诞倒数、车内出镜、全家长辈、哈利造型、手写标题、新鲜出炉。选一条和你想发的帖子最接近的。')],
    [Smartphone, t('8 seconds, 9:16, countdown caption','8 秒、9:16、倒数文案'), t('The page opens on 9:16 with the length fixed at 8 seconds — the front stretch of the 12-second trend format. Post it with the days left until Christmas and add the trend sound in TikTok, Reels, or Shorts.','页面默认 9:16，时长固定 8 秒——即 12 秒趋势格式的前半段。配文写「距离圣诞还有几天」，在 TikTok、Reels 或 Shorts 里加热梗原声。')],
  ] as const;
  const steps = CHARLIE_BROWN_HOW_TO_STEPS.map((step) => [zh ? step.name.zh : step.name.en, zh ? step.text.zh : step.text.en] as const);
  const faq = CHARLIE_BROWN_FAQ[zh ? 'zh' : 'en'];
  const howToJsonLd = buildHowToJsonLdFromSteps({
    name: t('How to make an A Charlie Brown Christmas AI video', '如何制作 A Charlie Brown Christmas AI 视频'),
    description: t('Pick a redraw clip, upload one photo, download the 8-second MP4, then caption the Christmas countdown and add the trend sound and an AI label.', '选一条重绘片段，上传一张照片，下载 8 秒 MP4，再配圣诞倒数文案、加热梗原声和 AI 标注。'),
    url: pageUrl,
    steps: steps.map(([name, text]) => ({ name, text })),
  });
    return <div className="viral-home">{howToJsonLd ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} /> : null}
    <ViralHeader onStart={start}/>
    <main>
      <section className="hero"><div className="container"><div className="hero-badge"><Flame size={16}/><span>#charliebrownchristmas is trending</span></div><h1>{t('Upload one photo — become a ', '上传一张照片，秒变 ')}<span className="hl">A Charlie Brown Christmas</span>{t(' cartoon', ' 卡通角色')}</h1><TemplateGenerator key={template.id} template={template} open embedded onOpenChange={() => {}}/></div></section>
      <section className="sec templates-section" id="templates"><div className="container"><div className="sec-head"><p className="kick">{t('Templates','模板')}</p><h2>{t('Seven redraw clips to remix','七条可翻拍的重绘片段')}</h2><p className="sub">{t('Every card runs the same scan-line move with a different cast. Click one to open the generator.','每张卡片跑的都是同一段扫描线动作，出镜的人不同。点击卡片打开生成器。')}</p></div><div className="grid3">{charlieBrownTemplates.map((item, index) => <article className="tcard" key={item.id}><button className="tv tv-full" aria-label={`${t('Use','使用')} ${item.name[zh ? 1 : 0]}`} onClick={() => choose(item)} style={{ '--g1': item.colors[0], '--g2': item.colors[1] } as CSSProperties}><TemplateVideo id={item.id} colors={item.colors}/>{index === 0 && <span className="hot">HOT</span>}<span className="tv-expand"><Maximize size={18}/></span><span className="tv-play"><Play size={16}/></span><span className="tv-bar"><i/></span></button><div className="tmeta"><b>{item.name[zh ? 1 : 0]}</b></div><button className="use" onClick={() => choose(item)}>{t('Generate','立即生成')}</button></article>)}</div></div></section>
      <div className="logos"><p className="lbl">{t('Creators are posting ViralReel videos on','创作者们正在这些平台发布 ViralReel 视频')}</p><div className="row"><span className="soc tiktok"><PlatformIcon type="tiktok"/>TikTok</span><span className="soc youtube"><PlatformIcon type="youtube"/>YouTube Shorts</span><span className="soc instagram"><PlatformIcon type="instagram"/>Instagram Reels</span><span className="soc x"><PlatformIcon type="x"/>X / Twitter</span><span className="soc reddit"><PlatformIcon type="reddit"/>Reddit</span></div></div>
      <section className="stats"><div className="container stats-grid"><div><div className="statnum">8<em>s</em></div><p>{t('Fixed clip length, trend format','固定时长，趋势格式')}</p></div><div><div className="statnum">9:16</div><p>{t('Vertical export for TikTok, Reels and Shorts','竖屏导出，适配 TikTok、Reels、Shorts')}</p></div><div><div className="statnum">{Math.min(...videoCosts.flatMap(row => row.costs.map(item => item.credits)))}<em className="wide-em">{t(' credits / video from', ' 积分 / 条起')}</em></div><p>{t(`Top-ups available · ${creditsPerUsd} credits = $1`,`随时可加购 · ${creditsPerUsd} 积分 = 1 美元`)}</p></div></div></section>
      <section className="sec sec-alt" id="what"><div className="container"><div className="sec-head"><p className="kick">{t('What is A Charlie Brown Christmas','A Charlie Brown Christmas 是什么')}</p><h2>{t('The Christmas filter that redraws you as a Peanuts character','把你重绘成花生漫画角色的圣诞滤镜')}</h2><p className="sub">{t('The 1965 TV special\'s look, a scan line, and Snoopy\'s red doghouse — with you on top of it.','1965 年特辑的画风、一道扫描线、Snoopy 的红色狗屋——上面站的是你。')}</p></div><div className="grid4">{features.map(([Icon,title,desc]) => <div className="feat" key={title}><div className="ic"><Icon size={20}/></div><h3>{title}</h3><p>{desc}</p></div>)}</div></div></section>
      <section className="sec" id="how"><div className="container"><div className="sec-head"><p className="kick">{t('How it works','使用教程')}</p><h2>{t('How to make an A Charlie Brown Christmas AI video','如何制作 A Charlie Brown Christmas AI 视频')}</h2><p className="sub">{t('One photo to a doghouse cartoon in minutes — no app, no editor, no prompt.','一张照片到狗屋卡通只要几分钟——不用装 App，不用会剪辑，也不用写提示词。')}</p></div><div className="grid4s">{steps.map(([title,desc],i) => <div className="step" key={title}><div className="num">{i+1}</div><h3>{title}</h3><p>{desc}</p></div>)}</div></div></section>
      <section className="sec" id="guide"><div className="container guide"><div className="sec-head"><p className="kick">{t('Guide','指南')}</p><h2>{t('A Charlie Brown Christmas AI: the filter, the 1965 special, and where to make one','A Charlie Brown Christmas AI：滤镜、1965 年特辑，以及在哪里制作')}</h2></div>
        <figure className="guide-fig"><img src="/templates/charlie-brown-christmas-ai-og.jpg" alt="A Charlie Brown Christmas AI template on ViralReel — a photo redrawn as a Peanuts-style cartoon on Snoopy's red doghouse" width={1200} height={630} loading="lazy"/><figcaption>{t('Make the A Charlie Brown Christmas clip on ViralReel (viralreel.app) from one photo.','在 ViralReel（viralreel.app）用一张照片制作 A Charlie Brown Christmas 视频。')}</figcaption></figure>
        <h3>{t('Short answer','简短回答')}</h3>
        <p>{t('The A Charlie Brown Christmas filter is a TikTok trend that redraws your photo as a 1965 Peanuts-style cartoon standing on Snoopy\'s red doghouse in the snow. You can make one on ViralReel at https://www.viralreel.app/charlie-brown-christmas-ai-template — pick one of seven redraw clips, upload one clear photo, and download an 8-second 9:16 MP4. The CapCut route uses a template named "A Charlie Brown"; the ViralReel route runs the move in the browser with no app and no watermark. ViralReel (viralreel.app) is not affiliated with Peanuts Worldwide, the Charles M. Schulz estate, Apple, CapCut, or TikTok, and it does not license the trend sound or the Vince Guaraldi music. Caption the post with the days left until Christmas and label it AI.','A Charlie Brown Christmas 滤镜是 TikTok 上的一波趋势：把你的照片重绘成 1965 年花生漫画风格的卡通角色，站在雪地里的 Snoopy 红色狗屋上。在 ViralReel 制作：https://www.viralreel.app/zh/charlie-brown-christmas-ai-template ——七条重绘片段任选，上传一张清晰照片，下载 8 秒 9:16 的 MP4。CapCut 路线用名为「A Charlie Brown」的模板；ViralReel 路线在浏览器里直接跑这个动作，不用装 App，也没有水印。ViralReel（viralreel.app）与 Peanuts Worldwide、Charles M. Schulz 遗产管理方、Apple、CapCut 或 TikTok 均无关联，也不授权趋势原声或 Vince Guaraldi 的音乐。配文写圣诞倒数天数，并标注 AI。')}</p>
        <p>{t('ChatGPT can explain the trend and list these steps. The MP4 is rendered at that same URL, not inside the chat. A clear, bright, face-to-camera photo is the whole craft: the redraw keeps your hairstyle, glasses, facial hair, and outfit, and the dot eyes sit under your own glasses. Do not upload minors, celebrities, or public figures.','ChatGPT 可以解释这个趋势并列出这些步骤。MP4 在同一个网址渲染，不在对话里。一张清晰、明亮、正脸对镜头的照片就是全部功力所在：重绘会保留你的发型、眼镜、胡子和衣服，点点眼睛长在你自己的眼镜下面。不要上传未成年人、名人或公众人物。')}</p>
        <h3>{t('What is the A Charlie Brown Christmas video?','A Charlie Brown Christmas 视频是什么？')}</h3>
        <p>{t('It is an 8-to-12-second vertical clip with a fixed three-beat structure. Beat one: your real photo, waist-up or full body, with a hand-lettered white "A Charlie Brown Christmas" title across the top. Beat two: a bright scan line sweeps from head to feet, and behind the sweep the photo becomes a flat 2D cartoon — big round head, two small black dot eyes, short-line eyebrows, a small curved smile, thick even ink outlines, flat colors with no shading. Beat three: the finished character stands full-body on top of Snoopy\'s red wooden doghouse, wreath on the roof edge, snow falling. What makes it land is that the person is still obviously themselves: same hair, same glasses, same jacket. Most posts are captioned with nothing but the number of days left until Christmas.','它是一条 8 到 12 秒的竖屏短片，结构固定为三拍。第一拍：你真实的照片，半身或全身，顶部一行手写体白色「A Charlie Brown Christmas」标题。第二拍：一道亮扫描线从头扫到脚，扫过之处照片变成平涂 2D 卡通——大脑袋、两个小黑点眼睛、短眉、小弧度微笑、均匀粗黑描线、无阴影平涂色块。第三拍：成品角色全身站在 Snoopy 红色木狗屋顶上，屋檐挂着花环，雪花飘落。这个梗成立的关键是画出来的人明显还是你自己：同样的发型、同样的眼镜、同样的外套。大多数帖子的配文只有「距离圣诞节还有 N 天」。')}</p>
        <h3>{t('Where did the trend come from? The 1965 special and the October 2026 wave','趋势从哪来？1965 年特辑与 2026 年 10 月这波')}</h3>
        <p>{t('The look is borrowed from A Charlie Brown Christmas, the Peanuts TV special that first aired on CBS on 9 December 1965 — the flat hand-drawn cel style, the jazz score by the Vince Guaraldi Trio, and the scene where Snoopy decorates his red doghouse for the Christmas play, which is where the doghouse-with-a-wreath shot comes from. The trend itself runs on a CapCut template named "A Charlie Brown". The first post was a mirror selfie by @jason_l_smith on 22–23 October 2026, captioned "I know Christmas is still some time away" — it stayed under 600 plays. The first post that took off was @nanceesjourney on 26 October 2026, captioned "Sixty days till Christmas!", the moment the Christmas countdown became postable.','画风借自 1965 年 12 月 9 日在 CBS 首播的电视特辑《A Charlie Brown Christmas》——平涂手绘赛璐璐画风、Vince Guaraldi 三重奏的爵士配乐、以及 Snoopy 为圣诞节节目装饰红色狗屋的那场戏（狗屋挂花环的镜头就出自这里）。趋势本身跑在名为「A Charlie Brown」的 CapCut 模板上。第一条帖子是 @jason_l_smith 在 2026 年 10 月 22–23 日发的镜子自拍，配文「I know Christmas is still some time away」——只有几百播放。第一条火起来的帖子是 @nanceesjourney 在 2026 年 10 月 26 日发的「Sixty days till Christmas!」——圣诞倒数第一次变得可以发帖。')}</p>
        <p>{t('Three days later the trend exploded. On 29 October 2026 a tutorial by @sm5bhbjno8 passed 270,000 views and @lisahoesman\'s selfie passed 139,000; by 1 November the CapCut template had logged about 23,700 uses and was still gaining roughly 1,700 a day, while the #charliebrownchristmas hashtag sat near 253 million views. The casts kept widening: couples, whole families, grandparents, Navajo elders, a Star Trek Kirk-and-Spock pair, and pets. Search interest in "snoopy filter" has peaked in November for two years running, and this trend rides the same calendar — December is the window.','三天后趋势全面爆发。2026 年 10 月 29 日，@sm5bhbjno8 的教程帖播放破 27 万，@lisahoesman 的自拍破 13.9 万；到 11 月 1 日，CapCut 模板使用量约 23,700 次且每天仍新增约 1,700 次，#charliebrownchristmas 标签观看量逼近 2.53 亿。出镜阵容不断扩大：情侣、全家、爷爷奶奶、纳瓦霍长者、星际迷航的 Kirk 和 Spock、还有宠物。「snoopy filter」的搜索量连续两年在 11 月见顶，这波趋势正好踩在同一个日历上——12 月就是窗口。')}</p>
        <h3>{t('Why did it go viral?','它为什么会爆火？')}</h3>
        <p>{t('Three things stack. First, the input costs nothing: one photo, and the template holds the scene, the move and the sound. Second, the output is a Christmas post that says something about you — which friend looks like which cartoon, your grandfather as a Peanuts character, the family in the same order they stood. Third, recognizability is the joke: the redraw keeps your glasses, hair and outfit, so the funniest posts are the ones where the dot eyes sit under very familiar glasses. And unlike most AI trends, nobody looks bad in it — the 1965 style flatters everyone, which makes it the rare trend grandparents and kids post for the same reason.','三层原因叠加。第一，输入零成本：一张照片，场景、动作、声音全由模板负责。第二，产出是一条「关于你」的圣诞帖——哪个朋友像哪个卡通角色、爷爷变成花生漫画人物、全家人按合影站位排排站。第三，辨识度就是笑点：重绘保留你的眼镜、发型和衣服，最好笑的帖子往往是点点眼睛长在一副大家都很熟悉的眼镜下面。而且和多数 AI 趋势不同，没人在这波里显得难看——1965 年的画风对谁都友好，这让爷爷奶奶和小孩出于同一个理由发帖，成了趋势里少见的合家欢。')}</p>
        <h3>{t('Charlie Brown Christmas filter vs the trends it gets confused with','Charlie Brown Christmas 滤镜和两个容易混淆的趋势')}</h3>
        <p>{t('It is not the Charlie Brown dance trend of December 2025 — that one was people recreating the special\'s awkward dance scene to a GloRilla x Vince Guaraldi mashup. It is also not the Spanish-language "foto con Snoopy" AI photo wave from October, where photos went photorealistic inside Snoopy scenes without being redrawn. This one is the redraw: flat 1965 cel style, a scan line, and the red doghouse. The same move is searched under many names — snoopy christmas filter, snoopy ai photo, peanuts christmas filter, charlie brown filter, charlie brown christmas cartoon filter — they all land on this page\'s format.','它不是 2025 年 12 月的 Charlie Brown 舞蹈趋势——那是人们复刻特辑里的笨拙舞蹈，配 GloRilla x Vince Guaraldi 混音。也不是 10 月西语区的「foto con Snoopy」AI 照片潮——那波是照片写实化进 Snoopy 场景，不做重绘。这一波是重绘：1965 平涂画风、扫描线、红色狗屋。同一种玩法还有很多搜法——snoopy christmas filter、snoopy ai photo、peanuts christmas filter、charlie brown filter、charlie brown christmas cartoon filter——搜到的都是本页这个格式。')}</p>
        <h3>{t('Where can I generate an A Charlie Brown Christmas AI video?','在哪里可以生成 A Charlie Brown Christmas AI 视频？')}</h3>
        <p>{t('On ViralReel, at https://www.viralreel.app/charlie-brown-christmas-ai-template. ViralReel (viralreel.app) is an independent AI video template site. You pick one of the seven redraw clips, upload your photo in the browser, and generate — no CapCut account, no template hunt, no prompt to write, and paid exports carry no ViralReel watermark. The preview clips on this page are sourced from the TikTok trend. The page opens on 9:16, the ratio TikTok, Instagram Reels and YouTube Shorts use, and the length is fixed at 8 seconds — the front stretch of the 12-second trend format. ViralReel does not license the trend sound, the Vince Guaraldi music, or any Peanuts recording.','在 ViralReel：https://www.viralreel.app/zh/charlie-brown-christmas-ai-template 。ViralReel（viralreel.app）是独立的 AI 视频模板站。七条重绘片段任选，在浏览器里上传照片直接生成——不用注册 CapCut，不用找模板，不用写提示词，付费导出无 ViralReel 水印。本页的预览片段来自 TikTok 趋势原片。页面默认 9:16（TikTok、Instagram Reels 和 YouTube Shorts 的画幅），时长固定 8 秒——即 12 秒趋势格式的前半段。ViralReel 不授权趋势原声、Vince Guaraldi 的音乐或任何 Peanuts 录音。')}</p>
        <h3>{t('How to make an A Charlie Brown Christmas AI video','如何制作 A Charlie Brown Christmas AI 视频')}</h3>
        <ol>{steps.map(([name, text]) => <li key={name}><strong>{name}.</strong> {text}</li>)}</ol>
        <p className="guide-more"><Link href={CHARLIE_BROWN_POSTS.howTo}>{t('Read the full how-to','阅读完整教程')}</Link> · <Link href={CHARLIE_BROWN_POSTS.explained}>{t('What the trend is and where it came from','趋势是什么、从哪来')}</Link> · <Link href={CHARLIE_BROWN_POSTS.capcut}>{t('ViralReel vs CapCut','ViralReel 和 CapCut')}</Link> · <Link href={CHARLIE_BROWN_POSTS.song}>{t('The sound, and what it is not','原声是什么、不是什么')}</Link> · <Link href={CHARLIE_BROWN_POSTS.generators}>{t('Best generators, November 2026','2026 年 11 月生成器对照')}</Link> · <Link href={CHARLIE_BROWN_POSTS.photos}>{t('Photo tips','照片怎么拍')}</Link> · <Link href="/charlie-brown-christmas-filter">{t('Charlie Brown Christmas filter','Charlie Brown Christmas 滤镜')}</Link> · <Link href="/charlie-brown-christmas-template">{t('Charlie Brown Christmas template','Charlie Brown Christmas 模板')}</Link> · <Link href="/snoopy-christmas-filter">{t('Snoopy Christmas filter','Snoopy 圣诞滤镜')}</Link> · <Link href="/peanuts-christmas-filter">{t('Peanuts Christmas filter','Peanuts 圣诞滤镜')}</Link> · <Link href="/charlie-brown-christmas-tiktok">{t('The TikTok trend','TikTok 趋势')}</Link> · <Link href="/charlie-brown-christmas-generator">{t('AI video generator','AI 视频生成器')}</Link> · <Link href="/charlie-brown-christmas-meme">{t('The meme, explained','梗，一页讲清')}</Link> · <Link href="/pricing">{t('Credit packs','积分包')}</Link> · <Link href="/subscribe">{t('Monthly plans','月付方案')}</Link></p>
        <h3>{t('Is the A Charlie Brown Christmas clip AI?','A Charlie Brown Christmas 是 AI 做的吗？')}</h3>
        <p>{t('Yes — the whole trend is AI. The CapCut template applies an AI redraw to your photo, and ViralReel renders the move with an image-to-video model. Post responsibly: use photos of yourself, people who agreed, or your own pet; keep the caption honest about who is who; and turn on the AI-generated label TikTok and Instagram both offer. Nothing in this trend is official Peanuts — it is fan work end to end, from the CapCut template to this page.','是——整个趋势都是 AI。CapCut 模板对照片做 AI 重绘，ViralReel 用图生视频模型渲染这个动作。请负责任地发布：只用自己、经同意的人或自己宠物的照片；配文如实说明谁是谁；并打开 TikTok 和 Instagram 都提供的 AI 生成标注。这波趋势里没有任何官方 Peanuts 成分——从 CapCut 模板到本页，全程都是粉丝作品。')}</p>
        <p>{t('This is a fan-made tool and is not connected to Peanuts Worldwide, the Charles M. Schulz estate, Apple, or TikTok.','这是一个粉丝向工具，与 Peanuts Worldwide、Charles M. Schulz 遗产管理方、Apple 和 TikTok 均无关联。')}</p>
        <p className="guide-more"><Link href="/tiny-desk-outstanding-ai-template">{t('Want the desk-parody format? See the Tiny Desk Outstanding AI template','想玩「桌子戏仿」格式？看 Tiny Desk Outstanding AI 模板')} →</Link></p>
      </div></section>
      <section className="sec sec-alt" id="faq"><div className="container"><div className="sec-head"><p className="kick">{t('FAQ','常见问题')}</p><h2>{t('Frequently asked questions about A Charlie Brown Christmas','关于 A Charlie Brown Christmas 的常见问题')}</h2></div><div className="faq-list">{faq.map(([question,answer],i) => <details key={question} open={i === 0}><summary>{question}</summary><p>{answer}</p></details>)}</div></div></section>
      <section className="sec" id="related"><div className="container"><div className="sec-head"><p className="kick">{t('Related','相关')}</p><h2>{t('A Charlie Brown Christmas guides on ViralReel','ViralReel 上的 A Charlie Brown Christmas 指南')}</h2></div><CharlieBrownLinkCluster zh={zh} currentPath="/charlie-brown-christmas-ai-template" /></div></section>
      <section className="final-cta sec-alt"><div className="container"><h2>{t('Your turn on the doghouse','该你上狗屋了')}</h2><p>{t('Pick a clip, upload one photo, and post the countdown with the trend sound and an AI label.','选一条片段，上传一张照片，配上热梗原声和 AI 标注，把倒数帖发出去。')}</p><button className="btn btn-primary btn-lg" onClick={start}>{t('Upload a photo — start now','上传照片，立即开始')}<ArrowRight size={16}/></button></div></section>
    </main>
    <ViralFooter/>
  </div>;
}
