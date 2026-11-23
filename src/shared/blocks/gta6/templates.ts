import type { TemplateDef } from '@/shared/blocks/viral-home/templates';

/**
 * GTA 6 AI template series — six Vice-City-flavored fan formats riding the
 * GTA VI launch week (the game shipped 19 November 2026 on PS5 and Xbox
 * Series X|S). Each series is its own admin family with a fixed duration and
 * photo count, and each has exactly ONE template whose preview video lives at
 * /templates/{id}.mp4. Built-in prompts are fallback copy only — the
 * admin-configured `viral_family_prompt_{family}` always wins.
 */
export const gta6TrailerTemplates = [
  {
    id: 'gta-6-trailer-ai',
    family: 'gta6_trailer_ai',
    name: ['GTA 6 Trailer AI', 'GTA 6 Trailer AI 预告片'],
    colors: ['#fb923c', '#7c2d12'],
    slots: 1,
    images: [null],
    uploadHint: '/templates/gta6-trailer-source.jpg',
    prompt:
      "A photorealistic vertical 12-second fan trailer cut in four hard shots, GTA VI launch-trailer energy, no text overlays, no logos. Shot 1: the subject drives a convertible down a palm-lined beach boulevard at golden-hour sunset, hands on the wheel, hair moving in the wind. Shot 2: at a lonely desert gas station, the subject walks across the lot and pulls a bandana up over the nose. Shot 3: the subject pilots an airboat across a swamp at speed, spray kicking up, an alligator sliding past close to the hull. Shot 4: on a rooftop helipad above a glowing night city, a helicopter searchlight sweeps past as the subject turns and looks straight into the camera. Preserve the reference subject's face, hairstyle and build in every shot. Keep the camera language, lighting and cutting rhythm of the reference video unchanged.",
  },
] as const satisfies readonly TemplateDef[];

export const gta6WantedTemplates = [
  {
    id: 'gta-6-wanted-level',
    family: 'gta6_wanted_level',
    name: ['GTA 6 Wanted Level', 'GTA 6 Wanted Level 五星通缉'],
    colors: ['#f472b6', '#831843'],
    slots: 1,
    images: [null],
    uploadHint: '/templates/gta6-wanted-source.jpg',
    prompt:
      "A third-person 10-second gameplay-style vertical clip, one continuous take, looking like GTA VI game footage with a fixed HUD: circular minimap bottom-left, five wanted stars top-right that light up one by one once the chase starts. The subject walks toward the camera down a pastel art-deco beach street lined with palms, face fully readable; the camera then swings behind them as they sprint to a yellow supercar parked at the curb, the scissor doors lift, they drop in and drive off toward a pink sunset — two police cars tack onto the chase and a helicopter circles overhead. Audio is footsteps, sirens and engine only, no dialogue. Preserve the reference subject's face, hairstyle and build throughout. Keep the HUD, camera move and pacing of the reference video unchanged.",
  },
] as const satisfies readonly TemplateDef[];

export const gta6LoversTemplates = [
  {
    id: 'gta-6-lovers-on-the-run',
    family: 'gta6_lovers_on_the_run',
    name: ['GTA 6 Lovers on the Run', 'GTA 6 Lovers on the Run 亡命情侣'],
    colors: ['#e879f9', '#701a75'],
    slots: 2,
    images: [null, null],
    uploadHints: ['/templates/gta6-lovers-a.jpg', '/templates/gta6-lovers-b.jpg'],
    prompt:
      "A 15-second vertical action-romance chase cut in five shots, GTA VI 3D game-render look, no weapons in any shot, no dialogue. Shot 1: a dark muscle car drifts hard around a wet corner, two police cars drifting in right behind. Shot 2: through the windshield — the first subject drives gripping the wheel, the second subject twists around to look back; a helicopter searchlight sweeps the cabin and both duck. Shot 3: the car flies down a neon palm-lined avenue, the helicopter hugging the street, a patrol car spinning out in sparks. Shot 4: the car screeches to a stop in an alley and the two subjects run hand in hand up a fire escape. Shot 5: slow motion on the rooftop — a kiss as the camera orbits them, the helicopter still circling in the night sky and police lights strobing on the far streets. Both reference subjects keep their faces, hairstyles and outfits in every shot; photo one drives, photo two rides shotgun.",
  },
] as const satisfies readonly TemplateDef[];

export const gta6ViceTemplates = [
  {
    id: 'gta-6-vice-city-story',
    family: 'gta6_vice_city_story',
    name: ['GTA 6 Vice City Story', 'GTA 6 Vice City Story 都市故事'],
    colors: ['#22d3ee', '#155e75'],
    slots: 1,
    images: [null],
    uploadHint: '/templates/gta6-vice-source.jpg',
    prompt:
      "A 15-second landscape 16:9 cinematic game-story clip rendered in GTA VI cutscene style, six shots in order. Shot 1: close-up of the subject under rain-slick neon street signs, the face clearly introduced. Shot 2: at golden hour by the water, the subject meets two accomplices beside a dark muscle car under palms. Shot 3: inside a warmly lit diner, the subject takes a duffel bag off the table. Shot 4: a coastal-highway chase with police lights strobing in the mirror and a searchlight raking the road. Shot 5: close-up through the windshield — the subject's face set and focused while driving. Shot 6: back under the neon, a confident hero shot beside the car to close. Preserve the reference subject's face, hairstyle and build across all six shots; the supporting cast is generated by the scene. Keep the shot order, lighting and cutting of the reference video unchanged.",
  },
] as const satisfies readonly TemplateDef[];

export const gta6NightclubTemplates = [
  {
    id: 'gta-6-nightclub',
    family: 'gta6_nightclub',
    name: ['GTA 6 Nightclub', 'GTA 6 Nightclub 夜店之夜'],
    colors: ['#c084fc', '#4c1d95'],
    slots: 1,
    images: [null],
    uploadHint: '/templates/gta6-nightclub-source.jpg',
    prompt:
      "A 12-second vertical nightlife clip in three hard cuts, GTA VI game-render look in pink, purple and cyan neon, no dialogue. Shot 1: night — a low supercar glides down a neon beachfront street and parks at a glowing club entrance roped off in velvet with a bouncer on the door. Shot 2: the scissor door lifts and the subject steps out facing the camera, walks straight past the bouncer and through the neon doorway. Shot 3: inside a packed dance floor — lasers cutting smoke, the DJ booth glowing behind the crowd — the subject owns the center of the floor dancing loose and confident while the camera orbits and the crowd cheers. The subject's face, hairstyle, build and outfit carry through all three shots — the outfit from the photo is the club outfit. Keep the camera language and cutting rhythm of the reference video unchanged.",
  },
] as const satisfies readonly TemplateDef[];

export const gta6GetawayTemplates = [
  {
    id: 'gta-6-getaway-duo',
    family: 'gta6_getaway_duo',
    name: ['GTA 6 Getaway Duo', 'GTA 6 Getaway Duo 双人逃亡'],
    colors: ['#fbbf24', '#78350f'],
    slots: 2,
    images: [null, null],
    uploadHints: ['/templates/gta6-getaway-a.jpg', '/templates/gta6-getaway-b.jpg'],
    prompt:
      "A 12-second vertical getaway short in four shots, GTA VI game-render look, no weapons in any shot, no dialogue. Shot 1: golden hour at a roadside gas station — the two subjects walk side by side into frame and pull face scarves up over their noses. Shot 2: they burst out of the convenience store, one carrying a travel duffel, sprinting for a dark vintage muscle car. Shot 3: through the windshield at speed — both subjects pull the scarves down and laugh as police lights strobe through the rear window. Shot 4: the muscle car charges toward the camera down a palm-lined highway with police cars tight behind. Photo one drives, photo two rides with the bag; both subjects keep their faces, hairstyles and outfits in every shot. Keep the shot order and pacing of the reference video unchanged.",
  },
] as const satisfies readonly TemplateDef[];
