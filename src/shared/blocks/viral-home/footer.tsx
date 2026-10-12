'use client';

/* eslint-disable @next/next/no-img-element */

import { useLocale } from 'next-intl';

import { Link } from '@/core/i18n/navigation';

import './home.css';

export function Brand() {
  return <Link href="/" className="brand"><svg width="32" height="32" viewBox="0 0 64 64" aria-hidden="true"><defs><linearGradient id="viral-brand" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#f97316"/><stop offset="1" stopColor="#ea580c"/></linearGradient></defs><rect width="64" height="64" rx="12" fill="url(#viral-brand)"/><line x1="32" y1="14" x2="32" y2="26" stroke="#fff" strokeWidth="3" strokeLinecap="round"/><circle cx="32" cy="32" r="7" fill="#fff"/><circle cx="32" cy="32" r="2.6" fill="#ea580c"/><rect x="14" y="46" width="10" height="8" rx="4" fill="#fff" opacity=".9"/><rect x="40" y="46" width="10" height="8" rx="4" fill="#fff" opacity=".9"/></svg><span className="name">Viral<i>Reel</i></span>  </Link>;
}

export function ViralFooter() {
  const zh = useLocale().startsWith('zh');
  const t = (en: string, cn: string) => (zh ? cn : en);

  return (
    <div className="viral-home">
      <footer><div className="container"><div className="fgrid"><div><Brand/><p>{t('AI trend video templates for creators. Make any viral video in 60 seconds.','为创作者打造的 AI 热梗视频模板，60 秒做出任何爆火视频。')}</p><div className="badges"><a className="badge-launchbuff" href="https://launchbuff.com/products/viralreel-0k8f3r" target="_blank" rel="noopener noreferrer" title="Featured on LaunchBuff"><img src="https://launchbuff.com/badge-featured-dark.svg" alt="Featured on LaunchBuff" width="128" height="40" loading="lazy"/></a><a className="badge-findly" href="https://findly.tools/viralreel?utm_source=viralreel" target="_blank" rel="noopener noreferrer" title="Featured on Findly.tools"><img src="https://findly.tools/badges/findly-tools-badge-light.svg" alt="Featured on Findly.tools" width="175" height="55" loading="lazy"/></a></div></div><div><h3>{t('Product','产品')}</h3><a href="/#templates">{t('Templates','模板')}</a><Link href="/pricing">{t('Pricing','定价')}</Link><Link href="/ai-video-generator">{t('Video generator','视频生成器')}</Link></div><div><h3>{t('Resources','资源')}</h3><a href="/#how">{t('How it works','使用教程')}</a><a href="/#faq">{t('FAQ','常见问题')}</a><Link href="/blog">{t('Blog','博客')}</Link><a href="https://indieai.directory/tools/viralreel/" target="_blank" rel="noopener">ViralReel on IndieAI Directory</a><Link href="/hotel-lobby-ai-template">{t('Hotel Lobby AI template guide','Hotel Lobby AI 模板指南')}</Link><Link href="/burning-bridges-ai-template">{t('Burning Bridges AI template guide','Burning Bridges AI 模板指南')}</Link></div><div><h3>{t('Company','公司')}</h3><Link href="/privacy-policy">{t('Privacy Policy','隐私政策')}</Link><Link href="/terms-of-service">{t('Terms of Service','服务条款')}</Link></div><div><h3>{t('Support','客服支持')}</h3><a href="mailto:support@viralreel.app">support@viralreel.app</a><p>{t('Questions or issues? Email us any time.','有任何问题或疑问，随时邮件联系我们。')}</p></div></div><div className="legal">© {new Date().getFullYear()} ViralReel · All rights reserved.</div></div></footer>
    </div>
  );
}
