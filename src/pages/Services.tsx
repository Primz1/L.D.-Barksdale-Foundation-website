import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'
import Section, { SectionHeading } from '../components/Section'
import PageHero from '../components/PageHero'
import SectionCTA from '../components/SectionCTA'
import { FOUNDATION_INFO } from '../constants/content'

const doctorPatient = new URL('../../assets/doctor and patiant.png', import.meta.url).href
const supportGroupImage = new URL('../../assets/Support Group 10.png', import.meta.url).href
const healthcareNavigationImage = new URL('../../assets/Patient and Nurse.png', import.meta.url).href
const financialAssistanceImage = new URL('../../assets/Pharmacist Assisting Customer.png', import.meta.url).href
const youthProgramsImage = new URL('../../assets/Father and Daughter about page.png', import.meta.url).href
const researchAdvocacyImage = new URL('../../assets/SCF exhibit _ rhonda young.png', import.meta.url).href

const serviceImageById: Record<number, { src: string; objectPosition: string }> = {
  1: { src: doctorPatient, objectPosition: 'object-center' },
  2: { src: supportGroupImage, objectPosition: 'object-center' },
  3: { src: healthcareNavigationImage, objectPosition: 'object-center' },
  4: { src: financialAssistanceImage, objectPosition: 'object-center' },
  5: { src: youthProgramsImage, objectPosition: 'object-center' },
  6: { src: researchAdvocacyImage, objectPosition: 'object-center' },
}

const Services = () => {
  return (
    <>
      {/* Hero Section */}
      <PageHero
        title="Our Services"
        subtitle="Comprehensive support designed with you in mind"
        className="bg-gradient-warm"
      />

      {/* How We Help Section */}
      <Section>
        <SectionHeading
          title="How We Help in 3 Steps"
          subtitle="Our proven pathway to meaningful support"
        />
        <div className="max-w-4xl mx-auto">
          {[
            {
              step: 1,
              title: 'Assess Your Needs',
              description: 'We start by understanding your unique situation, challenges, and goals through confidential consultations with our caring team.',
            },
            {
              step: 2,
              title: 'Connect You to Resources',
              description: 'Based on your needs, we connect you with specialized services, medical providers, support groups, and community resources.',
            },
            {
              step: 3,
              title: 'Provide Ongoing Support',
              description: 'We maintain ongoing relationships to ensure you\'re supported throughout your journey and any challenges that arise.',
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true, margin: '-100px' }}
              className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-center"
            >
              <div className={`flex items-center justify-center h-16 w-16 rounded-full bg-primary-600 text-white text-2xl font-bold flex-shrink-0 ${idx % 2 === 0 ? 'md:order-1' : 'md:order-3'}`}>
                {item.step}
              </div>
              <div className={`md:col-span-2 ${idx % 2 === 0 ? 'md:order-2' : 'md:order-2'}`}>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-slate-700">{item.description}</p>
              </div>
              {idx < 2 && (
                <div className={`hidden md:block text-center text-3xl text-primary-300 ${idx % 2 === 0 ? 'md:order-3' : 'md:order-1'}`}>
                  <ArrowRight className="mx-auto" size={32} />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Services Grid */}
      {FOUNDATION_INFO.services.map((service, idx) => (
        <Section
          key={service.id}
          dark={idx % 2 === 1}
          className={idx % 2 === 1 ? '' : 'section-surface-alt'}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image/Icon side */}
            <motion.div
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: '-100px' }}
              className={idx % 2 === 1 ? 'md:order-2' : ''}
            >
              <div className={`relative rounded-2xl overflow-hidden h-80 ${idx % 2 === 1 ? 'bg-slate-800' : 'bg-primary-100'}`}>
                <img
                  src={serviceImageById[service.id]?.src ?? doctorPatient}
                  alt={`${service.title} program`}
                  className={`w-full h-full object-cover ${serviceImageById[service.id]?.objectPosition ?? 'object-center'}`}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/26 via-transparent to-black/12" />
              </div>
            </motion.div>

            {/* Content side */}
            <motion.div
              initial={{ opacity: 0, x: idx % 2 === 0 ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: '-100px' }}
              className={idx % 2 === 1 ? 'md:order-1' : ''}
            >
              <h2 className={idx % 2 === 1 ? 'media-contrast-title' : ''}>{service.title}</h2>
              <p className={`text-lg mb-6 ${idx % 2 === 1 ? 'media-contrast-body' : 'text-slate-700'}`}>
                {service.fullDescription}
              </p>
              <h4 className={`font-semibold mb-4 ${idx % 2 === 1 ? 'media-contrast-kicker' : 'text-slate-900'}`}>
                Key Features:
              </h4>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, featureIdx) => (
                  <li key={featureIdx} className="flex items-start gap-3">
                    <Check size={20} className={idx % 2 === 1 ? 'text-[#ffb9a5] flex-shrink-0' : 'text-primary-600 flex-shrink-0'} />
                    <span className={idx % 2 === 1 ? 'media-contrast-body' : 'text-slate-700'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <a href="#" className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                Learn More <ArrowRight size={18} />
              </a>
            </motion.div>
          </div>
        </Section>
      ))}

      {/* Resource Cards Section */}
      <Section className="section-surface-contrast">
        <SectionHeading
          title="Additional Resources"
          subtitle="Expert-vetted information and external support"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'Sickle Cell Disease Association of America',
              description: 'National organization dedicated to improving the quality of life for individuals with sickle cell disease.',
            },
            {
              title: 'National Heart, Lung, and Blood Institute',
              description: 'Comprehensive health information and research resources about sickle cell disease.',
            },
            {
              title: 'Genetic Counseling Services',
              description: 'Professional guidance on genetic testing, family planning, and disease management.',
            },
            {
              title: 'Pain Management Resources',
              description: 'Specialized resources for managing chronic pain associated with sickle cell disease.',
            },
            {
              title: 'Mental Health Support',
              description: 'Counseling and therapeutic resources for patients and caregivers.',
            },
            {
              title: 'Educational Materials',
              description: 'Free downloadable resources and educational materials about living with sickle cell disease.',
            },
          ].map((resource, idx) => (
            <motion.a
              key={idx}
              href="#"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true, margin: '-100px' }}
              data-spotlight
              className="card-elevation spotlight-card p-6 hover:shadow-xl transition-all duration-300 group"
            >
              <h3 className="font-semibold mb-2 group-hover:text-primary-600 transition-colors">
                {resource.title}
              </h3>
              <p className="text-slate-600 text-sm">{resource.description}</p>
              <div className="mt-4 inline-flex items-center gap-2 text-primary-600 font-medium text-sm">
                Learn More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.a>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <SectionCTA
        title="Ready to Get Started?"
        description="Connect with our team today to learn how we can support you"
      >
        <a href="#" className="px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-slate-100 transition-colors inline-block">
          Contact Us
        </a>
      </SectionCTA>
    </>
  )
}

export default Services
