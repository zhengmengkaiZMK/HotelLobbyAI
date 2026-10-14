import { and, eq } from 'drizzle-orm';

import { db } from '@/core/db';
import { aiTask } from '@/config/db/schema';
import { AITaskStatus } from '@/extensions/ai';
import { updateAITaskById } from '@/shared/models/ai_task';


async function findTaskByProviderId(taskId: string, provider: string) {
  const [task] = await db()
    .select()
    .from(aiTask)
    .where(and(eq(aiTask.taskId, taskId), eq(aiTask.provider, provider)));
  return task;
}
/**
 * Fal queue webhook callback.
 * Fal sends POST { request_id, status: 'OK'|'ERROR', payload?, error? }.
 */
export async function POST(
  req: Request,
  { params }: { params: Promise<{ provider: string }> }
) {
  try {
    const { provider } = await params;
    if (provider !== 'fal') {
      return Response.json({ error: 'unsupported provider' }, { status: 400 });
    }

    const body = await req.json();
    const requestId = typeof body?.request_id === 'string' ? body.request_id : '';
    if (!requestId) {
      return Response.json({ error: 'request_id is required' }, { status: 400 });
    }

    const task = await findTaskByProviderId(requestId, provider);
    if (!task) {
      // Acknowledge unknown/replayed callbacks to prevent unnecessary retries.
      return Response.json({ ok: true, ignored: true });
    }

    const succeeded = body?.status === 'OK';
    const status = succeeded ? AITaskStatus.SUCCESS : AITaskStatus.FAILED;
    const payload = succeeded ? body?.payload ?? null : body?.error ?? body?.payload ?? null;
    const taskInfo = {
      status: body?.status || (succeeded ? 'OK' : 'ERROR'),
      errorCode: succeeded ? '' : String(body?.error_type || ''),
      errorMessage: succeeded ? '' : typeof body?.error === 'string' ? body.error : JSON.stringify(body?.error || ''),
    };

    await updateAITaskById(task.id, {
      status,
      taskInfo: JSON.stringify(taskInfo),
      taskResult: payload ? JSON.stringify(payload) : null,
      creditId: task.creditId,
    });

    return Response.json({ ok: true });
  } catch (error: any) {
    console.error('fal webhook failed', error);
    return Response.json({ error: error?.message || 'webhook failed' }, { status: 500 });
  }
}
