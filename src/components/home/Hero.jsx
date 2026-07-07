import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router'
import { heroSlides, heroImages } from '../../content/siteContent'
import { ChevronLeftIcon, ChevronRightIcon } from '../layout/icons/Icons'

const PLACEHOLDER_HERO =
  'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1920&q=80'

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const total = heroSlides.length

  const next = useCallback(() => setCurrent((c) => (c + 1) % total), [total])
  const prev = useCallback(() => setCurrent((c) => (c - 1 + total) % total), [total])

  useEffect(() => {
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [next])

  const slide = heroSlides[current]
  const bgImage = heroImages[current] || PLACEHOLDER_HERO

  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden">
      {/* Background slides */}
      {heroSlides.map((_, i) => (
        <div
          key={i}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${heroImages[i] || PLACEHOLDER_HERO})`,
            opacity: i === current ? 1 : 0,
          }}
        />
      ))}

      {/* Black tint overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content — centered */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <p className="mb-4 text-xs font-medium tracking-[0.25em] text-nia-gold sm:text-sm">
          {slide.tag}
        </p>
        <h1 className="max-w-4xl font-serif text-4xl leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          {slide.heading}{' '}
          <em className="not-italic text-nia-gold">{slide.headingAccent}</em>
        </h1>
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base">
          {slide.description}
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <Link
            to="/clinic"
            className="min-w-[220px] bg-nia-gold px-8 py-3.5 text-sm rounded-md font-semibold tracking-wide text-nia-dark transition-colors hover:bg-nia-gold-light"
          >
            Explore Clinic Services
          </Link>
          <Link
            to="/institute"
            className="min-w-[220px] border border-nia-gold px-8 py-3.5 text-sm font-semibold rounded-md tracking-wide text-white transition-colors hover:bg-nia-gold hover:text-nia-dark"
          >
            View Institute Courses
          </Link>
        </div>
      </div>

      {/* Arrows */}
      <button
        type="button"
        onClick={prev}
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 p-2 text-white/70 transition-colors hover:text-nia-gold lg:left-8"
        aria-label="Previous slide"
      >
        <ChevronLeftIcon className="w-8 h-8" />
      </button>
      <button
        type="button"
        onClick={next}
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 p-2 text-white/70 transition-colors hover:text-nia-gold lg:right-8"
        aria-label="Next slide"
      >
        <ChevronRightIcon className="w-8 h-8" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setCurrent(i)}
            className={`h-2 cursor-pointer rounded-full transition-all ${
              i === current ? 'w-8 bg-nia-gold' : 'w-2 bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
