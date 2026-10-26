import { BABA_HOW_TO_STEPS } from '@/shared/blocks/baba-dance/steps';
import { BBY_HOW_TO_STEPS } from '@/shared/blocks/bby-wow/steps';
import { BULIN_HOW_TO_STEPS } from '@/shared/blocks/bulin-47/steps';
import { HIT_THE_ROAD_HOW_TO_STEPS } from '@/shared/blocks/hit-the-road-dude/steps';
import { PEDRA_HOW_TO_STEPS } from '@/shared/blocks/pedra-do-sal/steps';
import { TINY_DESK_HOW_TO_STEPS } from '@/shared/blocks/tiny-desk/steps';

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
  'how-to-make-bulin-47-ai-video': BULIN_HOW_TO_STEPS.map((step) => ({
    name: step.name.en,
    text: step.text.en,
  })),
  'how-to-make-ozil-goal-ai-video': [
    {
      name: 'Pick a template variant',
      text: 'Open the Ozil Goal template on ViralReel and pick the look that fits the photo, including Night Match, a suit, or Creature Goal.',
    },
    {
      name: 'Upload one front-facing photo',
      text: 'Upload one clear, front-facing photo of one person. Creature Goal uses one photo of the animal. Skip sunglasses, group shots, and heavy filters.',
    },
    {
      name: 'Set 9:16 and length',
      text: 'Leave the ratio on 9:16 and set the length up to 15 seconds so the chip, the slides, and the empty net all fit. Confirm the credit cost before you generate.',
    },
    {
      name: 'Generate, download, and post',
      text: 'Download the MP4 in about a minute. Add a trend sound in TikTok, Reels, or Shorts and label the post as AI-generated where the platform asks.',
    },
  ],
  'how-to-make-hit-the-road-dude-ai-video': HIT_THE_ROAD_HOW_TO_STEPS.map((step) => ({
    name: step.name.en,
    text: step.text.en,
  })),
  'why-pedra-do-sal-ai-videos-went-viral': PEDRA_HOW_TO_STEPS.map((step) => ({
    name: step.name.en,
    text: step.text.en,
  })),
  'how-to-make-tiny-desk-outstanding-ai-video': TINY_DESK_HOW_TO_STEPS.map((step) => ({
    name: step.name.en,
    text: step.text.en,
  })),
  'tiny-desk-outstanding-photo-tips': [
    {
      name: 'Use one clear face per slot',
      text: 'Upload three photos you have permission to use: Center Lead for the singer, Left Role and Right Role for the band. One face per photo. The buttons are not labeled sax.',
    },
    {
      name: 'Light the face from the front',
      text: 'Use a front-facing photo with both eyes visible and the light in front of the person. Skip silhouettes, group shots, heavy filters, and photos of a screen.',
    },
    {
      name: 'Leave out minors, celebrities, and NPR screenshots',
      text: 'Do not upload minors, celebrities, coaches, players, owners, Charlie Wilson, or screenshots of the NPR concert. The sets are costumes for your own people.',
    },
    {
      name: 'Generate on 9:16 and add the sound on the platform',
      text: 'Keep 9:16, read the credit cost, and download the MP4 from the Tiny Desk Outstanding template. Add the trend sound in TikTok, Reels, or Shorts. ViralReel does not license or export the Gap Band track.',
    },
  ],
  'how-to-make-ba-ba-ba-dance-ai-video': BABA_HOW_TO_STEPS.map((step) => ({
    name: step.name.en,
    text: step.text.en,
  })),
  'how-to-make-bby-wow-ai-dance-video': BBY_HOW_TO_STEPS.map((step) => ({
    name: step.name.en,
    text: step.text.en,
  })),
  'how-to-make-cat-clapping-ai-video': [
    {
      name: 'Pick a cat template',
      text: 'Open the Cat Clapping template and pick Orange Tabby, Tuxedo Clap, or Black Cat.',
    },
    {
      name: 'Upload two photos',
      text: 'Upload a clear photo of the person, then a clear photo of the cat. The cat’s face and front paws should be visible. Skip sunglasses, group shots, and heavy filters.',
    },
    {
      name: 'Set ratio, resolution, and length',
      text: 'Leave the ratio on 9:16. Set the resolution and a length of 4 or 6 seconds. The credit cost updates before you generate.',
    },
    {
      name: 'Download and post',
      text: 'Download the MP4. In TikTok, Reels, or Shorts, add a trend sound and turn on the AI label where the app asks.',
    },
  ],
};

export function buildHowToJsonLdFromSteps({
  name,
  description,
  url,
  steps,
}: {
  name: string;
  description?: string;
  url?: string;
  steps: { name: string; text: string }[];
}) {
  if (!steps.length) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    url,
    totalTime: 'PT5M',
    step: steps.map((s) => ({
      '@type': 'HowToStep',
      name: s.name,
      text: s.text,
    })),
  };
}

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
