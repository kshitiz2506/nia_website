import { useEffect } from 'react'
import { buildPageTitle, defaultOgImage, getSiteUrl, siteName } from '../../content/seo.js'

function upsertMeta(attribute, key, content) {
  if (!content) return

  let element = document.querySelector(`meta[${attribute}="${key}"]`)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }
  element.setAttribute('content', content)
}

function upsertLink(rel, href) {
  if (!href) return

  let element = document.querySelector(`link[rel="${rel}"]`)
  if (!element) {
    element = document.createElement('link')
    element.setAttribute('rel', rel)
    document.head.appendChild(element)
  }
  element.setAttribute('href', href)
}

function resolveImageUrl(image) {
  const siteUrl = getSiteUrl()
  if (!image) return `${siteUrl}${defaultOgImage}`
  if (image.startsWith('http://') || image.startsWith('https://')) return image
  return `${siteUrl}${image.startsWith('/') ? image : `/${image}`}`
}

export default function PageMeta({
  title,
  description,
  path = '',
  image,
  type = 'website',
  noIndex = false,
}) {
  const siteUrl = getSiteUrl()
  const fullTitle = buildPageTitle(title)
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  const canonicalUrl = `${siteUrl}${normalizedPath === '/' ? '' : normalizedPath}` || siteUrl
  const ogImage = resolveImageUrl(image)

  useEffect(() => {
    document.title = fullTitle

    upsertMeta('name', 'description', description)
    upsertMeta('name', 'robots', noIndex ? 'noindex,nofollow' : 'index,follow')

    upsertMeta('property', 'og:title', fullTitle)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:url', canonicalUrl)
    upsertMeta('property', 'og:type', type)
    upsertMeta('property', 'og:site_name', siteName)
    upsertMeta('property', 'og:image', ogImage)

    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', fullTitle)
    upsertMeta('name', 'twitter:description', description)
    upsertMeta('name', 'twitter:image', ogImage)

    upsertLink('canonical', canonicalUrl)
  }, [fullTitle, description, canonicalUrl, ogImage, type, noIndex])

  return null
}
