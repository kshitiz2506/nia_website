import { writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import {
  blogPosts,
  certificatePrograms,
  treatmentsSection,
  workshopPrograms,
} from '../src/content/siteContent.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const publicDir = join(__dirname, '..', 'public')

const siteUrl = (process.env.VITE_SITE_URL || 'https://www.nianextindia.com').replace(/\/$/, '')
const today = new Date().toISOString().slice(0, 10)

const staticPaths = [
  '/',
  '/clinic',
  '/institute',
  '/about',
  '/contact',
  '/faqs',
  '/gallery',
  '/blog',
]

const treatmentPaths = treatmentsSection.items.map((item) => item.href)
const coursePaths = [
  ...certificatePrograms.items,
  ...workshopPrograms.items,
].map((item) => item.href)
const blogPaths = blogPosts.map((post) => `/blog/${post.slug}`)

const allPaths = [...new Set([...staticPaths, ...treatmentPaths, ...coursePaths, ...blogPaths])]

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPaths
  .map(
    (path) => `  <url>
    <loc>${siteUrl}${path === '/' ? '' : path}</loc>
    <lastmod>${today}</lastmod>
  </url>`
  )
  .join('\n')}
</urlset>
`

const robots = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`

writeFileSync(join(publicDir, 'sitemap.xml'), sitemap, 'utf8')
writeFileSync(join(publicDir, 'robots.txt'), robots, 'utf8')

console.log(`Generated sitemap with ${allPaths.length} URLs for ${siteUrl}`)
