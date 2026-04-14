import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import Section, { SectionHeading } from '../components/Section'
import SectionCTA from '../components/SectionCTA'
import { FOUNDATION_INFO } from '../constants/content'

gsap.registerPlugin(ScrollTrigger)

const StaffDirectory = () => {
  const boardCardsRef = useRef<HTMLDivElement>(null)
  const advisoryCardsRef = useRef<HTMLDivElement>(null)
  const [expandedCard, setExpandedCard] = useState<number | null>(null)

  useEffect(() => {
    // Stamp animation for Board of Directors
    if (boardCardsRef.current) {
      gsap.fromTo(
        boardCardsRef.current.querySelectorAll('.board-card'),
        { opacity: 0, scale: 0.8, rotationY: -90 },
        {
          opacity: 1,
          scale: 1,
          rotationY: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'back.out',
          scrollTrigger: {
            trigger: boardCardsRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }

    // Stagger animation for Advisory Board
    if (advisoryCardsRef.current) {
      gsap.fromTo(
        advisoryCardsRef.current.querySelectorAll('.advisory-card'),
        { opacity: 0, y: 30, rotationX: -60 },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: advisoryCardsRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }
  }, [])

  const CardComponent = ({ member, type = 'board' }: any) => {
    const className = type === 'board' ? 'board-card' : 'advisory-card'
    
    return (
      <motion.div
        key={member.id}
        className={`${className} group relative`}
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
      >
        <div className="h-full bg-white border-2 border-slate-200 rounded-2xl p-6 hover:border-primary-600 hover:shadow-lg transition-all duration-300 cursor-pointer"
          onClick={() => setExpandedCard(expandedCard === member.id ? null : member.id)}
        >
          {/* Decorative accent */}
          <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-primary-600/20 to-transparent rounded-bl-2xl" />
          
          <div className="relative z-10">
            <h3 className="text-lg font-bold text-slate-900 mb-1">
              {member.name}
            </h3>
            <p className="text-sm font-semibold text-primary-600 mb-3">
              {member.title}
            </p>
            <div className="flex items-start gap-2">
              <div className="w-1 h-1 bg-primary-600 rounded-full mt-1 flex-shrink-0" />
              <p className="text-sm text-slate-600">
                {member.affiliation}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <div className="min-h-screen bg-ivory-50">
      <PageHero
        title="Our Leadership"
        subtitle="Meet the dedicated individuals leading our mission"
        description="Our Board of Directors and Community Advisory Board bring diverse expertise and lived experience to guide our organization's strategic direction and community impact."
      />

      {/* Management Team */}
      <Section>
        <div className="container-max">
          <SectionHeading
            title="Executive Team"
            subtitle="The dedicated leaders managing our daily operations"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {FOUNDATION_INFO.leadership.map((member, index) => (
              <motion.div
                key={member.name}
                className="group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative overflow-hidden rounded-2xl bg-white border-2 border-slate-100 hover:border-primary-600 transition-all group-hover:shadow-lg">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-64 bg-gradient-to-br from-primary-100 to-primary-50 flex items-center justify-center">
                      <span className="text-4xl font-bold text-primary-200">
                        {member.name.charAt(0)}
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                    <p className="text-sm text-white/90">{member.title}</p>
                  </div>
                </div>
                <p className="text-sm text-slate-600 mt-3 text-center">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Board of Directors */}
      <Section variant="light">
        <div className="container-max">
          <SectionHeading
            title="Board of Directors"
            subtitle="Strategic oversight and fiduciary responsibility"
          />
          
          <p className="max-w-3xl mx-auto text-center text-slate-700 mb-12">
            The Board of Directors provides strategic oversight, financial stewardship and organizational accountability for the L.D. Barksdale Foundation. This group of dedicated leaders ensures our mission is fulfilled with integrity, guides long-term decisions, approves key initiatives and supports sustainable growth.
          </p>

          <div ref={boardCardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FOUNDATION_INFO.boardOfDirectors.map((member) => (
              <CardComponent key={member.id} member={member} type="board" />
            ))}
          </div>
        </div>
      </Section>

      {/* Community Advisory Board */}
      <Section>
        <div className="container-max">
          <SectionHeading
            title="Community Advisory Board"
            subtitle="Community voice and lived experience"
          />
          
          <p className="max-w-3xl mx-auto text-center text-slate-700 mb-12">
            Our Community Advisory Board serves as a bridge between the foundation and the communities we serve. Composed of local advocates, patients, caregivers and health professionals, this board offers valuable insight, feedback and lived experience to help shape our programs, outreach efforts and partnerships from the ground up.
          </p>

          <div ref={advisoryCardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FOUNDATION_INFO.communityAdvisoryBoard.map((member) => (
              <CardComponent key={member.id} member={member} type="advisory" />
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <SectionCTA
        title="Join Our Leadership"
        description="We're always looking for passionate individuals to serve on our committees and help guide our mission forward."
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Link to="/contact#volunteer" className="btn-primary">
            Get Involved
          </Link>
          <Link to="/about" className="btn-secondary">
            Learn More
          </Link>
        </div>
      </SectionCTA>
    </div>
  )
}

export default StaffDirectory
