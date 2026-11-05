// Chat history is user-specific (session + query params): keep on-demand
// rendering, do not prerender.
export const dynamic = 'force-dynamic';

import { ChatHistory } from '@/shared/blocks/chat/history';

export default function ChatHistoryPage() {
  return <ChatHistory />;
}
