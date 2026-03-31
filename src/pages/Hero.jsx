import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import caterwaulImage from '../images/CATERORANGE.png';
export default function Hero() {
	const targetDate = useMemo(() => new Date('2026-06-05T00:00:00'), []);

	const getTimeLeft = () => {
		const now = new Date();
		const difference = targetDate.getTime() - now.getTime();

		if (difference <= 0) {
			return { days: 0, hours: 0, minutes: 0, seconds: 0 };
		}

		return {
			days: Math.floor(difference / (1000 * 60 * 60 * 24)),
			hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
			minutes: Math.floor((difference / 1000 / 60) % 60),
			seconds: Math.floor((difference / 1000) % 60),
		};
	};

	const [timeLeft, setTimeLeft] = useState(getTimeLeft());

	useEffect(() => {
		const timer = setInterval(() => {
			setTimeLeft(getTimeLeft());
		}, 1000);

		return () => clearInterval(timer);
	}, []);

	const countdownItems = [
		{ label: 'Days', value: timeLeft.days },
		{ label: 'Hours', value: timeLeft.hours },
		{ label: 'Minutes', value: timeLeft.minutes },
		{ label: 'Seconds', value: timeLeft.seconds },
	];

	return (
		<main className="hero">
			<div className="hero-inner">
				<Link to="/site">
					<img src={caterwaulImage} alt="Caterwaul" className="hero-logo" />
				</Link>

				<p className="hero-kicker">Minneapolis · June 5–7, 2026</p>

				<div className="countdown">
					{countdownItems.map((item) => (
						<div key={item.label} className="countdown-card">
							<div className="countdown-number">
								{String(item.value).padStart(2, '0')}
							</div>
							<div className="countdown-label">{item.label}</div>
						</div>
					))}
				</div>

				<div className="hero-buttons">
					<Link to="/site" className="button button-primary">
						Enter Site
					</Link>
					<a
						href="https://ticketstripe.com/caterwaul2026"
						className="button button-secondary">
						Tickets
					</a>
				</div>
			</div>
		</main>
	);
}
