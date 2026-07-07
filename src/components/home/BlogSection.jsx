import { Link } from 'react-router'
import { blogSection } from '../../content/siteContent'
import { ArrowRightIcon } from '../layout/icons/Icons'

const PLACEHOLDER =
  'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&q=80'

export default function BlogSection() {
  const { label, heading, viewAllLabel, viewAllHref, items } = blogSection

  return (
    <section id="blog" className="bg-nia-offwhite py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
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

        <div className="grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.id}
              className="group overflow-hidden rounded-sm bg-white shadow-[0_4px_10px_rgba(0,0,0,0.05)]"
            >
              <Link to={item.href} className="block aspect-video overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => { e.target.src = PLACEHOLDER }}
                />
              </Link>
              <div className="p-5">
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
                  className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-nia-gold-dark hover:text-nia-gold"
                >
                  Read More <ArrowRightIcon className="w-3 h-3" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
