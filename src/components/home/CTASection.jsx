import { Link } from 'react-router'
import { ctaSection } from '../../content/siteContent'
import { useReveal } from '../ui/Reveal'

export default function CTASection() {
  const { heading, items, buttonLabel, buttonHref } = ctaSection
  const title = useReveal(0)
  const actions = useReveal(1)

  return (
    <section id="book-consultation" className="gold-metallic-section py-14">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 lg:flex-row lg:justify-between lg:px-8">
        <h2
          {...title.revealProps}
          className="text-center font-serif text-2xl text-nia-dark md:text-3xl lg:text-left"
        >
          {heading}
        </h2>
        <div
          {...actions.revealProps}
          className="flex flex-col items-center gap-4 sm:flex-row"
        >
          {items.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="text-sm font-medium text-nia-dark underline-offset-4 hover:underline"
            >
              {item.label}
            </Link>
          ))}
          <Link to={buttonHref} className="btn-on-gold">
            {buttonLabel}
          </Link>
        </div>
      </div>
    </section>
  )
}
