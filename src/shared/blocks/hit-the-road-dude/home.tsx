'use client';

import { useEffect, useState } from 'react';
import { ArrowRight, Car, Hand, Smartphone, Video } from 'lucide-react';
import { useLocale } from 'next-intl';
import { Link } from '@/core/i18n/navigation';
import { track } from '@/shared/lib/analytics';
import { useAppContext } from '@/shared/contexts/app';
import { TemplateGenerator } from '@/shared/blocks/viral-home/generator';
import { ViralHeader } from '@/shared/blocks/viral-home/header';
import { ViralFooter } from '@/shared/blocks/viral-home/footer';
import { buildHowToJsonLdFromSteps } from '@/shared/lib/howto-schema';
import { getVideoCostTable } from '@/shared/lib/video-cost';
import { hitTheRoadDudeTemplates, type HitTheRoadDudeTemplate } from './templates';
import { HIT_THE_ROAD_DUDE_FAQ } from './faq';
import '@/shared/blocks/viral-home/home.css';

export function HitTheRoadDudeHome({
  creditsPerUsd = 12,
  videoCosts = getVideoCostTable(),
}: {
  creditsPerUsd?: number;
  videoCosts?: ReturnType<typeof getVideoCostTable>;
}) {
  const locale = useLocale();
  const zh = locale.startsWith('zh');
  const t = (en: string, cn: string) => (zh ? cn : en);
  const { user, setIsShowSignModal } = useAppContext();
  const [template, setTemplate] = useState<HitTheRoadDudeTemplate>(hitTheRoadDudeTemplates[0]);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    track('view_template', { template: 'hit_the_road_dude' });
  }, []);
  const choose = (item: HitTheRoadDudeTemplate = hitTheRoadDudeTemplates[0]) => {
    track('click_generate', { template: 'hit_the_road_dude', variant: item.id });
    setTemplate(item);
    setOpen(true);
  };
  const start = () => {
    if (!user) {
      track('signup_wall', { template: 'hit_the_road_dude', surface: 'template_hero' });
      setIsShowSignModal(true);
      return;
    }
    choose();
  };
  const features = [
    [Car, t('Driver-first roadside scene', '司机视角的路边场景'), t('The driver stays in the car while the camera remains outside.', '司机留在车里，镜头保持在车外。')],
    [Hand, t('Argument energy, no exact words', '有争执感，但不编造台词'), t('Gestures and reactions carry the meme timing without claiming a transcript.', '用比画和反应完成梗感，不声称复刻任何逐字对话。')],
    [Video, t('One photo, three versions', '一张照片，三种版本'), t('State Property, Driver Reaction, and Private Property use one uploaded photo.', '州有土地、司机反应和私人领地都只需上传一张照片。')],
    [Smartphone, t('Vertical and ready to post', '竖屏，方便发布'), t('Starts at 9:16 for short-form video platforms.', '默认 9:16，适合短视频平台。')],
  ] as const;
  const steps = [
    [t('Pick a version', '选择版本'), t('Choose the sign-led, driver-reaction, or private-property setup.', '选择路牌、司机反应或私人领地场景。')],
    [t('Upload one photo', '上传一张照片'), t('Use one clear portrait of a person you have permission to use.', '上传一张你有权使用的单人清晰照片。')],
    [t('Review the options', '确认生成选项'), t('Check the ratio, model, length, and displayed credit cost.', '确认画幅、模型、时长和页面显示的积分。')],
    [t('Download and share', '下载并分享'), t('Export the MP4 and label AI-generated content when a platform asks.', '导出 MP4，并按平台要求标注 AI 生成内容。')],
  ] as const;
  const faq = HIT_THE_ROAD_DUDE_FAQ[zh ? 'zh' : 'en'];
  const howToJsonLd = buildHowToJsonLdFromSteps({
    name: t('How to make a Hit the Road Dude AI video', '如何制作 Hit the Road Dude AI 视频'),
    description: t('Create a fictional roadside driver reaction from one photo.', '用一张照片制作虚构的路边司机反应视频。'),
    steps: steps.map(([name, text]) => ({ name, text })),
  });
  return (
    <div className="viral-home">
      {howToJsonLd ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} /> : null}
      <ViralHeader onStart={start} />
      <main>
        <section className="hero"><div className="container"><div className="hero-badge"><Car size={16} /><span>{t('Roadside reaction format', '路边反应短视频形式')}</span></div><h1>{t('Hit the Road Dude, ', 'Hit the Road Dude，')}<span className="hl">{t('your photo in the driver seat', '让你的照片坐进司机位')}</span></h1><p className="lead">{t('Upload one photo and stage a fictional roadside exchange with the camera outside the car. No real-person claims, no exact dialogue.', '上传一张照片，把虚构的路边争执场景放进车外镜头。不声称真人身份，不编造精确台词。')}</p><div className="hero-cta"><button className="btn btn-primary btn-lg" onClick={start}>{user ? t('Create Now', '立即创作') : t('Get Started', '立即开始')}<ArrowRight size={16} /></button><a className="btn btn-outline btn-lg" href="#templates">{t('See templates', '浏览模板')}</a></div></div></section>
        <section className="sec templates-section" id="templates"><div className="container"><div className="sec-head"><p className="kick">{t('Templates', '模板')}</p><h2>{t('Pick the roadside setup', '选择路边场景')}</h2><p className="sub">{t('Every version uses one photo and keeps the driver as the visual subject.', '每个版本都只用一张照片，并保留司机作为画面主体。')}</p></div><div className="grid3">{hitTheRoadDudeTemplates.map((item) => <article className="tcard" key={item.id}><button className="tv tv-full" aria-label={`${t('Use', '使用')} ${item.name[zh ? 1 : 0]}`} onClick={() => choose(item)} style={{ '--g1': item.colors[0], '--g2': item.colors[1] } as React.CSSProperties}><span className="tv-stage" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 10, padding: 16, textAlign: 'center' }}><Car size={34} aria-hidden="true"/><strong>{item.name[zh ? 1 : 0]}</strong><small>{t('Preview video coming soon — not a generated result', '预览视频待上线，当前并非生成效果')}</small></span></button><div className="tmeta"><b>{item.name[zh ? 1 : 0]}</b></div><button className="use" onClick={() => choose(item)}>{t('Generate', '立即生成')}</button></article>)}</div></div></section>
        <section className="stats"><div className="container stats-grid"><div><div className="statnum">1</div><p>{t('Photo needed', '仅需一张照片')}</p></div><div><div className="statnum">9:16</div><p>{t('Vertical by default', '默认竖屏画幅')}</p></div><div><div className="statnum">{Math.min(...videoCosts.flatMap((row) => row.costs.map((item) => item.credits)))}<em className="wide-em">{t(' credits / video from', ' 积分 / 条起')}</em></div><p>{t(`Top-ups available · ${creditsPerUsd} credits = $1`, `随时可加购 · ${creditsPerUsd} 积分 = 1 美元`)}</p></div></div></section>
        <section className="sec sec-alt" id="what"><div className="container"><div className="sec-head"><p className="kick">{t('What is this format?', '这是什么形式？')}</p><h2>{t('A simple car-window reaction shot', '简单的车窗反应镜头')}</h2><p className="sub">{t('The recognizable ingredients are a stopped car, a person outside the window, gestures toward the roadside, and a dry driver reaction.', '核心元素是停靠的车辆、车窗外的人、指向路边的比画，以及司机的冷面反应。')}</p></div><div className="grid4">{features.map(([Icon, title, desc]) => <div className="feat" key={title}><div className="ic"><Icon size={20} /></div><h3>{title}</h3><p>{desc}</p></div>)}</div></div></section>
        <section className="sec" id="how"><div className="container"><div className="sec-head"><p className="kick">{t('How it works', '使用教程')}</p><h2>{t('Make a Hit the Road Dude AI video', '制作 Hit the Road Dude AI 视频')}</h2></div><div className="grid4s">{steps.map(([title, desc], i) => <div className="step" key={title}><div className="num">{i + 1}</div><h3>{title}</h3><p>{desc}</p></div>)}</div></div></section>
        <section className="sec" id="guide"><div className="container guide"><div className="sec-head"><p className="kick">{t('Guide', '指南')}</p><h2>{t('What is Hit the Road Dude, and how do you make your own?', 'Hit the Road Dude 是什么，怎样制作自己的版本？')}</h2></div><h3>{t('What happens in the clip?', '原片里发生了什么？')}</h3><p>{t('In the roadside exchange, people outside a pickup say they thought a pond was state property. The driver reacts to “state?”, then tells them to leave. The pause, the car-window framing, and the driver’s dry reaction made it easy to quote and remix. This describes the video format, not a verified claim about who owns the land or what happened afterward.', '在这段路边对话里，皮卡车外的人说他们以为池塘属于州有土地。司机听到“state?”后作出反应，随后让他们离开。停顿、车窗构图和司机冷面的反应，让这个片段容易被引用和二创。这只是对视频形式的描述，不代表我们核实了土地归属或后续事件。')}</p><h3>{t('Where can I make a version from a photo?', '在哪里能用照片制作自己的版本？')}</h3><p>{t('Use ViralReel at https://www.viralreel.app/hit-the-road-dude-ai-template. Upload one clear portrait, choose a driver reaction scene, confirm the model and credit cost, then generate a fictional vertical clip. A licensed preview has not been added yet; the colored cards are clearly marked placeholders, not finished samples.', '打开 ViralReel：https://www.viralreel.app/zh/hit-the-road-dude-ai-template 。上传一张清晰的单人照片，选择司机反应场景，确认模型和积分后，生成一条虚构的竖屏视频。合法可用的预览素材尚未添加；彩色卡片已明确标为占位图，而非成片示例。')}</p><h3>{t('Does this reuse the original video or sound?', '会直接使用原视频或原声吗？')}</h3><p>{t('No original footage or audio is bundled with these templates. A site administrator may configure a separately licensed reference video or audio for compatible models. The result does not promise the original voice or an exact spoken line. Review it before posting and use photos you have permission to upload.', '模板没有内置原片画面或原声。站点管理员可为兼容模型另行配置已获授权的参考视频或音频。生成结果不保证原声或逐字台词。发布前请检查成片，也只上传有权使用的照片。')}</p><p className="guide-more"><a href="https://meme.com/memes/hit-the-road-dude" target="_blank" rel="noopener noreferrer">{t('Read more about the meme format', '了解这个视频梗的背景')} ↗</a></p></div></section>
        <section className="sec sec-alt" id="faq"><div className="container"><div className="sec-head"><p className="kick">{t('FAQ', '常见问题')}</p><h2>{t('Frequently asked questions', '常见问题')}</h2></div><div className="faq-list">{faq.map(([question, answer], i) => <details key={question} open={i === 0}><summary>{question}</summary><p>{answer}</p></details>)}</div><p className="guide-more"><Link href="/bulin-47-ai-template">{t('Want another meme format? See Bulin 47', '想做另一种梗视频？看看 Bulin 47')}</Link> →</p></div></section>
        <section className="final-cta sec-alt"><div className="container"><h2>{t('Ready to stage the roadside reaction?', '准备好拍出路边反应了吗？')}</h2><p>{t('Upload one photo and keep the scene fictional and clearly labeled as AI.', '上传一张照片，保持场景虚构，并按平台要求标注 AI。')}</p><button className="btn btn-primary btn-lg" onClick={() => choose()}>{t('Upload 1 photo — start now', '上传 1 张照片，立即开始')}<ArrowRight size={16} /></button></div></section>
      </main>
      <ViralFooter />
      <TemplateGenerator key={template.id} template={template} open={open} onOpenChange={setOpen} />
    </div>
  );
}
