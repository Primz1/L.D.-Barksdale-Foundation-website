export type CalendarTone = 'primary' | 'secondary' | 'accent' | 'warm'

export interface CalendarOccurrence {
  id: number
  date: Date
  tone: CalendarTone
}

// Stable date key used for grouping and lookups in maps.
export const formatDateKey = (date: Date): string => {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

export const getNthWeekdayOfMonth = (year: number, month: number, weekday: number, nth: number): Date => {
  const firstDay = new Date(year, month, 1)
  const firstWeekday = firstDay.getDay()
  const offset = (weekday - firstWeekday + 7) % 7
  const day = 1 + offset + (nth - 1) * 7
  return new Date(year, month, day)
}

// Rule-based schedule generator used until exact date data is available from backend/CMS.
export const getMonthlyEventOccurrences = (viewDate: Date, validEventIds: Set<number>): CalendarOccurrence[] => {
  const year = viewDate.getFullYear()
  const month = viewDate.getMonth()
  const monthEvents: CalendarOccurrence[] = []

  const addEvent = (id: number, date: Date, tone: CalendarTone) => {
    if (!validEventIds.has(id)) return
    monthEvents.push({ id, date, tone })
  }

  // Monthly support group: second Saturday.
  addEvent(1, getNthWeekdayOfMonth(year, month, 6, 2), 'primary')

  // Quarterly workshop: Mar, Jun, Sep, Dec.
  if ([2, 5, 8, 11].includes(month)) {
    addEvent(2, getNthWeekdayOfMonth(year, month, 6, 3), 'secondary')
  }

  // Provider education: Apr and Oct.
  if ([3, 9].includes(month)) {
    addEvent(3, getNthWeekdayOfMonth(year, month, 4, 2), 'accent')
  }

  // Awareness month events: September.
  if (month === 8) {
    addEvent(4, getNthWeekdayOfMonth(year, month, 5, 2), 'warm')
    addEvent(5, getNthWeekdayOfMonth(year, month, 6, 3), 'primary')
  }

  // Family wellness: June and December.
  if ([5, 11].includes(month)) {
    addEvent(6, getNthWeekdayOfMonth(year, month, 0, 4), 'accent')
  }

  return monthEvents
}

export const groupOccurrencesByDate = (events: CalendarOccurrence[]): Map<string, CalendarOccurrence[]> => {
  const grouped = new Map<string, CalendarOccurrence[]>()

  events.forEach((event) => {
    const key = formatDateKey(event.date)
    const current = grouped.get(key) ?? []
    grouped.set(key, [...current, event])
  })

  return grouped
}

export const getCalendarGridDays = (viewDate: Date): Array<Date | null> => {
  const year = viewDate.getFullYear()
  const month = viewDate.getMonth()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const startDay = new Date(year, month, 1).getDay()

  const blanks: Array<Date | null> = Array.from({ length: startDay }, () => null)
  const monthDays: Date[] = Array.from({ length: daysInMonth }, (_, i) => new Date(year, month, i + 1))

  return [...blanks, ...monthDays]
}
