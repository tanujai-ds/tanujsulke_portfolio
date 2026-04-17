import React from 'react'
import Reveal from './Reveal'

export default function SectionHeader({ label, title, light = false }) {
  return (
    <>
      <style>{`
        .sh-label {
          display: inline-flex; align-items: center; gap: 10px;
          font-size: 11px; letter-spacing: 0.3em; text-transform: uppercase;
          color: var(--accent); margin-bottom: 14px;
        }
        .sh-label::before {
          content: ''; display: block; width: 28px; height: 1px; background: var(--accent);
        }
        .sh-title {
          font-family: var(--font-display);
          font-size: clamp(56px, 8vw, 100px);
          letter-spacing: 0.01em; line-height: 0.92;
          margin-bottom: 64px;
          color: ${light ? 'var(--black)' : 'var(--white)'};
        }
      `}</style>
      <Reveal>
        <p className="sh-label">{label}</p>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="sh-title">{title}</h2>
      </Reveal>
    </>
  )
}
