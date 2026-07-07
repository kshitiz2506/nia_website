import PageMeta from '../components/layout/PageMeta'
import { staticPageSeo } from '../content/seo'

export default function Gallery() {
  const seo = staticPageSeo.gallery

  return (
    <>
      <PageMeta title={seo.title} description={seo.description} path={seo.path} />
      <div className="flex min-h-[60vh] items-center justify-center px-4 pt-28">
        <div className="text-center">
          <h1 className="font-serif text-4xl text-white">Gallery</h1>
          <p className="mt-4 text-white/60">This page is coming soon.</p>
        </div>
      </div>
    </>
  )
}
