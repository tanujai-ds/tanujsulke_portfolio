import React, { useEffect, useState } from 'react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <style>{`
        .back-to-top {
          position: fixed;
          right: 24px;
          bottom: 24px;
          z-index: 900;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: var(--accent);
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: var(--shadow-accent);
          opacity: 0;
          transform: translateY(16px) scale(0.9);
          pointer-events: none;
          transition: opacity 0.3s var(--ease), transform 0.3s var(--ease);
        }
        .back-to-top.visible {
          opacity: 1;
          transform: translateY(0) scale(1);
          pointer-events: auto;
        }
        .back-to-top:hover { transform: translateY(-4px) scale(1.06); }
        .back-to-top svg { width: 18px; height: 18px; }
        @media (max-width: 600px) {
          .back-to-top { right: 16px; bottom: 16px; width: 44px; height: 44px; }
        }
      `}</style>
      <button
        className={`back-to-top ${visible ? 'visible' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="#0e0e0e" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 19V5" />
          <path d="M5 12l7-7 7 7" />
        </svg>
      </button>
    </>
  )
}
