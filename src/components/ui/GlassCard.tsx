import React from 'react'

type CardProps = {
  children: React.ReactNode
  className?: string
}

export const GlassCard: React.FC<CardProps> = ({
  children,
  className = '',
}) => (
  <div
    className={`bg-surface/50 backdrop-blur-md border border-white/10 rounded-2xl p-6 ${className}`}
  >
    {children}
  </div>
)
