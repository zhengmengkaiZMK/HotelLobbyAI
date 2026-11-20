import { parseModelList, type ConfiguredModel } from '@/shared/lib/ai-models';

export const IMAGE_TEXT_CREDITS = 2;
export const IMAGE_IMAGE_CREDITS = 4;
export const IMAGE_OUTPUT_COUNT = 1;
export const SHANGHAI_TIME_ZONE = 'Asia/Shanghai';
export const IMAGE_RESERVATION_STALE_MS = 15 * 60 * 1000;
export const MAX_UPLOAD_IMAGE_BYTES = 10 * 1024 * 1024;

export const IMAGE_SCENES = ['text-to-image', 'image-to-image'] as const;
export type ImageScene = (typeof IMAGE_SCENES)[number];

export const IMAGE_OUTPUT_SIZES = ['1024x1024', '1024x1536', '1536x1024'] as const;
export type ImageOutputSize = (typeof IMAGE_OUTPUT_SIZES)[number];

export interface ImageStyle {
  id: string;
  name: string;
  nameZh?: string;
  thumbnail: string;
  prompt: string;
  enabled: boolean;
  order: number;
  size?: ImageOutputSize;
}

export interface PublicImageStyle {
  id: string;
  name: string;
  nameZh: string;
  thumbnail: string;
  order: number;
  size: ImageOutputSize | null;
}

/**
 * Original starter styles. They are the admin form's editable default, not a
 * runtime fallback and not images from any other product. Thumbnails stay
 * empty until an operator uploads a sample they have rights to use.
 */
export const PROPOSED_GTA_IMAGE_STYLES: ImageStyle[] = [
  {
    id: 'neon-bay-night',
    name: 'Neon Bay Night',
    nameZh: '霓虹海湾夜景',
    thumbnail: '',
    order: 10,
    enabled: true,
    prompt:
      'Unofficial illustrated night portrait in a saturated coastal city. If a photo is attached, use that person as the subject and keep their face as recognizable as the model allows. Magenta and teal neon, wet pavement reflections, palm silhouettes, and a parked sports car far behind them. Clearly an illustration, not a game screenshot. No logos, no readable trademarks, no weapon aimed at the viewer.',
  },
  {
    id: 'blank-notice-poster',
    name: 'Blank Notice Poster',
    nameZh: '空白告示海报',
    thumbnail: '',
    order: 20,
    enabled: true,
    prompt:
      'Unofficial illustrated poster of one person on aged paper, with an empty name plate and a plain border. If a photo is attached, use that person as the subject. Bold flat colors, halftone shadows, and a small skyline silhouette. Leave every text area blank. No agency seal, no copied cover layout, no logos, no readable trademarks.',
  },
  {
    id: 'marina-suit',
    name: 'Marina Suit',
    nameZh: '码头西装',
    thumbnail: '',
    order: 30,
    enabled: true,
    prompt:
      'Unofficial illustrated three-quarter portrait of one person in a tailored light suit beside a marina at dusk. If a photo is attached, use that person as the subject. Warm sky, yachts out of focus, gold rim light. No logos, no readable trademarks, no weapons.',
  },
  {
    id: 'spray-and-wake',
    name: 'Spray and Wake',
    nameZh: '浪花尾迹',
    thumbnail: '',
    order: 40,
    enabled: true,
    prompt:
      'Unofficial illustrated action still of one person riding a small open watercraft across bright turquoise water. If a photo is attached, use that person as the subject. White spray, a distant pastel shoreline, and motion in the wake. No logos, no readable trademarks, no collision, no weapon.',
  },
  {
    id: 'motel-dusk',
    name: 'Motel Dusk',
    nameZh: '汽车旅馆黄昏',
    thumbnail: '',
    order: 50,
    enabled: true,
    prompt:
      'Unofficial illustrated portrait of one person standing in a motel parking lot at sunset. If a photo is attached, use that person as the subject. A blank neon sign, two palm trees, long shadows, and a warm orange sky. No hotel brand, no logos, no readable trademarks.',
  },
  {
    id: 'glossy-cover',
    name: 'Glossy Cover',
    nameZh: '光面封面',
    thumbnail: '',
    order: 60,
    enabled: true,
    prompt:
      'Unofficial illustrated magazine-cover portrait of one person against a gradient sunset city. If a photo is attached, use that person as the subject. Glossy hair light, clean shoulders, and empty space where a title would go. Do not draw any title, barcode, logo, or trademark.',
  },
];

export function proposedStyleConfigText(): string {
  return JSON.stringify(PROPOSED_GTA_IMAGE_STYLES, null, 2);
}

export function shanghaiDayKey(now = new Date()): string {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: SHANGHAI_TIME_ZONE,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).formatToParts(now);
  const year = parts.find((part) => part.type === 'year')?.value;
  const month = parts.find((part) => part.type === 'month')?.value;
  const day = parts.find((part) => part.type === 'day')?.value;
  if (!year || !month || !day) throw new Error('Could not resolve Asia/Shanghai day');
  return `${year}-${month}-${day}`;
}

export function nextShanghaiMidnight(now = new Date()): Date {
  const [year, month, day] = shanghaiDayKey(now).split('-').map((value) => Number(value));
  return new Date(Date.UTC(year, month - 1, day, 16, 0, 0, 0));
}

export function imageCreditCost(scene: ImageScene): number {
  return scene === 'image-to-image' ? IMAGE_IMAGE_CREDITS : IMAGE_TEXT_CREDITS;
}

export function isImageScene(value: unknown): value is ImageScene {
  return value === 'text-to-image' || value === 'image-to-image';
}

export interface StyleParseResult {
  ok: true;
  styles: ImageStyle[];
}

export interface StyleParseFailure {
  ok: false;
  message: string;
}

export function parseImageStyles(raw: string | undefined | null): StyleParseResult | StyleParseFailure {
  const text = (raw || '').trim();
  if (!text) return { ok: true, styles: [] };
  let parsed: unknown;
  try {
    parsed = JSON.parse(text);
  } catch {
    return { ok: false, message: 'GTA image styles must be a JSON array' };
  }
  if (!Array.isArray(parsed)) return { ok: false, message: 'GTA image styles must be a JSON array' };
  const styles: ImageStyle[] = [];
  const seen = new Set<string>();
  try {
    parsed.forEach((entry, index) => {
      const row = index + 1;
      if (!entry || typeof entry !== 'object') {
        throw new StyleConfigError(`Style ${row} must be an object`);
      }
      const source = entry as Record<string, unknown>;
      const id = typeof source.id === 'string' ? source.id.trim() : '';
      if (!/^[a-z0-9-]{1,64}$/.test(id)) {
        throw new StyleConfigError(`Style ${row} id must be 1-64 lowercase letters, numbers, or hyphens`);
      }
      if (seen.has(id)) throw new StyleConfigError(`Style id ${id} is duplicated`);
      seen.add(id);
      const name = typeof source.name === 'string' ? source.name.trim() : '';
      if (!name || name.length > 80) throw new StyleConfigError(`Style ${id} needs a name of 1-80 characters`);
      const nameZh = typeof source.nameZh === 'string' ? source.nameZh.trim() : '';
      if (nameZh.length > 80) throw new StyleConfigError(`Style ${id} nameZh is too long`);
      const prompt = typeof source.prompt === 'string' ? source.prompt.trim() : '';
      if (!prompt || prompt.length > 4000) {
        throw new StyleConfigError(`Style ${id} needs a prompt of 1-4000 characters`);
      }
      const thumbnail = typeof source.thumbnail === 'string' ? source.thumbnail.trim() : '';
      if (thumbnail && !isSafeThumbnail(thumbnail)) {
        throw new StyleConfigError(`Style ${id} thumbnail must be an empty string, a site path, or an https URL`);
      }
      const order = Number(source.order ?? (index + 1) * 10);
      if (!Number.isInteger(order)) throw new StyleConfigError(`Style ${id} order must be an integer`);
      let size: ImageOutputSize | undefined;
      if (source.size !== undefined && source.size !== null && source.size !== '') {
        if (!IMAGE_OUTPUT_SIZES.includes(source.size as ImageOutputSize)) {
          throw new StyleConfigError(`Style ${id} size must be one of ${IMAGE_OUTPUT_SIZES.join(', ')}`);
        }
        size = source.size as ImageOutputSize;
      }
      styles.push({
        id,
        name,
        ...(nameZh ? { nameZh } : {}),
        thumbnail,
        prompt,
        enabled: source.enabled !== false,
        order,
        ...(size ? { size } : {}),
      });
    });
  } catch (error) {
    if (error instanceof StyleConfigError) return { ok: false, message: error.message };
    throw error;
  }
  return { ok: true, styles };
}

class StyleConfigError extends Error {}

export function parseImageStylesSafe(raw: string | undefined | null): StyleParseResult | StyleParseFailure {
  try {
    return parseImageStyles(raw);
  } catch (error) {
    if (error instanceof StyleConfigError) return { ok: false, message: error.message };
    return { ok: false, message: 'GTA image styles could not be read' };
  }
}

function isSafeThumbnail(value: string): boolean {
  if (value.startsWith('/') && !value.startsWith('//') && !value.includes('..')) return true;
  try {
    const url = new URL(value);
    return url.protocol === 'https:' && !url.username && !url.password;
  } catch {
    return false;
  }
}

export function enabledStyles(styles: ImageStyle[]): ImageStyle[] {
  return styles.filter((style) => style.enabled).sort((a, b) => a.order - b.order || a.id.localeCompare(b.id));
}

export function toPublicStyle(style: ImageStyle): PublicImageStyle {
  return {
    id: style.id,
    name: style.name,
    nameZh: style.nameZh || style.name,
    thumbnail: style.thumbnail,
    order: style.order,
    size: style.size || null,
  };
}

export function storageOrigins(configs: Record<string, string | undefined>): string[] {
  const origins = new Set<string>();
  for (const key of ['r2_domain', 's3_domain', 'r2_endpoint', 's3_endpoint']) {
    const value = configs[key]?.trim();
    if (!value) continue;
    try {
      const url = new URL(value);
      if (url.protocol === 'https:' || url.protocol === 'http:') origins.add(url.origin);
    } catch {
      // Ignore a malformed storage setting. Callers fail closed when no origin matches.
    }
  }
  return [...origins];
}

export function assertReferenceImages(
  value: unknown,
  configs: Record<string, string | undefined>,
  limits: { required: boolean; max: number }
): { ok: true; urls: string[] } | { ok: false; message: string } {
  if (value === undefined || value === null || value === '') {
    if (limits.required) return { ok: false, message: 'Upload one photo from this site before generating' };
    return { ok: true, urls: [] };
  }
  if (!Array.isArray(value)) return { ok: false, message: 'Reference image must be a list of uploaded URLs' };
  if (value.length > limits.max) {
    return { ok: false, message: `Use at most ${limits.max} reference photo` };
  }
  if (limits.required && value.length === 0) {
    return { ok: false, message: 'Upload one photo from this site before generating' };
  }
  const origins = storageOrigins(configs);
  if (value.length > 0 && origins.length === 0) {
    return { ok: false, message: 'Image storage is not configured' };
  }
  const urls: string[] = [];
  for (const entry of value) {
    if (typeof entry !== 'string') return { ok: false, message: 'Reference image must be an uploaded URL' };
    let url: URL;
    try {
      url = new URL(entry);
    } catch {
      return { ok: false, message: 'Reference image must be an uploaded URL' };
    }
    if (url.protocol !== 'https:' || url.username || url.password || !origins.includes(url.origin)) {
      return { ok: false, message: 'Reference image must come from this site’s storage' };
    }
    urls.push(url.toString());
  }
  return { ok: true, urls };
}

export function assertUploadImage(file: { type?: string; size?: number }): { ok: true } | { ok: false; message: string } {
  if (!file.type || !file.type.startsWith('image/')) return { ok: false, message: 'File is not an image' };
  if (typeof file.size === 'number' && file.size > MAX_UPLOAD_IMAGE_BYTES) {
    return { ok: false, message: 'Image must be 10 MB or smaller' };
  }
  return { ok: true };
}

function readModels(configs: Record<string, string | undefined>): ConfiguredModel[] {
  try {
    return parseModelList(configs.media_relay_image_models || '', 'image');
  } catch {
    return [];
  }
}

export interface ResolvedImageModel {
  ok: true;
  model: string;
  provider: 'media-relay';
}

export interface ImageConfigError {
  ok: false;
  code: 'NOT_CONFIGURED' | 'SCENE_UNSUPPORTED';
  message: string;
}

export function resolveGtaImageModel(
  configs: Record<string, string | undefined>,
  scene: ImageScene
): ResolvedImageModel | ImageConfigError {
  if (configs.media_relay_enabled !== 'true') {
    return { ok: false, code: 'NOT_CONFIGURED', message: 'The image tool is not configured yet' };
  }
  if (!configs.media_relay_image_base_url?.trim() || !configs.media_relay_image_api_key?.trim()) {
    return { ok: false, code: 'NOT_CONFIGURED', message: 'The image tool is not configured yet' };
  }
  const models = readModels(configs);
  if (!models.length) {
    return { ok: false, code: 'NOT_CONFIGURED', message: 'The image tool is not configured yet' };
  }
  const selected = configs.gta_image_model?.trim() || '';
  if (selected) {
    const match = models.find((model) => model.name === selected);
    if (!match) return { ok: false, code: 'NOT_CONFIGURED', message: 'The selected image model is not in the drawing model list' };
    if (!match.scenes.includes(scene)) {
      return { ok: false, code: 'SCENE_UNSUPPORTED', message: 'The selected image model does not support this generation mode' };
    }
    return { ok: true, model: match.name, provider: 'media-relay' };
  }
  const capable = models.filter((model) => model.scenes.includes(scene));
  if (capable.length === 1) return { ok: true, model: capable[0].name, provider: 'media-relay' };
  if (capable.length === 0) {
    return { ok: false, code: 'SCENE_UNSUPPORTED', message: 'No configured drawing model supports this generation mode' };
  }
  return { ok: false, code: 'NOT_CONFIGURED', message: 'Choose the active image model in admin settings' };
}

export function validateActiveImageModel(configs: Record<string, string | undefined>): { ok: true } | { ok: false; message: string } {
  const selected = configs.gta_image_model?.trim() || '';
  if (!selected) return { ok: true };
  const models = readModels(configs);
  if (!models.some((model) => model.name === selected)) {
    return { ok: false, message: 'GTA image model ID must match a model ID in 绘画模型 / Image Models' };
  }
  return { ok: true };
}

export interface PreparedImageRequest {
  ok: true;
  provider: string;
  model: string;
  prompt: string;
  scene: ImageScene;
  options: { image_input?: string[]; size?: ImageOutputSize };
  styleId: string | null;
  idempotencyKey: string;
  costCredits: number;
  styled: boolean;
}

export interface PreparedImageFailure {
  ok: false;
  code: 'NOT_CONFIGURED' | 'SCENE_UNSUPPORTED' | 'STYLE_NOT_FOUND' | 'INVALID_REFERENCE' | 'INVALID_REQUEST';
  message: string;
}

export function prepareImageRequest(input: {
  provider?: string;
  model?: string;
  prompt?: string;
  scene?: string;
  styleId?: string;
  idempotencyKey?: string;
  options?: Record<string, unknown> | null;
  configs: Record<string, string | undefined>;
}): PreparedImageRequest | PreparedImageFailure {
  const idempotencyKey = (input.idempotencyKey || '').trim();
  if (!/^[A-Za-z0-9_-]{8,80}$/.test(idempotencyKey)) {
    return { ok: false, code: 'INVALID_REQUEST', message: 'A new idempotency key is required for each image attempt' };
  }
  const styleId = (input.styleId || '').trim();
  const clientImages = input.options?.image_input;
  if (styleId) {
    const parsed = parseImageStylesSafe(input.configs.gta_image_styles);
    if (!parsed.ok) return { ok: false, code: 'NOT_CONFIGURED', message: 'The image tool is not configured yet' };
    const style = enabledStyles(parsed.styles).find((item) => item.id === styleId);
    if (!style) return { ok: false, code: 'STYLE_NOT_FOUND', message: 'That image style is not available' };
    const refs = assertReferenceImages(clientImages, input.configs, { required: false, max: 1 });
    if (!refs.ok) return { ok: false, code: 'INVALID_REFERENCE', message: refs.message };
    const scene: ImageScene = refs.urls.length > 0 ? 'image-to-image' : 'text-to-image';
    const model = resolveGtaImageModel(input.configs, scene);
    if (!model.ok) return model;
    return {
      ok: true,
      provider: model.provider,
      model: model.model,
      prompt: style.prompt,
      scene,
      options: {
        ...(refs.urls.length ? { image_input: refs.urls } : {}),
        ...(style.size ? { size: style.size } : {}),
      },
      styleId: style.id,
      idempotencyKey,
      costCredits: imageCreditCost(scene),
      styled: true,
    };
  }

  const refs = assertReferenceImages(clientImages, input.configs, { required: false, max: 9 });
  if (!refs.ok) return { ok: false, code: 'INVALID_REFERENCE', message: refs.message };
  const scene: ImageScene = refs.urls.length > 0 ? 'image-to-image' : 'text-to-image';
  if (input.scene && input.scene !== scene && isImageScene(input.scene)) {
    // A photo always bills as image-to-image. A request with no photo cannot
    // claim the image-to-image price or skip the photo check.
  }
  if (!input.provider?.trim() || !input.model?.trim()) {
    return { ok: false, code: 'INVALID_REQUEST', message: 'Provider or model is not configured' };
  }
  const prompt = (input.prompt || '').trim();
  if (!prompt) return { ok: false, code: 'INVALID_REQUEST', message: 'Prompt is required' };
  const size = IMAGE_OUTPUT_SIZES.includes(input.options?.size as ImageOutputSize)
    ? (input.options?.size as ImageOutputSize)
    : undefined;
  return {
    ok: true,
    provider: input.provider.trim(),
    model: input.model.trim(),
    prompt,
    scene,
    options: {
      ...(refs.urls.length ? { image_input: refs.urls } : {}),
      ...(size ? { size } : {}),
    },
    styleId: null,
    idempotencyKey,
    costCredits: imageCreditCost(scene),
    styled: false,
  };
}

export function scrubImagePayload(value: unknown): unknown {
  if (Array.isArray(value)) return value.map((entry) => scrubImagePayload(entry));
  if (!value || typeof value !== 'object') return value;
  const next: Record<string, unknown> = {};
  for (const [key, child] of Object.entries(value as Record<string, unknown>)) {
    if (key === 'prompt') continue;
    next[key] = scrubImagePayload(child);
  }
  return next;
}

export function toPublicImageTask(task: Record<string, unknown>, billing?: 'free' | 'paid') {
  let taskInfo = task.taskInfo;
  if (typeof taskInfo === 'string') {
    try {
      taskInfo = JSON.stringify(scrubImagePayload(JSON.parse(taskInfo)));
    } catch {
      taskInfo = null;
    }
  } else if (taskInfo && typeof taskInfo === 'object') {
    taskInfo = JSON.stringify(scrubImagePayload(taskInfo));
  }
  const costCredits = Number(task.costCredits || 0);
  return {
    id: task.id,
    status: task.status,
    mediaType: 'image',
    scene: task.scene,
    costCredits,
    billing: billing || (costCredits > 0 ? 'paid' : 'free'),
    taskInfo,
  };
}

export function collectImageUrls(value: unknown, depth = 0): string[] {
  if (!value || depth > 6) return [];
  if (typeof value === 'string') {
    try {
      const url = new URL(value);
      if (url.protocol !== 'https:' || url.username || url.password) return [];
      return [url.toString()];
    } catch {
      return [];
    }
  }
  if (Array.isArray(value)) return value.flatMap((entry) => collectImageUrls(entry, depth + 1));
  if (typeof value !== 'object') return [];
  const record = value as Record<string, unknown>;
  const keys = ['images', 'imageUrl', 'image_url', 'image', 'output', 'data', 'url', 'uri', 'src'];
  const found: string[] = [];
  for (const key of keys) {
    if (key in record) found.push(...collectImageUrls(record[key], depth + 1));
  }
  return [...new Set(found)];
}

export function resolveOwnedImageUrl(
  task: { id?: string; userId?: string; mediaType?: string; status?: string; taskInfo?: string | null; taskResult?: string | null } | null | undefined,
  userId: string,
  configs: Record<string, string | undefined>
): { ok: true; url: string } | { ok: false; status: number; message: string } {
  if (!task || task.userId !== userId || task.mediaType !== 'image') {
    return { ok: false, status: 404, message: 'Image not found' };
  }
  if (task.status !== 'success') return { ok: false, status: 409, message: 'Image is not ready' };
  const origins = storageOrigins(configs);
  const blobs = [task.taskInfo, task.taskResult].flatMap((raw) => {
    if (!raw) return [];
    try {
      return collectImageUrls(JSON.parse(raw));
    } catch {
      return [];
    }
  });
  const url = blobs.find((candidate) => {
    try {
      return origins.includes(new URL(candidate).origin);
    } catch {
      return false;
    }
  });
  if (!url) return { ok: false, status: 404, message: 'Image file is not on site storage' };
  return { ok: true, url };
}

export interface PublicImageCatalog {
  configured: boolean;
  message: string;
  styles: PublicImageStyle[];
  textToImage: boolean;
  imageToImage: boolean;
  textCredits: number;
  imageCredits: number;
  outputCount: number;
  freeRemaining: number | null;
  balance: number | null;
  dayKey: string;
  resetsAt: string;
}

export function buildImageCatalog(
  configs: Record<string, string | undefined>,
  quota: { freeRemaining: number; balance: number; dayKey: string; resetsAt: string } | null,
  now = new Date()
): PublicImageCatalog {
  const parsed = parseImageStylesSafe(configs.gta_image_styles);
  const styles = parsed.ok ? enabledStyles(parsed.styles).map(toPublicStyle) : [];
  const text = resolveGtaImageModel(configs, 'text-to-image');
  const photo = resolveGtaImageModel(configs, 'image-to-image');
  const configured = parsed.ok && styles.length > 0 && (text.ok || photo.ok);
  let message = '';
  if (!parsed.ok || styles.length === 0) message = 'The image tool is not configured yet';
  else if (!text.ok && !photo.ok) message = text.message;
  const dayKey = quota?.dayKey || shanghaiDayKey(now);
  const resetsAt = quota?.resetsAt || nextShanghaiMidnight(now).toISOString();
  return {
    configured,
    message,
    styles,
    textToImage: text.ok,
    imageToImage: photo.ok,
    textCredits: IMAGE_TEXT_CREDITS,
    imageCredits: IMAGE_IMAGE_CREDITS,
    outputCount: IMAGE_OUTPUT_COUNT,
    freeRemaining: quota ? quota.freeRemaining : null,
    balance: quota ? quota.balance : null,
    dayKey,
    resetsAt,
  };
}
