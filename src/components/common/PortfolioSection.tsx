import React from 'react'
import { motion } from 'framer-motion'
import { Typography } from '../common/Typography'
import { GlassCard } from '../ui/GlassCard'
import { Container, Section } from '../layout/Section'
import { portfolioData } from '../../data/portfolio'

export const PortfolioSection: React.FC = () => {
  return (
    <Section id="portfolio" className="bg-background">
      <Container>
        <Typography variant="h2" className="text-center mb-16">
          Selected Work
        </Typography>

        {/* Simple Masonry via CSS Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-max">
          {portfolioData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <GlassCard className="h-full p-0 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:scale-105 hover:shadow-[0_0_30px_rgba(193,232,255,0.3)]">
                {/* Placeholder Image */}
                <div className="aspect-[3/4] bg-surface flex items-center justify-center">
                  <Typography className="text-secondary/50 font-display text-lg">
                    {item.alt}
                  </Typography>
                </div>

                {/* Info Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-background to-transparent">
                  <Typography variant="h3" className="text-white text-lg">
                    {item.title}
                  </Typography>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
