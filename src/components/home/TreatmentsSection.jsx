import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router'
import { treatmentsSection } from '../../content/siteContent'
import { ArrowRightIcon } from '../layout/icons/Icons'

const PLACEHOLDER =
  'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80'

function TreatmentCard({ item, index, animate }) {
  return (
    <div
      className={`group flex flex-col overflow-hidden rounded-sm bg-white shadow-[0_4px_10px_rgba(0,0,0,0.05)] transition-all duration-700 ease-out ${
        animate
          ? 'translate-y-0 opacity-100'
          : 'translate-y-10 opacity-0'
      }`}
      style={{ transitionDelay: animate ? `${index * 100}ms` : '0ms' }}
    >
      <div className="relative aspect-[16/10] overflow-hidden sm:aspect-[4/3] lg:aspect-[4/5]">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            e.target.src = PLACEHOLDER
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <h3 className="font-serif text-xl text-white sm:text-lg">{item.title}</h3>
          <p className="mt-2 line-clamp-4 text-sm leading-relaxed text-white/70 sm:text-xs">
            {item.description}
          </p>
          <Link
            to={item.href}
            className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-nia-gold transition-colors hover:text-nia-gold-light"
          >
            Explore More <ArrowRightIcon className="h-3 w-3" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function TreatmentsSection() {
  const { label, heading, description, viewAllLabel, viewAllHref, items } =
    treatmentsSection

  const gridRef = useRef(null)
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    const el = gridRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="bg-nia-offwhite py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-2 text-xs font-medium tracking-[0.25em] text-nia-gold-dark">
              {label}
            </p>
            <h2 className="max-w-lg font-serif text-3xl text-nia-dark md:text-4xl">
              {heading}
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-sm leading-relaxed text-nia-dark/70">{description}</p>
            <Link
              to={viewAllHref}
              className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-nia-gold-dark hover:text-nia-gold"
            >
              {viewAllLabel} <ArrowRightIcon />
            </Link>
          </div>
        </div>

        <div ref={gridRef} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => (
            <TreatmentCard
              key={item.id}
              item={item}
              index={index}
              animate={animate}
            />
          ))}
        </div>
      </div>
    </section>
  )
}