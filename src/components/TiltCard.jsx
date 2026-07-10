import React, { useRef } from 'react'

// Subtle 3D tilt + glare on hover — wrap any card element with it.
export default function TiltCard({ children, className = '', style = {}, max = 8 }) {
  const ref = useRef(null)
  const glareRef = useRef(null)

  const onMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    const rx = (0.5 - py) * max
    const ry = (px - 0.5) * max
    el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`
    if (glareRef.current) {
      glareRef.current.style.background = `radial-gradient(circle at ${px * 100}% ${py * 100}%, rgba(207,255,61,0.16), rgba(154,139,255,0.06) 45%, transparent 65%)`
    }
  }

  const onLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0px)'
    if (glareRef.current) glareRef.current.style.background = 'transparent'
  }

  return (
    <div
      ref={ref}
      className={`tilt-card ${className}`}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ position: 'relative', transition: 'transform 0.35s cubic-bezier(0.16,1,0.3,1)', willChange: 'transform', ...style }}
    >
      <div ref={glareRef} style={{ position: 'absolute', inset: 0, borderRadius: 'inherit', pointerEvents: 'none', zIndex: 2, transition: 'background 0.2s' }} />
      {children}
    </div>
  )
}
