import { getPruneDecision } from '@/config/seo-pruning';

/**
 * Link-cluster groups rendered at the bottom of long-tail pages.
 *
 * Retired pages must not be linked from a page we still publish: a crawler
 * following an internal link into a 410 is a worse signal than the thin page
 * itself ever was. Redirected slugs are kept — the 301 carries the reader to
 * the consolidated page and the link still resolves for a human.
 */
export interface LinkGroup {
  title: string;
  links: readonly { href: string; label: string }[];
}

export function pruneLinkGroups<T extends LinkGroup>(
  groups: readonly T[]
): T[] {
  return groups
    .map((group) => ({
      ...group,
      links: group.links.filter(
        (link) => getPruneDecision(link.href)?.type !== 'gone'
      ),
    }))
    .filter((group) => group.links.length > 0);
}
