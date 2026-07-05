import React from 'react'

type ContainerProps = {
  children: React.ReactNode
  className?: string
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
}) => (
  <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
    {children}
  </div>
)

type SectionProps = {
  children: React.ReactNode
  className?: string
  id?: string
}

export const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  id,
}) => (
  <section id={id} className={`py-16 md:py-24 ${className}`}>
    {children}
  </section>
)
