import React, { useState } from 'react'
import SectionHeader from '../components/SectionHeader'
import Reveal from '../components/Reveal'
import Footer from '../components/Footer'
import AuroraBackground from '../components/AuroraBackground'

const certs = [
  { id: 1, issuer: 'IIT Bombay', name: 'Python Training', date: 'Aug 2025', category: 'Programming & Development', icon: '🐍', desc: 'Hands-on Python training focused on practical programming fundamentals.' },
  { id: 2, issuer: 'IIT Bombay', name: 'Git Training', date: 'Aug 2025', category: 'Programming & Development', icon: '🌿', desc: 'Version control workflows, branching strategies, and collaborative development using Git.' },
  { id: 3, issuer: 'IIT Bombay', name: 'PHP & MySQL Training', date: 'Aug 2025', category: 'Programming & Development', icon: '🛠️', desc: 'Backend web development concepts using PHP and relational database management with MySQL.' },
  { id: 4, issuer: 'Coursera', name: 'Intro to AI Engineering', date: '2025', category: 'AI / ML & Prompt Engineering', icon: '🤖', desc: 'Core AI engineering workflows, model pipelines, and applied AI development concepts.' },
  { id: 5, issuer: 'AWS Training & Certification', name: 'Foundations of Prompt Engineering', date: 'Mar 2026', category: 'AI / ML & Prompt Engineering', icon: '🧠', desc: 'Prompt design fundamentals for reliable, task-oriented interaction with foundation models.' },
  { id: 6, issuer: 'Anthropic', name: 'Claude Code in Action', date: 'Mar 2026', category: 'AI / ML & Prompt Engineering', icon: '💡', desc: 'Practical coding workflows and AI-assisted development patterns using Claude tools.' },
  { id: 7, issuer: 'MAT Journals', name: 'Neuro-Symbolic AI: Foundations and Frontiers', date: '2025', category: 'AI / Research', icon: '📚', desc: 'Foundational ideas and emerging directions at the intersection of symbolic and neural AI.' },
  { id: 8, issuer: 'MAT Journals', name: 'Decoding AI: A Historical Perspective and Future Road Maps', date: '2025', category: 'AI / Research', icon: '🧭', desc: 'The evolution of AI and future-facing research pathways across domains.' },
]

const categories = ['All', 'Programming & Development', 'AI / ML & Prompt Engineering', 'AI / Research']

export default function CertificationsPage() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? certs : certs.filter((c) => c.category === active)

  return (
    <>
      <style>{`
        .certs-page { position: relative; background: var(--bg); padding-top: calc(var(--nav-h) + 46px); min-height: 100vh; overflow: clip; }
        .certs-page .container { position: relative; z-index: 1; }

        .cert-toolbar {
          display: flex; align-items: center; justify-content: space-between; gap: 16px; flex-wrap: wrap;
          margin-bottom: 40px;
          padding-bottom: 24px;
          border-bottom: 1px solid var(--border);
        }
        .filter-row { display: flex; gap: 8px; flex-wrap: wrap; }
        .filter-btn {
          background: rgba(255,255,255,0.02);
          border: 1px solid var(--border);
          color: var(--muted);
          padding: 9px 18px;
          border-radius: var(--r-pill);
          font-size: 12px;
          letter-spacing: 0.02em;
          transition: border-color 0.2s, color 0.2s, background 0.2s;
        }
        .filter-btn:hover { border-color: var(--border-accent); color: var(--ink); }
        .filter-btn.active { background: var(--accent); border-color: var(--accent); color: var(--accent-ink); font-weight: 700; }
        .cert-summary { font-size: 12px; color: var(--muted-2); letter-spacing: 0.02em; white-space: nowrap; }

        .cert-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 18px; margin-bottom: 90px; }
        .cert-card {
          position: relative;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--r-lg);
          padding: 30px 28px;
          transition: border-color 0.25s, transform 0.25s, box-shadow 0.25s;
        }
        .cert-card:hover { border-color: var(--border-accent); transform: translateY(-4px); box-shadow: var(--shadow-md); }
        .cert-icon {
          position: absolute; top: 24px; right: 24px;
          width: 42px; height: 42px;
          border: 1px solid var(--border);
          border-radius: 50%;
          display: grid; place-items: center;
          font-size: 17px;
          background: rgba(255,255,255,0.02);
        }
        .cert-badge {
          display: inline-block;
          background: var(--accent-soft);
          border: 1px solid var(--border-accent);
          color: var(--accent);
          font-size: 10px;
          padding: 5px 11px;
          border-radius: var(--r-pill);
          letter-spacing: 0.05em;
          text-transform: uppercase;
          margin-bottom: 16px;
        }
        .cert-issuer { font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--muted); margin-bottom: 10px; }
        .cert-name {
          font-family: var(--font-heading);
          font-size: 19px; font-weight: 700; color: var(--ink);
          margin-bottom: 12px; line-height: 1.35;
          max-width: calc(100% - 50px);
        }
        .cert-desc { font-size: 13.5px; color: var(--muted); line-height: 1.7; margin-bottom: 20px; }
        .cert-date { font-size: 11px; color: var(--muted-2); letter-spacing: 0.03em; border-top: 1px solid var(--border); padding-top: 14px; }

        .empty-note { border: 1px dashed var(--border-strong); border-radius: var(--r-md); padding: 30px; color: var(--muted); text-align: center; }

        @media (max-width: 768px) {
          .cert-grid { grid-template-columns: 1fr; gap: 14px; }
          .cert-card { padding: 26px 22px; }
          .cert-name { max-width: 100%; }
          .cert-toolbar { flex-direction: column; align-items: flex-start; }
        }
      `}</style>

      <div className="certs-page">
        <AuroraBackground variant="warm" />
        <div className="container">
          <SectionHeader
            label="Credentials"
            title="Certifications"
            desc="Structured, verified learning across programming, AI/ML and applied research."
          />

          <Reveal>
            <div className="cert-toolbar">
              <div className="filter-row">
                {categories.map((c) => (
                  <button
                    key={c}
                    className={`filter-btn ${active === c ? 'active' : ''}`}
                    onClick={() => setActive(c)}
                  >{c}</button>
                ))}
              </div>
              <div className="cert-summary">Showing {filtered.length} of {certs.length}</div>
            </div>
          </Reveal>

          {filtered.length === 0 ? (
            <div className="empty-note">No certifications found for this category.</div>
          ) : (
            <div className="cert-grid">
              {filtered.map((cert, i) => (
                <Reveal key={cert.id} delay={i * 70}>
                  <div className="cert-card gradient-border">
                    <div className="cert-icon">{cert.icon}</div>
                    <div className="cert-badge">{cert.category}</div>
                    <div className="cert-issuer">{cert.issuer}</div>
                    <div className="cert-name">{cert.name}</div>
                    <div className="cert-desc">{cert.desc}</div>
                    <div className="cert-date">Issued {cert.date} · No Expiry</div>
                  </div>
                </Reveal>
              ))}
            </div>
          )}
        </div>
        <Footer />
      </div>
    </>
  )
}
