import React from 'react'

const PRESETS = {
  default: [
    { className: 'aurora-blob', style: { width: 520, height: 520, top: '-14%', left: '-10%', background: 'radial-gradient(circle, var(--accent-glow), transparent 70%)', animation: 'auroraDriftA 17s ease-in-out infinite' } },
    { className: 'aurora-blob', style: { width: 460, height: 460, top: '-6%', right: '-12%', background: 'radial-gradient(circle, rgba(154,139,255,0.28), transparent 70%)', animation: 'auroraDriftB 19s ease-in-out infinite' } },
    { className: 'aurora-blob', style: { width: 380, height: 380, bottom: '-16%', left: '30%', background: 'radial-gradient(circle, rgba(79,216,255,0.22), transparent 70%)', animation: 'auroraDriftC 15s ease-in-out infinite' } },
  ],
  warm: [
    { className: 'aurora-blob', style: { width: 480, height: 480, top: '-10%', right: '-8%', background: 'radial-gradient(circle, rgba(255,107,87,0.24), transparent 70%)', animation: 'auroraDriftA 18s ease-in-out infinite' } },
    { className: 'aurora-blob', style: { width: 420, height: 420, bottom: '-10%', left: '-10%', background: 'radial-gradient(circle, var(--accent-glow), transparent 70%)', animation: 'auroraDriftB 16s ease-in-out infinite' } },
    { className: 'aurora-blob', style: { width: 340, height: 340, top: '20%', left: '40%', background: 'radial-gradient(circle, rgba(255,95,180,0.18), transparent 70%)', animation: 'auroraDriftC 20s ease-in-out infinite' } },
  ],
  cool: [
    { className: 'aurora-blob', style: { width: 500, height: 500, top: '-12%', left: '-8%', background: 'radial-gradient(circle, rgba(79,216,255,0.26), transparent 70%)', animation: 'auroraDriftA 19s ease-in-out infinite' } },
    { className: 'aurora-blob', style: { width: 420, height: 420, bottom: '-14%', right: '-10%', background: 'radial-gradient(circle, rgba(154,139,255,0.26), transparent 70%)', animation: 'auroraDriftB 17s ease-in-out infinite' } },
    { className: 'aurora-blob', style: { width: 320, height: 320, top: '30%', right: '20%', background: 'radial-gradient(circle, var(--accent-glow), transparent 70%)', animation: 'auroraDriftC 15s ease-in-out infinite' } },
  ],
}

export default function AuroraBackground({ variant = 'default' }) {
  const blobs = PRESETS[variant] || PRESETS.default
  return (
    <div className="aurora-bg" aria-hidden="true">
      {blobs.map((b, i) => <div key={i} className={b.className} style={b.style} />)}
    </div>
  )
}
