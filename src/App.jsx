import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "./UI/AppLayout";
import { ErrorPage } from "./Pages/ErrorPage";
import Home from "./Pages/Home";
import AboutPage from "./Pages/AboutPage";
import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "about", element: <AboutPage /> }
    ]
  }
]);

const App = () => {
  // useEffect(() => {
  //   const lenis = new Lenis({
  //     smooth: true,
  //     lerp: 0.08,
  //     wheelMultiplier: 1,
  //     smoothTouch: false
  //   });

  //   function raf(time) {
  //     lenis.raf(time);
  //     ScrollTrigger.update();
  //     requestAnimationFrame(raf);
  //   }

  //   requestAnimationFrame(raf);

  //   return () => lenis.destroy();
  // }, []);

  useEffect(() => {
  const lenis = new Lenis();

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

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
}, []);
  return <RouterProvider router={router} />;
};

export default App;
