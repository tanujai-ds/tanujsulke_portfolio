import React, { useEffect, useState } from 'react'
import SectionHeader from '../components/SectionHeader'
import Reveal from '../components/Reveal'
import Footer from '../components/Footer'
import AuroraBackground from '../components/AuroraBackground'
import { useInView } from '../hooks/useInView'

const skills = [
  { name: 'Web Development', pct: 88 },
  { name: 'React / JavaScript', pct: 86 },
  { name: 'API Integration', pct: 82 },
  { name: 'Software Engineering', pct: 80 },
  { name: 'Problem Solving', pct: 84 },
  { name: 'Git / Collaboration', pct: 78 },
]

const tags = [
  'React', 'JavaScript', 'Node.js', 'API Integration', 'HTML & CSS', 'Git',
  'REST APIs', 'Frontend', 'Backend Basics', 'Problem Solving', 'Performance', 'UI/UX Basics',
]

const journey = [
  { year: '2023', title: 'Started B.Tech in AI & Data Science', text: 'Began engineering studies with a focus on artificial intelligence and applied data science.' },
  { year: '2025', title: 'First internships & certifications', text: 'Took on AI-ML and AI internships while completing hands-on training in Python, Git and PHP/MySQL.' },
  { year: '2026', title: 'Full-stack & real client work', text: 'Completed a Java full-stack internship and started as a Web Developer Intern at NovaPex Info Hub.' },
]

function SkillBar({ name, pct, delay }) {
  const [ref, inView] = useInView()
  return (
    <div ref={ref} className="skill-row">
      <div className="skill-row-top">
        <span className="skill-name">{name}</span>
        <span className="skill-pct">{pct}%</span>
      </div>
      <div className="skill-track">
        <div
          className="skill-fill"
          style={{ width: inView ? `${pct}%` : '0%', transitionDelay: `${delay}ms` }}
        />
      </div>
    </div>
  )
}

function StatCard({ num, lbl, delay }) {
  const [ref, inView] = useInView()
  const [value, setValue] = useState(0)
  const target = parseInt(num, 10) || 0
  const suffix = num.replace(/[0-9]/g, '')

  useEffect(() => {
    if (!inView) return
    let rafId = 0
    const duration = 900
    const startCounter = () => {
      const start = performance.now()
      const tick = (now) => {
        const t = Math.min((now - start) / duration, 1)
        const eased = 1 - Math.pow(1 - t, 3)
        setValue(Math.round(target * eased))
        if (t < 1) rafId = requestAnimationFrame(tick)
      }
      rafId = requestAnimationFrame(tick)
    }
    const timerId = window.setTimeout(startCounter, delay)
    return () => { window.clearTimeout(timerId); cancelAnimationFrame(rafId) }
  }, [inView, target, delay])

  return (
    <Reveal delay={delay}>
      <div ref={ref} className="stat-box gradient-border">
        <div className="stat-num">{value}{suffix}</div>
        <div className="stat-lbl">{lbl}</div>
      </div>
    </Reveal>
  )
}

export default function AboutPage() {
  return (
    <>
      <style>{`
        .about-page { position: relative; background: var(--bg); padding-top: calc(var(--nav-h) + 46px); min-height: 100vh; overflow: clip; }

        .container { position: relative; z-index: 1; }

        .about-grid { display: grid; grid-template-columns: 1.15fr 0.85fr; gap: 28px; margin-bottom: 84px; }

        .about-card {
          position: relative;
          background: linear-gradient(180deg, rgba(255,255,255,0.035), rgba(255,255,255,0.01));
          border: 1px solid var(--border);
          border-radius: var(--r-lg);
          padding: 34px 36px;
          box-shadow: var(--shadow-sm);
        }

        .about-text p { color: var(--ink-dim); font-size: 16px; line-height: 1.9; }
        .about-text p strong { color: var(--ink); }

        .about-points { margin-top: 22px; display: grid; gap: 12px; }
        .about-point { display: flex; align-items: center; gap: 10px; color: var(--ink-dim); font-size: 13.5px; }
        .about-point::before {
          content: ''; width: 7px; height: 7px; border-radius: 50%; flex-shrink: 0;
          background: var(--accent); box-shadow: 0 0 0 4px var(--accent-soft);
        }

        .stat-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; height: 100%; }
        .stat-box {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--r-md);
          padding: 24px 22px;
          min-height: 132px;
          display: flex; flex-direction: column; justify-content: center;
          transition: border-color 0.25s, transform 0.3s var(--ease);
          position: relative;
        }
        .stat-box:hover { border-color: transparent; transform: translateY(-5px); }
        .stat-num { font-family: var(--font-display); font-size: 46px; font-weight: 700; color: var(--accent); line-height: 1; margin-bottom: 6px; }
        .stat-lbl { font-size: 11px; color: var(--muted); letter-spacing: 0.1em; text-transform: uppercase; }

        /* — journey — */
        .journey-section { padding: 0 0 84px; }
        .journey-list { display: grid; gap: 2px; border: 1px solid var(--border); border-radius: var(--r-lg); overflow: hidden; }
        .journey-item {
          display: grid; grid-template-columns: 90px 1fr; gap: 24px;
          padding: 26px 28px;
          background: var(--surface);
          transition: background 0.25s;
        }
        .journey-item:hover { background: var(--surface-2); }
        .journey-year { font-family: var(--font-display); font-size: 22px; font-weight: 700; color: var(--accent); }
        .journey-title { font-size: 16px; color: var(--ink); font-weight: 600; margin-bottom: 6px; }
        .journey-text { font-size: 13.5px; color: var(--muted); line-height: 1.65; }

        /* — skills — */
        .skills-section { padding: 60px 0 90px; border-top: 1px solid var(--border); }
        .skills-cols { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; margin-bottom: 52px; }
        .skill-row { margin-bottom: 26px; }
        .skill-row-top { display: flex; justify-content: space-between; margin-bottom: 9px; }
        .skill-name { font-size: 13px; letter-spacing: 0.02em; color: var(--ink-dim); }
        .skill-pct { font-size: 13px; color: var(--accent); font-weight: 700; }
        .skill-track { height: 4px; background: rgba(255,255,255,0.06); border-radius: 2px; overflow: hidden; }
        .skill-fill {
          height: 100%; border-radius: 2px;
          background: linear-gradient(90deg, var(--accent) 0%, var(--accent-cyan) 100%);
          width: 0%;
          transition: width 1.1s cubic-bezier(0.16,1,0.3,1);
        }

        .tag-cloud { display: flex; flex-wrap: wrap; gap: 10px; }
        .tag {
          background: var(--accent-soft);
          border: 1px solid var(--border-accent);
          color: var(--accent);
          padding: 8px 18px;
          border-radius: var(--r-pill);
          font-size: 11.5px;
          letter-spacing: 0.06em;
          transition: background 0.2s, transform 0.25s var(--ease);
        }
        .tag:hover { background: rgba(207,255,61,0.18); transform: translateY(-3px); }

        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr; gap: 20px; }
          .about-card { padding: 26px 24px; }
          .journey-item { grid-template-columns: 1fr; gap: 6px; }
          .skills-cols { grid-template-columns: 1fr; gap: 8px; }
        }
      `}</style>

      <div className="about-page">
        <AuroraBackground variant="cool" />
        <div className="container">
          <SectionHeader
            label="Who I Am"
            title="About Me"
            desc="A closer look at how I got here, what I'm good at, and the tools I reach for."
          />

          <div className="about-grid">
            <div className="about-text about-card">
              <Reveal>
                <p>
                  Hi, I'm <strong>Tanuj Sulke</strong>, an <strong>Engineering student specializing in Artificial
                  Intelligence and Data Science</strong>. I'm passionate about technology, software development, and
                  building innovative solutions — continuously strengthening my expertise through practical
                  projects, professional certifications, and industry internships.
                </p>
              </Reveal>
              <Reveal delay={80}>
                <div className="about-points">
                  <div className="about-point">Focused on scalable web and software solutions</div>
                  <div className="about-point">Hands-on learning through internships and real projects</div>
                  <div className="about-point">Committed to clean code and user-first engineering</div>
                </div>
              </Reveal>
            </div>

            <div className="stat-grid">
              {[['4', '+ Internships'], ['6', '+ Certifications'], ['4', '+ Projects'], ['2', '+ Yrs Learning']].map(([num, lbl], i) => (
                <StatCard key={lbl} num={num} lbl={lbl} delay={i * 80} />
              ))}
            </div>
          </div>

          <div className="journey-section">
            <Reveal><p className="eyebrow" style={{ marginBottom: 28 }}>The Journey So Far</p></Reveal>
            <div className="journey-list">
              {journey.map((j, i) => (
                <Reveal key={j.year} delay={i * 80}>
                  <div className="journey-item">
                    <div className="journey-year">{j.year}</div>
                    <div>
                      <div className="journey-title">{j.title}</div>
                      <div className="journey-text">{j.text}</div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="skills-section">
            <Reveal><p className="eyebrow" style={{ marginBottom: 32 }}>Skills &amp; Expertise</p></Reveal>

            <div className="skills-cols">
              <div>{skills.slice(0, 3).map((s, i) => <SkillBar key={s.name} {...s} delay={i * 120} />)}</div>
              <div>{skills.slice(3).map((s, i) => <SkillBar key={s.name} {...s} delay={i * 120} />)}</div>
            </div>

            <div className="tag-cloud">
              {tags.map((t, i) => (
                <Reveal key={t} delay={i * 40} className="tag-reveal-wrap" direction="none">
                  <span className="tag">{t}</span>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
}
