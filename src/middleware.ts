import { NextRequest, NextResponse, type NextFetchEvent } from 'next/server';
import { getSessionCookie } from 'better-auth/cookies';
import createIntlMiddleware from 'next-intl/middleware';

import { routing } from '@/core/i18n/config';
import { getPruneDecision } from '@/config/seo-pruning';

const intlMiddleware = createIntlMiddleware(routing);

// AI assistants and search engines fetch the HTML and leave without running
// JavaScript, so the browser-side pvuv beacon never sees them. Only the server
// can report those fetches. Fire-and-forget in waitUntil: the report must never
// delay or fail the response the crawler gets.
const PVUV_CRAWLERS =
  /chatgpt-user|oai-searchbot|gptbot|perplexity-user|perplexitybot|claude-user|claude-searchbot|claudebot|bingbot|googlebot|applebot|duckduckbot|duckassistbot|yandexbot|meta-externalagent|bytespider/i;

function reportCrawlerHit(request: NextRequest, event: NextFetchEvent) {
  // Both come from the worker environment (PVUV_SITE in [vars], the token as a
  // secret). Missing config means the feature stays off rather than erroring.
  const site = process.env.PVUV_SITE;
  const token = process.env.PVUV_INGEST_TOKEN;
  if (!site || !token) return;

  const method = request.method;
  if (method !== 'GET' && method !== 'HEAD') return;

  const ua = request.headers.get('user-agent') ?? '';
  if (!PVUV_CRAWLERS.test(ua)) return;

  const { pathname } = request.nextUrl;
  // Machine endpoints are not pages. The matcher already drops /api and /_next;
  // this guards the day anyone loosens it.
  if (pathname.startsWith('/api') || pathname.startsWith('/_')) return;

  // cf-connecting-ip is the real client address on Workers; the others cover
  // local dev and any proxy in front. pvuv keeps it only long enough to check
  // the address against the crawler's published ranges.
  const ip =
    request.headers.get('cf-connecting-ip') ??
    request.headers.get('x-real-ip') ??
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    undefined;

  try {
    event.waitUntil(
      fetch(`https://api.pvuv.ai/v1/sites/${site}/crawler_hits`, {
        method: 'POST',
        headers: {
          authorization: `Bearer ${token}`,
          'content-type': 'application/json',
        },
        body: JSON.stringify({ hits: [{ ua, path: pathname, ip, ts: Date.now() }] }),
        signal: AbortSignal.timeout(3000),
      }).catch(() => {})
    );
  } catch {
    // Reporting is best-effort. Never let it surface to the response path.
  }
}

// 410 body. Kept tiny: this response exists to tell crawlers the URL is gone,
// not to sell anything. Inline styles so it needs no CSS chunk.
const GONE_HTML = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Page removed</title><meta name="robots" content="noindex"></head><body style="margin:0;font-family:system-ui,-apple-system,Segoe UI,sans-serif;display:flex;min-height:100vh;align-items:center;justify-content:center;background:#fff;color:#111"><main style="max-width:32rem;padding:2rem;text-align:center"><h1 style="font-size:1.25rem;font-weight:500;margin:0 0 .75rem">This page has been removed</h1><p style="font-size:.9375rem;line-height:1.6;color:#555;margin:0 0 1.5rem">We retired this page because it repeated a template page without adding anything. Everything we still publish is listed on the homepage.</p><a href="/" style="display:inline-block;padding:.625rem 1.25rem;border:1px solid #111;border-radius:999px;color:#111;text-decoration:none;font-size:.9375rem">Go to ViralReel</a></main></body></html>`;

export async function middleware(request: NextRequest, event: NextFetchEvent) {
  reportCrawlerHit(request, event);

  const { pathname } = request.nextUrl;

  // Resolve locale before anything else: the prune lists are keyed by bare slug.
  const firstSegment = pathname.split('/')[1];
  const hasLocale = routing.locales.includes(firstSegment as any);
  const barePath = hasLocale
    ? pathname.slice(firstSegment.length + 1) || '/'
    : pathname;

  // Content pruning. Runs before i18n so retired URLs never render, never hit
  // ISR, and never cost a worker invocation on a full page.
  const prune = getPruneDecision(barePath.replace(/^\//, ''));
  if (prune) {
    if (prune.type === 'redirect') {
      const target = new URL(request.url);
      const prefix =
        hasLocale && firstSegment !== routing.defaultLocale
          ? `/${firstSegment}`
          : '';
      // Empty target = the homepage (keep the locale prefix without a slug).
      target.pathname = prune.to
        ? `${prefix}/${prune.to}`
        : prefix || '/';
      target.search = '';
      return NextResponse.redirect(target, 301);
    }

    return new NextResponse(GONE_HTML, {
      status: 410,
      headers: {
        'content-type': 'text/html; charset=utf-8',
        'x-robots-tag': 'noindex',
        'cache-control': 'public, s-maxage=86400',
      },
    });
  }

  // Handle internationalization next
  const intlResponse = intlMiddleware(request);

  // Extract locale from pathname
  const locale = firstSegment;
  const isValidLocale = hasLocale;
  const pathWithoutLocale = barePath;

  const isPrivate =
    pathWithoutLocale.startsWith('/admin') ||
    pathWithoutLocale.startsWith('/settings') ||
    pathWithoutLocale.startsWith('/activity') ||
    pathWithoutLocale.startsWith('/credits') ||
    pathWithoutLocale.startsWith('/checkout') ||
    pathWithoutLocale.startsWith('/sign-') ||
    pathWithoutLocale.startsWith('/auth');

  // Pricing and subscribe read the session (top-up visibility). Do not CDN-cache them.
  const isPersonalized =
    pathWithoutLocale === '/pricing' ||
    pathWithoutLocale.startsWith('/pricing/') ||
    pathWithoutLocale === '/subscribe' ||
    pathWithoutLocale.startsWith('/subscribe/');

  // Only check authentication for admin routes
  if (
    pathWithoutLocale.startsWith('/admin') ||
    pathWithoutLocale.startsWith('/settings') ||
    pathWithoutLocale.startsWith('/activity') ||
    pathWithoutLocale.startsWith('/credits')
  ) {
    // Check if session cookie exists
    const sessionCookie = getSessionCookie(request);

    // If no session token found, redirect to sign-in
    if (!sessionCookie) {
      const signInUrl = new URL(
        isValidLocale ? `/${locale}/sign-in` : '/sign-in',
        request.url
      );
      // Add the current path (including search params) as callback - use relative path for multi-language support
      const callbackPath = pathWithoutLocale + request.nextUrl.search;
      signInUrl.searchParams.set('callbackUrl', callbackPath);
      return NextResponse.redirect(signInUrl);
    }

    // For admin routes, we need to check RBAC permissions
    // Note: Full permission check happens in the page/API route level
    // This is a lightweight session check to prevent unauthorized access
    // The detailed permission check (admin.access and specific permissions)
    // will be done in the layout or individual pages using requirePermission()
  }

  intlResponse.headers.set('x-pathname', request.nextUrl.pathname);
  intlResponse.headers.set('x-url', request.url);

  // Remove Set-Cookie from public pages to allow caching
  // We exclude admin, settings, activity, and auth pages from this behavior
  if (!isPrivate && !isPersonalized) {
    intlResponse.headers.delete('Set-Cookie');

    // Public marketing and hub HTML. Same order as cite pages (revalidate = 300).
    // Not year-long: deploys replace hashed chunks, so a long HTML cache
    // serves stale documents that point at deleted files.
    // Authenticated, account, checkout, pricing, and subscribe stay uncached.
    const cacheControl = 'public, s-maxage=300, stale-while-revalidate=300';

    intlResponse.headers.set('Cache-Control', cacheControl);
    intlResponse.headers.set('CDN-Cache-Control', cacheControl);
    intlResponse.headers.set('Cloudflare-CDN-Cache-Control', cacheControl);
  }

  // For all other routes (including /, /sign-in, /sign-up, /sign-out), just return the intl response
  return intlResponse;
}

export const config = {
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)',
};
