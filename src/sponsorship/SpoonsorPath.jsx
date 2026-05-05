import { Link } from 'react-router-dom';

export default function BecomeSponsor() {
  const sponsorLevels = [
    {
      name: 'Street Team Contributor',
      price: '$300',
      perks: [
        'Social media shout-outs',
        'Banner/logo placement',
        'Welcome packet shout-out',
        '1 complimentary event ticket',
      ],
    },
    {
      name: 'Roadie Level',
      price: '$400',
      perks: [
        'Social media shout-outs',
        'Banner/logo placement',
        'Welcome packet shout-out',
        'Signage at event',
        'Tabling opportunities at daytime events',
        'Logo and link on Caterwaul website',
        'Logo on official T-shirt',
        '2 complimentary event tickets',
      ],
    },
    {
      name: 'In the Pit Sponsor',
      price: '$1,500',
      perks: [
        'Social media shout-outs',
        'Tabling opportunities at daytime events',
        'Signage at event',
        'On-stage recognition and thank you',
        'Logo and link on Caterwaul website',
        'Link added to Caterwaul social media page(s)',
        '4 complimentary event tickets',
        'Logo on official T-shirt',
        '1 $25 merch voucher',
      ],
    },
    {
      name: 'Backstage Sponsor',
      price: '$2,500',
      perks: [
        'Social media shout-outs',
        'Tabling opportunities at daytime events',
        'Prominent logo and link on Caterwaul website',
        'Exclusive social media post and thank you',
        'On-stage recognition and thank you',
        'Logo on the Backstage Sponsors banner at the event',
        '4 complimentary event tickets',
        'Logo on official T-shirt',
        '2 $25 merch vouchers',
      ],
    },
  ];

  return (
    <main>
      <section className="sponsor-hero">
        <div className="container sponsor-hero-inner">
          <div className="badge">SUPPORT CATERWAUL</div>
          <h1 className="sponsor-hero-title">BECOME A SPONSOR</h1>

          <p className="sponsor-hero-text">
            Help keep Caterwaul loud, weird, and alive. Sponsoring the fest helps
            us continue, survive, and grow while putting your brand in front of an
            engaged crowd of musicians, artists, and attendees from Minneapolis
            and far beyond.
          </p>

          <div className="button-row">
            <a href="#contact" className="primary-button">
              Contact Us
            </a>
            <a href="#packages" className="secondary-button">
              View Packages
            </a>
            <Link to="/site" className="secondary-button">
              Back to Site
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-border-top">
        <div className="container two-col-section sponsor-lead-grid">
          <div className="card">
            <div className="card-eyebrow">WHY SPONSOR</div>
            <p className="card-text">
              Caterwaul is a noisy rock fest held in Minneapolis, Minnesota on
              June 5–7. Over the course of the weekend, we welcome more than
              1,000 attendees and artists from local, national, and international
              communities. The event continues to grow in visibility within the
              independent noise, punk, and experimental music world.
            </p>
          </div>

          <div className="card">
            <div className="card-eyebrow">VENDOR OPTION</div>
            <h3 className="card-title">$200 TABLE</h3>
            <p className="card-text">
              Not looking for a full sponsorship package? You can still take part
              in Caterwaul as a vendor with a table for <strong>$200</strong>.
              This is a great fit for labels, distros, artists, makers, and small
              businesses that want to be part of the weekend.
            </p>
          </div>
        </div>
      </section>

      <section id="packages" className="section section-border-top">
        <div className="container">
          <div className="section-header sponsor-level-header">
            <div>
              <div className="eyebrow">SPONSORSHIP LEVELS</div>
              <h2 className="section-title sponsor-level-title">PACKAGES</h2>
            </div>
          </div>

          <div className="sponsors-grid">
            {sponsorLevels.map((level) => (
              <div key={level.name} className="card sponsor-card">
                <div className="card-eyebrow">{level.name}</div>
                <h3 className="card-title sponsor-title">{level.price}</h3>

                <ul className="simple-list sponsor-perks">
                  {level.perks.map((perk) => (
                    <li key={perk}>{perk}</li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="card sponsor-card">
              <div className="card-eyebrow">CUSTOM OPTION</div>
              <h3 className="card-title sponsor-title">BUILD YOUR OWN</h3>
              <p className="card-text">
                Have a different idea, service, or package in mind? Want to
                support Caterwaul in a way that is not listed above? Let’s talk.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section section-border-top">
        <div className="container">
          <div className="section-header">
            <div>
              <div className="eyebrow">GET IN TOUCH</div>
              <h2 className="section-title">SPONSOR OR VEND WITH US</h2>
            </div>
          </div>

          <div className="contact-grid">
            <div className="card">
              <div className="card-eyebrow">CONTACT</div>
              <h3 className="card-title">Rainer Fronz</h3>
              <p className="card-text">
                <a href="tel:6122087175">612-208-7175</a>
                <br />
                <a href="mailto:rainer@learningcurverecords.com">
                  rainer@learningcurverecords.com
                </a>
              </p>
            </div>

            <div className="card">
              <div className="card-eyebrow">CONTACT</div>
              <h3 className="card-title">Melanie Thoms</h3>
              <p className="card-text">
                <a href="tel:8043631869">804-363-1869</a>
                <br />
                <a href="mailto:melanie@learningcurverecords.com">
                  melanie@learningcurverecords.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}