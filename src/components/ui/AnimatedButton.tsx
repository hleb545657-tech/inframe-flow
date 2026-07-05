import React from 'react'
import { motion } from 'framer-motion'

type ButtonProps = {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  variant?: 'primary' | 'outline'
}

export const AnimatedButton: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = '',
  variant = 'primary',
}) => {
  const baseStyle =
    'px-6 py-3 rounded-lg font-medium transition-colors duration-300'
  const variants = {
    primary: 'bg-primary hover:bg-hover text-white',
    outline:
      'border border-primary text-primary hover:bg-primary hover:text-white',
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {children}
    </motion.button>
  )
}
