import { useState } from 'react'

export default function ContactForm() {
  const [state, setState] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)

  async function submit(e) {
    e.preventDefault()
    setStatus('loading')

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(state),
    })

    if (res.ok) {
      setStatus('success')
      setState({ name: '', email: '', message: '' })
    } else {
      setStatus('error')
    }
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <input
        placeholder="Your name"
        value={state.name}
        onChange={(e) => setState({ ...state, name: e.target.value })}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={state.email}
        onChange={(e) => setState({ ...state, email: e.target.value })}
        required
      />
      <textarea
        rows={6}
        placeholder="How can we help?"
        value={state.message}
        onChange={(e) => setState({ ...state, message: e.target.value })}
        required
      />

      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <button className="btn btn-primary" type="submit">Send message</button>
        <a className="btn btn-ghost" href="tel:07872301729">Call 07872 301729</a>
      </div>

      {status === 'success' && <p style={{ color: 'green', marginTop: 12 }}>Thanks — we will be in touch shortly.</p>}
      {status === 'error' && <p style={{ color: 'crimson', marginTop: 12 }}>Sorry, something went wrong. Try again later.</p>}
    </form>
  )
}
