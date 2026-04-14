import { Link } from 'react-router-dom'
import { Facebook, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react'
import { FOUNDATION_INFO } from '../constants/content'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-ivory-50 text-black">
      <div className="h-14 md:h-16 bg-gradient-to-b from-[rgba(201,106,114,0.45)] via-[rgba(232,167,161,0.3)] to-transparent" />
      {/* Main Footer Content */}
      <div className="container-max py-12 md:py-16 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-black">About Us</h3>
          <p className="text-sm text-black leading-relaxed mb-4">
            {FOUNDATION_INFO.description}
          </p>
          <p className="text-xs text-black/90">
            Serving {FOUNDATION_INFO.countyServed.length} counties since {FOUNDATION_INFO.foundedYear}
          </p>
          <p className="text-xs text-black/90 mt-1">
            EIN {FOUNDATION_INFO.ein}
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-black">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="text-black hover:text-primary-700 transition-colors">Home</Link></li>
            <li><Link to="/about" className="text-black hover:text-primary-700 transition-colors">About</Link></li>
            <li><Link to="/services" className="text-black hover:text-primary-700 transition-colors">Services</Link></li>
            <li><Link to="/event-calendar" className="text-black hover:text-primary-700 transition-colors">Events</Link></li>
            <li><Link to="/staff" className="text-black hover:text-primary-700 transition-colors">Our Staff</Link></li>
            <li><Link to="/contact" className="text-black hover:text-primary-700 transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Get Involved */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-black">Get Involved</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/contact#donate" className="text-black hover:text-primary-700 transition-colors">Donate Now</Link></li>
            <li><Link to="/contact#volunteer" className="text-black hover:text-primary-700 transition-colors">Volunteer</Link></li>
            <li><a href="#" className="text-black hover:text-primary-700 transition-colors">Fundraise</a></li>
            <li><a href="#" className="text-black hover:text-primary-700 transition-colors">Corporate Partners</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-black">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2 text-black">
              <MapPin size={16} className="mt-0.5 flex-shrink-0 text-black/90" />
              <span>{FOUNDATION_INFO.contact.address}</span>
            </li>
            <li className="flex items-center gap-2 text-black">
              <Phone size={16} className="text-black/90" />
              <a href={`tel:${FOUNDATION_INFO.contact.phone}`} className="text-black hover:text-primary-700 transition-colors">
                {FOUNDATION_INFO.contact.phone}
              </a>
            </li>
            <li className="flex items-center gap-2 text-black">
              <Mail size={16} className="text-black/90" />
              <a href={`mailto:${FOUNDATION_INFO.contact.email}`} className="text-black hover:text-primary-700 transition-colors">
                {FOUNDATION_INFO.contact.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Social Links and Copyright */}
      <div className="border-t border-slate-300 mt-8 pt-8">
        <div className="container-max flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a href={FOUNDATION_INFO.socialMedia.facebook} target="_blank" rel="noopener noreferrer" className="p-2 text-black hover:bg-slate-200 hover:text-black rounded-lg transition-colors" aria-label="Facebook">
              <Facebook size={20} />
            </a>
            <a href={FOUNDATION_INFO.socialMedia.instagram} target="_blank" rel="noopener noreferrer" className="p-2 text-black hover:bg-slate-200 hover:text-black rounded-lg transition-colors" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href={FOUNDATION_INFO.socialMedia.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 text-black hover:bg-slate-200 hover:text-black rounded-lg transition-colors" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right text-sm text-black/90">
            <p>© {currentYear} {FOUNDATION_INFO.name}. All rights reserved.</p>
            <p className="mt-1">
              <a href="#" className="text-black hover:text-primary-700 transition-colors">Privacy Policy</a>
              {' '} | {' '}
              <a href="#" className="text-black hover:text-primary-700 transition-colors">Terms of Service</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
