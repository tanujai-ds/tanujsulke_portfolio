import React, { useState } from 'react'
import SectionHeader from '../components/SectionHeader'
import Reveal from '../components/Reveal'
import Footer from '../components/Footer'

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
    color: '#c8ff00',
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
    color: '#00d4ff',
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
    color: '#ff7a00',
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
    color: '#7cffb2',
  },
]

export default function InternshipPage() {
  const [expanded, setExpanded] = useState(4)
  const orderedInternships = [...internships].sort((a, b) => Number(Boolean(b.current)) - Number(Boolean(a.current)))

  return (
    <>
      <style>{`
        .intern-page { background: var(--bg-dark); padding-top: 120px; min-height: 100vh; }
        .timeline { position: relative; padding-left: 52px; margin-bottom: 80px; }
        .timeline::before {
          content: ''; position: absolute; left: 8px; top: 12px; bottom: 40px;
          width: 1px;
          background: linear-gradient(to bottom, var(--accent) 0%, transparent 100%);
        }
        .t-item { position: relative; margin-bottom: 4px; }
        .t-item.current::before {
          content: '';
          position: absolute;
          left: -14px;
          top: 12px;
          bottom: 12px;
          width: 3px;
          border-radius: 3px;
          background: linear-gradient(180deg, #7cffb2 0%, #49d58e 100%);
        }
        .t-item.current .t-header {
          border-color: rgba(124,255,178,0.38);
          background: linear-gradient(180deg, rgba(124,255,178,0.06) 0%, #181818 58%);
          box-shadow: inset 0 0 0 1px rgba(124,255,178,0.08);
        }
        .t-dot {
          position: absolute; left: -48px; top: 14px;
          width: 14px; height: 14px; border-radius: 50%;
          background: var(--accent);
          border: 2.5px solid var(--bg-dark);
          box-shadow: 0 0 0 4px rgba(200,255,0,0.15);
          transition: box-shadow 0.3s;
        }
        .t-item.current .t-dot {
          background: #7cffb2;
          box-shadow: 0 0 0 4px rgba(124,255,178,0.18);
        }
        .t-item:hover .t-dot { box-shadow: 0 0 0 8px rgba(200,255,0,0.12); }
        .t-header {
          background: #181818; border: 1px solid var(--border-dark);
          padding: 28px 32px;
          display: flex; justify-content: space-between; align-items: flex-start;
          gap: 24px;
          transition: border-color 0.25s;
          margin-bottom: 2px;
        }
        .t-header:hover { border-color: rgba(200,255,0,0.2); }
        .t-period {
          font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase;
          color: var(--accent);
          background: rgba(200,255,0,0.08);
          padding: 4px 12px; border-radius: 2px;
          display: inline-block; margin-bottom: 14px;
        }
        .t-period-row { display: flex; align-items: center; gap: 10px; margin-bottom: 14px; }
        .t-period-row .t-period { margin-bottom: 0; }
        .current-pill {
          font-size: 10px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #7cffb2;
          background: rgba(124,255,178,0.1);
          border: 1px solid rgba(124,255,178,0.4);
          padding: 4px 11px;
          border-radius: 100px;
          font-weight: 600;
        }
        .t-role { font-family: var(--font-heading); font-size: 28px; font-weight: 700; margin-bottom: 4px; }
        .t-company { font-size: 14px; color: var(--gray); }
        .t-meta { text-align: right; flex-shrink: 0; }
        .t-type { font-size: 11px; color: var(--gray-light); letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 8px; }
        .t-duration {
          font-family: var(--font-display); font-size: 36px; color: rgba(255,255,255,0.12);
          line-height: 1;
        }
        .t-body {
          background: #141414; border: 1px solid var(--border-dark);
          border-top: none;
          overflow: hidden;
          transition: max-height 0.5s var(--ease), opacity 0.4s;
        }
        .t-body.open { max-height: 600px; opacity: 1; }
        .t-body.closed { max-height: 0; opacity: 0; }
        .t-body-inner { padding: 32px; display: grid; grid-template-columns: 1fr 1fr; gap: 40px; }
        .t-desc { font-size: 15px; color: var(--gray-light); line-height: 1.85; margin-bottom: 24px; }
        .t-achievements h4 { font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; color: var(--accent); margin-bottom: 16px; }
        .t-ach-item {
          display: flex; gap: 10px; align-items: flex-start;
          font-size: 13px; color: var(--gray-light); margin-bottom: 10px;
        }
        .t-ach-item::before { content: '→'; color: var(--accent); flex-shrink: 0; }
        .t-tags-section h4 { font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; color: var(--accent); margin-bottom: 16px; }
        .t-tags { display: flex; flex-wrap: wrap; gap: 8px; }
        .t-tag {
          background: rgba(255,255,255,0.04); border: 1px solid var(--border-dark);
          color: var(--gray-light); font-size: 11px; padding: 5px 12px;
          border-radius: 100px; letter-spacing: 0.05em;
        }
        .expand-btn {
          background: none; border: none;
          color: var(--accent); font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase;
          margin-top: 12px; display: flex; align-items: center; gap: 6px;
        }
        .expand-btn:hover { opacity: 0.7; }
        @media (max-width: 768px) {
          .t-body-inner { grid-template-columns: 1fr; }
          .t-header { flex-direction: column; }
          .t-meta { text-align: left; }
        }
      `}</style>

      <div className="intern-page">
        <div className="container">
          <SectionHeader label="Experience" title="Internships" />
          <div className="timeline">
            {orderedInternships.map((item, i) => (
              <Reveal key={item.id} delay={i * 100}>
                <div className={`t-item ${item.current ? 'current' : ''}`}>
                  <div className="t-dot" />
                  <div className="t-header" onClick={() => setExpanded(expanded === item.id ? null : item.id)} style={{cursor:'pointer'}}>
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
                      <button className="expand-btn">
                        {expanded === item.id ? '− Less' : '+ More'}
                      </button>
                    </div>
                  </div>

                  <div className={`t-body ${expanded === item.id ? 'open' : 'closed'}`}>
                    <div className="t-body-inner">
                      <div>
                        <p className="t-desc">{item.desc}</p>
                        <div className="t-achievements">
                          <h4>Key Achievements</h4>
                          {item.achievements.map(a => (
                            <div key={a} className="t-ach-item">{a}</div>
                          ))}
                        </div>
                      </div>
                      <div className="t-tags-section">
                        <h4>Technologies Used</h4>
                        <div className="t-tags">
                          {item.tags.map(t => <span key={t} className="t-tag">{t}</span>)}
                        </div>
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
