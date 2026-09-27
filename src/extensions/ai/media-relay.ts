import { getUuid } from '@/shared/lib/hash';
import {
  AIConfigs,
  AIGenerateParams,
  AIImage,
  AIMediaType,
  AIProvider,
  AITaskResult,
  AITaskStatus,
} from './types';

export interface MediaRelayEndpointConfigs {
  apiKey: string;
  baseUrl: string;
}

export interface MediaRelayConfigs extends AIConfigs {
  /** @deprecated legacy shared credentials, used as fallback */
  apiKey?: string;
  /** @deprecated legacy shared credentials, used as fallback */
  baseUrl?: string;
  image?: MediaRelayEndpointConfigs;
  video?: MediaRelayEndpointConfigs;
}

function parseResponse(text: string): any {
  try {
    return JSON.parse(text);
  } catch {
    const events = text
      .split(/\r?\n\r?\n/)
      .flatMap((frame) => frame.split(/\r?\n/).filter((line) => line.startsWith('data:')).map((line) => line.slice(5).trim()))
      .filter((data) => data && data !== '[DONE]')
      .map((data) => {
        try { return JSON.parse(data); } catch { return null; }
      })
      .filter(Boolean);
    const error = events.find((event) => event.error || event.type === 'error');
    if (error) throw new Error('media relay returned an image generation error');
    return [...events].reverse().find((event) =>
      event.type !== 'image_generation.partial_image' &&
      (event.b64_json || event.data?.length || event.item?.result)
    ) ?? events[events.length - 1] ?? {};
  }
}

function imageUrls(data: any): string[] {
  if (data.b64_json || data.item?.result) return [`data:image/png;base64,${data.b64_json || data.item.result}`];
  const values = data.data ?? data.images ?? data.output ?? [];
  return (Array.isArray(values) ? values : [values]).map((item: any) => {
    if (typeof item === 'string') return item;
    if (item?.url) return item.url;
    if (item?.b64_json) return `data:image/png;base64,${item.b64_json}`;
    return undefined;
  }).filter(Boolean);
}

export class MediaRelayProvider implements AIProvider {
  readonly name = 'media-relay';
  configs: MediaRelayConfigs;
  private endpoints: Partial<Record<AIMediaType, MediaRelayEndpointConfigs>>;

  constructor(configs: MediaRelayConfigs) {
    const normalize = (endpoint?: MediaRelayEndpointConfigs) =>
      endpoint ? { ...endpoint, baseUrl: endpoint.baseUrl.replace(/\/$/, '') } : undefined;
    this.configs = { ...configs };
    this.endpoints = {
      [AIMediaType.IMAGE]: normalize(configs.image),
      [AIMediaType.VIDEO]: normalize(configs.video),
    };
  }

  private endpoint(mediaType?: AIMediaType): MediaRelayEndpointConfigs {
    const endpoint = (mediaType && this.endpoints[mediaType]) || this.endpoints[AIMediaType.IMAGE] || this.endpoints[AIMediaType.VIDEO];
    if (!endpoint) {
      throw new Error(mediaType === AIMediaType.VIDEO ? '视频中转站未配置 Base URL 或 API Key' : '中转站未配置 Base URL 或 API Key');
    }
    return endpoint;
  }

  private async request(mediaType: AIMediaType, path: string, init: RequestInit) {
    const endpoint = this.endpoint(mediaType);
    const response = await fetch(`${endpoint.baseUrl}${path}`, {
      ...init,
      headers: {
        Authorization: `Bearer ${endpoint.apiKey}`,
        ...(init.headers || {}),
      },
    });
    const text = await response.text();
    if (!response.ok) throw new Error(`media relay request failed (${response.status}): ${text.slice(0, 500)}`);
    return { response, data: parseResponse(text) };
  }

  private async saveBase64Images(data: any): Promise<string[]> {
    const urls = imageUrls(data);
    const saved: string[] = [];
    const { getStorageService } = await import('@/shared/services/storage');
    const storage = await getStorageService();
    for (const url of urls) {
      if (!url.startsWith('data:')) {
        saved.push(url);
        continue;
      }
      const match = url.match(/^data:([^;]+);base64,(.+)$/);
      if (!match) continue;
      const [, contentType, encoded] = match;
      const result = await storage.uploadFile({
        body: Buffer.from(encoded, 'base64'),
        key: `media-relay/image/${getUuid()}.png`,
        contentType,
      });
      if (result?.url) saved.push(result.url);
    }
    return saved;
  }

  private async persistVideoUrl(data: any): Promise<string | undefined> {
    const url = data.video?.url || data.video_url || data.output?.url || data.url;
    if (!url) return undefined;
    try {
      const response = await fetch(url);
      if (!response.ok) return url;
      const { getStorageService } = await import('@/shared/services/storage');
      const storage = await getStorageService();
      const result = await storage.uploadFile({
        body: Buffer.from(await response.arrayBuffer()),
        key: `media-relay/video/${getUuid()}.mp4`,
        contentType: 'video/mp4',
      });
      return result?.url || url;
    } catch {
      return url;
    }
  }

  async generate({ params }: { params: AIGenerateParams }): Promise<AITaskResult> {
    if (!params.model) throw new Error('model is required');
    if (params.mediaType === AIMediaType.IMAGE) {
      const input = params.options?.image_input?.[0];
      const path = input ? '/images/edits' : '/images/generations';
      let data: any;
      if (input) {
        const source = await fetch(input);
        if (!source.ok) throw new Error('failed to fetch source image');
        const bytes = Buffer.from(await source.arrayBuffer());
        const boundary = `----media-relay-${getUuid()}`;
        const fields = { prompt: params.prompt || '', model: params.model, n: '1', size: params.options?.size || '1024x1024', stream: 'true', response_format: 'b64_json' };
        const parts: Buffer[] = [];
        for (const [key, value] of Object.entries(fields)) parts.push(Buffer.from(`--${boundary}\r\nContent-Disposition: form-data; name="${key}"\r\n\r\n${value}\r\n`));
        parts.push(Buffer.from(`--${boundary}\r\nContent-Disposition: form-data; name="image"; filename="source.png"\r\nContent-Type: ${source.headers.get('content-type') || 'image/png'}\r\n\r\n`), bytes, Buffer.from(`\r\n--${boundary}--\r\n`));
        ({ data } = await this.request(AIMediaType.IMAGE, path, { method: 'POST', headers: { 'Content-Type': `multipart/form-data; boundary=${boundary}` }, body: Buffer.concat(parts) }));
      } else {
        ({ data } = await this.request(AIMediaType.IMAGE, path, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'text/event-stream' }, body: JSON.stringify({ model: params.model, prompt: params.prompt, n: 1, size: params.options?.size || '1024x1024', stream: true, response_format: 'b64_json', ...params.options }) }));
      }
      const urls = await this.saveBase64Images(data);
      if (!urls.length) throw new Error('media relay returned no image');
      const images: AIImage[] = urls.map((url) => ({ id: getUuid(), imageUrl: url, imageType: 'image/png', createTime: new Date() }));
      return { taskStatus: AITaskStatus.SUCCESS, taskId: getUuid(), taskInfo: { images, status: 'success' }, taskResult: { data: urls.map((url) => ({ url })) } };
    }

    if (params.mediaType === AIMediaType.VIDEO) {
      if (params.options?.video_input?.length) throw new Error('中转站暂不支持视频转视频 / relay does not support video-to-video');
      const body: Record<string, any> = { model: params.model, prompt: params.prompt, resolution: '720p', duration: 8 };
      if (params.options?.image_input?.[0]) body.image = { url: params.options.image_input[0] };
      const { data } = await this.request(AIMediaType.VIDEO, '/videos/generations', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
      const taskId = data.request_id || data.id;
      if (!taskId) throw new Error('media relay returned no request_id');
      return { taskStatus: AITaskStatus.PENDING, taskId, taskInfo: { status: data.status || 'pending' }, taskResult: data };
    }
    throw new Error(`mediaType not supported: ${params.mediaType}`);
  }

  async query({ taskId, mediaType }: { taskId: string; mediaType?: string }): Promise<AITaskResult> {
    if (mediaType !== AIMediaType.VIDEO) throw new Error('query is only supported for video tasks');
    const { data } = await this.request(AIMediaType.VIDEO, `/videos/${encodeURIComponent(taskId)}`, { method: 'GET' });
    const status = String(data.status || '').toLowerCase();
    if (['completed', 'done', 'succeeded', 'success'].includes(status)) {
      const videoUrl = await this.persistVideoUrl(data);
      if (!videoUrl) return { taskStatus: AITaskStatus.FAILED, taskId, taskInfo: { status, errorMessage: 'media relay returned no video URL' }, taskResult: data };
      return { taskStatus: AITaskStatus.SUCCESS, taskId, taskInfo: { status, videos: [{ videoUrl }] }, taskResult: { ...data, video: { ...data.video, url: videoUrl } } };
    }
    if (['failed', 'error', 'cancelled', 'canceled'].includes(status)) return { taskStatus: AITaskStatus.FAILED, taskId, taskInfo: { status, errorMessage: data.error || data.message }, taskResult: data };
    return { taskStatus: AITaskStatus.PROCESSING, taskId, taskInfo: { status: status || 'processing' }, taskResult: data };
  }
}
