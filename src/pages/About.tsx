import { motion } from 'framer-motion'
import { Shield, Heart, Star, Megaphone, Users } from 'lucide-react'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Section, { SectionHeading } from '../components/Section'
import PageHero from '../components/PageHero'
import SectionCTA from '../components/SectionCTA'
import { FOUNDATION_INFO } from '../constants/content'

gsap.registerPlugin(ScrollTrigger)

const aboutHeroImage = new URL('../../assets/large image about page.png', import.meta.url).href
const missionImage = new URL('../../assets/our mission about page.png', import.meta.url).href

const About = () => {
  const missionRef = useRef<HTMLDivElement>(null)
  const valuesRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Mission section animation
    if (missionRef.current) {
      gsap.fromTo(
        missionRef.current.children,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: missionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }

    // Values section staggered animation
    if (valuesRef.current) {
      gsap.fromTo(
        '.value-card',
        { opacity: 0, y: 30, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: valuesRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }

    // Timeline section pin and reveal
    if (timelineRef.current) {
      const timelineItems = gsap.utils.toArray('.timeline-item')

      timelineItems.forEach((item: any, index: number) => {
        gsap.fromTo(
          item,
          { opacity: 0, x: index % 2 === 0 ? -100 : 100 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: item,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      })
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  const valueIconMap: Record<string, React.ReactNode> = {
    Heart: <Heart size={40} />,
    Shield: <Shield size={40} />,
    Star: <Star size={40} />,
    Megaphone: <Megaphone size={40} />,
    Users: <Users size={40} />,
  }

  return (
    <>
      {/* Hero Section */}
      <PageHero
        title="About L.D. Barksdale Foundation"
        subtitle={`${FOUNDATION_INFO.yearsOfService}+ years of compassionate service to our community`}
        backgroundImage={aboutHeroImage}
        backgroundAlt="About Us"
      />

      {/* Mission Section */}
      <Section>
        <div ref={missionRef} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <img
              src={missionImage}
              alt="Our Mission"
              className="rounded-2xl shadow-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <h2 className="mb-6">Our Mission</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              {FOUNDATION_INFO.mission}
            </p>
            <p className="text-slate-700 mb-6">
              Since our founding in {FOUNDATION_INFO.foundedYear}, we have been dedicated to improving the lives of individuals and families affected by sickle cell disease. Through education, support services, and community partnerships, we work tirelessly to ensure that no one faces this disease alone.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="mt-1 w-3 h-3 bg-primary-500 rounded-full flex-shrink-0" />
                <span className="text-slate-700">Serving {FOUNDATION_INFO.countyServed.length} counties across South Carolina</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 w-3 h-3 bg-primary-500 rounded-full flex-shrink-0" />
                <span className="text-slate-700">{FOUNDATION_INFO.stats[1].value}+ lives touched through our programs</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 w-3 h-3 bg-primary-500 rounded-full flex-shrink-0" />
                <span className="text-slate-700">Dedicated team of professionals and volunteers</span>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Core Values Section */}
      <Section className="section-surface-contrast">
        <SectionHeading
          title="Our Core Values"
          subtitle="The principles that guide our work"
        />
        <div ref={valuesRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {FOUNDATION_INFO.values.map((value, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true, margin: '-100px' }}
              data-spotlight
              className="value-card card-elevation spotlight-card p-6 text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4 flex justify-center text-primary-600">
                {valueIconMap[value.icon] || <Heart />}
              </div>
              <h3 className="font-bold text-lg mb-3">{value.title}</h3>
              <p className="text-slate-600 text-sm">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Leadership Team Section */}
      <Section dark>
        <SectionHeading
          title="Our Leadership"
          subtitle="Meet the dedicated team guiding our mission"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FOUNDATION_INFO.leadership.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true, margin: '-100px' }}
              data-spotlight
              className="group spotlight-card p-4 rounded-2xl bg-white/5 border border-white/10"
            >
              <div className="mb-4 overflow-hidden rounded-xl h-64 bg-slate-700">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="media-contrast-title text-xl font-semibold mb-1">{member.name}</h3>
              <p className="media-contrast-kicker font-medium mb-3">{member.title}</p>
              <p className="media-contrast-body text-sm leading-relaxed">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* History Timeline Section */}
      <Section className="section-surface-alt">
        <SectionHeading
          title="Our Journey"
          subtitle="50 years of impact and growth"
        />
        <div ref={timelineRef} className="max-w-3xl mx-auto">
          {[
            { year: '1974', title: 'Foundation Established', description: 'L.D. Barksdale Sickle Cell Foundation is founded with a vision to support individuals living with sickle cell disease.' },
            { year: '1980s', title: 'Program Expansion', description: 'Education programs expand throughout the Upstate region, reaching more families and healthcare providers.' },
            { year: '2000s', title: 'Regional Leadership', description: 'Foundation becomes recognized as a leader in sickle cell advocacy and support services across South Carolina.' },
            { year: '2020s', title: 'Digital Transformation', description: 'Launch of telehealth services and online support groups, expanding reach and accessibility.' },
          ].map((milestone, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true, margin: '-100px' }}
              className={`timeline-item mb-8 flex gap-6 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary-600 text-white font-bold">
                  {milestone.year.slice(2)}
                </div>
              </div>
              <div className="flex-grow">
                <h4 className="text-lg font-semibold text-slate-900 mb-1">{milestone.title}</h4>
                <p className="text-slate-600">{milestone.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Board Section */}
      <Section className="section-surface-contrast">
        <SectionHeading
          title="Board of Directors & Advisory Board"
          subtitle="Governance and expertise"
        />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="max-w-3xl mx-auto card-elevation p-8"
        >
          <p className="text-slate-700 mb-6">
            Our Board of Directors and Advisory Board bring together healthcare professionals, business leaders, community advocates, and individuals affected by sickle cell disease. This diverse group ensures that our organization remains responsive to community needs and maintains the highest standards of governance and accountability.
          </p>
          <p className="text-slate-700">
            We are actively recruiting passionate volunteers and professionals to join our advisory committees. If you're interested in serving on our board or advisory councils, please contact us at {FOUNDATION_INFO.contact.email}.
          </p>
        </motion.div>
      </Section>

      {/* Call to Action */}
      <SectionCTA
        title="Want to Learn More?"
        description="Connect with our team to learn how you can get involved or support our mission"
      >
        <a href="#" className="px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-slate-100 transition-colors inline-block">
          Get In Touch
        </a>
      </SectionCTA>
    </>
  )
}

export default About
