import { useCallback, useEffect, useMemo, useState } from 'react'
import MediaFilters from '../components/gallery/MediaFilters'
import MediaLightbox from '../components/gallery/MediaLightbox'
import MediaTile from '../components/gallery/MediaTile'
import PageMeta from '../components/layout/PageMeta'
import { useReveal } from '../components/ui/Reveal'
import { galleryPage } from '../content/siteContent'
import { staticPageSeo } from '../content/seo'

export default function Gallery() {
  const { label, heading, description, emptyMessage, filters, items } = galleryPage
  const seo = staticPageSeo.gallery
  const [activeFilter, setActiveFilter] = useState('all')
  const [activeId, setActiveId] = useState(null)
  const headerReveal = useReveal(0)
  const filterReveal = useReveal(0)

  const filteredItems = useMemo(() => {
    if (activeFilter === 'all') return items
    return items.filter((item) => item.type === activeFilter)
  }, [activeFilter, items])

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

      <section className="bg-nia-dark pb-14 pt-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <header {...headerReveal.revealProps} className="mx-auto max-w-3xl text-center">
            <p className="mb-2 text-xs font-medium tracking-[0.25em] text-nia-gold">{label}</p>
            <h1 className="font-serif text-3xl text-white md:text-4xl">{heading}</h1>
            <p className="mt-4 text-sm leading-relaxed text-white/60 sm:text-base">{description}</p>
          </header>
        </div>
      </section>

      <section className="bg-nia-offwhite py-12 pb-20 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div {...filterReveal.revealProps} className="mb-10">
            <MediaFilters
              filters={filters}
              activeId={activeFilter}
              onChange={setActiveFilter}
            />
          </div>

          {filteredItems.length > 0 ? (
            <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
              {filteredItems.map((item, index) => (
                <MediaTile key={item.id} item={item} index={index} onOpen={setActiveId} />
              ))}
            </div>
          ) : (
            <p className="border border-nia-dark/10 bg-white px-6 py-12 text-center text-sm text-nia-dark/60">
              {emptyMessage}
            </p>
          )}
        </div>
      </section>

      {activeId != null && (
        <MediaLightbox
          items={filteredItems}
          activeId={activeId}
          onClose={closeLightbox}
          onNavigate={setActiveId}
        />
      )}
    </div>
  )
}
