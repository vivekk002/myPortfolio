import { useState, useEffect } from "react";

const Menu = ({ setNav, activeSection }) => {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, [theme]);

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleClick = () => {
    setNav(false);
  };

  const isActive = (section) => activeSection === section;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-tl from-white to-primary/5 dark:from-primary-light dark:to-primary p-5 max-sm:block">
      <div className="text-lg tracking-wider leading-10 text-primary-dark dark:text-white">
        <ul className="pl-2">
          <li>
            <a
              href="#about"
              className={`hover:text-primary-accent transition-colors duration-300 ${
                isActive("about") ? "text-primary-accent" : ""
              }`}
              onClick={handleClick}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className={`hover:text-primary-accent transition-colors duration-300 ${
                isActive("experience") ? "text-primary-accent" : ""
              }`}
              onClick={handleClick}
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#education"
              className={`hover:text-primary-accent transition-colors duration-300 ${
                isActive("education") ? "text-primary-accent" : ""
              }`}
              onClick={handleClick}
            >
              Education
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={`hover:text-primary-accent transition-colors duration-300 ${
                isActive("projects") ? "text-primary-accent" : ""
              }`}
              onClick={handleClick}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={`hover:text-primary-accent transition-colors duration-300 ${
                isActive("contact") ? "text-primary-accent" : ""
              }`}
              onClick={handleClick}
            >
              Contact
            </a>
          </li>
          <button
            className="text-xl font-semibold tracking-widest hover:text-primary-accent transition-colors duration-300"
            onClick={() => {
              handleTheme();
              handleClick();
            }}
          >
            {theme === "dark" ? "Dark" : "Light"}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Menu;
