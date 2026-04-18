import dotenv from 'dotenv';
import { Pool } from 'pg';

dotenv.config({ path: '.env.local' });

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/['"]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export default async function handler(req, res) {
  const ADMIN_SECRET = process.env.ADMIN_SECRET;

  if (req.headers.authorization !== `Bearer ${ADMIN_SECRET}`) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { title, slug, excerpt, body, published } = req.body;

  if (!title || !body) {
    return res.status(400).json({ error: 'Title and body are required' });
  }

  const baseSlug = slug?.trim() ? slugify(slug) : slugify(title);
  let finalSlug = baseSlug;
  let counter = 1;

  while (true) {
    try {
      const result = await pool.query(
        `
        insert into news_posts (title, slug, excerpt, body, published)
        values ($1, $2, $3, $4, $5)
        returning id, title, slug, excerpt, body, published, created_at
        `,
        [title, finalSlug, excerpt || '', body, !!published]
      );

      return res.status(201).json(result.rows[0]);
    } catch (error) {
      if (error.code === '23505') {
        finalSlug = `${baseSlug}-${counter++}`;
      } else {
        console.error('Error creating news post:', error);
        return res.status(500).json({
          error: 'Failed to create news post',
          details: String(error),
          message: error?.message || null,
          code: error?.code || null,
        });
      }
    }
  }
}
}