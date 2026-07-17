import { Link } from 'react-router'
import { clinicPage, treatmentsSection } from '../content/siteContent'
import { ArrowRightIcon } from '../components/layout/icons/Icons'
import PageMeta from '../components/layout/PageMeta'
import { useReveal } from '../components/ui/Reveal'
import { staticPageSeo } from '../content/seo'
import { PLACEHOLDER_IMAGES } from '../lib/placeholderImages'

function ServiceCard({ item, index }) {
  const { revealProps } = useReveal(index)

  return (
    <Link
      {...revealProps}
      to={item.href}
      className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-[0_4px_10px_rgba(0,0,0,0.05)] transition-shadow hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)]"
    >
      <div className="relative aspect-[16/10] overflow-hidden sm:aspect-[4/3]">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            e.target.src = PLACEHOLDER_IMAGES.treatmentCard
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-serif text-xl text-nia-dark">{item.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-nia-dark/70">{item.description}</p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-nia-gold-dark transition-colors group-hover:text-nia-gold">
          Learn More <ArrowRightIcon className="h-3 w-3" />
        </span>
      </div>
    </Link>
  )
}

export default function Clinic() {
  const { label, heading, description } = clinicPage
  const { items } = treatmentsSection
  const seo = staticPageSeo.clinic
  const { revealProps } = useReveal(0)

  return (
    <div>
      <PageMeta title={seo.title} description={seo.description} path={seo.path} />
      <section className="bg-nia-dark pt-28 pb-14">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <header {...revealProps} className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-xs font-medium tracking-[0.25em] text-nia-gold">{label}</p>
            <h1 className="font-serif text-4xl text-white md:text-5xl">{heading}</h1>
            <p className="mt-5 text-sm leading-relaxed text-white/70 sm:text-base">{description}</p>
          </header>
        </div>
      </section>

      <section className="bg-nia-offwhite py-16 pb-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {items.map((item, index) => (
              <ServiceCard key={item.id} item={item} index={index % 4} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
