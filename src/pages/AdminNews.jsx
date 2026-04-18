import { useState } from 'react';

function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/['"]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export default function AdminNews() {
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [body, setBody] = useState('');
  const [published, setPublished] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setMessage('');
    setError('');

    try {
      const res = await fetch('/api/admin-news', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer your-secret-here',
        },
        body: JSON.stringify({
          title,
          slug: slug || slugify(title),
          excerpt,
          body,
          published,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error || `HTTP ${res.status}`);
      }

      setMessage(`Post created: ${data.title}`);
      setTitle('');
      setSlug('');
      setExcerpt('');
      setBody('');
      setPublished(true);
    } catch (err) {
      console.error('Failed to create post:', err);
      setError(err.message || 'Something went wrong');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="section">
      <div className="container" style={{ maxWidth: '800px' }}>
        <div className="eyebrow">ADMIN</div>
        <h1 className="section-title">CREATE NEWS POST</h1>

        <form onSubmit={handleSubmit} className="card" style={{ display: 'grid', gap: '16px' }}>
          <div>
            <label htmlFor="title" className="card-eyebrow">TITLE</label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => {
                const nextTitle = e.target.value;
                setTitle(nextTitle);
                if (!slug) {
                  setSlug(slugify(nextTitle));
                }
              }}
              required
              style={{ width: '100%', padding: '12px' }}
            />
          </div>

          <div>
            <label htmlFor="slug" className="card-eyebrow">SLUG</label>
            <input
              id="slug"
              type="text"
              value={slug}
              onChange={(e) => setSlug(slugify(e.target.value))}
              style={{ width: '100%', padding: '12px' }}
            />
          </div>

          <div>
            <label htmlFor="excerpt" className="card-eyebrow">EXCERPT</label>
            <textarea
              id="excerpt"
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              rows={3}
              style={{ width: '100%', padding: '12px' }}
            />
          </div>

          <div>
            <label htmlFor="body" className="card-eyebrow">BODY</label>
            <textarea
              id="body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              rows={10}
              required
              style={{ width: '100%', padding: '12px' }}
            />
          </div>

          <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <input
              type="checkbox"
              checked={published}
              onChange={(e) => setPublished(e.target.checked)}
            />
            Publish immediately
          </label>

          <div>
            <button type="submit" className="primary-button" disabled={submitting}>
              {submitting ? 'Saving...' : 'Create Post'}
            </button>
          </div>

          {message && <p style={{ color: 'lime' }}>{message}</p>}
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
      </div>
    </main>
  );
}