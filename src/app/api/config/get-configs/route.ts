import { respData, respErr } from '@/shared/lib/resp';
import { getPublicConfigs } from '@/shared/models/config';

export async function POST(req: Request) {
  try {
    // fresh read: the frontend generator derives prompts, reference media and
    // model availability from this payload — a stale isolate cache (up to 1h
    // on Cloudflare) would silently fall back to built-in templates
    const configs = await getPublicConfigs(true);

    return respData(configs);
  } catch (e: any) {
    console.log('get configs failed', e);
    return respErr(e.message);
  }
}
