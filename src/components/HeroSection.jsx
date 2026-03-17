import { MdFrontHand } from "react-icons/md";

const Home = () => {
    return <>
        <main>
            <div className="left-heading">
                <h3>Shahbaz Khan</h3>
                <h1>WEB</h1>
            </div>
            <img src="./profile.jpg" alt="Profile image" />
            <div className="hi-bubble">
                <span className="bubble-text">Hi</span>
                <span className="bubble-hand"><MdFrontHand /></span>
            </div>
            <div className="right-heading">
                <h1>Developer</h1>
                <h3>I am a Passionate Full Stack Developer</h3>
            </div>
        </main>
    </>
}

export default Home