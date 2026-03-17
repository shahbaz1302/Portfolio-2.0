import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./SwipeHoverList.css";

const items = [
  {
    img: "./laptop-person.jpg",
    text: "1. Web Development"
  },
  {
    img: "./dragon-art.jpg",
    text: "2. Java Development"
  },
  {
    img: "./laptop-glowing.jpg",
    text: "3. Version Control"
  }
];

export default function SwipeHoverList() {
  const containerRefs = useRef([]);
  const imageRefs = useRef([]);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener("mousemove", onMouseMove);

    // Initial setup
    imageRefs.current.forEach((img) => {
      gsap.set(img, {
        xPercent: -50,
        yPercent: -50,
        autoAlpha: 0
      });
    });

    gsap.ticker.add(() => {
      imageRefs.current.forEach((img) => {
        if (!img || img.style.opacity === "0") return;

        gsap.to(img, {
          x: mouse.current.x,
          y: mouse.current.y,
          duration: 0.45,
          ease: "power3.out",
          overwrite: "auto"
        });
      });
    });

    containerRefs.current.forEach((el, i) => {
      const img = imageRefs.current[i];

      const onEnter = () => {
        gsap.set(img, {
          x: mouse.current.x,
          y: mouse.current.y
        });
        gsap.to(img, {
          autoAlpha: 1,
          duration: 0.15,
          ease: "power1.out"
        });
      };


      const onLeave = () => {
        gsap.to(img, {
          autoAlpha: 0,
          duration: 0.2,
          ease: "power2.out"
        });
      };

      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);

      return () => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      };
    });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      gsap.ticker.remove();
    };
  }, []);

  return (
    <ul className="list">
      {items.map((item, i) => (
        <li
          key={i}
          className="container"
          ref={(el) => (containerRefs.current[i] = el)}
        >
          <img
            ref={(el) => (imageRefs.current[i] = el)}
            className="swipeimage"
            src={item.img}
            alt=""
          />
          <div className="text">
            <h3>{item.text}</h3>
          </div>
        </li>
      ))}
    </ul>
  );
}
