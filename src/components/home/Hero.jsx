import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router'
import { heroSlides, heroImages } from '../../content/siteContent'
import { ChevronLeftIcon, ChevronRightIcon } from '../layout/icons/Icons'
import { PLACEHOLDER_IMAGES } from '../../lib/placeholderImages'

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

  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden">
      {heroSlides.map((_, i) => (
        <div
          key={i}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${heroImages[i] || PLACEHOLDER_IMAGES.hero})`,
            opacity: i === current ? 1 : 0,
          }}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/60 to-black/80 sm:from-black/65 sm:via-black/55 sm:to-black/70" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <p className="mb-4 text-xs font-medium tracking-[0.25em] text-nia-gold [text-shadow:0_2px_8px_rgba(0,0,0,0.9)] sm:text-sm">
          {slide.tag}
        </p>
        <h1 className="max-w-4xl font-serif text-4xl leading-tight text-white [text-shadow:0_4px_14px_rgba(0,0,0,0.95)] sm:text-5xl md:text-6xl lg:text-7xl">
          {slide.heading}{' '}
          <em className="not-italic text-nia-gold [text-shadow:0_4px_14px_rgba(0,0,0,0.9)]">
            {slide.headingAccent}
          </em>
        </h1>
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-white/90 [text-shadow:0_2px_10px_rgba(0,0,0,0.95)] sm:text-base">
          {slide.description}
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <Link to="/clinic" className="btn-gold btn-gold--lg min-w-[220px]">
            Explore Clinic Services
          </Link>
          <Link to="/institute" className="btn-gold-outline btn-gold--lg min-w-[220px]">
            View Institute Courses
          </Link>
        </div>
      </div>

      <button
        type="button"
        onClick={prev}
        className="absolute left-4 top-1/2 z-20 hidden -translate-y-1/2 p-2 text-white/70 transition-colors hover:text-nia-gold md:block lg:left-8"
        aria-label="Previous slide"
      >
        <ChevronLeftIcon className="h-8 w-8" />
      </button>
      <button
        type="button"
        onClick={next}
        className="absolute right-4 top-1/2 z-20 hidden -translate-y-1/2 p-2 text-white/70 transition-colors hover:text-nia-gold md:block lg:right-8"
        aria-label="Next slide"
      >
        <ChevronRightIcon className="h-8 w-8" />
      </button>

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
