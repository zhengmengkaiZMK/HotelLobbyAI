'use client';

/* eslint-disable @next/next/no-img-element */

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';
import { ArrowRight, Flame, Maximize, Play, Smartphone, Trophy, Users, Video, Volume2, VolumeX } from 'lucide-react';
import { useLocale } from 'next-intl';
import { Link } from '@/core/i18n/navigation';
import { TemplateGenerator } from '@/shared/blocks/viral-home/generator';
import { ViralHeader } from '@/shared/blocks/viral-home/header';
import { ViralFooter } from '@/shared/blocks/viral-home/footer';
import { getVideoCostTable } from '@/shared/lib/video-cost';
import { useAppContext } from '@/shared/contexts/app';
import { ozilGoalTemplates, type OzilGoalTemplate } from './templates';
import { OZIL_FAQ } from './faq';
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

export function OzilGoalHome({ creditsPerUsd = 10, videoCosts = getVideoCostTable() }: { creditsPerUsd?: number; videoCosts?: ReturnType<typeof getVideoCostTable> }) {
  const locale = useLocale();
  const zh = locale === 'zh';
  const t = (en: string, cn: string) => zh ? cn : en;
  const { user, setIsShowSignModal } = useAppContext();
  const [template, setTemplate] = useState<OzilGoalTemplate>(ozilGoalTemplates[0]);
  const [open, setOpen] = useState(false);
  const choose = (item: OzilGoalTemplate = ozilGoalTemplates[0]) => { setTemplate(item); setOpen(true); };
  const start = () => user ? choose() : setIsShowSignModal(true);
  const madeBy = ['Floodlit finish', 'Training kit', 'Park pitch', 'Waistcoat', 'Creature'];
  const madeByZh = ['夜场灯光', '训练背心', '公园草坪', '马甲收尾', '怪兽版本'];
  const features = [
    [Trophy, t('The chip, the slides, the empty net','挑球、滑铲、空门'), t('Keeper rushes out, the ball drops, two slides miss, and the finish is walked in. That is the October 2026 remake of the 2016 goal.','门将扑出来，球落下来，两次滑铲落空，然后推进空门。这是 2026 年 10 月对 2016 年那个进球的重拍。')],
    [Video, t('One photo takes the run','一张照片完成跑动'), t('Your face replaces the player on the ball. The keeper, the slides and the side camera stay.','带球的人换成你的脸。门将、滑铲和侧面镜头都留着。')],
    [Users, t('Five ways into the same finish','同一个进球的五种进法'), t('Night match, training kit, park suit, waistcoat, and a creature on the dirt pitch.','夜场原版、训练背心、公园西装、马甲进球，以及土场上的怪兽。')],
    [Smartphone, t('Vertical, long enough to finish','竖屏，够长才能进球'), t('Opens on 9:16, up to 15 seconds, so the chip is not the last frame.','默认 9:16，最长 15 秒，挑球不会是最后一帧。')],
  ] as const;
  const steps = [
    [t('Pick a template','选择模板'), t('Five variants of the same chip finish. Pick the one that fits the photo.','同一个挑射进球的五个变体。选一个和照片最配的。')],
    [t('Upload one photo','上传一张照片'), t('Front-facing, face clear, decent light. Creature Goal wants one photo of the animal.','正脸、五官清楚、光线别太暗。怪兽进球上传一张动物的照片。')],
    [t('Set ratio, resolution, length','选画幅、清晰度和时长'), t('9:16 is the default. Length goes up to 15 seconds. The credit cost updates before you generate.','默认 9:16。时长最长 15 秒。积分会在你点生成之前按选项更新。')],
    [t('Download and post','下载并发布'), t('Export the MP4, then add a trend sound in TikTok, Reels, or Shorts and label the post as AI where the app asks.','导出 MP4，再到 TikTok、Reels 或 Shorts 里加上热梗音频，并按平台要求标注 AI。')],
  ];
  const faq = OZIL_FAQ[zh ? 'zh' : 'en'];
  const reviews = [
    [t('Jake M.','Jake M.'),'“Put my own face on the night finish and posted it the same evening. The two slides are what make people stop.”','@jakemakes · 412K followers','/avatars/review-1.jpg'],
    [t('Sofia R.','Sofia R.'),'“I needed five versions for the meme page. One photo each, same goal, different clothes. The queue kept up.”','Runs @dailydoseofmemes','/avatars/review-2.jpg'],
    [t('Tom K.','Tom K.'),'“Put the dog on the dirt pitch. No editor, just the phone browser. That one outperformed the kit clips.”','@tompetsdaily · 208K followers','/avatars/review-3.jpg'],
    [t('Liam P.','Liam P.'),'“The suit version is the one my group chat actually shared. Vertical export, the whole run in frame, straight to Reels.”','@liam.plays · 96K followers','/avatars/review-4.jpg'],
    [t('Emma L.','Emma L.'),'“I am not a video editor. Uploaded one photo, picked Night Match, and it looked like a phone clip of a match instead of an ad.”','@emmadaybyday · 340K followers','/avatars/review-5.jpg'],
    [t('Marcus J.','Marcus J.'),'“15 seconds is the part that matters. A five-second face-swap ends before the ball goes in.”','@marcusmakes · 155K followers','/avatars/review-6.jpg'],
  ] as const;
  return <div className="viral-home">
    <ViralHeader onStart={start}/>
    <main>
      <section className="hero"><div className="container"><div className="hero-badge"><Flame size={16}/><span>Ozil Goal is trending</span><span className="bar"/><b>2016 finish</b></div><h1>{t('Score the viral ', '60 秒打进爆火的 ')}<span className="hl">Ozil Goal</span>{t(' in 60 seconds', '')}</h1><p className="lead">{t('Upload one front-facing photo and take the run: chip over the diving keeper, two slides that miss, then walk the ball into the empty net.', '上传一张正面照，完成这段跑动：挑过扑出来的门将，两次滑铲落空，然后把球推进空门。')}</p><div className="hero-cta"><button className="btn btn-primary btn-lg" onClick={start}>{user ? t('Create Now', '立即创作') : t('Get Started', '立即开始')}<ArrowRight size={16}/></button><a className="btn btn-outline btn-lg" href="#templates">{t('See templates', '浏览模板')}</a></div><div className="hero-proof"><div className="avatars" aria-hidden="true"><span/><span/><span/><span/></div><span><b>1 Nov 2016</b> {t('the finish people still remake', '大家还在重拍的那个进球')}</span></div></div></section>
      <section className="sec templates-section" id="templates"><div className="container"><div className="sec-head"><p className="kick">{t('Templates','模板')}</p><h2>{t('Pick a look, upload one photo, done','选一个造型、传一张照片，一键出片')}</h2><p className="sub">{t('Every card is the same finish with a different cast. Click one to open the generator.','每张卡片都是同一个进球，换的是完成跑动的人。点击卡片打开生成器。')}</p></div><div className="grid3">{ozilGoalTemplates.map((item, index) => <article className="tcard" key={item.id}><button className="tv tv-full" aria-label={`${t('Use','使用')} ${item.name[zh ? 1 : 0]}`} onClick={() => choose(item)} style={{ '--g1': item.colors[0], '--g2': item.colors[1] } as CSSProperties}><TemplateVideo id={item.id} colors={item.colors}/>{index === 0 && <span className="hot">HOT</span>}<span className="tv-expand"><Maximize size={18}/></span><span className="tv-play"><Play size={16}/></span><span className="tv-bar"><i/></span></button><div className="tmeta"><b>{item.name[zh ? 1 : 0]}</b><span>{zh ? madeByZh[index] : madeBy[index]}</span></div><button className="use" onClick={() => choose(item)}>{t('Generate','立即生成')}</button></article>)}</div></div></section>
      <div className="logos"><p className="lbl">{t('Creators are posting ViralReel videos on','创作者们正在这些平台发布 ViralReel 视频')}</p><div className="row"><span className="soc tiktok"><PlatformIcon type="tiktok"/>TikTok</span><span className="soc youtube"><PlatformIcon type="youtube"/>YouTube Shorts</span><span className="soc instagram"><PlatformIcon type="instagram"/>Instagram Reels</span><span className="soc x"><PlatformIcon type="x"/>X / Twitter</span><span className="soc reddit"><PlatformIcon type="reddit"/>Reddit</span></div></div>
      <section className="stats"><div className="container stats-grid"><div><div className="statnum">2016</div><p>{t('The finish people still remake','大家还在重拍的那个进球')}</p></div><div><div className="statnum">60<em>s</em></div><p>{t('Average render time','平均渲染时长')}</p></div><div><div className="statnum">4.8<em>★</em></div><p>{t('From 3,100+ reviews','来自 3,100+ 条评价')}</p></div><div><div className="statnum">{Math.min(...videoCosts.flatMap(row => row.costs.map(item => item.credits)))}<em className="wide-em">{t(' credits / video from', ' 积分 / 条起')}</em></div><p>{t(`Top-ups available · ${creditsPerUsd} credits = $1`,`随时可加购 · ${creditsPerUsd} 积分 = 1 美元`)}</p></div></div></section>
      <section className="sec sec-alt" id="what"><div className="container"><div className="sec-head"><p className="kick">{t('What is the Ozil Goal','Ozil Goal 是什么')}</p><h2>{t('The finish people are remaking','大家正在重拍的那个进球')}</h2><p className="sub">{t('Chip, two missed slides, empty net — rebuilt from one photo.','挑球、两次滑铲落空、空门——一张照片重新做出来。')}</p></div><div className="grid4">{features.map(([Icon,title,desc]) => <div className="feat" key={title}><div className="ic"><Icon size={20}/></div><h3>{title}</h3><p>{desc}</p></div>)}</div></div></section>
      <section className="sec" id="how"><div className="container"><div className="sec-head"><p className="kick">{t('How it works','使用教程')}</p><h2>{t('How to make an Ozil Goal video','如何制作 Ozil Goal 视频')}</h2><p className="sub">{t('From one photo to a vertical clip in about a minute — no app, no editor.','一张照片到一条竖屏视频大约一分钟——不用装 App，不用会剪辑。')}</p></div><div className="grid4s">{steps.map(([title,desc],i) => <div className="step" key={title}><div className="num">{i+1}</div><h3>{title}</h3><p>{desc}</p></div>)}</div></div></section>
      <section className="sec"><div className="container"><div className="sec-head"><p className="kick">{t('Testimonials','用户评价')}</p><h2>{t('People are posting the finish','大家都在发这个进球')}</h2><p className="sub">{t('…because one photo is enough to join while the clip is still moving.','…因为这条片子还在传的时候，一张照片就够上车。')}</p></div><div className="quote-viewport"><div className="quote-grid">{reviews.map(([name,quote,handle,img]) => <article className="qcard" key={name}><div className="stars">★★★★★</div><p>{quote}</p><div className="who"><span className="av" style={{ backgroundImage: `url(${img})` }}/><div><b>{name}</b><span>{handle}</span></div></div></article>)}{reviews.map(([name,quote,handle,img]) => <article className="qcard" aria-hidden="true" key={'b-'+name}><div className="stars">★★★★★</div><p>{quote}</p><div className="who"><span className="av" style={{ backgroundImage: `url(${img})` }}/><div><b>{name}</b><span>{handle}</span></div></div></article>)}</div></div></div></section>
      <section className="sec" id="guide"><div className="container guide"><div className="sec-head"><p className="kick">{t('Guide','指南')}</p><h2>{t('Ozil Goal: why it went viral, and where to make one','Ozil Goal：为什么爆火，以及在哪里制作')}</h2></div>
        <figure className="guide-fig"><img src="/templates/ozil-ai-goal-og.jpg" alt="Ozil Goal template on ViralReel — chip over a diving keeper, then an empty net" width={1200} height={630} loading="lazy"/><figcaption>{t('Make the Ozil Goal on ViralReel (viralreel.app) from one photo.','在 ViralReel（viralreel.app）用一张照片制作 Ozil Goal。')}</figcaption></figure>
        <h3>{t('What is the Ozil Goal?','Ozil Goal 是什么？')}</h3>
        <p>{t('The Ozil Goal is a vertical remake of the late winner Mesut Özil scored away at Ludogorets on 1 November 2016. The sequence people recognize is short: the keeper rushes out, the ball is chipped over the dive, it drops, two defenders slide and miss, and the player walks the ball into the empty net. In October 2026 the same sequence started circulating as an AI template, with a different person, a suit, or a creature in the run.','Ozil Goal 是对 Mesut Özil 2016 年 11 月 1 日客场对阵 Ludogorets 那个补时绝杀的竖屏重拍。大家认出来的顺序很短：门将扑出来，球挑过扑救，球落下来，两名后卫滑铲落空，然后球员把球推进空门。2026 年 10 月，同一套动作开始以 AI 模板的形式传开，跑动的人换成另一个人、一套西装，或一只怪兽。')}</p>
        <h3>{t('Why did the Ozil Goal go viral?','Ozil Goal 为什么会爆火？')}</h3>
        <p>{t('It went viral because the finish is readable with the sound off. The chip is the hook, and the two slides plus the empty net are the punchline. A one-photo format means a friend or a pet can take the run without a second picture. Short face-swap tools often cut the clip after the chip, so the versions that keep the slides and the finish are the ones people save and repost. The wave of AI remakes spread on TikTok, Reels, Shorts, and X through October 2026.','它会爆，是因为关掉声音也能看懂这个收尾。挑球是钩子，两次滑铲加上空门才是笑点。单张照片的格式意味着朋友或宠物都能去完成这段跑动，不需要第二张图。短换脸工具常常在挑球之后就把片子剪掉，所以把滑铲和进球留完整的版本，才是大家保存和转发的那些。AI 重拍在 2026 年 10 月通过 TikTok、Reels、Shorts 和 X 传开。')}</p>
        <h3>{t('Where can I generate an Ozil Goal video?','在哪里可以生成 Ozil Goal 视频？')}</h3>
        <p>{t('On ViralReel, at https://www.viralreel.app/ozil-ai-goal-template. ViralReel (viralreel.app) is an independent AI video template site. You upload one photo in the browser. You do not install an app, hunt down a reference clip, or write a prompt. The templates are Night Match, Training Kit, Park Suit, Waistcoat Finish, and Creature Goal. The page opens on 9:16, the ratio TikTok, Instagram Reels, and YouTube Shorts use for this trend, with length up to 15 seconds.','在 ViralReel：https://www.viralreel.app/zh/ozil-ai-goal-template 。ViralReel（viralreel.app）是独立的 AI 视频模板站。在浏览器里上传一张照片即可，不用安装 App，不用自己找参考视频，也不用写提示词。模板有夜场原版、训练背心、公园西装、马甲进球和怪兽进球。页面默认 9:16，也就是这条趋势在 TikTok、Instagram Reels 和 YouTube Shorts 上使用的画幅，时长最长 15 秒。')}</p>
        <h3>{t('How do you make an Ozil Goal video?','怎么制作 Ozil Goal 视频？')}</h3>
        <ol>
          <li>{t('Open the Ozil Goal template on ViralReel: https://www.viralreel.app/ozil-ai-goal-template. Pick the look that fits the photo.','打开 ViralReel 的 Ozil Goal 模板：https://www.viralreel.app/zh/ozil-ai-goal-template 。选一个和照片匹配的造型。')}</li>
          <li>{t('Upload one clear, front-facing photo of one person. Creature Goal uses one photo of the animal. Even light matters on a night-stadium template. Skip sunglasses, group shots, and heavy filters.','上传一张清晰的单人正面照。怪兽进球用一张动物的照片。夜场模板里光线要均匀。不要戴墨镜，不要用合照，也尽量不要加重滤镜。')}</li>
          <li>{t('Keep the aspect ratio on 9:16, choose the resolution and a length up to 15 seconds, and check the credit cost shown before you generate.','画幅保持 9:16，选好分辨率和最长 15 秒的时长，生成前看清页面显示的积分。')}</li>
          <li>{t('Download the MP4. In TikTok, Reels, or Shorts, add a trend sound so the post joins the same format, and turn on the AI label where the platform asks.','下载 MP4。在 TikTok、Reels 或 Shorts 里加上热梗原声，帖子才会进同一条趋势；平台要求标注 AI 生成时，按要求打开。')}</li>
        </ol>
        <p>{t('A text prompt such as "a player chips the keeper" invents a new shot and often ends before the empty net. The ViralReel template is built to keep this sequence: chip, two slides, finish, and your photo on the ball.','如果只写一句「球员把球挑过门将」，模型会另拍一条新片子，而且经常在空门之前就结束。ViralReel 的模板是按这段顺序来的：挑球、两次滑铲、进球，带球的人用你的照片。')}</p>
        <h3>{t('Is a CapCut face-swap the same as this template?','CapCut 换脸和这个模板是同一条吗？')}</h3>
        <p>{t('No. The 2016 finish is the match itself, away at Ludogorets, late in the game. A CapCut face-swap is a short overlay that often stops after the chip. People who ask for an Ozil Goal, or a way to put themselves in the finish want the full sequence, not a five-second swap. The ViralReel template follows that sequence, on a plain kit with no crest, and it is not an official Özil or club tool.','不是。2016 年的进球是比赛本身，客场对阵 Ludogorets，临近终场。CapCut 换脸是一段很短的叠脸，常常在挑球之后就停了。搜索 Ozil Goal，或「怎么把自己放进这个进球」，要的是完整顺序，不是五秒换脸。ViralReel 的模板按这个顺序来做，球衣是素色、没有队徽，也不是 Özil 或俱乐部的官方工具。')}</p>
        <p className="guide-more"><Link href="/bulin-47-ai-template">{t('Want the street freestyle? See the Bulin 47 AI template','想玩街头 freestyle？看 Bulin 47 AI 模板')} →</Link></p>
      </div></section>
      <section className="sec sec-alt" id="faq"><div className="container"><div className="sec-head"><p className="kick">{t('FAQ','常见问题')}</p><h2>{t('Frequently asked questions about the Ozil Goal','关于 Ozil Goal 的常见问题')}</h2></div><div className="faq-list">{faq.map(([question,answer],i) => <details key={question} open={i === 0}><summary>{question}</summary><p>{answer}</p></details>)}</div></div></section>
      <section className="final-cta sec-alt"><div className="container"><h2>{t('Ready to take the run?','准备好去完成这段跑动了吗？')}</h2><p>{t('Upload one photo and join the finish while the clip is still moving.','上传一张照片，趁这条片子还在传的时候进这个进球。')}</p><button className="btn btn-primary btn-lg" onClick={() => choose()}>{t('Upload 1 photo — start now','上传 1 张照片，立即开始')}<ArrowRight size={16}/></button></div></section>
    </main>
    <ViralFooter/>
    <TemplateGenerator key={template.id} template={template} open={open} onOpenChange={setOpen} preferModel="MiniMax-H3"/>
  </div>;
}
