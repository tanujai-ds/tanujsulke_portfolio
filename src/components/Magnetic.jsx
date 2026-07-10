import React, { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

// Wrap any button/link/element to give it a springy magnetic pull toward the cursor.
// Usage: <Magnetic strength={0.35}><button>Click</button></Magnetic>
export default function Magnetic({ children, strength = 0.35, className = '' }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 220, damping: 16, mass: 0.4 })
  const springY = useSpring(y, { stiffness: 220, damping: 16, mass: 0.4 })

  const onMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    x.set((e.clientX - (rect.left + rect.width / 2)) * strength)
    y.set((e.clientY - (rect.top + rect.height / 2)) * strength)
  }

  const onLeave = () => { x.set(0); y.set(0) }

  return (
    <motion.div
      ref={ref}
      className={`magnetic-wrap ${className}`}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ display: 'inline-flex', x: springX, y: springY }}
    >
      {children}
    </motion.div>
  )
}
