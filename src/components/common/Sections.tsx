import React from 'react'
import { motion, type Variants } from 'framer-motion'
import { Typography } from '../common/Typography'
import { GlassCard } from '../ui/GlassCard'
import { Container, Section } from '../layout/Section'
import { AnimatedButton } from '../ui/AnimatedButton'

const reveal: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
}

export const Services: React.FC = () => (
  <Section id="services">
    <Container>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={reveal}
      >
        <Typography variant="h2" className="text-center mb-12">
          Services
        </Typography>
        <div className="grid md:grid-cols-3 gap-6">
          {['Editing', 'Color Grading', 'Motion Graphics'].map((s) => (
            <GlassCard key={s}>
              <Typography variant="h3">{s}</Typography>
            </GlassCard>
          ))}
        </div>
      </motion.div>
    </Container>
  </Section>
)

export const Workflow: React.FC = () => (
  <Section id="workflow" className="bg-surface/20">
    <Container>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={reveal}
      >
        <Typography variant="h2" className="text-center mb-12">
          Workflow
        </Typography>
        <Typography variant="body" className="text-center">
          Coming Soon
        </Typography>
      </motion.div>
    </Container>
  </Section>
)

export const Cases: React.FC = () => (
  <Section id="cases">
    <Container>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={reveal}
      >
        <Typography variant="h2" className="text-center mb-12">
          Cases
        </Typography>
        <Typography variant="body" className="text-center">
          Coming Soon
        </Typography>
      </motion.div>
    </Container>
  </Section>
)

export const About: React.FC = () => (
  <Section id="about" className="bg-surface/20">
    <Container>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={reveal}
      >
        <Typography variant="h2" className="text-center mb-12">
          About
        </Typography>
        <Typography variant="body" className="text-center">
          Coming Soon
        </Typography>
      </motion.div>
    </Container>
  </Section>
)

export const CTA: React.FC = () => (
  <Section id="cta">
    <Container className="text-center">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={reveal}
      >
        <Typography variant="h2" className="mb-8">
          Ready to start?
        </Typography>
        <AnimatedButton>Contact Us</AnimatedButton>
      </motion.div>
    </Container>
  </Section>
)

export const Contacts: React.FC = () => (
  <Section id="contact" className="bg-surface/20">
    <Container>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={reveal}
      >
        <Typography variant="h2" className="text-center mb-12">
          Contacts
        </Typography>
        <Typography variant="body" className="text-center">
          Coming Soon
        </Typography>
      </motion.div>
    </Container>
  </Section>
)
