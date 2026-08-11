import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "./UI/AppLayout";
import { ErrorPage } from "./Pages/ErrorPage";
import Home from "./Pages/Home";
import AboutPage from "./Pages/AboutPage";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
    ],
  },
]);

const App = () => {
  useEffect(() => {
    // Disable Lenis on small screens
    if (window.innerWidth < 768) return;

    const lenis = new Lenis({
      smoothWheel: true,
      lerp: 0.08,
    });

    lenis.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        return arguments.length
          ? lenis.scrollTo(value, { immediate: true })
          : window.scrollY;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
    });

    let rafId;

    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return <RouterProvider router={router} />;
};

export default App;