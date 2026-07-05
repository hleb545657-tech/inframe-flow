import React from 'react'

type TypographyProps = {
  children: React.ReactNode
  variant?: 'h1' | 'h2' | 'h3' | 'body'
  className?: string
}

export const Typography: React.FC<TypographyProps> = ({
  children,
  variant = 'body',
  className = '',
}) => {
  const styles = {
    h1: 'font-display text-5xl font-bold text-white',
    h2: 'font-display text-4xl font-semibold text-white',
    h3: 'font-display text-2xl font-semibold text-accent',
    body: 'font-sans text-base text-secondary',
  }

  return <div className={`${styles[variant]} ${className}`}>{children}</div>
}
