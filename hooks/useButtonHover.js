import { useEffect } from "react";
import gsap from "gsap";

const useButtonHover = (btnRef, fillColor = "rgba(255,255,255,0.15)", textColor = "#ffffff") => {
  useEffect(() => {
    const btn = btnRef.current;
    if (!btn) return;

    const bg = document.createElement("span");
    Object.assign(bg.style, {
      position: "absolute",
      inset: "0",
      background: fillColor,
      pointerEvents: "none",
      transformOrigin: "0% 100%",
      transform: "scale(0)",
      zIndex: "0",
      borderRadius: "inherit",
      willChange: "transform",
      backfaceVisibility: "hidden",
    });

    btn.style.position = "relative";
    btn.style.overflow = "hidden";
    btn.insertBefore(bg, btn.firstChild);

    const enter = () => {
      gsap.to(bg, {
        scale: 1,
        duration: 0.25,
        ease: "power3.out",
      });
      
      gsap.to(btn.children, {
        color: textColor,
        duration: 0.25,
        ease: "power3.out",
      });
    };

    const leave = () => {
      gsap.to(bg, {
        scale: 0,
        duration: 0.25,
        ease: "power3.in",
      });
     
      gsap.to(btn.children, {
        color: "",  // revert to CSS
        duration: 0.25,
        ease: "power3.in",
      });
    };

    btn.addEventListener("mouseenter", enter);
    btn.addEventListener("mouseleave", leave);

    return () => {
      btn.removeEventListener("mouseenter", enter);
      btn.removeEventListener("mouseleave", leave);
      bg.remove();
    };
  }, [btnRef, fillColor, textColor]);
};

export default useButtonHover;

