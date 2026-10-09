import { getUuid } from '@/shared/lib/hash';
import {
  AIConfigs,
  AIGenerateParams,
  AIMediaType,
  AIProvider,
  AITaskResult,
  AITaskStatus,
} from './types';

/**
 * TaskRelayProvider — relay stations that expose the unified async task API:
 *   submit: POST {baseUrl}/v1/task/submit   body: { model, input: { prompt, duration, aspect_ratio, resolution, image_references, video_references, ... } }
 *   query:  GET  {baseUrl}/v1/task/{id}     → { status: queued|in_progress|completed|failed, outputs: [url] }
 *
 * Used for 12ai.org models like Seedance 2.0 (seedance-2.0, 720p only) and
 * MiniMax-H3 (768P/2K). Both support mixed reference input: up to 9 images +
 * up to 3 videos + prompt. Model IDs are case-sensitive (MiniMax-H3).
 */
export interface TaskRelayConfigs extends AIConfigs {
  apiKey: string;
  baseUrl: string;
}

export class TaskRelayProvider implements AIProvider {
  readonly name = 'task-relay';
  configs: TaskRelayConfigs;
  private baseUrl: string;
  private apiKey: string;

  constructor(configs: TaskRelayConfigs) {
    this.configs = { ...configs };
    this.apiKey = configs.apiKey;
    this.baseUrl = configs.baseUrl.replace(/\/$/, '');
  }

  private async request(path: string, init: RequestInit) {
    const response = await fetch(`${this.baseUrl}${path}`, {
      ...init,
      headers: {
        Authorization: `Bearer ${this.apiKey}`,
        ...(init.headers || {}),
      },
    });
    const text = await response.text();
    if (!response.ok) {
      throw new Error(`task relay request failed (${response.status}): ${text.slice(0, 500)}`);
    }
    try {
      return { data: JSON.parse(text) };
    } catch {
      throw new Error(`task relay returned invalid JSON: ${text.slice(0, 500)}`);
    }
  }

  async generate({ params }: { params: AIGenerateParams }): Promise<AITaskResult> {
    if (params.mediaType !== AIMediaType.VIDEO) {
      throw new Error(`task relay only supports video, got: ${params.mediaType}`);
    }
    if (!params.model) throw new Error('model is required');

    const input: Record<string, any> = {
      prompt: params.prompt,
      duration: Number(params.options?.duration || 8),
      aspect_ratio: params.options?.aspect_ratio || '16:9',
      resolution: params.options?.resolution || '720p',
    };
    const images = params.options?.image_input;
    if (Array.isArray(images) && images.length) input.image_references = images;
    const videos = params.options?.video_input;
    if (Array.isArray(videos) && videos.length) input.video_references = videos;

    const { data } = await this.request('/v1/task/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ model: params.model, input }),
    });
    const taskId = data.id || data.task_id;
    if (!taskId) throw new Error('task relay returned no task id');
    return {
      taskStatus: AITaskStatus.PENDING,
      taskId,
      taskInfo: { status: data.status || 'queued' },
      taskResult: data,
    };
  }

  async query({ taskId, mediaType }: { taskId: string; mediaType?: string }): Promise<AITaskResult> {
    if (mediaType !== AIMediaType.VIDEO) throw new Error('query is only supported for video tasks');
    const { data } = await this.request(`/v1/task/${encodeURIComponent(taskId)}`, { method: 'GET' });
    const status = String(data.status || data.phase || '').toLowerCase();
    if (['completed', 'succeeded', 'success', 'done'].includes(status)) {
      const videoUrl = await this.persistVideoUrl(data);
      if (!videoUrl) {
        return { taskStatus: AITaskStatus.FAILED, taskId, taskInfo: { status, errorMessage: 'task relay returned no video URL' }, taskResult: data };
      }
      return {
        taskStatus: AITaskStatus.SUCCESS,
        taskId,
        taskInfo: { status, videos: [{ videoUrl }] },
        taskResult: { ...data, video: { url: videoUrl } },
      };
    }
    if (['failed', 'error', 'cancelled', 'canceled'].includes(status)) {
      return { taskStatus: AITaskStatus.FAILED, taskId, taskInfo: { status, errorMessage: typeof data.error === 'string' ? data.error : data.error?.message || data.message }, taskResult: data };
    }
    return {
      taskStatus: status === 'queued' ? AITaskStatus.PENDING : AITaskStatus.PROCESSING,
      taskId,
      taskInfo: { status: status || 'processing' },
      taskResult: data,
    };
  }

  /** download the finished video and re-host it on our own storage so the URL never expires */
  private async persistVideoUrl(data: any): Promise<string | undefined> {
    const outputs = data.outputs ?? data.output ?? data.videos ?? [];
    const rawUrl = (Array.isArray(outputs) ? outputs : [outputs])
      .map((item: any) => (typeof item === 'string' ? item : item?.url))
      .find((url: unknown): url is string => typeof url === 'string' && /^https?:\/\//.test(url));
    if (!rawUrl) return undefined;

    try {
      const response = await fetch(rawUrl);
      if (!response.ok) {
        console.error('task relay: download video failed', { status: response.status, url: rawUrl });
        return rawUrl;
      }
      const { getStorageService } = await import('@/shared/services/storage');
      const storage = await getStorageService();
      const result = await storage.uploadFile({
        body: Buffer.from(await response.arrayBuffer()),
        key: `task-relay/video/${getUuid()}.mp4`,
        contentType: response.headers.get('content-type')?.split(';')[0] || 'video/mp4',
      });
      if (result && result.success === false) {
        console.error('task relay: upload video to storage failed', { error: result.error, provider: result.provider });
      }
      return result?.url || rawUrl;
    } catch (e) {
      console.error('task relay: persist video failed', {
        url: rawUrl,
        error: e instanceof Error ? e.message : String(e),
      });
      return rawUrl;
    }
  }
}
