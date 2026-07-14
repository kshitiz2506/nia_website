import { Link } from 'react-router'
import Logo from './Logo'
import { footer, siteInfo } from '../../content/siteContent'
import {
  EnvelopeIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  MapPinIcon,
  PhoneIcon,
  WhatsappIcon,
} from './icons/Icons'
import { phoneDigits } from '../../lib/formatPhone'

const socialLinks = [
  { name: 'Instagram', Icon: InstagramIcon, href: siteInfo.instagram },
  { name: 'Facebook', Icon: FacebookIcon, href: siteInfo.facebook },
  { name: 'LinkedIn', Icon: LinkedinIcon, href: siteInfo.linkedin },
  { name: 'WhatsApp', Icon: WhatsappIcon, href: `https://wa.me/${phoneDigits(siteInfo.whatsapp)}` },
]

function ContactLink({ href, icon: Icon, children, external = false }) {
  return (
    <a
      href={href}
      className="flex items-start gap-2 transition-colors hover:text-nia-gold"
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      <Icon className="mt-0.5 h-4 w-4 shrink-0 text-nia-gold" />
      <span>{children}</span>
    </a>
  )
}

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-nia-dark">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Logo & Social */}
          <div className="lg:col-span-1">
            <Logo variant="footer" />
            <div className="mt-6 flex gap-4">
              {socialLinks.map(({ name, Icon, href }) => (
                <a
                  key={name}
                  href={href || '#'}
                  className="text-white/50 transition-colors hover:text-nia-gold"
                  aria-label={name}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Clinic */}
          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-wider text-white">Clinic</h4>
            <ul className="space-y-2">
              {footer.clinicLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm text-white/60 hover:text-nia-gold">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Institute */}
          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-wider text-white">Institute</h4>
            <ul className="space-y-2">
              {footer.instituteLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm text-white/60 hover:text-nia-gold">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-wider text-white">Quick Links</h4>
            <ul className="space-y-2">
              {footer.quickLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm text-white/60 hover:text-nia-gold">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-wider text-white">Contact Us</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li>
                <ContactLink href={`tel:${phoneDigits(siteInfo.phone)}`} icon={PhoneIcon}>
                  {siteInfo.phone}
                </ContactLink>
              </li>
              <li>
                <ContactLink href={`tel:${phoneDigits(siteInfo.phone2)}`} icon={PhoneIcon}>
                  {siteInfo.phone2}
                </ContactLink>
              </li>
              <li>
                <ContactLink href={`mailto:${siteInfo.email}`} icon={EnvelopeIcon}>
                  {siteInfo.email}
                </ContactLink>
              </li>
              <li>
                <ContactLink href={siteInfo.mapsUrl} icon={MapPinIcon} external>
                  {siteInfo.address}
                </ContactLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-white/40">{footer.copyright}</p>
          <div className="flex gap-6">
            <Link to="#privacy" className="text-xs text-white/40 hover:text-nia-gold">
              Privacy Policy
            </Link>
            <Link to="#terms" className="text-xs text-white/40 hover:text-nia-gold">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
