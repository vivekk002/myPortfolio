import { useState, useEffect } from "react";
import { HiSun, HiMoon } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const Menu = ({ setNav, activeSection, theme, setTheme }) => {
  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleClick = () => {
    setNav(false);
  };

  const isActive = (section) => activeSection === section;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-tl from-white to-primary/95 dark:from-primary-light dark:to-primary p-5 h-screen w-full">
      <div className="absolute top-4 right-4">
        <button
          onClick={handleClick}
          className="text-3xl text-white hover:text-primary-accent transition-colors duration-300 hover:scale-110"
        >
          <IoClose />
        </button>
      </div>
      <div className="text-lg tracking-wider leading-10 text-primary-dark dark:text-white flex flex-col items-center justify-center h-full">
        <ul className="pl-2 space-y-6 text-center">
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
          <li>
            <button
              className="text-2xl hover:text-primary-accent transition-colors duration-300 hover:scale-110"
              onClick={() => {
                handleTheme();
                handleClick();
              }}
            >
              {theme === "dark" ? (
                <HiMoon className="text-white" />
              ) : (
                <HiSun className="text-white" />
              )}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Menu;
