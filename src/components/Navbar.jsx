import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Book', href: '#book' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <a href="#hero" className="navbar__logo">
          <img src="/logo.png" alt="SB" className="navbar__logo-img" />
        </a>

        <ul className="navbar__links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="navbar__link">{link.label}</a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="navbar__cta">Get in Touch</a>

        <button
          className="navbar__toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className={`navbar__mobile ${mobileOpen ? 'navbar__mobile--open' : ''}`}>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="navbar__mobile-link"
            onClick={() => setMobileOpen(false)}
          >
            {link.label}
          </a>
        ))}
      </div>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 24px 32px;
          transition: all var(--transition);
        }
        .navbar--scrolled {
          background: rgba(10, 10, 10, 0.9);
          backdrop-filter: blur(24px) saturate(1.2);
          border-bottom: 1px solid var(--color-border-subtle);
          padding: 16px 32px;
        }
        .navbar__inner {
          max-width: var(--max-width);
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .navbar__logo {
          display: flex;
          align-items: center;
        }
        .navbar__logo-img {
          height: 56px;
          width: auto;
          transition: opacity var(--transition);
        }
        .navbar__logo:hover .navbar__logo-img {
          opacity: 0.8;
        }
        .navbar__links {
          display: flex;
          gap: 4px;
        }
        .navbar__link {
          font-size: 0.82rem;
          font-weight: 500;
          color: var(--color-text-muted);
          padding: 8px 16px;
          border-radius: 100px;
          transition: all var(--transition);
          letter-spacing: 0.01em;
        }
        .navbar__link:hover {
          color: var(--color-text);
          background: rgba(255,255,255,0.05);
        }
        .navbar__cta {
          font-size: 0.82rem;
          font-weight: 600;
          color: #000;
          background: var(--color-accent);
          padding: 10px 24px;
          border-radius: 100px;
          transition: all var(--transition);
        }
        .navbar__cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 24px rgba(200, 255, 0, 0.2);
        }
        .navbar__toggle {
          display: none;
          color: var(--color-text);
        }
        .navbar__mobile {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: var(--color-bg, #0a0a0a);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 8px;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
          z-index: 998;
        }
        .navbar__mobile--open {
          opacity: 1;
          pointer-events: all;
        }
        .navbar__mobile-link {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--color-text-secondary);
          padding: 14px 24px;
          transition: color var(--transition);
          font-family: var(--font-display);
          letter-spacing: 0.02em;
        }
        .navbar__mobile-link:hover {
          color: var(--color-accent);
        }
        @media (max-width: 900px) {
          .navbar__links, .navbar__cta { display: none; }
          .navbar__toggle { display: block; z-index: 1001; }
          .navbar { padding: 16px 20px; }
          .navbar--scrolled { padding: 12px 20px; }
          .navbar__logo-img { height: 40px; }
        }
      `}</style>
    </nav>
  )
}
