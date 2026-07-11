import { Link } from 'react-router'
import { aboutSection } from '../../content/siteContent'
import { ArrowRightIcon, UserIcon, SparkleIcon, HeartIcon, AcademicIcon } from '../layout/icons/Icons'
import { useReveal } from '../ui/Reveal'

const featureIcons = [UserIcon, SparkleIcon, HeartIcon, AcademicIcon]

/**
 * Designed graphics (branded squares, posters) must keep their full frame.
 * Photographs may use cover + focal point — this asset is a composed 1:1 piece,
 * so we size by intrinsic ratio and never crop with object-fit: cover.
 */
function AboutMedia({ media, revealProps }) {
  const aspectRatio = `${media.width} / ${media.height}`

  return (
    <figure
      {...revealProps}
      className="overflow-hidden rounded-sm bg-nia-card"
      style={{ aspectRatio }}
    >
      <img
        src={media.src}
        alt={media.alt}
        width={media.width}
        height={media.height}
        decoding="async"
        className="block h-full w-full"
      />
    </figure>
  )
}

function FeatureItem({ feature, Icon, index }) {
  const { revealProps } = useReveal(index)

  return (
    <div {...revealProps} className="flex gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-nia-gold/40 text-nia-gold">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <h4 className="text-sm font-medium text-white">{feature.title}</h4>
        <p className="mt-1 text-xs leading-relaxed text-white/60">{feature.description}</p>
      </div>
    </div>
  )
}

export default function AboutSection() {
  const { label, heading, description, cta, ctaHref, media, features } = aboutSection
  const mediaReveal = useReveal(0)
  const contentReveal = useReveal(1)

  return (
    <section className="bg-nia-dark py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <AboutMedia media={media} revealProps={mediaReveal.revealProps} />

          <div>
            <div {...contentReveal.revealProps}>
              <p className="mb-2 text-xs font-medium tracking-[0.25em] text-nia-gold">{label}</p>
              <h2 className="font-serif text-3xl text-white md:text-4xl">{heading}</h2>
              <p className="mt-4 text-sm leading-relaxed text-white/70">{description}</p>
              <Link
                to={ctaHref}
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-nia-gold hover:text-nia-gold-light"
              >
                {cta} <ArrowRightIcon />
              </Link>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {features.map((feature, i) => (
                <FeatureItem
                  key={feature.title}
                  feature={feature}
                  Icon={featureIcons[i]}
                  index={i}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
