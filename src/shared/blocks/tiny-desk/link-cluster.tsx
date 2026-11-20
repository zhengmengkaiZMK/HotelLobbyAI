import { Link } from '@/core/i18n/navigation';
import { pruneLinkGroups } from '@/shared/lib/seo-links';

import { tinyDeskLinkGroups } from './long-tails';

export function TinyDeskLinkCluster({
  zh,
  currentPath,
}: {
  zh: boolean;
  currentPath?: string;
}) {
  const groups = pruneLinkGroups(tinyDeskLinkGroups(zh));
  return (
    <div className="cluster">
      {groups.map((group) => (
        <div key={group.title}>
          <h3>{group.title}</h3>
          {group.links
            .filter((link) => link.href !== currentPath)
            .map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
        </div>
      ))}
    </div>
  );
}
