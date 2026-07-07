import { useState, useEffect } from 'react'
import { Link } from 'react-router'
import { navLinks, siteInfo } from '../../content/siteContent'
import Logo from './Logo'
import {
  PhoneIcon,
  CalendarIcon,
  ChevronDownIcon,
  MenuIcon,
  CloseIcon,
} from './icons/Icons'

const phoneHref = `tel:${siteInfo.phone.replace(/\s/g, '')}`

function NavDropdown({ label, items }) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className="flex items-center gap-1 px-3 py-2 text-sm text-white/90 transition-colors hover:text-nia-gold focus:outline-none"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        {label}
        <ChevronDownIcon className={`h-3 w-3 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="absolute left-0 top-full z-50 min-w-[240px] rounded-lg border border-white/10 bg-nia-dark-light py-2 shadow-xl">
          {items.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="block px-4 py-2.5 text-sm text-white/80 transition-colors hover:bg-white/5 hover:text-nia-gold"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

function MobileNavDropdown({ label, items, onClose }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="w-full">
      <button
        type="button"
        className="flex w-full items-center justify-between py-3 text-left text-lg text-white/90 focus:outline-none"
        onClick={() => setOpen((v) => !v)}
      >
        {label}
        <ChevronDownIcon className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="mb-2 flex flex-col gap-1 border-l border-nia-gold/30 pl-4">
          {items.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="block py-2 text-base text-white/70 transition-colors hover:text-nia-gold"
              onClick={onClose}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileOpen])

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-nia-dark/95 backdrop-blur-md">
        <nav className="navbar mx-auto flex max-w-7xl items-center justify-between px-4 lg:px-8">
          
          <div className="flex h-full shrink-0 items-center">
            <Logo variant="navbar" />
          </div>

          <div className="hidden items-center gap-2 lg:flex font-semibold tracking-wider">
            <Link to="/" className="px-3 py-2 text-sm text-white/90 transition-colors hover:text-nia-gold">
              Home
            </Link>
            <NavDropdown label="Clinic" items={navLinks.clinic} />
            <NavDropdown label="Institute" items={navLinks.institute} />
            <NavDropdown label="Resources" items={navLinks.resources} />
            <Link to="/contact" className="px-3 py-2 text-sm text-white/90 text-transition-colors hover:text-nia-gold">
              Contact Us
            </Link>
            <Link to="/about" className="px-3 py-2 text-sm text-white/90 text-transition-colors hover:text-nia-gold">
              About Us
            </Link>
          </div>

          {/* Right: Actions & Mobile Toggle */}
          <div className="flex shrink-0 items-center gap-3">
            {/* Mobile Actions */}
            <a href={phoneHref} className="nav-icon-btn gold-border flex bg-white/5 text-nia-gold hover:bg-white/10 sm:hidden" aria-label="Call now">
              <PhoneIcon className="h-4 w-4" />
            </a>
            <Link to="/contact" className="nav-icon-btn gold-glow book-pulse flex bg-nia-gold text-nia-dark sm:hidden" aria-label="Book consultation">
              <CalendarIcon className="h-4 w-4" />
            </Link>

            {/* Desktop Actions */}
            <a href={phoneHref} className="nav-btn-call gold-border hidden sm:flex">
              <PhoneIcon className="h-3.5 w-3.5 text-nia-gold" />
              CALL NOW
            </a>
            <Link to="/contact" className="nav-btn-book gold-glow book-pulse hidden sm:flex">
              <CalendarIcon className="h-3.5 w-3.5" />
              Book Now
            </Link>

            {/* Hamburger Toggle */}
            <button
              type="button"
              className="p-1 text-white transition-colors hover:text-nia-gold lg:hidden"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <MenuIcon className="h-6 w-6" />
            </button>
          </div>
        </nav>
      </header>

      {/* Full-Screen Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex h-[100dvh] w-screen flex-col bg-nia-dark lg:hidden">
          {/* Mobile Menu Header */}
          <div className="flex h-16 shrink-0 items-center justify-between border-b border-white/10 px-4">
            <span className="font-serif text-lg text-nia-gold">Menu</span>
            <button 
              type="button" 
              className="p-1 text-white transition-colors hover:text-nia-gold"
              onClick={() => setMobileOpen(false)} 
              aria-label="Close menu"
            >
              <CloseIcon className="h-6 w-6" />
            </button>
          </div>
          
          {/* Mobile Menu Content (Scrollable) */}
          <div className="flex-1 overflow-y-auto px-4 py-6">
            <div className="flex flex-col gap-1">
              <Link to="/" className="block py-3 text-lg text-white/90 transition-colors hover:text-nia-gold" onClick={() => setMobileOpen(false)}>
                Home
              </Link>
              <MobileNavDropdown label="Clinic" items={navLinks.clinic} onClose={() => setMobileOpen(false)} />
              <MobileNavDropdown label="Institute" items={navLinks.institute} onClose={() => setMobileOpen(false)} />
              <MobileNavDropdown label="Resources" items={navLinks.resources} onClose={() => setMobileOpen(false)} />
              <Link to="/contact" className="block py-3 text-lg text-white/90 transition-colors hover:text-nia-gold" onClick={() => setMobileOpen(false)}>
                Contact Us
              </Link>
              <Link to="/about" className="block py-3 text-lg text-white/90 transition-colors hover:text-nia-gold" onClick={() => setMobileOpen(false)}>
                About Us
              </Link>
            </div>

            {/* Large Mobile Action Buttons */}
            <div className="mt-8 flex flex-col gap-4">
              <a href={phoneHref} className="nav-btn-call gold-border flex w-full justify-center py-3">
                <PhoneIcon className="h-5 w-5 text-nia-gold" />
                CALL NOW
              </a>
              <Link
                to="/contact"
                className="nav-btn-book gold-glow flex w-full justify-center py-3"
                onClick={() => setMobileOpen(false)}
              >
                <CalendarIcon className="h-5 w-5" />
                BOOK CONSULTATION
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}