import Hero from '../components/home/Hero'
import StatsBar from '../components/home/StatsBar'
import AccreditationsSection from '../components/home/AccreditationsSection'
import TreatmentsSection from '../components/home/TreatmentsSection'
import CoursesSection from '../components/home/CoursesSection'
import ProcessSection from '../components/home/ProcessSection'
import TestimonialsSection from '../components/home/TestimonialsSection'
import AboutSection from '../components/home/AboutSection'
import BlogSection from '../components/home/BlogSection'
import CTASection from '../components/home/CTASection'
import PageMeta from '../components/layout/PageMeta'
import { staticPageSeo } from '../content/seo'

export default function Home() {
  const seo = staticPageSeo.home

  return (
    <>
      <PageMeta title={seo.title} description={seo.description} path={seo.path} />
      <Hero />
      <StatsBar />
      <TreatmentsSection />
      <CoursesSection />
      <ProcessSection />
      <TestimonialsSection />
      <AboutSection />
      <BlogSection />
      <AccreditationsSection />
      <CTASection />
    </>
  )
}
