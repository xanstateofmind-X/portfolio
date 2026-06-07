const experiences = [
  {
    role: 'Head of Growth Marketing',
    company: 'Triplespeed',
    logo: '/logo-triplespeed.png',
    period: 'Nov 2025 - May 2026',
    description: 'Drove US Market Expansion, contributing to ARR growth from $10M to $100M. Orchestrated cross-platform influencer campaigns generating 100M+ views/month. Automated lead generation pipelines and managed departmental finances including international crypto payments.',
    highlights: ['Growth Strategy', 'Influencer Marketing', 'Paid Media', 'Meta Ads'],
  },
  {
    role: 'Long-form Content Writer',
    company: 'Plivo',
    logo: '/logo-plivo.png',
    period: 'Mar 2025 - Nov 2025',
    description: 'Partnered with Caleb Friesen to produce high-retention, long-form video scripts on AI industry trends. Drove brand visibility on X through shareable content and technical visual assets.',
    highlights: ['AI Content', 'Brand Strategy', 'Long-form Writing', 'Technical Writing'],
  },
  {
    role: 'Junior Sub Editor',
    company: 'DashVerse',
    logo: '/logo-dashverse.png',
    period: '2024 - 2025',
    description: 'Scripted engaging comic panels and narrative arcs for a series spanning 600+ episodes. Authored screenplays and refined story pacing, character development, and dialogue.',
    highlights: ['Screenwriting', 'Comic Scripting', 'Narrative Design', 'Story Editing'],
  },
  {
    role: 'Video Script Writer',
    company: 'We Move Solutions',
    logo: '/logo-wemove.png',
    period: '2023 - 2024',
    description: 'Wrote interactive video scripts for office awareness and POSH-related scenarios, creating engaging educational content for workplace environments.',
    highlights: ['Video Scripting', 'Corporate Training', 'Educational Content'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="exp">
        <span className="section-label reveal">Experience</span>
        <h2 className="section-title reveal stagger-1">Where I've<br /><em>made impact</em></h2>

        <div className="exp__list">
          {experiences.map((exp, i) => (
            <div className={`exp__item reveal stagger-${i + 2}`} key={i}>
              <div className="exp__left">
                <span className="exp__period">{exp.period}</span>
                {exp.logo && (
                  <img src={exp.logo} alt={exp.company} className="exp__logo" />
                )}
              </div>
              <div className="exp__line">
                <div className="exp__dot" />
              </div>
              <div className="exp__right">
                <h3 className="exp__role">
                  {exp.role}
                  {exp.badge && <span className="exp__badge">{exp.badge}</span>}
                </h3>
                <span className="exp__company">{exp.company}</span>
                <p className="exp__desc">{exp.description}</p>
                <div className="exp__tags">
                  {exp.highlights.map((tag) => (
                    <span className="exp__tag" key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .exp .section-title em {
          color: var(--color-accent);
          font-style: italic;
        }
        .exp .section-title {
          margin-bottom: 56px;
        }
        .exp__list {
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .exp__item {
          display: grid;
          grid-template-columns: 160px 40px 1fr;
          gap: 0;
          padding: 32px 0;
          border-bottom: 1px solid var(--color-border);
          transition: all var(--transition);
        }
        .exp__item:first-child {
          border-top: 1px solid var(--color-border);
        }
        .exp__item:hover {
          background: var(--color-bg-card);
          padding-left: 20px;
          padding-right: 20px;
          margin-left: -20px;
          margin-right: -20px;
          border-radius: var(--border-radius);
        }
        .exp__left {
          padding-top: 4px;
        }
        .exp__period {
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--color-text-muted);
          letter-spacing: 0.02em;
        }
        .exp__logo {
          width: 80px;
          height: 80px;
          object-fit: contain;
          border-radius: 14px;
          margin-top: 16px;
          opacity: 0.9;
          transition: opacity var(--transition), transform var(--transition);
        }
        .exp__item:hover .exp__logo {
          opacity: 1;
          transform: scale(1.05);
        }
        .exp__line {
          display: flex;
          justify-content: center;
          position: relative;
        }
        .exp__dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--color-accent);
          margin-top: 8px;
          position: relative;
          z-index: 1;
        }
        .exp__line::before {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          left: 50%;
          width: 1px;
          background: var(--color-border);
          transform: translateX(-50%);
        }
        .exp__item:first-child .exp__line::before { top: 8px; }
        .exp__item:last-child .exp__line::before { bottom: calc(100% - 20px); }
        .exp__role {
          font-size: 1.15rem;
          font-weight: 700;
          margin-bottom: 4px;
          letter-spacing: -0.01em;
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }
        .exp__badge {
          font-size: 0.65rem;
          font-weight: 600;
          color: var(--color-accent);
          background: var(--color-accent-dim);
          padding: 3px 10px;
          border-radius: 100px;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }
        .exp__company {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--color-accent);
          display: block;
          margin-bottom: 12px;
        }
        .exp__desc {
          font-size: 0.92rem;
          color: var(--color-text-secondary);
          line-height: 1.7;
          margin-bottom: 16px;
        }
        .exp__tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .exp__tag {
          font-size: 0.7rem;
          font-weight: 600;
          color: var(--color-accent);
          background: var(--color-accent-dim);
          padding: 4px 14px;
          border-radius: 100px;
          letter-spacing: 0.02em;
        }
        @media (max-width: 768px) {
          .exp .section-title { margin-bottom: 36px; }
          .exp__item {
            display: grid;
            grid-template-columns: 36px 1fr auto;
            grid-template-areas:
              "logo company period"
              "role role role"
              "desc desc desc"
              "tags tags tags";
            column-gap: 12px;
            row-gap: 4px;
            padding: 24px 0;
          }
          .exp__line { display: none; }
          .exp__left {
            display: contents;
            padding-top: 0;
          }
          .exp__right {
            display: contents;
          }
          .exp__logo {
            grid-area: logo;
            width: 36px;
            height: 36px;
            margin-top: 0;
            border-radius: 8px;
            align-self: center;
          }
          .exp__company {
            grid-area: company;
            font-size: 0.9rem;
            margin-bottom: 0;
            align-self: center;
          }
          .exp__period {
            grid-area: period;
            color: var(--color-text-muted);
            font-size: 0.68rem;
            display: flex;
            align-items: center;
            justify-self: end;
          }
          .exp__role {
            grid-area: role;
            font-size: 0.95rem;
            flex-wrap: wrap;
            margin-bottom: 0;
            align-self: center;
          }
          .exp__desc {
            grid-area: desc;
            font-size: 0.84rem;
            line-height: 1.65;
            margin-bottom: 12px;
            text-align: justify;
          }
          .exp__tags {
            grid-area: tags;
            gap: 6px;
          }
          .exp__tag {
            font-size: 0.62rem;
            padding: 3px 10px;
          }
          .exp__item:hover {
            padding-left: 0;
            padding-right: 0;
            margin-left: 0;
            margin-right: 0;
          }
        }
      `}</style>
    </section>
  )
}
