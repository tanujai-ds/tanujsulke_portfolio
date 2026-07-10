import React from 'react'
import SectionHeader from '../components/SectionHeader'
import Reveal from '../components/Reveal'
import Footer from '../components/Footer'
import AuroraBackground from '../components/AuroraBackground'
import ProjectCover from '../components/ProjectCover'
import MarketStatus from '../components/MarketStatus'

const projects = [
  {
    id: 1,
    title: 'Live Stock Buy/Sell Prediction',
    category: 'Machine Learning · Finance',
    year: '2026',
    description: 'A real-time stock market app that pulls live price data and generates buy/sell/hold signals from a trained prediction model, wrapped in an interactive Streamlit dashboard with live charts.',
    tags: ['Python', 'Streamlit', 'LSTM', 'Pandas', 'Data Pipeline', 'Real-time'],
    liveDemo: 'https://live-stock-prediction.streamlit.app/',
    github: 'https://github.com/tanujai-ds/live-stock-prediction',
    grad: 'linear-gradient(135deg, #ffb84f 0%, #ff6b57 100%)',
    coverType: 'stock',
    initials: 'SP',
    featured: true,
    showMarketStatus: true,
  },
  {
    id: 2,
    title: 'Mahabli Construction',
    category: 'Professional Website',
    year: '2026',
    description: 'A professional construction company website that showcases services, projects, and company profile with a responsive UI and smooth animations.',
    tags: ['React', 'JavaScript', 'CSS', 'Responsive UI', 'Animation'],
    liveDemo: 'https://construction.novapexhub.com/',
    github: 'https://github.com/tanujai-ds/mahabli-construction',
    grad: 'linear-gradient(135deg, #cfff3d 0%, #7fb800 100%)',
    coverType: 'construction',
    initials: 'MC',
  },
  {
    id: 3,
    title: 'Stronger Every Decade',
    category: 'Brand Website',
    year: '2026',
    description: 'A life coaching and fitness brand website showcasing programs, services, and content with a structured frontend and backend integration.',
    tags: ['React', 'JavaScript', 'CSS', 'Frontend', 'Backend Integration'],
    github: 'https://github.com/tanujai-ds/stronger-every-decade-website',
    grad: 'linear-gradient(135deg, #9a8bff 0%, #4f3fc7 100%)',
    coverType: 'fitness',
    initials: 'SD',
  },
  {
    id: 4,
    title: 'City Guide',
    category: 'City Explorer',
    year: '2026',
    description: 'A web application to explore city information with structured city-wise details, a clean interface, and responsive frontend practices.',
    tags: ['TypeScript', 'JavaScript', 'HTML', 'CSS', 'Responsive UI'],
    github: 'https://github.com/tanujai-ds/City-Guide-main',
    grad: 'linear-gradient(135deg, #4fd8ff 0%, #1c7fb0 100%)',
    coverType: 'city',
    initials: 'CG',
  },
]

export default function ProjectsPage() {
  return (
    <>
      <style>{`
        .projects-page { position: relative; background: var(--bg); padding-top: calc(var(--nav-h) + 46px); min-height: 100vh; overflow: clip; }
        .projects-page .container { position: relative; z-index: 1; }

        .projects-list { display: flex; flex-direction: column; gap: 20px; margin-bottom: 90px; }

        .project-row {
          display: grid;
          grid-template-columns: 300px 1fr;
          gap: 0;
          border: 1px solid var(--border);
          border-radius: var(--r-lg);
          overflow: hidden;
          background: var(--surface);
          transition: border-color 0.3s var(--ease), box-shadow 0.3s var(--ease), transform 0.3s var(--ease);
        }
        .project-row:hover { border-color: var(--border-accent); box-shadow: var(--shadow-md); transform: translateY(-3px); }

        .project-thumb {
          position: relative;
          min-height: 260px;
          display: flex; align-items: flex-end;
          padding: 24px;
          overflow: hidden;
        }
        .project-cover { position: absolute; inset: 0; }
        .project-cover-shine {
          position: absolute; inset: 0;
          background: linear-gradient(160deg, rgba(255,255,255,0.22), transparent 55%);
          mix-blend-mode: overlay;
        }
        .project-cover svg { position: absolute; inset: 0; width: 100%; height: 100%; }
        .project-thumb-initials {
          font-family: var(--font-display);
          font-size: 96px;
          font-weight: 700;
          color: rgba(8,9,11,0.16);
          line-height: 1;
        }
        .project-thumb-index {
          position: absolute; top: 20px; left: 24px;
          font-family: var(--font-display);
          font-size: 13px; font-weight: 700;
          color: rgba(8,9,11,0.55);
          letter-spacing: 0.08em;
          z-index: 1;
        }
        .project-thumb-badge {
          position: absolute; top: 18px; right: 20px; z-index: 1;
          font-size: 10px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase;
          background: rgba(8,9,11,0.82); color: var(--accent);
          padding: 6px 12px; border-radius: var(--r-pill);
          border: 1px solid rgba(207,255,61,0.4);
        }
        .project-thumb-market { position: relative; z-index: 1; }

        .project-body { padding: 32px 34px; display: flex; flex-direction: column; justify-content: center; }

        .project-meta { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-bottom: 16px; }
        .project-category {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--accent);
        }
        .project-category::before { content: ''; width: 7px; height: 7px; border-radius: 50%; background: var(--accent); }
        .project-year { font-size: 11px; letter-spacing: 0.06em; color: var(--muted); text-transform: uppercase; }

        .project-title { font-size: clamp(22px, 2.4vw, 28px); color: var(--ink); margin-bottom: 12px; }
        .project-desc { color: var(--muted); font-size: 14px; line-height: 1.8; margin-bottom: 22px; max-width: 62ch; }

        .project-tags { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 22px; }
        .project-tag {
          padding: 6px 13px; border-radius: var(--r-pill);
          border: 1px solid var(--border); background: rgba(255,255,255,0.02);
          color: var(--ink-dim); font-size: 11px; letter-spacing: 0.02em;
        }

        .project-links { display: flex; gap: 10px; flex-wrap: wrap; }
        .project-link {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 10px 18px; border-radius: var(--r-pill);
          border: 1px solid var(--border-strong);
          background: rgba(255,255,255,0.02);
          color: var(--ink); font-size: 12px; font-weight: 600; letter-spacing: 0.02em;
          text-decoration: none;
          transition: border-color 0.2s, background 0.2s, transform 0.2s;
        }
        .project-link:hover { border-color: var(--accent); background: var(--accent-soft); color: var(--accent); transform: translateY(-2px); }
        .project-link.primary { background: var(--accent); border-color: var(--accent); color: var(--accent-ink); }
        .project-link.primary:hover { background: var(--accent); color: var(--accent-ink); opacity: 0.9; }

        @media (max-width: 860px) {
          .project-row { grid-template-columns: 1fr; }
          .project-thumb { min-height: 150px; padding: 18px 20px; }
          .project-thumb-initials { font-size: 60px; }
          .project-body { padding: 26px 22px; }
        }
      `}</style>

      <div className="projects-page">
        <AuroraBackground variant="default" />
        <div className="container">
          <SectionHeader
            label="Selected Work"
            title="Projects"
            desc="A handful of real, shipped builds — from client sites to exploratory apps."
          />

          <div className="projects-list">
            {projects.map((project, i) => (
              <Reveal key={project.id} delay={i * 90}>
                <div className="project-row">
                  <div className="project-thumb">
                    <ProjectCover type={project.coverType} grad={project.grad} />
                    <span className="project-thumb-index">0{i + 1} / 0{projects.length}</span>
                    {project.featured && <span className="project-thumb-badge">Featured</span>}
                    {project.showMarketStatus && (
                      <div className="project-thumb-market">
                        <MarketStatus compact />
                      </div>
                    )}
                  </div>

                  <div className="project-body">
                    <div className="project-meta">
                      <span className="project-category">{project.category}</span>
                      <span className="project-year">{project.year}</span>
                    </div>
                    <div className="project-title">{project.title}</div>
                    <p className="project-desc">{project.description}</p>
                    <div className="project-tags">
                      {project.tags.map((tag) => <span key={tag} className="project-tag">{tag}</span>)}
                    </div>

                    <div className="project-links">
                      {project.liveDemo && (
                        <a className="project-link primary" href={project.liveDemo} target="_blank" rel="noreferrer" data-cursor-text="Visit">
                          Live Demo ↗
                        </a>
                      )}
                      {project.github && (
                        <a className="project-link" href={project.github} target="_blank" rel="noreferrer" data-cursor-text="View">
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}
