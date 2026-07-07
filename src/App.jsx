import { BrowserRouter, Routes, Route } from 'react-router'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ScrollToTop from './components/layout/ScrollToTop'
import Home from './pages/Home'
import Clinic from './pages/Clinic'
import TreatmentDetail from './pages/TreatmentDetail'
import Institute from './pages/Institute'
import About from './pages/About'
import Contact from './pages/Contact'
import FAQs from './pages/FAQs'
import Gallery from './pages/Gallery'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import CourseDetail from './pages/CourseDetail'
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-nia-dark text-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/clinic" element={<Clinic />} />
            <Route path="/clinic/:treatmentId" element={<TreatmentDetail />} />
            <Route path="/institute" element={<Institute />} />
            <Route path="/institute/:courseId" element={<CourseDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
