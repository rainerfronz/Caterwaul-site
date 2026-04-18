import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <main className="section">
      <div className="container" style={{ textAlign: 'center' }}>
        <div className="eyebrow">ERROR</div>
        <h1 className="section-title">404</h1>

        <p className="large-text">
          This page does not exist. You probably clicked something broken.
        </p>

        <div style={{ marginTop: '24px' }}>
          <Link to="/" className="primary-button">
            Go Home
          </Link>
        </div>
      </div>
    </main>
  );
}