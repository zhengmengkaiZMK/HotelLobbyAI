import { ComponentType } from 'react';

import {
  RiAddLine,
  RiArrowRightLine,
  RiCloseLine,
  RiDeleteBinLine,
  RiDiscordFill,
  RiEditLine,
  RiEqualizerLine,
  RiEyeLine,
  RiGithubFill,
  RiGlobalLine,
  RiGoogleFill,
  RiHome4Line,
  RiLockPasswordLine,
  RiMailLine,
  RiMenuLine,
  RiQuestionLine,
  RiRefreshLine,
  RiTelegramFill,
  RiTwitterXFill,
  RiUserLine,
  RiYoutubeFill,
} from 'react-icons/ri';
import {
  ArrowLeft,
  ArrowUpRight,
  Ban,
  Coins,
  HelpCircle,
  Mail,
  Menu,
  Newspaper,
  Pencil,
  Plus,
  Search,
  Settings,
  Users,
  Video,
} from 'lucide-react';

/**
 * Static, curated icon maps.
 *
 * IMPORTANT: never `import('react-icons/ri')` / `import('lucide-react')`
 * dynamically here. A dynamic barrel import defeats tree-shaking and ships
 * the ENTIRE icon set (~1.9 MB for react-icons/ri) to every visitor.
 * Static named imports are tree-shaken to only the icons listed below.
 *
 * If a name from admin config is missing from these maps, the fallback
 * question-mark icon is rendered instead. When adding new icon-driven
 * features, register the icon in the matching map below.
 */
const riIcons: { [key: string]: ComponentType<any> } = {
  RiAddLine,
  RiArrowRightLine,
  RiCloseLine,
  RiDeleteBinLine,
  RiDiscordFill,
  RiEditLine,
  RiEqualizerLine,
  RiEyeLine,
  RiGithubFill,
  RiGlobalLine,
  RiGoogleFill,
  RiHome4Line,
  RiLockPasswordLine,
  RiMailLine,
  RiMenuLine,
  RiQuestionLine,
  RiRefreshLine,
  RiTelegramFill,
  RiTwitterXFill,
  RiUserLine,
  RiYoutubeFill,
};

const lucideIcons: { [key: string]: ComponentType<any> } = {
  ArrowLeft,
  ArrowUpRight,
  Ban,
  Coins,
  HelpCircle,
  Mail,
  Menu,
  Newspaper,
  Pencil,
  Plus,
  Search,
  Settings,
  Users,
  Video,
};

function detectIconLibrary(name: string): 'ri' | 'lucide' {
  if (name && name.startsWith('Ri')) {
    return 'ri';
  }

  return 'lucide';
}

export function SmartIcon({
  name,
  size = 24,
  className,
  ...props
}: {
  name: string;
  size?: number;
  className?: string;
  [key: string]: any;
}) {
  const library = detectIconLibrary(name);

  const map = library === 'ri' ? riIcons : lucideIcons;
  const Fallback = library === 'ri' ? RiQuestionLine : HelpCircle;
  const IconComponent = map[name] || Fallback;

  if (!map[name]) {
    console.warn(
      `Icon "${name}" not found in the ${library} icon map, using fallback. Add it to src/shared/blocks/common/smart-icon.tsx.`
    );
  }

  return <IconComponent size={size} className={className} {...props} />;
}
