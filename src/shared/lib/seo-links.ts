import { getPruneDecision } from '@/config/seo-pruning';

/**
 * Link-cluster groups rendered at the bottom of long-tail pages.
 *
 * Retired pages must not be linked from a page we still publish: a crawler
 * following an internal link into a 410 is a worse signal than the thin page
 * itself ever was.
 *
 * Redirected slugs are not dropped but rewritten to their final target, so the
 * cluster points at the consolidated page directly instead of sending every
 * visitor and every crawl through a 301 hop. Chains are resolved; a link whose
 * chain ends on a retired page is dropped like any other gone link.
 */
export interface LinkGroup {
  title: string;
  links: readonly { href: string; label: string }[];
}

/**
 * Follow `SEO_REDIRECTS` to the final slug. Returns null if it ends on a gone
 * page, so callers can drop the link instead of shipping a 410 or a 301 hop.
 */
export function resolveInternalHref(href: string): string | null {
  const first = getPruneDecision(href);
  if (!first) return href;
  if (first.type === 'gone') return null;

  let to = first.to;
  const seen = new Set<string>([normalize(href)]);
  for (;;) {
    const key = normalize(to);
    if (!key || seen.has(key)) break;
    seen.add(key);
    const next = getPruneDecision(key);
    if (!next) return `/${key}`;
    if (next.type === 'gone') return null;
    to = next.to;
  }
  return `/${normalize(to)}`;
}

function normalize(path: string): string {
  return path.replace(/^\/+/, '').replace(/\/+$/, '');
}

export function pruneLinkGroups<T extends LinkGroup>(
  groups: readonly T[]
): T[] {
  return groups
    .map((group) => {
      const seen = new Set<string>();
      const links: { href: string; label: string }[] = [];
      for (const link of group.links) {
        const href = resolveInternalHref(link.href);
        if (!href || seen.has(href)) continue;
        seen.add(href);
        links.push({ href, label: link.label });
      }
      return { ...group, links };
    })
    .filter((group) => group.links.length > 0);
}
