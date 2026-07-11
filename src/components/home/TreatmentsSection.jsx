import { Link } from 'react-router'
import { treatmentsSection } from '../../content/siteContent'
import { ArrowRightIcon } from '../layout/icons/Icons'
import { useReveal } from '../ui/Reveal'

const PLACEHOLDER =
  'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80'

function TreatmentCard({ item, index }) {
  const { revealProps } = useReveal(index)

  return (
    <article
      {...revealProps}
      className="group relative aspect-[4/5] overflow-hidden rounded-sm bg-nia-dark shadow-[0_4px_10px_rgba(0,0,0,0.05)]"
    >
      <img
        src={item.image}
        alt={item.title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        onError={(e) => {
          e.target.src = PLACEHOLDER
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 flex flex-col p-5">
        <h3 className="font-serif text-lg text-white sm:text-xl">{item.title}</h3>
        <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-white/70 sm:text-sm">
          {item.description}
        </p>
        <Link
          to={item.href}
          className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-nia-gold transition-colors hover:text-nia-gold-light"
        >
          Explore More <ArrowRightIcon className="h-3 w-3" />
        </Link>
      </div>
    </article>
  )
}

function SectionIntro({ label, heading, description, viewAllLabel, viewAllHref }) {
  const title = useReveal(0)
  const copy = useReveal(1)

  return (
    <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
      <div {...title.revealProps}>
        <p className="mb-2 text-xs font-medium tracking-[0.25em] text-nia-gold-dark">
          {label}
        </p>
        <h2 className="max-w-lg font-serif text-3xl text-nia-dark md:text-4xl">
          {heading}
        </h2>
      </div>
      <div {...copy.revealProps} className="max-w-md">
        <p className="text-sm leading-relaxed text-nia-dark/70">{description}</p>
        <Link
          to={viewAllHref}
          className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-nia-gold-dark hover:text-nia-gold"
        >
          {viewAllLabel} <ArrowRightIcon />
        </Link>
      </div>
    </div>
  )
}

export default function TreatmentsSection() {
  const { label, heading, description, viewAllLabel, viewAllHref, items } =
    treatmentsSection

  return (
    <section className="bg-nia-offwhite py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionIntro
          label={label}
          heading={heading}
          description={description}
          viewAllLabel={viewAllLabel}
          viewAllHref={viewAllHref}
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => (
            <TreatmentCard key={item.id} item={item} index={index % 4} />
          ))}
        </div>
      </div>
    </section>
  )
}
