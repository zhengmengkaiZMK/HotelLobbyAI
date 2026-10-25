export const templates = [
  { id: 'classic', name: ['Original Hotel Lobby', '原版 Hotel Lobby'], colors: ['#fdba74', '#ea580c'], prompt: 'Two performers side by side in an iconic orange recording booth with a hanging microphone. Preserve each reference subject and keep them on their own side. Natural rhythmic gestures, a playful back-and-forth performance, warm studio lighting, stable camera.' },
  { id: 'cinematic', name: ['Cinematic Gold', '电影感版'], colors: ['#fcd34d', '#d97706'], prompt: 'Two performers in glittering gold suits on an orange COLORS-style stage with a hanging microphone. Preserve each reference subject and keep them on their own side. Confident rhythmic gestures, warm stage lighting, film-like color grading, stable camera.' },
  { id: 'girls', name: ['Girl Duo', '闺蜜版'], colors: ['#fda4af', '#e11d48'], prompt: 'Two female performers side by side on an orange COLORS-style stage with a hanging microphone. Preserve each reference subject and keep them on their own side. Natural rhythmic gestures, a playful back-and-forth performance, warm studio lighting, stable camera.' },
  { id: 'pets', name: ['Pets Edition', '宠物版'], colors: ['#86efac', '#059669'], prompt: 'Two adorable pets — a dog and a cat — standing in an orange recording studio with a hanging microphone. Preserve the appearance of the reference pets. Playful gentle rhythmic movement, charming expressions, soft studio lighting, stable camera.' },
  { id: 'petowner', name: ['Pet & Owner', '人宠版'], colors: ['#bae6fd', '#0284c7'], prompt: 'One performer and their pet side by side in an orange recording studio with a hanging microphone. Preserve the reference performer and pet appearances. Playful coordinated gestures, warm studio lighting, stable camera.' },
  { id: 'bros', name: ['Bro Edition', '兄弟版'], colors: ['#c4b5fd', '#7c3aed'], prompt: 'Two male performers in casual streetwear on an orange COLORS-style stage with a hanging microphone. Preserve each reference subject and keep them on their own side. Relaxed hip-hop vibe, natural rhythmic gestures, playful back-and-forth performance, stable camera.' },
  { id: 'muscle', name: ['Muscle Duo', '猛男版'], colors: ['#fdba74', '#b45309'], prompt: 'Two male performers — one slim rapper in a beanie and black hoodie, one muscular athlete in a black tank top — trading verses in an orange COLORS-style booth with a hanging microphone. Preserve each reference subject and keep them on their own side. Contrasting confident energies, rhythmic gestures, warm stage lighting, stable camera.' },
  { id: 'stars', name: ['Star Edition', '明星版'], colors: ['#fca5a5', '#dc2626'], prompt: 'Two male performers — a charismatic singer in a dark tee and a silver-haired gentleman in glasses and a black zip jacket — performing a playful duet on an orange COLORS-style stage with a hanging microphone. Preserve each reference subject and keep them on their own side. Expressive gestures, humorous star energy, warm studio lighting, stable camera.' },
  { id: 'anime', name: ['Anime Edition', '动漫版'], colors: ['#a5b4fc', '#4f46e5'], prompt: 'Two anime characters — a blindfolded blond warrior and a white-haired dark-elf sorceress — trading verses in an orange COLORS-style booth with a hanging microphone. Preserve each reference subject and keep them on their own side. Dramatic anime expressions, rhythmic gestures, warm stage lighting, stable camera.' },
] as const;

export type HomeTemplate = (typeof templates)[number];

/**
 * Structural template definition shared by every template family
 * (Hotel Lobby home page, Burning Bridges page, future theme pages).
 * `slots`: how many reference-image upload slots the template uses (default 2).
 * `images`: pre-filled cast images (default: /templates/frames/{id}-a.jpg / -b.jpg).
 * Templates without cast images pass [null, null] so slots start empty.
 */
export interface TemplateDef {
  id: string;
  name: readonly [string, string];
  colors: readonly [string, string];
  prompt: string;
  slots?: 1 | 2 | 3;
  images?: readonly (string | null)[];
  /** Optional public preview video. null explicitly disables the default path when no media is available. */
  previewVideo?: string | null;
  /** Optional source attribution shown as a small badge on preview media (e.g. '@isabellacapcut'). */
  credit?: string;
  /**
   * Admin config family (`viral_family_*_{family}`).
   * Omitted templates stay on the historical rule: `party-*` → burning_bridges, everything else → hotel.
   */
  family?: string;
}
