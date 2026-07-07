import { Link } from 'react-router'
import { coursesSection } from '../../content/siteContent'
import { ArrowRightIcon, CheckIcon, AcademicIcon } from '../layout/icons/Icons'

const PLACEHOLDER =
  'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80'

function CourseCard({ item }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-sm border border-white/10 bg-nia-card">
      <div className="relative aspect-video overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover"
          onError={(e) => { e.target.src = PLACEHOLDER }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-nia-card via-transparent to-transparent" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-nia-gold/50 text-nia-gold">
          <AcademicIcon className="w-5 h-5" />
        </div>
        <h3 className="font-serif text-xl text-white">{item.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-white/70">{item.description}</p>
        <ul className="mt-4 flex-1 space-y-2">
          {item.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-sm text-white/80">
              <CheckIcon className="w-4 h-4 shrink-0 text-nia-gold" />
              {feature}
            </li>
          ))}
        </ul>
        <Link
          to={item.href}
          className="mt-6 block border border-nia-gold py-3 text-center text-sm font-medium text-nia-gold transition-colors hover:bg-nia-gold hover:text-nia-dark"
        >
          {item.cta}
        </Link>
      </div>
    </div>
  )
}

export default function CoursesSection() {
  const { label, heading, description, viewAllLabel, viewAllHref, items } = coursesSection

  return (
    <section className="border-t border-white/10 bg-nia-dark py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-2 text-xs font-medium tracking-[0.25em] text-nia-gold">{label}</p>
            <h2 className="max-w-lg font-serif text-3xl text-white md:text-4xl">{heading}</h2>
          </div>
          <div className="max-w-md">
            <p className="text-sm leading-relaxed text-white/70">{description}</p>
            <Link
              to={viewAllHref}
              className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-nia-gold hover:text-nia-gold-light"
            >
              {viewAllLabel} <ArrowRightIcon />
            </Link>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <CourseCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
