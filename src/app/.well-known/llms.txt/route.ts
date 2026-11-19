import { readFile } from 'node:fs/promises';
import path from 'node:path';

import { getCloudflareContext } from '@opennextjs/cloudflare';

export const dynamic = 'force-dynamic';

type AssetBinding = {
  fetch: (input: Request) => Promise<Response>;
};

/**
 * /.well-known/llms.txt
 *
 * public/llms.txt is the only copy. next.config rewrites do not serve it
 * here: on this OpenNext worker the path 404s as HTML. Read that same
 * asset (Workers ASSETS binding, or the public file in local next dev).
 */
async function readLlmsTxt(request: Request): Promise<Uint8Array | null> {
  try {
    const { env } = getCloudflareContext() as {
      env?: { ASSETS?: AssetBinding };
    };
    if (env?.ASSETS) {
      const asset = await env.ASSETS.fetch(
        new Request(new URL('/llms.txt', request.url))
      );
      const type = asset.headers.get('content-type') || '';
      if (asset.ok && !type.includes('text/html')) {
        return new Uint8Array(await asset.arrayBuffer());
      }
    }
  } catch {
    // next dev has no assets binding until the Cloudflare context is ready.
  }

  try {
    return await readFile(path.join(process.cwd(), 'public', 'llms.txt'));
  } catch {
    return null;
  }
}

export async function GET(request: Request) {
  const body = await readLlmsTxt(request);
  if (!body) {
    return new Response('llms.txt is unavailable', {
      status: 404,
      headers: { 'content-type': 'text/plain; charset=utf-8' },
    });
  }
  return new Response(body, {
    headers: {
      'content-type': 'text/plain; charset=utf-8',
      'cache-control': 'public, max-age=0, must-revalidate',
    },
  });
}
