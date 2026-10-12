import Layout from '../components/Layout'
import ContactForm from '../components/ContactForm'

export default function Home() {
  return (
    <Layout>
      <section className="hero">
        <div className="container">
          <div className="kicker">Trusted across Poole, Bournemouth &amp; Christchurch</div>
          <h1>
            Keeping Homes
            <span style={{ display: 'block', color: 'var(--accent-2)' }}>Running Smoothly</span>
          </h1>
          <p>
            Professional plumbing, heating and property maintenance services delivered with quality workmanship,
            honest advice and exceptional customer care.
          </p>
          <div style={{ height: 18 }} />
          <div className="cta-group">
            <a className="btn btn-primary" href="/contact">Get Free Quote</a>
            <a className="btn btn-ghost" href="tel:07872301729">Emergency Call Out</a>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="section-heading">
          <h2>Our Services</h2>
          <p>Everything your home needs from one trusted local company.</p>
        </div>

        <div className="services-grid">
          <div className="card">
            <div className="service-icon">💧</div>
            <h3>Plumbing</h3>
            <p>Repairs, leaks, installations and emergency plumbing solutions for homes and businesses.</p>
          </div>

          <div className="card">
            <div className="service-icon">🔥</div>
            <h3>Heating</h3>
            <p>Boiler servicing, system checks and heating installations handled with care and expertise.</p>
          </div>

          <div className="card">
            <div className="service-icon">🏡</div>
            <h3>Property Maintenance</h3>
            <p>Reliable maintenance support to keep properties in top condition throughout the year.</p>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="section-heading">
          <h2>Recent Work</h2>
          <p>Examples of the work we deliver across homes and properties.</p>
        </div>

        <div className="projects-grid">
          <div className="project-card">
            <div
              className="project-visual"
              style={{
                backgroundImage:
                  'url(https://images.unsplash.com/photo-1600585154033-4f1c2de8b7b4?w=1200&q=80&auto=format&fit=crop)',
              }}
            ></div>
            <div className="card" style={{ borderRadius: 0, marginTop: -12 }}>
              <h3>Bathroom Installation</h3>
              <p>Complete bathroom plumbing and fitting for a modern update.</p>
            </div>
          </div>

          <div className="project-card">
            <div
              className="project-visual"
              style={{
                backgroundImage:
                  'url(https://images.unsplash.com/photo-1600573473063-2a5b7b8d6d4a?w=1200&q=80&auto=format&fit=crop)',
              }}
            ></div>
            <div className="card" style={{ borderRadius: 0, marginTop: -12 }}>
              <h3>Boiler Replacement</h3>
              <p>Efficient heating upgrades designed for comfort and long-term savings.</p>
            </div>
          </div>

          <div className="project-card">
            <div
              className="project-visual"
              style={{
                backgroundImage:
                  'url(https://images.unsplash.com/photo-1581579183438-1c1a2d8e6f66?w=1200&q=80&auto=format&fit=crop)',
              }}
            ></div>
            <div className="card" style={{ borderRadius: 0, marginTop: -12 }}>
              <h3>Property Repairs</h3>
              <p>Responsive maintenance work to keep homes safer and more comfortable.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="section-heading">
          <h2>Customer Reviews</h2>
          <p>Feedback from homeowners and property managers we’ve helped.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 20 }}>
          <div className="testimonial-card card">
            <div style={{ color: 'var(--accent)' }}>★★★★★</div>
            <p>
              “BOHEN Services were quick, professional and honest from start to finish. The plumbing issue was fixed properly and the team was incredibly helpful.”
            </p>
            <strong>— James R.</strong>
          </div>

          <div className="testimonial-card card">
            <div style={{ color: 'var(--accent)' }}>★★★★★</div>
            <p>
              “We had a heating issue and they responded fast. The communication was excellent and the work was done to a high standard.”
            </p>
            <strong>— Sarah M.</strong>
          </div>

          <div className="testimonial-card card">
            <div style={{ color: 'var(--accent)' }}>★★★★★</div>
            <p>
              “Very reliable and tidy. We booked for a maintenance job and were impressed with the quality and professionalism throughout.”
            </p>
            <strong>— Paul T.</strong>
          </div>
        </div>
      </section>

      <section id="contact" className="section container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 420px', gap: 28 }}>
          <div>
            <h2>Get in touch</h2>
            <p style={{ color: 'var(--muted)' }}>
              We’re here to help with plumbing, heating, and maintenance needs across the local area.
            </p>
            <div style={{ height: 18 }} />
            <ContactForm />
          </div>

          <aside>
            <div className="card">
              <h3>Contact details</h3>
              <p style={{ color: 'var(--muted)' }}>Phone: <strong>07872 301729</strong></p>
              <p style={{ color: 'var(--muted)' }}>Service Area: Poole, Bournemouth &amp; Christchurch</p>
              <p style={{ color: 'var(--muted)' }}>Hours: Mon–Sat 8:00am – 6:00pm</p>
              <div style={{ height: 12 }} />
              <a className="btn btn-primary" href="tel:07872301729">Call Now</a>
            </div>
          </aside>
        </div>
      </section>
    </Layout>
  )
}
