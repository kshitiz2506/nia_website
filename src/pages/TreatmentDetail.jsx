import { Link, useParams } from 'react-router'
import {
  clinicPage,
  getTreatmentById,
  siteInfo,
  treatmentWhyChooseUs,
  treatmentsSection,
} from '../content/siteContent'
import { ArrowRightIcon, CheckIcon } from '../components/layout/icons/Icons'
import PageMeta from '../components/layout/PageMeta'

const phoneHref = `tel:${siteInfo.phone.replace(/\s/g, '')}`

function formatPhone(phone) {
  const digits = phone.replace(/\D/g, '')
  if (digits.startsWith('91') && digits.length === 12) {
    return `+91 ${digits.slice(2, 7)} ${digits.slice(7)}`
  }
  return phone
}

export default function TreatmentDetail() {
  const { treatmentId } = useParams()
  const treatment = getTreatmentById(treatmentId)

  if (!treatment) {
    return (
      <>
        <PageMeta title="Treatment not found" description="This clinic service does not exist." noIndex />
        <div className="flex min-h-[60vh] flex-col items-center justify-center bg-nia-offwhite px-4 pt-28 text-center">
        <h1 className="font-serif text-3xl text-nia-dark">Treatment not found</h1>
        <p className="mt-3 text-nia-dark/60">This service does not exist or may have been moved.</p>
        <Link
          to="/clinic"
          className="mt-8 inline-flex items-center gap-1 text-sm font-medium text-nia-gold-dark hover:text-nia-gold"
        >
          Back to Clinic Services
        </Link>
      </div>
      </>
    )
  }

  const offerings = treatment.offerings ?? []
  const { heading: whyHeading, points, ctaLabel, ctaPrefix } = treatmentWhyChooseUs

  return (
    <>
      <PageMeta
        title={treatment.title}
        description={treatment.description}
        path={`/clinic/${treatment.id}`}
        image={treatment.image}
      />
      <div>
      <section className="bg-nia-dark pt-28 pb-14">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Link
            to="/clinic"
            className="mb-8 inline-flex items-center gap-1 text-sm text-white/50 transition-colors hover:text-nia-gold"
          >
            ← All Clinic Services
          </Link>

          <header className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-xs font-medium tracking-[0.25em] text-nia-gold">{clinicPage.label}</p>
            <h1 className="font-serif text-4xl text-white md:text-5xl">{treatment.title}</h1>
            <p className="mt-5 text-sm leading-relaxed text-white/70 sm:text-base">
              {treatment.description}
            </p>
          </header>
        </div>
      </section>

      <section className="bg-nia-offwhite py-16 pb-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid items-start gap-10 lg:grid-cols-[1.4fr_1fr]">
            {/* Left: treatments list */}
            <div>
              <h2 className="font-serif text-3xl text-nia-dark md:text-4xl">
                {treatmentsSection.offeringsHeading}
              </h2>

              <ul className="mt-8 space-y-3">
                {offerings.map((name) => (
                  <li
                    key={name}
                    className="flex items-center gap-4 rounded-xl bg-white px-5 py-4 shadow-[0_4px_10px_rgba(0,0,0,0.05)]"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-nia-gold/15 text-nia-gold-dark">
                      <CheckIcon className="h-4 w-4" />
                    </span>
                    <span className="text-sm font-medium text-nia-dark sm:text-base">{name}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className="btn-gold btn-gold--md mt-8 inline-flex items-center justify-center bg-nia-gold px-5 py-3 text-nia-dark tracking-wide"
              >
                Book a Consultation
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>

            {/* Right: Why Choose Us */}
            <aside className="lg:relative lg:top-21">
              <div className="rounded-2xl bg-white p-8 shadow-[0_4px_10px_rgba(0,0,0,0.05)]">
                <h2 className="font-serif text-2xl text-nia-dark md:text-3xl">{whyHeading}</h2>

                <ul className="mt-6 space-y-4">
                  {points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm text-nia-dark/80 sm:text-base">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-nia-gold" />
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 rounded-xl bg-nia-offwhite px-5 py-4">
                  <p className="text-sm font-semibold text-nia-dark">{ctaLabel}</p>
                  <p className="mt-1 text-sm text-nia-dark/70">
                    {ctaPrefix}{' '}
                    <a href={phoneHref} className="font-medium text-nia-gold-dark hover:underline">
                      {formatPhone(siteInfo.phone)}
                    </a>
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}
