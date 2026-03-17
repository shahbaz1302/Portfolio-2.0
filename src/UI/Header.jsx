import { useEffect, useRef, useState } from "react";
import { FiMenu, FiX, FiMoon, FiSun } from "react-icons/fi";
import useButtonHover from "../../hooks/useButtonHover";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const [scrolled, setScrolled] = useState(false);
  const btnRef = useRef(null);
  useButtonHover(btnRef, "var(--dark-theme-color)","");

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
  ];

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let accumulated = 0;

    const THRESHOLD = 50;

    const onScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY;

      if (Math.abs(delta) < 2) return;

      if (
        (delta > 0 && accumulated >= 0) ||
        (delta < 0 && accumulated <= 0)
      ) {
        accumulated += delta;
      } else {
        accumulated = delta;
      }

      if (accumulated > THRESHOLD) {
        setScrolled(true);
        accumulated = 0;
      }

      if (accumulated < -THRESHOLD) {
        setScrolled(false);
        accumulated = 0;
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="header-container">
        <header className={`nav-container ${isOpen ? "open" : ""} ${scrolled ? "scrolled" : ""}`}>
          <img src="/cropped_circle_image.png" alt="profile" />

          <div className={`nav-status ${scrolled ? "shrink-nav" : ""} `}>
            <span className="status-text">Available for work</span>
            <span className="status-dot"></span>
          </div>


          <nav className="menu-desktop">
            <ul className={`${scrolled ? "scrolled-menu" : ""}`}>
              <NavLink to="/" className="home">Home</NavLink>
              {menuItems.map((item) => (
                <li key={item.id}>
                  <a onClick={() => handleScrollTo(item.id)}>
                    {item.label}
                  </a>
                </li>
              ))}
              <button className="btn" ref={btnRef} onClick={() => handleScrollTo("contact")}><a>Contact</a></button>
              <button className="theme-btn" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>{theme === "light" ? <FiMoon /> : <FiSun />}</button>
            </ul>
          </nav>

          <nav className="menu-mobile">
            <ul>
              <NavLink to="/" className="home">Home</NavLink>
              {menuItems.map((item) => (
                <li key={item.id}>
                  <a onClick={() => handleScrollTo(item.id)}>
                    {item.label}
                  </a>
                </li>
              ))}
              <button className="btn mobile-btn" onClick={() => handleScrollTo("contact")}>Contact</button>
            </ul>
          </nav>
          <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
            <span className={`icon ${isOpen ? "hide" : ""}`}>
              <FiMenu />
            </span>
            <span className={`icon ${isOpen ? "" : "hide"}`}>
              <FiX />
            </span>
          </button>
        </header>
        <button className={`theme-btn menu-theme`} onClick={() => setTheme(theme === "light" ? "dark" : "light")}>{theme === "light" ? <FiMoon /> : <FiSun />}</button>
      </div>
    </>
  );
};

export default Header;

