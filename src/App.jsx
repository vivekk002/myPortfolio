import Navbar from "./components/Navbar";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import InteractiveBackground from "./components/InteractiveBackground";
import AOS from "aos";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    AOS.init({
      duration: 700,
      once: true,
      disable: reducedMotion,
    });
  }, []);

  return (
    <div className="relative min-h-screen isolate">
      <a
        href="#main-content"
        className="sr-only absolute left-4 top-4 z-[200] rounded bg-white px-4 py-2 text-primary focus:not-sr-only focus:outline-none focus:ring-2 focus:ring-accent"
      >
        Skip to content
      </a>
      <InteractiveBackground />
      <Navbar />

      <main id="main-content" className="relative bg-white/80 dark:bg-primary/90 backdrop-blur-sm">
        <div className="h-16 md:h-20" />
        <About />
        <Experience />
        <Education />
        <Certifications />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default App;
