import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface AnimatedCounterProps {
  target: number
  suffix?: string
  prefix?: string
  duration?: number
  className?: string
}

export const AnimatedCounter = ({
  target,
  suffix = '',
  prefix = '',
  duration = 2.5,
  className = '',
}: AnimatedCounterProps) => {
  const countRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!countRef.current) return

    const obj = { value: 0 }

    gsap.to(obj, {
      value: target,
      duration,
      scrollTrigger: {
        trigger: countRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
      onUpdate: () => {
        if (countRef.current) {
          const formattedValue = Math.ceil(obj.value).toLocaleString()
          countRef.current.textContent = `${prefix}${formattedValue}${suffix}`
        }
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [target, suffix, prefix, duration])

  return <div ref={countRef} className={className} />
}

interface StatCardProps {
  label: string
  value: number
  suffix?: string
  prefix?: string
  index?: number
}

export const StatCard = ({ label, value, suffix = '', prefix = '', index = 0 }: StatCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, margin: '-100px' }}
      data-spotlight
      data-card-name={`stat-${label.replace(/\s+/g, '-').toLowerCase()}`}
      className="card-elevation neuro-card spotlight-card p-8 text-center hover:shadow-2xl transition-shadow duration-300"
    >
      <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
        <AnimatedCounter target={value} suffix={suffix} prefix={prefix} />
      </div>
      <p className="text-sm font-medium text-slate-700 md:text-base">{label}</p>
    </motion.div>
  )
}

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  index?: number
  imageUrl?: string
}

export const FeatureCard = ({
  icon,
  title,
  description,
  index = 0,
  imageUrl,
}: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, margin: '-100px' }}
      data-spotlight
      data-card-name={`service-${title.replace(/\s+/g, '-').toLowerCase()}`}
      className="card-elevation spotlight-card h-full overflow-hidden hover:shadow-2xl transition-all duration-300 group cursor-pointer hover:-translate-y-1"
    >
      {imageUrl && (
        <div className="aspect-[16/10] overflow-hidden bg-gradient-warm">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <div className="p-6 bg-white/95 backdrop-blur-sm flex h-full flex-col">
        <div className="mb-3 text-primary-600">{icon}</div>
        <h3 className="mb-2 text-lg font-semibold text-slate-900">{title}</h3>
        <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  )
}
