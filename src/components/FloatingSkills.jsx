import React from 'react'
import Reveal from './Reveal'

// Real, official brand logos served via the Simple Icons CDN (cdn.simpleicons.org).
// Each icon renders in its own brand color, straight from the source SVG.
const SKILLS = [
  { name: 'Python', slug: 'python', color: '3776AB', size: 1.15 },
  { name: 'React', slug: 'react', color: '61DAFB', size: 1.05 },
  { name: 'JavaScript', slug: 'javascript', color: 'F7DF1E', size: 1 },
  { name: 'Java', slug: 'openjdk', color: 'FFFFFF', size: 0.95 },
  { name: 'TensorFlow', slug: 'tensorflow', color: 'FF6F00', size: 1.1 },
  { name: 'PyTorch', slug: 'pytorch', color: 'EE4C2C', size: 1 },
  { name: 'Node.js', slug: 'nodedotjs', color: '339933', size: 1 },
  { name: 'Scikit-learn', slug: 'scikitlearn', color: 'F7931E', size: 0.95 },
  { name: 'Pandas', slug: 'pandas', color: 'FFFFFF', size: 0.95 },
  { name: 'NumPy', slug: 'numpy', color: 'FFFFFF', size: 0.95 },
  { name: 'MySQL', slug: 'mysql', color: '4479A1', size: 1 },
  { name: 'Git', slug: 'git', color: 'F05032', size: 0.95 },
  { name: 'GitHub', slug: 'github', color: 'FFFFFF', size: 1 },
  { name: 'Streamlit', slug: 'streamlit', color: 'FF4B4B', size: 0.9 },
  { name: 'HTML5', slug: 'html5', color: 'E34F26', size: 0.9 },
  { name: 'CSS3', slug: 'css3', color: '1572B6', size: 0.9 },
  { name: 'Jupyter', slug: 'jupyter', color: 'F37626', size: 0.9 },
  { name: 'VS Code', slug: 'visualstudiocode', color: '007ACC', size: 0.95 },
]

// Deterministic pseudo-random offsets so the layout is stable across renders
// but still feels organic (varied float duration / delay / drift per icon).
function seeded(i, salt) {
  const x = Math.sin(i * 999 + salt * 37.13) * 10000
  return x - Math.floor(x)
}

export default function FloatingSkills() {
  return (
    <section className="skills-float-section">
      <style>{`
        .skills-float-section {
          position: relative;
          padding: 90px 0 100px;
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
          background: var(--bg-soft);
          overflow: hidden;
        }
        .skills-float-head { text-align: center; margin-bottom: 54px; position: relative; z-index: 2; }
        .skills-float-head .eyebrow { justify-content: center; }
        .skills-float-head .eyebrow::before { display: none; }
        .skills-float-title {
          font-size: clamp(26px, 3.2vw, 40px);
          color: var(--ink);
          margin-top: 10px;
        }
        .skills-float-sub {
          color: var(--muted);
          font-size: 14px;
          max-width: 46ch;
          margin: 12px auto 0;
        }

        .skills-cloud {
          position: relative;
          z-index: 2;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          gap: clamp(14px, 2.2vw, 26px);
          max-width: 1080px;
          margin: 0 auto;
        }

        .skill-orb {
          --float-dur: 5s;
          --float-delay: 0s;
          --float-dist: 12px;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          width: 96px;
          animation: skillFloat var(--float-dur) ease-in-out infinite;
          animation-delay: var(--float-delay);
        }
        .skill-orb-icon-wrap {
          width: 64px;
          height: 64px;
          border-radius: 20px;
          display: grid;
          place-items: center;
          background: linear-gradient(160deg, rgba(255,255,255,0.06), rgba(255,255,255,0.015));
          border: 1px solid var(--border-strong);
          box-shadow: var(--shadow-sm);
          backdrop-filter: blur(10px);
          transition: transform 0.35s var(--ease), border-color 0.35s var(--ease), box-shadow 0.35s var(--ease), background 0.35s var(--ease);
        }
        .skill-orb img { width: 30px; height: 30px; display: block; filter: drop-shadow(0 2px 6px rgba(0,0,0,0.35)); }
        .skill-orb-name {
          font-size: 10.5px;
          letter-spacing: 0.03em;
          color: var(--muted);
          text-align: center;
          white-space: nowrap;
          transition: color 0.3s var(--ease);
        }

        .skill-orb:hover { animation-play-state: paused; }
        .skill-orb:hover .skill-orb-icon-wrap {
          transform: translateY(-6px) scale(1.08);
          border-color: var(--border-accent);
          background: linear-gradient(160deg, rgba(207,255,61,0.12), rgba(154,139,255,0.06));
          box-shadow: 0 18px 40px rgba(0,0,0,0.4), 0 0 0 1px rgba(207,255,61,0.15);
        }
        .skill-orb:hover .skill-orb-name { color: var(--accent); }

        @keyframes skillFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(calc(-1 * var(--float-dist))); }
        }

        @media (prefers-reduced-motion: reduce) {
          .skill-orb { animation: none !important; }
        }

        @media (max-width: 640px) {
          .skill-orb { width: 78px; }
          .skill-orb-icon-wrap { width: 54px; height: 54px; border-radius: 16px; }
          .skill-orb img { width: 24px; height: 24px; }
        }
      `}</style>

      <div className="container skills-float-head">
        <Reveal>
          <p className="eyebrow">Tech Stack</p>
          <h2 className="skills-float-title">Tools I build with</h2>
          <p className="skills-float-sub">
            A living stack spanning full-stack web development and applied AI/ML — the same
            tools behind my internships, coursework, and shipped projects.
          </p>
        </Reveal>
      </div>

      <div className="container">
        <div className="skills-cloud">
          {SKILLS.map((s, i) => {
            const dur = (4.2 + seeded(i, 1) * 2.6).toFixed(2)
            const delay = (seeded(i, 2) * 3).toFixed(2)
            const dist = Math.round(8 + seeded(i, 3) * 12)
            return (
              <Reveal key={s.slug} delay={(i % 9) * 45} direction="none">
                <div
                  className="skill-orb"
                  style={{ '--float-dur': `${dur}s`, '--float-delay': `${delay}s`, '--float-dist': `${dist}px` }}
                  title={s.name}
                >
                  <div className="skill-orb-icon-wrap" style={{ width: 64 * s.size, height: 64 * s.size }}>
                    <img
                      src={`https://cdn.simpleicons.org/${s.slug}/${s.color}`}
                      alt={`${s.name} logo`}
                      loading="lazy"
                      width={30}
                      height={30}
                    />
                  </div>
                  <span className="skill-orb-name">{s.name}</span>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
