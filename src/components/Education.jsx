import { GraduationCap } from 'lucide-react'

const education = [
  {
    degree: 'Bachelor of Arts in Theatre Studies, English & Psychology',
    institution: 'Christ University',
    period: '2021 - 2024',
    active: false,
    description: 'A multidisciplinary degree blending performance, language, and behavioral science.',
  },
]

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="edu">
        <span className="section-label reveal">Education</span>
        <h2 className="section-title reveal stagger-1">Academic<br /><em>foundation</em></h2>

        <div className="edu__cards">
          {education.map((edu, i) => (
            <div className={`edu__card reveal stagger-${i + 2}`} key={i}>
              <div className={`edu__icon ${edu.active ? 'edu__icon--active' : ''}`}>
                <GraduationCap size={24} />
              </div>
              <div className="edu__content">
                <div className="edu__top">
                  <div>
                    <h3 className="edu__degree">{edu.degree}</h3>
                    <p className="edu__institution">{edu.institution}</p>
                  </div>
                  <span className={`edu__period ${edu.active ? 'edu__period--active' : ''}`}>
                    {edu.period}
                  </span>
                </div>
                <p className="edu__desc">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .edu .section-title em {
          color: var(--color-accent);
          font-style: italic;
        }
        .edu .section-title {
          margin-bottom: 48px;
        }
        .edu__cards {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .edu__card {
          display: flex;
          gap: 24px;
          background: var(--color-bg-card);
          border: 1px solid var(--color-border);
          border-radius: var(--border-radius);
          padding: 36px;
          transition: all var(--transition);
        }
        .edu__card:hover {
          border-color: #333;
          transform: translateY(-4px);
          box-shadow: 0 20px 60px rgba(0,0,0,0.3);
        }
        .edu__icon {
          width: 56px;
          height: 56px;
          border-radius: 16px;
          background: rgba(255,255,255,0.04);
          border: 1px solid var(--color-border);
          color: var(--color-text-muted);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .edu__icon--active {
          background: var(--color-accent-dim);
          border-color: rgba(200, 255, 0, 0.2);
          color: var(--color-accent);
        }
        .edu__content { flex: 1; }
        .edu__top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 16px;
          margin-bottom: 12px;
        }
        .edu__degree {
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: 4px;
          letter-spacing: -0.01em;
        }
        .edu__institution {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--color-accent);
        }
        .edu__period {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--color-text-muted);
          background: rgba(255,255,255,0.04);
          padding: 6px 14px;
          border-radius: 100px;
          white-space: nowrap;
          flex-shrink: 0;
          letter-spacing: 0.02em;
        }
        .edu__period--active {
          color: var(--color-accent);
          background: var(--color-accent-dim);
        }
        .edu__desc {
          font-size: 0.92rem;
          color: var(--color-text-secondary);
          line-height: 1.7;
        }
        @media (max-width: 600px) {
          .edu__card { flex-direction: column; gap: 16px; }
          .edu__top { flex-direction: column; }
        }
      `}</style>
    </section>
  )
}
