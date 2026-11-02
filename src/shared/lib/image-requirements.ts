/**
 * Image requirements + lightweight client-side pre-flight checks.
 *
 * These are the generator's universal photo quality gates, applied to every
 * model when the user hits Generate (not model-specific). Floors chosen from
 * the strictest real upstream constraint (Kling, incl. fal
 * kling/v4/reference-to-video — verified 2026-11 against the Kling official
 * docs and fal's model page):
 *   - formats: JPG / JPEG / PNG (WebP is not documented as supported upstream)
 *   - size: <= 30 MB per image (ViralReel uploads are capped at 10 MB already)
 *   - dimensions: width AND height >= 300 px
 *     ("Image dimensions are too small. Minimum dimensions are 300x300 pixels.")
 *   - aspect ratio: 0.4 – 2.5 (i.e. 1:2.5 to 2.5:1)
 *     ("The aspect ratio of the image should be between 0.4 and 2.5.")
 *
 * The generator stores per-slot metadata at upload time and re-checks on
 * generate, so failures surface as a friendly dialog instead of an opaque
 * upstream error after credits are spent.
 */

export const IMAGE_MIN_SIDE = 300;
export const IMAGE_MIN_RATIO = 0.4;
export const IMAGE_MAX_RATIO = 2.5;

export interface ImageMeta {
  width: number;
  height: number;
}

export interface ImageRequirementIssue {
  kind: 'too_small' | 'bad_ratio';
  width: number;
  height: number;
}

export function checkImageSpec(meta: ImageMeta): ImageRequirementIssue[] {
  const issues: ImageRequirementIssue[] = [];
  const minSide = Math.min(meta.width, meta.height);
  if (minSide < IMAGE_MIN_SIDE) {
    issues.push({ kind: 'too_small', width: meta.width, height: meta.height });
    return issues;
  }
  const ratio = meta.height > 0 ? meta.width / meta.height : 0;
  if (ratio < IMAGE_MIN_RATIO || ratio > IMAGE_MAX_RATIO) {
    issues.push({ kind: 'bad_ratio', width: meta.width, height: meta.height });
  }
  return issues;
}

/** Load an image URL (remote or object/blob URL) and read its natural size. */
export function measureImage(src: string): Promise<ImageMeta> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve({ width: img.naturalWidth, height: img.naturalHeight });
    img.onerror = () => reject(new Error(`Cannot read image: ${src}`));
    img.src = src;
  });
}

/** Read a File's pixel size via a short-lived object URL. */
export async function measureImageFile(file: File): Promise<ImageMeta> {
  const url = URL.createObjectURL(file);
  try {
    return await measureImage(url);
  } finally {
    URL.revokeObjectURL(url);
  }
}

/** Human-readable ratio like "0.36" — one decimal is enough for the dialog. */
export function formatRatio(width: number, height: number): string {
  if (!height) return '?';
  return (width / height).toFixed(2);
}
