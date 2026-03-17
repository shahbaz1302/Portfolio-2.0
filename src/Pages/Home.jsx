import About from "../components/About"
import Skills from "../components/Skills"
import Projects from "../components/Projects"
import Education from "../components/Education"
import Contact from "../components/Contact"
import HeroSection from "../components/HeroSection"

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