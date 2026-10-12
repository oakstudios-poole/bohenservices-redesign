import Layout from '../components/Layout'
import ContactForm from '../components/ContactForm'

export default function Contact() {
  return (
    <Layout>
      <section className="section container">
        <div className="section-heading">
          <h2>Contact</h2>
          <p>Get a free quote or request emergency support.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: 24 }}>
          <div className="card">
            <ContactForm />
          </div>

          <aside className="card">
            <h3>Call us</h3>
            <p><strong>07872 301729</strong></p>
            <h3 style={{ marginTop: 12 }}>Service area</h3>
            <p>Poole, Bournemouth &amp; Christchurch</p>
          </aside>
        </div>
      </section>
    </Layout>
  )
}
