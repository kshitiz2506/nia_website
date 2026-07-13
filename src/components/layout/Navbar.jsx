import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router'
import { navLinks, siteInfo } from '../../content/siteContent'
import Logo from './Logo'
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
import { formatPhone, phoneDigits } from '../../lib/formatPhone'
import {
  PhoneIcon,
  CalendarIcon,
  ChevronDownIcon,
  MenuIcon,
  CloseIcon,
} from './icons/Icons'

const callOptions = [
  { label: siteInfo.phoneLabel, number: siteInfo.phone },
  { label: siteInfo.phone2Label, number: siteInfo.phone2 },
].filter((option) => option.number)

function toTelHref(number) {
  return `tel:${phoneDigits(number)}`
}

function CallDropdown({ className, iconOnly = false, align = 'right', onSelect }) {
  const [open, setOpen] = useState(false)
  const hasMultipleOptions = callOptions.length > 1
  const primaryOption = callOptions[0]

  if (!primaryOption) return null

  if (!hasMultipleOptions) {
    return (
      <a href={toTelHref(primaryOption.number)} className={className} aria-label="Call now">
        <PhoneIcon className={iconOnly ? 'h-4 w-4' : 'h-3.5 w-3.5 text-nia-gold'} />
        {!iconOnly && 'CALL NOW'}
      </a>
    )
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className={className}
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-haspopup="menu"
        aria-label="Choose a number to call"
      >
        <PhoneIcon className={iconOnly ? 'h-4 w-4' : 'h-3.5 w-3.5 text-nia-gold'} />
        {!iconOnly && (
          <>
            CALL NOW
            <ChevronDownIcon
              className={`h-3 w-3 transition-transform ${open ? 'rotate-180' : ''}`}
            />
          </>
        )}
      </button>

      {open && (
        <div
          role="menu"
          className={`absolute top-full z-50 mt-2 min-w-[15rem] overflow-hidden rounded-lg border border-white/10 bg-nia-dark-light py-2 shadow-xl ${
            align === 'right' ? 'right-0' : 'left-0'
          }`}
        >
          <p className="px-4 pb-2 text-xs font-medium tracking-wide text-white/50">Choose a line</p>
          {callOptions.map((option) => (
            <a
              key={option.label}
              role="menuitem"
              href={toTelHref(option.number)}
              className={`${desktopDropdownItemClass(false)} flex flex-col gap-0.5`}
              onClick={() => {
                setOpen(false)
                onSelect?.()
              }}
            >
              <span className="font-medium">{option.label}</span>
              <span className="text-xs text-white/60">{formatPhone(option.number)}</span>
            </a>
          ))}
        </div>
      )}
    </div>
  )
}

function MobileCallOptions({ onSelect }) {
  const [open, setOpen] = useState(false)

  if (callOptions.length <= 1) {
    const option = callOptions[0]
    if (!option) return null

    return (
      <a href={toTelHref(option.number)} className="nav-btn-call gold-border flex w-full justify-center py-3">
        <PhoneIcon className="h-5 w-5 text-nia-gold" />
        CALL NOW
      </a>
    )
  }

  return (
    <div className="w-full">
      <button
        type="button"
        className="nav-btn-call gold-border flex w-full items-center justify-center gap-2 py-3"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
      >
        <PhoneIcon className="h-5 w-5 text-nia-gold" />
        CALL NOW
        <ChevronDownIcon className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="mt-2 flex flex-col gap-2">
          {callOptions.map((option) => (
            <a
              key={option.label}
              href={toTelHref(option.number)}
              className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-left transition-colors hover:border-nia-gold/40 hover:bg-white/10"
              onClick={onSelect}
            >
              <p className="text-sm font-medium text-white">{option.label}</p>
              <p className="mt-0.5 text-sm text-white/60">{formatPhone(option.number)}</p>
            </a>
          ))}
        </div>
      )}
    </div>
  )
}

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
            <CallDropdown
              className="nav-icon-btn gold-border flex bg-white/5 text-nia-gold hover:bg-white/10 sm:hidden"
              iconOnly
            />
            <Link
              to="/contact"
              className="nav-icon-btn nav-btn-book gold-metallic gold-glow book-pulse flex text-nia-dark sm:hidden"
              aria-label="Book consultation"
            >
              <CalendarIcon className="h-4 w-4" />
            </Link>

            <CallDropdown className="nav-btn-call gold-border hidden sm:flex" />
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
              <MobileCallOptions onSelect={() => setMobileOpen(false)} />
              <Link
                to="/contact"
                className="nav-btn-book gold-metallic gold-metallic--interactive gold-glow book-pulse flex w-full justify-center py-3"
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
