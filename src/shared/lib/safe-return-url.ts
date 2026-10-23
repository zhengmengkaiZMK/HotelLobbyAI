/**
 * Same-origin relative paths only. Used so Stripe can send the buyer
 * back to the page they started checkout from, without open redirects.
 */
export function sanitizeReturnPath(raw: unknown): string | null {
  if (typeof raw !== 'string') return null;
  const trimmed = raw.trim();
  if (
    !trimmed.startsWith('/') ||
    trimmed.startsWith('//') ||
    trimmed.includes('\\') ||
    trimmed.length > 512
  ) {
    return null;
  }
  if (/^[a-z][a-z0-9+.-]*:/i.test(trimmed)) return null;
  try {
    const decoded = decodeURIComponent(trimmed);
    if (decoded.startsWith('//') || /^[a-z][a-z0-9+.-]*:/i.test(decoded)) {
      return null;
    }
  } catch {
    return null;
  }
  return trimmed;
}

export function withCheckoutFlag(
  path: string,
  flag: 'success' | 'cancel'
): string {
  const url = new URL(path, 'https://viralreel.local');
  url.searchParams.set('checkout', flag);
  return `${url.pathname}${url.search}`;
}

export function toAbsoluteAppUrl(appUrl: string, path: string): string {
  return `${appUrl.replace(/\/$/, '')}${path}`;
}
