import Layout from '../components/Layout'

export default function Projects() {
  return (
    <Layout>
      <section className="section container">
        <div className="section-heading">
          <h2>Projects</h2>
          <p>Selected jobs showcasing our capabilities.</p>
        </div>

        <div className="projects-grid">
          <div className="project-card card">
            <div style={{ height: 160, background: 'linear-gradient(135deg,#e6f6ff,#fff2e6)', borderRadius: 8 }}></div>
            <h3>Bathroom Refurb</h3>
            <p>Full plumbing and fitting</p>
          </div>

          <div className="project-card card">
            <div style={{ height: 160, background: 'linear-gradient(135deg,#fff2e6,#f2fff0)', borderRadius: 8 }}></div>
            <h3>Heating Upgrade</h3>
            <p>Boiler and controls replacement</p>
          </div>

          <div className="project-card card">
            <div style={{ height: 160, background: 'linear-gradient(135deg,#edf5ff,#effaf2)', borderRadius: 8 }}></div>
            <h3>Property Upgrade</h3>
            <p>General maintenance and repair work</p>
          </div>
        </div>
      </section>
    </Layout>
  )
}
