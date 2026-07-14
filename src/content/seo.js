import { siteInfo } from './siteContent.js'

export const siteName = siteInfo.fullName
export const defaultDescription =
  'Premium dermatology clinic and aesthetic medicine institute in India. Advanced skin, hair, and anti-aging treatments plus fellowship and certificate programs.'

export const defaultOgImage = '/assets/images/logo/clinic_logo.jpeg'

export function getSiteUrl() {
  const url = import.meta.env.VITE_SITE_URL || 'https://www.nianextindia.com'
  return url.replace(/\/$/, '')
}

export function buildPageTitle(pageTitle) {
  return pageTitle ? `${pageTitle} | ${siteName}` : siteName
}

export const staticPageSeo = {
  home: {
    description: defaultDescription,
    path: '/',
  },
  clinic: {
    title: 'Clinic Services',
    description:
      'Explore dermatological and aesthetic treatments including hair, skin, anti-aging, laser, and body contouring at NIA.',
    path: '/clinic',
  },
  institute: {
    title: 'Institute Courses',
    description:
      'Fellowship programs, certificate courses, and hands-on workshops in aesthetic medicine led by expert dermatologists.',
    path: '/institute',
  },
  about: {
    title: 'About Us',
    description: `Learn about ${siteName} — clinical excellence in dermatology and aesthetic medicine education.`,
    path: '/about',
  },
  contact: {
    title: 'Contact Us',
    description:
      'Get in touch with NIA for clinic appointments, NIIA course enrollment, or general inquiries. Call, email, or send us a message.',
    path: '/contact',
  },
  faqs: {
    title: 'FAQs',
    description:
      'Frequently asked questions about NIA clinic treatments, NIIA institute programs, appointments, and patient care.',
    path: '/faqs',
  },
  gallery: {
    title: 'Gallery',
    description:
      'Browse photos and videos from the NIA clinic, treatment results, and aesthetic medicine training sessions.',
    path: '/gallery',
  },
  blog: {
    title: 'Blog',
    description:
      'Skincare tips, anti-aging insights, and expert advice on aesthetic medicine from the NIA team.',
    path: '/blog',
  },
}
