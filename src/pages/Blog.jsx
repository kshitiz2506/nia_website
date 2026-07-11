import { useMemo, useState } from 'react'
import { Link } from 'react-router'
import { blogPage, blogSection } from '../content/siteContent'
import { ArrowRightIcon, SearchIcon } from '../components/layout/icons/Icons'
import PageMeta from '../components/layout/PageMeta'
import { useReveal } from '../components/ui/Reveal'
import { staticPageSeo } from '../content/seo'

const PLACEHOLDER =
  'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&q=80'

function BlogCard({ item, index }) {
  const { revealProps } = useReveal(index)

  return (
    <Link
      {...revealProps}
      to={item.href}
      className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-[0_4px_10px_rgba(0,0,0,0.05)] transition-shadow hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)]"
    >
      <div className="aspect-[16/10] overflow-hidden">
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
        <div className="mb-3 flex items-center gap-3">
          <span className="rounded-full bg-nia-gold/15 px-3 py-0.5 text-xs font-medium text-nia-gold-dark">
            {item.category}
          </span>
          <span className="text-xs text-nia-dark/50">{item.date}</span>
        </div>
        <h2 className="font-serif text-lg text-nia-dark">{item.title}</h2>
        {item.excerpt && (
          <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-nia-dark/70">
            {item.excerpt}
          </p>
        )}
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-nia-gold-dark transition-colors group-hover:text-nia-gold">
          Read More <ArrowRightIcon className="h-3 w-3" />
        </span>
      </div>
    </Link>
  )
}

export default function Blog() {
  const { label, heading, searchPlaceholder, emptyMessage } = blogPage
  const { items } = blogSection
  const seo = staticPageSeo.blog
  const [query, setQuery] = useState('')
  const headerReveal = useReveal(0)
  const searchReveal = useReveal(0)

  const filteredItems = useMemo(() => {
    const normalized = query.trim().toLowerCase()
    if (!normalized) return items

    return items.filter(
      (item) =>
        item.title.toLowerCase().includes(normalized) ||
        item.category.toLowerCase().includes(normalized) ||
        item.excerpt?.toLowerCase().includes(normalized),
    )
  }, [items, query])

  return (
    <div>
      <PageMeta title={seo.title} description={seo.description} path={seo.path} />
      <section className="bg-nia-dark pt-28 pb-14">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <header {...headerReveal.revealProps} className="mx-auto max-w-3xl text-center">
            <span className="inline-block rounded-full border border-nia-gold/60 px-4 py-1.5 text-xs font-medium tracking-[0.15em] text-nia-gold">
              {label}
            </span>
            <h1 className="mt-6 font-serif text-4xl leading-tight text-white md:text-5xl">{heading}</h1>
          </header>
        </div>
      </section>

      <section className="bg-nia-offwhite py-12 pb-20 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div {...searchReveal.revealProps} className="relative mx-auto mb-10 max-w-3xl">
            <SearchIcon className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-nia-dark/40" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={searchPlaceholder}
              className="w-full rounded-full border border-nia-gold/50 bg-white py-3.5 pl-12 pr-5 text-sm text-nia-dark outline-none transition-colors placeholder:text-nia-dark/40 focus:border-nia-gold"
            />
          </div>

          {filteredItems.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredItems.map((item, index) => (
                <BlogCard key={item.id} item={item} index={index % 4} />
              ))}
            </div>
          ) : (
            <p className="mx-auto max-w-3xl rounded-xl border border-nia-dark/10 bg-white px-6 py-8 text-center text-sm text-nia-dark/60">
              {emptyMessage}
            </p>
          )}
        </div>
      </section>
    </div>
  )
}
