import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const result = await pool.query(`
      select id, title, slug, excerpt, body, created_at
      from news_posts
      where published = true
      order by created_at desc
    `);

    return res.status(200).json(result.rows);
  } catch (error) {
    console.error('Error fetching news:', error);
    return res.status(500).json({ error: 'Failed to fetch news' });
  }
}