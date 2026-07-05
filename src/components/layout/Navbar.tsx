import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Logo } from '../common/Logo'
import { Container } from '../layout/Section'
import { FiMenu, FiX } from 'react-icons/fi'

const menuItems = ['Home', 'Portfolio', 'Services', 'Cases', 'About', 'Contact']

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-md py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <Container className="flex justify-between items-center">
        <Logo className="h-8" />

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-white font-medium">
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-accent transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4 text-sm font-medium">
          <button className="text-accent">RU</button>
          <span className="text-secondary">|</span>
          <button className="hover:text-accent">EN</button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <FiMenu />
        </button>
      </Container>

      {/* Fullscreen Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            className="fixed inset-0 bg-background z-50 flex flex-col items-center justify-center gap-8"
          >
            <button
              className="absolute top-6 right-6 text-white text-3xl"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <FiX />
            </button>
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-3xl font-display text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
