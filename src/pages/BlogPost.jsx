import { Link, useParams } from 'react-router'
import { blogPostCta, getBlogBySlug } from '../content/siteContent'
import { ArrowRightIcon, CalendarIcon } from '../components/layout/icons/Icons'
import PageMeta from '../components/layout/PageMeta'

const PLACEHOLDER =
  'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80'

export default function BlogPost() {
  const { slug } = useParams()
  const post = getBlogBySlug(slug)
  const { heading, description, buttonLabel, buttonHref } = blogPostCta

  if (!post) {
    return (
      <>
        <PageMeta title="Article not found" description="This blog post does not exist." noIndex />
        <div className="flex min-h-[60vh] flex-col items-center justify-center bg-nia-dark px-4 pt-28 text-center">
        <h1 className="font-serif text-3xl text-white">Article not found</h1>
        <p className="mt-3 text-white/60">This blog post does not exist or may have been moved.</p>
        <Link
          to="/blog"
          className="mt-8 inline-flex items-center gap-1 text-sm font-medium text-nia-gold hover:text-nia-gold-light"
        >
          ← Back to Blog
        </Link>
      </div>
      </>
    )
  }

  return (
    <>
      <PageMeta
        title={post.title}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
        image={post.image}
        type="article"
      />
      <article className="bg-nia-dark pt-28 pb-20">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <Link
          to="/blog"
          className="mb-8 inline-flex items-center gap-1 text-sm text-white/50 transition-colors hover:text-nia-gold"
        >
          ← All Articles
        </Link>

        <div className="overflow-hidden rounded-2xl">
          <img
            src={post.image}
            alt={post.title}
            className="aspect-[16/9] w-full object-cover"
            onError={(e) => {
              e.target.src = PLACEHOLDER
            }}
          />
        </div>

        <span className="mt-6 inline-block rounded-full bg-nia-gold/15 px-3 py-1 text-xs font-medium text-nia-gold">
          {post.category}
        </span>

        <h1 className="mt-4 font-serif text-3xl leading-tight text-white md:text-4xl lg:text-5xl">
          {post.title}
        </h1>

        <div className="mt-4 flex items-center gap-2 text-sm text-white/50">
          <CalendarIcon className="h-4 w-4" />
          <time dateTime={post.date}>{post.date}</time>
        </div>

        <div className="mt-10 space-y-6">
          {post.body.map((paragraph, index) => (
            <p key={index} className="text-sm leading-relaxed text-white/70 sm:text-base">
              {paragraph}
            </p>
          ))}
        </div>

        <aside className="mt-14 rounded-2xl bg-nia-card p-8">
          <h2 className="font-serif text-2xl text-white">{heading}</h2>
          <p className="mt-3 text-sm leading-relaxed text-white/70">{description}</p>
          <Link
            to={buttonHref}
            className="btn-gold btn-gold--md mt-6"
          >
            {buttonLabel}
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </aside>
      </div>
    </article>
    </>
  )
}
