'use client';

/* eslint-disable @next/next/no-img-element */

import { useEffect, useState, type CSSProperties, type ReactNode } from 'react';
import { ArrowRight, Check, Fish, Flame, ImagePlus, Maximize, Music, Play, Smartphone, Users, Video } from 'lucide-react';
import { useLocale } from 'next-intl';
import { track } from '@/shared/lib/analytics';
import { TemplateCardVideo } from '@/shared/blocks/common/lazy-video';
import { Link } from '@/core/i18n/navigation';
import { TemplateGenerator } from '@/shared/blocks/viral-home/generator';
import { ViralHeader } from '@/shared/blocks/viral-home/header';
import { ViralFooter } from '@/shared/blocks/viral-home/footer';
import { buildHowToJsonLdFromSteps } from '@/shared/lib/howto-schema';
import { getVideoCostTable } from '@/shared/lib/video-cost';
import { creditsForDuration } from '@/shared/lib/video-yield';
import { grandpaDinnerTemplates, type GrandpaDinnerTemplate } from './templates';
import { GRANDPA_DINNER_FAQ } from './faq';
import { GRANDPA_DINNER_HOW_TO_STEPS } from './steps';
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

export function GrandpaDinnerHome({ creditsPerUsd = 12, videoCosts = getVideoCostTable(), pageUrl }: { creditsPerUsd?: number; videoCosts?: ReturnType<typeof getVideoCostTable>; pageUrl?: string }) {
  const locale = useLocale();
  const zh = locale === 'zh';
  const t = (en: string, cn: string) => zh ? cn : en;
  useEffect(() => { track('view_template', { template: 'grandpa_dinner' }); }, []);
  // hero 示意默认赤膊上阵版（用户指定 14 号视频）；点击其他卡片可切换
  const [template, setTemplate] = useState<GrandpaDinnerTemplate>(grandpaDinnerTemplates.find((item) => item.id === 'grandpa-shirtless') ?? grandpaDinnerTemplates[0]);
  const focusGenerator = () => { document.getElementById('generator')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); };
  const choose = (item: GrandpaDinnerTemplate = grandpaDinnerTemplates[0]) => { track('click_generate', { template: 'grandpa_dinner', variant: item.id }); setTemplate(item); focusGenerator(); };
  const start = () => focusGenerator();
  const whyItems = [
    [Users, t('Eight Character Versions', '八个人物版本'), t('Classic Muscle Grandpa, Full Swing, Precise Entries, Football Jersey, Tuxedo Grandpa, White Suit & Fedora, Kaftan Style, Mickey Puffs — pick whoever "said they\'d handle dinner".', '经典肌肉爷爷、赤膊上阵、精准入场、球衣球星、燕尾服爷爷、白西装礼帽、长袍大厨、米奇爆炸头——谁「说他来搞定晚饭」就选谁。')],
    [ImagePlus, t('One Photo Is Enough', '一张照片就够'), t('Upload one clear photo and the AI places that person behind the kitchen island while keeping the face, hair and outfit from your photo.', '上传一张清晰照片，AI 就会把这个人放进厨房岛台后面，同时保留你照片里的脸、发型和穿搭。')],
    [Fish, t('Reference-Based Animation', '参考视频驱动'), t('The kitchen scene, the giant fish and the chopping action stay consistent with the selected template — no prompt writing, no manual editing.', '厨房场景、巨型鱼和剁鱼动作都与所选模板保持一致——不用写提示词，不用手动剪辑。')],
    [Smartphone, t('9:16, Then the Trend Sound', '9:16，再加热梗原声'), t('The page opens on 9:16 with a fixed 10-second length — the shape TikTok, Reels and Shorts use for this trend. ViralReel does not license the original audio; add the trend sound in the app and turn on the AI label.', '页面默认 9:16、固定 10 秒——正是这条趋势在 TikTok、Reels 和 Shorts 上的画幅。ViralReel 不授权原声，请在 App 里加热梗原声并打开 AI 标注。')],
    [Video, t('Download Without a Watermark', '无水印下载'), t('Save the finished MP4 without a ViralReel watermark. If a generation fails or is canceled, the credits are refunded automatically.', '下载不带 ViralReel 水印的 MP4 成片。生成失败或取消时积分会自动退回。')],
  ] as const;
  const steps = GRANDPA_DINNER_HOW_TO_STEPS.map((step) => [zh ? step.name.zh : step.name.en, zh ? step.text.zh : step.text.en] as const);
  const faq = GRANDPA_DINNER_FAQ[zh ? 'zh' : 'en'];
  const howToJsonLd = buildHowToJsonLdFromSteps({
    name: t("How to Make a Grandpa Said He'd Handle Dinner AI Video", '怎么用 AI 做一条 Grandpa Said He\'d Handle Dinner 视频'),
    description: t('Pick a dinner character, upload one photo, generate the fixed 10-second 9:16 clip, download the MP4, then add the trend sound and the AI label.', '选一个晚餐角色，上传一张照片，生成固定 10 秒的 9:16 视频，下载 MP4，再加热梗原声和 AI 标注。'),
    url: pageUrl,
    steps: steps.map(([name, text]) => ({ name, text })),
  });
  const photoTips = [
    t('One person per photo, face clearly visible and well lit.', '一张照片一个人，脸清晰、光线充足。'),
    t('A front-facing portrait with the upper body visible works best.', '正脸、能看到上半身的照片效果最好。'),
    t('Avoid group photos, sunglasses, heavy filters, and blurry images.', '避免合影、墨镜、重度滤镜和模糊图。'),
    t('Use photos you have permission to use — yourself or someone who agreed.', '只用你有权使用的照片——你自己或同意出镜的人。'),
  ] as const;
  const povCaptions = [
    ['POV: Grandpa said he\'d handle dinner.', 'POV: 爷爷说他来搞定晚饭。'],
    ['POV: Dad said he\'d handle dinner.', 'POV: 老爸说他来搞定晚饭。'],
    ['POV: Mom said she\'d handle dinner.', 'POV: 老妈说她来搞定晚饭。'],
    ['POV: Daughter said she\'d handle dinner.', 'POV: 女儿说她来搞定晚饭。'],
    ['POV: I said I\'d handle dinner.', 'POV: 我说我来搞定晚饭。'],
    ['POV: Nobody else volunteered.', 'POV: 没别人愿意动手。'],
    ['POV: The fish is bigger than the kitchen.', 'POV: 鱼比厨房还大。'],
    ['POV: Grandpa takes dinner very seriously.', 'POV: 爷爷对晚饭是认真的。'],
  ] as const;
  return <div className="viral-home">{howToJsonLd ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} /> : null}
    <ViralHeader onStart={start}/>
    <main>
      <section className="hero"><div className="container"><div className="hero-badge"><Flame size={16}/><span>#grandpasaidhedhandledinner is trending</span></div><h1>{t("Grandpa Said He'd Handle Dinner ", 'Grandpa Said He\'d Handle Dinner ')}<span className="hl">{t('AI Video Generator', 'AI 视频生成器')}</span></h1><p className="hero-sub">{t('Turn your photo into the hilarious giant fish dinner meme. Upload one photo, pick your character, and get a 10-second 9:16 MP4 in minutes — credits shown before you generate, refunded automatically if a job fails.', '把你的照片变成爆火的巨型鱼晚餐梗视频。上传一张照片、选好角色，几分钟拿到 10 秒 9:16 的 MP4——生成前显示积分，失败自动退回。')}</p><TemplateGenerator key={template.id} template={template} open embedded onOpenChange={() => {}}/></div></section>
      <section className="sec templates-section" id="templates"><div className="container"><div className="sec-head"><p className="kick">{t('Templates','模板')}</p><h2>{t('Choose Your Grandpa Said He\'d Handle Dinner Video Style','选择你的 Grandpa Dinner 视频风格')}</h2><p className="sub">{t('Who\'s handling dinner today? Eight character versions of the same ridiculous kitchen scene — click one to open the generator.','今天谁来搞定晚饭？同一个离谱厨房场景的八个人物版本——点击卡片打开生成器。')}</p></div><div className="grid3">{grandpaDinnerTemplates.map((item, index) => <article className="tcard" key={item.id}><button className="tv tv-full" aria-label={`${t('Use','使用')} ${item.name[zh ? 1 : 0]}`} onClick={() => choose(item)} style={{ '--g1': item.colors[0], '--g2': item.colors[1] } as CSSProperties}><TemplateCardVideo id={item.id} colors={item.colors}/>{index === 0 && <span className="hot">HOT</span>}<span className="tv-expand"><Maximize size={18}/></span><span className="tv-play"><Play size={16}/></span><span className="tv-bar"><i/></span></button><div className="tmeta"><b>{item.name[zh ? 1 : 0]}</b></div><button className="use" onClick={() => choose(item)}>{t('Make this','做成我的')}</button></article>)}</div></div></section>
      <div className="logos"><p className="lbl">{t('Creators are posting ViralReel videos on','创作者们正在这些平台发布 ViralReel 视频')}</p><div className="row"><span className="soc tiktok"><PlatformIcon type="tiktok"/>TikTok</span><span className="soc youtube"><PlatformIcon type="youtube"/>YouTube Shorts</span><span className="soc instagram"><PlatformIcon type="instagram"/>Instagram Reels</span><span className="soc x"><PlatformIcon type="x"/>X / Twitter</span><span className="soc reddit"><PlatformIcon type="reddit"/>Reddit</span></div></div>
      <section className="stats"><div className="container stats-grid"><div><div className="statnum">10<em>s</em></div><p>{t('Fixed clip length — one photo in, one dinner meme out','固定时长——一张照片进，一条晚餐梗出')}</p></div><div><div className="statnum">9:16</div><p>{t('Vertical export for TikTok, Reels and Shorts','竖屏导出，适配 TikTok、Reels、Shorts')}</p></div><div><div className="statnum">{creditsForDuration(videoCosts, '720p', 10)}<em className="wide-em">{t(' credits at 720p / 10s', ' 积分 · 720p / 10 秒')}</em></div><p>{t(`Top-ups available · ${creditsPerUsd} credits = $1`,`随时可加购 · ${creditsPerUsd} 积分 = 1 美元`)}</p></div></div></section>
      <section className="sec sec-alt" id="why"><div className="container"><div className="sec-head"><p className="kick">{t('Why ViralReel','为什么选 ViralReel')}</p><h2>{t('Why Create Your Grandpa Dinner AI Video with ViralReel?','为什么用 ViralReel 做 Grandpa Dinner AI 视频？')}</h2><p className="sub">{t('One photo, one template, one click — the whole kitchen performance is handled for you.','一张照片、一套模板、一次点击——整场厨房大戏都替你演好。')}</p></div><div className="grid4">{whyItems.map(([Icon,title,desc]) => <div className="feat" key={title}><div className="ic"><Icon size={20}/></div><h3>{title}</h3><p>{desc}</p></div>)}</div></div></section>
      <section className="sec" id="how"><div className="container"><div className="sec-head"><p className="kick">{t('How it works','使用教程')}</p><h2>{t('How to Make a Grandpa Said He\'d Handle Dinner AI Video','怎么用 AI 做一条 Grandpa Said He\'d Handle Dinner 视频')}</h2><p className="sub">{t('From one photo to a giant-fish dinner clip in minutes — no app, no editor, no filming.','从一张照片到一条巨型鱼晚餐视频只要几分钟——不用装 App，不用剪辑，不用拍摄。')}</p></div><div className="grid4s">{steps.map(([title,desc],i) => <div className="step" key={title}><div className="num">{i+1}</div><h3>{title}</h3><p>{desc}</p></div>)}</div></div></section>
      <section className="sec" id="guide"><div className="container guide"><div className="sec-head"><p className="kick">{t('Guide','指南')}</p><h2>{t('What Is the Grandpa Said He\'d Handle Dinner Trend?','Grandpa Said He\'d Handle Dinner 是什么梗？')}</h2></div>
        <figure className="guide-fig"><img src="/templates/grandpa-said-hed-handle-dinner-ai-og.jpg" alt="AI-generated grandpa chopping a giant fish in a kitchen — Grandpa Said He'd Handle Dinner AI video on ViralReel" width={1200} height={630} loading="lazy"/><figcaption>{t('Make the Grandpa Dinner clip on ViralReel (viralreel.app) from one photo.','在 ViralReel（viralreel.app）用一张照片制作 Grandpa Dinner 视频。')}</figcaption></figure>
        <h3>{t('Where Can I Make a Grandpa Said He\'d Handle Dinner AI Video?','在哪里可以做 Grandpa Said He\'d Handle Dinner AI 视频？')}</h3>
        <p>{t('You can create a Grandpa Said He\'d Handle Dinner AI video on ViralReel. Choose from the available giant fish dinner templates, upload one compatible photo, select your preferred video settings, and generate your own version. You can preview and download your finished MP4 directly from ViralReel — most renders take just a few minutes.','在 ViralReel 就可以做 Grandpa Said He\'d Handle Dinner AI 视频。从多个巨型鱼晚餐模板里选一个，上传一张合适的照片，选好视频参数，生成你自己的版本。完成后直接在 ViralReel 预览和下载 MP4——大多数渲染只需几分钟。')}</p>
        <h3>{t('What Makes ViralReel Different for This AI Video Trend?','在这条 AI 视频趋势上，ViralReel 有什么不同？')}</h3>
        <p>{t('ViralReel provides eight Grandpa Dinner video styles, photo-based character animation, video previews for every version, transparent credit pricing shown before generation, automatic credit refunds for failed jobs, and downloadable watermark-free MP4 exports. Instead of manually building the scene in an editor, users select a ready-made template and generate their own version in the browser.','ViralReel 提供八个 Grandpa Dinner 视频风格、基于照片的角色动画、每个版本的独立视频预览、生成前透明显示的积分价格、失败任务自动退积分，以及无水印 MP4 下载。不用在剪辑软件里手动搭场景，选一个现成模板，浏览器里直接生成你自己的版本。')}</p>
        <h3>{t('What is the Grandpa Said He\'d Handle Dinner trend?','Grandpa Said He\'d Handle Dinner 是什么梗？')}</h3>
        <p>{t('It is an AI-generated video meme: a character stands behind a kitchen island, chopping an unbelievably large fish with an oversized cleaver, completely serious, while the caption reads "POV: Grandpa said he\'d handle dinner". The joke is the contrast — someone simply promised to prepare dinner, and the scene turns into an exaggerated, utterly committed kitchen performance. The format evolved into grandpa, dad, mom, daughter and other character versions, and people now use AI video tools to place their own faces into the giant fish dinner scene.','这是一个 AI 生成的视频梗：一个角色站在厨房岛台后面，用一把超大的菜刀认真剁一条大得离谱的鱼，全程表情严肃，配文写着「POV: Grandpa said he\'d handle dinner（爷爷说他来搞定晚饭）」。笑点在于反差——有人只是说了句「晚饭我来」，画面却变成了一场夸张到极致、态度端正到好笑的厨房大戏。这个格式后来发展出爷爷、爸爸、妈妈、女儿等各种角色版本，现在大家用 AI 视频工具把自己的脸放进巨型鱼晚餐场景里。')}</p>
        <h3>{t('Where did the trend come from?','趋势从哪来的？')}</h3>
        <p>{t('The giant-fish format started with an AI-generated clip posted by @cowboylew on Instagram on 3 November 2026, captioned "Precise entries only" — a trading joke about landing every cut in exactly the right place. The recognizable Grandpa version associated with @marcel.pectoral appeared around 3–4 November 2026, and the format then spread through TikTok remakes, character variations and AI video templates. Trend trackers counted the fish-cutting hashtags in the hundreds of millions of views within days.','巨型鱼格式始于 @cowboylew 2026 年 11 月 3 日在 Instagram 发布的 AI 视频，配文「Precise entries only（只做精准入场）」——一个「每一刀都落在最精准位置」的交易梗。与 @marcel.pectoral 相关的爷爷版出现在 11 月 3–4 日前后，之后通过 TikTok 翻拍、角色衍生版和 AI 视频模板迅速传播。据趋势追踪站统计，剁鱼相关话题的播放量在几天内就到了数亿级。')}</p>
        <h3>{t('Why is the giant fish dinner meme so funny?','巨型鱼晚餐梗为什么这么好笑？')}</h3>
        <p>{t('Three things stack up. First, the unexpected character: a grandfather or another familiar family member takes on an exaggerated kitchen task. Second, the absurdly large fish: it makes an ordinary dinner preparation look ridiculous. Third, the completely serious performance: the character chops with extreme determination, as if it were the most important job in the world. The format is easy to personalize, which makes it ideal for AI-generated remakes.','三层笑点叠在一起。第一是角色意外：让爷爷或其他家人去干一件夸张的厨房大活。第二是鱼大得离谱：让普通的备餐场景变得荒诞。第三是全程过于认真：角色用极其坚定的态度剁鱼，仿佛这是全世界最重要的工作。这个格式极易个性化，天然适合 AI 翻拍。')}</p>
        <h3>{t('Funny POV captions for your version','给你自己版本的搞笑 POV 文案')}</h3>
        <p>{t('Pick a POV line that matches the person in your video and add it when you post:','选一条符合你视频里人物的 POV 文案，发布时加上：')}</p>
        <ul className="why-list">{povCaptions.map(([en, cn]) => <li key={en}><Check size={15}/>{zh ? cn : en}</li>)}</ul>
        <p className="guide-more"><Link href="/blog/grandpa-said-hed-handle-dinner-pov-captions">{t('50+ Grandpa Dinner POV captions','50+ 条 Grandpa Dinner POV 文案')}</Link></p>
        <h3>{t('What photo works best for the Grandpa Dinner AI video?','什么样的照片做 Grandpa Dinner 效果最好？')}</h3>
        <ul className="why-list">{photoTips.map((tip) => <li key={tip}><Check size={15}/>{tip}</li>)}</ul>
        <p>{t('The example photo above the upload box — the character from the Full Swing clip — shows the target: one person, clearly lit, face easy to recognize. The AI keeps the face, hair and outfit from your photo and takes the kitchen, the fish and the chopping action from the template.','上传框上方的示例照片（赤膊上阵片段里的角色）就是标准：一个人、光线清楚、脸容易认出。AI 会保留你照片里的脸、发型和穿搭，厨房、鱼和剁鱼动作则来自模板。')}</p>
        <h3>{t('How do I post my Grandpa Dinner video on TikTok?','怎么把 Grandpa Dinner 视频发到 TikTok？')}</h3>
        <p>{t('Download the 10-second 9:16 MP4, open TikTok and tap Create (+) to upload it, add a POV caption that matches your character, and search for the trend sound in the app\'s library. Enable the AI-generated content label in the post settings — TikTok asks for disclosure when a video realistically shows someone doing something they did not actually do. ViralReel does not license the original audio.','下载 10 秒 9:16 的 MP4，打开 TikTok 点「+」上传，配一条符合角色的 POV 文案，在 App 曲库里搜索热梗原声。然后在发布设置里打开 AI 生成内容标注——当视频逼真地呈现「某人做了实际没做过的事」时，TikTok 要求进行披露。ViralReel 不授权原声。')}</p>
        <h3>{t('Is the Grandpa Dinner video AI? Is it official?','Grandpa Dinner 视频是 AI 做的吗？是官方的吗？')}</h3>
        <p>{t('Yes, the trend is AI — the original giant-fish clips come from accounts labeled as AI-generated on Instagram, and honest reposts carry the AI label. No, it is not official: ViralReel is an independent AI video platform, and its Grandpa Dinner templates are fan-made tools not endorsed by the original creators. Use photos of yourself or people who agreed, do not upload minors or celebrities, and keep the AI-generated label on when you post.','是 AI 做的——最早的巨型鱼片段就来自 Instagram 上被标注为 AI 生成的账号，诚实的转发也都会带 AI 标注。它不是官方产品：ViralReel 是独立的 AI 视频平台，Grandpa Dinner 模板是粉丝向工具，未获得原作者背书。请只用自己或经同意的照片，不要上传未成年人或名人，发布时保留 AI 生成标注。')}</p>
        <p className="guide-more"><Link href="/blog/grandpa-said-hed-handle-dinner-trend">{t('What Is the Grandpa Dinner Trend?','Grandpa Dinner 趋势是什么？')}</Link> · <Link href="/blog/how-to-make-grandpa-said-hed-handle-dinner-video">{t('How to Make the AI Video','AI 视频制作教程')}</Link> · <Link href="/blog/grandpa-said-hed-handle-dinner-pov-captions">{t('Funny Grandpa Dinner Captions','Grandpa Dinner 搞笑文案')}</Link> · <Link href="/tiny-desk-outstanding-ai-template">{t('Tiny Desk Outstanding AI template','Tiny Desk Outstanding AI 模板')}</Link> · <Link href="/vossi-bop-dance-ai-template">{t('Vossi Bop Dance AI template','Vossi Bop Dance AI 模板')}</Link> · <Link href="/pricing">{t('Credit packs','积分包')}</Link></p>
      </div></section>
      <section className="sec sec-alt" id="faq"><div className="container"><div className="sec-head"><p className="kick">{t('FAQ','常见问题')}</p><h2>{t('Frequently Asked Questions About Grandpa Said He\'d Handle Dinner','关于 Grandpa Said He\'d Handle Dinner 的常见问题')}</h2></div><div className="faq-list">{faq.map(([question,answer],i) => <details key={question} open={i === 0}><summary>{question}</summary><p>{answer}</p></details>)}</div></div></section>
      <section className="sec" id="related"><div className="container"><div className="sec-head"><p className="kick">{t('Related','相关')}</p><h2>{t('Learn More About the Grandpa Dinner Trend','了解更多 Grandpa Dinner 内容')}</h2></div><div className="cluster">
        <div><h3>{t('Guides','指南')}</h3><Link href="/blog/grandpa-said-hed-handle-dinner-trend">{t('What Is the Grandpa Dinner Trend?','Grandpa Dinner 趋势是什么？')}</Link><Link href="/blog/how-to-make-grandpa-said-hed-handle-dinner-video">{t('How to Make a Grandpa Dinner AI Video','Grandpa Dinner AI 视频制作教程')}</Link><Link href="/blog/grandpa-said-hed-handle-dinner-pov-captions">{t('50+ Grandpa Dinner POV Captions','50+ 条 Grandpa Dinner POV 文案')}</Link></div>
        <div><h3>{t('More meme templates','更多梗图模板')}</h3><Link href="/tiny-desk-outstanding-ai-template">{t('Tiny Desk Outstanding','Tiny Desk Outstanding')}</Link><Link href="/vossi-bop-dance-ai-template">{t('Vossi Bop Dance','Vossi Bop Dance')}</Link><Link href="/bicep-heart-ai-template">{t('Bicep Heart','Bicep Heart')}</Link><Link href="/">{t('Explore More AI Templates','浏览更多 AI 模板')}</Link></div>
      </div></div></section>
      <section className="final-cta sec-alt"><div className="container"><h2>{t('Ready to Handle Dinner?','准备好来搞定晚饭了吗？')}</h2><p>{t('Upload your photo, choose the Grandpa Dinner character, and create your own giant fish meme with ViralReel.','上传照片、选好 Grandpa Dinner 角色，用 ViralReel 做出属于你的巨型鱼梗视频。')}</p><button className="btn btn-primary btn-lg" onClick={start}>{t('Make My Dinner Trend Video','生成我的晚餐梗视频')}<ArrowRight size={16}/></button></div></section>
    </main>
    <ViralFooter/>
  </div>;
}
