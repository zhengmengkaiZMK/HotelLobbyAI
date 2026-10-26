import { and, eq, gt, inArray, isNull, or } from 'drizzle-orm';

import { db } from '@/core/db';
import { credit, order } from '@/config/db/schema';
import { getCurrentSubscription } from '@/shared/models/subscription';

/**
 * Resolution entitlement: which users may export at 1080p.
 *
 * Pricing promises 720p & 1080p for Popular/Creator/Max packs and Plus/Pro
 * plans; Starter-tier products (starter monthly/yearly subscription and the
 * credits-once-starter pack) promise 480p & 720p only. Users without any paid
 * entitlement (free / gift credits) are capped at 480p/720p as well — the
 * not-enough-credits dialog upsells the Popular pack which unlocks 1080p.
 */
const HD_PACK_PRODUCT_IDS = [
  'credits-once-popular',
  'credits-once-creator',
  'credits-once-max',
];

function isStarterSubscription(paymentProductId?: string | null, planName?: string | null) {
  const productId = (paymentProductId || '').toLowerCase();
  if (productId) return productId.includes('starter');
  return (planName || '').toLowerCase().includes('starter');
}

/**
 * Whether the user may generate/export at 1080p. Fail closed on unexpected
 * errors (the generate API re-checks and reports a friendly message).
 */
export async function canUse1080p(userId: string): Promise<boolean> {
  try {
    // 1) subscription: any active non-starter plan unlocks 1080p
    const sub = await getCurrentSubscription(userId);
    if (sub && !isStarterSubscription(sub.paymentProductId, sub.planName)) {
      return true;
    }

    // 2) one-time packs: active, unexpired grant credits → their orders
    const grants: Array<{ orderNo: string | null }> = await db()
      .select({ orderNo: credit.orderNo })
      .from(credit)
      .where(
        and(
          eq(credit.userId, userId),
          eq(credit.transactionType, 'grant'),
          eq(credit.status, 'active'),
          gt(credit.remainingCredits, 0),
          or(isNull(credit.expiresAt), gt(credit.expiresAt, new Date()))
        )
      );
    const orderNos = grants
      .map((g: { orderNo: string | null }) => g.orderNo)
      .filter((no): no is string => !!no);
    if (orderNos.length > 0) {
      const orders: Array<{ productId: string | null }> = await db()
        .select({ productId: order.productId })
        .from(order)
        .where(inArray(order.orderNo, orderNos));
      const hasHdPack = orders.some(
        (o: { productId: string | null }) =>
          HD_PACK_PRODUCT_IDS.includes((o.productId || '').toLowerCase())
      );
      if (hasHdPack) return true;
    }

    return false;
  } catch (e) {
    console.error('canUse1080p failed:', e);
    return false;
  }
}
