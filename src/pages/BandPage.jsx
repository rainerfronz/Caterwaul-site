import { Link, useParams } from 'react-router-dom';
import { bands } from '../data/BandsData';

export default function BandPage() {
	const { slug } = useParams();
	const band = bands.find((item) => item.slug === slug);

	if (!band) {
		return (
			<main className="section">
				<div className="container">
					<div className="section-header">
						<div>
							<div className="eyebrow">NOT FOUND</div>
							<h1 className="section-title">BAND NOT FOUND</h1>
						</div>
					</div>

					<p className="large-text">That band page does not exist yet.</p>

					<Link to="/site" className="primary-button">
						Back to Lineup
					</Link>
				</div>
			</main>
		);
	}

	return (
		<main className="section">
			<div className="container">
				<div className="button-row" style={{ marginBottom: '24px' }}>
					<Link to="/site" className="secondary-button">
						Back to Lineup
					</Link>
				</div>

				<div className="band-page-grid">
					<div>
						<img src={band.image} alt={band.name} className="band-page-image" />
					</div>

					<div>
						<div className="eyebrow">ARTIST</div>
						<h1 className="section-title">{band.name}</h1>

						<p className="large-text band-page-bio">{band.bio}</p>

						<div className="band-meta-card">
							<div className="band-meta-row">
								<span className="band-meta-label">Day</span>
								<span>{band.day}</span>
							</div>
							<div className="band-meta-row">
								<span className="band-meta-label">Date</span>
								<span>{band.date}</span>
							</div>
							<div className="band-meta-row">
								<span className="band-meta-label">Time</span>
								<span>{band.time}</span>
							</div>
							<div className="band-meta-row">
								<span className="band-meta-label">Venue</span>
								<span>{band.venue}</span>
							</div>
						</div>

						<div className="button-row">
							<a
								href={band.website}
								target="_blank"
								rel="noreferrer"
								className="primary-button">
								Band Link
							</a>
						</div>
					</div>
				</div>

				<section className="section section-border-top">
					<div className="section-header">
						<div>
							<div className="eyebrow">LISTEN</div>
							<h2 className="section-title">STREAM</h2>
						</div>
					</div>

					<div className="bandcamp-wrap">
						<iframe
							title={`${band.name} Bandcamp player`}
							style={{ border: 0, width: '100%', height: '120px' }}
							src={band.bandcampEmbed}
							seamless
						/>
					</div>
				</section>
			</div>
		</main>
	);
}
