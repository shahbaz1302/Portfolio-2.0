import ScrollFloat from "../Layout/ScrollFloat";
import ScrollStack, { ScrollStackItem } from "../Layout/ScrollStack";

const Projects = () => {
    return (
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
            <div className="desktop-projects">
                <ScrollStack useWindowScroll>
                    <ScrollStackItem>
                        <a href="https://khanstore.netlify.app" target="_blank"><img src="./ecommerce.jpg" alt="E-commerce Store" /></a>
                        <h2>KHAN STORE</h2>
                        <p>A simple and interactive eCommerce storefront featuring dynamic cart functionality. </p>
                    </ScrollStackItem>
                    <ScrollStackItem>
                        <a href="https://worlddatlass.netlify.app" target="_blank"><img src="./world-atlas.jpg" alt="World Atlas" /></a>
                        <h2>WORLD ATLAS</h2>
                        <p>A responsive React web app that lets users explore, search, sort, and filter countries with real time data and detailed insights.</p>
                    </ScrollStackItem>
                    <ScrollStackItem>
                        <a href="https://flixoraaa.netlify.app" target="_blank"><img src="./netflix-clone.jpg" alt="Netflix Clone" /></a>
                        <h2>NETFLIX CLONE</h2>
                        <p>A Netflix-inspired web application featuring secure authentication, real-time movie data from the TMDB API, and YouTube trailer integration for an immersive streaming experience.</p>
                    </ScrollStackItem>
                    <ScrollStackItem>
                        <a href="https://mindmateai.pythonanywhere.com" target="_blank"><img src="./mental-wellness.jpg" alt="Mental Wellness AI" /></a>
                        <h2>MINDMATE AI</h2>
                        <p>An AI-powered mental wellness platform designed to support youth emotional health through personalized insights and guidance.</p>
                    </ScrollStackItem>
                </ScrollStack>
            </div>
            <div className="mobile-projects">
                <div className="div-common">
                    <a href="https://khanstore.netlify.app" target="_blank"><img className="project-image" src="./ecommerce.jpg" alt="E-commerce Store" /></a>
                    <h2>KHAN STORE</h2>
                    <p>A simple and interactive eCommerce storefront featuring dynamic cart functionality. </p>
                </div>
                <div className="div-common">
                    <a href="https://worlddatlass.netlify.app" target="_blank"><img className="project-image" src="./world-atlas.jpg" alt="World Atlas" /></a>
                    <h2>WORLD ATLAS</h2>
                    <p>A responsive React web app that lets users explore, search, sort, and filter countries with real time data and detailed insights.</p>
                </div>
                <div className="div-common">
                    <a href="https://flixoraaa.netlify.app" target="_blank"><img className="project-image" src="./netflix-clone.jpg" alt="Netflix Clone" /></a>
                    <h2>NETFLIX CLONE</h2>
                    <p>A Netflix-inspired web application featuring secure authentication, real-time movie data from the TMDB API, and YouTube trailer integration for an immersive streaming experience.</p>
                </div>
                <div className="div-common">
                    <a href="https://mindmateai.pythonanywhere.com" target="_blank"><img className="project-image" src="./mental-wellness.jpg" alt="Mental Wellness AI" /></a>
                    <h2>MINDMATE AI</h2>
                    <p>An AI-powered mental wellness platform designed to support youth emotional health through personalized insights and guidance.</p>
                </div>
            </div>
        </section>
    )
}

export default Projects