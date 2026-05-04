import { Link } from 'react-router-dom';
import { faq } from '../data/SiteData';
import { bands } from '../data/BandsData';
import NewsSection from '../components/NewsSection';
import Schedule from './Schedule';
export default function Home() {
	return (
		<main>
			<section className="section">
				<div className="container hero-grid">
					<div>
						<div className="badge">DIY / UNDERGROUND / LOUD</div>
						<h1 className="hero-title">CATERWAUL 2026</h1>
						<p className="hero-text">
							Welcome to Caterwaul. A Minneapolis gathering for underground,
							loud, weird, and genre-wrecking music.
						</p>

						<div className="button-row">
							<a
								href="https://ticketstripe.com/caterwaul2026"
								className="primary-button">
								Buy Tickets
							</a>

							<a href="#lineup" className="secondary-button">
								See Lineup
							</a>

							<Link to="/sponsors" className="secondary-button">
								Sponsors
							</Link>

							<Link to="/become-a-sponsor" className="primary-button">
								Become a Sponsor
							</Link>
						</div>
					</div>

					<div className="card-column">
						<div className="card">
							<div className="card-eyebrow">QUICK INFO</div>
							<h3 className="card-title">CATERWAUL 2026</h3>
							<p className="card-text">
								Minneapolis. DIY. International artists. Loud bands. No boring
								shit.
							</p>
						</div>

						<div className="card">
							<div className="small-grid">
								<div className="small-box">Home</div>
								<div className="small-box">Lineup</div>
								<div className="small-box">Schedule</div>
								<div className="small-box">FAQ</div>
								<div className="small-box">Press</div>
								<div className="small-box">Contact</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="section section-border-top">
				<div className="container">
					<div className="section-header">
						<div>
							<div className="eyebrow">LATEST UPDATES</div>
							<h2 className="section-title">NEWS</h2>
						</div>
					</div>

					<NewsSection />
				</div>
			</section>

			<section id="lineup" className="section section-border-top">
				<div className="container">
					<div className="section-header">
						<div>
							<div className="eyebrow">2026 ARTISTS</div>
							<h2 className="section-title">LINEUP</h2>
						</div>
						<a
							href="https://ticketstripe.com/caterwaul2026"
							className="primary-button">
							Get Passes
						</a>
					</div>

					<div className="lineup-grid">
						{bands.map((band) => (
							<Link
								key={band.slug}
								to={`/bands/${band.slug}`}
								className="band-card-link">
								<div className="band-card">{band.name}</div>
							</Link>
						))}
					</div>
				</div>
			</section>

			<section id="about" className="section section-border-top">
				<div className="container two-col-section">
					<div>
						<div className="eyebrow">ABOUT</div>
						<h2 className="section-title">DIY, INTERNATIONAL, WEIRD, LOUD.</h2>
					</div>

					<p className="large-text">
						Caterwaul is a Minneapolis music gathering focused on underground
						artists, community, and bands that do not fit neatly into one lane.
					</p>
				</div>
			</section>

			<section id="faq" className="section section-border-top">
				<div className="faq-wrap">
					<div className="eyebrow">HELPFUL INFO</div>
					<h2 className="section-title">FAQ</h2>

					<div className="faq-list">
						{faq.map((item) => (
							<div key={item.question} className="faq-card">
								<div className="faq-question">{item.question}</div>
								<div className="faq-answer">{item.answer}</div>
							</div>
						))}
					</div>
				</div>
			</section>

			<section id="contact" className="section section-border-top">
				<div className="container contact-grid">
					<div className="card">
						<div className="card-eyebrow">PRESS / BOOKING / GENERAL</div>
						<h3 className="card-title">CONTACT</h3>
						<p className="card-text">
							Email: curvesandwaves@caterwaul.org
							<br />
							Instagram: @caterwaulfest
						</p>
					</div>

					<div className="card">
						<div className="card-eyebrow">MERCH</div>
						<h3 className="card-title">SHOP STATUS</h3>
						<p className="card-text">Coming Soon.</p>
					</div>
				</div>
			</section>
		</main>
	);
}
