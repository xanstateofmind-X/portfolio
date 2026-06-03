import { ArrowDown, Mail } from 'lucide-react'

const GithubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
  </svg>
)

const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

const XIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__bg">
        <div className="hero__grain" />
        <div className="hero__glow hero__glow--1" />
        <div className="hero__glow hero__glow--2" />
      </div>

      <div className="hero__content">
        <div className="hero__grid">
          <div className="hero__left">
            <div className="hero__top reveal">
              <span className="hero__tag">Head of Growth Marketing</span>
              <span className="hero__tag">Influencer Marketing</span>
              <span className="hero__tag">Creator Marketing</span>
            </div>

            <h1 className="hero__name reveal stagger-1">
              Sanskriti
            </h1>
            <h1 className="hero__name hero__name--outline reveal stagger-2">
              Birange
            </h1>

            <p className="hero__metrics reveal stagger-3">
              <span className="hero__metric">100M+ monthly views</span>
              <span className="hero__metric-divider">/</span>
              <span className="hero__metric">$10M → $100M ARR</span>
            </p>

            <p className="hero__bio reveal stagger-4">
              Experienced in leading influencer and creator marketing programs end-to-end -
              sourcing US-based creators and influencers, negotiating CPM deals, managing contracts, and
              scaling campaigns across multiple apps. Skilled in building lead gen automation
              pipelines and executing paid media strategy.
            </p>

            <div className="hero__actions reveal stagger-5">
              <a href="#contact" className="hero__btn hero__btn--primary">
                Let's Talk
                <ArrowDown size={16} />
              </a>
              <a href="#experience" className="hero__btn hero__btn--ghost">
                View Experience
              </a>
            </div>

            <div className="hero__socials reveal stagger-6">
              <a href="https://github.com/xanstateofmind-X" target="_blank" rel="noopener noreferrer" className="hero__social">
                <GithubIcon />
              </a>
              <a href="https://www.linkedin.com/in/sanskriti-birange-1804b02a9" target="_blank" rel="noopener noreferrer" className="hero__social">
                <LinkedinIcon />
              </a>
              <a href="https://x.com/xanstateofmind" target="_blank" rel="noopener noreferrer" className="hero__social">
                <XIcon />
              </a>
              <a href="mailto:sanskriti.birange@gmail.com" className="hero__social">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="hero__right reveal-right stagger-2">
            <div className="hero__portrait">
              <img src="/hero-bg.png" alt="Sanskriti Birange" />
            </div>
          </div>
        </div>
      </div>


      <style>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          padding: 100px 32px 60px;
        }
        .hero__bg {
          position: absolute;
          inset: 0;
          z-index: 0;
        }
        .hero__grain {
          position: absolute;
          inset: 0;
          opacity: 0.03;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
        }
        .hero__glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(150px);
        }
        .hero__glow--1 {
          width: 600px;
          height: 600px;
          background: var(--color-accent);
          top: -200px;
          right: -150px;
          opacity: 0.06;
        }
        .hero__glow--2 {
          width: 400px;
          height: 400px;
          background: #6366f1;
          bottom: -100px;
          left: -100px;
          opacity: 0.04;
        }
        .hero__content {
          position: relative;
          z-index: 1;
          max-width: var(--max-width);
          width: 100%;
        }
        .hero__grid {
          display: grid;
          grid-template-columns: 1fr 460px;
          gap: 48px;
          align-items: center;
        }
        .hero__right {
          display: flex;
          align-items: center;
          justify-content: flex-start;
        }
        .hero__portrait {
          width: 100%;
          height: 560px;
          border-radius: 24px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.08);
          box-shadow: 0 40px 100px rgba(0,0,0,0.5);
          position: relative;
        }
        .hero__portrait::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(10,10,10,0.6) 0%, transparent 40%);
          pointer-events: none;
        }
        .hero__portrait img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(0.85) contrast(1.05);
          transition: transform 0.6s ease, filter 0.6s ease;
        }
        .hero__portrait:hover img {
          transform: scale(1.04);
          filter: brightness(0.95) contrast(1.05);
        }
        .hero__top {
          display: flex;
          gap: 12px;
          margin-bottom: 32px;
          flex-wrap: nowrap;
          white-space: nowrap;
        }
        .hero__tag {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--color-accent);
          border: 1px solid rgba(200, 255, 0, 0.25);
          padding: 6px 16px;
          border-radius: 100px;
        }
        .hero__name {
          font-family: var(--font-display);
          font-size: clamp(4rem, 11vw, 8rem);
          font-weight: 800;
          line-height: 0.92;
          letter-spacing: -0.03em;
          color: var(--color-text);
          margin: 0;
        }
        .hero__name--outline {
          color: transparent;
          -webkit-text-stroke: 2.5px var(--color-text);
          margin-bottom: 32px;
        }
        .hero__metrics {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 24px;
          flex-wrap: wrap;
        }
        .hero__metric {
          font-size: 1.3rem;
          font-weight: 800;
          color: var(--color-accent);
          letter-spacing: -0.01em;
        }
        .hero__metric-divider {
          font-size: 1.3rem;
          color: var(--color-text-muted);
          font-weight: 300;
        }
        .hero__bio {
          font-size: 1rem;
          color: var(--color-text-secondary);
          line-height: 1.8;
          max-width: 560px;
          margin-bottom: 36px;
        }
        .hero__actions {
          display: flex;
          gap: 16px;
          margin-bottom: 48px;
          flex-wrap: wrap;
        }
        .hero__btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 0.9rem;
          font-weight: 600;
          padding: 16px 32px;
          border-radius: 100px;
          transition: all var(--transition);
        }
        .hero__btn--primary {
          background: var(--color-accent);
          color: #000;
        }
        .hero__btn--primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 40px rgba(200, 255, 0, 0.25);
        }
        .hero__btn--ghost {
          color: var(--color-text);
          border: 1px solid var(--color-border);
        }
        .hero__btn--ghost:hover {
          border-color: var(--color-text);
          transform: translateY(-3px);
        }
        .hero__socials {
          display: flex;
          gap: 8px;
        }
        .hero__social {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          border: 1px solid var(--color-border);
          color: var(--color-text-secondary);
          transition: all 0.3s ease;
        }
        .hero__social:nth-child(1):hover {
          color: #fff;
          background: #333;
          border-color: #333;
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.4);
        }
        .hero__social:nth-child(2):hover {
          color: #fff;
          background: #0A66C2;
          border-color: #0A66C2;
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(10,102,194,0.35);
        }
        .hero__social:nth-child(3):hover {
          color: #fff;
          background: #000;
          border-color: #fff;
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(255,255,255,0.15);
        }
        .hero__social:nth-child(4):hover {
          color: #fff;
          background: #EA4335;
          border-color: #EA4335;
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(234,67,53,0.35);
        }
        @media (max-width: 900px) {
          .hero__grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }
          .hero__portrait {
            min-height: 400px;
            max-width: 360px;
            margin: 0 auto;
          }
        }
        @media (max-width: 768px) {
          .hero__name { font-size: clamp(3rem, 15vw, 5rem); }
        }
      `}</style>
    </section>
  )
}
