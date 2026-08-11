import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { NavLink } from "react-router-dom";
import ScrollFloat from "../Layout/ScrollFloat"

gsap.registerPlugin(ScrollTrigger);

const projectsData = [
  { image: "/e-commerce.webp", heading: "WEARIX", text: "A modern full-stack e-commerce platform built with the MERN stack, providing a seamless shopping experience for customers and a powerful dashboard for administrators.", url: "https://wearix-store.vercel.app" },
  { image: "/world-atlas.webp", heading: "WORLD ATLAS", text: "A responsive React web app that lets users explore, search, sort, and filter countries with real time data and detailed insights.", url: "https://worlddatlass.netlify.app" },
  { image: "/netflix-clone.webp", heading: "NETFLIX CLONE", text: "A Netflix-inspired web application featuring secure authentication, real-time movie data from the TMDB API, and YouTube trailer integration for an immersive streaming experience.", url: "https://flixoraaa.netlify.app" },
  { image: "/mental-wellness.webp", heading: "MINDMATE AI", text: "An AI-powered mental wellness platform designed to support youth emotional health through personalized insights and guidance.", url: "https://mindmateai.pythonanywhere.com" }
]

const Projects = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    // Disable heavy animations on phones
    if (window.innerWidth < 768) return;

    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray(".project-panel");
      const animatedPanels = panels.slice(0, -1);

      const createAnimations = () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

        animatedPanels.forEach((panel) => {
          const innerPanel = panel.querySelector(".project-panel-inner");
          if (!innerPanel) return;

          gsap.set(panel, { clearProps: "transform,opacity" });
          gsap.set(innerPanel, { clearProps: "transform" });

          const panelHeight = innerPanel.offsetHeight;
          const windowHeight = window.innerHeight;
          const difference = panelHeight - windowHeight;

          const fakeScrollRatio =
            difference > 0
              ? difference / (difference + windowHeight)
              : 0;

          panel.style.marginBottom = fakeScrollRatio
            ? `${panelHeight * fakeScrollRatio}px`
            : "0px";

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: panel,
              start: "bottom bottom",
              end: fakeScrollRatio
                ? `+=${innerPanel.offsetHeight}`
                : "bottom top",
              pin: true,
              pinSpacing: false,
              scrub: true,
              invalidateOnRefresh: true,
            },
          });

          if (fakeScrollRatio) {
            tl.to(innerPanel, {
              yPercent: -100,
              y: window.innerHeight,
              duration: 1 / (1 - fakeScrollRatio) - 1,
              ease: "none",
            });
          }

          tl.fromTo(
            panel,
            {
              scale: 1,
              opacity: 1,
            },
            {
              scale: 0.7,
              opacity: 0.5,
              duration: 0.9,
              ease: "none",
            }
          ).to(panel, {
            opacity: 0,
            duration: 0.1,
            ease: "none",
          });
        });
      };

      createAnimations();

      const onResize = () => {
        ScrollTrigger.refresh();
      };

      window.addEventListener("resize", onResize);

      return () => {
        window.removeEventListener("resize", onResize);
      };
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return <>
    <section id="projects">
      <ScrollFloat
        animationDuration={1}
        ease='back.inOut(2)'
        scrollStart='center bottom+=50%'
        scrollEnd='bottom bottom-=40%'
        stagger={0.03}
      >
        FEATURED PROJECTS
      </ScrollFloat>
      <p className="project-para">Here’s a curated collection of my projects that reflect my skills, creativity, and problem-solving approach. Each project highlights my experience in building practical and user-focused applications.</p>
    </section>
    <section className="projects-wrapper" ref={containerRef}>
      {projectsData.map((project, index) => (
        <section
          key={index}
          className="project-panel"
          style={{ backgroundImage: `url(${project.image})` }}
        >
          <NavLink to={project.url} target="_blank">
            <div className="project-overlay" />
            <div className="project-panel-inner">
              <h2>{project.heading}</h2>
              <p>{project.text}</p>
            </div>
          </NavLink>
        </section>
      ))}
    </section>
    <div className="mobile-projects">
      <div className="div-common">
        <a href="https://khanstore.netlify.app" target="_blank"><img className="project-image" src="./e-commerce.webp" alt="E-commerce Store" /></a>
        <h2>KHAN STORE</h2>
        <p>A simple and interactive eCommerce storefront featuring dynamic cart functionality. </p>
      </div>
      <div className="div-common">
        <a href="https://worlddatlass.netlify.app" target="_blank"><img className="project-image" src="./world-atlas.webp" alt="World Atlas" /></a>
        <h2>WORLD ATLAS</h2>
        <p>A responsive React web app that lets users explore, search, sort, and filter countries with real time data and detailed insights.</p>
      </div>
      <div className="div-common">
        <a href="https://flixoraaa.netlify.app" target="_blank"><img className="project-image" src="./netflix-clone.webp" alt="Netflix Clone" /></a>
        <h2>NETFLIX CLONE</h2>
        <p>A Netflix-inspired web application featuring secure authentication, real-time movie data from the TMDB API, and YouTube trailer integration for an immersive streaming experience.</p>
      </div>
      <div className="div-common">
        <a href="https://mindmateai.pythonanywhere.com" target="_blank"><img className="project-image" src="./mental-wellness.webp" alt="Mental Wellness AI" /></a>
        <h2>MINDMATE AI</h2>
        <p>An AI-powered mental wellness platform designed to support youth emotional health through personalized insights and guidance.</p>
      </div>
    </div>
  </>
}

export default Projects;