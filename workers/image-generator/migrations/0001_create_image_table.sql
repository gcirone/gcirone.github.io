-- Migration number: 0001 	 2024-10-15T23:10:31.745Z

CREATE TABLE IF NOT EXISTS image_generated (
    id TEXT PRIMARY KEY,
    caption TEXT NOT NULL,
    image_name TEXT(50) NOT NULL,
    image_data BLOB,
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO image_generated (id, caption, image_name)
  VALUES ('5320dfc3-086c-416c-82f7-0ccc7512318d', 'test', 'file1.png');

--
