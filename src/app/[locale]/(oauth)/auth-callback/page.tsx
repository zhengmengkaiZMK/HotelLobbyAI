'use client';

import { useEffect } from 'react';
import { Loader2 } from 'lucide-react';

import { trackAdsSignupLogin } from '@/shared/lib/ads-conversion';

export default function AuthCallbackPage() {
  useEffect(() => {
    // Social sign-in completed (session cookie is being written) — fire the
    // Google Ads 注册/登录 conversion. The dataLayer push queues even if the
    // Google tag has not finished loading, and survives until window.close().
    trackAdsSignupLogin();

    // Small delay to ensure the session cookie is fully written
    const timer = setTimeout(() => {
      // Use localStorage event to notify the main page (works even when COOP blocks window.opener)
      localStorage.setItem('auth-callback-success', Date.now().toString());
      localStorage.removeItem('auth-callback-success');
      window.close();

      // Fallback: if window.close() doesn't work (e.g. not opened as popup)
      setTimeout(() => {
        window.location.href = '/';
      }, 500);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <Loader2 className="text-primary h-8 w-8 animate-spin" />
      <p className="text-muted-foreground text-sm">Signing you in...</p>
    </div>
  );
}
