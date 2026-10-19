'use client';

/* eslint-disable @next/next/no-img-element */

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';
import { ArrowRight, Flame, Maximize, PawPrint, Play, Smartphone, Users, Video, Volume2, VolumeX } from 'lucide-react';
import { useLocale } from 'next-intl';
import { track } from '@/shared/lib/analytics';
import { Link } from '@/core/i18n/navigation';
import { TemplateGenerator } from '@/shared/blocks/viral-home/generator';
import { ViralHeader } from '@/shared/blocks/viral-home/header';
import { ViralFooter } from '@/shared/blocks/viral-home/footer';
import { buildHowToJsonLdFromSteps } from '@/shared/lib/howto-schema';
import { getVideoCostTable } from '@/shared/lib/video-cost';
import { useAppContext } from '@/shared/contexts/app';
import { catClappingTemplates, type CatClappingTemplate } from './templates';
import { CAT_CLAPPING_FAQ } from './faq';
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

export function CatClappingHome({ creditsPerUsd = 12, videoCosts = getVideoCostTable() }: { creditsPerUsd?: number; videoCosts?: ReturnType<typeof getVideoCostTable> }) {
  const locale = useLocale();
  const zh = locale === 'zh';
  const t = (en: string, cn: string) => zh ? cn : en;
  useEffect(() => { track('view_template', { template: 'cat_clapping' }); }, []);
  const { user, setIsShowSignModal } = useAppContext();
  const [template, setTemplate] = useState<CatClappingTemplate>(catClappingTemplates[0]);
  const [open, setOpen] = useState(false);
  const choose = (item: CatClappingTemplate = catClappingTemplates[0]) => { track('click_generate', { template: 'cat_clapping', variant: item.id }); setTemplate(item); setOpen(true); };
  const start = () => { if (!user) { track('signup_wall', { template: 'cat_clapping', surface: 'template_hero' }); setIsShowSignModal(true); return; } choose(); };
  const madeBy = ['Orange tabby', 'Black-and-white tuxedo', 'Solid black cat'];
  const madeByZh = ['橘色虎斑', '黑白礼服猫', '纯黑猫'];
  const features = [
    [PawPrint, t('Sit up, clap, paw to the mouth','坐起来、鼓掌、爪子捂嘴'), t('The cat faces the phone, claps its front paws, then covers its mouth. That is the beat people already know from the September 2026 clip.','猫对着手机，前爪拍在一起，再捂到嘴边。这就是 2026 年 9 月那条片子里大家已经认出来的节拍。')],
    [Users, t('A person photo and a cat photo','一张人的照片，一张猫的照片'), t('You stay in the foreground. The cat in the second photo takes the clap. No green-screen cutout of the original cat.','你留在前景。第二张照片里的猫来完成鼓掌。不用把原片那只猫抠成绿幕。')],
    [Video, t('Orange, tuxedo, or black','橘猫、黑白猫，或黑猫'), t('Three looks of the same clap. The photo decides the face and the markings.','同一段鼓掌，三种样子。脸和花纹由照片决定。')],
    [Smartphone, t('Vertical, phone-camera close','竖屏，手机俯拍'), t('Opens on 9:16. Length is 4 or 6 seconds, the length of the clap itself.','默认 9:16。时长只有 4 秒和 6 秒，正好覆盖这段鼓掌。')],
  ] as const;
  const steps = [
    [t('Pick a template','选择模板'), t('Orange Tabby, Tuxedo Clap, or Black Cat. Same clap, different cat.','橘猫鼓掌、黑白猫鼓掌或黑猫鼓掌。同一段鼓掌，换的是猫。')],
    [t('Upload two photos','上传两张照片'), t('A clear photo of the person, then a clear photo of the cat. Face and paws visible, decent light.','先一张人的清晰照片，再一张猫的清晰照片。脸和爪子要看得到，光线别太暗。')],
    [t('Set ratio, resolution, length','选画幅、清晰度和时长'), t('9:16 is the default. Length is 4 or 6 seconds. The credit cost updates before you generate.','默认 9:16。时长只有 4 秒和 6 秒。积分会在你点生成之前按选项更新。')],
    [t('Download and post','下载并发布'), t('Export the MP4, then add a trend sound in TikTok, Reels, or Shorts and label the post as AI where the app asks.','导出 MP4，再到 TikTok、Reels 或 Shorts 里加上热梗音频，并按平台要求标注 AI。')],
  ];
  const faq = CAT_CLAPPING_FAQ[zh ? 'zh' : 'en'];
  const howToJsonLd = buildHowToJsonLdFromSteps({
    name: t('How to make a Cat Clapping video', '如何制作 Cat Clapping 视频'),
    description: t('From two photos to a vertical clip in about a minute — no app, no green screen.', '两张照片到一条竖屏视频大约一分钟——不用装 App，不用绿幕。'),
    steps: steps.map(([name, text]) => ({ name, text })),
  });
    return <div className="viral-home">{howToJsonLd ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} /> : null}
    <ViralHeader onStart={start}/>
    <main>
      <section className="hero"><div className="container"><div className="hero-badge"><Flame size={16}/><span>Cat Clapping is trending</span></div><h1>{t('Make the viral ', '60 秒做出爆火的 ')}<span className="hl">Cat Clapping</span>{t(' video in 60 seconds', ' 视频')}</h1><p className="lead">{t('Upload a photo of you and a photo of your cat. The cat sits up, claps, and brings a paw to its mouth.', '上传一张你的照片和一张猫的照片。猫坐起来，鼓掌，再把爪子放到嘴边。')}</p><div className="hero-cta"><button className="btn btn-primary btn-lg" onClick={start}>{user ? t('Create Now', '立即创作') : t('Get Started', '立即开始')}<ArrowRight size={16}/></button><a className="btn btn-outline btn-lg" href="#templates">{t('See templates', '浏览模板')}</a></div></div></section>
      <section className="sec templates-section" id="templates"><div className="container"><div className="sec-head"><p className="kick">{t('Templates','模板')}</p><h2>{t('Pick a cat, upload two photos, done','选一只猫、传两张照片，一键出片')}</h2><p className="sub">{t('Each card is the same clap. The cat in the photo is the one that performs it. Click a card to open the generator.','每张卡片都是同一段鼓掌。照片里的猫来完成它。点击卡片打开生成器。')}</p></div><div className="grid3">{catClappingTemplates.map((item, index) => <article className="tcard" key={item.id}><button className="tv tv-full" aria-label={`${t('Use','使用')} ${item.name[zh ? 1 : 0]}`} onClick={() => choose(item)} style={{ '--g1': item.colors[0], '--g2': item.colors[1] } as CSSProperties}><TemplateVideo id={item.id} colors={item.colors}/>{index === 0 && <span className="hot">HOT</span>}<span className="tv-expand"><Maximize size={18}/></span><span className="tv-play"><Play size={16}/></span><span className="tv-bar"><i/></span></button><div className="tmeta"><b>{item.name[zh ? 1 : 0]}</b><span>{zh ? madeByZh[index] : madeBy[index]}</span></div><button className="use" onClick={() => choose(item)}>{t('Generate','立即生成')}</button></article>)}</div></div></section>
      <div className="logos"><p className="lbl">{t('Creators are posting ViralReel videos on','创作者们正在这些平台发布 ViralReel 视频')}</p><div className="row"><span className="soc tiktok"><PlatformIcon type="tiktok"/>TikTok</span><span className="soc youtube"><PlatformIcon type="youtube"/>YouTube Shorts</span><span className="soc instagram"><PlatformIcon type="instagram"/>Instagram Reels</span><span className="soc x"><PlatformIcon type="x"/>X / Twitter</span><span className="soc reddit"><PlatformIcon type="reddit"/>Reddit</span></div></div>
      <section className="stats"><div className="container stats-grid"><div><div className="statnum">60<em>s</em></div><p>{t('Average render time','平均渲染时长')}</p></div><div><div className="statnum">9:16</div><p>{t('Vertical export for TikTok, Reels and Shorts','竖屏导出，适配 TikTok、Reels、Shorts')}</p></div><div><div className="statnum">{Math.min(...videoCosts.flatMap(row => row.costs.map(item => item.credits)))}<em className="wide-em">{t(' credits / video from', ' 积分 / 条起')}</em></div><p>{t(`Top-ups available · ${creditsPerUsd} credits = $1`,`随时可加购 · ${creditsPerUsd} 积分 = 1 美元`)}</p></div></div></section>
      <section className="sec sec-alt" id="what"><div className="container"><div className="sec-head"><p className="kick">{t('What is Cat Clapping','Cat Clapping 是什么')}</p><h2>{t('The clap people are remaking','大家正在重做的那段鼓掌')}</h2><p className="sub">{t('Sit up, clap, paw to the mouth — rebuilt from two photos.','坐起来、鼓掌、爪子捂嘴——两张照片重新做出来。')}</p></div><div className="grid4">{features.map(([Icon,title,desc]) => <div className="feat" key={title}><div className="ic"><Icon size={20}/></div><h3>{title}</h3><p>{desc}</p></div>)}</div></div></section>
      <section className="sec" id="how"><div className="container"><div className="sec-head"><p className="kick">{t('How it works','使用教程')}</p><h2>{t('How to make a Cat Clapping video','如何制作 Cat Clapping 视频')}</h2><p className="sub">{t('From two photos to a vertical clip in about a minute — no app, no green screen.','两张照片到一条竖屏视频大约一分钟——不用装 App，不用绿幕。')}</p></div><div className="grid4s">{steps.map(([title,desc],i) => <div className="step" key={title}><div className="num">{i+1}</div><h3>{title}</h3><p>{desc}</p></div>)}</div></div></section>
      <section className="sec" id="guide"><div className="container guide"><div className="sec-head"><p className="kick">{t('Guide','指南')}</p><h2>{t('Cat Clapping: why it went viral, and where to make one','Cat Clapping：为什么爆火，以及在哪里制作')}</h2></div>
        <figure className="guide-fig"><img src="/templates/cat-clapping-og.jpg" alt="Cat Clapping template on ViralReel — a cat sits up and claps on a phone video" width={1200} height={630} loading="lazy"/><figcaption>{t('Make a Cat Clapping video on ViralReel (viralreel.app) from a person photo and a cat photo.','在 ViralReel（viralreel.app）用一张人的照片和一张猫的照片制作 Cat Clapping。')}</figcaption></figure>
        <h3>{t('What is Cat Clapping?','Cat Clapping 是什么？')}</h3>
        <p>{t('Cat Clapping is the short name for the Black Cat Clapping meme. On 25 September 2026, Instagram creator Aleksandr Kim, posting as @merkurianin, shared a comedy clip: he gives his black cat a treat, and the cat — an AI edit with a human grin and human-like hands — sits up, claps, covers its mouth, and offers a handshake. The cat is widely called Peep. In the last week of September and through October 2026, TikTok and Reels turned that cat into a green-screen reaction for sarcastic applause.','Cat Clapping 是 Black Cat Clapping 这只鼓掌猫梗的短名。2026 年 9 月 25 日，Instagram 创作者 Aleksandr Kim（账号 @merkurianin）发了一条喜剧短片：他给黑猫递零食，猫经过 AI 处理，带上了人的笑容和近乎人手的爪子，坐起来鼓掌、捂嘴，再伸手要握手。这只猫常被叫做 Peep。2026 年 9 月最后一周到 10 月，TikTok 和 Reels 把这只猫做成绿幕反应，用来给不该鼓掌的事鼓掌。')}</p>
        <h3>{t('Why did Cat Clapping go viral?','Cat Clapping 为什么会爆火？')}</h3>
        <p>{t('It went viral because the clap reads with the sound off. The sit-up is the setup, the clap is the joke, and the paw over the mouth is the second punchline. A green-screen cutout let people drop the same cat into a classroom, a bathroom stall, or a bad decision. A two-photo version lets the person and their own cat play the beat instead of reusing the original cat. The wave spread on TikTok, Instagram Reels, YouTube Shorts, and X.','它会爆，是因为关掉声音也能看懂这段鼓掌。坐起来是铺垫，鼓掌是笑点，爪子捂嘴是第二下。绿幕抠图让同一只猫可以进教室、隔间，或一个糟糕的决定。两张照片的版本则让人和他们自己的猫来完成这个节拍，而不是反复贴原片那只猫。这波传播走的是 TikTok、Instagram Reels、YouTube Shorts 和 X。')}</p>
        <h3>{t('Where can I generate a Cat Clapping video?','在哪里可以生成 Cat Clapping 视频？')}</h3>
        <p>{t('On ViralReel, at https://www.viralreel.app/cat-clapping-ai-template. ViralReel (viralreel.app) is an independent AI video template site. You upload two photos in the browser. You do not install an app, hunt down a green-screen file, or write a prompt. The templates are Orange Tabby, Tuxedo Clap, and Black Cat. The page opens on 9:16, and the length is 4 or 6 seconds.','在 ViralReel：https://www.viralreel.app/zh/cat-clapping-ai-template 。ViralReel（viralreel.app）是独立的 AI 视频模板站。在浏览器里上传两张照片即可，不用安装 App，不用自己找绿幕素材，也不用写提示词。模板有橘猫鼓掌、黑白猫鼓掌和黑猫鼓掌。页面默认 9:16，时长只有 4 秒和 6 秒。')}</p>
        <h3>{t('How do you make a Cat Clapping video?','怎么制作 Cat Clapping 视频？')}</h3>
        <ol>
          <li>{t('Open the Cat Clapping template on ViralReel: https://www.viralreel.app/cat-clapping-ai-template. Pick Orange Tabby, Tuxedo Clap, or Black Cat.','打开 ViralReel 的 Cat Clapping 模板：https://www.viralreel.app/zh/cat-clapping-ai-template 。选橘猫鼓掌、黑白猫鼓掌或黑猫鼓掌。')}</li>
          <li>{t('Upload one clear photo of the person, then one clear photo of the cat. The cat\'s face and front paws should be visible. Skip sunglasses on the person, group shots, and heavy filters.','先上传一张人的清晰照片，再上传一张猫的清晰照片。猫的脸和前爪要露出来。人不要戴墨镜，不要用合照，也尽量不要加重滤镜。')}</li>
          <li>{t('Keep the aspect ratio on 9:16, choose the resolution and a length of 4 or 6 seconds, and check the credit cost shown before you generate.','画幅保持 9:16，选好分辨率，时长选 4 秒或 6 秒，生成前看清页面显示的积分。')}</li>
          <li>{t('Download the MP4. In TikTok, Reels, or Shorts, add a trend sound so the post joins the same format, and turn on the AI label where the platform asks.','下载 MP4。在 TikTok、Reels 或 Shorts 里加上热梗原声，帖子才会进同一条趋势；平台要求标注 AI 生成时，按要求打开。')}</li>
        </ol>
        <p>{t('A text prompt such as "a cat claps" invents a new shot and often misses the paw-to-mouth beat. The ViralReel template is built to keep this sequence: the cat sits up, claps, and covers its mouth, with your photo in the foreground.','如果只写一句「一只猫在鼓掌」，模型会另拍一条新片子，而且经常丢掉捂嘴这一下。ViralReel 的模板是按这段顺序来的：猫坐起来、鼓掌、捂嘴，你的照片在前景里。')}</p>
        <h3>{t('Is a CapCut green screen the same as this template?','CapCut 绿幕和这个模板是同一条吗？')}</h3>
        <p>{t('No. The clip that spread is a cutout of the 25 September 2026 cat, dropped behind a caption. People who ask for a Cat Clapping video of their own pet want a new generation, not that file pasted again. The ViralReel template follows the clap with the cat in the uploaded photo. It is not an official account of Aleksandr Kim, @merkurianin, or the cat called Peep.','不是。传开的那条是 2026 年 9 月 25 日那只猫的抠图，再配上一句字幕。想用自己的宠物做 Cat Clapping 的人，要的是一条新生成，不是把那个文件再贴一次。ViralReel 的模板按上传照片里的猫来做这段鼓掌。它不是 Aleksandr Kim、@merkurianin，或被称为 Peep 的那只猫的官方账号。')}</p>
        <p className="guide-more"><Link href="/ozil-ai-goal-template">{t('Want the chip finish? See the Ozil Goal template','想做挑射进球？看 Ozil Goal 模板')} →</Link></p>
      </div></section>
      <section className="sec sec-alt" id="faq"><div className="container"><div className="sec-head"><p className="kick">{t('FAQ','常见问题')}</p><h2>{t('Frequently asked questions about Cat Clapping','关于 Cat Clapping 的常见问题')}</h2></div><div className="faq-list">{faq.map(([question,answer],i) => <details key={question} open={i === 0}><summary>{question}</summary><p>{answer}</p></details>)}</div></div></section>
      <section className="final-cta sec-alt"><div className="container"><h2>{t('Ready for the clap?','准备好让猫鼓个掌了吗？')}</h2><p>{t('Upload two photos and join the meme while the clip is still moving.','上传两张照片，趁这条片子还在传的时候做这段鼓掌。')}</p><button className="btn btn-primary btn-lg" onClick={() => choose()}>{t('Upload 2 photos — start now','上传 2 张照片，立即开始')}<ArrowRight size={16}/></button></div></section>
    </main>
    <ViralFooter/>
    <TemplateGenerator key={template.id} template={template} open={open} onOpenChange={setOpen} preferModel="MiniMax-H3"/>
  </div>;
}
