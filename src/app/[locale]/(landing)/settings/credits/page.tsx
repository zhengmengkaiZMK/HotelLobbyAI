import { redirect } from 'next/navigation';

// Credits moved to a top-level console tab — keep old links working
export default function SettingsCreditsRedirectPage() {
  redirect('/credits');
}
