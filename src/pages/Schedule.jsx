import { Link } from 'react-router-dom';
import { bands } from '../data/bandsData';

const days = [
  {
    label: 'Friday, June 5',
    doorsTime: '6:00 PM',
  },
  {
    label: 'Saturday, June 6',
    doorsTime: '11:00 AM',
  },
  {
    label: 'Sunday, June 7',
    doorsTime: '11:00 AM',
  },
];

function timeToNumber(time) {
  const [rawHour, rest] = time.split(':');
  const minutes = rest.slice(0, 2);
  const period = rest.slice(3);

  let hour = Number(rawHour);

  if (period === 'PM' && hour !== 12) hour += 12;
  if (period === 'AM' && hour === 12) hour = 0;

  return hour * 60 + Number(minutes);
}

export default function Schedule() {
  return (
    <main className="schedule-page">
      <section className="schedule-hero">
        <p className="eyebrow">Caterwaul 2026</p>
        <h1>Schedule</h1>

        <p>
          Three days of loud, weird, heavy, necessary music in Minneapolis.
          Times are subject to change.
        </p>

        <Link to="/site" className="back-link">
          ← Back to home
        </Link>
      </section>

      <section className="schedule-list">
        {days.map((day) => {
          const dayBands = bands
            .filter((band) => band.day === day.label && band.setTime)
            .sort((a, b) => timeToNumber(a.setTime) - timeToNumber(b.setTime));

          return (
            <div className="schedule-day" key={day.label}>
              <h2>{day.label}</h2>

              <div className="set-list">
                <div className="set-row doors-row">
                  <div className="set-time">{day.doorsTime}</div>

                  <div className="set-info">
                    <h3>Doors</h3>
                    <p>Zhora Darling</p>
                  </div>
                </div>

                {dayBands.map((band) => (
                  <Link
                    to={`/bands/${band.slug}`}
                    className="set-row set-link"
                    key={band.slug}
                  >
                    <div className="set-time">{band.setTime}</div>

                    <div className="set-info">
                      <h3>{band.name}</h3>
                      <p>{band.stage || 'Stage TBA'}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
}