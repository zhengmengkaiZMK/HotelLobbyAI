import { db } from '@/core/db';
import { buildImageCatalog } from '@/shared/lib/image-tool';
import { respData, respErr } from '@/shared/lib/resp';
import { getAllConfigs } from '@/shared/models/config';
import { getRemainingCredits } from '@/shared/models/credit';
import { getUserInfo } from '@/shared/models/user';
import { readImageQuota } from '@/shared/services/image-quota';

export async function GET() {
  try {
    const configs = await getAllConfigs(true);
    const user = await getUserInfo();
    if (!user) return respData(buildImageCatalog(configs, null));
    let quota = { freeRemaining: 1, dayKey: '', resetsAt: '' };
    try {
      const read = await readImageQuota(db(), user.id);
      quota = { freeRemaining: read.freeRemaining, dayKey: read.dayKey, resetsAt: read.resetsAt };
    } catch (error) {
      console.error('read image quota failed', error);
    }
    const balance = await getRemainingCredits(user.id);
    return respData(buildImageCatalog(configs, { ...quota, balance }));
  } catch (error) {
    console.error('image catalog failed', error);
    return respErr('Could not load the image tool');
  }
}
