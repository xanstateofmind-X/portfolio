const experiences = [
  {
    role: 'Head of Growth Marketing',
    company: 'Triplespeed',
    period: '2024 - Present',
    description: 'Drove US Market Expansion, contributing to ARR growth from $10M to $100M. Orchestrated cross-platform influencer campaigns generating 100M+ views/month. Automated lead generation pipelines and managed departmental finances including international crypto payments.',
    highlights: ['Growth Strategy', 'Influencer Marketing', 'Paid Media', 'Meta Ads'],
  },
  {
    role: 'Long-form Content Writer',
    company: 'Plivo',
    period: '2024 - Present',
    description: 'Partnered with Caleb Friesen to produce high-retention, long-form video scripts on AI industry trends. Drove brand visibility on X through shareable content and technical visual assets.',
    highlights: ['AI Content', 'Brand Strategy', 'Long-form Writing', 'Technical Writing'],
  },
  {
    role: 'Video Script Writer',
    company: 'We Move Solutions',
    period: '2017 - 2019',
    description: 'Wrote interactive video scripts for office awareness and POSH-related scenarios, creating engaging educational content for workplace environments.',
    highlights: ['Video Scripting', 'Corporate Training', 'Educational Content'],
  },
  {
    role: 'Junior Sub Editor',
    company: 'DashVerse',
    period: '2017 - 2019',
    description: 'Scripted engaging comic panels and narrative arcs for a series spanning 600+ episodes. Authored screenplays and refined story pacing, character development, and dialogue.',
    highlights: ['Screenwriting', 'Comic Scripting', 'Narrative Design', 'Story Editing'],
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
              </div>
              <div className="exp__line">
                <div className="exp__dot" />
              </div>
              <div className="exp__right">
                <h3 className="exp__role">{exp.role}</h3>
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
        @media (max-width: 600px) {
          .exp__item {
            grid-template-columns: 1fr;
            gap: 8px;
          }
          .exp__line { display: none; }
          .exp__period {
            color: var(--color-accent);
          }
        }
      `}</style>
    </section>
  )
}
