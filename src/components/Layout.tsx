import { ReactNode, useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import { GhostCursor } from './GhostCursor'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0)
  }, [children])

  useEffect(() => {
    const cleanupFns: Array<() => void> = []

    // Global cursor spotlight feeds CSS variables for ambient mouse-follow contrast.
    const handleGlobalPointer = (event: MouseEvent) => {
      document.documentElement.style.setProperty('--mouse-x', `${event.clientX}px`)
      document.documentElement.style.setProperty('--mouse-y', `${event.clientY}px`)
    }

    window.addEventListener('mousemove', handleGlobalPointer)
    cleanupFns.push(() => window.removeEventListener('mousemove', handleGlobalPointer))

    // Shared pointer-driven effects are attached here so cards only need data-* attributes.
    const setupSpotlight = (el: HTMLElement) => {
      const handleMove = (event: MouseEvent) => {
        const rect = el.getBoundingClientRect()
        const x = event.clientX - rect.left
        const y = event.clientY - rect.top
        el.style.setProperty('--x', `${x}px`)
        el.style.setProperty('--y', `${y}px`)
      }

      const handleLeave = () => {
        el.style.setProperty('--x', '50%')
        el.style.setProperty('--y', '50%')
      }

      el.addEventListener('mousemove', handleMove)
      el.addEventListener('mouseleave', handleLeave)

      cleanupFns.push(() => {
        el.removeEventListener('mousemove', handleMove)
        el.removeEventListener('mouseleave', handleLeave)
      })
    }

    const setupTilt = (el: HTMLElement) => {
      const handleMove = (event: MouseEvent) => {
        const rect = el.getBoundingClientRect()
        const x = (event.clientX - rect.left) / rect.width - 0.5
        const y = (event.clientY - rect.top) / rect.height - 0.5
        el.style.setProperty('--tilt-x', `${-y * 10}deg`)
        el.style.setProperty('--tilt-y', `${x * 10}deg`)
      }

      const handleLeave = () => {
        el.style.setProperty('--tilt-x', '0deg')
        el.style.setProperty('--tilt-y', '0deg')
      }

      el.addEventListener('mousemove', handleMove)
      el.addEventListener('mouseleave', handleLeave)

      cleanupFns.push(() => {
        el.removeEventListener('mousemove', handleMove)
        el.removeEventListener('mouseleave', handleLeave)
      })
    }

    const setupMagnetic = (el: HTMLElement) => {
      const strength = Number(el.dataset.magnetic || 18)

      const handleMove = (event: MouseEvent) => {
        const rect = el.getBoundingClientRect()
        const x = (event.clientX - rect.left - rect.width / 2) / rect.width
        const y = (event.clientY - rect.top - rect.height / 2) / rect.height
        el.style.setProperty('--magnetic-x', `${x * strength}px`)
        el.style.setProperty('--magnetic-y', `${y * strength}px`)
      }

      const handleLeave = () => {
        el.style.setProperty('--magnetic-x', '0px')
        el.style.setProperty('--magnetic-y', '0px')
      }

      el.addEventListener('mousemove', handleMove)
      el.addEventListener('mouseleave', handleLeave)

      cleanupFns.push(() => {
        el.removeEventListener('mousemove', handleMove)
        el.removeEventListener('mouseleave', handleLeave)
      })
    }

    document.querySelectorAll<HTMLElement>('[data-spotlight]')
      .forEach(setupSpotlight)

    document.querySelectorAll<HTMLElement>('[data-tilt]')
      .forEach(setupTilt)

    document.querySelectorAll<HTMLElement>('[data-magnetic]')
      .forEach(setupMagnetic)

    return () => {
      cleanupFns.forEach((cleanup) => cleanup())
    }
  }, [children])

  return (
    <div className="flex flex-col min-h-screen">
      <GhostCursor />
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
