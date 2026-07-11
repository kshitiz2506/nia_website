import { processSection } from '../../content/siteContent'
import { UserIcon, ClipboardIcon, HeartIcon, SparkleIcon } from '../layout/icons/Icons'
import { useReveal } from '../ui/Reveal'

const stepIcons = [UserIcon, ClipboardIcon, HeartIcon, SparkleIcon]

function ProcessStep({ step, Icon, index }) {
  const { revealProps } = useReveal(index)

  return (
    <div {...revealProps} className="text-center">
      <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-nia-gold/40 text-nia-gold">
        <Icon className="h-7 w-7" />
      </div>
      <p className="mb-2 font-serif text-2xl text-nia-gold/60">{step.number}</p>
      <h3 className="mb-3 font-serif text-lg text-white">{step.title}</h3>
      <p className="text-sm leading-relaxed text-white/70">{step.description}</p>
    </div>
  )
}

function SectionHeader({ label, heading }) {
  const { revealProps } = useReveal(0)

  return (
    <div {...revealProps} className="mb-14 text-center">
      <p className="mb-2 text-xs font-medium tracking-[0.25em] text-nia-gold">{label}</p>
      <h2 className="font-serif text-3xl text-white md:text-4xl">{heading}</h2>
    </div>
  )
}

export default function ProcessSection() {
  const { label, heading, steps } = processSection

  return (
    <section className="border-t border-white/10 bg-nia-dark py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeader label={label} heading={heading} />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <ProcessStep key={step.number} step={step} Icon={stepIcons[i]} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
