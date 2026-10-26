import { respData, respErr } from '@/shared/lib/resp';
import { canUse1080p } from '@/shared/lib/plan-entitlements';
import { getRemainingCredits } from '@/shared/models/credit';
import { getUserInfo } from '@/shared/models/user';

export async function POST(req: Request) {
  try {
    const user = await getUserInfo();
    if (!user) {
      return respErr('no auth, please sign in');
    }

    const credits = await getRemainingCredits(user.id);
    const hdAllowed = await canUse1080p(user.id);

    return respData({ remainingCredits: credits, hdAllowed });
  } catch (e) {
    console.log('get user credits failed:', e);
    return respErr('get user credits failed');
  }
}
