'use client';

/* eslint-disable @next/next/no-img-element */

import { useEffect, useState, type CSSProperties, type ReactNode } from 'react';
import { ArrowRight, Clock, Flame, Gift, ImagePlus, Play, Sparkles, Users, Video } from 'lucide-react';
import { useLocale } from 'next-intl';
import { track } from '@/shared/lib/analytics';
import { TemplateCardVideo } from '@/shared/blocks/common/lazy-video';
import { Link } from '@/core/i18n/navigation';
import { TemplateGenerator } from '@/shared/blocks/viral-home/generator';
import { ViralHeader } from '@/shared/blocks/viral-home/header';
import { ViralFooter } from '@/shared/blocks/viral-home/footer';
import { buildHowToJsonLdFromSteps } from '@/shared/lib/howto-schema';
import { getVideoCostTable } from '@/shared/lib/video-cost';
import { santaNiceListTemplates, type SantaNiceListTemplate } from './templates';
import { SANTA_NICE_LIST_FAQ } from './faq';
import { SANTA_NICE_LIST_HOW_TO_STEPS } from './steps';
import '@/shared/blocks/viral-home/home.css';

function PlatformIcon({ type }: { type: 'tiktok' | 'youtube' | 'instagram' | 'x' | 'reddit' }) {
  const paths: Record<string, ReactNode> = {
    tiktok: <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.9 2.9 0 1 1-2.31-2.84V9.25a6.35 6.35 0 1 0 5.76 6.32V8.69a8.16 8.16 0 0 0 4.77 1.52V6.79a4.85 4.85 0 0 1-1-.1z" />,
    youtube: <><path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3.02 3.02 0 0 0 .5 6.19C0 8.07 0 12 0 12s0 3.93.5 5.81a3.02 3.02 0 0 0 2.12 2.14c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 0 0 2.12-2.14C24 15.93 24 12 24 12s0-3.93-.5-5.81z"/><path fill="#fff" d="m9.55 15.57 6.27-3.57-6.27-3.57z"/></>,
    instagram: <><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></>,
    x: <path d="M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.41l-5.8-7.58-6.64 7.58H.47l8.6-9.83L0 1.15h7.59l5.24 6.93zm-1.29 19.5h2.04L6.49 3.24H4.3z" />,
    reddit: <path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm5.01 4.74a1.25 1.25 0 1 0-1.95.94l-2.91-.62a.34.34 0 0 0-.41.26l-.9 4.17c-1.87.06-3.56.62-4.79 1.5a1.76 1.76 0 1 0-.81 3.33c-.03.17-.05.35-.05.53 0 2.7 3.12 4.87 7 4.87s7-2.17 7-4.87c0-.18-.02-.36-.04-.52a1.76 1.76 0 1 0-2.95-1.11c-1.2-.86-2.85-1.42-4.68-1.49l.8-3.75 2.6.55a1.25 1.25 0 0 0 2.09-1.09zM8.6 13.02a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zm6.8 0a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 2.5 0z" />,
  };
  return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">{paths[type]}</svg>;
}

export function SantaNiceListHome({ creditsPerUsd = 12, videoCosts = getVideoCostTable(), pageUrl }: { creditsPerUsd?: number; videoCosts?: ReturnType<typeof getVideoCostTable>; pageUrl?: string }) {
  const locale = useLocale();
  const zh = locale === 'zh';
  const t = (en: string, cn: string) => zh ? cn : en;
  useEffect(() => { track('view_template', { template: 'santa_nice_list' }); }, []);
  // hero 示意默认乖巧名单卷轴（2026 主模板）；点击其他卡片可切换
  const [template, setTemplate] = useState<SantaNiceListTemplate>(santaNiceListTemplates.find((item) => item.id === 'santa-nice-list-scroll') ?? santaNiceListTemplates[0]);
  const focusGenerator = () => { document.getElementById('generator')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); };
  const choose = (item: SantaNiceListTemplate = santaNiceListTemplates[0]) => { track('click_generate', { template: 'santa_nice_list', variant: item.id }); setTemplate(item); focusGenerator(); };
  const start = () => focusGenerator();
  const features = [
    [Gift, t('One photo becomes the reveal', '一张照片，成为压轴揭晓'), t('Santa unrolls the scroll or lifts the snow globe, the sparkles settle, and the picture at the end is your child. One clear smiling photo is all the AI needs — babies, teenagers, grown-ups and pets all make the list.', '圣诞老人展开卷轴或举起雪球，金光落定，结尾那张照片就是你家孩子。AI 只需要一张清晰的笑脸照——宝宝、大孩子、大人、宠物都能上榜。')],
    [Video, t('Eleven Santa clips to remix', '十一个圣诞老人片段任选'), t('The Nice List scroll, four snow globes, the golden gift box, the fireplace sisters, the grown-up frame and a real-Santa call — pick the clip and you get its Santa, its room and its sound.', '乖巧名单卷轴、四个雪球、金色礼盒、壁炉姐妹、大人金相框、真人圣诞老人——选好片段，就得到它专属的圣诞老人、房间和声音。')],
    [Clock, t('~10 seconds, native 9:16', '约 10 秒，原生 9:16'), t('The clips run about ten seconds in vertical 9:16 — exactly the shape TikTok, Reels and Shorts want, with the sparkle payoff right at the end where loops restart.', '片段约 10 秒、9:16 竖版——正是 TikTok、Reels、Shorts 要的规格，金光压轴正好落在循环重播的起点。')],
    [Users, t('Family-safe Christmas theatre', '全家共享的圣诞小剧场'), t('Parents send the reveal to grandparents, post it as "who was good this year?", or make one for a partner who was very good this year. Only upload photos you have the right to use, and keep the AI label on when posting.', '家长们把揭晓视频发给爷爷奶奶、配文「今年谁表现好？」发布，或者给「今年表现很好」的伴侣也做一个。只上传你有权使用的照片，发布时保留 AI 标注。')],
  ] as const;
  const steps = SANTA_NICE_LIST_HOW_TO_STEPS.map((step) => [zh ? step.name.zh : step.name.en, zh ? step.text.zh : step.text.en] as const);
  const faq = SANTA_NICE_LIST_FAQ[zh ? 'zh' : 'en'];
  const howToJsonLd = buildHowToJsonLdFromSteps({
    name: t('How to make a Santa Nice List AI video', '如何制作 Santa Nice List AI 视频'),
    description: t('Pick one of eleven Santa clips, upload one photo, generate the ~10-second 9:16 reveal in minutes, download the MP4, and post with the AI label.', '十一个圣诞老人片段任选，上传一张照片，几分钟生成约 10 秒的 9:16 揭晓视频，下载 MP4，配 AI 标注发布。'),
    url: pageUrl,
    steps: steps.map(([name, text]) => ({ name, text })),
  });
  const photoTips = [
    t('One person per photo, sharp front-facing face, whole head visible — the reveal is a close-up.', '一张照片一个人、清晰正脸、整头可见——揭晓画面就是特写。'),
    t('A big smile or a laugh works best — the AI keeps the expression from your photo inside the frame.', '大笑或微笑效果最好——AI 会把照片里的表情带进相框里。'),
    t('Close-up beats full-body: frames and snow globes are small on screen.', '近景胜过全身照：相框和雪球在画面里很小。'),
    t('Christmas clothes (red sweaters, Santa hats) blend into the scene, but any outfit works — the AI matches the clip\'s light.', '圣诞穿搭（红毛衣、圣诞帽）更容易融入场景，其他穿搭也行——AI 会匹配片段的光线。'),
    t('Use photos you have permission to use — no minors without guardian consent, actors, or celebrities.', '只用你有权使用的照片——未经监护人同意不用未成年人的照片，不用演员或名人。'),
  ] as const;
  const castings = [
    [t('The baby\'s first Christmas', '宝宝的第一个圣诞'), t('The reveal grandparents replay all day', '被祖辈循环一整天的揭晓')],
    [t('The kid who tidied up all December', '整个十二月都在收拾玩具的孩子'), t('"Proof" from the North Pole', '来自北极的「官方证明」')],
    [t('Two siblings', '兄妹/姐妹俩'), t('The fireplace sisters clip fits two kids', '壁炉姐妹片段最适合两个孩子')],
    [t('The teenager who "is too old for this"', '「我长大了我才不要」的青少年'), t('On the list anyway', '反正还是上了名单')],
    [t('Your partner', '你的另一半'), t('"Very good this year" (allegedly)', '「今年表现很好」（据说）')],
    [t('The dog or the cat', '狗子或猫主子'), t('Santa\'s snow globe fits pets too', '雪球同样装得下宠物')],
  ] as const;
  return <div className="viral-home">{howToJsonLd ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} /> : null}
    <ViralHeader onStart={start}/>
    <main>
      <section className="hero"><div className="container"><div className="hero-badge"><Flame size={16}/><span>#nicelist is trending for Christmas</span></div><h1>{t('Santa Nice List ', 'Santa Nice List ')}<span className="hl">{t('AI Video Generator', 'AI 视频生成器')}</span></h1><p className="hero-sub">{t('Eleven Santa clips, one photo: Santa checks his Naughty & Nice List, the sparkles settle, and your child\'s photo appears in the golden frame, snow globe or gift box. About 10 seconds in 9:16 — credits shown before you generate, refunded automatically if a job fails.', '十一个圣诞老人片段，一张照片：圣诞老人查看淘气与乖巧名单，金光落定，你家孩子的照片出现在金色相框、雪球或礼盒里。约 10 秒 9:16——生成前显示积分，失败自动退回。')}</p><TemplateGenerator key={template.id} template={template} open embedded onOpenChange={() => {}}/></div></section>
      <section className="sec templates-section" id="templates"><div className="container"><div className="sec-head"><p className="kick">{t('Samples','表演样本')}</p><h2>{t('Choose Your Santa Nice List Clip','选择你的 Santa Nice List 片段')}</h2><p className="sub">{t('Same sparkle reveal, eleven different Santas — click a sample to load it into the generator.','同样的金光揭晓，十一种不同的圣诞老人——点击样本载入生成器。')}</p></div><div className="grid3">{santaNiceListTemplates.map((item, index) => <article className="tcard" key={item.id}><button className="tv tv-full" aria-label={`${t('Use','使用')} ${item.name[zh ? 1 : 0]}`} onClick={() => choose(item)} style={{ '--g1': item.colors[0], '--g2': item.colors[1] } as CSSProperties}><TemplateCardVideo id={item.id} colors={item.colors}/>{index === 0 && <span className="hot">HOT</span>}<span className="tv-play"><Play size={16}/></span><span className="tv-bar"><i/></span></button><div className="tmeta"><b>{item.name[zh ? 1 : 0]}</b></div><button className="use" onClick={() => choose(item)}>{t('Make this','做成我的')}</button></article>)}</div></div></section>
      <div className="logos"><p className="lbl">{t('Creators are posting ViralReel videos on','创作者们正在这些平台发布 ViralReel 视频')}</p><div className="row"><span className="soc tiktok"><PlatformIcon type="tiktok"/>TikTok</span><span className="soc youtube"><PlatformIcon type="youtube"/>YouTube Shorts</span><span className="soc instagram"><PlatformIcon type="instagram"/>Instagram Reels</span><span className="soc x"><PlatformIcon type="x"/>X / Twitter</span><span className="soc reddit"><PlatformIcon type="reddit"/>Reddit</span></div></div>
      <section className="stats"><div className="container stats-grid"><div><div className="statnum">11<em className="wide-em">{t(' Santa clips', ' 个圣诞老人片段')}</em></div><p>{t('Scroll, snow globes, gift box, real Santa','卷轴、雪球、礼盒、真人圣诞老人')}</p></div><div><div className="statnum">9:16</div><p>{t('Vertical, ready for TikTok and Reels','竖版，直接发 TikTok 和 Reels')}</p></div><div><div className="statnum">{Math.min(...videoCosts.flatMap(row => row.costs.map(item => item.credits)))}<em className="wide-em">{t(' credits / video from', ' 积分 / 条起')}</em></div><p>{t(`Top-ups available · ${creditsPerUsd} credits = $1`,`随时可加购 · ${creditsPerUsd} 积分 = 1 美元`)}</p></div></div></section>
      <section className="sec sec-alt" id="what"><div className="container"><div className="sec-head"><p className="kick">{t('What is Santa Nice List','Santa Nice List 是什么')}</p><h2>{t('The Christmas reveal meme every parent is making','家长们都在做的圣诞揭晓梗')}</h2><p className="sub">{t('Santa checks his list — and the list says your kid was very good this year.','圣诞老人查看名单——名单上写着：你家孩子今年表现非常好。')}</p></div><div className="grid4">{features.map(([Icon,title,desc]) => <div className="feat" key={title}><div className="ic"><Icon size={20}/></div><h3>{title}</h3><p>{desc}</p></div>)}</div></div></section>
      <section className="sec" id="how"><div className="container"><div className="sec-head"><p className="kick">{t('How it works','使用教程')}</p><h2>{t('How to Make a Santa Nice List AI Video','怎么制作 Santa Nice List AI 视频')}</h2><p className="sub">{t('One photo to a North Pole reveal in minutes — no app, no editor, no prompt.','一张照片，几分钟出一条北极揭晓视频——不用装 App，不用剪辑，不用写提示词。')}</p></div><div className="grid4s">{steps.map(([title,desc],i) => <div className="step" key={title}><div className="num">{i+1}</div><h3>{title}</h3><p>{desc}</p></div>)}</div></div></section>
      <section className="sec" id="guide"><div className="container guide"><div className="sec-head"><p className="kick">{t('Guide','指南')}</p><h2>{t('Santa Nice List: the trend, the story, and how to make your own','Santa Nice List：趋势、故事，以及怎么做你自己的')}</h2></div>
        <figure className="guide-fig"><img src="/templates/santa-nice-list-ai-og.jpg" alt="Santa Nice List AI video on ViralReel — Santa checking his Naughty & Nice List in his workshop" width={1200} height={630} loading="lazy"/><figcaption>{t('Make the Santa Nice List reveal on ViralReel (viralreel.app) from one photo.','在 ViralReel（viralreel.app）用一张照片制作 Santa Nice List 揭晓视频。')}</figcaption></figure>
        <h3>{t('Where Can I Make a Santa Nice List AI Video?','在哪里可以做 Santa Nice List AI 视频？')}</h3>
        <p>{t('You can create a Santa Nice List video on ViralReel. Pick one of the eleven Santa clips, upload one photo — your child, a grown-up, or the dog — and generate your own version in about 10 seconds of finished video. You can preview and download your finished 9:16 MP4 directly from ViralReel; renders usually take a few minutes.','在 ViralReel 就可以做 Santa Nice List 视频。十一个圣诞老人片段任选，上传一张照片——你家孩子、大人或宠物——生成约 10 秒的你自己的版本。完成后直接在 ViralReel 预览和下载 9:16 的 MP4；渲染通常只需几分钟。')}</p>
        <h3>{t('What Makes ViralReel Different for This AI Video Trend?','在这条 AI 视频趋势上，ViralReel 有什么不同？')}</h3>
        <p>{t('ViralReel provides eleven Santa Nice List clips in one picker, a one-photo workflow, a native 9:16 ratio with an ~10-second duration that matches the reference clips, transparent credit pricing shown before generation, automatic credit refunds for failed jobs, and downloadable watermark-free MP4 exports. Instead of editing a face into a CapCut template by hand, users pick a clip, upload one photo, and generate in the browser.','ViralReel 把十一个 Santa Nice List 片段放进同一个选择器、只需一张照片、原生 9:16 画幅加与参考片段一致的约 10 秒时长、生成前透明显示的积分价格、失败任务自动退积分，以及无水印 MP4 下载。不用手动把脸 P 进 CapCut 模板，选好片段、上传一张照片，浏览器里直接生成。')}</p>
        <h3>{t('What is the Santa Nice List AI trend?','Santa Nice List AI 趋势是什么？')}</h3>
        <p>{t('Santa\'s nice list is the old Christmas promise: Santa makes a list, checks it twice, and the kids who were good get presents. The TikTok version turns it into a short AI video. Santa sits in his workshop and reads the list, or holds a glass snow globe, or opens a golden gift box; the glass clears, the sparkles settle, and the picture at the end is your child\'s. It spreads as a CapCut template and AI remix: you add one photo, the template drops it into Santa\'s frame. Most of the big posts are from Spanish-speaking parents, captioned "quién se portó bien este año?" — who was good this year — but the video needs no words.','圣诞老人的乖巧名单是古老的圣诞承诺：圣诞老人列好名单、检查两遍，表现好的孩子有礼物。TikTok 版本把它变成了短视频：圣诞老人坐在工作坊里看名单，或举起玻璃雪球，或打开金色礼盒；玻璃变清晰、金光落定，结尾那张照片就是你家孩子。它以 CapCut 模板和 AI 混剪的形式传播：你加一张照片，模板把它放进圣诞老人的相框。大部分爆款来自西班牙语区的家长，配文 "quién se portó bien este año?"（今年谁表现好）——但视频本身不需要任何台词。')}</p>
        <h3>{t('The trend timeline: from real Santa to AI reveals','趋势时间线：从真人圣诞老人到 AI 揭晓')}</h3>
        <p>{t('October 11, 2025: a real-life Santa account starts reading kids\' names from "the official list of well-behaved kids" on TikTok and hits 16 million plays, with a new list every few days. November 15, 2025: another real-Santa account tells "Sofia" she is on the nice list, reading from his book — 9 million plays. November 24, 2025: Spanish-speaking CapCut creator @memovich01 posts a free template "to see who was good this year" — the child\'s photo appears in Santa\'s snow globe; his next snow-globe template takes off with 8.2 million plays and 336,849 uses, and @aure_cut\'s gift-box version (a golden frame rising out of Santa\'s present) reaches 6.5 million plays in December. November 2026: a new workshop template with the Naughty & Nice List scroll revives the trend — it passes 100,000 uses in its first four days.','2025 年 10 月 11 日：一个真人圣诞老人账号开始在 TikTok 上念「乖巧儿童官方名单」里的名字，拿下 1600 万播放，之后每隔几天更新一期。2025 年 11 月 15 日：另一个真人圣诞老人账号对着大书念出「Sofia 上榜了」——900 万播放。2025 年 11 月 24 日：西班牙语区 CapCut 创作者 @memovich01 发布免费模板「看看今年谁乖」——孩子的照片出现在圣诞老人的雪球里；他的下一条雪球模板爆了，820 万播放、33.6 万次使用；12 月 @aure_cut 的礼盒版（金相框从圣诞老人的礼物盒里升起）拿下 650 万播放。2026 年 11 月：带「淘气与乖巧名单」卷轴的新版工作坊模板让趋势回火——上线 4 天使用量破 10 万。')}</p>
        <h3>{t('Why did it go viral?','它为什么会爆火？')}</h3>
        <p>{t('Three forces stack up. First, the payoff is emotional, not ironic: unlike most memes, the joke is not on anyone — it is a 10-second "proof" from the North Pole that your child made the list, which parents send straight to grandparents. Second, one photo is the whole job: no casting, no editing, no captions needed, so a parent can make one in a minute on their phone. Third, December timing: every family already asks "who was good this year?" in the weeks before Christmas, and the trend gives that question a shareable answer.','三层力量叠在一起。第一，压轴是情感而非嘲讽：和大多数梗不同，这个梗不调侃任何人——它是来自北极的 10 秒「官方证明」，证明你家孩子上榜了，家长们会直接转发给祖辈。第二，一张照片就是全部工作：不用选角、不用剪辑、不用配字，家长在手机上一分钟能做一条。第三，十二月的时间点：圣诞前几周每个家庭都在问「今年谁表现好」，这个趋势给这个问题一个可以转发的答案。')}</p>
        <h3>{t('Two kinds of Santa Nice List videos','两类 Santa Nice List 视频')}</h3>
        <p>{t('In one kind, a real-life Santa reads names off his list or his book, and parents comment their child\'s name hoping to be read next. In the other, an AI Santa reveals a photo — the template on this page. The AI version is the one you can make in a minute: it shows your child\'s face, not just a name. The real-Santa clip is on this page for comparison and inspiration.','一类是真人圣诞老人对着名单或大书念名字，家长在评论区写下孩子的名字期待被念到。另一类是 AI 圣诞老人揭晓照片——就是本页的模板。AI 版是你一分钟能做出来的那个：它展示的是你家孩子的脸，而不只是名字。真人圣诞老人片段放在本页仅供对比和灵感参考。')}</p>
        <h3>{t('Who should I put on the Nice List?','乖巧名单该写谁？')}</h3>
        <table className="w-full text-sm">{castings.map(([who, why], i) => <tr key={i} className="border-b border-zinc-200"><td className="py-2 pr-4"><strong>{who}</strong></td><td className="py-2">{why}</td></tr>)}</table>
        <h3>{t('What photo works best?','用什么照片最好？')}</h3>
        <ul className="why-list">{photoTips.map((tip) => <li key={tip}><ImagePlus size={15}/>{tip}</li>)}</ul>
        <h3>{t('How does the generator work?','生成器是怎么工作的？')}</h3>
        <p>{t('ViralReel uses the selected Santa clip as a reference and AI image-to-video technology to rebuild its sparkle reveal with your photo inside. The reference guides the scene, the prop, the camera moves and the timing; your photo guides the face, hair and expression in the final picture. Sound handling depends on the selected model — if the music is missing, add a Christmas track from your platform\'s music library when posting. Depending on the selected model, results may vary slightly from the preview; each render is an AI-created interpretation.','ViralReel 以所选圣诞老人片段为参考，用 AI 图生视频技术把揭晓重演一遍、把你的照片放进压轴画面。参考片段引导场景、道具、运镜和时序；你的照片引导最终画面里的脸、发型和表情。声音处理取决于所选模型——如果缺音乐，发布时从平台曲库添加圣诞音乐。根据所选模型不同，成片可能与预览略有差异；每次渲染都是一次 AI 创作。')}</p>
        <h3>{t('How do I post my Santa Nice List video on TikTok?','怎么把 Santa Nice List 视频发到 TikTok？')}</h3>
        <p>{t('Download the 9:16 MP4, open TikTok and tap Create (+) to upload it, add a Christmas sound from the platform\'s music library if the export has no audio, and keep the caption in the trend\'s own language — "who was good this year?", "#nicelist", or "he made the list". Enable the AI-generated content label in the post settings: TikTok requires disclosure when a video realistically shows events that did not happen, and a Santa reveal is exactly that.','下载 9:16 的 MP4，打开 TikTok 点「+」上传，导出没声音就从平台曲库加一段圣诞音乐，文案用趋势自己的话——「who was good this year?」「#nicelist」「他上榜了」。在发布设置里打开 AI 生成内容标注：当视频逼真呈现「实际没发生的事」时 TikTok 要求披露，圣诞老人揭晓正属于此类。')}</p>
        <h3>{t('Is the Santa Nice List video AI? Is it official?','Santa Nice List 视频是 AI 做的吗？是官方的吗？')}</h3>
        <p>{t('Yes, the template videos are AI — honest posts carry the AI-generated label, and TikTok auto-labels many of the trend\'s biggest clips the same way. No, it is not official: ViralReel is an independent AI video platform, and its Santa Nice List templates are fan-made tools not endorsed by the original CapCut creators, the TikTok accounts that started the trend, or any rights holders. Use photos of yourself or people who agreed — for kids, with their guardian\'s consent — and keep the AI label on when you post.','是 AI 做的——诚实的发布者都会带 AI 生成标注，TikTok 也会给趋势里很多大爆款自动打上同样的标签。它不是官方产品：ViralReel 是独立的 AI 视频平台，Santa Nice List 模板是粉丝向工具，未获得原 CapCut 创作者、发起趋势的 TikTok 账号或任何版权方的背书。只用自己或经同意的照片——孩子需经监护人同意——发布时保留 AI 标注。')}</p>
        <p className="guide-more"><Link href="/gangstas-paradise-ai-template">{t("Gangsta's Paradise AI template","Gangsta's Paradise AI 模板")}</Link> · <Link href="/grandpa-said-hed-handle-dinner-ai-template">{t('Grandpa Dinner AI template','Grandpa Dinner AI 模板')}</Link> · <Link href="/tiny-desk-outstanding-ai-template">{t('Tiny Desk Outstanding AI template','Tiny Desk Outstanding AI 模板')}</Link> · <Link href="/vossi-bop-dance-ai-template">{t('Vossi Bop Dance AI template','Vossi Bop Dance AI 模板')}</Link> · <Link href="/">{t('Explore More AI Templates','浏览更多 AI 模板')}</Link> · <Link href="/pricing">{t('Credit packs','积分包')}</Link></p>
      </div></section>
      <section className="sec sec-alt" id="faq"><div className="container"><div className="sec-head"><p className="kick">{t('FAQ','常见问题')}</p><h2>{t('Frequently Asked Questions About Santa Nice List','关于 Santa Nice List 的常见问题')}</h2></div><div className="faq-list">{faq.map(([question,answer],i) => <details key={question} open={i === 0}><summary>{question}</summary><p>{answer}</p></details>)}</div></div></section>
      <section className="sec" id="related"><div className="container"><div className="sec-head"><p className="kick">{t('Related','相关')}</p><h2>{t('Learn More About the Santa Nice List Trend','了解更多 Santa Nice List 内容')}</h2></div><div className="cluster">
        <div><h3>{t('More Christmas-ready templates','更多节日模板')}</h3><Link href="/gangstas-paradise-ai-template">{t("Gangsta's Paradise","Gangsta's Paradise")}</Link><Link href="/grandpa-said-hed-handle-dinner-ai-template">{t('Grandpa Said He\'d Handle Dinner','Grandpa Dinner')}</Link><Link href="/sasha-la-catrina-ai-template">{t('Sasha La Catrina','Sasha La Catrina')}</Link></div>
        <div><h3>{t('More meme templates','更多梗图模板')}</h3><Link href="/vossi-bop-dance-ai-template">{t('Vossi Bop Dance','Vossi Bop Dance')}</Link><Link href="/bicep-heart-ai-template">{t('Bicep Heart','Bicep Heart')}</Link><Link href="/">{t('Explore More AI Templates','浏览更多 AI 模板')}</Link></div>
      </div></div></section>
      <section className="final-cta sec-alt"><div className="container"><h2>{t('Put Your Kid on the Nice List','把你家孩子写上乖巧名单')}</h2><p>{t('One photo, one Santa clip, one golden reveal — ready before Christmas Eve.','一张照片、一个圣诞老人片段、一次金色揭晓——平安夜前就能做好。')}</p><button className="btn btn-primary btn-lg" onClick={start}>{t('Make My Santa Nice List Video','生成我的 Santa Nice List 视频')}<ArrowRight size={16}/></button></div></section>
    </main>
    <ViralFooter/>
  </div>;
}
