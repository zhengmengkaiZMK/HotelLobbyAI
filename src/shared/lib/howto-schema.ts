const HOW_TO_STEP_SOURCES: Record<
  string,
  { name: string; text: string }[]
> = {
  'how-to-make-hotel-lobby-ai-video': [
    {
      name: 'Pick the right photos',
      text: 'Choose two clear front-facing photos, one per performer, with even lighting and full face in frame. Pets, babies, and characters work too.',
    },
    {
      name: 'Choose your template variant',
      text: 'Open the templates gallery at viralreel.app and pick the variant matching your subjects: Classic, Pet edition, Anime edition, or Star edition.',
    },
    {
      name: 'Set resolution, ratio, and duration',
      text: 'Choose 9:16 aspect ratio for TikTok and Shorts, 720p resolution, and an 8 to 15 second duration. Credit cost scales with resolution and duration.',
    },
    {
      name: 'Generate and review',
      text: 'Click Generate. Rendering takes about one minute. Check lip sync, identity stability, and framing before posting.',
    },
    {
      name: 'Post while the trend is hot',
      text: 'Download the video and post natively to TikTok, Reels, and Shorts. Add the original sound in-app so the algorithm groups the video with the trend.',
    },
  ],
  'how-to-make-burning-bridges-video': [
    {
      name: 'Pick the right photos',
      text: 'Use clear front-facing photos with good lighting. The photo is 90% of the result.',
    },
    {
      name: 'Choose your template and model',
      text: 'Open the Burning Bridges template page and pick the rendering model that fits the subjects.',
    },
    {
      name: 'Generate and fix failures',
      text: 'Generate, then check the four common failure modes (identity drift, lip sync, framing, artifacts) and fix them with better source photos.',
    },
    {
      name: 'Post the finished clip',
      text: 'Download and post the clip natively to TikTok, Reels, and Shorts with the trending sound.',
    },
  ],
};

export function buildHowToJsonLd({
  slug,
  name,
  description,
  url,
  image,
}: {
  slug: string;
  name: string;
  description: string;
  url: string;
  image?: string;
}) {
  const steps = HOW_TO_STEP_SOURCES[slug];
  if (!steps || steps.length === 0) {
    return null;
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    url,
    image: image || undefined,
    totalTime: 'PT5M',
    step: steps.map((s) => ({
      '@type': 'HowToStep',
      name: s.name,
      text: s.text,
    })),
  };
}
