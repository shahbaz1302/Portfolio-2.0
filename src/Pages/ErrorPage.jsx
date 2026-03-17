import { NavLink } from "react-router-dom"
import Footer from "../UI/Footer"
import Header from "../UI/Header"

export const ErrorPage = () => {
    return <>
        <Header />
        <section className="page_404">
            <div className="left-text">
                <h1>404</h1>
            </div>
            <img src="./error.avif" alt="Error image" />
            <NavLink to="/"><button className="back-btn">Back Home</button></NavLink>
            <div className="right-text">
                <h1>OOPS!</h1>
            </div>
        </section>
        <Footer />
    </>
}