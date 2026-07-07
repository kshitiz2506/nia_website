import { Link } from 'react-router'
import { ctaSection } from '../../content/siteContent'

export default function CTASection() {
  const { heading, items, buttonLabel, buttonHref } = ctaSection

  return (
    <section id="book-consultation" className="bg-nia-gold py-14">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 lg:flex-row lg:justify-between lg:px-8">
        <h2 className="text-center font-serif text-2xl text-nia-dark md:text-3xl lg:text-left">
          {heading}
        </h2>
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          {items.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="text-sm font-medium text-nia-dark underline-offset-4 hover:underline"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to={buttonHref}
            className="bg-nia-dark px-8 py-3 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-black"
          >
            {buttonLabel}
          </Link>
        </div>
      </div>
    </section>
  )
}
