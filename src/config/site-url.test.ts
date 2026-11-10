import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import {
  CANONICAL_SITE_ORIGIN,
  absoluteSiteUrl,
  assertProductionSiteUrl,
  resolvePublicSiteUrl,
} from './site-url';

describe('resolvePublicSiteUrl', () => {
  it('keeps localhost for local dev when the env is unset', () => {
    assert.equal(
      resolvePublicSiteUrl({ nodeEnv: 'development', configured: null }),
      'http://localhost:3000'
    );
  });

  it('keeps a configured dev URL', () => {
    assert.equal(
      resolvePublicSiteUrl({
        nodeEnv: 'development',
        configured: 'http://localhost:3001',
      }),
      'http://localhost:3001'
    );
  });

  it('uses the canonical origin in production when the env is unset', () => {
    assert.equal(
      resolvePublicSiteUrl({ nodeEnv: 'production', configured: null }),
      CANONICAL_SITE_ORIGIN
    );
  });

  it('does not emit localhost from a production sitemap origin', () => {
    assert.equal(
      resolvePublicSiteUrl({
        nodeEnv: 'production',
        configured: 'http://localhost:3000',
      }),
      CANONICAL_SITE_ORIGIN
    );
  });

  it('accepts the canonical https www origin', () => {
    assert.equal(
      resolvePublicSiteUrl({
        nodeEnv: 'production',
        configured: 'https://www.viralreel.app/',
      }),
      CANONICAL_SITE_ORIGIN
    );
  });

  it('throws on a non-https viralreel.app host', () => {
    assert.throws(() =>
      resolvePublicSiteUrl({
        nodeEnv: 'production',
        configured: 'http://www.viralreel.app',
      })
    );
    assert.throws(() =>
      resolvePublicSiteUrl({
        nodeEnv: 'production',
        configured: 'http://viralreel.app',
      })
    );
  });

  it('throws on the apex https host and on any other host', () => {
    assert.throws(() =>
      assertProductionSiteUrl('https://viralreel.app')
    );
    assert.throws(() =>
      resolvePublicSiteUrl({
        nodeEnv: 'production',
        configured: 'https://example.com',
      })
    );
  });
});

describe('absoluteSiteUrl', () => {
  it('builds production sitemap locs on https://www.viralreel.app', () => {
    const options = { nodeEnv: 'production' as const, configured: null };
    const locs = ['/', '/pricing', '/gangstas-paradise-ai-template', '/zh/pricing'].map(
      (path) => absoluteSiteUrl(path, options)
    );
    for (const loc of locs) {
      assert.equal(new URL(loc).origin, CANONICAL_SITE_ORIGIN);
      assert.equal(loc.startsWith('https://www.viralreel.app'), true);
      assert.equal(loc.includes('localhost'), false);
    }
    assert.equal(locs[0], 'https://www.viralreel.app');
    assert.equal(locs[1], 'https://www.viralreel.app/pricing');
    assert.equal(locs[3], 'https://www.viralreel.app/zh/pricing');
  });
});
