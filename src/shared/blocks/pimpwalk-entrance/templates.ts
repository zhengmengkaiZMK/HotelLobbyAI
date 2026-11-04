import type { TemplateDef } from '@/shared/blocks/viral-home/templates';

/**
 * Pimpwalk Entrance template family — the October–November 2026 "hold the
 * door" trend. A friend pulls a shop door open at night and grooves beside
 * it, and someone comes through in a slow, low, leaned-back pimp walk,
 * drops almost to a crouch, then rises into the close-up. The AI swaps new
 * faces into the same doorway; the door holder, the timing and the sound
 * stay. Preview videos live at /templates/{id}.mp4 and are sourced from
 * the TikTok trend — each template carries a `credit` handle. All
 * templates share the `pimpwalk_entrance` admin family.
 */
const family = 'pimpwalk_entrance';

/**
 * Shared doorway scene. Two photos: photo 1 is the person who walks in,
 * photo 2 is the friend who holds the door. The entrance happens below
 * the chest — bent knees, the drop, the rise — so full-body photos matter.
 * Scene base follows the trend's public prompt pattern (night, small shop
 * doorway with red-trimmed cream walls, camera at chest height inside).
 */
const scene =
  "Recreate the viral 'Pimpwalk Entrance' (hold the door) scene from the reference video: night, the doorway of a small shop with red-trimmed cream walls and a dark doormat, camera at chest height inside the shop looking out. Photo 2's subject stands beside the open door, pulling it wide and grooving in place to the beat. Photo 1's subject comes through the doorway in a slow, low, leaned-back pimp walk — knees bent, shoulders rolled back, head tilted — drops almost down to a crouch while gliding forward, then rises up into a close-up by the camera like they own the place. Preserve each reference subject's face and appearance exactly. Keep the shop, the doorway, the door holder's moves, the camera, the timing and the original sound from the reference video unchanged. Slight handheld phone-camera feel, one continuous take, not cinematic.";

export const pimpwalkEntranceTemplates = [
  {
    id: 'pimpwalk-burger',
    family,
    name: ['Burger Shop Dandy', '汉堡店花花公子版'],
    credit: '@mrmiltonfrost',
    colors: ['#166534', '#fde68a'],
    slots: 2,
    images: [null, null],
    prompt: `${scene} The person walking in is a 1970s-style dandy in a loud velvet suit with big hair, entering a small burger shop while a white-haired friend holds the door — the most-watched version of the trend.`,
  },
  {
    id: 'pimpwalk-walter-white',
    family,
    name: ['Walter White on the Door', '门后老白版'],
    credit: '@yvah08219691',
    colors: ['#3f6212', '#fef08a'],
    slots: 2,
    images: [null, null],
    prompt: `${scene} The friend holding the door is a bald man with a goatee in a green shirt and khaki jacket, holding the door with deadpan seriousness while the guest struts in — the barbershop celebrity cast of the trend.`,
  },
  {
    id: 'pimpwalk-yellow-shirt',
    family,
    name: ['Yellow Shirt Strut', '黄衫进场版'],
    colors: ['#f59e0b', '#1c1917'],
    slots: 2,
    images: [null, null],
    prompt: `${scene} The person walking in wears a bright yellow shirt that reads against the red-trimmed doorway, making the low glide and the rise into the close-up unmistakable.`,
  },
] as const satisfies readonly TemplateDef[];

export type PimpwalkEntranceTemplate = (typeof pimpwalkEntranceTemplates)[number];
