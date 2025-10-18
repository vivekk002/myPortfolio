import { CgMenuRightAlt } from "react-icons/cg";
import { HiSun, HiMoon } from "react-icons/hi";
import { useState, useEffect } from "react";
import Menu from "./Menu";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [theme, setTheme] = useState("light");
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = [
        "about",
        "experience",
        "education",
        "projects",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const isActive = (section) => activeSection === section;

  return (
    <>
      {/* ALWAYS VISIBLE NAVBAR - REMOVED SPACER */}
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ease-smooth
        ${
          scrolled
            ? "bg-primary/95 dark:bg-primary-light/95 backdrop-blur-md shadow-xl py-3"
            : "bg-primary/90 dark:bg-primary-light/90 backdrop-blur-sm py-5"
        } 
        px-8 max-sm:px-4 font-poppins mx-4 max-sm:mx-2 rounded-b-2xl
        border-b-2 ${
          scrolled ? "border-accent-600/30" : "border-accent-600/20"
        }`}
      >
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <a
            href="#about"
            className="text-3xl font-bold bg-gradient-to-r from-white via-accent-300 to-accent-500 bg-clip-text text-transparent
              max-sm:text-2xl transition-all duration-300 hover:scale-105 hover:from-accent-300 hover:to-white"
          >
            {"<Vivek/>"}
          </a>

          <div className="hidden md:flex items-center gap-8 text-lg">
            {[
              { href: "#about", label: "Home" },
              { href: "#experience", label: "Experience" },
              { href: "#education", label: "Education" },
              { href: "#projects", label: "Projects" },
              { href: "#contact", label: "Contact" },
            ].map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className={`relative text-white font-medium transition-all duration-300
                  hover:text-accent-300 group
                  ${isActive(href.slice(1)) ? "text-accent-300" : ""}`}
              >
                {label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-accent-400 to-orange transition-all duration-300
                  ${
                    isActive(href.slice(1))
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            ))}

            <button
              onClick={handleTheme}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white hover:text-accent-300 
                transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-accent/50"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <HiMoon className="text-2xl" />
              ) : (
                <HiSun className="text-2xl" />
              )}
            </button>
          </div>

          <button
            onClick={() => setNav(!nav)}
            className="md:hidden p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white 
              transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-accent/50"
            aria-label="Open menu"
          >
            <CgMenuRightAlt className="text-3xl" />
          </button>
        </div>
      </nav>

      {nav && (
        <Menu
          setNav={setNav}
          activeSection={activeSection}
          theme={theme}
          setTheme={setTheme}
        />
      )}
    </>
  );
};

export default Navbar;
