import { Link } from 'react-router'
import { aboutSection } from '../../content/siteContent'
import { ArrowRightIcon, UserIcon, SparkleIcon, HeartIcon, AcademicIcon } from '../layout/icons/Icons'

const featureIcons = [UserIcon, SparkleIcon, HeartIcon, AcademicIcon]

export default function AboutSection() {
  const { label, heading, description, cta, ctaHref, image, features } = aboutSection

  return (
    <section className="bg-nia-dark py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="overflow-hidden rounded-sm">
            <img
              src={image}
              alt="NIA Clinic Interior"
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <p className="mb-2 text-xs font-medium tracking-[0.25em] text-nia-gold">{label}</p>
            <h2 className="font-serif text-3xl text-white md:text-4xl">{heading}</h2>
            <p className="mt-4 text-sm leading-relaxed text-white/70">{description}</p>
            <Link
              to={ctaHref}
              className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-nia-gold hover:text-nia-gold-light"
            >
              {cta} <ArrowRightIcon />
            </Link>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {features.map((feature, i) => {
                const Icon = featureIcons[i]
                return (
                  <div key={feature.title} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-nia-gold/40 text-nia-gold">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-white">{feature.title}</h4>
                      <p className="mt-1 text-xs leading-relaxed text-white/60">{feature.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
