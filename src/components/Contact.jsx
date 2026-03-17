import { MdFrontHand } from "react-icons/md";
import ScrollFloat from "../Layout/ScrollFloat";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useButtonHover from "../../hooks/useButtonHover";

const Contact = () => {
    const form = useRef();
    const [isSent, setIsSent] = useState(false);
    const btnRef = useRef(null);
    useButtonHover(btnRef, "var(--dark-theme-color)", "var(--btn-text)");

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_vkjwwbw",
                "template_1aq4ro4",
                form.current,
                "tYG-5p4_cssjl7kik"
            )
            .then(
                () => {
                    setIsSent(true);
                    form.current.reset();
                    toast.success("Message sent successfully! ✅", {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        theme: "dark",
                    });
                },
                (error) => {
                    console.error("Error sending message:", error);
                    toast.error("Failed to send message. Please try again.", {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        theme: "dark",
                    });
                }
            );
    };

    return (
        <section id="contact">
            <ToastContainer />
            <div className="contact-image">
                <img src="./profile.jpg" alt="Profile image" />
                <div className="hi-bubble contact-bubble">
                    <span className="bubble-text">Hi</span>
                    <span className="bubble-hand"><MdFrontHand /></span>
                </div>
            </div>
            <div className="contact-content">
                <ScrollFloat
                    animationDuration={1}
                    ease='back.inOut(2)'
                    scrollStart='center bottom+=50%'
                    scrollEnd='bottom bottom-=40%'
                    stagger={0.03}
                >
                    Let's Work Together
                </ScrollFloat>
                <p>I’d love to hear from you—reach out for any opportunities or questions!</p>
                <form ref={form} onSubmit={sendEmail}>
                    <div className="overall-div">
                        <div className="name-email">
                            <div className="contact">
                                <label htmlFor="username">Name</label>
                                <input type="text" name="username" placeholder="John Smith" required />
                            </div>
                            <div className="contact">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" placeholder="johnsmith@gmail.com" required />
                            </div>
                        </div>
                        <div className="contact">
                            <label htmlFor="message">What Can I Help You...</label>
                            <textarea name="message" placeholder="Hello, I'd like to enquire about..." rows={6}></textarea>
                        </div>
                        <button type="submit" className="btn contact-btn" ref={btnRef}><a>Submit</a></button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact