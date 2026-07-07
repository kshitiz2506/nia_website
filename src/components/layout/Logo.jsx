import { useState } from 'react'
import { Link } from 'react-router'
import { siteInfo } from '../../content/siteContent'

function LogoFallback() {
  return (
    <Link to="/" className="logo-fallback" aria-label={siteInfo.logoAlt}>
      <span className="logo-fallback__name">NIA</span>
      <span className="logo-fallback__tag">AESTHETICS</span>
    </Link>
  )
}

/**
 * @param {'navbar' | 'footer'} variant — controls sizing context
 */
export default function Logo({ variant = 'navbar' }) {
  const [imgError, setImgError] = useState(false)

  if (imgError) {
    return <LogoFallback />
  }

  return (
    <Link to="/" className={`logo-link logo-link--${variant}`} aria-label={siteInfo.logoAlt}>
      <img
        src={siteInfo.logo}
        alt={siteInfo.logoAlt}
        className="logo-img"
        onError={() => setImgError(true)}
      />
    </Link>
  )
}
