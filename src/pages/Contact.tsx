import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Heart, Phone, Mail, MapPin, Clock, Gift } from 'lucide-react'
import Section, { SectionHeading } from '../components/Section'
import PageHero from '../components/PageHero'
import { FOUNDATION_INFO } from '../constants/content'

const Contact = () => {
  const sponsorLogoMap: Record<string, string> = {
    'United T.E.A.M. Initiatives': new URL('../../assets/sponsors/united-team-initiatives.png', import.meta.url).href,
    'Spartanburg County, South Carolina': new URL('../../assets/sponsors/spartanburg-county.png', import.meta.url).href,
    'Spartanburg Regional Healthcare System': new URL('../../assets/sponsors/spartanburg-regional.svg', import.meta.url).href,
    'ReGenesis Health Care': new URL('../../assets/sponsors/regenesis-health-care.svg', import.meta.url).href,
    'Pfizer': new URL('../../assets/sponsors/pfizer.svg', import.meta.url).href,
    'North Central Family Medicine': new URL('../../assets/sponsors/north-central-family-medicine.svg', import.meta.url).href,
    'Founders Federal Credit Union': new URL('../../assets/sponsors/founders-fcu.svg', import.meta.url).href,
    "Denny's": new URL('../../assets/sponsors/dennys.svg', import.meta.url).href,
    'Beam Therapeutics': new URL('../../assets/sponsors/beam-therapeutics.svg', import.meta.url).href,
    'Allstate Foundation': new URL('../../assets/sponsors/allstate-foundation.png', import.meta.url).href,
    'City of Spartanburg, South Carolina': new URL('../../assets/sponsors/city-of-spartanburg.png', import.meta.url).href,
    'Community Mortuary, Inc.': new URL('../../assets/sponsors/community-mortuary.png', import.meta.url).href,
  }

  const operatingHours = [
    { day: 'Mon', time: FOUNDATION_INFO.contact.hours.monday },
    { day: 'Tue', time: FOUNDATION_INFO.contact.hours.tuesday },
    { day: 'Wed', time: FOUNDATION_INFO.contact.hours.wednesday },
    { day: 'Thu', time: FOUNDATION_INFO.contact.hours.thursday },
    { day: 'Fri', time: FOUNDATION_INFO.contact.hours.friday },
    { day: 'Sat', time: FOUNDATION_INFO.contact.hours.saturday },
    { day: 'Sun', time: FOUNDATION_INFO.contact.hours.sunday },
  ]

  return (
    <>
      {/* Hero Section */}
      <PageHero
        title="Get Involved"
        subtitle="Multiple ways to give, volunteer, and support our mission"
        className="bg-gradient-warm"
      />

      {/* Quick Give Cards */}
      <Section id="donate" className="section-surface">
        <SectionHeading
          title="Make a Donation"
          subtitle="100% of donations support our programs and services"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {FOUNDATION_INFO.donationTiers.map((tier, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true, margin: '-100px' }}
              data-spotlight
              className="card-elevation spotlight-card p-8 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <Gift className="mx-auto mb-4 text-primary-600 group-hover:scale-110 transition-transform" size={40} />
              <p className="text-3xl font-bold text-primary-600 mb-2">${tier.amount}</p>
              <h3 className="text-xl font-bold mb-2 text-slate-900">{tier.label}</h3>
              <p className="text-slate-600 text-sm mb-6">{tier.description}</p>
              <button className="w-full py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors">
                Donate ${tier.amount}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Custom Amount */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, margin: '-100px' }}
          data-spotlight
          className="max-w-2xl mx-auto card-elevation spotlight-card p-8 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Custom Amount</h3>
          <p className="text-slate-600 mb-6">
            Want to make a specific donation? Choose any amount that works for you.
          </p>
          <div className="flex gap-4 mb-6">
            <input
              type="number"
              placeholder="Enter amount"
              className="flex-grow px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-primary-600"
            />
            <button className="px-6 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors">
              Donate
            </button>
          </div>
          <p className="text-sm text-slate-500">
            All donations are tax-deductible. EIN: {FOUNDATION_INFO.ein}
          </p>
        </motion.div>
      </Section>

      {/* Why Give Section */}
      <Section className="section-surface-contrast">
        <SectionHeading
          title="Where Your Donation Goes"
          subtitle="Transparency and impact"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            { percentage: 65, label: 'Direct Services', description: 'Support, education, and healthcare navigation programs' },
            { percentage: 25, label: 'Program Operations', description: 'Staff, facilities, and program coordination' },
            { percentage: 10, label: 'Development', description: 'Fundraising and future program expansion' },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true, margin: '-100px' }}
              className="text-center"
            >
              <div className="relative w-32 h-32 mx-auto mb-4">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="#e5e7eb" strokeWidth="8" />
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#7A1E2C"
                    strokeWidth="8"
                    strokeDasharray={`${(item.percentage / 100) * 283} 283`}
                    strokeLinecap="round"
                    transform="rotate(-90 50 50)"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary-600">{item.percentage}%</span>
                </div>
              </div>
              <h4 className="font-bold text-lg mb-2">{item.label}</h4>
              <p className="text-slate-600 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Volunteer Section */}
      <Section dark id="volunteer">
        <SectionHeading
          title="Volunteer Opportunities"
          subtitle="Make a direct impact with your time and talents"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {FOUNDATION_INFO.volunteerRoles.map((role, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true, margin: '-100px' }}
              data-spotlight
              className="glass-panel spotlight-card p-8 border border-white/20 rounded-xl hover:border-primary-400 transition-colors"
            >
              <h3 className="text-xl font-bold text-white mb-3">{role.role}</h3>
              <p className="text-slate-200 mb-4">{role.description}</p>
              <div className="space-y-3 mb-6 text-sm text-slate-300 border-t border-white/10 pt-4">
                <p><span className="font-semibold">Time Commitment:</span> {role.commitment}</p>
                <p><span className="font-semibold">Requirements:</span> {role.requirements}</p>
              </div>
              <button className="w-full py-2 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors text-sm">
                Learn More
              </button>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Office Hours & Contact */}
      <Section className="section-surface-alt">
        <SectionHeading
          title="Office Hours & Contact"
          subtitle="Reach out to our team"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-6"
          >
            <div className="flex gap-4">
              <Phone className="text-primary-600 flex-shrink-0" size={24} />
              <div>
                <h4 className="font-bold mb-1 text-slate-900">Phone</h4>
                <p className="text-slate-700">{FOUNDATION_INFO.contact.phone}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Mail className="text-primary-600 flex-shrink-0" size={24} />
              <div>
                <h4 className="font-bold mb-1 text-slate-900">Email</h4>
                <p className="text-slate-700">{FOUNDATION_INFO.contact.email}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <MapPin className="text-primary-600 flex-shrink-0" size={24} />
              <div>
                <h4 className="font-bold mb-1 text-slate-900">Location</h4>
                <p className="text-slate-700">{FOUNDATION_INFO.contact.address}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Clock className="text-primary-600 flex-shrink-0" size={24} />
              <div>
                <h4 className="font-bold mb-1 text-slate-900">Tax Information</h4>
                <p className="text-slate-700 text-sm">EIN: {FOUNDATION_INFO.ein}</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
            data-spotlight
            className="card-elevation spotlight-card p-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-slate-900">Send us a Message</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-primary-600"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-primary-600"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Subject</label>
                <select className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-primary-600">
                  <option>Select a topic</option>
                  <option>Get Help</option>
                  <option>Volunteer</option>
                  <option>Donate</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-primary-600"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </Section>

      {/* Hours of Operation */}
      <Section className="section-surface-contrast">
        <SectionHeading
          title="Hours of Operation"
          subtitle="Call, email, or visit us during these office hours"
        />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          data-spotlight
          className="card-elevation spotlight-card max-w-4xl mx-auto p-4 md:p-6"
        >
          <div className="divide-y divide-slate-300/70">
            {operatingHours.map((item) => (
              <div key={item.day} className="flex items-center justify-between py-4 text-slate-800">
                <span className="font-medium">{item.day}</span>
                <span className="font-semibold tracking-wide">{item.time.toUpperCase()}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* Sponsors */}
      <Section className="section-surface">
        <SectionHeading
          title="Our Sponsors"
          subtitle="Your generosity brings us one step closer to equity in care and awareness"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {FOUNDATION_INFO.sponsors.map((sponsor, idx) => (
            <motion.div
              key={sponsor.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.04 }}
              viewport={{ once: true, margin: '-100px' }}
              data-spotlight
              className="spotlight-card card-elevation min-h-[160px] px-6 py-5"
            >
              <a
                href={sponsor.website}
                target="_blank"
                rel="noreferrer"
                className="flex h-full w-full flex-col items-center justify-center text-center"
                aria-label={`Visit ${sponsor.name}`}
              >
                <img
                  src={sponsorLogoMap[sponsor.name]}
                  alt={`${sponsor.name} logo`}
                  loading="lazy"
                  className="h-16 w-auto max-w-full object-contain"
                />
                <p className="mt-3 font-semibold text-slate-800 leading-snug">{sponsor.name}</p>
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mt-10 text-center"
        >
          <Link
            to="/contact#donate"
            className="inline-flex items-center justify-center rounded-full bg-primary-700 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-800"
          >
            Become a Sponsor
          </Link>
        </motion.div>
      </Section>

      {/* Sticky Support CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed bottom-6 right-6 z-40 hidden md:block"
      >
        <button className="magnetic p-4 bg-primary-600 text-white rounded-full shadow-lg hover:bg-primary-700 transition-all hover:shadow-xl" data-magnetic="16">
          <Heart size={24} />
        </button>
      </motion.div>
    </>
  )
}

export default Contact
