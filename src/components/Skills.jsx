import { PenTool, Megaphone, Mic, Users, Sparkles } from 'lucide-react'

const skillCategories = [
  {
    icon: PenTool,
    title: 'Creative Writing',
    skills: ['Screenwriting', 'Long-form Scripts', 'Comic Scripting', 'Short Stories', 'Ad Copy', 'Narrative Design'],
  },
  {
    icon: Megaphone,
    title: 'Marketing & Growth',
    skills: ['Influencer Marketing', 'Content Strategy', 'Meta Ads', 'Paid Media', 'Lead Generation', 'Brand Messaging'],
  },
  {
    icon: Mic,
    title: 'Performance',
    skills: ['Acting', 'Voice Overs', 'Voice Impersonations', 'Audio Editing', 'Video Editing'],
  },
  {
    icon: Users,
    title: 'Leadership',
    skills: ['Team Management', 'Cross-platform Campaigns', 'Agency Management', 'Departmental Finance'],
  },
  {
    icon: Sparkles,
    title: 'Content & Media',
    skills: ['Video Production', 'Social Media Management', 'Technical Visual Assets', 'Content Marketing'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="skills">
        <span className="section-label reveal">Skills & Expertise</span>
        <h2 className="section-title reveal stagger-1">What I <em>bring</em></h2>
        <p className="section-subtitle reveal stagger-2" style={{ marginBottom: 56 }}>
          The creative and strategic toolkit I use to craft compelling stories and drive measurable growth.
        </p>

        <div className="skills__grid">
          {skillCategories.map(({ icon: Icon, title, skills }, i) => (
            <div className={`skills__card reveal stagger-${(i % 6) + 1}`} key={title}>
              <div className="skills__card-icon">
                <Icon size={22} />
              </div>
              <h3 className="skills__card-title">{title}</h3>
              <div className="skills__tags">
                {skills.map((skill) => (
                  <span className="skills__tag" key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .skills .section-title em {
          color: var(--color-accent);
          font-style: italic;
        }
        .skills__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        .skills__card {
          background: var(--color-bg-card);
          border: 1px solid var(--color-border);
          border-radius: var(--border-radius);
          padding: 32px 28px;
          transition: all var(--transition);
        }
        .skills__card:hover {
          border-color: #333;
          transform: translateY(-6px);
          box-shadow: 0 20px 60px rgba(0,0,0,0.3);
        }
        .skills__card-icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: var(--color-accent-dim);
          color: var(--color-accent);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }
        .skills__card-title {
          font-size: 0.95rem;
          font-weight: 700;
          margin-bottom: 16px;
          letter-spacing: -0.01em;
        }
        .skills__tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        .skills__tag {
          font-size: 0.75rem;
          font-weight: 500;
          color: var(--color-text-secondary);
          background: rgba(255,255,255,0.04);
          border: 1px solid var(--color-border);
          padding: 4px 12px;
          border-radius: 6px;
          transition: all var(--transition);
        }
        .skills__tag:hover {
          color: var(--color-text);
          border-color: #444;
        }
        @media (max-width: 900px) {
          .skills__grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 500px) {
          .skills__grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}
