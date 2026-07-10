import React, { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [pct, setPct] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement
      const scrollTop = h.scrollTop || document.body.scrollTop
      const scrollHeight = (h.scrollHeight || document.body.scrollHeight) - h.clientHeight
      setPct(scrollHeight > 0 ? Math.min(100, (scrollTop / scrollHeight) * 100) : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <>
      <style>{`
        .scroll-progress-track {
          position: fixed; top: 0; left: 0; right: 0; height: 3px;
          z-index: 2000;
          background: transparent;
          pointer-events: none;
        }
        .scroll-progress-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--accent), var(--accent-cyan));
          box-shadow: 0 0 12px var(--accent-glow);
          transform-origin: left;
          transition: width 0.08s linear;
        }
      `}</style>
      <div className="scroll-progress-track">
        <div className="scroll-progress-fill" style={{ width: `${pct}%` }} />
      </div>
    </>
  )
}
