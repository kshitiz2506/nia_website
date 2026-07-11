import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router'
import { navLinks, siteInfo } from '../../content/siteContent'
import {
  desktopDropdownItemClass,
  desktopDropdownTriggerClass,
  desktopNavLinkClass,
  isNavLinkActive,
  isNavSectionActive,
  mobileDropdownItemClass,
  mobileDropdownTriggerClass,
  mobileNavLinkClass,
} from '../../lib/navActive'
import Logo from './Logo'
import {
  PhoneIcon,
  CalendarIcon,
  ChevronDownIcon,
  MenuIcon,
  CloseIcon,
} from './icons/Icons'

const phoneHref = `tel:${siteInfo.phone.replace(/\s/g, '')}`

function NavDropdown({ label, section, items, pathname, hash }) {
  const [open, setOpen] = useState(false)
  const isSectionActive = isNavSectionActive(section, pathname)

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className={desktopDropdownTriggerClass(isSectionActive)}
        onClick={() => setOpen((value) => !value)}
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
              className={desktopDropdownItemClass(
                isNavLinkActive(pathname, hash, item.href),
              )}
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

function MobileNavDropdown({ label, section, items, pathname, hash, onClose }) {
  const [open, setOpen] = useState(false)
  const isSectionActive = isNavSectionActive(section, pathname)

  return (
    <div className="w-full">
      <button
        type="button"
        className={mobileDropdownTriggerClass(isSectionActive)}
        onClick={() => setOpen((value) => !value)}
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
              className={mobileDropdownItemClass(isNavLinkActive(pathname, hash, item.href))}
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
  const { pathname, hash } = useLocation()

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

          <div className="hidden items-center gap-2 lg:flex">
            <Link to="/" className={desktopNavLinkClass(pathname === '/')}>
              Home
            </Link>
            <NavDropdown
              label="Clinic"
              section="clinic"
              items={navLinks.clinic}
              pathname={pathname}
              hash={hash}
            />
            <NavDropdown
              label="Institute"
              section="institute"
              items={navLinks.institute}
              pathname={pathname}
              hash={hash}
            />
            <NavDropdown
              label="Resources"
              section="resources"
              items={navLinks.resources}
              pathname={pathname}
              hash={hash}
            />
            <Link to="/contact" className={desktopNavLinkClass(pathname === '/contact')}>
              Contact Us
            </Link>
            <Link to="/about" className={desktopNavLinkClass(pathname === '/about')}>
              About Us
            </Link>
          </div>

          <div className="flex shrink-0 items-center gap-3">
            <a
              href={phoneHref}
              className="nav-icon-btn gold-border flex bg-white/5 text-nia-gold hover:bg-white/10 sm:hidden"
              aria-label="Call now"
            >
              <PhoneIcon className="h-4 w-4" />
            </a>
            <Link
              to="/contact"
              className="nav-icon-btn nav-btn-book gold-metallic gold-glow book-pulse flex text-nia-dark sm:hidden"
              aria-label="Book consultation"
            >
              <CalendarIcon className="h-4 w-4" />
            </Link>

            <a href={phoneHref} className="nav-btn-call gold-border hidden sm:flex">
              <PhoneIcon className="h-3.5 w-3.5 text-nia-gold" />
              CALL NOW
            </a>
            <Link
              to="/contact"
              className="nav-btn-book gold-metallic gold-metallic--interactive gold-glow book-pulse hidden sm:flex"
            >
              <CalendarIcon className="h-3.5 w-3.5" />
              Book Now
            </Link>

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

      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex h-[100dvh] w-screen flex-col bg-nia-dark lg:hidden">
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

          <div className="flex-1 overflow-y-auto px-4 py-6">
            <div className="flex flex-col gap-1">
              <Link
                to="/"
                className={mobileNavLinkClass(pathname === '/')}
                onClick={() => setMobileOpen(false)}
              >
                Home
              </Link>
              <MobileNavDropdown
                label="Clinic"
                section="clinic"
                items={navLinks.clinic}
                pathname={pathname}
                hash={hash}
                onClose={() => setMobileOpen(false)}
              />
              <MobileNavDropdown
                label="Institute"
                section="institute"
                items={navLinks.institute}
                pathname={pathname}
                hash={hash}
                onClose={() => setMobileOpen(false)}
              />
              <MobileNavDropdown
                label="Resources"
                section="resources"
                items={navLinks.resources}
                pathname={pathname}
                hash={hash}
                onClose={() => setMobileOpen(false)}
              />
              <Link
                to="/contact"
                className={mobileNavLinkClass(pathname === '/contact')}
                onClick={() => setMobileOpen(false)}
              >
                Contact Us
              </Link>
              <Link
                to="/about"
                className={mobileNavLinkClass(pathname === '/about')}
                onClick={() => setMobileOpen(false)}
              >
                About Us
              </Link>
            </div>

            <div className="mt-8 flex flex-col gap-4">
              <a href={phoneHref} className="nav-btn-call gold-border flex w-full justify-center py-3">
                <PhoneIcon className="h-5 w-5 text-nia-gold" />
                CALL NOW
              </a>
              <Link
                to="/contact"
                className="nav-btn-book gold-metallic gold-metallic--interactive gold-glow flex w-full justify-center py-3"
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
