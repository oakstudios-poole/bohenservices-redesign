export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { name, email, message } = req.body

    if (!name || !email || !message) {
      return res.status(422).json({ error: 'Missing fields' })
    }

    // This is a safe stub. Replace with a real email provider later.
    console.log('Contact form submission', { name, email, message })

    return res.status(200).json({ ok: true })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: 'Server error' })
  }
}
