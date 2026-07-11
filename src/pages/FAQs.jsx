import { useMemo, useState } from 'react'
import { faqPage } from '../content/siteContent'
import { ChevronDownIcon, SearchIcon } from '../components/layout/icons/Icons'
import PageMeta from '../components/layout/PageMeta'
import { useReveal } from '../components/ui/Reveal'
import { staticPageSeo } from '../content/seo'

function FaqItem({ item, index, isOpen, onToggle }) {
  const { revealProps } = useReveal(index)

  return (
    <div
      {...revealProps}
      className="overflow-hidden rounded-xl border border-nia-dark/10 bg-white"
    >
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
        aria-expanded={isOpen}
      >
        <span className="text-sm font-medium text-nia-dark sm:text-base">{item.question}</span>
        <ChevronDownIcon
          className={`h-4 w-4 shrink-0 text-nia-dark/50 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-200 ease-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="border-t border-nia-dark/10 px-5 pb-5 pt-3 text-sm leading-relaxed text-nia-dark/70 sm:px-6 sm:pb-6">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function FAQs() {
  const { label, heading, searchPlaceholder, emptyMessage, items } = faqPage
  const seo = staticPageSeo.faqs
  const [query, setQuery] = useState('')
  const [openId, setOpenId] = useState(null)
  const headerReveal = useReveal(0)
  const searchReveal = useReveal(0)

  const filteredItems = useMemo(() => {
    const normalized = query.trim().toLowerCase()
    if (!normalized) return items

    return items.filter(
      (item) =>
        item.question.toLowerCase().includes(normalized) ||
        item.answer.toLowerCase().includes(normalized),
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
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <div {...searchReveal.revealProps} className="relative mb-8">
            <SearchIcon className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-nia-dark/40" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={searchPlaceholder}
              className="w-full rounded-full border border-nia-gold/50 bg-white py-3.5 pl-12 pr-5 text-sm text-nia-dark outline-none transition-colors placeholder:text-nia-dark/40 focus:border-nia-gold"
            />
          </div>

          <div className="space-y-3">
            {filteredItems.length > 0 ? (
              filteredItems.map((item, index) => (
                <FaqItem
                  key={item.id}
                  item={item}
                  index={index % 4}
                  isOpen={openId === item.id}
                  onToggle={() => setOpenId((current) => (current === item.id ? null : item.id))}
                />
              ))
            ) : (
              <p className="rounded-xl border border-nia-dark/10 bg-white px-6 py-8 text-center text-sm text-nia-dark/60">
                {emptyMessage}
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
