import { useState } from 'react';

export default function AdminNews() {
  const [form, setForm] = useState({
    title: '',
    excerpt: '',
    body: '',
    published: true,
    secret: '',
  });
  const [status, setStatus] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('Saving...');

    try {
      const res = await fetch('/api/admin-news', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus(data.error || 'Something broke');
        return;
      }

      setStatus('Post saved.');
      setForm({
        title: '',
        excerpt: '',
        body: '',
        published: true,
        secret: '',
      });
    } catch (error) {
      console.error(error);
      setStatus('Request failed.');
    }
  }

  return (
    <div style={{ maxWidth: 760, margin: '0 auto', padding: '2rem' }}>
      <h1>Add News Post</h1>

      <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1rem' }}>
        <input
          type="text"
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />

        <input
          type="text"
          placeholder="Excerpt"
          value={form.excerpt}
          onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
        />

        <textarea
          rows="10"
          placeholder="Body"
          value={form.body}
          onChange={(e) => setForm({ ...form, body: e.target.value })}
        />

        <label>
          <input
            type="checkbox"
            checked={form.published}
            onChange={(e) => setForm({ ...form, published: e.target.checked })}
          />
          Published
        </label>

        <input
          type="password"
          placeholder="Admin secret"
          value={form.secret}
          onChange={(e) => setForm({ ...form, secret: e.target.value })}
        />

        <button type="submit">Save Post</button>
      </form>

      {status && <p style={{ marginTop: '1rem' }}>{status}</p>}
    </div>
  );
}