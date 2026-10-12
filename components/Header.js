import Link from 'next/link'

export default function Header() {
  return (
    <header className="header">
      <div className="container nav">
        <div className="logo">
          BOHEN <span style={{ color: 'var(--accent-2)' }}>Services</span>
        </div>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/reviews">Reviews</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  )
}
