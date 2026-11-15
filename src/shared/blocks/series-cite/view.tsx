'use client';

import { ArrowRight } from 'lucide-react';
import { useLocale } from 'next-intl';

import { Link, useRouter } from '@/core/i18n/navigation';
import { ViralFooter } from '@/shared/blocks/viral-home/footer';
import { ViralHeader } from '@/shared/blocks/viral-home/header';

import type { CiteEntry } from './catalog';

import '@/shared/blocks/viral-home/home.css';

export function CiteView({ entry }: { entry: CiteEntry }) {
  const locale = useLocale();
  const zh = locale.startsWith('zh');
  const lang = zh ? 'zh' : 'en';
  const router = useRouter();

  return (
    <div className="viral-home">
      <ViralHeader onStart={() => router.push(entry.hubPath)} />
      <main>
        <section className="hero">
          <div className="container">
            <div className="hero-badge">
              <span>ViralReel · {zh ? entry.seriesZh : entry.seriesEn}</span>
            </div>
            <h1>{entry.h1[lang]}</h1>
            <p className="lead">{entry.lead[lang]}</p>
            <div className="hero-cta">
              <Link className="btn btn-primary btn-lg" href={entry.hubPath}>
                {zh ? '打开模板' : 'Open the template'}
                <ArrowRight size={16} />
              </Link>
              <Link className="btn btn-outline btn-lg" href="/pricing">
                {zh ? '积分包定价' : 'Credit pack pricing'}
              </Link>
            </div>
          </div>
        </section>
        <section className="sec" id="guide">
          <div className="container guide">
            <h2>{entry.guideTitle[lang]}</h2>
            <figure className="guide-fig">
              <img
                src={entry.ogPath}
                alt={zh ? entry.seriesZh : entry.seriesEn}
                width={1200}
                height={630}
              />
            </figure>
            {entry.body[lang].map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
            <h3>{zh ? '相关页面' : 'Related pages'}</h3>
            <ul className="guide-links">
              {entry.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{zh ? link.zh : link.en}</Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section className="sec sec-alt" id="faq">
          <div className="container">
            <div className="sec-head">
              <p className="kick">{zh ? '常见问题' : 'FAQ'}</p>
              <h2>
                {zh
                  ? `关于 ${entry.seriesZh} 的常见问题`
                  : `Questions about ${entry.seriesEn}`}
              </h2>
            </div>
            <div className="faq-list">
              {entry.faq.map((item, index) => (
                <details key={item.q.en} open={index === 0}>
                  <summary>{item.q[lang]}</summary>
                  <p>{item.a[lang]}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
      <ViralFooter />
    </div>
  );
}
