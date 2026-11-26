CREATE TABLE IF NOT EXISTS package_stats (
  slug TEXT PRIMARY KEY,
  total_downloads INTEGER NOT NULL DEFAULT 0,
  updated_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS weekly_downloads (
  slug TEXT NOT NULL,
  week_start TEXT NOT NULL,
  downloads INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (slug, week_start)
);

CREATE TABLE IF NOT EXISTS contact_messages (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TEXT NOT NULL
);
