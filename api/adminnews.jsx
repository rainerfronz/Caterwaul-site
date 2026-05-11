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
          Authorization: 'Bearer your-secret-here',
        },
        body: JSON.stringify({
          title,
          slug: slug || slugify(title),
          excerpt,
          body,
          published,
        }),
      });

      const text = await res.text();
const data = text ? JSON.parse(text) : {};

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
      setError(err.message || 'Something went wrong');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="page-shell">
      <div className="content-card">
        <p className="card-eyebrow">Admin</p>
        <h1>Create News Post</h1>

        <form onSubmit={handleSubmit} className="admin-form">
          <div>
            <label htmlFor="title">Title</label>
            <input
              id="title"
              value={title}
              onChange={(e) => {
                const nextTitle = e.target.value;
                setTitle(nextTitle);

                if (!slug) {
                  setSlug(slugify(nextTitle));
                }
              }}
              required
            />
          </div>

          <div>
            <label htmlFor="slug">Slug</label>
            <input
              id="slug"
              value={slug}
              onChange={(e) => setSlug(slugify(e.target.value))}
            />
          </div>

          <div>
            <label htmlFor="excerpt">Excerpt</label>
            <textarea
              id="excerpt"
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              rows="3"
            />
          </div>

          <div>
            <label htmlFor="body">Body</label>
            <textarea
              id="body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              rows="10"
              required
            />
          </div>

          <label className="checkbox-row">
            <input
              type="checkbox"
              checked={published}
              onChange={(e) => setPublished(e.target.checked)}
            />
            Publish immediately
          </label>

          <button type="submit" className="primary-button" disabled={submitting}>
            {submitting ? 'Saving...' : 'Create Post'}
          </button>

          {message && <p className="success-message">{message}</p>}
          {error && <p className="error-message">{error}</p>}
        </form>
      </div>
    </main>
  );
}