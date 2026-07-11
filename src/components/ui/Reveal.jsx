import { useLayoutEffect, useRef, useState } from 'react'

/**
 * Progressive scroll reveal — props-based, never a layout wrapper.
 *
 * Spread `revealProps` onto the element that already participates in your
 * grid/flex layout. Wrapping cards in an extra node breaks equal-height rows.
 *
 *   const { revealProps, inView } = useReveal(0)
 *   return <article {...revealProps} className="h-full …">…</article>
 */

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function isInViewport(node) {
  const rect = node.getBoundingClientRect()
  return rect.top < window.innerHeight * 0.92 && rect.bottom > 0
}

export function useReveal(index = 0, { immediate = false } = {}) {
  const ref = useRef(null)
  const [status, setStatus] = useState(immediate ? 'live' : 'idle')

  useLayoutEffect(() => {
    if (immediate) {
      setStatus('live')
      return
    }

    const node = ref.current
    if (!node) return

    if (prefersReducedMotion()) {
      setStatus('live')
      return
    }

    if (isInViewport(node)) {
      setStatus('live')
      return
    }

    setStatus('waiting')

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatus('live')
          observer.disconnect()
        }
      },
      { rootMargin: '0px 0px -6% 0px', threshold: 0 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [immediate])

  return {
    inView: status === 'live',
    revealProps: {
      ref,
      'data-reveal': status === 'idle' ? undefined : status,
      style: { '--reveal-index': index },
    },
  }
}
