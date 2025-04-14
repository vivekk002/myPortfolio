import { CgMenuRightAlt } from "react-icons/cg";
import { HiSun, HiMoon } from "react-icons/hi";
import { useState, useEffect } from "react";
import Menu from "./Menu";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [theme, setTheme] = useState("light");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <section
        className={`NAVBAR fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-smooth
        ${
          scrolled
            ? "bg-primary/95 dark:bg-primary-dark/95 backdrop-blur-md shadow-lg py-3 rounded-b-2xl mx-4"
            : "bg-primary/80 dark:bg-primary-dark/80 py-5 rounded-b-2xl mx-4"
        } 
        px-5 font-['Poppins'] max-sm:p-2 max-sm:mx-2`}
      >
        <div className="NAVBAR flex justify-between capitalize">
          <div className="LOGO">
            <a
              href="#"
              className="text-3xl bg-gradient-to-r from-white to-primary-accent bg-clip-text text-transparent dark:from-primary-accent dark:to-white max-sm:text-2xl
                transition-all duration-300 hover:scale-105"
            >
              {"<Vivek/>"}
            </a>
          </div>
          <div className="NAVLINKS text-[20px] translate-x-[80px] max-sm:hidden flex gap-12 text-white">
            <a
              href="#about"
              className="hover:text-primary-accent transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            >
              Home
            </a>
            <a
              href="#experience"
              className="hover:text-primary-accent transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            >
              Experience
            </a>
            <a
              href="#education"
              className="hover:text-primary-accent transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            >
              Education
            </a>
            <a
              href="#projects"
              className="hover:text-primary-accent transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="hover:text-primary-accent transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            >
              Contact
            </a>
            <button
              onClick={handleTheme}
              className="hover:text-primary-accent transition-colors duration-300 hover:scale-110"
            >
              {theme === "dark" ? (
                <HiMoon className="-translate-y-1 text-2xl text-white" />
              ) : (
                <HiSun className="-translate-y-1 text-2xl text-white" />
              )}
            </button>
          </div>

          <button
            onClick={() => setNav(!nav)}
            className="hover:text-primary-accent transition-colors duration-300 hover:scale-110"
          >
            <CgMenuRightAlt className="hidden max-sm:block text-white text-[32px]" />
          </button>
        </div>
        {nav && <Menu />}
      </section>
      <div className="h-20"></div>{" "}
      {/* Spacer to prevent content from hiding under navbar */}
    </>
  );
};
export default Navbar;
