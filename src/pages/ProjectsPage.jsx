import React from 'react'
import SectionHeader from '../components/SectionHeader'
import Reveal from '../components/Reveal'
import Footer from '../components/Footer'

const projects = [
  {
    id: 1,
    title: 'Construction Site (Mahabli Construction)',
    category: 'Professional Website',
    year: '2026',
    description: 'A professional construction company website that showcases services, projects, and company profile with a responsive UI and smooth animations.',
    tags: ['React', 'JavaScript', 'CSS', 'Responsive UI', 'Smooth Animations'],
    liveDemo: 'https://construction.novapexhub.com/',
    github: 'https://github.com/tanujai-ds/mahabli-construction',
  },
  {
    id: 2,
    title: 'Stronger Every Decade Website',
    category: 'Brand Website',
    year: '2026',
    description: 'A life coaching and fitness brand website showcasing programs, services, and content with a structured frontend and backend integration.',
    tags: ['React', 'JavaScript', 'CSS', 'Frontend', 'Backend Integration'],
    github: 'https://github.com/tanujai-ds/stronger-every-decade-website',
  },
  {
    id: 3,
    title: 'City Guide Website',
    category: 'City Explorer',
    year: '2026',
    description: 'A web application to explore city information with structured city-wise details, a clean interface, and responsive frontend practices.',
    tags: ['TypeScript', 'JavaScript', 'HTML', 'CSS', 'Responsive UI'],
    github: 'https://github.com/tanujai-ds/City-Guide-main',
  },
]

export default function ProjectsPage() {
  return (
    <>
      <style>{`
        .projects-page {
          background:
            radial-gradient(circle at top left, rgba(200,255,0,0.08), transparent 28%),
            linear-gradient(180deg, #0d0e10 0%, #090a0c 100%);
          padding-top: 120px;
          min-height: 100vh;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 22px;
          margin-bottom: 80px;
        }

        .project-card {
          position: relative;
          background: linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.015));
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 18px;
          padding: 30px 28px;
          overflow: hidden;
          transition: transform 0.25s var(--ease), border-color 0.25s var(--ease), box-shadow 0.25s var(--ease);
        }

        .project-card:hover {
          transform: translateY(-6px);
          border-color: rgba(200,255,0,0.28);
          box-shadow: 0 16px 32px rgba(0,0,0,0.28);
        }

        .project-card::after {
          content: '';
          position: absolute;
          inset: auto -40px -40px auto;
          width: 160px;
          height: 160px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(200,255,0,0.12), transparent 68%);
          pointer-events: none;
        }

        .project-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 20px;
        }

        .project-category {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 11px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--accent);
        }

        .project-category::before {
          content: '';
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--accent);
          box-shadow: 0 0 0 4px rgba(200,255,0,0.12);
        }

        .project-year {
          font-size: 11px;
          letter-spacing: 0.08em;
          color: var(--gray-light);
          text-transform: uppercase;
        }

        .project-title {
          font-family: var(--font-heading);
          font-size: 26px;
          line-height: 1.1;
          margin-bottom: 12px;
        }

        .project-desc {
          color: var(--gray-light);
          font-size: 14px;
          line-height: 1.8;
          margin-bottom: 22px;
        }

        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 20px;
        }

        .project-tag {
          padding: 6px 12px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.03);
          color: #d8dbd2;
          font-size: 11px;
          letter-spacing: 0.04em;
        }

        .project-links {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .project-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 9px 14px;
          border-radius: 10px;
          border: 1px solid rgba(255,255,255,0.14);
          background: rgba(255,255,255,0.04);
          color: #f2f3ef;
          font-size: 12px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          text-decoration: none;
          transition: border-color 0.2s var(--ease), transform 0.2s var(--ease), background 0.2s var(--ease);
        }

        .project-link:hover {
          transform: translateY(-2px);
          border-color: rgba(200,255,0,0.38);
          background: rgba(200,255,0,0.08);
        }

        @media (max-width: 980px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="projects-page">
        <div className="container">
          <SectionHeader label="Work" title="Projects" />

          <Reveal>
            <div className="projects-grid">
              {projects.map((project) => (
                <div key={project.id} className="project-card">
                  <div className="project-meta">
                    <span className="project-category">{project.category}</span>
                    <span className="project-year">{project.year}</span>
                  </div>
                  <div className="project-title">{project.title}</div>
                  <p className="project-desc">{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="project-tag">{tag}</span>
                    ))}
                  </div>

                  <div className="project-links">
                    {project.liveDemo && (
                      <a className="project-link" href={project.liveDemo} target="_blank" rel="noreferrer">
                        Live Demo
                      </a>
                    )}
                    {project.github && (
                      <a className="project-link" href={project.github} target="_blank" rel="noreferrer">
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
        <Footer />
      </div>
    </>
  )
}