import Navbar from "./components/Navbar";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import InteractiveBackground from "./components/InteractiveBackground";
import { PropagateLoader } from "react-spinners";
import { useState, useEffect } from "react";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex flex-col h-screen justify-center items-center bg-gradient-to-br from-primary via-primary-light to-primary-accent3 gap-6">
          <PropagateLoader
            color="#64FFDA"
            loading={loading}
            size={20}
            aria-label="Loading Spinner"
          />
          <p className="text-accent text-lg font-semibold animate-pulse">
            Loading Portfolio...
          </p>
        </div>
      ) : (
        <div className="relative min-h-screen">
          {/* Interactive Background */}
          <InteractiveBackground />

          {/* NAVBAR OUTSIDE - highest z-index */}
          <Navbar />

          {/* Content - BALANCED OPACITY */}
          <div className="relative bg-white/80 dark:bg-primary/90 backdrop-blur-sm">
            <div className="h-20" /> {/* Spacer for navbar */}
            <About />
            <Experience />
            <Education />
            <Projects />
            <Contact />
          </div>
        </div>
      )}
    </>
  );
};

export default App;
