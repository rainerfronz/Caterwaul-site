import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { title, excerpt, body, published = true, secret } = req.body;

    if (secret !== process.env.ADMIN_SECRET) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    if (!title || !body) {
      return res.status(400).json({ error: 'Title and body are required' });
    }

    const slug = slugify(title);

    const result = await pool.query(
      `
      insert into news_posts (title, slug, excerpt, body, published)
      values ($1, $2, $3, $4, $5)
      returning id, title, slug, excerpt, body, published, created_at
      `,
      [title, slug, excerpt || null, body, published]
    );

    return res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error creating news post:', error);
    return res.status(500).json({ error: 'Failed to create post' });
  }
}