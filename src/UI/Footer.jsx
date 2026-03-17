import { FaInstagram } from "react-icons/fa"
import { FiGithub } from "react-icons/fi"
import { RiLinkedinLine } from "react-icons/ri"

const Footer = () => {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-content">
          <div className="footer-email">
            <h3>Email : </h3>
            <p>khanmohdshahbaz70@gmail.com</p>
          </div>
          <div className="footer-phone">
            <h3>Call Today : </h3>
            <p>+91 9058768423</p>
          </div>
          <div className="footer-social-icons">
            <h3>Social : </h3>
            <div className="links"><a href="https://www.instagram.com/sahill__132/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="https://www.linkedin.com/in/mohd-shahbaz-khan-58626b291" target="_blank" rel="noopener noreferrer"><RiLinkedinLine /></a>
              <a href="https://github.com/shahbaz1302" target="_blank" rel="noopener noreferrer"><FiGithub /></a>
            </div>
          </div>
        </div>
        <div className="footer-divider"></div>
        <div className="footer-copyright">
          <div className="copyright-content">
            <p>© Copyright 2026. All Rights Reserved by Shahbaz Khan</p>
          </div>
          <div className="created-content">
            <p>Created by</p>
            <img src="./logo.png" alt="Logo" />
            <p><u>Shahbaz Khan</u></p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer