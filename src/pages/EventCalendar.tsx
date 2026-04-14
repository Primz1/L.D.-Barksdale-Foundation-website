import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Calendar, MapPin, Clock, Users, ChevronLeft, ChevronRight, CalendarDays } from 'lucide-react'
import Section, { SectionHeading } from '../components/Section'
import PageHero from '../components/PageHero'
import SectionCTA from '../components/SectionCTA'
import { FOUNDATION_INFO } from '../constants/content'
import {
  formatDateKey,
  getCalendarGridDays,
  getMonthlyEventOccurrences,
  groupOccurrencesByDate,
} from '../utils/calendar'

const eventHeroImage = new URL('../../assets/_DSC2188.png', import.meta.url).href

const RECURRING_PROGRAMS = [
  {
    title: 'Support Group Meetings',
    frequency: 'Every Second Saturday',
    time: '10:00 AM - 12:00 PM',
    description: 'Connect with peers, share experiences, and receive support in a safe environment.',
    icon: <Users size={40} />,
  },
  {
    title: 'Youth Leadership Workshops',
    frequency: 'Quarterly',
    time: 'Saturdays, 2:00 PM - 5:00 PM',
    description: 'Empower young people with skills, resilience, and community connection.',
    icon: <Users size={40} />,
  },
  {
    title: 'Healthcare Provider Training',
    frequency: 'Bi-annual',
    time: 'TBD',
    description: 'Professional development for healthcare providers on sickle cell care excellence.',
    icon: <Users size={40} />,
  },
] as const

const EventCalendar = () => {
  const today = new Date()
  const [viewDate, setViewDate] = useState(new Date(today.getFullYear(), today.getMonth(), 1))
  const [selectedDate, setSelectedDate] = useState(today)

  const eventDirectory = useMemo(() => new Map(FOUNDATION_INFO.events.map(event => [event.id, event])), [])

  // Builds visible month events from recurrence rules until exact backend dates are available.
  const monthlyEvents = useMemo(
    () => getMonthlyEventOccurrences(viewDate, new Set(eventDirectory.keys())),
    [eventDirectory, viewDate]
  )

  const eventsByDate = useMemo(() => groupOccurrencesByDate(monthlyEvents), [monthlyEvents])

  const days = useMemo(() => getCalendarGridDays(viewDate), [viewDate])

  const todayKey = formatDateKey(today)
  const selectedKey = formatDateKey(selectedDate)
  const selectedEvents = eventsByDate.get(selectedKey) ?? []

  const toneClasses = {
    primary: 'bg-primary-500',
    secondary: 'bg-secondary-500',
    accent: 'bg-accent-500',
    warm: 'bg-warm-500',
  }

  const monthLabel = viewDate.toLocaleString('en-US', { month: 'long', year: 'numeric' })

  const goToMonth = (direction: number) => {
    const next = new Date(viewDate.getFullYear(), viewDate.getMonth() + direction, 1)
    setViewDate(next)
    setSelectedDate(next)
  }

  return (
    <>
      {/* Hero Section */}
      <PageHero
        title="Stay Connected. Show Up. Support the Mission."
        subtitle="Every event is a step toward stronger care, deeper understanding and empowered community. Browse upcoming events and mark your calendar."
        backgroundImage={eventHeroImage}
        backgroundAlt="Community members gathered at an event"
        overlayClassName="bg-gradient-to-b from-black/78 via-black/64 to-black/62"
        contentClassName="max-w-4xl"
      >
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href="#event-calendar"
            className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 font-semibold text-primary-700 transition-colors hover:bg-slate-100"
          >
            See Our Event Calendar
          </a>
          <Link
            to="/contact#donate"
            className="inline-flex items-center justify-center rounded-lg border border-white/70 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
          >
            Become a Sponsor
          </Link>
        </div>
      </PageHero>

      {/* Events Grid */}
      <Section className="section-surface">
        <SectionHeading
          title="Our Events"
          subtitle="Regular programs and special community gatherings"
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {FOUNDATION_INFO.events.map((event, idx) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true, margin: '-100px' }}
              data-spotlight
              className="card-elevation spotlight-card overflow-hidden flex flex-col hover:shadow-2xl transition-shadow duration-300 group"
            >
              {/* Event Image */}
              {event.image && (
                <div className="h-48 md:h-56 overflow-hidden bg-gradient-warm">
                  <img
                    src={event.image}
                    alt={event.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}

              {/* Event Content */}
              <div className="p-6 md:p-8 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{event.name}</h3>
                <p className="text-slate-700 mb-6 flex-grow">{event.description}</p>

                {/* Event Details */}
                <div className="border-t pt-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <Calendar size={20} className="text-primary-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-slate-900">Frequency</p>
                      <p className="text-slate-600">{event.frequency}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock size={20} className="text-primary-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-slate-900">Time</p>
                      <p className="text-slate-600">{event.time}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin size={20} className="text-primary-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-slate-900">Location</p>
                      <p className="text-slate-600">{event.location}</p>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <button className="mt-6 w-full py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors">
                  Register Interest
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Annual Gala Highlight */}
      <Section dark>
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-center text-white"
          >
            <h2 className="mb-6 text-white">Annual Gala & Fundraiser</h2>
            <p className="text-xl mb-4 text-white/90">
              Our signature event celebrating community, honoring supporters, and advancing our mission.
            </p>
            <p className="text-base text-white/80 mb-8">
              Every September, we gather supporters, community members, and friends for an elegant evening of celebration. The proceeds directly support our vital programs serving individuals and families affected by sickle cell disease.
            </p>
            <div className="glass-panel spotlight-card p-6 mb-8" data-spotlight>
              <p className="text-sm text-white/70 mb-2">Next Event</p>
              <p className="text-3xl font-bold">September 2024</p>
              <p className="text-white/80 mt-2">Details coming soon</p>
            </div>
            <button className="px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-slate-100 transition-colors">
              Join Our Mailing List
            </button>
          </motion.div>
        </div>
      </Section>

      {/* Recurring Programs Info */}
      <Section className="section-surface-alt">
        <SectionHeading
          title="Recurring Programs"
          subtitle="Weekly and monthly opportunities to connect"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {RECURRING_PROGRAMS.map((program, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true, margin: '-100px' }}
              data-spotlight
              className="card-elevation spotlight-card p-8"
            >
              <div className="mb-4 text-primary-600">
                {program.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{program.title}</h3>
              <div className="space-y-3 mb-6 text-sm text-slate-600 border-t pt-4">
                <p><span className="font-semibold">Frequency:</span> {program.frequency}</p>
                <p><span className="font-semibold">Time:</span> {program.time}</p>
              </div>
              <p className="text-slate-700">{program.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Interactive Calendar */}
      <Section id="event-calendar" className="section-surface-contrast">
        <SectionHeading
          title="Event Calendar"
          subtitle="Find upcoming programs and see what is happening today"
        />
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.4fr),minmax(0,1fr)] gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-100px' }}
            data-spotlight
            className="card-elevation spotlight-card p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Monthly View</p>
                <div className="flex items-center gap-2 mt-2">
                  <CalendarDays size={20} className="text-primary-500" />
                  <h3 className="text-2xl font-semibold text-slate-900">{monthLabel}</h3>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => goToMonth(-1)}
                  className="calendar-control h-9 w-9 rounded-full border border-white/60 bg-white/70 text-slate-700 hover:text-primary-600 hover:border-primary-300 transition-colors"
                  aria-label="Previous month"
                >
                  <ChevronLeft size={18} className="mx-auto" />
                </button>
                <button
                  type="button"
                  onClick={() => goToMonth(1)}
                  className="calendar-control h-9 w-9 rounded-full border border-white/60 bg-white/70 text-slate-700 hover:text-primary-600 hover:border-primary-300 transition-colors"
                  aria-label="Next month"
                >
                  <ChevronRight size={18} className="mx-auto" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-7 gap-2 text-xs uppercase tracking-wide text-slate-500 mb-2">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                <span key={day} className="text-center">
                  {day}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-2">
              {days.map((day, index) => {
                if (!day) {
                  return <div key={`blank-${index}`} className="h-12" />
                }

                const dayKey = formatDateKey(day)
                const dayEvents = eventsByDate.get(dayKey) ?? []
                const isToday = dayKey === todayKey
                const isSelected = dayKey === selectedKey
                const tone = dayEvents[0]?.tone

                return (
                  <button
                    key={dayKey}
                    type="button"
                    onClick={() => setSelectedDate(day)}
                    className={`calendar-day h-12 rounded-xl border text-sm font-semibold transition-colors ${
                      isSelected
                        ? 'is-selected border-primary-500 bg-primary-500 text-white shadow-lg'
                        : isToday
                          ? 'is-today border-primary-300 bg-primary-50 text-primary-700'
                          : 'border-white/60 bg-white/70 text-slate-700 hover:border-primary-200 hover:text-primary-600'
                    }`}
                  >
                    <div className="flex flex-col items-center justify-center">
                      <span>{day.getDate()}</span>
                      {dayEvents.length > 0 && (
                        <span className={`mt-1 h-1.5 w-1.5 rounded-full ${tone ? toneClasses[tone] : 'bg-primary-500'}`} />
                      )}
                    </div>
                  </button>
                )
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, margin: '-100px' }}
            data-spotlight
            className="glass-panel spotlight-card p-6"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Selected Day</p>
            <h3 className="mt-2 text-2xl font-semibold text-slate-900">
              {selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
            </h3>
            <p className="text-slate-600 text-sm mt-2">
              {selectedKey === todayKey ? 'Today' : 'Upcoming date'}
            </p>

            <div className="mt-6 space-y-4">
              {selectedEvents.length === 0 && (
                <div className="text-sm text-slate-600">
                  No scheduled events on this day. Browse the calendar to see upcoming programs.
                </div>
              )}
              {selectedEvents.map((event) => {
                const eventInfo = eventDirectory.get(event.id)
                if (!eventInfo) return null
                return (
                  <div key={`${event.id}-${formatDateKey(event.date)}`} className="flex items-start gap-3">
                    <span className={`mt-2 h-2 w-2 rounded-full ${toneClasses[event.tone]}`} />
                    <div>
                      <p className="font-semibold text-slate-900">{eventInfo.name}</p>
                      <p className="text-sm text-slate-600">{eventInfo.time} · {eventInfo.location}</p>
                      <p className="text-xs text-slate-500 mt-1">{eventInfo.frequency}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* CTA Section */}
      <SectionCTA
        title="Don't Miss Our Events"
        description="Subscribe to our newsletter to stay updated on the latest programs and special announcements"
      >
        <form className="max-w-md mx-auto flex gap-2">
          <input
            type="email"
            placeholder="Your email"
            className="flex-grow px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400"
            required
          />
          <button
            type="submit"
            className="px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-slate-100 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </SectionCTA>
    </>
  )
}

export default EventCalendar
