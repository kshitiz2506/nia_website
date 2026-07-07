import { Link } from 'react-router'
import {
  certificatePrograms,
  fellowshipPrograms,
  institutePage,
  instituteWhyTrainWithUs,
  siteInfo,
  workshopPrograms,
} from '../content/siteContent'
import { ArrowRightIcon } from '../components/layout/icons/Icons'
import PageMeta from '../components/layout/PageMeta'
import { staticPageSeo } from '../content/seo'

const PLACEHOLDER =
  'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80'

const phoneHref = `tel:${siteInfo.phone.replace(/\s/g, '')}`

function formatPhone(phone) {
  const digits = phone.replace(/\D/g, '')
  if (digits.startsWith('91') && digits.length === 12) {
    return `+91 ${digits.slice(2, 7)} ${digits.slice(7)}`
  }
  return phone
}

function CourseCard({ item }) {
  return (
    <Link
      to={item.href}
      className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-[0_4px_10px_rgba(0,0,0,0.05)] transition-shadow hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)]"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            e.target.src = PLACEHOLDER
          }}
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-serif text-xl text-nia-dark">{item.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-nia-dark/70">{item.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="rounded-full bg-nia-gold/15 px-3 py-1 text-xs font-medium text-nia-gold-dark">
            {item.duration}
          </span>
          <span className="rounded-full bg-nia-gold/15 px-3 py-1 text-xs font-medium text-nia-gold-dark">
            {item.format}
          </span>
        </div>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-nia-gold-dark transition-colors group-hover:text-nia-gold">
          View Details <ArrowRightIcon className="h-3 w-3" />
        </span>
      </div>
    </Link>
  )
}

function ProgramSection({ id, heading, items, columns = 'lg:grid-cols-3' }) {
  return (
    <section id={id} className="scroll-mt-28">
      <h2 className="font-serif text-3xl text-nia-dark md:text-4xl">{heading}</h2>
      <div className={`mt-8 grid gap-6 sm:grid-cols-2 ${columns}`}>
        {items.map((item) => (
          <CourseCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  )
}

export default function Institute() {
  const { label, heading, description } = institutePage
  const { heading: whyHeading, description: whyDescription, points, ctaLabel, ctaPrefix } =
    instituteWhyTrainWithUs
  const seo = staticPageSeo.institute

  return (
    <div>
      <PageMeta title={seo.title} description={seo.description} path={seo.path} />
      <section className="bg-nia-dark pt-28 pb-14">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <header className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-xs font-medium tracking-[0.25em] text-nia-gold">{label}</p>
            <h1 className="font-serif text-4xl text-white md:text-5xl">{heading}</h1>
            <p className="mt-5 text-sm leading-relaxed text-white/70 sm:text-base">{description}</p>
          </header>
        </div>
      </section>

      <section className="bg-nia-offwhite py-16 pb-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="rounded-2xl bg-white p-8 shadow-[0_4px_10px_rgba(0,0,0,0.05)] md:p-10">
            <h2 className="font-serif text-2xl text-nia-dark md:text-3xl">{whyHeading}</h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-nia-dark/70 sm:text-base">
              {whyDescription}
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-nia-dark/80 sm:text-base">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-nia-gold" />
                  {point}
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-xl bg-nia-offwhite px-5 py-4">
              <p className="text-sm font-semibold text-nia-dark">{ctaLabel}</p>
              <p className="mt-1 text-sm text-nia-dark/70">
                {ctaPrefix}{' '}
                <a href={phoneHref} className="font-medium text-nia-gold-dark hover:underline">
                  {formatPhone(siteInfo.phone)}
                </a>
              </p>
            </div>
          </div>

          <div className="mt-16 space-y-16">
            <ProgramSection
              id="fellowship-programs"
              heading={fellowshipPrograms.heading}
              items={fellowshipPrograms.items}
              columns="lg:grid-cols-2"
            />
            <ProgramSection
              id="certificate-programs"
              heading={certificatePrograms.heading}
              items={certificatePrograms.items}
            />
            <ProgramSection
              id="workshop-programs"
              heading={workshopPrograms.heading}
              items={workshopPrograms.items}
            />
          </div>
        </div>
      </section>
    </div>
  )
}
