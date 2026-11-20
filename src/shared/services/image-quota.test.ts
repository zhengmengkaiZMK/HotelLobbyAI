import assert from 'node:assert/strict';
import { mkdtempSync, readFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { describe, it } from 'node:test';

import { createClient } from '@libsql/client';
import { eq } from 'drizzle-orm';
import { drizzle } from 'drizzle-orm/libsql';

import { credit, user } from '@/config/db/schema';
import { AITaskStatus } from '@/extensions/ai';
import { PROPOSED_GTA_IMAGE_STYLES } from '@/shared/lib/image-tool';

import {
  claimImageGeneration,
  fulfillImageGeneration,
  readImageQuota,
  releaseUnboundImageGeneration,
  settleImageGenerationForTask,
} from './image-quota';

function withFor(dbInstance: any): any {
  const wrapQuery = (query: any): any => {
    if (!query || typeof query !== 'object') return query;
    return new Proxy(query, {
      get(target, prop, receiver) {
        if (prop === 'for' && typeof (target as any).for !== 'function') return () => receiver;
        const value = Reflect.get(target, prop, receiver);
        if (typeof value !== 'function') return value;
        return (...args: any[]) => wrapQuery(value.apply(target, args));
      },
    });
  };
  return new Proxy(dbInstance, {
    get(target, prop, receiver) {
      if (prop === 'transaction') {
        const original = Reflect.get(target, prop, receiver);
        return (fn: any, ...rest: any[]) => original.call(target, (tx: any) => fn(withFor(tx)), ...rest);
      }
      const value = Reflect.get(target, prop, receiver);
      if (typeof value !== 'function') return value;
      if (typeof prop === 'string' && (prop.startsWith('select') || prop === 'update' || prop === 'insert' || prop === 'delete')) {
        return (...args: any[]) => wrapQuery(value.apply(target, args));
      }
      return value.bind(target);
    },
  });
}

async function createDatabase() {
  const client = createClient({ url: `file:${join(mkdtempSync(join(tmpdir(), 'image-quota-')), 'test.db')}` });
  await client.execute('PRAGMA busy_timeout = 5000');
  await client.execute(`
    CREATE TABLE user (
      id text PRIMARY KEY,
      name text NOT NULL,
      email text NOT NULL UNIQUE,
      email_verified integer NOT NULL DEFAULT 0,
      image text,
      created_at integer NOT NULL,
      updated_at integer NOT NULL,
      utm_source text NOT NULL DEFAULT '',
      ip text NOT NULL DEFAULT '',
      locale text NOT NULL DEFAULT ''
    )
  `);
  await client.execute(`
    CREATE TABLE credit (
      id text PRIMARY KEY,
      user_id text NOT NULL,
      user_email text,
      order_no text,
      subscription_no text,
      transaction_no text NOT NULL UNIQUE,
      transaction_type text NOT NULL,
      transaction_scene text,
      credits integer NOT NULL,
      remaining_credits integer NOT NULL DEFAULT 0,
      description text,
      expires_at integer,
      status text NOT NULL,
      created_at integer NOT NULL,
      updated_at integer NOT NULL,
      deleted_at integer,
      consumed_detail text,
      metadata text
    )
  `);
  const migration = readFileSync(new URL('../../config/db/sql/001_image_generation.sql', import.meta.url), 'utf8')
    .split('\n')
    .filter((line) => !line.trim().startsWith('--'))
    .join('\n');
  for (const statement of migration.split(';').map((part) => part.trim()).filter(Boolean)) {
    await client.execute(statement);
  }
  return withFor(drizzle({ client }));
}

async function seed(database: any, userId: string, credits = 0) {
  const now = new Date('2026-11-19T12:00:00Z');
  await database.insert(user).values({
    id: userId,
    name: userId,
    email: `${userId}@example.com`,
    emailVerified: false,
    createdAt: now,
    updatedAt: now,
  });
  if (credits > 0) {
    await database.insert(credit).values({
      id: `${userId}-grant`,
      userId,
      transactionNo: `${userId}-grant-no`,
      transactionType: 'grant',
      credits,
      remainingCredits: credits,
      status: 'active',
      createdAt: now,
      updatedAt: now,
    });
  }
  return now;
}

async function balance(database: any, userId: string) {
  const rows = await database.select().from(credit).where(eq(credit.userId, userId));
  return rows
    .filter((row: { transactionType: string; status: string }) => row.transactionType === 'grant' && row.status === 'active')
    .reduce((sum: number, row: { remainingCredits: number }) => sum + row.remainingCredits, 0);
}

const baseClaim = {
  scene: 'image-to-image',
  provider: 'media-relay',
  model: 'draw-both',
  styleId: 'neon-bay-night',
  costCredits: 4,
};

describe('image quota', () => {
  it('denies a signed-out generation before any provider call', async () => {
    const database = await createDatabase();
    let calls = 0;
    const result = await fulfillImageGeneration({
      database,
      user: null,
      idempotencyKey: 'signed-out-1',
      ...baseClaim,
      prompt: PROPOSED_GTA_IMAGE_STYLES[0].prompt,
      generate: async () => {
        calls += 1;
        return { taskId: 'provider-1', taskStatus: AITaskStatus.SUCCESS };
      },
      loadTask: async () => null,
      createTask: async (task) => task,
    });
    assert.equal(result.ok, false);
    if (!result.ok) assert.equal(result.code, 'NOT_SIGNED_IN');
    assert.equal(calls, 0);
  });

  it('gives one shared free image at zero balance and blocks a parallel second claim', async () => {
    const database = await createDatabase();
    const now = await seed(database, 'user-a', 0);
    let busyOnce = true;
    const racing = new Proxy(database, {
      get(target, prop, receiver) {
        if (prop !== 'transaction') return Reflect.get(target, prop, receiver);
        return (fn: (tx: unknown) => Promise<unknown>) => {
          if (busyOnce) {
            busyOnce = false;
            throw Object.assign(new Error('SQLITE_BUSY: database is locked'), { code: 'SQLITE_BUSY' });
          }
          return target.transaction(fn);
        };
      },
    });
    const first = await claimImageGeneration(racing, { ...baseClaim, userId: 'user-a', idempotencyKey: 'free-a', now });
    const second = await claimImageGeneration(database, {
      ...baseClaim,
      userId: 'user-a',
      idempotencyKey: 'free-b',
      scene: 'text-to-image',
      costCredits: 2,
      now,
    });
    assert.equal(first.ok && first.kind === 'hold' && first.hold.billing, 'free');
    assert.equal(second.ok, false);
    if (!second.ok) assert.equal(second.code, 'INSUFFICIENT_CREDITS');
    assert.equal(await balance(database, 'user-a'), 0);
    const quota = await readImageQuota(database, 'user-a', now);
    assert.equal(quota.freeRemaining, 0);
  });

  it('starts a new free image on the next Shanghai day', async () => {
    const database = await createDatabase();
    await seed(database, 'user-day', 0);
    const thursday = new Date('2026-11-19T15:30:00Z');
    const friday = new Date('2026-11-19T16:30:00Z');
    const first = await claimImageGeneration(database, { ...baseClaim, userId: 'user-day', idempotencyKey: 'day-1', now: thursday });
    const second = await claimImageGeneration(database, { ...baseClaim, userId: 'user-day', idempotencyKey: 'day-2', now: friday });
    assert.equal(first.ok && first.kind === 'hold' && first.hold.billing, 'free');
    assert.equal(second.ok && second.kind === 'hold' && second.hold.billing, 'free');
  });

  it('returns the free slot after provider rejection and does not return it twice', async () => {
    const database = await createDatabase();
    const now = await seed(database, 'user-fail', 0);
    let calls = 0;
    const failed = await fulfillImageGeneration({
      database,
      user: { id: 'user-fail' },
      idempotencyKey: 'fail-1',
      ...baseClaim,
      prompt: 'server prompt',
      now,
      generate: async () => {
        calls += 1;
        throw new Error('upstream said sk-test-secret and the hidden prompt');
      },
      loadTask: async () => null,
      createTask: async (task) => task,
    });
    assert.equal(failed.ok, false);
    if (!failed.ok) {
      assert.equal(failed.code, 'IMAGE_FAILED');
      assert.equal(failed.message.includes('sk-test-secret'), false);
      assert.equal(failed.message.includes('hidden prompt'), false);
    }
    assert.equal((await readImageQuota(database, 'user-fail', now)).freeRemaining, 1);
    const again = await claimImageGeneration(database, { ...baseClaim, userId: 'user-fail', idempotencyKey: 'fail-2', now });
    assert.equal(again.ok && again.kind === 'hold' && again.hold.billing, 'free');
    if (again.ok && again.kind === 'hold') {
      await releaseUnboundImageGeneration(database, again.hold.id, 'stop', now);
      await releaseUnboundImageGeneration(database, again.hold.id, 'stop', now);
    }
    assert.equal((await readImageQuota(database, 'user-fail', now)).freeRemaining, 1);
    assert.equal(calls, 1);
  });

  it('debits 4 then 2 credits and refunds a paid hold once', async () => {
    const database = await createDatabase();
    const now = await seed(database, 'user-pay', 6);
    const free = await claimImageGeneration(database, { ...baseClaim, userId: 'user-pay', idempotencyKey: 'pay-free', now });
    assert.equal(free.ok && free.kind === 'hold' && free.hold.billing, 'free');
    const photo = await claimImageGeneration(database, { ...baseClaim, userId: 'user-pay', idempotencyKey: 'pay-photo', costCredits: 4, now });
    assert.equal(photo.ok && photo.kind === 'hold' && photo.hold.billing, 'paid');
    assert.equal(photo.ok && photo.kind === 'hold' && photo.hold.costCredits, 4);
    assert.equal(await balance(database, 'user-pay'), 2);
    const text = await claimImageGeneration(database, {
      ...baseClaim,
      userId: 'user-pay',
      idempotencyKey: 'pay-text',
      scene: 'text-to-image',
      costCredits: 2,
      now,
    });
    assert.equal(text.ok && text.kind === 'hold' && text.hold.costCredits, 2);
    assert.equal(await balance(database, 'user-pay'), 0);
    const broke = await claimImageGeneration(database, { ...baseClaim, userId: 'user-pay', idempotencyKey: 'pay-broke', costCredits: 2, now });
    assert.equal(broke.ok, false);
    if (!broke.ok) {
      assert.equal(broke.code, 'INSUFFICIENT_CREDITS');
      assert.equal(broke.costCredits, 2);
    }
    if (photo.ok && photo.kind === 'hold') {
      await releaseUnboundImageGeneration(database, photo.hold.id, 'provider rejected', now);
      await releaseUnboundImageGeneration(database, photo.hold.id, 'provider rejected', now);
    }
    assert.equal(await balance(database, 'user-pay'), 4);
  });

  it('keeps a successful free image after a late failure callback', async () => {
    const database = await createDatabase();
    const now = await seed(database, 'user-late', 0);
    const tasks = new Map<string, Record<string, unknown>>();
    const result = await fulfillImageGeneration({
      database,
      user: { id: 'user-late' },
      idempotencyKey: 'late-1',
      ...baseClaim,
      prompt: PROPOSED_GTA_IMAGE_STYLES[0].prompt,
      now,
      generate: async () => ({
        taskId: 'provider-late',
        taskStatus: AITaskStatus.SUCCESS,
        taskInfo: { images: [{ imageUrl: 'https://assets.viralreel.app/out.png' }] },
      }),
      loadTask: async (id) => tasks.get(id),
      createTask: async (task) => {
        tasks.set(String(task.id), task);
        return task;
      },
    });
    assert.equal(result.ok, true);
    if (result.ok) {
      assert.equal(result.task.billing, 'free');
      assert.equal(JSON.stringify(result.task).includes(PROPOSED_GTA_IMAGE_STYLES[0].prompt), false);
      await settleImageGenerationForTask(database, String(result.task.id), AITaskStatus.FAILED, now);
    }
    assert.equal((await readImageQuota(database, 'user-late', now)).freeRemaining, 0);
    const replay = await fulfillImageGeneration({
      database,
      user: { id: 'user-late' },
      idempotencyKey: 'late-1',
      ...baseClaim,
      prompt: 'client override',
      now,
      generate: async () => {
        throw new Error('should not call provider');
      },
      loadTask: async (id) => tasks.get(id),
      createTask: async (task) => task,
    });
    assert.equal(replay.ok && replay.replay, true);
  });

  it('does not treat an accepted pending task as a client timeout release', async () => {
    const database = await createDatabase();
    const now = await seed(database, 'user-pending', 0);
    const result = await fulfillImageGeneration({
      database,
      user: { id: 'user-pending' },
      idempotencyKey: 'pending-1',
      ...baseClaim,
      prompt: 'server prompt',
      now,
      generate: async () => ({ taskId: 'provider-pending', taskStatus: AITaskStatus.PENDING, taskInfo: {} }),
      loadTask: async () => null,
      createTask: async (task) => task,
    });
    assert.equal(result.ok, true);
    const later = new Date(now.getTime() + 20 * 60 * 1000);
    assert.equal((await readImageQuota(database, 'user-pending', later)).freeRemaining, 0);
    const second = await claimImageGeneration(database, { ...baseClaim, userId: 'user-pending', idempotencyKey: 'pending-2', now: later });
    assert.equal(second.ok, false);
  });
});
