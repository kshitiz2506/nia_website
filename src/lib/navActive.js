/**
 * Navbar active-state matching.
 *
 * Section index links (/clinic, /institute) match only the exact path with no hash.
 * Detail routes (/clinic/hair) match only their own item — not the section index.
 */

export function isNavLinkActive(pathname, hash, href) {
  const [hrefPath, hrefHash] = href.split('#')
  const currentHash = hash || ''
  const targetHash = hrefHash ? `#${hrefHash}` : ''

  if (hrefHash) {
    return pathname === hrefPath && currentHash === targetHash
  }

  if (hrefPath === '/clinic' || hrefPath === '/institute') {
    return pathname === hrefPath && !currentHash
  }

  if (hrefPath === '/blog') {
    return pathname === '/blog' || pathname.startsWith('/blog/')
  }

  return pathname === hrefPath
}

export function isNavSectionActive(section, pathname) {
  switch (section) {
    case 'clinic':
      return pathname === '/clinic' || pathname.startsWith('/clinic/')
    case 'institute':
      return pathname === '/institute' || pathname.startsWith('/institute/')
    case 'resources':
      return (
        pathname === '/blog' ||
        pathname.startsWith('/blog/') ||
        pathname === '/faqs' ||
        pathname === '/gallery'
      )
    default:
      return false
  }
}

function navTextClass(isActive, inactiveClass) {
  return isActive ? 'text-nia-gold' : inactiveClass
}

export function desktopNavLinkClass(isActive) {
  return `px-3 py-2 text-sm font-semibold tracking-wider transition-colors hover:text-nia-gold ${navTextClass(isActive, 'text-white/90')}`
}

export function desktopDropdownTriggerClass(isActive) {
  return `flex items-center gap-1 px-3 py-2 text-sm font-semibold tracking-wider transition-colors hover:text-nia-gold focus:outline-none ${navTextClass(isActive, 'text-white/90')}`
}

export function desktopDropdownItemClass(isActive) {
  return `block px-4 py-2.5 text-sm transition-colors hover:bg-white/5 hover:text-nia-gold ${
    isActive ? 'bg-white/5 text-nia-gold' : 'text-white/80'
  }`
}

export function mobileNavLinkClass(isActive) {
  return `block py-3 text-lg transition-colors hover:text-nia-gold ${navTextClass(isActive, 'text-white/90')}`
}

export function mobileDropdownTriggerClass(isActive) {
  return `flex w-full items-center justify-between py-3 text-left text-lg transition-colors focus:outline-none ${navTextClass(isActive, 'text-white/90')}`
}

export function mobileDropdownItemClass(isActive) {
  return `block py-2 text-base transition-colors hover:text-nia-gold ${navTextClass(isActive, 'text-white/70')}`
}
