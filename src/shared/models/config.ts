import { revalidateTag, unstable_cache } from 'next/cache';

import { db } from '@/core/db';
import { envConfigs } from '@/config';
import { config } from '@/config/db/schema';
import { isCloudflareWorker } from '@/shared/lib/env';
import {
  getAllSettingNames,
  publicSettingNames,
} from '@/shared/services/settings';

export type Config = typeof config.$inferSelect;
export type NewConfig = typeof config.$inferInsert;
export type UpdateConfig = Partial<Omit<NewConfig, 'name'>>;

export type Configs = Record<string, string>;

export const CACHE_TAG_CONFIGS = 'configs';

export async function saveConfigs(configs: Record<string, string>) {
  const database = db();
  const configEntries = Object.entries(configs);

  // D1: use batch() to send all upserts in a single round-trip
  if (envConfigs.database_provider === 'd1') {
    const queries = configEntries.map(([name, configValue]) =>
      database
        .insert(config)
        .values({ name, value: configValue })
        .onConflictDoUpdate({
          target: config.name,
          set: { value: configValue },
        })
        .returning()
    );

    const batchResults = queries.length > 0 ? await database.batch(queries) : [];
    revalidateTag(CACHE_TAG_CONFIGS);
    return batchResults.flat();
  }

  // Other databases: use transaction for atomicity
  const result = await database.transaction(async (tx: any) => {
    const results: any[] = [];

    for (const [name, configValue] of configEntries) {
      const [upsertResult] = await tx
        .insert(config)
        .values({ name, value: configValue })
        .onConflictDoUpdate({
          target: config.name,
          set: { value: configValue },
        })
        .returning();

      results.push(upsertResult);
    }

    return results;
  });

  revalidateTag(CACHE_TAG_CONFIGS);

  return result;
}

export async function addConfig(newConfig: NewConfig) {
  const [result] = await db().insert(config).values(newConfig).returning();
  revalidateTag(CACHE_TAG_CONFIGS);

  return result;
}

async function loadConfigsFromDb(): Promise<Configs> {
  const configs: Record<string, string> = {};

  // D1 is only available inside Cloudflare Workers runtime (not during build)
  if (envConfigs.database_provider === 'd1' && !isCloudflareWorker) {
    return configs;
  }
  if (!envConfigs.database_url && envConfigs.database_provider !== 'd1') {
    return configs;
  }

  const result = await db().select().from(config);
  if (!result) {
    return configs;
  }

  for (const config of result) {
    configs[config.name] = config.value ?? '';
  }

  return configs;
}

export const getConfigs = unstable_cache(
  loadConfigsFromDb,
  ['configs'],
  {
    revalidate: 3600,
    tags: [CACHE_TAG_CONFIGS],
  }
);

// Cache-free read. unstable_cache is per-isolate on Cloudflare Workers, and
// revalidateTag() from saveConfigs() cannot reach other isolates — after an
// admin save, isolates that already cached the old snapshot keep serving it
// for up to revalidate (3600s). User-critical paths (public get-configs,
// generation, admin settings) must therefore read the DB directly.
export async function getConfigsFresh(): Promise<Configs> {
  return loadConfigsFromDb();
}

export async function getAllConfigs(fresh = false): Promise<Configs> {
  let dbConfigs: Configs = {};

  // only get configs from db in server side
  const hasDb = envConfigs.database_url || (envConfigs.database_provider === 'd1' && isCloudflareWorker);
  if (typeof window === 'undefined' && hasDb) {
    try {
      dbConfigs = fresh ? await getConfigsFresh() : await getConfigs();
    } catch (e) {
      console.log(`get configs from db failed:`, e);
      dbConfigs = {};
    }
  }

  const settingNames = await getAllSettingNames();
  settingNames.forEach((key) => {
    const upperKey = key.toUpperCase();
    // use env configs if available
    if (process.env[upperKey]) {
      dbConfigs[key] = process.env[upperKey] ?? '';
    } else if (process.env[key]) {
      dbConfigs[key] = process.env[key] ?? '';
    }
  });

  const configs = {
    ...envConfigs,
    ...dbConfigs,
  };

  return configs;
}

export async function getPublicConfigs(fresh = false): Promise<Configs> {
  let allConfigs = await getAllConfigs(fresh);

  const publicConfigs: Record<string, string> = {};

  // get public configs
  for (const key in allConfigs) {
    if (publicSettingNames.includes(key)) {
      publicConfigs[key] = String(allConfigs[key]);
    }
  }

  const configs = {
    ...publicConfigs,
  };

  return configs;
}
