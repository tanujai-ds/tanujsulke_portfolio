import React, { useState } from 'react'
import SectionHeader from '../components/SectionHeader'
import Reveal from '../components/Reveal'
import Footer from '../components/Footer'
import AuroraBackground from '../components/AuroraBackground'

const internships = [
  {
    id: 1,
    role: 'AI-ML Virtual Internship',
    company: 'EduSkills (AICTE + Google for Developers)',
    location: 'Virtual',
    type: 'Virtual Internship',
    period: 'Jul 2025 – Sep 2025',
    duration: '10 Weeks',
    desc: 'Completed a structured AI-ML internship focused on practical machine learning workflows and real-world problem solving through guided projects and hands-on tasks.',
    achievements: [
      'Applied machine learning concepts to real-world problems',
      'Gained exposure to AI workflows and model development',
      'Worked on AI-based tasks and problem-solving',
    ],
    tags: ['Machine Learning', 'AI Workflows', 'Model Development', 'Problem Solving'],
  },
  {
    id: 2,
    role: 'Artificial Intelligence Internship',
    company: 'SkillDzire',
    location: 'Virtual',
    type: 'Virtual Internship',
    period: 'Jul 21, 2025 – Aug 16, 2025',
    duration: '4 Weeks',
    desc: 'Completed an AI internship program affiliated with Dr. Babasaheb Ambedkar Technological University, with a strong focus on AI fundamentals and practical implementation.',
    achievements: [
      'Learned core AI concepts and implementation',
      'Hands-on exposure to AI tools and techniques',
    ],
    tags: ['Artificial Intelligence', 'AI Tools', 'AI Techniques', 'Implementation'],
  },
  {
    id: 3,
    role: 'Java Full Stack Developer Virtual Internship',
    company: 'EduSkills (AICTE National Internship Portal)',
    location: 'Virtual',
    type: 'Virtual Internship',
    period: 'Jan 2026 – Mar 2026',
    duration: '10 Weeks',
    desc: 'Completed a full stack development internship using Java, working on end-to-end application development and integration across frontend and backend systems.',
    achievements: [
      'Developed full stack applications using Java',
      'Worked on frontend and backend integration',
      'Understood real-world software development workflows',
    ],
    tags: ['Java', 'Full Stack Development', 'Frontend Integration', 'Backend Integration'],
  },
  {
    id: 4,
    current: true,
    role: 'Web Developer Intern (Current)',
    company: 'NovaPex Info Hub',
    location: 'Remote · Ravet, Pune',
    type: 'Remote Internship',
    period: 'Present',
    duration: 'Current',
    desc: 'Currently working as a Web Developer Intern, contributing to real-world projects by developing and maintaining web applications while collaborating across frontend and backend tasks.',
    achievements: [
      'Developing and maintaining web applications',
      'Building responsive UI using modern web technologies',
      'Working on real-world client projects',
      'Collaborating with team on frontend/backend tasks',
    ],
    tags: ['Web Development', 'Responsive UI', 'Frontend', 'Backend', 'Client Projects', 'Team Collaboration'],
  },
]

export default function InternshipPage() {
  const [expanded, setExpanded] = useState(4)
  const ordered = [...internships].sort((a, b) => Number(Boolean(b.current)) - Number(Boolean(a.current)))

  return (
    <>
      <style>{`
        .intern-page { position: relative; background: var(--bg); padding-top: calc(var(--nav-h) + 46px); min-height: 100vh; overflow: clip; }
        .intern-page .container { position: relative; z-index: 1; }

        .timeline { display: flex; flex-direction: column; gap: 16px; margin-bottom: 90px; }

        .t-item {
          border: 1px solid var(--border);
          border-radius: var(--r-lg);
          overflow: hidden;
          background: var(--surface);
          transition: border-color 0.25s;
        }
        .t-item.current { border-color: var(--border-accent); box-shadow: 0 0 0 1px var(--border-accent), 0 20px 50px rgba(207,255,61,0.08); }

        .t-header {
          padding: 26px 28px;
          display: flex; justify-content: space-between; align-items: flex-start;
          gap: 20px;
          cursor: pointer;
        }

        .t-period-row { display: flex; align-items: center; gap: 10px; margin-bottom: 14px; flex-wrap: wrap; }
        .t-period {
          font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase;
          color: var(--accent);
          background: var(--accent-soft);
          padding: 5px 12px; border-radius: var(--r-pill);
        }
        .current-pill {
          font-size: 10px; letter-spacing: 0.1em; text-transform: uppercase;
          color: var(--accent-ink);
          background: var(--accent);
          padding: 5px 11px; border-radius: var(--r-pill);
          font-weight: 700;
        }

        .t-role { font-family: var(--font-heading); font-size: clamp(19px, 2.2vw, 24px); font-weight: 700; color: var(--ink); margin-bottom: 4px; }
        .t-company { font-size: 13.5px; color: var(--muted); }

        .t-meta { text-align: right; flex-shrink: 0; }
        .t-type { font-size: 11px; color: var(--muted-2); letter-spacing: 0.06em; text-transform: uppercase; margin-bottom: 8px; }
        .t-duration { font-family: var(--font-display); font-size: 26px; font-weight: 700; color: var(--ink-dim); line-height: 1; }

        .t-body { overflow: hidden; transition: max-height 0.5s var(--ease), opacity 0.4s; border-top: 1px solid var(--border); }
        .t-body.open { max-height: 700px; opacity: 1; }
        .t-body.closed { max-height: 0; opacity: 0; border-top: none; }
        .t-body-inner { padding: 28px; display: grid; grid-template-columns: 1fr 1fr; gap: 36px; }
        .t-desc { font-size: 14px; color: var(--ink-dim); line-height: 1.85; margin-bottom: 22px; }
        .t-achievements h4, .t-tags-section h4 { font-size: 11px; letter-spacing: 0.16em; text-transform: uppercase; color: var(--accent); margin-bottom: 14px; }
        .t-ach-item { display: flex; gap: 10px; align-items: flex-start; font-size: 13px; color: var(--ink-dim); margin-bottom: 10px; }
        .t-ach-item::before { content: '→'; color: var(--accent); flex-shrink: 0; }
        .t-tags { display: flex; flex-wrap: wrap; gap: 8px; }
        .t-tag { background: rgba(255,255,255,0.03); border: 1px solid var(--border); color: var(--ink-dim); font-size: 11px; padding: 6px 12px; border-radius: var(--r-pill); }

        .expand-btn {
          display: flex; align-items: center; gap: 6px;
          color: var(--accent); font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase;
          margin-top: 12px; margin-left: auto;
        }
        .expand-btn:hover { opacity: 0.75; }

        @media (max-width: 768px) {
          .t-header { flex-direction: column; }
          .t-meta { text-align: left; }
          .t-body-inner { grid-template-columns: 1fr; padding: 24px 22px; }
          .t-header { padding: 22px; }
        }
      `}</style>

      <div className="intern-page">
        <AuroraBackground variant="cool" />
        <div className="container">
          <SectionHeader
            label="Experience"
            title="Internships"
            desc="Hands-on roles across AI/ML, full-stack development, and live client projects."
          />

          <div className="timeline">
            {ordered.map((item, i) => (
              <Reveal key={item.id} delay={i * 90}>
                <div className={`t-item ${item.current ? 'current' : ''}`}>
                  <div className="t-header" onClick={() => setExpanded(expanded === item.id ? null : item.id)}>
                    <div>
                      <div className="t-period-row">
                        <div className="t-period">{item.period}</div>
                        {item.current && <span className="current-pill">Current</span>}
                      </div>
                      <div className="t-role">{item.role}</div>
                      <div className="t-company">{item.company} · {item.location}</div>
                    </div>
                    <div className="t-meta">
                      <div className="t-type">{item.type}</div>
                      <div className="t-duration">{item.duration}</div>
                      <button className="expand-btn">{expanded === item.id ? '− Less' : '+ More'}</button>
                    </div>
                  </div>

                  <div className={`t-body ${expanded === item.id ? 'open' : 'closed'}`}>
                    <div className="t-body-inner">
                      <div>
                        <p className="t-desc">{item.desc}</p>
                        <div className="t-achievements">
                          <h4>Key Achievements</h4>
                          {item.achievements.map((a) => <div key={a} className="t-ach-item">{a}</div>)}
                        </div>
                      </div>
                      <div className="t-tags-section">
                        <h4>Technologies Used</h4>
                        <div className="t-tags">{item.tags.map((t) => <span key={t} className="t-tag">{t}</span>)}</div>
                      </div>
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
