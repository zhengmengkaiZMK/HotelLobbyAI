import { redirect } from 'next/navigation';

import { envConfigs } from '@/config';
import { PaymentType } from '@/extensions/payment/types';
import { findOrderByOrderNo, OrderStatus } from '@/shared/models/order';
import { getUserInfo } from '@/shared/models/user';
import {
  getPaymentService,
  handleCheckoutSuccess,
} from '@/shared/services/payment';

export async function GET(req: Request) {
  let redirectUrl = '';

  try {
    // get callback params
    const { searchParams } = new URL(req.url);
    const orderNo = searchParams.get('order_no');

    if (!orderNo) {
      throw new Error('invalid callback params');
    }

    // get sign user
    const user = await getUserInfo();
    if (!user || !user.email) {
      throw new Error('no auth, please sign in');
    }

    // get order
    const order = await findOrderByOrderNo(orderNo);
    if (!order) {
      throw new Error('order not found');
    }

    // validate order and user
    if (!order.paymentSessionId || !order.paymentProvider) {
      throw new Error('invalid order');
    }

    if (order.userId !== user.id) {
      throw new Error('order and user not match');
    }

    const paymentService = await getPaymentService();

    const paymentProvider = paymentService.getProvider(order.paymentProvider);
    if (!paymentProvider) {
      throw new Error('payment provider not found');
    }

    // get payment session
    const session = await paymentProvider.getPaymentSession({
      sessionId: order.paymentSessionId,
    });

    // console.log('callback payment session', session);

    await handleCheckoutSuccess({
      order,
      session,
    });

    redirectUrl =
      order.callbackUrl ||
      (order.paymentType === PaymentType.SUBSCRIPTION
        ? `${envConfigs.app_url}/settings/billing`
        : `${envConfigs.app_url}/settings/payments`);

    // Attach real payment facts to the return URL so the client-side
    // Google Ads purchase conversion fires with the actual amount and the
    // site order number (AdsConversionListener; GaEvents reuses them too).
    // Only when the order is verified PAID — never for failed checkouts.
    try {
      const paidOrder = await findOrderByOrderNo(orderNo);
      if (paidOrder && paidOrder.status === OrderStatus.PAID) {
        const url = new URL(redirectUrl);
        // paymentAmount is stored in cents (actual charged amount, incl. provider captures)
        const paidValue =
          paidOrder.paymentAmount && paidOrder.paymentAmount > 0
            ? paidOrder.paymentAmount / 100
            : paidOrder.amount > 0
              ? paidOrder.amount / 100
              : 0;
        if (paidValue > 0) {
          url.searchParams.set('value', paidValue.toFixed(2));
          url.searchParams.set(
            'currency',
            (paidOrder.paymentCurrency || paidOrder.currency || 'usd').toUpperCase()
          );
          url.searchParams.set('order_id', orderNo);
          redirectUrl = url.toString();
        }
      }
    } catch (e) {
      // attribution params are best-effort; never block the redirect
      console.log('append payment attribution params failed:', e);
    }
  } catch (e: any) {
    console.log('checkout callback failed:', e);
    redirectUrl = `${envConfigs.app_url}/subscribe`;
  }

  redirect(redirectUrl);
}
