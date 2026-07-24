import { DollarSign, BookOpen, Mic } from 'lucide-react'

const stats = [
  { icon: DollarSign, value: '$10M→100M', label: 'ARR Growth', color: '#c8ff00' },
  { icon: BookOpen, value: '600+', label: 'Episodes Scripted', color: '#f59e0b' },
  { icon: Mic, value: '3', label: 'Languages', color: '#10b981' },
]

export default function About() {
  return (
    <section id="about" className="section">
      <div className="about">
        <div className="about__left">
          <span className="section-label reveal">About Me</span>
          <h2 className="section-title reveal stagger-1">
            A storyteller who<br />
            <em>drives growth</em>
          </h2>
          <p className="about__text reveal stagger-2">
            At <em>Triplespeed</em>, a high-growth app studio, I worked directly out of the
            founder's office as a generalist - owning cross-functional initiatives across
            growth, operations, and go-to-market, contributing to ARR growth from $10M to $100M.
          </p>
          <p className="about__text reveal stagger-3">
            I built lead generation automation pipelines, managed departmental finances
            including international crypto payments, and drove US market expansion strategy.
            Wore multiple hats across business development, project delivery, and
            operational execution.
          </p>
          <p className="about__text reveal stagger-4">
            Outside of work, currently building <em>Zenji</em> - an app that gamifies
            learning for children with dyslexia and dyscalculia (MVP in progress).
            Also built <em>FitMaxx</em>, an AI-powered form analyzer,
            and <em>Playo Automation</em>, a Slack-triggered venue booking bot.
            Writing my debut novel, <em>Beyond the Walls</em>.
          </p>
        </div>

        <div className="about__right">
          <div className="about__stats">
            {stats.map(({ icon: Icon, value, label, color }, i) => (
              <div className={`about__stat reveal stagger-${i + 2}`} key={label}>
                <div className="about__stat-icon" style={{ background: `${color}15`, color }}>
                  <Icon size={22} />
                </div>
                <div className="about__stat-value">{value}</div>
                <div className="about__stat-label">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .about {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 80px;
          align-items: center;
        }
        .about__text {
          font-size: 1.05rem;
          color: var(--color-text-secondary);
          line-height: 1.8;
          margin-bottom: 20px;
        }
        .about__text em {
          color: var(--color-text);
          font-style: normal;
        }
        .section-title em {
          color: var(--color-accent);
          font-style: italic;
        }
        .about__stats {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .about__stat {
          background: var(--color-bg-card);
          border: 1px solid var(--color-border);
          border-radius: var(--border-radius);
          padding: 32px 24px;
          text-align: center;
          transition: all var(--transition);
        }
        .about__stat:hover {
          transform: translateY(-6px);
          border-color: #333;
          box-shadow: 0 20px 60px rgba(0,0,0,0.3);
        }
        .about__stat-icon {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 16px;
        }
        .about__stat-value {
          font-size: 1.6rem;
          font-weight: 800;
          color: var(--color-text);
          margin-bottom: 4px;
          letter-spacing: -0.02em;
        }
        .about__stat-label {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--color-text-muted);
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }
        @media (max-width: 768px) {
          .about {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .about__text {
            font-size: 0.95rem;
            line-height: 1.7;
            text-align: justify;
          }
          .about__stat {
            padding: 24px 16px;
          }
          .about__stat-value {
            font-size: 1.3rem;
          }
        }
        @media (max-width: 480px) {
          .about__stats {
            grid-template-columns: 1fr 1fr;
            gap: 10px;
          }
          .about__stat {
            padding: 20px 12px;
          }
          .about__stat-value {
            font-size: 1.1rem;
          }
          .about__stat-label {
            font-size: 0.65rem;
          }
        }
      `}</style>
    </section>
  )
}
