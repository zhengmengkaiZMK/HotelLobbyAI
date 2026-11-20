import { and, eq, gt, isNull, lt, or, sum } from 'drizzle-orm';

import { credit, imageDailyFree, imageGeneration } from '@/config/db/schema';
import { AIMediaType, AITaskStatus } from '@/extensions/ai';
import { getUuid } from '@/shared/lib/hash';
import {
  IMAGE_RESERVATION_STALE_MS,
  nextShanghaiMidnight,
  shanghaiDayKey,
  toPublicImageTask,
} from '@/shared/lib/image-tool';
import { consumeCredits, CreditStatus, CreditTransactionType, refundConsumedCredit } from '@/shared/models/credit';

type Database = any;

export interface ImageHold {
  id: string;
  billing: 'free' | 'paid';
  creditId?: string;
  costCredits: number;
  scene: string;
}

export type ImageAttemptResult =
  | { ok: true; task: ReturnType<typeof toPublicImageTask>; replay?: boolean }
  | {
      ok: false;
      code: string;
      message: string;
      costCredits?: number;
      balance?: number;
    };

function isBusy(error: unknown) {
  const message = `${error instanceof Error ? error.message : error} ${error instanceof Error && 'cause' in error ? error.cause : ''}`;
  return /SQLITE_BUSY|database is locked/i.test(message);
}

async function transaction<T>(database: Database, run: (tx: Database) => Promise<T>): Promise<T> {
  let last: unknown;
  for (let attempt = 0; attempt < 6; attempt += 1) {
    try {
      return await database.transaction(run);
    } catch (error) {
      if (!isBusy(error) || attempt === 5) throw error;
      last = error;
      await new Promise((resolve) => setTimeout(resolve, 30 * (attempt + 1)));
    }
  }
  throw last;
}

function stamp(value: Date | number | string | null | undefined): number {
  if (value instanceof Date) return value.getTime();
  if (typeof value === 'number') return value;
  if (typeof value === 'string') {
    const parsed = Date.parse(value);
    if (!Number.isNaN(parsed)) return parsed;
  }
  return 0;
}

async function balanceInTx(tx: Database, userId: string, now: Date): Promise<number> {
  const [result] = await tx
    .select({ total: sum(credit.remainingCredits) })
    .from(credit)
    .where(
      and(
        eq(credit.userId, userId),
        eq(credit.transactionType, CreditTransactionType.GRANT),
        eq(credit.status, CreditStatus.ACTIVE),
        gt(credit.remainingCredits, 0),
        or(isNull(credit.expiresAt), gt(credit.expiresAt, now))
      )
    );
  return Number(result?.total || 0);
}

async function releaseUnboundRow(tx: Database, generationId: string, now: Date, reason: string) {
  const [generation] = await tx
    .update(imageGeneration)
    .set({ status: 'released', updatedAt: now, error: reason })
    .where(and(eq(imageGeneration.id, generationId), eq(imageGeneration.status, 'reserved'), isNull(imageGeneration.aiTaskId)))
    .returning();
  if (!generation) return false;
  if (generation.billing === 'free') {
    await tx
      .update(imageDailyFree)
      .set({ status: 'released', updatedAt: now })
      .where(
        and(
          eq(imageDailyFree.userId, generation.userId),
          eq(imageDailyFree.dayKey, generation.dayKey),
          eq(imageDailyFree.generationId, generation.id),
          eq(imageDailyFree.status, 'reserved'),
          isNull(imageDailyFree.taskId)
        )
      );
  }
  if (generation.billing === 'paid' && generation.creditId) {
    await refundConsumedCredit(tx, generation.creditId);
  }
  return true;
}

async function reclaimStale(tx: Database, userId: string, dayKey: string, now: Date) {
  const cutoff = new Date(now.getTime() - IMAGE_RESERVATION_STALE_MS);
  const rows = await tx
    .select()
    .from(imageDailyFree)
    .where(
      and(
        eq(imageDailyFree.userId, userId),
        eq(imageDailyFree.dayKey, dayKey),
        eq(imageDailyFree.status, 'reserved'),
        isNull(imageDailyFree.taskId),
        lt(imageDailyFree.updatedAt, cutoff)
      )
    );
  for (const row of rows) {
    const [generation] = await tx.select().from(imageGeneration).where(eq(imageGeneration.id, row.generationId));
    if (generation?.status === 'reserved' && !generation.aiTaskId && stamp(generation.updatedAt) < cutoff.getTime()) {
      await releaseUnboundRow(tx, generation.id, now, 'The attempt expired before the provider accepted it');
      continue;
    }
    if (!generation || generation.status === 'released') {
      await tx
        .update(imageDailyFree)
        .set({ status: 'released', updatedAt: now })
        .where(
          and(
            eq(imageDailyFree.userId, row.userId),
            eq(imageDailyFree.dayKey, row.dayKey),
            eq(imageDailyFree.generationId, row.generationId),
            eq(imageDailyFree.status, 'reserved'),
            isNull(imageDailyFree.taskId)
          )
        );
    }
  }
}

async function tryClaimFree(tx: Database, userId: string, dayKey: string, generationId: string, now: Date) {
  const inserted = await tx
    .insert(imageDailyFree)
    .values({
      userId,
      dayKey,
      generationId,
      status: 'reserved',
      taskId: null,
      updatedAt: now,
    })
    .onConflictDoNothing()
    .returning();
  if (inserted.some((row: { generationId: string }) => row.generationId === generationId)) return true;
  const updated = await tx
    .update(imageDailyFree)
    .set({ generationId, status: 'reserved', taskId: null, updatedAt: now })
    .where(and(eq(imageDailyFree.userId, userId), eq(imageDailyFree.dayKey, dayKey), eq(imageDailyFree.status, 'released')))
    .returning();
  return updated.some((row: { generationId: string }) => row.generationId === generationId);
}

export async function claimImageGeneration(
  database: Database,
  input: {
    userId: string;
    idempotencyKey: string;
    scene: string;
    provider: string;
    model: string;
    styleId?: string | null;
    costCredits: number;
    now?: Date;
  }
) {
  const now = input.now ?? new Date();
  const dayKey = shanghaiDayKey(now);
  return transaction(database, async (tx: Database) => {
    const [existing] = await tx
      .select()
      .from(imageGeneration)
      .where(and(eq(imageGeneration.userId, input.userId), eq(imageGeneration.idempotencyKey, input.idempotencyKey)));
    if (existing) {
      if (existing.status === 'released') {
        return {
          ok: false as const,
          code: 'IMAGE_FAILED',
          message: existing.error || 'This attempt already failed. Start a new one.',
        };
      }
      if (existing.aiTaskId || existing.status === 'succeeded') {
        return { ok: true as const, kind: 'replay' as const, generation: existing };
      }
      if (
        existing.status === 'reserved' &&
        !existing.aiTaskId &&
        stamp(existing.updatedAt) < now.getTime() - IMAGE_RESERVATION_STALE_MS
      ) {
        await releaseUnboundRow(tx, existing.id, now, 'This attempt expired before the provider accepted it');
        return {
          ok: false as const,
          code: 'IMAGE_FAILED',
          message: 'This attempt expired before the provider accepted it. Start a new one.',
        };
      }
      return { ok: false as const, code: 'IN_PROGRESS', message: 'This image attempt is already running' };
    }

    await reclaimStale(tx, input.userId, dayKey, now);
    const generationId = getUuid();
    const free = await tryClaimFree(tx, input.userId, dayKey, generationId, now);
    if (free) {
      try {
        await tx.insert(imageGeneration).values({
          id: generationId,
          userId: input.userId,
          idempotencyKey: input.idempotencyKey,
          dayKey,
          scene: input.scene,
          billing: 'free',
          status: 'reserved',
          provider: input.provider,
          model: input.model,
          styleId: input.styleId || null,
          costCredits: 0,
          createdAt: now,
          updatedAt: now,
        });
      } catch (error) {
        await tx
          .update(imageDailyFree)
          .set({ status: 'released', updatedAt: now })
          .where(and(eq(imageDailyFree.userId, input.userId), eq(imageDailyFree.dayKey, dayKey), eq(imageDailyFree.generationId, generationId)));
        throw error;
      }
      return {
        ok: true as const,
        kind: 'hold' as const,
        hold: { id: generationId, billing: 'free' as const, costCredits: 0, scene: input.scene },
      };
    }

    const balance = await balanceInTx(tx, input.userId, now);
    if (balance < input.costCredits) {
      return {
        ok: false as const,
        code: 'INSUFFICIENT_CREDITS',
        message: `This image needs ${input.costCredits} credits`,
        costCredits: input.costCredits,
        balance,
      };
    }
    const consumed = await consumeCredits({
      userId: input.userId,
      credits: input.costCredits,
      scene: input.scene,
      description: 'generate image',
      metadata: JSON.stringify({ type: 'image-generation', generationId }),
      tx,
    });
    await tx.insert(imageGeneration).values({
      id: generationId,
      userId: input.userId,
      idempotencyKey: input.idempotencyKey,
      dayKey,
      scene: input.scene,
      billing: 'paid',
      status: 'reserved',
      provider: input.provider,
      model: input.model,
      styleId: input.styleId || null,
      costCredits: input.costCredits,
      creditId: consumed?.id,
      createdAt: now,
      updatedAt: now,
    });
    return {
      ok: true as const,
      kind: 'hold' as const,
      hold: {
        id: generationId,
        billing: 'paid' as const,
        creditId: consumed?.id,
        costCredits: input.costCredits,
        scene: input.scene,
      },
    };
  });
}

export async function releaseUnboundImageGeneration(database: Database, generationId: string, reason: string, now = new Date()) {
  return transaction(database, async (tx: Database) => releaseUnboundRow(tx, generationId, now, reason));
}

export async function bindImageGeneration(
  database: Database,
  generationId: string,
  aiTaskId: string,
  taskStatus: string,
  now = new Date()
) {
  const settled = taskStatus === AITaskStatus.SUCCESS ? 'succeeded' : 'reserved';
  await transaction(database, async (tx: Database) => {
    await tx
      .update(imageGeneration)
      .set({ aiTaskId, status: settled, updatedAt: now })
      .where(and(eq(imageGeneration.id, generationId), eq(imageGeneration.status, 'reserved'), isNull(imageGeneration.aiTaskId)));
    await tx
      .update(imageDailyFree)
      .set({ taskId: aiTaskId, status: settled, updatedAt: now })
      .where(and(eq(imageDailyFree.generationId, generationId), eq(imageDailyFree.status, 'reserved')));
  });
}

export async function settleImageGenerationForTask(database: Database, aiTaskId: string, taskStatus: string, now = new Date()) {
  const [generation] = await database.select().from(imageGeneration).where(eq(imageGeneration.aiTaskId, aiTaskId));
  if (!generation || generation.status !== 'reserved') return;
  if (taskStatus === AITaskStatus.SUCCESS) {
    await transaction(database, async (tx: Database) => {
      const [updated] = await tx
        .update(imageGeneration)
        .set({ status: 'succeeded', updatedAt: now })
        .where(and(eq(imageGeneration.id, generation.id), eq(imageGeneration.status, 'reserved')))
        .returning();
      if (!updated || updated.billing !== 'free') return;
      await tx
        .update(imageDailyFree)
        .set({ status: 'succeeded', taskId: aiTaskId, updatedAt: now })
        .where(and(eq(imageDailyFree.generationId, generation.id), eq(imageDailyFree.status, 'reserved')));
    });
    return;
  }
  if (taskStatus !== AITaskStatus.FAILED && taskStatus !== AITaskStatus.CANCELED) return;
  await transaction(database, async (tx: Database) => {
    const [updated] = await tx
      .update(imageGeneration)
      .set({ status: 'released', updatedAt: now, error: 'The image provider failed after accepting the task' })
      .where(and(eq(imageGeneration.id, generation.id), eq(imageGeneration.status, 'reserved')))
      .returning();
    if (!updated || updated.billing !== 'free') return;
    await tx
      .update(imageDailyFree)
      .set({ status: 'released', updatedAt: now })
      .where(
        and(
          eq(imageDailyFree.generationId, generation.id),
          eq(imageDailyFree.userId, generation.userId),
          eq(imageDailyFree.dayKey, generation.dayKey),
          eq(imageDailyFree.status, 'reserved')
        )
      );
  });
}

export async function readImageQuota(database: Database, userId: string, now = new Date()) {
  const dayKey = shanghaiDayKey(now);
  await transaction(database, async (tx: Database) => {
    await reclaimStale(tx, userId, dayKey, now);
  });
  const [row] = await database
    .select()
    .from(imageDailyFree)
    .where(and(eq(imageDailyFree.userId, userId), eq(imageDailyFree.dayKey, dayKey)));
  const freeRemaining = row && (row.status === 'reserved' || row.status === 'succeeded') ? 0 : 1;
  return { freeRemaining, dayKey, resetsAt: nextShanghaiMidnight(now).toISOString() };
}

function storageNotReady(error: unknown) {
  const message = error instanceof Error ? error.message : String(error);
  return /no such table|does not exist|SQLITE_ERROR/i.test(message);
}

export async function fulfillImageGeneration(input: {
  database: Database;
  user: { id: string } | null;
  idempotencyKey: string;
  scene: string;
  provider: string;
  model: string;
  prompt: string;
  styleId?: string | null;
  options?: unknown;
  costCredits: number;
  now?: Date;
  loadTask: (id: string) => Promise<Record<string, unknown> | null | undefined>;
  generate: () => Promise<{ taskId?: string; taskStatus?: string; taskInfo?: unknown; taskResult?: unknown }>;
  createTask: (task: Record<string, unknown>) => Promise<Record<string, unknown>>;
}): Promise<ImageAttemptResult> {
  if (!input.user?.id) {
    return { ok: false, code: 'NOT_SIGNED_IN', message: 'Sign in to generate an image' };
  }
  const now = input.now ?? new Date();
  let claim: Awaited<ReturnType<typeof claimImageGeneration>>;
  try {
    claim = await claimImageGeneration(input.database, {
      userId: input.user.id,
      idempotencyKey: input.idempotencyKey,
      scene: input.scene,
      provider: input.provider,
      model: input.model,
      styleId: input.styleId,
      costCredits: input.costCredits,
      now,
    });
  } catch (error) {
    if (storageNotReady(error)) {
      return { ok: false, code: 'NOT_CONFIGURED', message: 'Image generation storage is not ready' };
    }
    return { ok: false, code: 'IMAGE_FAILED', message: 'The image request could not be reserved' };
  }
  if (!claim.ok) return claim;
  if (claim.kind === 'replay') {
    const task = claim.generation.aiTaskId ? await input.loadTask(claim.generation.aiTaskId) : null;
    if (!task) return { ok: false, code: 'IN_PROGRESS', message: 'This image attempt is already running' };
    return { ok: true, replay: true, task: toPublicImageTask(task, claim.generation.billing) };
  }

  const hold = claim.hold;
  let created = false;
  try {
    const generated = await input.generate();
    if (!generated?.taskId || generated.taskStatus === AITaskStatus.FAILED || generated.taskStatus === AITaskStatus.CANCELED) {
      await releaseUnboundImageGeneration(input.database, hold.id, 'The image provider did not accept this request', now);
      return { ok: false, code: 'IMAGE_FAILED', message: 'The image provider did not accept this request' };
    }
    const task = await input.createTask({
      id: getUuid(),
      userId: input.user.id,
      mediaType: AIMediaType.IMAGE,
      provider: input.provider,
      model: input.model,
      prompt: input.prompt,
      scene: input.scene,
      options: input.options ? JSON.stringify(input.options) : null,
      status: generated.taskStatus || AITaskStatus.PENDING,
      costCredits: hold.billing === 'free' ? 0 : hold.costCredits,
      creditId: hold.creditId,
      taskId: generated.taskId,
      taskInfo: generated.taskInfo ? JSON.stringify(generated.taskInfo) : null,
      taskResult: generated.taskResult ? JSON.stringify(generated.taskResult) : null,
    });
    created = true;
    await bindImageGeneration(input.database, hold.id, String(task.id), String(task.status || generated.taskStatus), now);
    return { ok: true, task: toPublicImageTask(task, hold.billing) };
  } catch (error) {
    if (!created) {
      await releaseUnboundImageGeneration(input.database, hold.id, 'The image provider did not accept this request', now);
    }
    const message = error instanceof Error ? error.message : '';
    if (/^(NOT_CONFIGURED|NOT_SIGNED_IN|SCENE_UNSUPPORTED|STYLE_NOT_FOUND|INVALID_REFERENCE|INSUFFICIENT_CREDITS|IN_PROGRESS|IMAGE_FAILED|INVALID_REQUEST):/.test(message)) {
      const code = message.split(':')[0];
      return { ok: false, code, message: message.slice(message.indexOf(':') + 1).trim() };
    }
    return { ok: false, code: 'IMAGE_FAILED', message: 'The image provider did not accept this request' };
  }
}
