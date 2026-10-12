import Layout from '../components/Layout'

export default function Services() {
  return (
    <Layout>
      <section className="section container">
        <div className="section-heading">
          <h2>Services</h2>
          <p>Full range of property services for homeowners and landlords.</p>
        </div>

        <div className="services-grid">
          <div className="card">
            <h3>Emergency Plumbing</h3>
            <p>Fast response and reliable repairs.</p>
          </div>
          <div className="card">
            <h3>Boiler Servicing</h3>
            <p>Safety checks and routine maintenance.</p>
          </div>
          <div className="card">
            <h3>Installations</h3>
            <p>New bathroom and heating installations.</p>
          </div>
          <div className="card">
            <h3>Maintenance</h3>
            <p>Planned maintenance to keep systems efficient.</p>
          </div>
        </div>
      </section>
    </Layout>
  )
}
