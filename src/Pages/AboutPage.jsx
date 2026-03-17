import { FaInstagram } from "react-icons/fa"
import Contact from "../components/Contact"
import { RiLinkedinLine } from "react-icons/ri"
import { FiGithub } from "react-icons/fi"
import SwipeHoverList from "../Layout/SwipeHoverList"
import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import useButtonHover from "../../hooks/useButtonHover"

gsap.registerPlugin(ScrollTrigger)

const AboutPage = () => {
  const btnRef = useRef(null);
  useButtonHover(btnRef, "var(--dark-theme-color)", "var(--btn-text)");
  const techRef = useRef(null)
  const imageRef = useRef(null)
  const [stuck, setStuck] = useState(false)

  useEffect(() => {
    if (!techRef.current || !imageRef.current) return;

    let isStuck = false;

    ScrollTrigger.create({
      trigger: techRef.current,
      start: "top bottom",
      end: "bottom top",
      onUpdate: () => {
        const techRect = techRef.current.getBoundingClientRect();
        const imageHeight = imageRef.current.offsetHeight;
        const isTablet = window.innerWidth <= 968;

        const offset = isTablet ? 255 : 175;

        const buffer = 30;
        const shouldStick =
          techRect.bottom <= imageHeight + offset - buffer;

        // prevent repeated state toggling
        if (shouldStick !== isStuck) {
          isStuck = shouldStick;

          gsap.to(imageRef.current, {
            duration: 0.25,
            ease: "power2.out",
            onStart: () => {
              imageRef.current.classList.toggle(
                "image-stuck",
                shouldStick
              );
              imageRef.current.classList.toggle(
                "image-fixed",
                !shouldStick
              );
            }
          });
        }
      }
    });

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);


  return (
    <div className="app-wrapper about-page">
      <div className="aboutPage-content">
        <div className="aboutPage-para">
          <h2>ABOUT ME</h2>
          <h3>SHAHBAZ KHAN</h3>
          <p>Hi, I’m Mohd Shahbaz Khan, a Full Stack Developer who loves building clean, interactive, and scalable web experiences. I specialize in crafting responsive frontends with React and developing efficient backends using Node.js and databases.</p>
        </div>
        <div className="social-icons">
          <a href="https://www.instagram.com/sahill__132/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://www.linkedin.com/in/mohd-shahbaz-khan-58626b291" target="_blank" rel="noopener noreferrer"><RiLinkedinLine /></a>
          <a href="https://github.com/shahbaz1302" target="_blank" rel="noopener noreferrer"><FiGithub /></a>
        </div>
        <button className="btn contact-btn" ref={btnRef}><a href="https://drive.google.com/file/d/1gN1jxhH6cMoPw7waQ9fJS51NDO9BDlSW/view?usp=drive_link"
          target="_blank">My Resume</a></button>
      </div>
      <div className="what-section">
        <h2>WHAT I CAN DO FOR YOU</h2>
        <SwipeHoverList />
      </div>
      <div className="tech-section" ref={techRef}>
        <h2>MY TECH STACK</h2>
        <p>As a full-stack developer, I craft dynamic web applications using React for immersive frontend experiences with smooth animations via GSAP and Framer, paired with robust Node.js/Express backends and MongoDB for seamless data management.</p>
        <div className="tech-logos">
          <div className="logo-section">
            <img src="./javascript-logo.svg" className="logo" alt="JavaScript Logo" />
            <div className="div-common">
              <h3>JavaScript</h3>
              <p>The versatile language powering my dynamic frontend/backend logic and interactive web apps.</p>
            </div>
          </div>
          <div className="logo-divider"></div>
          <div className="logo-section">
            <img src="./react-logo.svg" className="logo" alt="React Logo" />
            <div className="div-common">
              <h3>React</h3>
              <p>My frontend library for building interactive, component-driven UIs with state management and hooks.</p>
            </div>
          </div>
          <div className="logo-divider"></div>
          <div className="logo-section">
            <img src="./nodejs-logo.svg" className="logo" alt="Node.js Logo" />
            <div className="div-common">
              <h3>Node JS</h3>
              <p>The runtime environment fueling my server-side JavaScript, perfect for creating fast, event-driven APIs.</p>
            </div>
          </div>
          <div className="logo-divider"></div>
          <div className="logo-section">
            <img src="./express-logo.svg" className="logo" alt="Express.js Logo" />
            <div className="div-common">
              <h3>Express JS</h3>
              <p>Lightweight Node.js framework for rapidly developing RESTful APIs and middleware management.</p>
            </div>
          </div>
          <div className="logo-divider"></div>
          <div className="logo-section">
            <img src="./mongodb-logo.svg" className="logo" alt="MongoDB Logo" />
            <div className="div-common">
              <h3>MongoDB</h3>
              <p>NoSQL database I integrate for flexible data storage and querying in projects.</p>
            </div>
          </div>
        </div>
        <img
          ref={imageRef}
          className={`image ${stuck ? "image-stuck" : "image-fixed"}`}
          src="./profile.jpg"
          alt=""
        />
      </div>
      <Contact />
    </div>
  )
}

export default AboutPage