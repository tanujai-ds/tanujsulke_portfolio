import React, { useEffect, useState } from 'react'

export default function Preloader() {
  const [progress, setProgress] = useState(0)
  const [done, setDone] = useState(false)
  const [hide, setHide] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem('ts-visited')) {
      setHide(true)
      return
    }

    let raf
    const start = performance.now()
    const duration = 1400

    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - t, 3)
      setProgress(Math.round(eased * 100))
      if (t < 1) {
        raf = requestAnimationFrame(tick)
      } else {
        setDone(true)
        sessionStorage.setItem('ts-visited', '1')
        setTimeout(() => setHide(true), 700)
      }
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  if (hide) return null

  return (
    <>
      <style>{`
        .preloader {
          position: fixed; inset: 0; z-index: 20000;
          background: #0b0b0c;
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          gap: 28px;
          transition: opacity 0.6s cubic-bezier(0.65,0,0.35,1), transform 0.7s cubic-bezier(0.65,0,0.35,1);
        }
        .preloader.done {
          opacity: 0;
          transform: translateY(-4%);
          pointer-events: none;
        }
        .preloader-mark {
          font-family: var(--font-heading, 'Space Grotesk', sans-serif);
          font-weight: 800;
          font-size: clamp(34px, 6vw, 58px);
          letter-spacing: 0.02em;
          color: #f5f3ef;
          display: flex;
          overflow: hidden;
        }
        .preloader-mark span {
          display: inline-block;
          animation: pl-rise 0.7s cubic-bezier(0.16,1,0.3,1) both;
        }
        @keyframes pl-rise {
          from { transform: translateY(110%); }
          to { transform: translateY(0); }
        }
        .preloader-accent { color: var(--accent, #c8ff00); }
        .preloader-bar-track {
          width: min(240px, 60vw);
          height: 2px;
          background: rgba(245,243,239,0.12);
          border-radius: 2px;
          overflow: hidden;
        }
        .preloader-bar-fill {
          height: 100%;
          background: var(--accent, #c8ff00);
          border-radius: 2px;
          transition: width 0.1s linear;
        }
        .preloader-pct {
          font-family: var(--font-body, 'DM Sans', sans-serif);
          font-size: 12px;
          letter-spacing: 0.2em;
          color: rgba(245,243,239,0.5);
          text-transform: uppercase;
        }
        @media (prefers-reduced-motion: reduce) {
          .preloader-mark span { animation: none; }
        }
      `}</style>
      <div className={`preloader ${done ? 'done' : ''}`} aria-hidden="true">
        <div className="preloader-mark">
          {'TANUJ'.split('').map((c, i) => (
            <span key={i} style={{ animationDelay: `${i * 45}ms` }}>{c}</span>
          ))}
          &nbsp;
          {'SULKE'.split('').map((c, i) => (
            <span key={i} className="preloader-accent" style={{ animationDelay: `${(i + 6) * 45}ms` }}>{c}</span>
          ))}
        </div>
        <div className="preloader-bar-track">
          <div className="preloader-bar-fill" style={{ width: `${progress}%` }} />
        </div>
        <div className="preloader-pct">Loading — {progress}%</div>
      </div>
    </>
  )
}
