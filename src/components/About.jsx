import { useRef } from "react";
import ScrollFloat from "../Layout/ScrollFloat";
import { FaInstagram } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { RiLinkedinLine } from "react-icons/ri";
import useButtonHover from "../../hooks/useButtonHover";
import { NavLink } from "react-router-dom";

const About = ({ sectionRef }) => {
    const btnRef = useRef(null);
    useButtonHover(btnRef, "var(--dark-theme-color)", "var(--btn-text)");
    return (
        <div id="about">
            <div className="about-content">
                <div className="about-para">
                    <ScrollFloat
                        animationDuration={1}
                        ease='back.inOut(2)'
                        scrollStart='center bottom+=50%'
                        scrollEnd='bottom bottom-=40%'
                        stagger={0.03}
                    >
                        ABOUT ME
                    </ScrollFloat>
                    <p>Hi, I’m Mohd Shahbaz Khan, a Full Stack Developer who loves building clean, interactive, and scalable web experiences. I specialize in crafting responsive frontends with React and developing efficient backends using Node.js and databases.</p>
                </div>
                <div className="about-contact">
                    <div className="about-phone">
                        <h3>Call Today : </h3>
                        <p>+91 9058768423</p>
                    </div>
                    <div className="about-email">
                        <h3>Email : </h3>
                        <p>khanmohdshahbaz70@gmail.com</p>
                    </div>
                </div>
                <div className="social-icons">
                    <a href="https://www.instagram.com/sahill__132/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                    <a href="https://www.linkedin.com/in/mohd-shahbaz-khan-58626b291" target="_blank" rel="noopener noreferrer"><RiLinkedinLine /></a>
                    <a href="https://github.com/shahbaz1302" target="_blank" rel="noopener noreferrer"><FiGithub /></a>
                </div>
                <button className="about-btn btn" ref={btnRef}><NavLink to="/about">MY STORY</NavLink></button>
            </div>
            <img src="./desktop.avif" alt="About Image" />
        </div>
    )
}

export default About