import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import VideoResume from './components/VideoResume'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Education from './components/Education'
import BookChapters from './components/BookChapters'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -60px 0px' }
    )

    const targets = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale')
    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <VideoResume />
        <div className="divider" />
        <Experience />
        <Skills />
        <div className="divider" />
        <Education />
        <BookChapters />
        <div className="divider" />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
