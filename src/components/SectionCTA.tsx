import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import Section from './Section'

interface SectionCTAProps {
  title: string
  description: string
  className?: string
  contentClassName?: string
  children: ReactNode
}

const SectionCTA = ({
  title,
  description,
  className = 'bg-gradient-warm text-white text-center',
  contentClassName = 'max-w-3xl mx-auto text-center',
  children,
}: SectionCTAProps) => {
  return (
    <Section className={className}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: '-100px' }}
        className={contentClassName}
      >
        <h2 className="mb-6 text-white">{title}</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto text-white/90">{description}</p>
        {children}
      </motion.div>
    </Section>
  )
}

export default SectionCTA
