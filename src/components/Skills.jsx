import LogoLoop from '../Layout/LogoLoop';
import ScrollFloat from "../Layout/ScrollFloat";
import { SiReact, SiJavascript, SiNodedotjs, SiExpress, SiMongodb, SiMysql, SiGithub, SiGit, SiNetlify } from 'react-icons/si';
import { FaJava, FaHtml5, FaCss3 } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

const techLogos = [
    { node: <FaJava />, title: "Java" },
    { node: <FaHtml5 />, title: "HTML" },
    { node: <FaCss3 />, title: "CSS" },
    { node: <SiJavascript />, title: "JavaScript" },
    { node: <SiReact />, title: "React" },
    { node: <SiNodedotjs />, title: "Node" },
    { node: <SiExpress />, title: "Express" },
    { node: <SiMongodb />, title: "MongoDB" },
    { node: <SiMysql />, title: "MySQL" },
    { node: <SiGithub />, title: "Github" },
    { node: <SiGit />, title: "Git" },
    { node: <VscVscode />, title: "Vs Code" },
    { node: <SiNetlify />, title: "Netlify" },
];

const Skills = () => {
    return (
        <section id="skills">
            <ScrollFloat
                animationDuration={1}
                ease='back.inOut(2)'
                scrollStart='center bottom+=50%'
                scrollEnd='bottom bottom-=40%'
                stagger={0.03}
            >
                MY TECH STACK
            </ScrollFloat>
            <div style={{ height: '200px', position: 'relative' }}>
                <div style={{ overflow: 'hidden' }}>
                    <LogoLoop
                        logos={techLogos}
                        speed={120}
                        direction="left"
                        logoHeight={100}
                        gap={40}
                        hoverSpeed={0}
                        scaleOnHover
                        fadeOut
                        fadeOutColor="var(--bg-color)"
                        ariaLabel="Technology partners"
                    />
                </div>
            </div>
        </section>
    )
}

export default Skills;