import React from 'react'
import Reveal from './Reveal'

export default function SectionHeader({ label, title, desc }) {
  return (
    <>
      <style>{`
        .page-header {
          padding-bottom: 44px;
          margin-bottom: 48px;
          border-bottom: 1px solid var(--border);
        }
        .page-title {
          font-size: clamp(38px, 6vw, 68px);
          color: var(--ink);
          margin-top: 14px;
          line-height: 1.02;
        }
        .page-desc {
          margin-top: 16px;
          max-width: 56ch;
          font-size: 15px;
          line-height: 1.75;
          color: var(--muted);
        }
        @media (max-width: 768px) {
          .page-header { padding-bottom: 28px; margin-bottom: 32px; }
        }
      `}</style>
      <div className="page-header">
        <Reveal><p className="eyebrow">{label}</p></Reveal>
        <Reveal delay={70}><h1 className="page-title">{title}</h1></Reveal>
        {desc && <Reveal delay={120}><p className="page-desc">{desc}</p></Reveal>}
      </div>
    </>
  )
}
