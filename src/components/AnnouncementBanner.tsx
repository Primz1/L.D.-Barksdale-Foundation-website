import { motion } from 'framer-motion'
import { X } from 'lucide-react'
import { useState } from 'react'

interface AnnouncementBannerProps {
  message: string
  type?: 'info' | 'alert' | 'success'
  dismissible?: boolean
  icon?: React.ReactNode
}

const AnnouncementBanner = ({
  message,
  type = 'info',
  dismissible = true,
  icon,
}: AnnouncementBannerProps) => {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  const bgMap = {
    info: 'bg-gradient-to-r from-primary-600/20 to-primary-700/20 border-primary-500/30',
    alert: 'bg-gradient-to-r from-amber-600/20 to-amber-700/20 border-amber-500/30',
    success: 'bg-gradient-to-r from-emerald-600/20 to-emerald-700/20 border-emerald-500/30',
  }

  const textMap = {
    info: 'text-primary-100',
    alert: 'text-amber-100',
    success: 'text-emerald-100',
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className={`${bgMap[type]} border border-solid backdrop-blur-sm`}
    >
      <div className="container-max flex items-center justify-between gap-4 px-4 py-3 md:px-6 md:py-4">
        <div className="flex items-center gap-3">
          {icon && <div className="flex-shrink-0">{icon}</div>}
          <p className={`${textMap[type]} text-base md:text-lg font-medium`}>{message}</p>
        </div>
        {dismissible && (
          <button
            onClick={() => setIsVisible(false)}
            className="flex-shrink-0 p-1 hover:opacity-75 transition-opacity"
            aria-label="Close announcement"
          >
            <X size={18} className={textMap[type]} />
          </button>
        )}
      </div>
    </motion.div>
  )
}

export default AnnouncementBanner
