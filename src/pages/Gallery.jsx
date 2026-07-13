import { useCallback, useEffect, useMemo, useState } from 'react'
import { galleryPage } from '../content/siteContent'
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  CloseIcon,
} from '../components/layout/icons/Icons'
import PageMeta from '../components/layout/PageMeta'
import { useReveal } from '../components/ui/Reveal'
import { staticPageSeo } from '../content/seo'

function categoryLabel(categories, id) {
  return categories.find((c) => c.id === id)?.label ?? id
}

function GalleryCard({ item, index, categoryName, onOpen }) {
  const { revealProps } = useReveal(index)

  return (
    <button
      type="button"
      {...revealProps}
      onClick={() => onOpen(item.id)}
      className="group relative aspect-[4/3] w-full cursor-pointer overflow-hidden rounded-sm bg-nia-dark text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nia-gold"
      aria-label={`View ${item.title}`}
    >
      <img
        src={item.src}
        alt={item.alt}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-nia-dark/85 via-nia-dark/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-95" />
      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
        <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-nia-gold">
          {categoryName}
        </p>
        <h2 className="mt-1 font-serif text-lg text-white sm:text-xl">{item.title}</h2>
      </div>
    </button>
  )
}

function Lightbox({ items, categories, activeId, onClose, onNavigate }) {
  const index = items.findIndex((item) => item.id === activeId)
  const item = items[index]
  if (!item) return null

  const hasPrev = index > 0
  const hasNext = index < items.length - 1

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-nia-dark/95 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 z-10 rounded-full border border-white/20 bg-white/5 p-2.5 text-white transition-colors hover:border-nia-gold/50 hover:text-nia-gold sm:right-6 sm:top-6"
        aria-label="Close gallery"
      >
        <CloseIcon className="h-5 w-5" />
      </button>

      {hasPrev && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation()
            onNavigate(items[index - 1].id)
          }}
          className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/20 bg-white/5 p-2.5 text-white transition-colors hover:border-nia-gold/50 hover:text-nia-gold sm:left-6"
          aria-label="Previous image"
        >
          <ChevronLeftIcon className="h-5 w-5" />
        </button>
      )}

      {hasNext && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation()
            onNavigate(items[index + 1].id)
          }}
          className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/20 bg-white/5 p-2.5 text-white transition-colors hover:border-nia-gold/50 hover:text-nia-gold sm:right-6"
          aria-label="Next image"
        >
          <ChevronRightIcon className="h-5 w-5" />
        </button>
      )}

      <figure
        className="flex max-h-[90vh] w-full max-w-5xl flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={item.src}
          alt={item.alt}
          className="max-h-[75vh] w-auto max-w-full rounded-sm object-contain shadow-2xl"
        />
        <figcaption className="mt-5 text-center">
          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-nia-gold">
            {categoryLabel(categories, item.category)}
          </p>
          <p className="mt-1 font-serif text-xl text-white sm:text-2xl">{item.title}</p>
          <p className="mt-2 text-xs text-white/40">
            {index + 1} / {items.length}
          </p>
        </figcaption>
      </figure>
    </div>
  )
}

export default function Gallery() {
  const { label, heading, description, emptyMessage, categories, items } = galleryPage
  const seo = staticPageSeo.gallery
  const [activeCategory, setActiveCategory] = useState('all')
  const [activeId, setActiveId] = useState(null)
  const headerReveal = useReveal(0)
  const filterReveal = useReveal(0)

  const filteredItems = useMemo(() => {
    if (activeCategory === 'all') return items
    return items.filter((item) => item.category === activeCategory)
  }, [activeCategory, items])

  const closeLightbox = useCallback(() => setActiveId(null), [])

  useEffect(() => {
    if (activeId == null) return undefined

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeLightbox()
        return
      }

      const index = filteredItems.findIndex((item) => item.id === activeId)
      if (event.key === 'ArrowLeft' && index > 0) {
        setActiveId(filteredItems[index - 1].id)
      }
      if (event.key === 'ArrowRight' && index < filteredItems.length - 1) {
        setActiveId(filteredItems[index + 1].id)
      }
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [activeId, closeLightbox, filteredItems])

  return (
    <div>
      <PageMeta title={seo.title} description={seo.description} path={seo.path} />

      <section className="bg-nia-dark pt-28 pb-14">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <header {...headerReveal.revealProps} className="mx-auto max-w-3xl text-center">
            <span className="inline-block rounded-full border border-nia-gold/60 px-4 py-1.5 text-xs font-medium tracking-[0.15em] text-nia-gold">
              {label}
            </span>
            <h1 className="mt-6 font-serif text-4xl leading-tight text-white md:text-5xl">
              {heading}
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-white/60 sm:text-base">
              {description}
            </p>
          </header>
        </div>
      </section>

      <section className="bg-nia-offwhite py-12 pb-20 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div
            {...filterReveal.revealProps}
            className="mb-10 flex flex-wrap items-center justify-center gap-2"
            role="tablist"
            aria-label="Gallery categories"
          >
            {categories.map((category) => {
              const isActive = activeCategory === category.id
              return (
                <button
                  key={category.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(category.id)}
                  className={`rounded-full px-4 py-2 text-xs font-medium tracking-wide transition-colors sm:text-sm ${
                    isActive
                      ? 'bg-nia-dark text-white'
                      : 'border border-nia-dark/15 bg-white text-nia-dark/70 hover:border-nia-gold/50 hover:text-nia-dark'
                  }`}
                >
                  {category.label}
                </button>
              )
            })}
          </div>

          {filteredItems.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
              {filteredItems.map((item, index) => (
                <GalleryCard
                  key={item.id}
                  item={item}
                  index={index}
                  categoryName={categoryLabel(categories, item.category)}
                  onOpen={setActiveId}
                />
              ))}
            </div>
          ) : (
            <p className="rounded-xl border border-nia-dark/10 bg-white px-6 py-10 text-center text-sm text-nia-dark/60">
              {emptyMessage}
            </p>
          )}
        </div>
      </section>

      {activeId != null && (
        <Lightbox
          items={filteredItems}
          categories={categories}
          activeId={activeId}
          onClose={closeLightbox}
          onNavigate={setActiveId}
        />
      )}
    </div>
  )
}
