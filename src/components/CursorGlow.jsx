import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: -300, y: -300 })

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <motion.div
      className="cursor-glow hidden lg:block"
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: 'spring', stiffness: 500, damping: 50, mass: 0.5 }}
    />
  )
}
