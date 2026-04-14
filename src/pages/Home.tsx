import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Heart, Users, Zap, BookOpen, Stethoscope, Microscope, Bell } from 'lucide-react'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Section, { SectionHeading } from '../components/Section'
import SectionCTA from '../components/SectionCTA'
import AnnouncementBanner from '../components/AnnouncementBanner'
import { StatCard, FeatureCard } from '../components/Cards'
import { FOUNDATION_INFO } from '../constants/content'

gsap.registerPlugin(ScrollTrigger)

const homeBentoImage = new URL('../../assets/home page image 2.png', import.meta.url).href

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null)
  const heroContentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Stagger animation for hero content
    if (heroContentRef.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroContentRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      })

      tl.fromTo(
        '.hero-title',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
      )
      .fromTo(
        '.hero-subtitle',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
        '-=0.4'
      )
      .fromTo(
        '.hero-buttons',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
        '-=0.3'
      )
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  const iconMap: Record<string, React.ReactNode> = {
    BookOpen: <BookOpen size={32} />,
    Users: <Users size={32} />,
    Stethoscope: <Stethoscope size={32} />,
    Heart: <Heart size={32} />,
    Zap: <Zap size={32} />,
    Microscope: <Microscope size={32} />,
  }

  return (
    <>
      {/* Announcement Banner */}
      <AnnouncementBanner
        message="Join us for Sickle Cell Awareness Month this September—learn, connect, and make a difference"
        type="info"
        dismissible={true}
        icon={<Bell size={18} />}
      />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative flex min-h-[620px] md:min-h-[700px] lg:min-h-[760px] items-center overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900"
      >
        {/* Content */}
        <div
          ref={heroContentRef}
          className="container-max relative z-10 flex w-full items-center justify-center py-16 md:py-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl"
          >
            <h1 className="hero-title text-white mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Compassionate Support for Sickle Cell Disease
            </h1>
            <p className="hero-subtitle mb-8 max-w-2xl text-xl text-slate-100 md:text-2xl">
              Empowering individuals and families with education, resources, and community since 1974
            </p>

            <div className="hero-buttons flex flex-col md:flex-row gap-4">
              <Link to="/contact" className="btn-primary inline-flex items-center justify-center gap-2 group">
                Get Help Today <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/contact#donate" className="btn-secondary inline-flex items-center justify-center gap-2 group">
                Make a Donation <Heart size={20} />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute hidden bottom-10 left-1/2 -translate-x-1/2 text-white lg:block"
        >
          <div className="text-center">
            <p className="mb-2 text-sm text-white/90">Scroll to explore</p>
            <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
              <motion.div className="w-1 h-2 bg-white rounded-full" />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Impact Stats Section */}
      <Section className="section-surface-contrast">
        <SectionHeading
          title="Our Impact"
          subtitle="Decades of dedication to transforming lives"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FOUNDATION_INFO.stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true, margin: '-50px' }}
            >
              <StatCard
                label={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                index={idx}
              />
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Bento Highlights Section */}
      <Section className="section-surface-alt">
        <SectionHeading
          title="Community Highlights"
          subtitle="A modular view of how we show up for families"
        />
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 auto-rows-[minmax(190px,auto)]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: '-100px' }}
            data-spotlight
            data-tilt
            data-card-name="bento-care-grid"
            className="bento-card spotlight-card tilt-card md:col-span-4 md:row-span-2 min-h-[360px] md:min-h-[440px]"
          >
            <img
              src={homeBentoImage}
              alt="Community support"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-slate-950/20 backdrop-blur-sm" />
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/52 to-primary-950/70" />
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <span className="media-contrast-kicker inline-flex items-center gap-2 text-xs uppercase tracking-wide">
                  50+ years of care
                </span>
                <h3 className="media-contrast-title mt-3 text-2xl md:text-3xl font-bold">
                  Care that moves with your life, not against it
                </h3>
                <p className="media-contrast-body mt-4 max-w-lg">
                  From telehealth navigation to local advocacy, our team builds a support net that adapts to every family.
                </p>
              </div>
              <div className="mt-6">
                <Link
                  to="/contact"
                  data-magnetic="20"
                  className="magnetic inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white/15 border border-white/40 text-white backdrop-blur-md"
                >
                  Talk to our team <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, margin: '-100px' }}
            data-spotlight
            data-card-name="bento-education"
            className="bento-card spotlight-card md:col-span-2 min-h-[210px]"
          >
            <p className="text-sm uppercase tracking-wide text-slate-700">Education</p>
            <h3 className="mt-3 text-xl font-semibold text-slate-900">Workshops that empower</h3>
            <p className="mt-3 text-sm text-slate-700">
              Community learning labs focused on care plans, nutrition, and family resilience.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true, margin: '-100px' }}
            data-spotlight
            data-card-name="bento-navigation"
            className="bento-card spotlight-card md:col-span-2 min-h-[210px]"
          >
            <p className="text-sm uppercase tracking-wide text-slate-700">Navigation</p>
            <h3 className="mt-3 text-xl font-semibold text-slate-900">Care coordination</h3>
            <p className="mt-3 text-sm text-slate-700">
              Personalized resource mapping for insurance, travel, and specialist access.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: '-100px' }}
            data-spotlight
            data-card-name="bento-support"
            className="bento-card spotlight-card md:col-span-3 min-h-[220px]"
          >
            <p className="text-sm uppercase tracking-wide text-slate-700">Support</p>
            <h3 className="mt-3 text-xl font-semibold text-slate-900">Peer circles and mentors</h3>
            <p className="mt-3 text-sm text-slate-700">
              Safe spaces led by lived experience, matched by age and needs.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            viewport={{ once: true, margin: '-100px' }}
            data-spotlight
            data-card-name="bento-advocacy"
            className="bento-card spotlight-card md:col-span-3 min-h-[220px]"
          >
            <p className="text-sm uppercase tracking-wide text-slate-700">Advocacy</p>
            <h3 className="mt-3 text-xl font-semibold text-slate-900">Policy and awareness</h3>
            <p className="mt-3 text-sm text-slate-700">
              Continuous campaigns that drive funding, research, and community equity.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Services Preview Section */}
      <Section className="section-surface-alt">
        <SectionHeading
          title="Our Services"
          subtitle="Comprehensive support tailored to your needs"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {FOUNDATION_INFO.services.map((service, idx) => (
            <FeatureCard
              key={service.id}
              icon={iconMap[service.icon] || <Heart size={32} />}
              title={service.title}
              description={service.shortDescription}
              index={idx}
            />
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to="/services" className="btn-primary inline-flex items-center gap-2 group">
            Explore All Services <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </Section>

      {/* Coverage Map / Region Section */}
      <Section className="section-surface">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Map visualization */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
            data-spotlight
            data-card-name="coverage-map"
            className="glass-panel spotlight-card p-8"
          >
            <h3 className="mb-6 text-2xl font-bold text-slate-900">Serving 15 Counties</h3>
            <div className="grid grid-cols-2 gap-3">
              {FOUNDATION_INFO.countyServed.map((county, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  className="rounded-lg border border-white/70 bg-white/90 px-4 py-2 text-center shadow-sm shadow-slate-900/5"
                >
                  <span className="font-medium text-primary-700">{county}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Region description */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <h3 className="mb-4 text-3xl font-bold text-slate-900">Upstate & Midlands Coverage</h3>
            <p className="text-lg text-slate-700 mb-6">
              Our network spans across the Upstate and Midlands regions of South Carolina, ensuring that families and individuals affected by sickle cell disease have access to quality care and support services.
            </p>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-3">
                <span className="mt-1 w-2 h-2 bg-primary-500 rounded-full flex-shrink-0" />
                <span>Comprehensive regional coverage with strategic partnerships</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 w-2 h-2 bg-primary-500 rounded-full flex-shrink-0" />
                <span>Local community centers and support group locations</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 w-2 h-2 bg-primary-500 rounded-full flex-shrink-0" />
                <span>Telehealth and remote support options available</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </Section>

      {/* Events Preview Section */}
      <Section className="section-surface-contrast">
        <SectionHeading
          title="Upcoming Events"
          subtitle="Join our growing community"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FOUNDATION_INFO.events.slice(0, 3).map((event, idx) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true, margin: '-100px' }}
              data-spotlight
              data-card-name={`event-card-${event.id}`}
              className="card-elevation spotlight-card overflow-hidden flex flex-col h-full hover:shadow-2xl transition-shadow duration-300"
            >
              {event.image && (
                <div className="aspect-[16/9] overflow-hidden bg-gradient-warm">
                  <img
                    src={event.image}
                    alt={event.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="font-semibold text-lg mb-2 text-slate-900">{event.name}</h3>
                <p className="mb-4 flex-grow text-sm text-slate-700">{event.description}</p>
                <div className="space-y-2 border-t pt-4 text-xs text-slate-700">
                  <p><span className="font-semibold">Frequency:</span> {event.frequency}</p>
                  <p><span className="font-semibold">Time:</span> {event.time}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to="/event-calendar" className="btn-primary inline-flex items-center gap-2 group">
            View Calendar <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </Section>

      {/* Community Stories Section */}
      <Section dark>
        <SectionHeading
          title="Community Impact"
          subtitle="Real stories from real people"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {FOUNDATION_INFO.testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true, margin: '-100px' }}
              data-spotlight
              data-card-name={`testimonial-${idx}`}
              className="glass-panel spotlight-card p-8 min-h-[280px] flex flex-col justify-between"
            >
              <p className="media-contrast-body mb-6 italic leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-semibold text-[#ffe3cf] glow-text-soft">{testimonial.author}</p>
                <p className="text-sm text-[#f6d4bf] glow-text-soft">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Call to Action Section */}
      <SectionCTA
        title="Make a Difference Today"
        description="Your support helps us provide critical services to individuals and families affected by sickle cell disease. Every donation makes a real impact."
        className="text-white text-center bg-[linear-gradient(180deg,rgba(122,30,44,0.92)_0%,rgba(201,106,114,0.82)_58%,rgba(243,236,231,0.96)_100%)]"
      >
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link to="/contact#donate" className="px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-slate-100 transition-colors">
            Donate Now
          </Link>
          <Link to="/contact#volunteer" className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
            Become a Volunteer
          </Link>
        </div>
      </SectionCTA>
    </>
  )
}

export default Home
