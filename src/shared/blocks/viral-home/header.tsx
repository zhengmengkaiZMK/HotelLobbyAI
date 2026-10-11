'use client';

import { Menu } from 'lucide-react';
import { useLocale } from 'next-intl';

import { Link } from '@/core/i18n/navigation';
import { LocaleSelector } from '@/shared/blocks/common/locale-selector';
import { SignUser } from '@/shared/blocks/sign/sign-user';

import { Brand } from './footer';
import './home.css';

// Shared site header for all ViralReel pages: the four top-level destinations.
// onStart opens the page's own generator dialog (each page passes its own).
export function ViralHeader({ onStart }: { onStart: () => void }) {
  const zh = useLocale().startsWith('zh');
  const t = (en: string, cn: string) => (zh ? cn : en);
  const nav: [string, string][] = [
    ['/', t('Hotel Lobby Generator', 'Hotel Lobby 生成器')],
    ['/burning-bridges-ai-template', t('Burning Bridges Generator', 'Burning Bridges 生成器')],
    ['/pricing', t('Pricing', '定价')],
    ['/blog', t('Blog', '博客')],
  ];
  return (
    <header className="site"><div className="container"><div className="nav"><Brand/><nav className="menu" aria-label={t('Main navigation','主导航')}>{nav.map(([href, label]) => <Link key={href} href={href}>{label}</Link>)}</nav><div className="right"><LocaleSelector type="button"/><div className="signin"><SignUser userNav={{ show_name: true, show_credits: true, show_sign_out: true, items: [{ title: t('My generations','生成记录'), url: '/activity/ai-tasks', icon: 'Video' }] }}/></div><button className="btn btn-primary start-button" onClick={onStart}>{t('Start creating','开始创作')}</button><details className="mobile-menu"><summary aria-label={t('Open menu','打开菜单')}><Menu size={20}/></summary><nav>{nav.map(([href, label]) => <Link key={href} href={href} onClick={(e) => e.currentTarget.closest('details')?.removeAttribute('open')}>{label}</Link>)}</nav></details></div></div></div></header>
  );
}
