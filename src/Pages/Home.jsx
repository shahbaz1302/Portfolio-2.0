import About from "../components/About"
import Skills from "../components/Skills"
import Projects from "../components/Projects"
import Education from "../components/Education"
import Contact from "../components/Contact"
import HeroSection from "../components/HeroSection"
import { Suspense } from "react"

const Home = () => {
  return (
    <div className="app-wrapper">
      <Suspense fallback={null}>
        <HeroSection />
      </Suspense>

      <Suspense fallback={null}>
        <About />
      </Suspense>

      <Suspense fallback={null}>
        <Skills />
      </Suspense>

      <Suspense fallback={null}>
        <Projects />
      </Suspense>

      <Suspense fallback={null}>
        <Education />
      </Suspense>

      <Suspense fallback={null}>
        <Contact />
      </Suspense>
    </div>
  )
}

export default Home