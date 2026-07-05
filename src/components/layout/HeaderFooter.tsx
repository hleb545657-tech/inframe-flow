import React from 'react'
import { Logo } from '../common/Logo'
import { Container } from '../layout/Section'

export const Footer: React.FC = () => (
  <footer className="py-12 border-t border-surface">
    <Container className="flex flex-col md:flex-row justify-between items-center gap-6">
      <Logo className="h-6" />
      <p className="text-secondary text-sm">
        &copy; 2026 InFrame Flow. All rights reserved.
      </p>
    </Container>
  </footer>
)
