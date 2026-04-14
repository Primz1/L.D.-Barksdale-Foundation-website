import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface PageHeroProps {
  title: string
  subtitle: string
  className?: string
  backgroundImage?: string
  backgroundAlt?: string
  backgroundImageClassName?: string
  overlayClassName?: string
  contentClassName?: string
  children?: ReactNode
}

const PageHero = ({
  title,
  subtitle,
  className = '',
  backgroundImage,
  backgroundAlt = 'Section background',
  backgroundImageClassName = 'object-top',
  overlayClassName = 'bg-gradient-to-b from-neutral-950/72 via-neutral-900/58 to-primary-900/55',
  contentClassName = '',
  children,
}: PageHeroProps) => {
  return (
    <section className={`relative min-h-96 md:min-h-[500px] flex items-center justify-center overflow-hidden pt-16 md:pt-0 ${className}`}>
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <img
            src={backgroundImage}
            alt={backgroundAlt}
            className={`w-full h-full object-cover ${backgroundImageClassName}`}
          />
          <div className={`absolute inset-0 ${overlayClassName}`} />
        </div>
      )}

      <div className={`container-max relative z-10 py-16 md:py-0 text-white ${contentClassName}`}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="media-contrast-title mb-4 text-4xl md:text-6xl font-bold">{title}</h1>
          <p className="media-contrast-body text-xl md:text-2xl">{subtitle}</p>
        </motion.div>
        {children}
      </div>
    </section>
  )
}

export default PageHero
