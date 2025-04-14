import { useState, useEffect } from "react";

const Menu = () => {
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

  return (
    <div className="text-lg tracking-wider translate-x-[180px] leading-10 border shadow-xl border-primary/20 text-primary-dark dark:text-white mt-5 max-w-[150px] p-3 rounded-lg hidden bg-gradient-to-tl from-white to-primary/5 dark:from-primary-light dark:to-primary max-sm:block">
      <ul className="pl-2">
        <li>
          <a
            href="#about"
            className="hover:text-primary-accent transition-colors duration-300"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#experience"
            className="hover:text-primary-accent transition-colors duration-300"
          >
            Experience
          </a>
        </li>
        <li>
          <a
            href="#education"
            className="hover:text-primary-accent transition-colors duration-300"
          >
            Education
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="hover:text-primary-accent transition-colors duration-300"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="hover:text-primary-accent transition-colors duration-300"
          >
            Contact
          </a>
        </li>
        <button
          className="text-xl font-semibold tracking-widest hover:text-primary-accent transition-colors duration-300"
          onClick={handleTheme}
        >
          {theme === "dark" ? "Dark" : "Light"}
        </button>
      </ul>
    </div>
  );
};
export default Menu;
