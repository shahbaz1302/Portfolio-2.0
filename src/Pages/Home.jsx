import HeroSection from "../components/HeroSection"
import Skills from "../components/Skills"
import Education from "../components/Education"
import Projects from "../components/Projects"
import Contact from "../components/Contact"
import About from "../components/About"

const Home = () => {
  return (
    <div className="app-wrapper">
      <HeroSection/>
      <About/>
      <Skills/>
      <Projects/>
      <Education/>
      <Contact/>
    </div>
  )
}

export default Home