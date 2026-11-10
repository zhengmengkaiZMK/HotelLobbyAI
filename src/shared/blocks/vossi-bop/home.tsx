'use client';

/* eslint-disable @next/next/no-img-element */

import { useEffect, useState, type CSSProperties, type ReactNode } from 'react';
import { ArrowRight, Check, Flame, ImagePlus, Maximize, Music, Play, Smartphone, Users, Video } from 'lucide-react';
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
import { vossiBopTemplates, type VossiBopTemplate } from './templates';
import { VOSSI_BOP_FAQ } from './faq';
import { VOSSI_BOP_HOW_TO_STEPS } from './steps';
import '@/shared/blocks/viral-home/home.css';

function PlatformIcon({ type }: { type: 'tiktok' | 'youtube' | 'instagram' | 'x' | 'reddit' }) {
  const paths: Record<string, ReactNode> = {
    tiktok: <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.9 2.9 0 1 1-2.31-2.84V9.25a6.35 6.35 0 1 0 5.76 6.32V8.69a8.16 8.16 0 0 0 4.77 1.52V6.79a4.85 4.85 0 0 1-1-.1z" />,
    youtube: <><path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3.02 3.02 0 0 0 .5 6.19C0 8.07 0 12 0 12s0 3.93.5 5.81a3.02 3.02 0 0 0 2.12 2.14c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 0 0 2.12-2.14C24 15.93 24 12 24 12s0-3.93-.5-5.81z"/><path fill="#fff" d="m9.55 15.57 6.27-3.57-6.27-3.57z"/></>,
    instagram: <><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></>,
    x: <path d="M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.41l-5.8-7.58-6.64 7.58H.47l8.6-9.83L0 1.15h7.59l5.24 6.93zm-1.29 19.5h2.04L6.49 3.24H4.3z" />,
    reddit: <path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm5.01 4.74a1.25 1.25 0 1 0-1.95.94l-2.91-.62a.34.34 0 0 0-.41.26l-.9 4.17c-1.87.06-3.56.62-4.79 1.5a1.76 1.76 0 1 0-.81 3.33c-.03.17-.05.35-.05.53 0 2.7 3.12 4.87 7 4.87s7-2.17 7-4.87c0-.18-.02-.36-.04-.52a1.76 1.76 0 1 0-2.95-1.11c-1.2-.86-2.85-1.42-4.68-1.49l.8-3.75 2.6.55a1.25 1.25 0 0 0 2.09-1.09zM8.6 13.02a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zm6.8 0a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0 2.5z" />,
  };
  return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">{paths[type]}</svg>;
}

export function VossiBopHome({ creditsPerUsd = 12, videoCosts = getVideoCostTable(), pageUrl }: { creditsPerUsd?: number; videoCosts?: ReturnType<typeof getVideoCostTable>; pageUrl?: string }) {
  const locale = useLocale();
  const zh = locale === 'zh';
  const t = (en: string, cn: string) => zh ? cn : en;
  useEffect(() => { track('view_template', { template: 'vossi_bop_dance' }); }, []);
  // hero 示意默认 Angry Ginge 版（用户指定 01 号视频）；点击其他卡片可切换
  const [template, setTemplate] = useState<VossiBopTemplate>(vossiBopTemplates.find((item) => item.id === 'vossibop-angry-ginge') ?? vossiBopTemplates[0]);
  const focusGenerator = () => { document.getElementById('generator')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); };
  const choose = (item: VossiBopTemplate = vossiBopTemplates[0]) => { track('click_generate', { template: 'vossi_bop_dance', variant: item.id }); setTemplate(item); focusGenerator(); };
  const start = () => focusGenerator();
  const whyItems = [
    [Users, t('No Dance Skills Required', '不会跳舞也没关系'), t('The AI template performs the whole Vossi Bop for you — shoulders, rolls, clap and side steps. You bring one photo, not a routine.', 'Vossi Bop 的全部动作——抖肩、转手、击掌、侧步——都由 AI 模板完成。你只需要一张照片，不用会跳。')],
    [Music, t('No Complex Prompts', '不用写复杂提示词'), t('Ready-made AI dance template instead of writing detailed prompts: pick a set, upload a photo, generate.', '现成的 AI 舞蹈模板，不用自己写提示词：选一套阵容、传一张照片、直接生成。')],
    [ImagePlus, t('Turn Photos into Videos', '照片变视频'), t('One clear photo is enough. The template animates that person in the dawn Westminster Bridge shot while the face, hair and outfit stay yours.', '一张清晰照片就够。模板会让照片里的人在黎明威斯敏斯特桥镜头里跳舞，脸、发型和穿搭都保留你的。')],
    [Smartphone, t('Made for Short Videos', '为短视频而生'), t('Fixed 10-second length and 9:16 vertical export — the shape TikTok, Instagram Reels and YouTube Shorts use for this trend.', '固定 10 秒时长、9:16 竖屏导出——正是这条趋势在 TikTok、Reels 和 Shorts 上的画幅。')],
    [Video, t('Download Your Creation', '下载你的成片'), t('Save the finished MP4 without a watermark and use it in your own edits or post it as-is.', '下载无水印 MP4，可以继续加工，也可以直接发布。')],
  ] as const;
  const steps = VOSSI_BOP_HOW_TO_STEPS.map((step) => [zh ? step.name.zh : step.name.en, zh ? step.text.zh : step.text.en] as const);
  const faq = VOSSI_BOP_FAQ[zh ? 'zh' : 'en'];
  const howToJsonLd = buildHowToJsonLdFromSteps({
    name: t('How to Make a Vossi Bop Dance Video with AI', '怎么用 AI 做一条 Vossi Bop 舞蹈视频'),
    description: t('Pick a bridge set, upload one photo, generate the fixed 10-second 9:16 clip, download the MP4, then add the trend sound and the AI label. ViralReel does not license the song.', '选一套桥上阵容，上传一张照片，生成固定 10 秒的 9:16 视频，下载 MP4，再加热梗原声和 AI 标注。ViralReel 不授权原曲。'),
    url: pageUrl,
    steps: steps.map(([name, text]) => ({ name, text })),
  });
  const photoTips = [
    t('One person per photo, full body visible from head to feet.', '一张照片一个人，从头到脚全身可见。'),
    t('Good lighting, sharp focus, face and outfit easy to recognize.', '光线充足、画面清晰，脸和穿搭都容易认出。'),
    t('Avoid blurry images, complicated backgrounds and partially hidden subjects.', '避免模糊图、杂乱背景和被遮挡的主体。'),
    t('Use photos you have permission to use — yourself or someone who agreed.', '只用你有权使用的照片——你自己或同意出镜的人。'),
  ] as const;
  const ideas = [
    t('Make Yourself Do the Vossi Bop', '让自己跳一次 Vossi Bop'),
    t('Create a Funny AI Dance Video', '做一条搞笑 AI 舞蹈'),
    t('Turn a Cartoon Character into a Dancer', '让卡通角色上场跳舞'),
    t('Make a Vossi Bop-Inspired TikTok', '做一条 Vossi Bop 风格 TikTok'),
    t('Create a Unique Character Dance Video', '做一个独一无二的角色舞蹈'),
  ] as const;
    return <div className="viral-home">{howToJsonLd ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} /> : null}
    <ViralHeader onStart={start}/>
    <main>
      <section className="hero"><div className="container"><div className="hero-badge"><Flame size={16}/><span>#vossibop is trending</span></div><h1>{t('Vossi Bop Dance ', 'Vossi Bop Dance ')}<span className="hl">{t('AI Video Generator', 'AI 视频生成器')}</span></h1><p className="hero-sub">{t('Turn your photo into a Vossi Bop-inspired dance video with ViralReel. Upload your photo, use the AI dance template, and create your own video without filming yourself.', '用 ViralReel 把你的照片变成 Vossi Bop 风格的舞蹈视频。上传照片、选 AI 舞蹈模板，不用自己出镜拍摄就能做出属于你的视频。')}</p><TemplateGenerator key={template.id} template={template} open embedded onOpenChange={() => {}}/></div></section>
      <section className="sec templates-section" id="templates"><div className="container"><div className="sec-head"><p className="kick">{t('Templates','模板')}</p><h2>{t('Vossi Bop Dance AI Template Preview','Vossi Bop Dance AI 模板预览')}</h2><p className="sub">{t('Preview the Vossi Bop-inspired dance motion before creating your own video. Eight bridge sets — click one to open the generator.','生成之前先看看 Vossi Bop 的舞蹈动作。八套桥上阵容——点击卡片打开生成器。')}</p></div><div className="grid3">{vossiBopTemplates.map((item, index) => <article className="tcard" key={item.id}><button className="tv tv-full" aria-label={`${t('Use','使用')} ${item.name[zh ? 1 : 0]}`} onClick={() => choose(item)} style={{ '--g1': item.colors[0], '--g2': item.colors[1] } as CSSProperties}><TemplateCardVideo id={item.id} colors={item.colors} credit={'credit' in item ? item.credit : undefined}/>{index === 0 && <span className="hot">HOT</span>}<span className="tv-expand"><Maximize size={18}/></span><span className="tv-play"><Play size={16}/></span><span className="tv-bar"><i/></span></button><div className="tmeta"><b>{item.name[zh ? 1 : 0]}</b></div><button className="use" onClick={() => choose(item)}>{t('Make this','做成我的')}</button></article>)}</div></div></section>
      <div className="logos"><p className="lbl">{t('Creators are posting ViralReel videos on','创作者们正在这些平台发布 ViralReel 视频')}</p><div className="row"><span className="soc tiktok"><PlatformIcon type="tiktok"/>TikTok</span><span className="soc youtube"><PlatformIcon type="youtube"/>YouTube Shorts</span><span className="soc instagram"><PlatformIcon type="instagram"/>Instagram Reels</span><span className="soc x"><PlatformIcon type="x"/>X / Twitter</span><span className="soc reddit"><PlatformIcon type="reddit"/>Reddit</span></div></div>
      <section className="stats"><div className="container stats-grid"><div><div className="statnum">10<em>s</em></div><p>{t('Fixed clip length — one photo in, one dance out','固定时长——一张照片进，一条舞蹈出')}</p></div><div><div className="statnum">9:16</div><p>{t('Vertical export for TikTok, Reels and Shorts','竖屏导出，适配 TikTok、Reels、Shorts')}</p></div><div><div className="statnum">{creditsForDuration(videoCosts, '720p', 10)}<em className="wide-em">{t(' credits at 720p / 10s', ' 积分 · 720p / 10 秒')}</em></div><p>{t(`Top-ups available · ${creditsPerUsd} credits = $1`,`随时可加购 · ${creditsPerUsd} 积分 = 1 美元`)}</p></div></div></section>
      <section className="sec sec-alt" id="why"><div className="container"><div className="sec-head"><p className="kick">{t('Why ViralReel','为什么选 ViralReel')}</p><h2>{t('Why Use ViralReel for Vossi Bop AI Dance Videos?','为什么用 ViralReel 做 Vossi Bop AI 舞蹈视频？')}</h2><p className="sub">{t('One photo, one template, one click — the whole dance is handled for you.','一张照片、一套模板、一次点击——整支舞都替你跳好。')}</p></div><div className="grid4">{whyItems.map(([Icon,title,desc]) => <div className="feat" key={title}><div className="ic"><Icon size={20}/></div><h3>{title}</h3><p>{desc}</p></div>)}</div></div></section>
      <section className="sec" id="how"><div className="container"><div className="sec-head"><p className="kick">{t('How it works','使用教程')}</p><h2>{t('How to Make a Vossi Bop Dance Video with AI','怎么用 AI 做一条 Vossi Bop 舞蹈视频')}</h2><p className="sub">{t('From one photo to a bridge-dance clip in minutes — no app, no editor, no filming.','从一张照片到一条桥上舞蹈视频只要几分钟——不用装 App，不用剪辑，不用拍摄。')}</p></div><div className="grid4s">{steps.map(([title,desc],i) => <div className="step" key={title}><div className="num">{i+1}</div><h3>{title}</h3><p>{desc}</p></div>)}</div></div></section>
      <section className="sec" id="guide"><div className="container guide"><div className="sec-head"><p className="kick">{t('Guide','指南')}</p><h2>{t('What Is the Vossi Bop Dance?','Vossi Bop Dance 是什么？')}</h2></div>
        <figure className="guide-fig"><img src="/templates/vossi-bop-dance-ai-og.jpg" alt="Vossi Bop Dance AI template on ViralReel — a dancer bopping on Westminster Bridge at dawn" width={1200} height={726} loading="lazy"/><figcaption>{t('Make the Vossi Bop Dance clip on ViralReel (viralreel.app) from one photo.','在 ViralReel（viralreel.app）用一张照片制作 Vossi Bop Dance 视频。')}</figcaption></figure>
        <h3>{t('Where Can I Make a Vossi Bop Dance Video with AI?','在哪里可以用 AI 做 Vossi Bop 舞蹈视频？')}</h3>
        <p>{t('You can create a Vossi Bop-inspired AI dance video on ViralReel. Open the Vossi Bop Dance AI Template, upload a compatible photo, choose the available video settings, and generate your own dance video. Once complete, you can preview and download the result.','在 ViralReel 就可以做 Vossi Bop 风格的 AI 舞蹈视频。打开 Vossi Bop Dance AI 模板，上传一张合适的照片，选好视频参数，生成你自己的舞蹈视频。完成后即可预览和下载。')}</p>
        <h3>{t('What Is the Vossi Bop Dance?','Vossi Bop 是什么舞？')}</h3>
        <p>{t('Vossi Bop is a loose, shoulder-led dance: hands rolling in front of the chest, a clap, a step to each side, all done like you are barely trying. The move is named after NL Vossi, whose "Vossi Bop" dance went viral on Twitter in 2015. It became widely recognized when British rapper Stormzy released his song "Vossi Bop" on 25 April 2019 — the music video opens with him alone on an empty Westminster Bridge at dawn, Big Ben behind him, doing the bop while the camera circles. The song became his first UK number one as a lead artist, and the dance stayed a TikTok staple ever since.','Vossi Bop 是一种放松的、由肩膀带动的舞蹈：双手在胸前画圈、击掌、左右各踏一步，整个人看起来毫不费力。这个动作以 NL Vossi 命名——他 2015 年在 Twitter 上发布的「Vossi Bop」舞蹈走红网络。2019 年 4 月 25 日英国说唱歌手 Stormzy 发布单曲《Vossi Bop》后，这个舞蹈被更多人认识：MV 开场就是他独自站在黎明的威斯敏斯特桥上，身后是大本钟，镜头环绕着他跳这支舞。这首歌成为他个人第一支英国冠军单曲，这支舞也一直是 TikTok 上的经典动作。')}</p>
        <h3>{t('Why is everyone making Vossi Bop AI videos now?','为什么现在人人都在做 Vossi Bop AI 视频？')}</h3>
        <p>{t('Because AI finally put anyone in that bridge shot. From mid-October 2026, TikTok clips have been swapping Stormzy for whoever is funniest doing the dance — an Inbetweeners schoolmate first, then Doris from Shrek 2, Jeremy Clarkson, the Inbetweeners again, Angry Ginge, Simon Cowell, Richard Hammond, Lesley from Benidorm and more. Two CapCut templates accelerated the wave in late October and early November, and trend trackers put #vossibop at tens of millions of views as of early November 2026. The comedy is the mismatch: the smoother the dance, the funnier it looks on someone who would never do it.','因为 AI 终于能让任何人站进那个桥上镜头。2026 年 10 月中旬起，TikTok 上开始把 Stormzy 换成各种最搞笑的人选来跳这支舞——最早是《中间人》的同学，然后是《怪物史莱克 2》的 Doris、Jeremy Clarkson、《中间人》再度登场、Angry Ginge、Simon Cowell、Richard Hammond、《班尼多姆》的 Lesley 等等。10 月底到 11 月初，两个 CapCut 模板又推了一把浪潮；据趋势追踪站汇总，截至 2026 年 11 月上旬 #vossibop 的播放量已达数千万级。笑点在于反差：舞越丝滑，放在一个绝不可能这么跳的人身上就越好笑。')}</p>
        <h3>{t('What photo works best for Vossi Bop AI dance videos?','什么样的照片做 Vossi Bop AI 舞蹈效果最好？')}</h3>
        <ul className="why-list">{photoTips.map((tip) => <li key={tip}><Check size={15}/>{tip}</li>)}</ul>
        <p>{t('The example photo above the upload box — the dancer from the Angry Ginge clip — shows the target: one person, full body, clearly lit, standing free of crowds. The AI keeps the face, hair and outfit from your photo and takes the bridge, the camera move and the dance from the template.','上传框上方的示例照片（Angry Ginge 片段里的舞者）就是标准：一个人、全身、光线清楚、周围没有人群。AI 会保留你照片里的脸、发型和穿搭，桥、镜头和舞蹈则来自模板。')}</p>
        <h3>{t('Vossi Bop AI dance video ideas','Vossi Bop AI 舞蹈视频创意')}</h3>
        <p>{t('Explore creative ways to make your own Vossi Bop-inspired dance video — try different characters, visual styles, and short-form video concepts:','用这些创意做出属于你的 Vossi Bop 舞蹈视频——换角色、换风格、换玩法：')}</p>
        <ul className="why-list">{ideas.map((idea) => <li key={idea}><Check size={15}/>{idea}</li>)}</ul>
        <p><button className="btn btn-primary" onClick={start}>{t('Try the Vossi Bop Dance Template','试用 Vossi Bop Dance 模板')}</button></p>
        <h3>{t('Is the Vossi Bop clip AI? Is it official?','Vossi Bop 视频是 AI 做的吗？是官方的吗？')}</h3>
        <p>{t('Yes, the trend is AI — the 2026 bridge clips are made with AI motion-transfer tools, and the honest posts carry the AI-generated label. No, it is not official: ViralReel is an independent AI video platform, and its Vossi Bop-inspired templates are fan-made tools not endorsed by Stormzy, NL Vossi, Atlantic Records or TikTok. Use photos of yourself or people who agreed, do not upload minors or celebrities, and add the trend sound from TikTok, Reels, or Shorts when you post — ViralReel does not license the song.','是 AI 做的——2026 年的桥上片段就是用 AI 动作迁移工具生成的，诚实的发布者都会带上 AI 生成标注。它也不是官方产品：ViralReel 是独立的 AI 视频平台，Vossi Bop 风格模板是粉丝向工具，与 Stormzy、NL Vossi、Atlantic Records 或 TikTok 无关。请只用自己或经同意的照片，不要上传未成年人或名人，发布时从 TikTok、Reels 或 Shorts 加热梗原声——ViralReel 不授权这首歌。')}</p>
        <p className="guide-more"><Link href="/blog/how-to-make-vossi-bop-dance-ai-video">{t('How to Make a Vossi Bop Dance AI Video','Vossi Bop 舞蹈 AI 视频制作教程')}</Link> · <Link href="/blog/what-is-vossi-bop-dance">{t('What Is the Vossi Bop Dance?','Vossi Bop 舞蹈是什么？')}</Link> · <Link href="/">{t('Explore More AI Dance Templates','浏览更多 AI 舞蹈模板')}</Link> · <Link href="/tiny-desk-outstanding-ai-template">{t('Tiny Desk Outstanding AI template','Tiny Desk Outstanding AI 模板')}</Link> · <Link href="/bicep-heart-ai-template">{t('Bicep Heart AI template','Bicep Heart AI 模板')}</Link> · <Link href="/ba-ba-ba-dance-ai-template">{t('Ba Ba Ba Dance AI template','Ba Ba Ba Dance AI 模板')}</Link> · <Link href="/pricing">{t('Credit packs','积分包')}</Link></p>
      </div></section>
      <section className="sec sec-alt" id="faq"><div className="container"><div className="sec-head"><p className="kick">{t('FAQ','常见问题')}</p><h2>{t('Frequently Asked Questions About Vossi Bop AI Videos','关于 Vossi Bop AI 视频的常见问题')}</h2></div><div className="faq-list">{faq.map(([question,answer],i) => <details key={question} open={i === 0}><summary>{question}</summary><p>{answer}</p></details>)}</div></div></section>
      <section className="sec" id="related"><div className="container"><div className="sec-head"><p className="kick">{t('Related','相关')}</p><h2>{t('Learn More About Vossi Bop Dance','了解更多 Vossi Bop Dance 内容')}</h2></div><div className="cluster">
        <div><h3>{t('Guides','指南')}</h3><Link href="/blog/how-to-make-vossi-bop-dance-ai-video">{t('How to Make a Vossi Bop Dance AI Video','怎么用 AI 做 Vossi Bop 舞蹈视频')}</Link><Link href="/blog/what-is-vossi-bop-dance">{t('What Is the Vossi Bop Dance?','Vossi Bop 舞蹈是什么？')}</Link><Link href="/">{t('Explore More AI Dance Templates','浏览更多 AI 舞蹈模板')}</Link></div>
        <div><h3>{t('More dance templates','更多舞蹈模板')}</h3><Link href="/tiny-desk-outstanding-ai-template">{t('Tiny Desk Outstanding','Tiny Desk Outstanding')}</Link><Link href="/bicep-heart-ai-template">{t('Bicep Heart Trend','Bicep Heart Trend')}</Link><Link href="/ba-ba-ba-dance-ai-template">{t('Ba Ba Ba Dance','Ba Ba Ba Dance')}</Link><Link href="/alors-on-danse-ai-template">{t('Alors On Danse','Alors On Danse')}</Link></div>
      </div></div></section>
      <section className="final-cta sec-alt"><div className="container"><h2>{t('Ready to Create Your Vossi Bop Dance Video?','准备好做你的 Vossi Bop Dance 视频了吗？')}</h2><p>{t('Upload your photo, choose the Vossi Bop-inspired dance template, and create your own AI dance video with ViralReel.','上传照片、选好 Vossi Bop 风格舞蹈模板，用 ViralReel 做出属于你的 AI 舞蹈视频。')}</p><button className="btn btn-primary btn-lg" onClick={start}>{t('Generate My Dance Video','生成我的舞蹈视频')}<ArrowRight size={16}/></button></div></section>
    </main>
    <ViralFooter/>
  </div>;
}
