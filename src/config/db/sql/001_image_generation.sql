-- Additive D1/SQLite migration for the GTA 6 Style image tool.
-- Apply this BEFORE the app version that serves /api/ai/generate image requests
-- from this feature. Existing video tables are not modified.
-- Safe to re-run: CREATE TABLE IF NOT EXISTS / CREATE INDEX IF NOT EXISTS.

CREATE TABLE IF NOT EXISTS image_generation (
  id text PRIMARY KEY NOT NULL,
  user_id text NOT NULL,
  idempotency_key text NOT NULL,
  day_key text NOT NULL,
  scene text NOT NULL,
  billing text NOT NULL,
  status text NOT NULL,
  provider text NOT NULL,
  model text NOT NULL,
  style_id text,
  cost_credits integer NOT NULL DEFAULT 0,
  credit_id text,
  ai_task_id text,
  error text,
  created_at integer NOT NULL,
  updated_at integer NOT NULL,
  FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE
);

CREATE UNIQUE INDEX IF NOT EXISTS uniq_image_generation_user_idem
  ON image_generation (user_id, idempotency_key);

CREATE INDEX IF NOT EXISTS idx_image_generation_ai_task
  ON image_generation (ai_task_id);

CREATE INDEX IF NOT EXISTS idx_image_generation_user_day
  ON image_generation (user_id, day_key, status);

CREATE TABLE IF NOT EXISTS image_daily_free (
  user_id text NOT NULL,
  day_key text NOT NULL,
  generation_id text NOT NULL,
  status text NOT NULL,
  task_id text,
  updated_at integer NOT NULL,
  PRIMARY KEY (user_id, day_key),
  FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_image_daily_free_generation
  ON image_daily_free (generation_id);
