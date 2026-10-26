'use client';

/* eslint-disable @next/next/no-img-element */

import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { ArrowRight, Car, Hand, Smartphone, Video, Volume2, VolumeX } from 'lucide-react';
import { useLocale } from 'next-intl';
import { Link } from '@/core/i18n/navigation';
import { track } from '@/shared/lib/analytics';
import { TemplateGenerator } from '@/shared/blocks/viral-home/generator';
import { ViralHeader } from '@/shared/blocks/viral-home/header';
import { ViralFooter } from '@/shared/blocks/viral-home/footer';
import { buildHowToJsonLdFromSteps } from '@/shared/lib/howto-schema';
import { getVideoCostTable } from '@/shared/lib/video-cost';
import { getHitTheRoadDudeFaq } from './faq';
import { HitTheRoadLinkCluster } from './link-cluster';
import { HIT_THE_ROAD_POSTS } from './long-tails';
import { HIT_THE_ROAD_HOW_TO_STEPS } from './steps';
import { hitTheRoadDudeTemplates, type HitTheRoadDudeTemplate } from './templates';
import '@/shared/blocks/viral-home/home.css';

function TemplateVideo({ item, zh }: { item: HitTheRoadDudeTemplate; zh: boolean }) {
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
  const src = item.previewVideo;
  return <>
    <video ref={ref} className="tv-video" src={src} poster={`/templates/${item.id}-poster.jpg`} muted={muted} loop autoPlay playsInline preload="metadata" style={{ background: `linear-gradient(165deg, ${item.colors[0]}, ${item.colors[1]})` }}/>
    <span className="tv-sound" role="button" tabIndex={0} aria-label={muted ? 'Unmute video' : 'Mute video'} onClick={toggleSound} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') toggleSound(e); }}>{muted ? <VolumeX size={15}/> : <Volume2 size={15}/>}</span>
    <span className="sr-only">{zh ? '参考预览，非 AI 生成结果' : 'Reference preview, not an AI output'}</span>
  </>;
}

export function HitTheRoadDudeHome({
  creditsPerUsd = 12,
  videoCosts = getVideoCostTable(),
  pageUrl,
}: {
  creditsPerUsd?: number;
  videoCosts?: ReturnType<typeof getVideoCostTable>;
  pageUrl?: string;
}) {
  const locale = useLocale();
  const zh = locale.startsWith('zh');
  const t = (en: string, cn: string) => (zh ? cn : en);
  const [template, setTemplate] = useState<HitTheRoadDudeTemplate>(hitTheRoadDudeTemplates[0]);
  useEffect(() => {
    track('view_template', { template: 'hit_the_road_dude' });
  }, []);
  const focusGenerator = () => {
    document.getElementById('generator')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  const choose = (item: HitTheRoadDudeTemplate = hitTheRoadDudeTemplates[0]) => {
    track('click_generate', { template: 'hit_the_road_dude', variant: item.id });
    setTemplate(item);
    focusGenerator();
  };
  const start = () => focusGenerator();
  const features = [
    [Car, t('Driver-first roadside scene', '司机视角的路边场景'), t('The driver stays in the car while the camera remains outside.', '司机留在车里，镜头保持在车外。')],
    [Hand, t('Argument energy, no exact words', '有争执感，但不编造台词'), t('Gestures and reactions carry the meme timing without claiming a transcript.', '用比画和反应完成梗感，不声称复刻任何逐字对话。')],
    [Video, t('One photo, three versions', '一张照片，三种版本'), t('State Property, Driver Reaction, and Private Property all take one photo. A pet photo can ride along too — results vary by model.', '州有土地、司机反应和私人领地都只需一张照片。宠物照片也可以尝试，不同模型效果有差异。')],
    [Smartphone, t('Vertical and ready to post', '竖屏，方便发布'), t('Starts at 9:16 for short-form video platforms.', '默认 9:16，适合短视频平台。')],
  ] as const;
  const steps = HIT_THE_ROAD_HOW_TO_STEPS.map((step) => [zh ? step.name.zh : step.name.en, zh ? step.text.zh : step.text.en] as const);
  const faq = getHitTheRoadDudeFaq(zh, { videoCosts, creditsPerUsd });
  const howToJsonLd = buildHowToJsonLdFromSteps({
    name: t('How to make a Hit the Road Dude AI video', '如何制作 Hit the Road Dude AI 视频'),
    description: t('Upload one photo on ViralReel, generate a fictional white-pickup clip, download the MP4, then add the trend sound and the AI label on TikTok, Reels, or Shorts.', '在 ViralReel 上传一张照片，生成虚构的白色皮卡短片，下载 MP4，再在 TikTok、Reels 或 Shorts 上加上热梗原声和 AI 标注。'),
    url: pageUrl,
    steps: steps.map(([name, text]) => ({ name, text })),
  });
  return (
    <div className="viral-home">
      {howToJsonLd ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} /> : null}
      <ViralHeader onStart={start} />
      <main>
        <section className="hero"><div className="container"><div className="hero-badge"><Car size={16} /><span>{t('Hit the Road Dude on ViralReel', 'ViralReel 上的 Hit the Road Dude')}</span></div><h1>{t('Upload one photo — no prompt needed. Generate your ', '上传一张照片，无需提示词，立即生成你的 ')}<span className="hl">{t('Hit the Road Dude', 'Hit the Road Dude')}</span>{t(' AI video instantly', ' AI 视频')}</h1><TemplateGenerator key={template.id} template={template} open embedded onOpenChange={() => {}} /></div></section>
        <section className="sec templates-section" id="templates"><div className="container"><div className="sec-head"><p className="kick">{t('Templates', '模板')}</p><h2>{t('Pick the roadside setup', '选择路边场景')}</h2><p className="sub">{t('Every version uses one photo and keeps the driver as the visual subject. Card videos are authorized reference clips of the format, not AI outputs.', '每个版本都只用一张照片，并保留司机作为画面主体。卡片视频是该格式的授权参考片段，不是 AI 生成结果。')}</p></div><div className="grid3">{hitTheRoadDudeTemplates.map((item, index) => <article className="tcard" key={item.id}><button className="tv tv-full" aria-label={`${t('Use', '使用')} ${item.name[zh ? 1 : 0]}`} onClick={() => choose(item)} style={{ '--g1': item.colors[0], '--g2': item.colors[1] } as CSSProperties}><TemplateVideo item={item} zh={zh}/>{index === 0 && <span className="hot">HOT</span>}</button><div className="tmeta"><b>{item.name[zh ? 1 : 0]}</b></div><button className="use" onClick={() => choose(item)}>{t('Generate', '立即生成')}</button></article>)}</div></div></section>
        <section className="stats"><div className="container stats-grid"><div><div className="statnum">1</div><p>{t('Photo needed', '仅需一张照片')}</p></div><div><div className="statnum">9:16</div><p>{t('Vertical by default', '默认竖屏画幅')}</p></div><div><div className="statnum">{Math.min(...videoCosts.flatMap((row) => row.costs.map((item) => item.credits)))}<em className="wide-em">{t(' credits / video from', ' 积分 / 条起')}</em></div><p>{t(`Top-ups available · ${creditsPerUsd} credits = $1`, `随时可加购 · ${creditsPerUsd} 积分 = 1 美元`)}</p></div></div></section>
        <section className="sec sec-alt" id="what"><div className="container"><div className="sec-head"><p className="kick">{t('What is this format?', '这是什么形式？')}</p><h2>{t('A simple car-window reaction shot', '简单的车窗反应镜头')}</h2><p className="sub">{t('The recognizable ingredients are a stopped car, a person outside the window, gestures toward the roadside, and a dry driver reaction.', '核心元素是停靠的车辆、车窗外的人、指向路边的比画，以及司机的冷面反应。')}</p></div><div className="grid4">{features.map(([Icon, title, desc]) => <div className="feat" key={title}><div className="ic"><Icon size={20} /></div><h3>{title}</h3><p>{desc}</p></div>)}</div></div></section>
        <section className="sec" id="how"><div className="container"><div className="sec-head"><p className="kick">{t('How it works', '使用教程')}</p><h2>{t('How to make a Hit the Road Dude AI video', '如何制作 Hit the Road Dude AI 视频')}</h2><p className="sub">{t('One photo, then generate, download, and add the trend sound plus the AI label on the platform.', '一张照片，然后生成、下载，并在平台上加上热梗原声和 AI 标注。')}</p></div><div className="grid4s">{steps.map(([title, desc], i) => <div className="step" key={title}><div className="num">{i + 1}</div><h3>{title}</h3><p>{desc}</p></div>)}</div></div></section>
        <section className="sec" id="guide"><div className="container guide"><div className="sec-head"><p className="kick">{t('Guide', '指南')}</p><h2>{t('What is Hit the Road Dude, and how do you make your own?', 'Hit the Road Dude 是什么，怎样制作自己的版本？')}</h2></div>
          <figure className="guide-fig"><img src="/templates/hit-the-road-dude-og.jpg" alt="Hit the Road Dude AI video template on ViralReel — pickup-truck driver reaction" width={1200} height={630} loading="lazy"/><figcaption>{t('Make the Hit the Road Dude reaction on ViralReel (viralreel.app) from one photo.', '在 ViralReel（viralreel.app）用一张照片制作 Hit the Road Dude 反应视频。')}</figcaption></figure>
          <h3>{t('Short answer', '简短回答')}</h3><p>{t('A Hit the Road Dude AI video is a fictional white-pickup remake you make on ViralReel at https://www.viralreel.app/hit-the-road-dude-ai-template from one photo. State Property, Private Property, and Lock ’Em Up are names for the same exchange. ViralReel is not the official meme page and does not license the original audio.', 'Hit the Road Dude AI 视频是在 ViralReel 用一张照片做的虚构白色皮卡重拍：https://www.viralreel.app/zh/hit-the-road-dude-ai-template 。State Property、Private Property 和 Lock ’Em Up 是同一段对话的不同叫法。ViralReel 不是这个梗的官方页面，也不授权原声。')}</p>
          <h3>{t('What is the Hit the Road Dude meme?', 'Hit the Road Dude 是什么梗？')}</h3><p>{t('It is the white-pickup roadside exchange also searched as the State Property meme, the Private Property meme, or “State? This?” — and Lock ’Em Up for the later part of the clip. A visitor says he thought the fishing spot was public land; the driver reacts with a stunned “State?”, then tells him to leave. Different sites quote different lines, but they all point to the same short video, which is why AI remakes collect all of these names.', '它就是那段白色皮卡路边对话，搜索时也常被叫做 State Property 梗、Private Property 梗或“State? This?”；原片后半段则被叫做 Lock ’Em Up。来访者说以为钓鱼的池塘是公共土地，司机难以置信地重复“State?”，随后让对方离开。不同站点引用的台词不同，但指的都是同一条短视频，所以它的 AI 二创会同时带上这些名字。')}</p>
          <h3>{t('Why does this meme keep working?', '这个梗为什么一直有效？')}</h3><p>{t('The joke is the pause, not the anger. The driver hears an absurd claim, freezes for a beat, repeats “State?” like he cannot believe it, then delivers a flat dismissal. That three-beat rhythm survives any recast: a different face keeps the timing, a small slight can replace the land dispute, and a pet in the driver seat adds a stern-adult contrast on top. Remakes work because the beats are simple enough to recognize in one second.', '笑点在停顿，而不是发火。司机听到离谱的说法，先愣住一拍，难以置信地重复“State?”，再用一句平淡的话送客。这个三拍节奏换谁都成立：换一张脸节奏不变，把土地争执换成“你坐了我的位置”这类小事也成立，换成宠物当司机则多一层“严厉大人”的反差。二创能火，是因为节奏简单到一秒就能认出来。')}</p>
          <h3>{t('Where did the clip come from?', '原片来自哪里？')}</h3><p>{t('Know Your Meme records the original TikTok as an August 21, 2025 upload by @bird28thegr8, captioned “Angry grandpa kicks me out my fishing spot” — a real pond-side disagreement filmed from the fishermen’s side. AI remakes that swap the driver spread widely in October 2026. This describes what meme archives report about the format; it is not a claim about the people in the clip or any legal outcome.', '据 Know Your Meme 记载，原始 TikTok 由 @bird28thegr8 于 2025 年 8 月 21 日上传，标题是“Angry grandpa kicks me out my fishing spot”，从钓鱼者一侧拍下池塘边的真实争执。把司机换成别人或宠物的 AI 二创从 2026 年 10 月开始大范围传播。这里只转述梗档案对格式的记载，不涉及片中人物或任何法律结论。')}</p>
          <h3>{t('Where can I make a version from a photo?', '在哪里能用照片制作自己的版本？')}</h3><p>{t('Use ViralReel at https://www.viralreel.app/hit-the-road-dude-ai-template. Upload one clear portrait, choose a driver reaction scene, confirm the model and credit cost, then generate a fictional vertical clip. The template cards above play authorized reference clips of the format so you can see the beat before you generate; they are not AI outputs.', '打开 ViralReel：https://www.viralreel.app/zh/hit-the-road-dude-ai-template 。上传一张清晰的单人照片，选择司机反应场景，确认模型和积分后，生成一条虚构的竖屏视频。上方模板卡片播放的是该格式的授权参考片段，方便你在生成前看懂节奏；它们不是 AI 生成结果。')}</p>
          <h3>{t('How to make a Hit the Road Dude AI video', '如何制作 Hit the Road Dude AI 视频')}</h3><ol>{steps.map(([name, text]) => <li key={name}><strong>{name}.</strong> {text}</li>)}</ol><p className="guide-more"><Link href={HIT_THE_ROAD_POSTS.howTo}>{t('Read the full how-to', '阅读完整教程')}</Link> · <Link href={HIT_THE_ROAD_POSTS.aliases}>{t('State Property vs Hit the Road Dude', 'State Property 和 Hit the Road Dude')}</Link> · <Link href={HIT_THE_ROAD_POSTS.explainer}>{t('Meme, original, and the song', '梗、原片和歌')}</Link> · <Link href="/pricing">{t('Pricing', '定价')}</Link> · <Link href="/">{t('All templates', '全部模板')}</Link></p><h3>{t('What photo works best?', '什么样的照片效果最好？')}</h3>
          <ul>
            <li>{t('One person facing the camera, eyes and mouth clearly visible — the driver’s expression carries the joke.', '单人正对镜头，眼睛和嘴巴清晰可见——司机的表情就是这个梗的笑点。')}</li>
            <li>{t('Even, natural light. Skip sunglasses, group shots, and heavy filters.', '光线自然均匀。避免墨镜、合照和重滤镜。')}</li>
            <li>{t('Leave some space around the head and shoulders for the truck-window framing.', '头肩周围留出空间，方便卡车车窗构图。')}</li>
            <li>{t('Pets are worth a try on the same single-photo rule; preview the result, because model support varies.', '宠物照片也值得一试，同样只需一张；生成后先预览，不同模型支持程度不同。')}</li>
            <li>{t('Only upload a photo you own or have permission to use.', '只上传你拥有或获得授权使用的照片。')}</li>
          </ul>
          <h3>{t('Does this reuse the original video or sound?', '会直接使用原视频或原声吗？')}</h3><p>{t('No original footage or audio is bundled with these templates. A site administrator may configure a separately licensed reference video or audio for compatible models. The result does not promise the original voice or an exact spoken line. Review it before posting and use photos you have permission to upload.', '模板没有内置原片画面或原声。站点管理员可为兼容模型另行配置已获授权的参考视频或音频。生成结果不保证原声或逐字台词。发布前请检查成片，也只上传有权使用的照片。')}</p><p className="guide-more"><Link href="/cat-clapping-ai-template">{t('Want the pet version of another meme? See Cat Clapping', '想玩另一个梗的宠物版？看 Cat Clapping')}</Link> · <Link href="/tiny-desk-outstanding-ai-template">{t('Tiny Desk Outstanding fan parody', 'Tiny Desk Outstanding 粉丝戏仿')}</Link> · <Link href="/blog/viralreel-vs-capcut-tiny-desk-outstanding">{t('ViralReel vs CapCut for Tiny Desk Outstanding', 'Tiny Desk Outstanding：ViralReel 和 CapCut')}</Link> · <a href="https://meme.com/memes/hit-the-road-dude" target="_blank" rel="noopener noreferrer">{t('Read more about the meme format', '了解这个视频梗的背景')} ↗</a></p></div></section>
        <section className="sec sec-alt" id="faq"><div className="container"><div className="sec-head"><p className="kick">{t('FAQ', '常见问题')}</p><h2>{t('Frequently asked questions', '常见问题')}</h2></div><div className="faq-list">{faq.map(([question, answer], i) => <details key={question} open={i === 0}><summary>{question}</summary><p>{answer}</p></details>)}</div><p className="guide-more"><Link href="/bulin-47-ai-template">{t('Want another meme format? See Bulin 47', '想做另一种梗视频？看看 Bulin 47')}</Link> →</p></div></section>
        <section className="sec" id="related"><div className="container"><div className="sec-head"><p className="kick">{t('Related', '相关')}</p><h2>{t('Hit the Road Dude guides on ViralReel', 'ViralReel 上的 Hit the Road Dude 指南')}</h2></div><HitTheRoadLinkCluster zh={zh} currentPath="/hit-the-road-dude-ai-template" /></div></section>
        <section className="final-cta sec-alt"><div className="container"><h2>{t('Ready to stage the roadside reaction?', '准备好拍出路边反应了吗？')}</h2><p>{t('Upload one photo and keep the scene fictional and clearly labeled as AI.', '上传一张照片，保持场景虚构，并按平台要求标注 AI。')}</p><button className="btn btn-primary btn-lg" onClick={start}>{t('Upload 1 photo — start now', '上传 1 张照片，立即开始')}<ArrowRight size={16} /></button></div></section>
      </main>
      <ViralFooter />
    </div>
  );
}
