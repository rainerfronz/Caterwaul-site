import { useMemo, useState } from 'react';

const makeSlug = (value) =>
  value
    .toLowerCase()
    .trim()
    .replace(/['"]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

export default function BandAdmin() {
  const [formData, setFormData] = useState({
    name: '',
    slug: '',
    image: '',
    bio: '',
    day: '',
    date: '',
    time: '',
    venue: '',
    website: '',
    instagram: '',
    bandcampEmbed: '',
    order: '',
    featured: false,
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((prev) => {
      const updated = {
        ...prev,
        [name]: type === 'checkbox' ? checked : value,
      };

      if (name === 'name' && !prev.slug) {
        updated.slug = makeSlug(value);
      }

      return updated;
    });
  };

  const handleGenerateSlug = () => {
    setFormData((prev) => ({
      ...prev,
      slug: makeSlug(prev.name),
    }));
  };

  const bandObjectString = useMemo(() => {
    const bandObject = {
      slug: formData.slug,
      name: formData.name,
      image: formData.image,
      bio: formData.bio,
      day: formData.day,
      date: formData.date,
      time: formData.time,
      venue: formData.venue,
      website: formData.website,
      instagram: formData.instagram,
      bandcampEmbed: formData.bandcampEmbed,
      order: Number(formData.order || 0),
      featured: formData.featured,
    };

    return JSON.stringify(bandObject, null, 2);
  }, [formData]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(`${bandObjectString},`);
      alert('Band data copied.');
    } catch (error) {
      alert('Copy failed. Copy manually from the box below.');
    }
  };

  return (
    <main className="section">
      <div className="container">
        <div className="section-header">
          <div>
            <div className="eyebrow">INTERNAL TOOL</div>
            <h1 className="section-title">BAND ENTRY</h1>
          </div>
        </div>

        <p className="large-text band-admin-intro">
          Fill this out, preview the band, then copy the generated object into
          your <code>bandsData.js</code> file.
        </p>

        <div className="band-admin-grid">
          <section className="card">
            <div className="card-eyebrow">FORM</div>

            <div className="band-form-grid">
              <label className="band-form-field">
                <span>Band Name</span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Tongue Party"
                />
              </label>

              <label className="band-form-field">
                <span>Slug</span>
                <div className="slug-row">
                  <input
                    type="text"
                    name="slug"
                    value={formData.slug}
                    onChange={handleChange}
                    placeholder="tongue-party"
                  />
                  <button
                    type="button"
                    className="secondary-button band-admin-button"
                    onClick={handleGenerateSlug}
                  >
                    Generate
                  </button>
                </div>
              </label>

              <label className="band-form-field">
                <span>Image Path</span>
                <input
                  type="text"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  placeholder="/images/bands/tongue-party.jpg"
                />
              </label>

              <label className="band-form-field band-form-field-full">
                <span>Bio</span>
                <textarea
                  name="bio"
                  value={formData.bio}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Short band bio..."
                />
              </label>

              <label className="band-form-field">
                <span>Day</span>
                <input
                  type="text"
                  name="day"
                  value={formData.day}
                  onChange={handleChange}
                  placeholder="Friday"
                />
              </label>

              <label className="band-form-field">
                <span>Date</span>
                <input
                  type="text"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  placeholder="June 5, 2026"
                />
              </label>

              <label className="band-form-field">
                <span>Time</span>
                <input
                  type="text"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  placeholder="8:30 PM"
                />
              </label>

              <label className="band-form-field">
                <span>Venue</span>
                <input
                  type="text"
                  name="venue"
                  value={formData.venue}
                  onChange={handleChange}
                  placeholder="Zhora Darling"
                />
              </label>

              <label className="band-form-field">
                <span>Website</span>
                <input
                  type="text"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  placeholder="https://bandname.com"
                />
              </label>

              <label className="band-form-field">
                <span>Instagram</span>
                <input
                  type="text"
                  name="instagram"
                  value={formData.instagram}
                  onChange={handleChange}
                  placeholder="https://instagram.com/bandname"
                />
              </label>

              <label className="band-form-field band-form-field-full">
                <span>Bandcamp Embed URL</span>
                <input
                  type="text"
                  name="bandcampEmbed"
                  value={formData.bandcampEmbed}
                  onChange={handleChange}
                  placeholder="https://bandcamp.com/EmbeddedPlayer/..."
                />
              </label>

              <label className="band-form-field">
                <span>Display Order</span>
                <input
                  type="number"
                  name="order"
                  value={formData.order}
                  onChange={handleChange}
                  placeholder="1"
                />
              </label>

              <label className="band-form-checkbox">
                <input
                  type="checkbox"
                  name="featured"
                  checked={formData.featured}
                  onChange={handleChange}
                />
                <span>Featured / headliner</span>
              </label>
            </div>
          </section>

          <section className="card">
            <div className="card-eyebrow">PREVIEW</div>

            <div className="band-admin-preview">
              {formData.image ? (
                <img
                  src={formData.image}
                  alt={formData.name || 'Band preview'}
                  className="band-admin-preview-image"
                />
              ) : (
                <div className="band-admin-image-placeholder">
                  No image yet
                </div>
              )}

              <div className="eyebrow">ARTIST</div>
              <h2 className="section-title band-admin-preview-title">
                {formData.name || 'Band Name'}
              </h2>

              <p className="card-text">
                {formData.bio || 'Band bio preview will appear here.'}
              </p>

              <div className="band-meta-card">
                <div className="band-meta-row">
                  <span className="band-meta-label">Day</span>
                  <span>{formData.day || '—'}</span>
                </div>
                <div className="band-meta-row">
                  <span className="band-meta-label">Date</span>
                  <span>{formData.date || '—'}</span>
                </div>
                <div className="band-meta-row">
                  <span className="band-meta-label">Time</span>
                  <span>{formData.time || '—'}</span>
                </div>
                <div className="band-meta-row">
                  <span className="band-meta-label">Venue</span>
                  <span>{formData.venue || '—'}</span>
                </div>
              </div>
            </div>
          </section>
        </div>

        <section className="section section-border-top">
          <div className="section-header">
            <div>
              <div className="eyebrow">OUTPUT</div>
              <h2 className="section-title">COPY THIS INTO BANDSDATA</h2>
            </div>
          </div>

          <div className="card">
            <div className="button-row">
              <button
                type="button"
                className="primary-button band-admin-button"
                onClick={handleCopy}
              >
                Copy Band Object
              </button>
            </div>

            <pre className="band-admin-output">{bandObjectString},</pre>
          </div>
        </section>
      </div>
    </main>
  );
}