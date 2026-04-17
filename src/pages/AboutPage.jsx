import React, { useEffect, useState } from 'react'
import SectionHeader from '../components/SectionHeader'
import Reveal from '../components/Reveal'
import Footer from '../components/Footer'
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
  'React',
  'JavaScript',
  'Node.js',
  'API Integration',
  'HTML & CSS',
  'Git',
  'REST APIs',
  'Frontend',
  'Backend Basics',
  'Problem Solving',
  'Performance',
  'UI/UX Basics',
]

function SkillBar({ name, pct, delay }) {
  const [ref, inView] = useInView()

  return (
    <div ref={ref} className="skill-row" style={{ marginBottom: 28 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
        <span style={{ fontSize: 13, letterSpacing: '0.05em', color: 'var(--gray-light)' }}>{name}</span>
        <span style={{ fontSize: 13, color: 'var(--accent)', fontWeight: 600 }}>{pct}%</span>
      </div>
      <div style={{ height: 3, background: 'rgba(255,255,255,0.06)', borderRadius: 2, overflow: 'hidden' }}>
        <div
          style={{
            height: '100%',
            borderRadius: 2,
            background: 'linear-gradient(90deg, var(--accent) 0%, #88cc00 100%)',
            width: inView ? `${pct}%` : '0%',
            transition: `width 1.2s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
          }}
        />
      </div>
    </div>
  )
}

function StatCard({ num, lbl, delay }) {
  const [ref, inView] = useInView()
  const [value, setValue] = useState(100)

  const target = parseInt(num, 10) || 0
  const suffix = num.replace(/[0-9]/g, '')
  const startValue = 100

  useEffect(() => {
    if (!inView) return

    let rafId = 0
    const duration = 900
    let timerId = 0

    const startCounter = () => {
      const start = performance.now()

      const tick = (now) => {
        const t = Math.min((now - start) / duration, 1)
        const eased = 1 - Math.pow(1 - t, 3)
        setValue(Math.round(startValue + (target - startValue) * eased))
        if (t < 1) rafId = requestAnimationFrame(tick)
      }

      rafId = requestAnimationFrame(tick)
    }

    setValue(startValue)
    timerId = window.setTimeout(startCounter, delay)

    return () => {
      window.clearTimeout(timerId)
      cancelAnimationFrame(rafId)
    }
  }, [inView, target, delay, startValue])

  return (
    <Reveal delay={delay}>
      <div ref={ref} className="stat-box">
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
        .about-page {
          position: relative;
          overflow: hidden;
          background:
            radial-gradient(circle at 12% 14%, rgba(200,255,0,0.08), transparent 34%),
            radial-gradient(circle at 86% 20%, rgba(200,255,0,0.06), transparent 30%),
            linear-gradient(180deg, #0d0e10 0%, #0b0d0f 100%);
          padding-top: 120px;
          min-height: 100vh;
        }

        .about-page::before {
          content: '';
          position: absolute;
          width: 540px;
          height: 540px;
          right: -150px;
          top: 120px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(200,255,0,0.12), transparent 70%);
          filter: blur(24px);
          animation: floatGlow 9s ease-in-out infinite alternate;
          pointer-events: none;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 56px;
          align-items: stretch;
          margin-bottom: 72px;
        }

        .about-card {
          position: relative;
          background: linear-gradient(180deg, rgba(255,255,255,0.035), rgba(255,255,255,0.01));
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 16px;
          padding: 28px 30px;
          box-shadow: 0 18px 34px rgba(0,0,0,0.2);
          overflow: hidden;
        }

        .about-card::before {
          content: '';
          position: absolute;
          top: -90px;
          right: -90px;
          width: 220px;
          height: 220px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(200,255,0,0.16), transparent 72%);
          pointer-events: none;
        }

        .about-text p {
          color: var(--gray-light);
          font-size: 16px;
          line-height: 1.95;
          margin-bottom: 0;
        }

        .about-text p strong {
          color: var(--white);
        }

        .about-points {
          margin-top: 22px;
          display: grid;
          gap: 10px;
        }

        .about-point {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #d8dbd2;
          font-size: 13px;
          letter-spacing: 0.03em;
        }

        .about-point::before {
          content: '';
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--accent);
          box-shadow: 0 0 0 4px rgba(200,255,0,0.12);
          flex-shrink: 0;
        }

        .stat-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
          margin-top: 0;
          height: 100%;
        }

        .stat-box {
          background: linear-gradient(145deg, #171a1f 0%, #101215 100%);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 14px;
          padding: 24px 22px;
          min-height: 128px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          transition: border-color 0.25s, transform 0.3s var(--ease), box-shadow 0.3s var(--ease);
        }

        .stat-box:hover {
          border-color: rgba(200,255,0,0.34);
          transform: translateY(-6px);
          box-shadow: 0 12px 26px rgba(0,0,0,0.28);
        }

        .stat-num {
          font-family: var(--font-display);
          font-size: 54px;
          color: var(--accent);
          line-height: 1;
          margin-bottom: 6px;
          text-shadow: 0 0 18px rgba(200,255,0,0.15);
        }

        .stat-lbl {
          font-size: 11px;
          color: var(--gray);
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .skills-section {
          padding: 72px 0 80px;
          border-top: 1px solid var(--border-dark);
        }

        .skills-cols {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          margin-bottom: 48px;
        }

        .skill-row {
          transition: transform 0.25s var(--ease), filter 0.25s var(--ease);
        }

        .skill-row:hover {
          transform: translateX(4px);
          filter: brightness(1.05);
        }

        .tag-cloud {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 48px;
        }

        .tag {
          background: rgba(200,255,0,0.06);
          border: 1px solid rgba(200,255,0,0.2);
          color: var(--accent);
          padding: 7px 18px;
          border-radius: 2px;
          font-size: 11px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          transition: background 0.2s, transform 0.25s var(--ease), border-color 0.25s;
          animation: tagFloat 3.2s ease-in-out infinite;
        }

        .tag:hover {
          background: rgba(200,255,0,0.14);
          border-color: rgba(200,255,0,0.38);
          transform: translateY(-3px);
        }

        @keyframes floatGlow {
          0% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          100% {
            transform: translate3d(-24px, 32px, 0) scale(1.08);
          }
        }

        @keyframes tagFloat {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-2px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .about-page::before,
          .tag {
            animation: none;
          }
        }

        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .about-card {
            padding: 22px 18px;
          }

          .stat-grid {
            gap: 10px;
          }

          .skills-cols {
            grid-template-columns: 1fr;
          }

          .about-page::before {
            width: 320px;
            height: 320px;
            right: -110px;
            top: 220px;
          }
        }
      `}</style>

      <div className="about-page">
        <div className="container">
          <SectionHeader label="Who I Am" title="About Me" />

          <div className="about-grid">
            <div className="about-text about-card">
              <Reveal>
                <p>Hi, I'm <strong>Tanuj Sulke</strong>, an <strong>Engineering student specializing in Artificial Intelligence and Data Science</strong>. I am passionate about technology, software development, and building innovative solutions, and I continuously strengthen my expertise through practical projects, professional certifications, and industry internships. I am focused on growing as a developer and creating impactful digital products in the tech industry.</p>
              </Reveal>
              <Reveal delay={80}>
                <div className="about-points">
                  <div className="about-point">Focused on scalable web and software solutions</div>
                  <div className="about-point">Hands-on learning through internships and real projects</div>
                  <div className="about-point">Committed to clean code and user-first engineering</div>
                </div>
              </Reveal>
            </div>

            <div>
              <div className="stat-grid">
                {[['4+', 'Internships'], ['6+', 'Certifications'], ['4+', 'Projects'], ['2+', 'Years of Learning']].map(([num, lbl], i) => (
                  <StatCard key={lbl} num={num} lbl={lbl} delay={i * 80} />
                ))}
              </div>
            </div>
          </div>

          <div className="skills-section">
            <Reveal>
              <p className="sh-label" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 32 }}>
                <span style={{ display: 'block', width: 28, height: 1, background: 'var(--accent)' }} />
                Skills & Expertise
              </p>
            </Reveal>

            <div className="skills-cols">
              <div>{skills.slice(0, 3).map((s, i) => <SkillBar key={s.name} {...s} delay={i * 120} />)}</div>
              <div>{skills.slice(3).map((s, i) => <SkillBar key={s.name} {...s} delay={i * 120} />)}</div>
            </div>

            <div className="tag-cloud">
              {tags.map((t, i) => (
                <Reveal key={t} delay={i * 40}>
                  <span className="tag" style={{ animationDelay: `${(i % 6) * 0.18}s` }}>{t}</span>
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
