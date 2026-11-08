'use client';

/* eslint-disable @next/next/no-img-element */

import { useEffect, useState, type CSSProperties, type ReactNode } from 'react';
import { ArrowRight, Clock, Flame, ImagePlus, Mic2, Music, Play, Sparkles, Users, Video } from 'lucide-react';
import { useLocale } from 'next-intl';
import { track } from '@/shared/lib/analytics';
import { TemplateCardVideo } from '@/shared/blocks/common/lazy-video';
import { Link } from '@/core/i18n/navigation';
import { TemplateGenerator } from '@/shared/blocks/viral-home/generator';
import { ViralHeader } from '@/shared/blocks/viral-home/header';
import { ViralFooter } from '@/shared/blocks/viral-home/footer';
import { buildHowToJsonLdFromSteps } from '@/shared/lib/howto-schema';
import { getVideoCostTable } from '@/shared/lib/video-cost';
import { gangstasParadiseTemplates, type GangstasParadiseTemplate } from './templates';
import { GANGSTAS_PARADISE_FAQ } from './faq';
import { GANGSTAS_PARADISE_HOW_TO_STEPS } from './steps';
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

export function GangstasParadiseHome({ creditsPerUsd = 12, videoCosts = getVideoCostTable(), pageUrl }: { creditsPerUsd?: number; videoCosts?: ReturnType<typeof getVideoCostTable>; pageUrl?: string }) {
  const locale = useLocale();
  const zh = locale === 'zh';
  const t = (en: string, cn: string) => zh ? cn : en;
  useEffect(() => { track('view_template', { template: 'gangstas_paradise' }); }, []);
  // hero 示意默认银河机库版（最接近原版格式）；点击其他卡片可切换
  const [template, setTemplate] = useState<GangstasParadiseTemplate>(gangstasParadiseTemplates.find((item) => item.id === 'gangsta-hangar') ?? gangstasParadiseTemplates[0]);
  const focusGenerator = () => { document.getElementById('generator')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); };
  const choose = (item: GangstasParadiseTemplate = gangstasParadiseTemplates[0]) => { track('click_generate', { template: 'gangstas_paradise', variant: item.id }); setTemplate(item); focusGenerator(); };
  const start = () => focusGenerator();
  const features = [
    [Mic2, t('One raps, one waits for the chorus', '一个说唱，一个压轴副歌'), t('The structure mirrors the song itself: Coolio raps the verses, L.V. sings the hook. Your first photo takes the verse and the close-ups; your second photo walks past and lands the chorus payoff.', '结构完全照搬歌曲本身：Coolio 负责 rap，L.V. 唱 hook。你的第一张照片承包 verse 和特写，第二张照片走过场、在结尾接住副歌。')],
    [Users, t('Two photos, no costume', '两张照片，不用换装'), t('Each performer wears the outfit from their own photo — the robes stay with the reference clip. A sharp front-facing photo for the rapper, a full-body shot for the singer.', '每位表演者穿自己照片里的衣服——袍子留在参考片段里。说唱者用清晰正脸照，演唱者用全身照。')],
    [Sparkles, t('Five staged performances', '五场舞台表演'), t('Galactic Hangar, Silver Rapper, Dark Throne, Crimson Chant, Tuxedo Duet — same verse-and-chorus structure, five different scenes and choirs. The picker sits beside the preview.', '银河机库、银发老爹、黑暗王座、绯红合唱、燕尾服二重奏——同样的 verse + 副歌结构，五种场景和合唱团。选择器就在预览旁边。')],
    [Clock, t('20-30 seconds, retro 4:3', '20-30 秒，复古 4:3'), t('The reference clips are 4:3 landscape — the retro TV shape is part of the joke. Pick 20 or 30 seconds; the chorus payoff needs the runway, so shorter cuts lose the structure.', '参考片段是 4:3 横版——复古电视画幅本身就是笑点的一部分。时长 20 或 30 秒任选；副歌压轴需要铺垫，剪短了结构就没了。')],
  ] as const;
  const steps = GANGSTAS_PARADISE_HOW_TO_STEPS.map((step) => [zh ? step.name.zh : step.name.en, zh ? step.text.zh : step.text.en] as const);
  const faq = GANGSTAS_PARADISE_FAQ[zh ? 'zh' : 'en'];
  const howToJsonLd = buildHowToJsonLdFromSteps({
    name: t("How to make a Gangsta's Paradise AI video", '如何制作 Gangsta\'s Paradise AI 视频'),
    description: t('Pick a staged performance, upload two photos — rapper and singer — generate the 4:3 clip in 20 or 30 seconds, download the MP4, and post with the AI label.', '选一场舞台表演，上传两张照片——说唱者和演唱者——生成 4:3 的 20 或 30 秒视频，下载 MP4，配 AI 标注发布。'),
    url: pageUrl,
    steps: steps.map(([name, text]) => ({ name, text })),
  });
  const photoTips = [
    t('Rapper: one person, sharp front-facing face, whole head visible — the verse lives in the close-ups.', '说唱者：一个人、清晰正脸、整头可见——verse 全靠特写撑。'),
    t('Singer: full-body or waist-up photo helps — they are mostly seen walking in wide shots.', '演唱者：全身或半身照更稳——他大多出现在走位的全景里。'),
    t('Pick two people who look different — they walk side by side mid-video.', '选两个长相有区分度的人——视频中段他们会并肩走。'),
    t('Your outfits stay: no costume swap, the scene and the choir come from the template.', '穿搭保留：不换装，场景和合唱团来自模板。'),
    t('Use photos you have permission to use — no minors, actors, or celebrities.', '只用你有权使用的照片——不要用未成年人、演员或名人。'),
  ] as const;
  const castings = [
    [t('The friend who always grabs the aux', '总抢音响权限的朋友'), t('The friend who never sings', '从来不唱歌的朋友')],
    [t('The new manager', '新上任的主管'), t('The team lead', '团队老油条')],
    [t('The groom', '新郎'), t('The best man', '伴郎')],
    [t('A parent', '家长'), t('Their teenager', '青春期的娃')],
    [t('You', '你自己'), t('Your dog (check the close-ups)', '你的狗（特写慎查）')],
  ] as const;
  return <div className="viral-home">{howToJsonLd ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} /> : null}
    <ViralHeader onStart={start}/>
    <main>
      <section className="hero"><div className="container"><div className="hero-badge"><Flame size={16}/><span>#gangstasparadise is trending</span></div><h1>{t('Gangsta\'s Paradise ', 'Gangsta\'s Paradise ')}<span className="hl">{t('AI Video Generator', 'AI 视频生成器')}</span></h1><p className="hero-sub">{t('Two photos, one legendary performance: your rapper takes the verse, your singer lands the chorus, and the choir rises on cue. 20-30 second 4:3 MP4 — credits shown before you generate, refunded automatically if a job fails.', '两张照片，一场传奇表演：你的说唱者承包 verse，你的演唱者压轴副歌，合唱团应声而起。20-30 秒 4:3 MP4——生成前显示积分，失败自动退回。')}</p><TemplateGenerator key={template.id} template={template} open embedded onOpenChange={() => {}}/></div></section>
      <section className="sec templates-section" id="templates"><div className="container"><div className="sec-head"><p className="kick">{t('Samples','表演样本')}</p><h2>{t('Choose Your Gangsta\'s Paradise Performance','选择你的 Gangsta\'s Paradise 表演场景')}</h2><p className="sub">{t('Same verse-and-chorus structure, five different stages — click a sample to load it into the generator.','同样的 verse + 副歌结构，五种不同的舞台——点击样本载入生成器。')}</p></div><div className="grid3">{gangstasParadiseTemplates.map((item, index) => <article className="tcard" key={item.id}><button className="tv tv-full" aria-label={`${t('Use','使用')} ${item.name[zh ? 1 : 0]}`} onClick={() => choose(item)} style={{ '--g1': item.colors[0], '--g2': item.colors[1] } as CSSProperties}><TemplateCardVideo id={item.id} colors={item.colors}/>{index === 0 && <span className="hot">HOT</span>}<span className="tv-play"><Play size={16}/></span><span className="tv-bar"><i/></span></button><div className="tmeta"><b>{item.name[zh ? 1 : 0]}</b></div><button className="use" onClick={() => choose(item)}>{t('Make this','做成我的')}</button></article>)}</div></div></section>
      <div className="logos"><p className="lbl">{t('Creators are posting ViralReel videos on','创作者们正在这些平台发布 ViralReel 视频')}</p><div className="row"><span className="soc tiktok"><PlatformIcon type="tiktok"/>TikTok</span><span className="soc youtube"><PlatformIcon type="youtube"/>YouTube Shorts</span><span className="soc instagram"><PlatformIcon type="instagram"/>Instagram Reels</span><span className="soc x"><PlatformIcon type="x"/>X / Twitter</span><span className="soc reddit"><PlatformIcon type="reddit"/>Reddit</span></div></div>
      <section className="stats"><div className="container stats-grid"><div><div className="statnum">20-30<em>s</em></div><p>{t('Verse and chorus need the runway','verse 和副歌都需要铺垫')}</p></div><div><div className="statnum">4:3</div><p>{t('Retro landscape, like the reference clips','复古横版，与参考片段一致')}</p></div><div><div className="statnum">{Math.min(...videoCosts.flatMap(row => row.costs.map(item => item.credits)))}<em className="wide-em">{t(' credits / video from', ' 积分 / 条起')}</em></div><p>{t(`Top-ups available · ${creditsPerUsd} credits = $1`,`随时可加购 · ${creditsPerUsd} 积分 = 1 美元`)}</p></div></div></section>
      <section className="sec sec-alt" id="what"><div className="container"><div className="sec-head"><p className="kick">{t('What is Gangsta\'s Paradise','Gangsta\'s Paradise 是什么')}</p><h2>{t('The two-hander performance meme everyone is recasting','人人都在换角的二人对手戏表演梗')}</h2><p className="sub">{t('One verse, one chorus, one choir payoff — the whole joke is who you cast.','一段 verse，一段副歌，一次合唱团压轴——笑点全在你选了谁来演。')}</p></div><div className="grid4">{features.map(([Icon,title,desc]) => <div className="feat" key={title}><div className="ic"><Icon size={20}/></div><h3>{title}</h3><p>{desc}</p></div>)}</div></div></section>
      <section className="sec" id="how"><div className="container"><div className="sec-head"><p className="kick">{t('How it works','使用教程')}</p><h2>{t('How to Make a Gangsta\'s Paradise AI Video','怎么制作 Gangsta\'s Paradise AI 视频')}</h2><p className="sub">{t('Two photos to a full staged music performance in minutes — no app, no editor, no prompt.','两张照片到一场完整的舞台表演只要几分钟——不用装 App，不用剪辑，不用写提示词。')}</p></div><div className="grid4s">{steps.map(([title,desc],i) => <div className="step" key={title}><div className="num">{i+1}</div><h3>{title}</h3><p>{desc}</p></div>)}</div></div></section>
      <section className="sec" id="guide"><div className="container guide"><div className="sec-head"><p className="kick">{t('Guide','指南')}</p><h2>{t('Gangsta\'s Paradise: the trend, the song, and how to make your own','Gangsta\'s Paradise：趋势、原曲，以及怎么做你自己的')}</h2></div>
        <figure className="guide-fig"><img src="/templates/gangstas-paradise-ai-og.jpg" alt="Gangsta's Paradise AI video on ViralReel — two performers rapping and singing in front of an armoured choir" width={1200} height={630} loading="lazy"/><figcaption>{t('Make the Gangsta\'s Paradise performance on ViralReel (viralreel.app) from two photos.','在 ViralReel（viralreel.app）用两张照片制作 Gangsta\'s Paradise 表演。')}</figcaption></figure>
        <h3>{t('Where Can I Make a Gangsta\'s Paradise AI Video?','在哪里可以做 Gangsta\'s Paradise AI 视频？')}</h3>
        <p>{t('You can create a Gangsta\'s Paradise AI video on ViralReel. Pick one of the five staged performances, upload two compatible photos — rapper and singer — choose 20 or 30 seconds, and generate your own version. You can preview and download your finished 4:3 MP4 directly from ViralReel; renders take several minutes because the clip is a full staged performance.','在 ViralReel 就可以做 Gangsta\'s Paradise AI 视频。五场舞台表演任选，上传两张合适的照片——说唱者和演唱者——选 20 或 30 秒，生成你自己的版本。完成后直接在 ViralReel 预览和下载 4:3 的 MP4；因为是一场完整的舞台表演，渲染需要几分钟。')}</p>
        <h3>{t('What Makes ViralReel Different for This AI Video Trend?','在这条 AI 视频趋势上，ViralReel 有什么不同？')}</h3>
        <p>{t('ViralReel provides five staged Gangsta\'s Paradise performances, a two-photo workflow with per-slot example photos, 20 and 30 second options at the trend\'s native 4:3 ratio, transparent credit pricing shown before generation, automatic credit refunds for failed jobs, and downloadable watermark-free MP4 exports. Instead of editing two people into a template by hand, users pick a stage, upload both faces, and generate in the browser.','ViralReel 提供五场 Gangsta\'s Paradise 舞台表演、带分槽示例照片的双照片流程、趋势原生 4:3 画幅下的 20 和 30 秒选项、生成前透明显示的积分价格、失败任务自动退积分，以及无水印 MP4 下载。不用手动把两个人 P 进模板，选好舞台、上传两张脸，浏览器里直接生成。')}</p>
        <h3>{t('What is the Gangsta\'s Paradise AI trend?','Gangsta\'s Paradise AI 趋势是什么？')}</h3>
        <p>{t('It is an AI-generated music-performance meme: two performers stage a scene where one raps the verse of "Gangsta\'s Paradise" — Coolio\'s 1995 hit featuring L.V. — into a handheld microphone with complete seriousness, the second walks past without a word and sings the closing chorus, and the backing cast rises holding microphones as a choir on the payoff. The best-known version is set in a gleaming white sci-fi hangar lined with armoured troopers; the contrast between the cold military setting and a heartfelt 1995 rap verse is the whole joke.','这是一个 AI 生成的音乐表演梗：两位表演者搭档登台——一位手持麦克风无比认真地 rap《Gangsta\'s Paradise》（Coolio 1995 年 feat. L.V. 的名曲）的 verse，另一位一言不发地走过、在结尾接唱副歌，伴唱阵容应声举麦化身合唱团。最出名的版本设定在满是白甲士兵的白色科幻机库里——冰冷的军事场景和深情的 90 年代说唱之间的反差就是全部笑点。')}</p>
        <h3>{t('The song: Coolio feat. L.V., 1995','原曲：Coolio feat. L.V.，1995')}</h3>
        <p>{t('"Gangsta\'s Paradise" is Coolio\'s 1995 single featuring singer L.V., built on a reworking of Stevie Wonder\'s "Pastime Paradise" and known worldwide from the film Dangerous Minds. The meme\'s structure mirrors the song exactly: Coolio raps the verses and L.V. sings the chorus — so one performer carries the rap and the other waits for the hook. The song had already lived a long meme life (its opening lines are among the most recognizable in hip-hop) before the AI performance format gave it a new stage.','《Gangsta\'s Paradise》是 Coolio 1995 年 feat. 歌手 L.V. 的单曲，改编自 Stevie Wonder 的《Pastime Paradise》，因电影《危险游戏》红遍全球。梗的结构与歌曲完全同构：Coolio 说唱 verse、L.V. 演唱副歌——所以视频里也是一人撑 rap、一人等 hook。这首歌早在 AI 表演格式给它新舞台之前就已经是老牌梗曲（开篇几句是嘻哈史上最有辨识度的段落之一）。')}</p>
        <h3>{t('Where did the trend come from?','趋势从哪来的？')}</h3>
        <p>{t('The format took off in early November 2026 through an AI-made fan parody: two look-alike performers in a white sci-fi hangar, rows of armoured troopers at attention behind them, performing the 1995 track with complete seriousness before the troopers raise microphones as a choir. It is an unofficial fan format — not connected to Lucasfilm, the films, or the song\'s rights holders — and the scene has since been recast with villains, gospel choirs, mansion crowds and other characters, which is exactly the freedom the five stages on this page use.','格式在 2026 年 11 月初因一支 AI 粉丝向戏仿爆火：两位相似演员站在白色科幻机库里，身后一排排白甲士兵立正站好，无比认真地表演这首 1995 年的名曲，最后士兵们举麦化身合唱团。这是非官方粉丝格式——与 Lucasfilm、电影或歌曲版权方无关——此后这个场景被反派、福音合唱团、豪宅宾客等各种角色翻拍，这正是本页五个舞台所利用的自由度。')}</p>
        <h3>{t('Why did it go viral?','它为什么会爆火？')}</h3>
        <p>{t('Three forces stack up. First, contrast: the coldest, most military setting imaginable, and a heartfelt 1995 rap verse delivered in it with total commitment. Second, escalation: the video builds — close-ups at the mic, a walk through the ranks, a pointing-at-the-camera moment, a wide shot down the whole hall — and the choir payoff lands only at the end. Third, the two-hander structure: one performer does nearly all the work, the other is a silent presence until the last seconds, which makes casting the two roles the entire creative decision.','三层力量叠在一起。第一是反差：想象中最冰冷、最军事化的场景里，有人深情演绎一段 1995 年的说唱。第二是递进：视频层层铺垫——持麦特写、穿过队列、指向镜头、大厅全景——合唱团压轴只出现在最后。第三是双人结构：一个人干几乎所有的活，另一个人憋到最后一秒——选角就是全部创作决策。')}</p>
        <h3>{t('Who should I cast in my version?','我的版本该选谁来演？')}</h3>
        <table className="w-full text-sm">{castings.map(([rapper, singer], i) => <tr key={i} className="border-b border-zinc-200"><td className="py-2 pr-4"><strong>{rapper}</strong><span className="opacity-60"> → rapper</span></td><td className="py-2">{singer}<span className="opacity-60"> → singer</span></td></tr>)}</table>
        <h3>{t('What photo works best for each slot?','每个位置用什么照片最好？')}</h3>
        <ul className="why-list">{photoTips.map((tip) => <li key={tip}><ImagePlus size={15}/>{tip}</li>)}</ul>
        <p>{t('The two example photos above the upload boxes — taken from the selected sample\'s performers — show the target: the rapper\'s slot wants a sharp, front-facing face; the singer\'s slot wants a full-body or waist-up shot. The AI keeps the face, hair and outfit from each photo and takes the scene, the choir and the choreography from the template.','上传框上方的两张示例照片（取自所选样本的表演者）就是标准：说唱者位要清晰正脸；演唱者位要全身或半身照。AI 会保留每张照片里的脸、发型和穿搭，场景、合唱团和走位编排则来自模板。')}</p>
        <h3>{t('How does the generator work?','生成器是怎么工作的？')}</h3>
        <p>{t('ViralReel uses the selected staged performance as a reference and AI image-to-video technology to place your two performers into it. The reference guides the scene, the backing cast, the camera moves, the shot cuts and the verse-and-chorus choreography; your photos guide each performer\'s face, hair and outfit. The song is not generated — sound handling depends on the selected model, and the original recording is a commercial track, so add it from your platform\'s music library when posting. Depending on the selected model, results may vary slightly from the preview; each render is an AI-created interpretation.','ViralReel 以所选舞台表演为参考，用 AI 图生视频技术把你的两位表演者放进场景。参考片段引导场景、伴唱阵容、运镜、镜头切换和 verse + 副歌的走位编排；你的照片引导每位表演者的脸、发型和穿搭。歌曲不会被生成——声音处理取决于所选模型，且原曲是商业录音，发布时请从平台曲库添加。根据所选模型不同，成片可能与预览略有差异；每次渲染都是一次 AI 创作。')}</p>
        <h3>{t('How do I post my Gangsta\'s Paradise video on TikTok?','怎么把 Gangsta\'s Paradise 视频发到 TikTok？')}</h3>
        <p>{t('Download the 4:3 MP4, open TikTok and tap Create (+) to upload it, add the song from the platform\'s music library, and keep the caption short — "Briefing went differently than planned" or "The choir was not in the brief" let the video do the work. Enable the AI-generated content label in the post settings: TikTok requires disclosure when a video realistically shows someone performing something they did not actually do. Music availability depends on your account type, region, and usage rights.','下载 4:3 的 MP4，打开 TikTok 点「+」上传，从平台曲库添加歌曲，文案要短——「会议简报和计划的不太一样」「简报里没说有合唱团」这类就够，让视频自己说话。在发布设置里打开 AI 生成内容标注：当视频逼真呈现「某人表演了实际没做过的事」时，TikTok 要求披露。音乐可用性取决于账号类型、地区和使用权利。')}</p>
        <h3>{t('Is the Gangsta\'s Paradise video AI? Is it official?','Gangsta\'s Paradise 视频是 AI 做的吗？是官方的吗？')}</h3>
        <p>{t('Yes, the trend is AI — the reference performances are AI-generated fan parodies, and honest posts carry the AI-generated label. No, it is not official: ViralReel is an independent AI video platform, and its Gangsta\'s Paradise templates are fan-made tools not endorsed by the original creators, Lucasfilm, or the song\'s rights holders. Use photos of yourself or people who agreed, never photos of actors or celebrities — including the performers the reference clips resemble — and keep the AI label on when you post.','是 AI 做的——参考表演就是 AI 生成的粉丝向戏仿，诚实的发布者都会带 AI 生成标注。它不是官方产品：ViralReel 是独立的 AI 视频平台，Gangsta\'s Paradise 模板是粉丝向工具，未获得原作者、Lucasfilm 或歌曲版权方的背书。只用自己或经同意的照片，绝不用演员或名人的照片——包括参考片段里演员的相似者——发布时保留 AI 标注。')}</p>
        <p className="guide-more"><Link href="/sasha-la-catrina-ai-template">{t('Sasha La Catrina AI template','Sasha La Catrina AI 模板')}</Link> · <Link href="/grandpa-said-hed-handle-dinner-ai-template">{t('Grandpa Dinner AI template','Grandpa Dinner AI 模板')}</Link> · <Link href="/tiny-desk-outstanding-ai-template">{t('Tiny Desk Outstanding AI template','Tiny Desk Outstanding AI 模板')}</Link> · <Link href="/vossi-bop-dance-ai-template">{t('Vossi Bop Dance AI template','Vossi Bop Dance AI 模板')}</Link> · <Link href="/">{t('Explore More AI Templates','浏览更多 AI 模板')}</Link> · <Link href="/pricing">{t('Credit packs','积分包')}</Link></p>
      </div></section>
      <section className="sec sec-alt" id="faq"><div className="container"><div className="sec-head"><p className="kick">{t('FAQ','常见问题')}</p><h2>{t('Frequently Asked Questions About Gangsta\'s Paradise','关于 Gangsta\'s Paradise 的常见问题')}</h2></div><div className="faq-list">{faq.map(([question,answer],i) => <details key={question} open={i === 0}><summary>{question}</summary><p>{answer}</p></details>)}</div></div></section>
      <section className="sec" id="related"><div className="container"><div className="sec-head"><p className="kick">{t('Related','相关')}</p><h2>{t('Learn More About the Gangsta\'s Paradise Trend','了解更多 Gangsta\'s Paradise 内容')}</h2></div><div className="cluster">
        <div><h3>{t('More performance templates','更多表演类模板')}</h3><Link href="/sasha-la-catrina-ai-template">{t('Sasha La Catrina','Sasha La Catrina')}</Link><Link href="/tiny-desk-outstanding-ai-template">{t('Tiny Desk Outstanding','Tiny Desk Outstanding')}</Link><Link href="/grandpa-said-hed-handle-dinner-ai-template">{t('Grandpa Said He\'d Handle Dinner','Grandpa Dinner')}</Link></div>
        <div><h3>{t('More meme templates','更多梗图模板')}</h3><Link href="/vossi-bop-dance-ai-template">{t('Vossi Bop Dance','Vossi Bop Dance')}</Link><Link href="/bicep-heart-ai-template">{t('Bicep Heart','Bicep Heart')}</Link><Link href="/">{t('Explore More AI Templates','浏览更多 AI 模板')}</Link></div>
      </div></div></section>
      <section className="final-cta sec-alt"><div className="container"><h2>{t('Ready for Your Verse?','准备好你的 verse 了吗？')}</h2><p>{t('Upload two photos, pick your stage, and let the choir rise behind you.','上传两张照片、选好舞台，让合唱团在你身后起立。')}</p><button className="btn btn-primary btn-lg" onClick={start}>{t('Make My Gangsta\'s Paradise Video','生成我的 Gangsta\'s Paradise 视频')}<ArrowRight size={16}/></button></div></section>
    </main>
    <ViralFooter/>
  </div>;
}
