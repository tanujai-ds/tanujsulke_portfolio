import React, { useState } from 'react'
import SectionHeader from '../components/SectionHeader'
import Reveal from '../components/Reveal'
import Footer from '../components/Footer'

const certs = [
  { id: 1, issuer: 'IIT Bombay', name: 'Python Training', date: 'Aug 2025', category: 'Programming & Development', icon: '🐍', desc: 'Completed hands-on Python training focused on practical programming fundamentals.' },
  { id: 2, issuer: 'IIT Bombay', name: 'Git Training', date: 'Aug 2025', category: 'Programming & Development', icon: '🌿', desc: 'Learned version control workflows, branching strategies, and collaborative development using Git.' },
  { id: 3, issuer: 'IIT Bombay', name: 'PHP & MySQL Training', date: 'Aug 2025', category: 'Programming & Development', icon: '🛠️', desc: 'Covered backend web development concepts using PHP and relational database management with MySQL.' },
  { id: 4, issuer: 'Coursera', name: 'Intro to AI Engineering', date: '2025', category: 'AI / ML & Prompt Engineering', icon: '🤖', desc: 'Introduced core AI engineering workflows, model pipelines, and applied AI development concepts.' },
  { id: 5, issuer: 'AWS Training & Certification', name: 'Foundations of Prompt Engineering', date: 'Mar 2026', category: 'AI / ML & Prompt Engineering', icon: '🧠', desc: 'Built prompt design fundamentals for reliable, task-oriented interaction with foundation models.' },
  { id: 6, issuer: 'Anthropic', name: 'Claude Code in Action', date: 'Mar 2026', category: 'AI / ML & Prompt Engineering', icon: '💡', desc: 'Explored practical coding workflows and AI-assisted development patterns using Claude tools.' },
  { id: 7, issuer: 'MAT Journals', name: 'Neuro-Symbolic AI: Foundations and Frontiers', date: '2025', category: 'AI / Research', icon: '📚', desc: 'Studied foundational ideas and emerging directions at the intersection of symbolic and neural AI.' },
  { id: 8, issuer: 'MAT Journals', name: 'Decoding AI: A Historical Perspective and Future Road Maps', date: '2025', category: 'AI / Research', icon: '🧭', desc: 'Reviewed the evolution of AI and future-facing research pathways across domains.' },
]

const categories = ['All', 'Programming & Development', 'AI / ML & Prompt Engineering', 'AI / Research']

export default function CertificationsPage() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? certs : certs.filter(c => c.category === active)

  return (
    <>
      <style>{`
        .certs-page {
          background:
            radial-gradient(70% 45% at 90% 5%, rgba(200,255,0,0.06) 0%, transparent 65%),
            radial-gradient(50% 35% at 5% 10%, rgba(255,255,255,0.04) 0%, transparent 70%),
            var(--bg-dark);
          padding-top: 120px;
          min-height: 100vh;
        }
        .cert-toolbar {
          border: 1px solid var(--border-dark);
          background: rgba(255,255,255,0.015);
          padding: 16px;
          margin-bottom: 24px;
        }
        .filter-row {
          display: flex;
          gap: 10px;
          margin-bottom: 0;
          flex-wrap: wrap;
        }
        .filter-btn {
          background: rgba(255,255,255,0.02);
          border: 1px solid var(--border-dark);
          color: var(--gray);
          padding: 10px 16px;
          border-radius: 100px;
          font-family: var(--font-body);
          font-size: 12px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          transition: border-color 0.2s, color 0.2s, background 0.2s;
        }
        .filter-btn:hover {
          border-color: rgba(200,255,0,0.32);
          color: var(--accent);
        }
        .filter-btn.active {
          background: rgba(200,255,0,0.14);
          border-color: rgba(200,255,0,0.5);
          color: var(--accent);
          font-weight: 600;
        }
        .cert-summary {
          margin-top: 12px;
          font-size: 11px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--gray-light);
          border-top: 1px solid var(--border-dark);
          padding-top: 10px;
        }
        .cert-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
          gap: 16px;
          margin-bottom: 80px;
        }
        .cert-card {
          background: #161616;
          border: 1px solid rgba(255,255,255,0.08);
          padding: 34px 30px;
          position: relative;
          overflow: hidden;
          transition: border-color 0.2s, transform 0.2s;
          min-height: 280px;
        }
        .cert-card:hover {
          border-color: rgba(200,255,0,0.28);
          transform: translateY(-3px);
        }
        .cert-icon {
          position: absolute; top: 24px; right: 24px;
          width: 42px; height: 42px;
          border: 1px solid var(--border-dark);
          border-radius: 50%;
          display: grid; place-items: center;
          font-size: 17px;
          background: rgba(255,255,255,0.015);
        }
        .cert-issuer {
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 10px;
        }
        .cert-name {
          font-family: var(--font-heading);
          font-size: 21px;
          font-weight: 700;
          margin-bottom: 10px;
          line-height: 1.35;
          max-width: calc(100% - 54px);
        }
        .cert-desc { font-size: 14px; color: var(--gray); line-height: 1.7; margin-bottom: 18px; }
        .cert-date { font-size: 11px; color: var(--gray-light); letter-spacing: 0.05em; }
        .cert-badge {
          display: inline-block;
          background: rgba(255,255,255,0.02);
          border: 1px solid var(--border-dark);
          color: var(--gray-light);
          font-size: 10px;
          padding: 4px 10px;
          border-radius: 4px;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          margin-bottom: 14px;
        }
        .empty-note {
          border: 1px dashed var(--border-dark);
          padding: 24px;
          color: var(--gray-light);
          letter-spacing: 0.03em;
        }
        @media (max-width: 768px) {
          .cert-grid { grid-template-columns: 1fr; gap: 12px; }
          .cert-toolbar { padding: 14px; }
          .cert-card { padding: 28px 22px; min-height: auto; }
          .cert-name { max-width: 100%; }
        }
      `}</style>

      <div className="certs-page">
        <div className="container">
          <SectionHeader label="Credentials" title="Certifications" />

          <Reveal>
            <div className="cert-toolbar">
              <div className="filter-row">
                {categories.map(c => (
                  <button
                    key={c}
                    className={`filter-btn ${active === c ? 'active' : ''}`}
                    onClick={() => setActive(c)}
                  >{c}</button>
                ))}
              </div>
              <div className="cert-summary">Showing {filtered.length} of {certs.length} certifications</div>
            </div>
          </Reveal>

          {filtered.length === 0 ? (
            <div className="empty-note">No certifications found for this category.</div>
          ) : (
            <div className="cert-grid">
              {filtered.map((cert, i) => (
                <Reveal key={cert.id} delay={i * 80}>
                  <div className="cert-card">
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
