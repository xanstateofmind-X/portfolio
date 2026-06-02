import { Mail, Heart } from 'lucide-react'

const GithubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
  </svg>
)

const LinkedinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

const XIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__left">
          <a href="#hero" className="footer__logo">
            <img src="/logo.png" alt="SB" className="footer__logo-img" />
          </a>
        </div>

        <div className="footer__links">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#book">Book</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer__socials">
          <a href="https://github.com/xanstateofmind-X" target="_blank" rel="noopener noreferrer"><GithubIcon /></a>
          <a href="https://www.linkedin.com/in/sanskriti-birange-1804b02a9" target="_blank" rel="noopener noreferrer"><LinkedinIcon /></a>
          <a href="https://x.com/xanstateofmind" target="_blank" rel="noopener noreferrer"><XIcon /></a>
          <a href="mailto:sanskriti.birange@gmail.com"><Mail size={16} /></a>
        </div>
      </div>

      <div className="footer__bottom">
        <p>
          <Heart size={12} fill="currentColor" className="footer__heart" />
          Sanskriti Birange &copy; {new Date().getFullYear()}
        </p>
      </div>

      <style>{`
        .footer {
          border-top: 1px solid var(--color-border);
          padding: 48px 32px 24px;
        }
        .footer__inner {
          max-width: var(--max-width);
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 32px;
          margin-bottom: 32px;
        }
        .footer__logo {
          display: flex;
          align-items: center;
        }
        .footer__logo-img {
          height: 48px;
          width: auto;
          transition: opacity var(--transition);
        }
        .footer__logo:hover .footer__logo-img {
          opacity: 0.8;
        }
        .footer__links {
          display: flex;
          gap: 28px;
        }
        .footer__links a {
          font-size: 0.8rem;
          font-weight: 500;
          color: var(--color-text-muted);
          transition: color var(--transition);
        }
        .footer__links a:hover { color: var(--color-text); }
        .footer__socials {
          display: flex;
          gap: 8px;
        }
        .footer__socials a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 1px solid var(--color-border);
          color: var(--color-text-muted);
          transition: all var(--transition);
        }
        .footer__socials a:nth-child(1):hover {
          color: #fff;
          background: #333;
          border-color: #333;
        }
        .footer__socials a:nth-child(2):hover {
          color: #fff;
          background: #0A66C2;
          border-color: #0A66C2;
        }
        .footer__socials a:nth-child(3):hover {
          color: #fff;
          background: #000;
          border-color: #fff;
        }
        .footer__socials a:nth-child(4):hover {
          color: #fff;
          background: #EA4335;
          border-color: #EA4335;
        }
        .footer__bottom {
          max-width: var(--max-width);
          margin: 0 auto;
          padding-top: 24px;
          border-top: 1px solid var(--color-border);
          text-align: center;
        }
        .footer__bottom p {
          font-size: 0.75rem;
          color: var(--color-text-muted);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
        }
        .footer__heart { color: #ef4444; }
        @media (max-width: 768px) {
          .footer__inner {
            flex-direction: column;
            text-align: center;
          }
          .footer__links { flex-wrap: wrap; justify-content: center; }
        }
      `}</style>
    </footer>
  )
}
