import { useState } from 'react'
import { Link } from 'react-router'
import PageMeta from '../components/layout/PageMeta'
import AccreditationsSection from '../components/home/AccreditationsSection'
import TestimonialsSection from '../components/home/TestimonialsSection'
import { useReveal } from '../components/ui/Reveal'
import {
  aboutCta,
  aboutFaculty,
  aboutFeaturedFaculty,
  aboutPage,
} from '../content/siteContent'
import { staticPageSeo } from '../content/seo'

const FACULTY_PLACEHOLDER =
  'https://images.unsplash.com/photo-1612349317150-e413f4a5b16d?w=400&q=80'

function FacultyImage({ src, alt, className = '' }) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={(e) => {
        e.target.src = FACULTY_PLACEHOLDER
      }}
    />
  )
}

function FeaturedFaculty({ faculty }) {
  const mediaReveal = useReveal(0)
  const contentReveal = useReveal(1)

  return (
    <section className="bg-nia-dark py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-nia-gold/25 bg-gradient-to-br from-nia-card to-nia-dark-light">
          <div className="grid items-center gap-10 p-8 md:p-10 lg:grid-cols-[280px_1fr] lg:gap-14">
            <div {...mediaReveal.revealProps} className="mx-auto lg:mx-0">
              <div className="relative mx-auto h-56 w-56 lg:h-64 lg:w-64">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-nia-gold/40 to-nia-gold/10 p-1">
                  <div className="h-full w-full overflow-hidden rounded-full border-4 border-nia-dark bg-nia-dark">
                    <FacultyImage
                      src={faculty.image}
                      alt={faculty.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-nia-gold px-4 py-1 text-xs font-semibold tracking-wide text-nia-dark">
                  Featured
                </span>
              </div>
            </div>

            <div {...contentReveal.revealProps}>
              <p className="text-xs font-medium tracking-[0.25em] text-nia-gold">{faculty.specialty}</p>
              <h2 className="mt-3 font-serif text-3xl text-white md:text-4xl">{faculty.name}</h2>
              <p className="mt-2 text-lg text-nia-gold">{faculty.designation}</p>
              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">
                {faculty.bio}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {faculty.credentials.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-nia-gold/30 bg-nia-gold/10 px-3 py-1 text-xs font-medium text-nia-gold"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FacultyPortrait({ member, size = 'md' }) {
  const sizeClass = size === 'lg' ? 'h-40 w-40' : 'h-20 w-20'

  return (
    <div className={`relative shrink-0 overflow-hidden rounded-full border-4 border-nia-gold/25 p-1 ${sizeClass}`}>
      <FacultyImage
        src={member.image}
        alt={member.name}
        className="h-full w-full rounded-full object-cover"
      />
    </div>
  )
}

function FacultyCopy({ member, align = 'left' }) {
  const alignClass = align === 'center' ? 'text-center' : 'text-left'

  return (
    <div className={alignClass}>
      <h3 className="font-serif text-xl text-nia-dark sm:text-2xl">{member.name}</h3>
      <p className="mt-1 text-sm font-medium text-nia-gold-dark">{member.designation}</p>
      <p className="mt-1 text-xs tracking-wide text-nia-dark/50">{member.specialty}</p>
      <p className="mt-3 text-sm leading-relaxed text-nia-dark/75 sm:text-base">
        {member.description}
      </p>
    </div>
  )
}

function FacultyStackItem({ member, index }) {
  const { revealProps } = useReveal(index)

  return (
    <li
      {...revealProps}
      className="rounded-2xl bg-white p-6 shadow-[0_4px_10px_rgba(0,0,0,0.05)]"
    >
      <div className="flex gap-4">
        <FacultyPortrait member={member} size="sm" />
        <div className="min-w-0 flex-1">
          <h3 className="font-serif text-lg text-nia-dark">{member.name}</h3>
          <p className="mt-0.5 text-sm font-medium text-nia-gold-dark">{member.designation}</p>
          <p className="mt-0.5 text-xs tracking-wide text-nia-dark/50">{member.specialty}</p>
        </div>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-nia-dark/75">{member.description}</p>
    </li>
  )
}

/** Mobile / tablet: stacked profiles — no selector, no horizontal scroll. */
function FacultyStack({ members }) {
  return (
    <ul className="space-y-4 lg:hidden">
      {members.map((member, index) => (
        <FacultyStackItem key={member.id} member={member} index={index % 4} />
      ))}
    </ul>
  )
}

/** Desktop: sidebar directory + detail panel. */
function FacultyDirectory({ members }) {
  const [activeId, setActiveId] = useState(members[0]?.id)
  const activeMember = members.find((member) => member.id === activeId) ?? members[0]
  const listReveal = useReveal(0)
  const detailReveal = useReveal(1)

  if (!activeMember) return null

  return (
    <div className="hidden gap-14 lg:grid lg:grid-cols-[280px_1fr]">
      <ul
        {...listReveal.revealProps}
        className="flex flex-col gap-1"
        role="listbox"
        aria-label="Faculty members"
      >
        {members.map((member) => {
          const isActive = member.id === activeId

          return (
            <li key={member.id} role="option" aria-selected={isActive}>
              <button
                type="button"
                onClick={() => setActiveId(member.id)}
                className={`w-full rounded-xl border px-5 py-4 text-left transition-colors ${
                  isActive
                    ? 'border-nia-gold/40 bg-white shadow-[0_4px_10px_rgba(0,0,0,0.05)]'
                    : 'border-transparent bg-white/60 hover:bg-white hover:shadow-sm'
                }`}
              >
                <p className={`text-sm font-medium ${isActive ? 'text-nia-dark' : 'text-nia-dark/80'}`}>
                  {member.name}
                </p>
                <p className="mt-0.5 text-xs text-nia-gold-dark">{member.specialty}</p>
              </button>
            </li>
          )
        })}
      </ul>

      <div
        {...detailReveal.revealProps}
        className="rounded-2xl bg-white p-10 shadow-[0_4px_10px_rgba(0,0,0,0.05)]"
      >
        <div className="flex items-start gap-8">
          <FacultyPortrait member={activeMember} size="lg" />
          <FacultyCopy member={activeMember} />
        </div>
      </div>
    </div>
  )
}

function FacultySection({ members }) {
  const { revealProps } = useReveal(0)

  return (
    <section className="bg-nia-offwhite py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div {...revealProps} className="mb-10 max-w-2xl">
          <p className="mb-2 text-xs font-medium tracking-[0.25em] text-nia-gold-dark">
            {aboutPage.facultyLabel}
          </p>
          <h2 className="font-serif text-3xl text-nia-dark md:text-4xl">{aboutPage.facultyHeading}</h2>
          <p className="mt-3 text-sm leading-relaxed text-nia-dark/70 sm:text-base">
            {aboutPage.facultyDescription}
          </p>
        </div>

        <FacultyStack members={members} />
        <FacultyDirectory members={members} />
      </div>
    </section>
  )
}

function AboutCta({ heading, buttonLabel, buttonHref }) {
  const title = useReveal(0)
  const action = useReveal(1)

  return (
    <section className="gold-metallic-section py-14">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 text-center lg:flex-row lg:px-8 lg:text-left">
        <h2 {...title.revealProps} className="font-serif text-2xl text-nia-dark md:text-3xl">
          {heading}
        </h2>
        <Link {...action.revealProps} to={buttonHref} className="btn-on-gold">
          {buttonLabel}
        </Link>
      </div>
    </section>
  )
}

export default function About() {
  const seo = staticPageSeo.about
  const { label, heading, description, intro } = aboutPage
  const headerReveal = useReveal(0)
  const introReveal = useReveal(0)

  return (
    <div>
      <PageMeta title={seo.title} description={seo.description} path={seo.path} />

      <section className="bg-nia-dark pb-8 pt-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <header {...headerReveal.revealProps} className="mx-auto max-w-3xl text-center">
            <p className="mb-2 text-xs font-medium tracking-[0.25em] text-nia-gold">{label}</p>
            <h1 className="font-serif text-3xl text-white md:text-4xl">{heading}</h1>
            <p className="mt-3 text-sm leading-relaxed text-white/70">{description}</p>
          </header>
        </div>
      </section>

      <FeaturedFaculty faculty={aboutFeaturedFaculty} />
      <FacultySection members={aboutFaculty} />

      <section className="border-b border-nia-dark/10 bg-nia-offwhite py-12">
        <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
          <p
            {...introReveal.revealProps}
            className="text-sm leading-relaxed text-nia-dark/75 sm:text-base"
          >
            {intro}
          </p>
        </div>
      </section>

      <AccreditationsSection variant="light" showDescriptions className="bg-nia-offwhite pb-16" />

      <TestimonialsSection />
      <AboutCta {...aboutCta} />
    </div>
  )
}
