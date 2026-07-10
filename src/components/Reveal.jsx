import React from 'react'
import { motion } from 'framer-motion'

const transforms = {
  up: { y: 36 },
  down: { y: -36 },
  left: { x: -36 },
  right: { x: 36 },
  none: {},
  scale: { scale: 0.94 },
}

export default function Reveal({ children, delay = 0, direction = 'up', className = '', once = true }) {
  const initial = { opacity: 0, ...transforms[direction] }

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once, amount: 0.2, margin: '-40px' }}
      transition={{ type: 'spring', stiffness: 120, damping: 18, mass: 0.6, delay: delay / 1000 }}
    >
      {children}
    </motion.div>
  )
}
