import { useState } from 'react'
import { Link, useParams } from 'react-router'
import { courseDetailLabels, getCourseById } from '../content/siteContent'
import {
  AcademicIcon,
  ArrowRightIcon,
  CalendarIcon,
  CheckIcon,
  PlusIcon,
  UserIcon,
} from '../components/layout/icons/Icons'
import PageMeta from '../components/layout/PageMeta'
import { useReveal } from '../components/ui/Reveal'

const PLACEHOLDER =
  'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80'

function formatPrice(amount) {
  return new Intl.NumberFormat('en-IN').format(amount)
}

function CurriculumItem({ module, index, isOpen, onToggle }) {
  const { revealProps } = useReveal(index)
  const hasDescriptionPoints =
    Array.isArray(module.descriptionPoints) && module.descriptionPoints.length > 0

  return (
    <li
      {...revealProps}
      className="overflow-hidden rounded-xl bg-white shadow-[0_4px_10px_rgba(0,0,0,0.05)]"
    >
      <div className="flex items-center gap-4 px-5 py-4">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-nia-gold/15 text-nia-gold-dark">
          <CheckIcon className="h-4 w-4" />
        </span>
        <span className="flex-1 text-sm font-medium text-nia-dark sm:text-base">{module.title}</span>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Hide module details' : 'Show module details'}
          className="flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-full border border-nia-dark/10 text-nia-dark/60 transition-colors hover:border-nia-gold/40 hover:text-nia-gold-dark"
        >
          <PlusIcon
            className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`}
          />
        </button>
      </div>
      <div
        className={`grid transition-all duration-200 ease-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="border-t border-nia-dark/10 px-5 pb-4 pt-3 pl-[4.25rem] sm:pl-[4.5rem]">
            {hasDescriptionPoints ? (
              <ul className="space-y-2 text-sm leading-relaxed text-nia-dark/70">
                {module.descriptionPoints.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-nia-gold-dark/70" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm leading-relaxed text-nia-dark/70">{module.description}</p>
            )}
          </div>
        </div>
      </div>
    </li>
  )
}

export default function CourseDetail() {
  const { courseId } = useParams()
  const course = getCourseById(courseId)
  const [openModuleIndex, setOpenModuleIndex] = useState(null)
  const {
    backLink,
    curriculumHeading,
    highlightsHeading,
    priceHeading,
    gstLabel,
    durationLabel,
    modeLabel,
    eligibilityLabel,
    enrollLabel,
    enrollHref,
  } = courseDetailLabels
  const contentReveal = useReveal(0)
  const mediaReveal = useReveal(1)
  const curriculumTitle = useReveal(0)
  const highlightsReveal = useReveal(0)
  const priceReveal = useReveal(1)

  if (!course) {
    return (
      <>
        <PageMeta title="Course not found" description="This institute course does not exist." noIndex />
        <div className="flex min-h-[60vh] flex-col items-center justify-center bg-nia-offwhite px-4 pt-28 text-center">
          <h1 className="font-serif text-3xl text-nia-dark">Course not found</h1>
          <p className="mt-3 text-nia-dark/60">This course does not exist or may have been moved.</p>
          <Link
            to="/institute"
            className="mt-8 inline-flex items-center gap-1 text-sm font-medium text-nia-gold-dark hover:text-nia-gold"
          >
            Back to Institute Courses
          </Link>
        </div>
      </>
    )
  }

  return (
    <>
      <PageMeta
        title={course.title}
        description={course.description}
        path={`/institute/${course.id}`}
        image={course.image}
      />
      <div>
        <section className="bg-nia-dark pt-28 pb-14">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <Link
              to="/institute"
              className="mb-8 inline-flex items-center gap-1 text-sm text-white/50 transition-colors hover:text-nia-gold"
            >
              {backLink}
            </Link>

            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
              <div {...contentReveal.revealProps}>
                <span className="inline-block rounded-full bg-nia-gold/15 px-3 py-1 text-xs font-medium text-nia-gold">
                  {course.category}
                </span>
                <h1 className="mt-4 font-serif text-3xl leading-tight text-white md:text-4xl lg:text-5xl">
                  {course.title}
                </h1>
                <p className="mt-5 text-sm leading-relaxed text-white/70 sm:text-base">
                  {course.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2 rounded-lg border border-nia-gold/40 bg-white/5 px-4 py-2.5 text-sm text-white/80">
                    <CalendarIcon className="h-4 w-4 shrink-0 text-nia-gold" />
                    {durationLabel}: {course.duration}
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-lg border border-nia-gold/40 bg-white/5 px-4 py-2.5 text-sm text-white/80">
                    <AcademicIcon className="h-4 w-4 shrink-0 text-nia-gold" />
                    {modeLabel}: {course.format}
                  </span>
                  {course.eligibility && (
                    <span className="inline-flex items-center gap-2 rounded-lg border border-nia-gold/40 bg-white/5 px-4 py-2.5 text-sm text-white/80">
                      <UserIcon className="h-4 w-4 shrink-0 text-nia-gold" />
                      {eligibilityLabel}: {course.eligibility}
                    </span>
                  )}
                </div>
              </div>

              <div {...mediaReveal.revealProps} className="overflow-hidden rounded-2xl">
                <img
                  src={course.image}
                  alt={course.title}
                  className="aspect-[4/3] w-full object-cover"
                  onError={(e) => {
                    e.target.src = PLACEHOLDER
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-nia-offwhite py-16 pb-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid items-start gap-10 lg:grid-cols-[1.4fr_1fr]">
              <div>
                <h2
                  {...curriculumTitle.revealProps}
                  className="font-serif text-3xl text-nia-dark md:text-4xl"
                >
                  {curriculumHeading}
                </h2>

                <ul className="mt-8 space-y-3">
                  {course.curriculum.map((module, index) => (
                    <CurriculumItem
                      key={module.title}
                      module={module}
                      index={index % 4}
                      isOpen={openModuleIndex === index}
                      onToggle={() =>
                        setOpenModuleIndex((current) => (current === index ? null : index))
                      }
                    />
                  ))}
                </ul>
              </div>

              <aside className="space-y-6">
                <div
                  {...highlightsReveal.revealProps}
                  className="rounded-2xl bg-white p-8 shadow-[0_4px_10px_rgba(0,0,0,0.05)]"
                >
                  <h2 className="font-serif text-2xl text-nia-dark md:text-3xl">{highlightsHeading}</h2>

                  <ul className="mt-6 space-y-4">
                    {course.highlights.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 text-sm text-nia-dark/80 sm:text-base"
                      >
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-nia-gold" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                <div
                  {...priceReveal.revealProps}
                  className="rounded-2xl bg-white p-8 shadow-[0_4px_10px_rgba(0,0,0,0.05)]"
                >
                  <p className="text-sm font-medium text-nia-dark/60">{priceHeading}</p>
                  <div className="mt-2">
                    <p className="font-serif text-4xl text-nia-dark">₹{formatPrice(course.price)}</p>
                    <p className="mt-1 text-xs font-medium text-nia-dark/50">{gstLabel}</p>
                  </div>
                  <Link
                    to={enrollHref}
                    className="btn-gold btn-gold--md mt-6 flex w-full items-center justify-center bg-nia-gold px-5 py-3 text-nia-dark tracking-wide"
                  >
                    {enrollLabel}
                    <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
