'use client';

/* eslint-disable @next/next/no-img-element */

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';
import { ArrowRight, Clock, Flame, ImagePlus, Music, Play, Sparkles, Users, Video, Volume2, VolumeX } from 'lucide-react';
import { useLocale } from 'next-intl';
import { track } from '@/shared/lib/analytics';
import { Link } from '@/core/i18n/navigation';
import { TemplateGenerator } from '@/shared/blocks/viral-home/generator';
import { ViralHeader } from '@/shared/blocks/viral-home/header';
import { ViralFooter } from '@/shared/blocks/viral-home/footer';
import { buildHowToJsonLdFromSteps } from '@/shared/lib/howto-schema';
import { getVideoCostTable } from '@/shared/lib/video-cost';
import { sashaLaCatrinaTemplates, type SashaLaCatrinaTemplate } from './templates';
import { getSashaLaCatrinaFaq } from './faq';
import { SashaLaCatrinaLinkCluster } from './link-cluster';
import { SASHA_LA_CATRINA_POSTS } from './long-tails';
import { SASHA_LA_CATRINA_HOW_TO_STEPS } from './steps';
import '@/shared/blocks/viral-home/home.css';

// Only some Catrina variants carry a source credit (optional field).
const creditOf = (v: SashaLaCatrinaTemplate): string | undefined =>
  'credit' in v ? v.credit : undefined;

function PlatformIcon({ type }: { type: 'tiktok' | 'youtube' | 'instagram' | 'x' | 'reddit' }) {
  const paths: Record<string, ReactNode> = {
    tiktok: <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.9 2.9 0 1 1-2.31-2.84V9.25a6.35 6.35 0 1 0 5.76 6.32V8.69a8.16 8.16 0 0 0 4.77 1.52V6.79a4.85 4.85 0 0 1-1-.1z" />,
    youtube: <><path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3.02 3.02 0 0 0 .5 6.19C0 8.07 0 12 0 12s0 3.93.5 5.81a3.02 3.02 0 0 0 2.12 2.14c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 0 0 2.12-2.14C24 15.93 24 12 24 12s0-3.93-.5-5.81z"/><path fill="#fff" d="m9.55 15.57 6.27-3.57-6.27-3.57z"/></>,
    instagram: <><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></>,
    x: <path d="M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.41l-5.8-7.58-6.64 7.58H.47l8.6-9.83L0 1.15h7.59l5.24 6.93zm-1.29 19.5h2.04L6.49 3.24H4.3z" />,
    reddit: <path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm5.01 4.74a1.25 1.25 0 1 0-1.95.94l-2.91-.62a.34.34 0 0 0-.41.26l-.9 4.17c-1.87.06-3.56.62-4.79 1.5a1.76 1.76 0 1 0-.81 3.33c-.03.17-.05.35-.05.53 0 2.7 3.12 4.87 7 4.87s7-2.17 7-4.87c0-.18-.02-.36-.04-.52a1.76 1.76 0 1 0-2.95-1.11c-1.2-.86-2.85-1.42-4.68-1.49l.8-3.75 2.6.55a1.25 1.25 0 1 0 2.09-1.09zM8.6 13.02a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zm6.8 0a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5z" />,
  };
  return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">{paths[type]}</svg>;
}

function TemplateVideo({ id, colors, eager }: { id: string; colors: readonly [string, string]; eager?: boolean }) {
  const ref = useRef<HTMLVideoElement | null>(null);
  const [muted, setMuted] = useState(true);
  // lazy video loading: only poster (100-300KB) is served until the card
  // scrolls near the viewport — keeps the 7-sample grid from pulling 40+MB
  const [active, setActive] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setActive(true); el.play().catch(() => {}); }
      else el.pause();
    }, { threshold: 0.3, rootMargin: '150px' });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  const toggleSound = (e: { preventDefault: () => void; stopPropagation: () => void }) => {
    e.preventDefault(); e.stopPropagation();
    setActive(true);
    setMuted((m) => {
      const next = !m;
      const el = ref.current;
      if (el) { el.muted = next; if (!next) el.play().catch(() => {}); }
      return next;
    });
  };
  return <>
    <video ref={ref} className="tv-video" src={active ? `/templates/${id}.mp4` : undefined} poster={`/templates/${id}-poster.jpg`} muted={muted} loop autoPlay playsInline preload={eager ? 'metadata' : 'none'} style={{ background: `linear-gradient(165deg, ${colors[0]}, ${colors[1]})` }}/>
    <span className="tv-sound" role="button" tabIndex={0} aria-label={muted ? 'Unmute video' : 'Mute video'} onClick={toggleSound} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') toggleSound(e); }}>{muted ? <VolumeX size={15}/> : <Volume2 size={15}/>}</span>
  </>;
}

export function SashaLaCatrinaHome({ creditsPerUsd = 12, videoCosts = getVideoCostTable(), pageUrl }: { creditsPerUsd?: number; videoCosts?: ReturnType<typeof getVideoCostTable>; pageUrl?: string }) {
  const locale = useLocale();
  const zh = locale === 'zh';
  const t = (en: string, cn: string) => zh ? cn : en;
  useEffect(() => { track('view_template', { template: 'sasha_la_catrina' }); }, []);
  const [template, setTemplate] = useState<SashaLaCatrinaTemplate>(sashaLaCatrinaTemplates.find((item) => item.id === 'catrina-flower-toss') ?? sashaLaCatrinaTemplates[0]);
  const focusGenerator = () => { document.getElementById('generator')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); };
  const choose = (item: SashaLaCatrinaTemplate = sashaLaCatrinaTemplates[0]) => { track('click_generate', { template: 'sasha_la_catrina', variant: item.id }); setTemplate(item); focusGenerator(); };
  const start = () => focusGenerator();
  const features = [
    [Users, t('One photo — you, your mum or your pet', '一张照片——你、妈妈或宠物'), t('Most reveals take a single front-facing portrait; the pet samples take one photo of your cat or dog. The paint, the gown and the candles are already in the clip.','大多数变身只需要一张正面照；宠物样本用一张猫狗的照片。妆、裙和蜡烛都已经在片段里。')],
    [Music, t('The sound is baked in', '原声自带'), t('The samples keep their original audio — "Adiós señora bonita" from The Book of Life, the line the whole wave rides.','样本保留原声——《生命之书》的《Adiós señora bonita》，整条浪潮骑的就是这句。')],
    [Sparkles, t('Seven reveals to pick from', '七个变身任选'), t('Flower Toss, Second Face, Song Reveal, Ofrenda Reveal, Catrín, Catrina Cat and Grandmother — the picker sits beside the preview.','撒花变身、同款另一张脸、歌声变身、祭坛揭面、男版 Catrín、猫咪变身、游行奶奶——选择器就在预览旁边。')],
    [Clock, t('5-15 seconds, vertical, peak-ready', '5-15 秒，竖屏，正当时'), t('Each sample keeps its own length — 5, 10 or 15 seconds — and exports vertical 9:16 with no watermark on paid plans. The wave peaks on Día de Muertos.','每个样本保留自己的时长——5、10 或 15 秒——竖屏 9:16 导出，付费方案无水印。浪潮正值亡灵节峰值。')],
  ] as const;
  const steps = SASHA_LA_CATRINA_HOW_TO_STEPS.map((step) => [zh ? step.name.zh : step.name.en, zh ? step.text.zh : step.text.en] as const);
  const faq = getSashaLaCatrinaFaq(zh, { videoCosts, creditsPerUsd });
  const howToJsonLd = buildHowToJsonLdFromSteps({
    name: t('How to make a Catrina AI video', '如何制作 Catrina AI 视频'),
    description: t('Pick a reveal on ViralReel, upload one photo, download the 5-15 second vertical MP4, then post with the trend sound and the AI label.', '在 ViralReel 选一个变身，上传一张照片，下载 5-15 秒竖屏 MP4，再配上趋势原声和 AI 标注发布。'),
    url: pageUrl,
    steps: steps.map(([name, text]) => ({ name, text })),
  });
  return <div className="viral-home">{howToJsonLd ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} /> : null}
    <ViralHeader onStart={start}/>
    <main>
      <section className="hero"><div className="container"><div className="hero-badge"><Flame size={16}/><span>#fairytalecatrina is trending · Día de Muertos</span></div><h1>{t('One photo. One flower. Come back as ', '一张照片，一朵花，变回 ')}<span className="hl">Sasha La Catrina</span></h1><TemplateGenerator key={template.id} template={template} open embedded onOpenChange={() => {}}/></div></section>
      <section className="sec templates-section" id="templates"><div className="container"><div className="sec-head"><p className="kick">{t('Samples','变身样本')}</p><h2>{t('Seven ways to come back as Catrina','变回卡特里娜的七种方式')}</h2><p className="sub">{t('Pick the reveal you want — your photo supplies the face, the clip supplies everything else.','选你想要的变身——照片出脸，片段包办其余。')}</p></div><div className="grid3">{sashaLaCatrinaTemplates.map((item, index) => <article className="tcard" key={item.id}><button className="tv tv-full" aria-label={`${t('Use','使用')} ${item.name[zh ? 1 : 0]}`} onClick={() => choose(item)} style={{ '--g1': item.colors[0], '--g2': item.colors[1] } as CSSProperties}><TemplateVideo id={item.id} colors={item.colors} eager={index < 2}/>{index === 0 && <span className="hot">HOT</span>}{creditOf(item) && <span className="tv-credit">{creditOf(item)}</span>}<span className="tv-play"><Play size={16}/></span><span className="tv-bar"><i/></span></button><div className="tmeta"><b>{item.name[zh ? 1 : 0]}</b></div><button className="use" onClick={() => choose(item)}>{t('Generate','立即生成')}</button></article>)}</div></div></section>
      <div className="logos"><p className="lbl">{t('Creators are posting ViralReel videos on','创作者们正在这些平台发布 ViralReel 视频')}</p><div className="row"><span className="soc tiktok"><PlatformIcon type="tiktok"/>TikTok</span><span className="soc youtube"><PlatformIcon type="youtube"/>YouTube Shorts</span><span className="soc instagram"><PlatformIcon type="instagram"/>Instagram Reels</span><span className="soc x"><PlatformIcon type="x"/>X / Twitter</span><span className="soc reddit"><PlatformIcon type="reddit"/>Reddit</span></div></div>
      <section className="stats"><div className="container stats-grid"><div><div className="statnum">5-15<em>s</em></div><p>{t('Length follows your sample','时长跟随所选样本')}</p></div><div><div className="statnum">9:16</div><p>{t('Vertical export, like the trend','竖屏导出，与趋势一致')}</p></div><div><div className="statnum">1</div><p>{t('Photo — you, your mum or your pet','张照片——你、妈妈或宠物')}</p></div></div></section>
      <section className="sec sec-alt" id="what"><div className="container"><div className="sec-head"><p className="kick">{t('What is Sasha La Catrina','Sasha La Catrina 是什么')}</p><h2>{t('The Día de Muertos reveal everyone is casting themselves into','人人都在给自己选角的亡灵节变身')}</h2><p className="sub">{t('The paint is a hundred years old. The reveal is one photo new.','妆有一百岁，变身只要一张照片。')}</p></div><div className="grid4">{features.map(([Icon,title,desc]) => <div className="feat" key={title}><div className="ic"><Icon size={20}/></div><h3>{title}</h3><p>{desc}</p></div>)}</div></div></section>
      <section className="sec" id="how"><div className="container"><div className="sec-head"><p className="kick">{t('How it works','使用教程')}</p><h2>{t('How to make a Catrina AI video','如何制作 Catrina AI 视频')}</h2><p className="sub">{t('From one photo to a posted reveal in minutes — no app, no editor, no prompt.','一张照片到一条发出去的变身只要几分钟——不用装 App，不用会剪辑，不用写提示词。')}</p></div><div className="grid4s">{steps.map(([title,desc],i) => <div className="step" key={title}><div className="num">{i+1}</div><h3>{title}</h3><p>{desc}</p></div>)}</div></div></section>
      <section className="sec" id="guide"><div className="container guide"><div className="sec-head"><p className="kick">{t('Guide','指南')}</p><h2>{t('Sasha La Catrina: the trend, the lady of the dead, and how to make your own','Sasha La Catrina：趋势、亡灵女士，以及怎么做你自己的')}</h2></div>
        <figure className="guide-fig"><img src="/templates/catrina-og.jpg" alt="Sasha La Catrina AI template on ViralReel — the fairytale Catrina reveal from one photo" width={1200} height={630} loading="lazy"/><figcaption>{t('Make the Catrina AI reveal on ViralReel (viralreel.app) from one photo.','在 ViralReel（viralreel.app）用一张照片制作 Catrina AI 变身。')}</figcaption></figure>
        <h3>{t('Short answer','简短回答')}</h3>
        <p>{t('A Sasha La Catrina video is a one-photo AI reveal you make on ViralReel at https://www.viralreel.app/sasha-la-catrina-ai-template: a flower crosses the frame or hands cover the face, marigold light sweeps over, and the person in your photo comes back as the fairytale Catrina of The Book of Life — sugar-skull paint in white and gold, an embroidered lace gown, a crown of flowers. The clips run 5, 10 or 15 seconds, vertical 9:16, with the sample\'s original sound kept. ViralReel does not license the song and is not affiliated with the original creators — add the trend sound in TikTok and label the post as AI.','Sasha La Catrina 视频是你在 ViralReel（https://www.viralreel.app/zh/sasha-la-catrina-ai-template ）用一张照片做的 AI 变身：一朵花划过画面或双手掩面，万寿菊金光扫过，照片里的人变回《生命之书》的童话版卡特里娜——白金糖骷髅妆、刺绣蕾丝裙、花冠。成片 5、10 或 15 秒，9:16 竖屏，保留样本原声。ViralReel 不授权歌曲、与原作者无关联——请在 TikTok 加趋势原声并标注 AI。')}</p>
        <h3>{t('Who is Sasha La Catrina?','Sasha La Catrina 是谁？')}</h3>
        <p>{t('She is La Catrina herself — the elegant skeleton of Día de Muertos — with the fairytale look she wears in the 2014 animated film The Book of Life: the glowing gown, the flowered hat, the candle-lit land of the remembered. "Sasha" is the nickname the Spanish side of TikTok gave her in this trend, and the CapCut template that made the reveal one photo long is named after her. The paint is a hundred years older than the film: La Catrina started around 1910 as José Guadalupe Posada\'s etching la calavera garbancera, and Diego Rivera named her in his 1947 Alameda Park mural.','她就是 La Catrina 本尊——亡灵节的优雅骷髅女士——穿着她在 2014 年动画电影《生命之书》里的童话造型：发光的裙装、花冠帽、烛光中的回忆之地。「Sasha」是西语区 TikTok 在这条趋势里给她的爱称，让变身只要一张照片的 CapCut 模板也以她命名。妆比电影老一百岁：La Catrina 始于约 1910 年 José Guadalupe Posada 的版画 la calavera garbancera，1947 年 Diego Rivera 在阿拉梅达公园壁画里为她命名。')}</p>
        <h3>{t('How did the trend move?','这波趋势是怎么走起来的？')}</h3>
        <p>{t('The first traveling Catrina AI clip went up on 24 September 2026 — an elegant reveal in front of a lit ofrenda, 216.6K plays. On 20 October, Đan Thy (@thybui.__) threw a purple flower across her bedroom and came back as Catrina: 40.6M plays and 7M likes, the shape of the whole wave. On 25 October her follow-up captioned "adios SHASHA" put the film line "Adiós señora bonita" on the reveal and passed 31M plays. On 26 October the CapCut template named Sasha La Catrina spread through template accounts and turned the reveal into one photo. On 27 October pets joined — a kitten in a lace dress passed 453K plays. On 1 November, Día de Muertos, the wave hit its peak: #fairytalecatrina was taking about 72 new posts a day.','第一条走红的 Catrina AI 片 2026 年 9 月 24 日上线——烛光祭坛前的优雅变身，21.66 万播放。10 月 20 日，Đan Thy（@thybui.__）把一朵紫花扔过卧室，回来时已是卡特里娜：4060 万播放、700 万点赞，整条浪潮的定型。10 月 25 日她的续作文案「adios SHASHA」把电影台词「Adiós señora bonita」配进变身，破 3100 万播放。10 月 26 日，名为 Sasha La Catrina 的 CapCut 模板在模板账号间传开，把变身变成一张照片的事。10 月 27 日宠物入场——蕾丝裙小猫破 45.3 万播放。11 月 1 日亡灵节，浪潮登顶：#fairytalecatrina 每天新增约 72 条帖子。')}</p>
        <h3>{t('Why did it go viral?','它为什么会爆火？')}</h3>
        <p>{t('Because the variable is exactly one thing: the face. The reveal, the gown, the light and the sound never change, so every copy reads at a glance and one photo is the whole production. The look carries meaning on its own — La Catrina is the holiday\'s shared symbol, and the trend arrived in the one week when the entire feed is ofrendas and marigolds. And the format is generous: it works for you, your mum, your grandmother, a man as the Catrín, and the family cat.','因为变量只有一个：脸。变身、裙装、光效和声音从不变，每条二创一眼就能读懂，一张照片就是全部制作成本。造型自带意义——La Catrina 是亡灵节共享的文化符号，而趋势恰好在整个信息流都是祭坛和万寿菊的那一周到来。格式还很宽容：你、你妈妈、你奶奶都行，男生可以走 Catrín，家里猫也没问题。')}</p>
        <h3>{t('Where can I generate a Catrina AI video?','在哪里可以生成 Catrina AI 视频？')}</h3>
        <p>{t('On ViralReel, at https://www.viralreel.app/sasha-la-catrina-ai-template. The sample list sits beside the preview: pick the reveal, watch it play, upload one photo, generate. ViralReel does not host TikToks or license the song.','在 ViralReel：https://www.viralreel.app/zh/sasha-la-catrina-ai-template 。样本列表就在预览旁边：选变身、看预览、传一张照片、点生成。ViralReel 不托管 TikTok、不授权歌曲。')}</p>
        <h3>{t('How do you make a Catrina AI video?','怎么制作 Catrina AI 视频？')}</h3>
        <ol>{steps.map(([name, text]) => <li key={name}><strong>{name}.</strong> {text}</li>)}</ol>
        <p className="guide-more"><Link href="/sasha-la-catrina-ai">{t('Sasha La Catrina AI','Sasha La Catrina AI')}</Link> · <Link href="/sasha-la-catrina-template">{t('The seven reveals','七个变身')}</Link> · <Link href="/sasha-la-catrina-video">{t('The video format','视频格式')}</Link> · <Link href="/sasha-la-catrina-tiktok">{t('TikTok posting guide','TikTok 发布指南')}</Link> · <Link href="/sasha-la-catrina-generator">{t('The generator','生成器')}</Link> · <Link href="/catrina-ai">{t('Catrina AI','Catrina AI')}</Link> · <Link href="/catrina-ai-filter">{t('The filter, explained','滤镜详解')}</Link> · <Link href="/sasha-la-catrina-song">{t('The song','原声')}</Link> · <Link href="/la-catrina-history">{t('La Catrina history','La Catrina 百年史')}</Link> · <Link href="/catrina-makeup-vs-ai">{t('Makeup vs AI','真妆 vs AI')}</Link> · <Link href="/catrina-day-of-the-dead-pet">{t('Pet versions','宠物版')}</Link> · <Link href="/sasha-la-catrina-meme">{t('The meme, explained','梗详解')}</Link> · <Link href="/how-to-make-catrina-ai">{t('Four-step guide','四步指南')}</Link> · <Link href="/pricing">{t('Pricing','定价')}</Link></p>
        <h3>{t('Is the reveal the real makeup?', '变身是真妆吗？')}</h3>
        <p>{t('No. The samples are AI renders in the fairytale style of The Book of Life, not real face paint — the offline half of the trend is the Catrina makeup tutorials, and no photo can replace those. Keep the AI-generated label on when you post, use photos of yourself or your family or pet, and do not present the render as real makeup or as memorial content for a pet that has passed.','不是。样本是《生命之书》童话风格的 AI 渲染，不是真实面妆——趋势的线下半场是 Catrina 妆容教程，任何照片都替代不了。发布时保持 AI 生成标注，只用你本人、家人或宠物的照片，不要把成片冒充真妆或离世宠物的纪念内容。')}</p>
        <p>{t('This is a fan-made parody tool and is not connected to Đan Thy, The Book of Life rights holders, or any creator featured here.','这是一个粉丝向戏仿工具，与 Đan Thy、《生命之书》版权方或本页提及的任何创作者均无关联。')}</p>
        <p className="guide-more"><Link href={SASHA_LA_CATRINA_POSTS.explained}>{t('What the trend is','趋势是什么')}</Link> · <Link href={SASHA_LA_CATRINA_POSTS.howTo}>{t('Full how-to blog','完整教程博客')}</Link> · <Link href={SASHA_LA_CATRINA_POSTS.song}>{t('The song and La Catrina\'s story','原声与 La Catrina 的故事')}</Link> · <Link href={SASHA_LA_CATRINA_POSTS.generators}>{t('Best generators, November 2026','2026 年 11 月生成器对照')}</Link> · <Link href={SASHA_LA_CATRINA_POSTS.photos}>{t('Photo tips','照片建议')}</Link> · <Link href={SASHA_LA_CATRINA_POSTS.roundup}>{t('October 2026 meme roundup','2026 年 10 月梗视频盘点')}</Link></p>
      </div></section>
      <section className="sec sec-alt" id="faq"><div className="container"><div className="sec-head"><p className="kick">{t('FAQ','常见问题')}</p><h2>{t('Frequently asked questions about Sasha La Catrina','关于 Sasha La Catrina 的常见问题')}</h2></div><div className="faq-list">{faq.map(([question,answer],i) => <details key={question} open={i === 0}><summary>{question}</summary><p>{answer}</p></details>)}</div></div></section>
      <section className="sec" id="related"><div className="container"><div className="sec-head"><p className="kick">{t('Related','相关')}</p><h2>{t('Sasha La Catrina guides on ViralReel','ViralReel 上的 Sasha La Catrina 指南')}</h2></div><SashaLaCatrinaLinkCluster zh={zh} currentPath="/sasha-la-catrina-ai-template" /></div></section>
      <section className="final-cta sec-alt"><div className="container"><h2>{t('Come back as Catrina','回来吧，以卡特里娜的样子')}</h2><p>{t('Pick a reveal, upload one photo, and post it while the marigolds are still up.','选一个变身，上传一张照片，趁万寿菊还在，发出去。')}</p><button className="btn btn-primary btn-lg" onClick={start}>{t('Upload one photo — start now','上传一张照片，立即开始')}<ArrowRight size={16}/></button></div></section>
    </main>
    <ViralFooter/>
  </div>;
}
