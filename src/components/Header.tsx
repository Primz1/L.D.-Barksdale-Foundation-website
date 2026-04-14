import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const logo = new URL('../../assets/Logo-removebg-preview.png', import.meta.url).href

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  useEffect(() => {
    // Respect persisted preference first, then fall back to system theme.
    const storedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const shouldUseDark = storedTheme ? storedTheme === 'dark' : prefersDark
    setIsDark(shouldUseDark)
  }, [])

  useEffect(() => {
    // Theme is applied at the html root so global surfaces can transition together.
    document.documentElement.classList.toggle('theme-dark', isDark)
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Events', href: '/event-calendar' },
    { label: 'Our Staff', href: '/staff' },
    { label: 'Contact', href: '/contact' },
  ]

  const isActive = (href: string) => location.pathname === href

  return (
    <header
      className={`relative z-50 transition-all duration-300 ${
        isScrolled
          ? (isDark
            ? 'bg-[rgba(58,42,50,0.78)] backdrop-blur-xl shadow-lg border-b border-[rgba(255,255,255,0.14)]'
            : 'bg-white/75 backdrop-blur-xl shadow-lg border-b border-white/50')
          : (isDark ? 'bg-[rgba(58,42,50,0.45)] backdrop-blur-lg' : 'bg-white/40 backdrop-blur-lg')
      }`}
    >
      <nav className="container-max flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <img
            src={logo}
            alt="L.D. Barksdale Foundation"
            className="h-12 w-12 md:h-16 md:w-16 object-contain"
          />
          <div className="hidden sm:block">
            <div className="font-bold text-primary-600 text-base md:text-lg">L.D. Barksdale</div>
            <div className={`${isDark ? 'text-slate-300' : 'text-neutral-600'} text-sm`}>Sickle Cell Foundation</div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 lg:gap-12">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              aria-current={isActive(item.href) ? 'page' : undefined}
              className={`nav-link font-medium transition-colors duration-300 ${
                isActive(item.href)
                  ? 'nav-link-active text-primary-500'
                  : isDark
                    ? 'text-slate-200 hover:text-primary-300'
                    : 'text-neutral-700 hover:text-primary-500'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* CTA and Mobile Menu */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            className={`theme-toggle ${isDark ? 'is-dark' : ''}`}
            onClick={() => setIsDark((prev) => !prev)}
            aria-pressed={isDark}
            aria-label="Toggle dark mode"
            title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <span className="theme-toggle-thumb">
              {isDark ? <Moon size={14} /> : <Sun size={14} />}
            </span>
          </button>
          <Link to="/contact" className="btn-primary hidden md:inline-block">
            Donate
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 transition-colors ${isDark ? 'text-slate-200 hover:text-primary-300' : 'text-neutral-700 hover:text-primary-600'}`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden backdrop-blur-lg border-t ${isDark ? 'bg-[rgba(49,36,43,0.9)] border-white/10' : 'bg-white/90 border-white/60'}`}
          >
            <div className="container-max py-4 space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`block py-2 font-medium transition-colors ${
                    isActive(item.href)
                      ? 'text-primary-500'
                      : isDark
                        ? 'text-slate-200 hover:text-primary-300'
                        : 'text-neutral-700 hover:text-primary-500'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link to="/contact" className="btn-primary w-full block text-center mt-4">
                Donate
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
