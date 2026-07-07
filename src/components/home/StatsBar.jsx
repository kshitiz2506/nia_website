import { useEffect, useState } from 'react'
import { stats } from '../../content/siteContent'

const DURATION_MS = 1600

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3)
}

function AnimatedStat({ target, suffix, decimals, label }) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    let frameId
    const start = performance.now()

    const tick = (now) => {
      const progress = Math.min((now - start) / DURATION_MS, 1)
      const next = target * easeOutCubic(progress)
      setValue(next)

      if (progress < 1) {
        frameId = requestAnimationFrame(tick)
      }
    }

    frameId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frameId)
  }, [target])

  const display = value.toFixed(decimals)

  return (
    <div className="text-center">
      <p className="font-serif text-3xl font-semibold text-nia-gold md:text-4xl">
        {display}
        {suffix}
      </p>
      <p className="mt-1 text-sm text-white/70">{label}</p>
    </div>
  )
}

export default function StatsBar() {
  return (
    <section className="border-y border-white/10 bg-nia-dark">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-10 md:grid-cols-4 lg:px-8">
        {stats.map((stat) => (
          <AnimatedStat key={stat.label} {...stat} />
        ))}
      </div>
    </section>
  )
}