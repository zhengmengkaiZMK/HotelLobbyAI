// Chat is a logged-in user area and its tree renders env-dependent branches
// (data loaded vs not) that may or may not include useSearchParams components.
// Keep it on-demand so CI builds without DATABASE_URL never prerender it.
export const dynamic = 'force-dynamic';

import { ChatGenerator } from '@/shared/blocks/chat/generator';

export default function ChatPage() {
  return <ChatGenerator />;
}
