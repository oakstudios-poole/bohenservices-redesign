import Layout from '../components/Layout'

export default function Reviews() {
  return (
    <Layout>
      <section className="section container">
        <div className="section-heading">
          <h2>Customer Reviews</h2>
          <p>What our customers say.</p>
        </div>

        <div style={{ display: 'grid', gap: 20 }}>
          <div className="testimonial-card card">
            <p>“Fast, friendly and thorough.”</p>
            <strong>— A. Customer</strong>
          </div>
          <div className="testimonial-card card">
            <p>“Excellent workmanship and great communication.”</p>
            <strong>— B. Customer</strong>
          </div>
          <div className="testimonial-card card">
            <p>“Very reliable and tidy. Would recommend.”</p>
            <strong>— C. Customer</strong>
          </div>
        </div>
      </section>
    </Layout>
  )
}
