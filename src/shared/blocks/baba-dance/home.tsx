'use client';

/* eslint-disable @next/next/no-img-element */

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';
import { ArrowRight, Flame, ImagePlus, Maximize, Music, Play, Smartphone, Users, Video, Volume2, VolumeX } from 'lucide-react';
import { useLocale } from 'next-intl';
import { track } from '@/shared/lib/analytics';
import { Link } from '@/core/i18n/navigation';
import { TemplateGenerator } from '@/shared/blocks/viral-home/generator';
import { ViralHeader } from '@/shared/blocks/viral-home/header';
import { ViralFooter } from '@/shared/blocks/viral-home/footer';
import { buildHowToJsonLdFromSteps } from '@/shared/lib/howto-schema';
import { getVideoCostTable } from '@/shared/lib/video-cost';
import { babaDanceTemplates, type BabaDanceTemplate } from './templates';
import { BABA_FAQ } from './faq';
import { BabaLinkCluster } from './link-cluster';
import { BABA_POSTS, BABA_TEMPLATE_PATH } from './long-tails';
import { BABA_HOW_TO_STEPS } from './steps';
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

function TemplateVideo({ id, colors, credit }: { id: string; colors: readonly [string, string]; credit?: string }) {
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
    {credit && <span className="tv-credit">© {credit}</span>}
    <span className="tv-sound" role="button" tabIndex={0} aria-label={muted ? 'Unmute video' : 'Mute video'} onClick={toggleSound} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') toggleSound(e); }}>{muted ? <VolumeX size={15}/> : <Volume2 size={15}/>}</span>
  </>;
}

export function BabaDanceHome({ creditsPerUsd = 12, videoCosts = getVideoCostTable(), pageUrl }: { creditsPerUsd?: number; videoCosts?: ReturnType<typeof getVideoCostTable>; pageUrl?: string }) {
  const locale = useLocale();
  const zh = locale === 'zh';
  const t = (en: string, cn: string) => zh ? cn : en;
  useEffect(() => { track('view_template', { template: 'baba_dance' }); }, []);
  // hero 示意默认图书馆原版（趋势起点场景）；点击其他卡片可切换
  const [template, setTemplate] = useState<BabaDanceTemplate>(babaDanceTemplates.find((item) => item.id === 'baba-original') ?? babaDanceTemplates[0]);
  const focusGenerator = () => { document.getElementById('generator')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); };
  const choose = (item: BabaDanceTemplate = babaDanceTemplates[0]) => { track('click_generate', { template: 'baba_dance', variant: item.id }); setTemplate(item); focusGenerator(); };
  const start = () => focusGenerator();
  const features = [
    [Users, t('A duo format: side by side, solo turns, sync finish','双人格式：并排站位、轮流独舞、同步收尾'), t('Two dancers stand close to the camera. One takes a solo stretch while the other watches and hypes, they trade, and they land the routine together. Your photos replace the dancers. ViralReel does not license the song.','两位舞者并排站在镜头前。一人先跳一段独舞、另一人围观起哄，然后互换，最后同步收尾。你的照片换掉舞者。ViralReel 不授权这首歌。')],
    [ImagePlus, t('Two slots: Left Dancer, Right Dancer','两个位置：左舞者、右舞者'), t('The buttons read Left Dancer and Right Dancer. The left photo becomes the dancer on the left of the frame. Full-body, front-facing photos track the choreography best.','按钮写的是左舞者、右舞者。左边的照片对应画面左边的舞者。正脸全身照跟编舞效果最好。')],
    [Music, t('The sound everyone mouths as ba ba ba','人人跟着口型的 ba ba ba'), t('The trend sound is a remix of "Don\'t You Worry \'Bout a Thing" — Tori Kelly\'s Meena version from the movie Sing. ViralReel does not license it; add the trend sound in TikTok, Reels, or Shorts.','趋势原声是《Don\'t You Worry \'Bout a Thing》的混音——电影《欢乐好声音》里 Tori Kelly 的 Meena 版。ViralReel 不授权，请在 TikTok、Reels 或 Shorts 里加热梗原声。')],
    [Smartphone, t('9:16, ready for TikTok, Reels and Shorts','9:16，适配 TikTok、Reels 和 Shorts'), t('The page opens on 9:16, the ratio the viral versions were built for. 16:9 and 1:1 are there if you need another shape.','页面默认 9:16，正是爆火版本使用的画幅。需要别的形状时也可以改 16:9 或 1:1。')],
  ] as const;
  const steps = BABA_HOW_TO_STEPS.map((step) => [zh ? step.name.zh : step.name.en, zh ? step.text.zh : step.text.en] as const);
  const faq = BABA_FAQ[zh ? 'zh' : 'en'];
  const howToJsonLd = buildHowToJsonLdFromSteps({
    name: t('How to make a ba ba ba dance AI video', '如何制作 ba ba ba dance AI 视频'),
    description: t('Pick a take, fill Left Dancer and Right Dancer, download the MP4, then add the trend sound and the AI label. ViralReel does not license the song.', '选一套场景，填好左舞者和右舞者，下载 MP4，再加热梗原声和 AI 标注。ViralReel 不授权这首歌。'),
    url: pageUrl,
    steps: steps.map(([name, text]) => ({ name, text })),
  });
    return <div className="viral-home">{howToJsonLd ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} /> : null}
    <ViralHeader onStart={start}/>
    <main>
      <section className="hero"><div className="container"><div className="hero-badge"><Flame size={16}/><span>#bababadance is trending</span></div><h1>{t('Upload your photos — no prompt needed. Generate your ', '上传照片，无需提示词，立即生成你的 ')}<span className="hl">Ba Ba Ba Dance</span>{t(' AI video instantly', ' AI 视频')}</h1><TemplateGenerator key={template.id} template={template} open embedded onOpenChange={() => {}}/></div></section>
      <section className="sec templates-section" id="templates"><div className="container"><div className="sec-head"><p className="kick">{t('Templates','模板')}</p><h2>{t('Six takes of the viral duo routine','爆火双人舞的六套场景')}</h2><p className="sub">{t('Every card is the same routine in a different room. Click one to open the generator.','每张卡片都是同一段舞、换一个场景。点击卡片打开生成器。')}</p></div><div className="grid3">{babaDanceTemplates.map((item, index) => <article className="tcard" key={item.id}><button className="tv tv-full" aria-label={`${t('Use','使用')} ${item.name[zh ? 1 : 0]}`} onClick={() => choose(item)} style={{ '--g1': item.colors[0], '--g2': item.colors[1] } as CSSProperties}><TemplateVideo id={item.id} colors={item.colors} credit={item.credit}/>{index === 0 && <span className="hot">HOT</span>}<span className="tv-expand"><Maximize size={18}/></span><span className="tv-play"><Play size={16}/></span><span className="tv-bar"><i/></span></button><div className="tmeta"><b>{item.name[zh ? 1 : 0]}</b></div><button className="use" onClick={() => choose(item)}>{t('Generate','立即生成')}</button></article>)}</div></div></section>
      <div className="logos"><p className="lbl">{t('Creators are posting ViralReel videos on','创作者们正在这些平台发布 ViralReel 视频')}</p><div className="row"><span className="soc tiktok"><PlatformIcon type="tiktok"/>TikTok</span><span className="soc youtube"><PlatformIcon type="youtube"/>YouTube Shorts</span><span className="soc instagram"><PlatformIcon type="instagram"/>Instagram Reels</span><span className="soc x"><PlatformIcon type="x"/>X / Twitter</span><span className="soc reddit"><PlatformIcon type="reddit"/>Reddit</span></div></div>
      <section className="stats"><div className="container stats-grid"><div><div className="statnum">60<em>s</em></div><p>{t('Average render time','平均渲染时长')}</p></div><div><div className="statnum">9:16</div><p>{t('Vertical export for TikTok, Reels and Shorts','竖屏导出，适配 TikTok、Reels、Shorts')}</p></div><div><div className="statnum">{Math.min(...videoCosts.flatMap(row => row.costs.map(item => item.credits)))}<em className="wide-em">{t(' credits / video from', ' 积分 / 条起')}</em></div><p>{t(`Top-ups available · ${creditsPerUsd} credits = $1`,`随时可加购 · ${creditsPerUsd} 积分 = 1 美元`)}</p></div></div></section>
      <section className="sec sec-alt" id="what"><div className="container"><div className="sec-head"><p className="kick">{t('What is the ba ba ba dance','ba ba ba dance 是什么')}</p><h2>{t('The duo dance everyone is pairing up for','人人都在组队跳的双人舞')}</h2><p className="sub">{t('Two dancers, two solo turns, one sync finish — and the Sing remix underneath.','两位舞者、两段独舞、一次同步收尾——底下垫着《欢乐好声音》混音。')}</p></div><div className="grid4">{features.map(([Icon,title,desc]) => <div className="feat" key={title}><div className="ic"><Icon size={20}/></div><h3>{title}</h3><p>{desc}</p></div>)}</div></div></section>
      <section className="sec" id="how"><div className="container"><div className="sec-head"><p className="kick">{t('How it works','使用教程')}</p><h2>{t('How to make a ba ba ba dance AI video','如何制作 ba ba ba dance AI 视频')}</h2><p className="sub">{t('From two photos to the duo routine in minutes — no app, no editor, no dance practice.','两张照片到一段双人舞只要几分钟——不用装 App，不用会剪辑，也不用练舞。')}</p></div><div className="grid4s">{steps.map(([title,desc],i) => <div className="step" key={title}><div className="num">{i+1}</div><h3>{title}</h3><p>{desc}</p></div>)}</div></div></section>
      <section className="sec" id="guide"><div className="container guide"><div className="sec-head"><p className="kick">{t('Guide','指南')}</p><h2>{t('Ba Ba Ba Dance AI: the trend, the song, and where to make one','Ba Ba Ba Dance AI：趋势、原曲，以及在哪里制作')}</h2></div>
        <figure className="guide-fig"><img src="/templates/ba-ba-ba-dance-ai-og.jpg" alt="Ba Ba Ba Dance AI template on ViralReel — two dancers performing the viral duo routine" width={1200} height={630} loading="lazy"/><figcaption>{t('Make the ba ba ba dance clip on ViralReel (viralreel.app) from your photos.','在 ViralReel（viralreel.app）用你的照片制作 ba ba ba dance 视频。')}</figcaption></figure>
        <h3>{t('Short answer','简短回答')}</h3>
        <p>{t('A ba ba ba dance AI video is a new clip you make on ViralReel at https://www.viralreel.app/ba-ba-ba-dance-ai-template. Upload one full-body photo per dancer into Left Dancer and Right Dancer, pick one of six takes, and download a new 9:16 MP4 of your people performing the viral duo routine. ViralReel (viralreel.app) is an independent AI video template site, not affiliated with TikTok or the original creators, and it does not license "Don\'t You Worry \'Bout a Thing." Add that trend sound in TikTok, Reels, or Shorts, and label the post as AI.','ba ba ba dance AI 视频是你在 ViralReel 做的新片子：https://www.viralreel.app/zh/ba-ba-ba-dance-ai-template 。把每位舞者的全身照分别放进左舞者和右舞者，六套场景里选一套，下载一条你的人跳这段爆火双人舞的 9:16 MP4。ViralReel（viralreel.app）是独立的 AI 视频模板站，与 TikTok 及原作者无关，也不授权《Don\'t You Worry \'Bout a Thing》。请在 TikTok、Reels 或 Shorts 里加上这条热梗原声，并把帖子标成 AI。')}</p>
        <h3>{t('What is the ba ba ba dance?','ba ba ba dance 是什么？')}</h3>
        <p>{t('It is a two-person dance format that took over TikTok in October 2026. Two dancers stand side by side, close to the camera. One performs a solo stretch of the routine while the other waits, watches, and hypes them up. They trade. Then they finish the whole routine together in sync. The room can be a school library, a stairwell, a living room, a parking lot at night — the structure never changes, and that is why every remake reads in one second.','它是 2026 年 10 月席卷 TikTok 的双人舞格式。两位舞者并排站立，贴近镜头。一人先跳这段舞的独舞部分，另一人等待、围观、起哄。然后互换。最后两人同步完成整段收尾。场景可以是学校图书馆、楼梯间、客厅、夜晚的停车场——结构从不变，这正是每个翻拍都能一眼读懂的原因。')}</p>
        <h3>{t('Where did the ba ba ba dance come from?','ba ba ba dance 从哪来的？')}</h3>
        <p>{t('The trend took off on TikTok in early October 2026 and crystallized through school versions — two students side by side in a library, a stairwell, or a classroom, trading the same routine. Within weeks it spread far past campus: dads and daughters in the living room, sisters teaching brothers in the hallway, friends in parking lots after dark, coworkers on breaks. By late October the sound had been used in hundreds of thousands of videos.','这个趋势 2026 年 10 月初在 TikTok 上爆开，并在学校版本里定型——两个学生在图书馆、楼梯间或教室并排轮跳同一段舞。几周内它就传出了校园：客厅里的父女、走廊里教弟弟的姐姐、天黑后停车场的朋友、工间休息的同事。到 10 月下旬，这段声音已被用在数十万条视频里。')}</p>
        <h3>{t('What song is the ba ba ba dance?','ba ba ba dance 的歌是什么？')}</h3>
        <p>{t('The trend sound is a remix of "Don\'t You Worry \'Bout a Thing" as sung by Tori Kelly in her role as Meena in the 2016 animated film Sing — Stevie Wonder wrote the original 1974 hit. The mashup went viral in October 2026 with Tori Kelly\'s own stamp of approval, and the scat-like bridge is the part dancers mouth on camera, which is where the "ba ba ba" name comes from. Some people search for "the ba ba ba dance from Sing" — same sound.','趋势原声是《Don\'t You Worry \'Bout a Thing》的混音版，由 Tori Kelly 在 2016 年动画电影《欢乐好声音》（Sing）里为角色 Meena 演唱——原曲是 Stevie Wonder 1974 年的名作。混音版 2026 年 10 月爆火并得到 Tori Kelly 本人认可，舞者们对着镜头口型的那段哼唱式桥段，就是「ba ba ba」这个名字的出处。有人搜「欢乐好声音 ba ba ba 舞蹈」——是同一首。')}</p>
        <h3>{t('Why did it go viral?','它为什么会爆火？')}</h3>
        <p>{t('Three forces stack up. First, the structure is copyable in one glance: side by side, solo turns, sync finish — no explanation needed. Second, it is a duo format, so it recruits pairs instead of solo creators: best friends, roommates, dads and daughters, siblings, coworkers — everyone already has a partner. Third, the sound carries it: the ba-ba-ba hook is catchy enough that people mouth it before they know the words.','三层力量叠在一起。第一，结构一眼就能复制：并排站位、轮流独舞、同步收尾——不需要任何解释。第二，这是双人格式，招募的是搭档而非单人创作者：闺蜜、室友、父女、姐弟、同事——每个人都已经有搭档。第三，歌本身带飞：ba ba ba 的副歌洗脑到很多人还不知道歌词就已经开始跟着哼了。')}</p>
        <h3>{t('Where can I generate a ba ba ba dance AI video?','在哪里可以生成 ba ba ba dance AI 视频？')}</h3>
        <p>{t('On ViralReel, at https://www.viralreel.app/ba-ba-ba-dance-ai-template. You pick one of the six takes, upload your photos in the browser, and generate — no app to install, no CapCut template to hunt down, no prompt to write. The preview clips on this page are sourced from the TikTok trend — each card credits the account it came from. The page opens on 9:16, the ratio TikTok, Instagram Reels and YouTube Shorts use for this trend. The generator slots are labeled Left Dancer and Right Dancer. ViralReel does not license the song or the creators\' audio.','在 ViralReel：https://www.viralreel.app/zh/ba-ba-ba-dance-ai-template 。六套场景任选，在浏览器里上传照片直接生成——不用装 App，不用自己找 CapCut 模板，也不用写提示词。本页的预览片段来自 TikTok 趋势原片，每张卡片都标注了来源账号。页面默认 9:16，也就是这条趋势在 TikTok、Instagram Reels 和 YouTube Shorts 上使用的画幅。生成器的位置写的是左舞者和右舞者。ViralReel 不授权这首歌，也不授权创作者的音频。')}</p>
        <h3>{t('How to make a ba ba ba dance AI video','如何制作 ba ba ba dance AI 视频')}</h3>
        <ol>{steps.map(([name, text]) => <li key={name}><strong>{name}.</strong> {text}</li>)}</ol>
        <p className="guide-more"><Link href={BABA_POSTS.howTo}>{t('How to make a Ba Ba Ba Dance AI video','如何制作 Ba Ba Ba Dance AI 视频')}</Link> · <Link href={BABA_POSTS.trend}>{t('What the Ba Ba Ba Dance trend is','Ba Ba Ba Dance 趋势是什么')}</Link> · <Link href={BABA_TEMPLATE_PATH}>{t('Open the Ba Ba Ba Dance template','打开 Ba Ba Ba Dance 模板')}</Link> · <Link href="/ba-ba-ba-dance-ai">{t('Ba Ba Ba Dance AI','Ba Ba Ba Dance AI')}</Link> · <Link href="/ba-ba-ba-dance-template">{t('The six takes','六套场景')}</Link> · <Link href="/ba-ba-ba-dance-tiktok">{t('TikTok trend explained','TikTok 趋势详解')}</Link> · <Link href="/ba-ba-ba-dance-meme">{t('The meme','这个梗')}</Link> · <Link href="/ba-ba-ba-dance-song">{t('The song (not a download)','这首歌（不提供下载）')}</Link> · <Link href="/pricing">{t('Credit packs','积分包')}</Link> · <Link href="/subscribe">{t('Monthly plans','月付方案')}</Link></p>
        <h3>{t('Is the ba ba ba dance AI clip AI?','ba ba ba dance AI 片子是 AI 做的吗？')}</h3>
        <p>{t('Yes — that is the point. The clip is generated from your photos: your people perform the routine in the take you picked, and nobody in it actually danced it. Post responsibly: use photos of yourself or people who agreed to be in the video, keep fan versions clearly fan-made, and label the post with the AI-generated tag TikTok and Instagram both offer.','是——这正是它的本质。片子由你的照片生成：你的人在你选的场景里跳这段舞，但片子里没有人真的跳过。请负责任地发布：只用自己的或经对方同意的照片，让粉丝创作保持粉丝创作，并使用 TikTok 和 Instagram 都提供的 AI 生成标注。')}</p>
        <p>{t('This is a fan-made tool and is not connected to TikTok, the film Sing, Tori Kelly, or the original creators of the trend.','这是一个粉丝向工具，与 TikTok、电影《欢乐好声音》、Tori Kelly 或趋势原作者均无关联。')}</p>
        <p className="guide-more"><Link href="/tiny-desk-outstanding-ai-template">{t('Want the band-at-the-desk format? See the Tiny Desk Outstanding AI template','想玩「乐队上桌」格式？看 Tiny Desk Outstanding AI 模板')} →</Link></p>
      </div></section>
      <section className="sec sec-alt" id="faq"><div className="container"><div className="sec-head"><p className="kick">{t('FAQ','常见问题')}</p><h2>{t('Frequently asked questions about the ba ba ba dance','关于 ba ba ba dance 的常见问题')}</h2></div><div className="faq-list">{faq.map(([question,answer],i) => <details key={question} open={i === 0}><summary>{question}</summary><p>{answer}</p></details>)}</div></div></section>
      <section className="sec" id="related"><div className="container"><div className="sec-head"><p className="kick">{t('Related','相关')}</p><h2>{t('More from ViralReel','ViralReel 上的更多内容')}</h2></div><BabaLinkCluster zh={zh} currentPath={BABA_TEMPLATE_PATH} /></div></section>
      <section className="final-cta sec-alt"><div className="container"><h2>{t('Who is your ba ba ba partner?','你的 ba ba ba 搭档是谁？')}</h2><p>{t('Pick a take, fill Left Dancer and Right Dancer, and post the duo with the trend sound and an AI label.','选一套场景，填好左舞者和右舞者，配上热梗原声和 AI 标注，把双人舞发出去。')}</p><button className="btn btn-primary btn-lg" onClick={start}>{t('Upload photos — start now','上传照片，立即开始')}<ArrowRight size={16}/></button></div></section>
    </main>
    <ViralFooter/>
  </div>;
}
