import { Link } from 'react-router'
import { blogSection } from '../../content/siteContent'
import { ArrowRightIcon } from '../layout/icons/Icons'
import { useReveal } from '../ui/Reveal'
import { PLACEHOLDER_IMAGES } from '../../lib/placeholderImages'

function BlogCard({ item, index }) {
  const { revealProps } = useReveal(index)

  return (
    <article
      {...revealProps}
      className="group flex h-full flex-col overflow-hidden rounded-sm bg-white shadow-[0_4px_10px_rgba(0,0,0,0.05)]"
    >
      <Link to={item.href} className="block aspect-video shrink-0 overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            e.target.src = PLACEHOLDER_IMAGES.blogCard
          }}
        />
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3 flex items-center gap-3">
          <span className="rounded-sm bg-nia-gold/15 px-2 py-0.5 text-xs text-nia-gold-dark">
            {item.category}
          </span>
          <span className="text-xs text-nia-dark/50">{item.date}</span>
        </div>
        <h3 className="font-serif text-lg text-nia-dark">
          <Link to={item.href} className="transition-colors hover:text-nia-gold-dark">
            {item.title}
          </Link>
        </h3>
        <Link
          to={item.href}
          className="mt-auto inline-flex items-center gap-1 pt-3 text-xs font-medium text-nia-gold-dark hover:text-nia-gold"
        >
          Read More <ArrowRightIcon className="h-3 w-3" />
        </Link>
      </div>
    </article>
  )
}

function SectionHeader({ label, heading, viewAllLabel, viewAllHref }) {
  const { revealProps } = useReveal(0)

  return (
    <div
      {...revealProps}
      className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
    >
      <div>
        <p className="mb-2 text-xs font-medium tracking-[0.25em] text-nia-gold-dark">{label}</p>
        <h2 className="font-serif text-3xl text-nia-dark md:text-4xl">{heading}</h2>
      </div>
      <Link
        to={viewAllHref}
        className="inline-flex items-center gap-1 text-sm font-medium text-nia-gold-dark hover:text-nia-gold"
      >
        {viewAllLabel} <ArrowRightIcon />
      </Link>
    </div>
  )
}

export default function BlogSection() {
  const { label, heading, viewAllLabel, viewAllHref, items } = blogSection

  return (
    <section id="blog" className="bg-nia-offwhite py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeader
          label={label}
          heading={heading}
          viewAllLabel={viewAllLabel}
          viewAllHref={viewAllHref}
        />

        <div className="grid auto-rows-fr gap-6 md:grid-cols-3">
          {items.map((item, index) => (
            <BlogCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
