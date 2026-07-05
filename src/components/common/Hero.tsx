import React from 'react'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { Typography } from '../common/Typography'
import { AnimatedButton } from '../ui/AnimatedButton'
import { GlassCard } from '../ui/GlassCard'

export const Hero: React.FC = () => {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useTransform(y, [-500, 500], [10, -10])
  const rotateY = useTransform(x, [-500, 500], [-10, 10])

  const springConfig = { damping: 20, stiffness: 100 }
  const smoothRotateX = useSpring(rotateX, springConfig)
  const smoothRotateY = useSpring(rotateY, springConfig)

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
      onMouseMove={(e) => {
        x.set(e.clientX - window.innerWidth / 2)
        y.set(e.clientY - window.innerHeight / 2)
      }}
    >
      {/* Background elements */}
      <motion.div className="absolute top-0 left-0 w-full h-full opacity-30">
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-primary rounded-full blur-[128px]"
          animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-accent rounded-full blur-[128px]"
          animate={{ x: [0, -100, 0], y: [0, -50, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-16">
        {/* Left Content */}
        <div className="flex-1 space-y-8">
          <Typography
            variant="h1"
            className="text-6xl lg:text-8xl leading-tight"
          >
            InFrame
            <br />
            <span className="text-accent">Flow</span>
          </Typography>
          <Typography variant="body" className="text-xl max-w-lg">
            We make videos people remember.
          </Typography>
          <div className="flex gap-4">
            <AnimatedButton variant="primary">View Portfolio</AnimatedButton>
            <AnimatedButton variant="outline">Contact Us</AnimatedButton>
          </div>
        </div>

        {/* Right Content - Showreel Card */}
        <motion.div
          style={{
            perspective: 1000,
            rotateX: smoothRotateX,
            rotateY: smoothRotateY,
          }}
          className="flex-1 w-full"
        >
          <GlassCard className="aspect-video flex items-center justify-center border-2 border-accent/20">
            <Typography
              variant="h2"
              className="text-accent uppercase tracking-widest"
            >
              Coming Soon
            </Typography>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  )
}
