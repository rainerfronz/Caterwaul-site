import { useEffect, useState } from 'react';

export default function NewsSection() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPosts() {
      try {
        const res = await fetch('/api/news');
        const data = await res.json();
        setPosts(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error('Failed to load news:', error);
      } finally {
        setLoading(false);
      }
    }

    loadPosts();
  }, []);

  if (loading) return <p>Loading news...</p>;
  if (!posts.length) return <p>No updates yet.</p>;

  return (
    <section className="news-section">
      <h2>News</h2>

      {posts.map((post) => (
        <article key={post.id} className="news-post">
          <h3>{post.title}</h3>
          <p>{new Date(post.created_at).toLocaleDateString()}</p>
          {post.excerpt && <p>{post.excerpt}</p>}
          <div style={{ whiteSpace: 'pre-wrap' }}>{post.body}</div>
        </article>
      ))}
    </section>
  );
}