import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Logo } from '../common/Logo'

export const Loader: React.FC = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.8, ease: 'easeInOut' },
          }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black"
        >
          <motion.div
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            animate={{
              opacity: 1,
              filter: 'blur(0px)',
              textShadow: '0 0 20px #C1E8FF, 0 0 40px #C1E8FF',
            }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            className="relative"
          >
            {/* Голубое свечение позади логотипа */}
            <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full"></div>
            <Logo className="h-16 relative z-10" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
