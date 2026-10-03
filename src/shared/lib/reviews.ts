/**
 * Testimonials displayed on the homepage as 5-star review cards.
 * The structured data (SoftwareApplication / Product JSON-LD) must stay
 * in sync with what is actually rendered on the page — Google requires
 * review markup to reflect visible on-page content.
 */
export type ViralReview = {
  name: string;
  body: string;
};

export const VIRAL_REVIEWS: ViralReview[] = [
  {
    name: 'Jake M.',
    body: 'Made a cat duo video in literally 2 minutes. It hit 800k views on TikTok the same night. The lip-sync is shockingly good.',
  },
  {
    name: 'Sofia R.',
    body: 'Starrd wanted $5 per clip. Here one video costs just 10 credits — I batch-made 12 videos for our meme page in one sitting.',
  },
  {
    name: 'Tom K.',
    body: 'The pet edition is a cheat code. No editing, no app, works on my phone browser. Posted 6 videos in a row, all took off.',
  },
  {
    name: 'Liam P.',
    body: 'Our whole office did the orange-booth trend after the holiday party. The render queue is fast enough that we posted everything same-day.',
  },
  {
    name: 'Emma L.',
    body: 'I am not a video editor at all. Uploaded me and my dog, picked Pet & Owner, and the thing basically edited itself. 1.2M views and counting.',
  },
  {
    name: 'Marcus J.',
    body: 'The 9:16 export is the detail nobody else gets right. No cropping, no watermark panic — straight to Shorts and Reels.',
  },
];

export const VIRAL_RATING = {
  ratingValue: '5',
  bestRating: '5',
  worstRating: '1',
  reviewCount: VIRAL_REVIEWS.length,
};

export function buildReviewsJsonLd() {
  return VIRAL_REVIEWS.map((r) => ({
    '@type': 'Review',
    author: { '@type': 'Person', name: r.name },
    reviewBody: r.body,
    reviewRating: {
      '@type': 'Rating',
      ratingValue: '5',
      bestRating: '5',
      worstRating: '1',
    },
  }));
}

export function buildAggregateRatingJsonLd() {
  return {
    '@type': 'AggregateRating',
    ratingValue: VIRAL_RATING.ratingValue,
    bestRating: VIRAL_RATING.bestRating,
    worstRating: VIRAL_RATING.worstRating,
    reviewCount: VIRAL_RATING.reviewCount,
  };
}
