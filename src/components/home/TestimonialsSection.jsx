import { testimonialsSection } from '../../content/siteContent'
import { StarIcon } from '../layout/icons/Icons'

const PLACEHOLDER =
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80'

export default function TestimonialsSection() {
  const { label, heading, items } = testimonialsSection

  return (
    <section className="bg-nia-offwhite py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-2 text-xs font-medium tracking-[0.25em] text-nia-gold-dark">{label}</p>
          <h2 className="font-serif text-3xl text-nia-dark md:text-4xl">{heading}</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex flex-col rounded-sm bg-white p-6 shadow-[0_4px_10px_rgba(0,0,0,0.05)]"
            >
              <div className="mb-4 flex gap-0.5 text-nia-gold">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <StarIcon key={i} className="w-4 h-4" />
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
                  onError={(e) => { e.target.src = PLACEHOLDER }}
                />
                <div>
                  <p className="text-sm font-medium text-nia-dark">{item.name}</p>
                  <p className="text-xs text-nia-dark/50">{item.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
