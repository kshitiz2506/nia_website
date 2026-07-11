import { useEffect } from 'react'
import { useLocation } from 'react-router'

function scrollToHash(hash) {
  const id = hash.replace('#', '')
  if (!id) return false

  const element = document.getElementById(id)
  if (!element) return false

  element.scrollIntoView()
  return true
}

export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0)
      return
    }

    if (scrollToHash(hash)) return

    const timer = window.setTimeout(() => scrollToHash(hash), 100)
    return () => window.clearTimeout(timer)
  }, [pathname, hash])

  return null
}
