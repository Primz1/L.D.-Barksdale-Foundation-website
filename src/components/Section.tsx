import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  className?: string
  dark?: boolean
  id?: string
}

const Section = ({ children, className = '', dark = false, id }: SectionProps) => {
  const hasCustomSurface = /(\s|^)(section-|bg-)/.test(className)
  const surfaceClass = dark ? 'section-dark text-white' : (hasCustomSurface ? '' : 'section-surface')
  return (
    <section
      id={id}
      className={`section-padding ${surfaceClass} ${className}`}
    >
      <div className="container-max">
        {children}
      </div>
    </section>
  )
}

interface SectionHeadingProps {
  title: string
  subtitle?: string
  centered?: boolean
  className?: string
}

export const SectionHeading = ({
  title,
  subtitle,
  centered = true,
  className = '',
}: SectionHeadingProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: '-100px' }}
      className={`mb-12 md:mb-16 ${centered ? 'text-center' : ''} ${className}`}
    >
      <h2 className="section-heading-title mb-4">{title}</h2>
      {subtitle && (
        <p className="section-heading-subtitle text-lg text-slate-600 md:text-xl max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}

export default Section
