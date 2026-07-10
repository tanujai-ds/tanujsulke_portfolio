import React, { useEffect, useRef, useState } from 'react'

export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const pos = useRef({ x: 0, y: 0 })
  const ringPos = useRef({ x: 0, y: 0 })
  const raf = useRef(null)
  const [hovering, setHovering] = useState(false)
  const [label, setLabel] = useState('')
  const [enabled, setEnabled] = useState(true)

  useEffect(() => {
    const isCoarse = window.matchMedia('(pointer: coarse)').matches
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (isCoarse || reduced) {
      setEnabled(false)
      return
    }

    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`
      }
    }

    const animate = () => {
      ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.16
      ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.16
      if (ringRef.current) {
        ringRef.current.style.left = `${ringPos.current.x}px`
        ringRef.current.style.top = `${ringPos.current.y}px`
      }
      raf.current = requestAnimationFrame(animate)
    }

    const attach = () => {
      document.querySelectorAll('a, button, [data-cursor]').forEach((el) => {
        if (el.dataset.cursorBound) return
        el.dataset.cursorBound = '1'
        el.addEventListener('mouseenter', () => {
          setHovering(true)
          setLabel(el.getAttribute('data-cursor-text') || (el.tagName === 'A' ? 'Open' : 'Click'))
        })
        el.addEventListener('mouseleave', () => {
          setHovering(false)
          setLabel('')
        })
      })
    }

    document.addEventListener('mousemove', onMove)
    attach()
    const mo = new MutationObserver(attach)
    mo.observe(document.body, { childList: true, subtree: true })
    raf.current = requestAnimationFrame(animate)

    return () => {
      document.removeEventListener('mousemove', onMove)
      mo.disconnect()
      cancelAnimationFrame(raf.current)
    }
  }, [])

  if (!enabled) return null

  return (
    <>
      <style>{`
        * { cursor: none !important; }
        .cursor-dot {
          position: fixed; top: 0; left: 0; z-index: 9999;
          width: 8px; height: 8px;
          background: var(--accent);
          border-radius: 50%;
          pointer-events: none;
          transition: transform 0.05s linear;
          mix-blend-mode: difference;
        }
        .cursor-ring {
          position: fixed; top: 0; left: 0; z-index: 9998;
          width: 40px; height: 40px;
          margin-left: -20px; margin-top: -20px;
          border: 1.5px solid rgba(207,255,61,0.5);
          border-radius: 50%;
          pointer-events: none;
          display: flex; align-items: center; justify-content: center;
          transition: width 0.28s cubic-bezier(0.16,1,0.3,1), height 0.28s cubic-bezier(0.16,1,0.3,1),
                      margin 0.28s cubic-bezier(0.16,1,0.3,1), background 0.28s, border-color 0.28s;
        }
        .cursor-ring.hovering {
          width: 84px; height: 84px;
          margin-left: -42px; margin-top: -42px;
          background: rgba(207,255,61,0.08);
          border-color: transparent;
          background-image: conic-gradient(rgba(15,17,20,0.9), rgba(15,17,20,0.9)), conic-gradient(var(--accent), var(--accent-2), var(--accent-cyan), var(--accent));
          background-origin: border-box;
          background-clip: padding-box, border-box;
          border: 1.5px solid transparent;
        }
        .cursor-label {
          font-family: var(--font-body, 'DM Sans', sans-serif);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--accent);
          opacity: 0;
          transform: scale(0.8);
          transition: opacity 0.2s, transform 0.2s;
          white-space: nowrap;
        }
        .cursor-ring.hovering .cursor-label {
          opacity: 1;
          transform: scale(1);
        }
      `}</style>
      <div className="cursor-dot" ref={dotRef} />
      <div className={`cursor-ring ${hovering ? 'hovering' : ''}`} ref={ringRef}>
        <span className="cursor-label">{label}</span>
      </div>
    </>
  )
}
