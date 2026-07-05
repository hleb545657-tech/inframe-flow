import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export const CursorGlow: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <motion.div
      className="fixed top-0 left-0 w-[500px] h-[500px] rounded-full bg-accent/10 blur-[150px] pointer-events-none z-50"
      animate={{ x: mousePosition.x - 250, y: mousePosition.y - 250 }}
      transition={{ type: 'spring', damping: 20, stiffness: 100, mass: 0.5 }}
    />
  )
}
