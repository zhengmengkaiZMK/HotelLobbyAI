'use client';

/* eslint-disable @next/next/no-img-element */

import { ChevronDown, Flame, Menu, Video } from 'lucide-react';
import { useLocale } from 'next-intl';

import { Link, usePathname } from '@/core/i18n/navigation';
import {
  TRENDING_TEMPLATES,
  type TrendingTemplate,
} from '@/config/trending-templates';
import { LocaleSelector } from '@/shared/blocks/common/locale-selector';
import { SignUser } from '@/shared/blocks/sign/sign-user';
import { useAppContext } from '@/shared/contexts/app';
import { useIsMobile } from '@/shared/hooks/use-mobile';

import { Brand } from './footer';
import './home.css';

const TRENDING_NAV_ORDER = [
  'tiny-desk',
  'window-peeper',
  'pedra-do-sal',
  'bby-wow',
  'ozil-goal',
  'bulin-47',
  'hit-the-road-dude',
  'burning-bridges',
  'hotel-lobby',
] as const;

function trendingNavItems(): TrendingTemplate[] {
  return TRENDING_NAV_ORDER.map((id) =>
    TRENDING_TEMPLATES.find((item) => item.id === id)
  ).filter((item): item is TrendingTemplate => Boolean(item?.href));
}

function closeMobileMenu(event: { currentTarget: EventTarget & Element }) {
  event.currentTarget.closest('details.mobile-menu')?.removeAttribute('open');
}

// Shared site header for all ViralReel pages.
// onStart opens the page's own generator dialog (each page passes its own).
export function ViralHeader({ onStart }: { onStart: () => void }) {
  const zh = useLocale().startsWith('zh');
  const t = (en: string, cn: string) => (zh ? cn : en);
  const pathname = usePathname();
  const isMobile = useIsMobile();
  const { user, setIsShowSignModal } = useAppContext();
  const showThumbs = !isMobile;
  const series = trendingNavItems();
  const homeHash = (id: string) =>
    pathname === '/' ? `#${id}` : zh ? `/zh#${id}` : `/#${id}`;
  const links: { href: string; label: string }[] = [
    { href: homeHash('trending'), label: t('Templates', '模板') },
    { href: homeHash('how'), label: t('How it works', '使用教程') },
    { href: '/pricing', label: t('Pricing', '定价') },
    { href: '/blog', label: t('Blog', '博客') },
  ];
  const generationsLabel = t('My generations', '生成记录');
  // Logged-in users go straight to their generation records; anonymous users
  // get the sign-in modal first (same flow as the generator's signup wall).
  const openGenerations = () => {
    if (user) return;
    setIsShowSignModal(true);
  };
  const GenerationsLink = ({ onClose }: { onClose?: () => void }) =>
    user ? (
      <Link href="/activity/ai-tasks" onClick={onClose}>
        {generationsLabel}
      </Link>
    ) : (
      <button type="button" className="menu-link" onClick={onClose ?? openGenerations}>
        {generationsLabel}
      </button>
    );

  return (
    <header className="site">
      <div className="container">
        <div className="nav">
          <Brand />
          <nav className="menu" aria-label={t('Main navigation', '主导航')}>
            <div className="has-sub">
              <button type="button" className="trending-link" aria-haspopup="true">
                <Flame size={15} aria-hidden="true" />
                {t('Trending', '热门')}
                <ChevronDown size={14} aria-hidden="true" />
              </button>
              <div className="submenu" role="menu">
                {series.map((item) => (
                  <Link
                    key={item.id}
                    href={item.href || '/'}
                    role="menuitem"
                    className="sub-item"
                  >
                    {showThumbs && item.poster ? (
                      <span className="sub-thumb" aria-hidden="true">
                        <img src={item.poster} alt="" width={36} height={52} />
                      </span>
                    ) : null}
                    <span>{item.name[zh ? 1 : 0]}</span>
                  </Link>
                ))}
              </div>
            </div>
            {links.map((item) =>
              item.href.startsWith('#') || item.href.includes('#') ? (
                <a key={item.href} href={item.href}>
                  {item.label}
                </a>
              ) : (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              )
            )}
            <GenerationsLink />
          </nav>
          <div className="right">
            <LocaleSelector type="button" />
            <div className="signin">
              <SignUser
                userNav={{
                  show_name: true,
                  show_credits: true,
                  show_sign_out: true,
                  items: [
                    {
                      title: generationsLabel,
                      url: '/activity/ai-tasks',
                      icon: 'Video',
                    },
                  ],
                }}
              />
            </div>
            <button className="btn btn-primary start-button" onClick={onStart}>
              {t('Start creating', '开始创作')}
            </button>
            <details className="mobile-menu">
              <summary aria-label={t('Open menu', '打开菜单')}>
                <Menu size={20} />
              </summary>
              <nav>
                <details className="mobile-sub" open>
                  <summary>
                    <Flame size={15} aria-hidden="true" />
                    {t('Trending', '热门')}
                  </summary>
                  {series.map((item) => (
                    <Link
                      key={item.id}
                      href={item.href || '/'}
                      onClick={closeMobileMenu}
                    >
                      {item.name[zh ? 1 : 0]}
                    </Link>
                  ))}
                </details>
                {links.map((item) =>
                  item.href.startsWith('#') || item.href.includes('#') ? (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={closeMobileMenu}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={closeMobileMenu}
                    >
                      {item.label}
                    </Link>
                  )
                )}
                {user ? (
                  <Link href="/activity/ai-tasks" onClick={closeMobileMenu}>
                    <Video size={15} aria-hidden="true" />
                    {generationsLabel}
                  </Link>
                ) : (
                  <button
                    type="button"
                    className="menu-link"
                    onClick={(e) => {
                      closeMobileMenu(e);
                      setIsShowSignModal(true);
                    }}
                  >
                    <Video size={15} aria-hidden="true" />
                    {generationsLabel}
                  </button>
                )}
              </nav>
            </details>
          </div>
        </div>
      </div>
    </header>
  );
}
