import { ExternalLink, Folder } from 'lucide-react'

const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
  </svg>
)

const projects = [
  {
    title: 'Playo Sports Venue Booking Automation',
    description: 'Automated Python script using Playwright to book sports venues on Playo.co, triggered via Slack. Handles complete booking flow - auth, venue finding, time slots, court selection, checkout. Runs locally on your device.',
    tags: ['Python', 'Playwright', 'Slack', 'Automation', 'Local App'],
    github: 'https://github.com/xanstateofmind-X/playo-booking-automation',
    live: null,
  },
  {
    title: 'FitMaxx - AI Form Analyzer',
    description: 'Web-based exercise form analyzer powered by Google Gemini AI. Upload workout videos/images for instant feedback with detailed scoring, strengths analysis, and personalized recommendations across 10 exercise categories.',
    tags: ['React', 'TypeScript', 'Google Gemini AI', 'Material-UI', 'Vite'],
    github: 'https://github.com/xanstateofmind-X/FitMaxx',
    live: 'https://fit-maxx.vercel.app',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="proj">
        <span className="section-label reveal">Projects</span>
        <h2 className="section-title reveal stagger-1">Things I've <em>built</em></h2>
        <p className="section-subtitle reveal stagger-2" style={{ marginBottom: 56 }}>
          Technical projects that showcase problem-solving beyond the written word.
        </p>

        <div className="proj__grid">
          {projects.map((project, i) => (
            <div className={`proj__card reveal stagger-${i + 3}`} key={i}>
              <div className="proj__card-top">
                <Folder size={32} className="proj__card-folder" />
                <div className="proj__card-links">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer"><GithubIcon /></a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer"><ExternalLink size={18} /></a>
                  )}
                </div>
              </div>
              <h3 className="proj__card-title">{project.title}</h3>
              <p className="proj__card-desc">{project.description}</p>
              <div className="proj__card-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="proj__card-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .proj .section-title em {
          color: var(--color-accent);
          font-style: italic;
        }
        .proj__grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }
        .proj__card {
          background: var(--color-bg-card);
          border: 1px solid var(--color-border);
          border-radius: var(--border-radius);
          padding: 36px 32px;
          display: flex;
          flex-direction: column;
          transition: all var(--transition);
        }
        .proj__card:hover {
          border-color: #333;
          transform: translateY(-6px);
          box-shadow: 0 20px 60px rgba(0,0,0,0.3);
        }
        .proj__card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
        }
        .proj__card-folder {
          color: var(--color-accent);
        }
        .proj__card-links {
          display: flex;
          gap: 12px;
        }
        .proj__card-links a {
          color: var(--color-text-muted);
          transition: color var(--transition);
        }
        .proj__card-links a:hover {
          color: var(--color-text);
        }
        .proj__card-title {
          font-size: 1.15rem;
          font-weight: 700;
          margin-bottom: 12px;
          letter-spacing: -0.01em;
        }
        .proj__card-desc {
          font-size: 0.9rem;
          color: var(--color-text-secondary);
          line-height: 1.7;
          flex: 1;
          margin-bottom: 24px;
        }
        .proj__card-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .proj__card-tag {
          font-size: 0.7rem;
          font-weight: 600;
          color: var(--color-text-muted);
          font-family: 'SF Mono', 'Fira Code', 'Courier New', monospace;
          letter-spacing: 0.02em;
        }
        @media (max-width: 600px) {
          .proj__grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }
          .proj__card {
            padding: 24px 20px;
          }
          .proj__title {
            font-size: 1rem;
          }
          .proj__desc {
            font-size: 0.85rem;
          }
        }
      `}</style>
    </section>
  )
}
