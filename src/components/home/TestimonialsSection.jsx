import { testimonialsSection } from '../../content/siteContent'
import { StarIcon } from '../layout/icons/Icons'
import { useReveal } from '../ui/Reveal'
import { PLACEHOLDER_IMAGES } from '../../lib/placeholderImages'

function TestimonialCard({ item, index }) {
  const { revealProps } = useReveal(index)

  return (
    <article
      {...revealProps}
      className="flex h-full flex-col rounded-sm bg-white p-6 shadow-[0_4px_10px_rgba(0,0,0,0.05)]"
    >
      <div className="mb-4 flex gap-0.5 text-nia-gold">
        {Array.from({ length: item.rating }).map((_, i) => (
          <StarIcon key={i} className="h-4 w-4" />
        ))}
      </div>
      <blockquote className="flex-1 text-sm italic leading-relaxed text-nia-dark/80">
        &ldquo;{item.quote}&rdquo;
      </blockquote>
      <div className="mt-6 flex items-center gap-3 border-t border-nia-dark/10 pt-4">
        <img
          src={item.image}
          alt={item.name}
          className="h-10 w-10 rounded-full object-cover"
          onError={(e) => {
            e.target.src = PLACEHOLDER_IMAGES.testimonial
          }}
        />
        <div>
          <p className="text-sm font-medium text-nia-dark">{item.name}</p>
          <p className="text-xs text-nia-dark/50">{item.location}</p>
        </div>
      </div>
    </article>
  )
}

function SectionHeader({ label, heading }) {
  const { revealProps } = useReveal(0)

  return (
    <div {...revealProps} className="mb-12 text-center">
      <p className="mb-2 text-sm font-medium tracking-[0.25em] text-nia-gold-dark md:text-base">
        {label}
      </p>
      <h2 className="font-serif text-3xl text-nia-dark md:text-4xl">{heading}</h2>
    </div>
  )
}

export default function TestimonialsSection() {
  const { label, heading, items } = testimonialsSection

  return (
    <section className="bg-nia-offwhite py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeader label={label} heading={heading} />

        <div className="grid auto-rows-fr gap-6 md:grid-cols-3">
          {items.map((item, index) => (
            <TestimonialCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
