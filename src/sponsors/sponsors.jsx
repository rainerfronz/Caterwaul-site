import { sponsorLevels, sponsors } from './sponsorsData';

export default function Sponsors() {
  const activeSponsors = sponsors.filter((sponsor) => sponsor.active);
  const sortedLevels = [...sponsorLevels].sort((a, b) => a.order - b.order);

  return (
    <main className="section">
      <div className="container">
        <div className="section-header">
          <div>
            <div className="eyebrow">PARTNERS</div>
            <h1 className="section-title">SPONSORS</h1>
          </div>
        </div>

        <p className="large-text sponsors-intro">
          Caterwaul happens with help from businesses, friends, and supporters
          who believe in loud, weird, community-driven music.
        </p>

        {sortedLevels.map((level) => {
          const sponsorsForLevel = activeSponsors
            .filter((sponsor) => sponsor.level === level.id)
            .sort((a, b) => a.order - b.order);

          if (sponsorsForLevel.length === 0) return null;

          return (
            <section key={level.id} className="sponsor-level-section">
              <div className="section-header sponsor-level-header">
                <div>
                  <div className="eyebrow">{level.name}</div>
                  <h2 className="section-title sponsor-level-title">
                    {level.name}
                  </h2>
                </div>
              </div>

              <p className="card-text sponsor-level-description">
                {level.description}
              </p>

              <div className="sponsors-grid">
                {sponsorsForLevel.map((sponsor) => (
                  <div key={sponsor.id} className="card sponsor-card">
                    {sponsor.logo && (
                      <img
                        src={sponsor.logo}
                        alt={sponsor.name}
                        className="sponsor-logo"
                      />
                    )}

                    <div className="card-eyebrow">{level.name}</div>
                    <h3 className="card-title sponsor-title">{sponsor.name}</h3>
                    <p className="card-text">{sponsor.blurb}</p>

                    <a
                      href={sponsor.link}
                      target="_blank"
                      rel="noreferrer"
                      className="button button-secondary sponsor-button"
                    >
                      {sponsor.cta || 'Visit Sponsor'}
                    </a>
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
}