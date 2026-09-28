import { envConfigs } from '@/config';
import { AIMediaType } from '@/extensions/ai';
import { getRelayModels } from '@/shared/lib/ai-models';
import { getAllConfigs } from '@/shared/models/config';
import { getUuid } from '@/shared/lib/hash';
import { respData, respErr } from '@/shared/lib/resp';
import { createAITask, NewAITask } from '@/shared/models/ai_task';
import { getRemainingCredits } from '@/shared/models/credit';
import { getUserInfo } from '@/shared/models/user';
import { getAIService } from '@/shared/services/ai';

export async function POST(request: Request) {
  try {
    let { provider, mediaType, model, prompt, options, scene } =
      await request.json();

    if (!provider || !mediaType || !model) {
      throw new Error('invalid params');
    }

    if (!prompt && !options) {
      throw new Error('prompt or options is required');
    }

    const configs = await getAllConfigs();
    const aiService = await getAIService(configs);
    if (provider === 'media-relay') {
      if (mediaType !== AIMediaType.IMAGE && mediaType !== AIMediaType.VIDEO) {
        throw new Error('unsupported relay media type');
      }
      const configured = getRelayModels(configs, mediaType);
      if (!configured.some((item) => item.value === model && item.scenes.includes(scene))) {
        throw new Error('model or scene is not configured');
      }
      const images = options?.image_input;
      const requiresImage = scene === 'image-to-image' || scene === 'image-to-video';
      if (requiresImage && (!Array.isArray(images) || images.length !== 1)) {
        throw new Error('Please provide exactly one reference image for the relay');
      }
      if (requiresImage) {
        const image = new URL(images[0]);
        const allowedOrigins = [configs.r2_domain, configs.s3_domain, configs.r2_endpoint, configs.s3_endpoint]
          .filter(Boolean).map((url) => new URL(url).origin);
        if (image.protocol !== 'https:' || image.username || image.password || !allowedOrigins.includes(image.origin)) {
          throw new Error('Reference image must come from the configured HTTPS storage domain');
        }
      }
      options = {
        ...(requiresImage ? { image_input: images } : {}),
        ...(mediaType === AIMediaType.VIDEO
          ? {
              duration: options?.duration,
              aspect_ratio: options?.aspect_ratio,
              resolution: options?.resolution,
            }
          : {}),
      };
    }

    // check generate type
    if (!aiService.getMediaTypes().includes(mediaType)) {
      throw new Error('invalid mediaType');
    }

    // check ai provider
    const aiProvider = aiService.getProvider(provider);
    if (!aiProvider) {
      throw new Error('invalid provider');
    }

    // get current user
    const user = await getUserInfo();
    if (!user) {
      throw new Error('no auth, please sign in');
    }

    // todo: get cost credits from settings
    let costCredits = 2;

    if (mediaType === AIMediaType.IMAGE) {
      // generate image
      if (scene === 'image-to-image') {
        costCredits = 4;
      } else if (scene === 'text-to-image') {
        costCredits = 2;
      } else {
        throw new Error('invalid scene');
      }
    } else if (mediaType === AIMediaType.VIDEO) {
      // generate video
      if (scene === 'text-to-video') {
        costCredits = 6;
      } else if (scene === 'image-to-video') {
        costCredits = 8;
      } else if (scene === 'video-to-video') {
        costCredits = 10;
      } else {
        throw new Error('invalid scene');
      }
    } else if (mediaType === AIMediaType.MUSIC) {
      // generate music
      costCredits = 10;
      scene = 'text-to-music';
    } else {
      throw new Error('invalid mediaType');
    }

    // check credits
    const remainingCredits = await getRemainingCredits(user.id);
    if (remainingCredits < costCredits) {
      throw new Error('insufficient credits');
    }

    const callbackUrl = `${envConfigs.app_url}/api/ai/notify/${provider}`;

    const params: any = {
      mediaType,
      model,
      prompt,
      callbackUrl,
      options,
    };

    // generate content
    const result = await aiProvider.generate({ params });
    if (!result?.taskId) {
      throw new Error(
        `ai generate failed, mediaType: ${mediaType}, provider: ${provider}, model: ${model}`
      );
    }

    // create ai task
    const newAITask: NewAITask = {
      id: getUuid(),
      userId: user.id,
      mediaType,
      provider,
      model,
      prompt,
      scene,
      options: options ? JSON.stringify(options) : null,
      status: result.taskStatus,
      costCredits,
      taskId: result.taskId,
      taskInfo: result.taskInfo ? JSON.stringify(result.taskInfo) : null,
      taskResult: result.taskResult ? JSON.stringify(result.taskResult) : null,
    };
    await createAITask(newAITask);

    return respData(newAITask);
  } catch (e: any) {
    console.log('generate failed', e);
    return respErr(e.message);
  }
}
