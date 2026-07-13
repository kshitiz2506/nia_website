import { accreditations } from '../../content/siteContent'
import { useReveal } from '../ui/Reveal'

const variantStyles = {
  dark: {
    section: 'border-y border-white/10 bg-nia-dark py-12',
    label: 'text-nia-gold',
    heading: 'text-white',
    description: 'text-white/70',
    card: 'rounded-xl border border-white/10 bg-white/5 px-4 py-5',
    name: 'text-white/80',
    itemDescription: 'text-white/60',
  },
  light: {
    section: 'py-10',
    label: 'text-nia-gold-dark',
    heading: 'text-nia-dark',
    description: 'text-nia-dark/70',
    card: 'rounded-xl border border-nia-dark/10 bg-nia-offwhite px-4 py-5',
    name: 'text-nia-dark/80',
    itemDescription: 'text-nia-dark/65',
  },
  compact: {
    section: 'border-t border-white/10 pt-8',
    label: 'text-nia-gold/80',
    heading: 'text-white/90',
    description: 'text-white/50',
    card: '',
    name: 'text-white/50',
    itemDescription: 'text-white/40',
  },
}

function AccreditationLogo({ item, compact = false }) {
  return (
    <img
      src={item.logo}
      alt={`${item.name} — ${item.fullName}`}
      className={
        compact
          ? 'mx-auto h-10 w-full max-w-[5.5rem] object-contain opacity-80'
          : 'mx-auto h-14 w-full max-w-[8rem] object-contain sm:h-16'
      }
      loading="lazy"
      decoding="async"
    />
  )
}

function StripItem({ item, index, styles, compact }) {
  const { revealProps } = useReveal(index)

  return (
    <div
      {...revealProps}
      className={`flex flex-col items-center text-center ${styles.card}`}
    >
      <AccreditationLogo item={item} compact={compact} />
      {!compact && (
        <p className={`mt-3 text-xs font-medium tracking-wide ${styles.name}`}>{item.name}</p>
      )}
    </div>
  )
}

function DetailedItem({ item, index, styles }) {
  const { revealProps } = useReveal(index)

  return (
    <article
      {...revealProps}
      className={`flex flex-col items-center text-center sm:items-start sm:text-left ${styles.card}`}
    >
      <div className="flex w-full flex-col items-center gap-4 sm:flex-row sm:items-center">
        <div className="flex h-20 w-28 shrink-0 items-center justify-center">
          <AccreditationLogo item={item} />
        </div>
        <div className="min-w-0 flex-1">
          <p className={`text-sm font-semibold ${styles.name}`}>{item.fullName}</p>
          <p className={`mt-2 text-sm leading-relaxed ${styles.itemDescription}`}>
            {item.description}
          </p>
        </div>
      </div>
    </article>
  )
}

function SectionHeader({ label, heading, description, styles, revealProps }) {
  return (
    <div {...revealProps} className="mb-8 text-center">
      <p className={`mb-2 text-xs font-medium tracking-[0.25em] ${styles.label}`}>{label}</p>
      <h2 className={`font-serif text-2xl md:text-3xl ${styles.heading}`}>{heading}</h2>
      {description && (
        <p className={`mx-auto mt-3 max-w-2xl text-sm leading-relaxed sm:text-base ${styles.description}`}>
          {description}
        </p>
      )}
    </div>
  )
}

export default function AccreditationsSection({
  variant = 'dark',
  showHeading = true,
  showDescriptions = false,
  className = '',
}) {
  const { label, heading, description, items } = accreditations
  const styles = variantStyles[variant]
  const headerReveal = useReveal(0)
  const compact = variant === 'compact'

  return (
    <section className={`${styles.section} ${className}`.trim()}>
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {showHeading && (
          <SectionHeader
            label={label}
            heading={heading}
            description={compact ? null : description}
            styles={styles}
            revealProps={headerReveal.revealProps}
          />
        )}

        {showDescriptions ? (
          <div className="grid gap-4 sm:grid-cols-2">
            {items.map((item, index) => (
              <DetailedItem key={item.id} item={item} index={index} styles={styles} />
            ))}
          </div>
        ) : (
          <div
            className={
              compact
                ? 'grid grid-cols-2 gap-6 sm:grid-cols-4'
                : 'grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6'
            }
          >
            {items.map((item, index) => (
              <StripItem
                key={item.id}
                item={item}
                index={index}
                styles={styles}
                compact={compact}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
