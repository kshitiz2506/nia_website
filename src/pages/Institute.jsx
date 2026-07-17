import { Link } from 'react-router'
import {
  certificatePrograms,
  instituteEnrollCta,
  institutePage,
  instituteWhyTrainWithUs,
  siteInfo,
  workshopPrograms,
} from '../content/siteContent'
import { ArrowRightIcon } from '../components/layout/icons/Icons'
import PageMeta from '../components/layout/PageMeta'
import AccreditationsSection from '../components/home/AccreditationsSection'
import { useReveal } from '../components/ui/Reveal'
import { staticPageSeo } from '../content/seo'
import { formatPhone, phoneDigits } from '../lib/formatPhone'
import { PLACEHOLDER_IMAGES } from '../lib/placeholderImages'

const phoneHref = `tel:${phoneDigits(siteInfo.phone)}`

function CourseCard({ item, index }) {
  const { revealProps } = useReveal(index)

  return (
    <Link
      {...revealProps}
      to={item.href}
      className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-[0_4px_10px_rgba(0,0,0,0.05)] transition-shadow hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)]"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            e.target.src = PLACEHOLDER_IMAGES.courseCard
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
  const { revealProps } = useReveal(0)

  return (
    <section id={id} className="scroll-mt-28">
      <h2 {...revealProps} className="font-serif text-3xl text-nia-dark md:text-4xl">
        {heading}
      </h2>
      <div className={`mt-8 grid gap-6 sm:grid-cols-2 ${columns}`}>
        {items.map((item, index) => (
          <CourseCard key={item.id} item={item} index={index % 4} />
        ))}
      </div>
    </section>
  )
}

export default function Institute() {
  const { label, heading, description } = institutePage
  const { heading: whyHeading, description: whyDescription, points, ctaLabel, ctaPrefix } =
    instituteWhyTrainWithUs
  const { heading: enrollHeading, description: enrollDescription, buttonLabel, buttonHref } =
    instituteEnrollCta
  const seo = staticPageSeo.institute
  const headerReveal = useReveal(0)
  const whyReveal = useReveal(0)
  const enrollTitle = useReveal(0)
  const enrollCopy = useReveal(1)
  const enrollAction = useReveal(2)

  return (
    <div>
      <PageMeta title={seo.title} description={seo.description} path={seo.path} />
      <section className="bg-nia-dark pt-28 pb-14">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <header {...headerReveal.revealProps} className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-xs font-medium tracking-[0.25em] text-nia-gold">{label}</p>
            <h1 className="font-serif text-4xl text-white md:text-5xl">{heading}</h1>
            <p className="mt-5 text-sm leading-relaxed text-white/70 sm:text-base">{description}</p>
          </header>
        </div>
      </section>

      <section className="bg-nia-offwhite py-16 pb-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div
            {...whyReveal.revealProps}
            className="rounded-2xl bg-white p-8 shadow-[0_4px_10px_rgba(0,0,0,0.05)] md:p-10"
          >
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

          <AccreditationsSection variant="light" className="mt-12" />

          <div className="mt-16 space-y-16">
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

      <section className="bg-nia-dark py-16">
        <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
          <h2 {...enrollTitle.revealProps} className="font-serif text-3xl text-white md:text-4xl">
            {enrollHeading}
          </h2>
          <p
            {...enrollCopy.revealProps}
            className="mt-4 text-sm leading-relaxed text-white/70 sm:text-base"
          >
            {enrollDescription}
          </p>
          <Link {...enrollAction.revealProps} to={buttonHref} className="btn-gold btn-gold--lg mt-8">
            {buttonLabel}
          </Link>
        </div>
      </section>
    </div>
  )
}
