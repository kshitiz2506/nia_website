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

  // The synchronous setStatus calls below require post-mount layout data
  // (matchMedia / getBoundingClientRect) that isn't available during render,
  // so this genuinely needs to live inside an effect rather than be derived state.
  /* eslint-disable react-hooks/set-state-in-effect */
  useLayoutEffect(() => {
    // Initial state above already accounts for `immediate` — nothing to sync here.
    if (immediate) return

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
  /* eslint-enable react-hooks/set-state-in-effect */

  return {
    inView: status === 'live',
    revealProps: {
      ref,
      'data-reveal': status === 'idle' ? undefined : status,
      style: { '--reveal-index': index },
    },
  }
}
