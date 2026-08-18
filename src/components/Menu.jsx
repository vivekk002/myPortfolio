import { HiSun, HiMoon } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import PropTypes from "prop-types";
import { useEffect, useRef } from "react";

const Menu = ({ onClose, activeSection, theme, setTheme }) => {
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab") return;

      const focusableElements = dialogRef.current?.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (!focusableElements?.length) return;

      const first = focusableElements[0];
      const last = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleClick = () => {
    onClose();
  };

  const isActive = (section) => activeSection === section;

  return (
    <div
      ref={dialogRef}
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
      className="fixed inset-0 z-[110] bg-gradient-to-br from-primary via-primary-light to-primary-accent
      dark:from-primary-dark dark:via-primary dark:to-primary-light 
      animate-fade-in"
    >
      {/* Close Button */}
      <button
        ref={closeButtonRef}
        onClick={handleClick}
        className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 
          text-white text-3xl transition-all duration-300 hover:scale-110 hover:rotate-90
          focus:outline-none focus:ring-2 focus:ring-accent/50"
        aria-label="Close menu"
      >
        <IoClose />
      </button>

      {/* Menu Content */}
      <div className="flex flex-col items-center justify-center h-full">
        <ul className="space-y-8 text-center">
          {[
            { href: "#about", label: "Home" },
            { href: "#experience", label: "Experience" },
            { href: "#education", label: "Education" },
            { href: "#projects", label: "Projects" },
            { href: "#contact", label: "Contact" },
          ].map(({ href, label }, index) => (
            <li
              key={href}
              className="animate-slide-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <a
                href={href}
                onClick={handleClick}
                className={`text-2xl font-semibold tracking-wide transition-all duration-300
                  ${
                    isActive(href.slice(1))
                      ? "text-accent-300 scale-110"
                      : "text-white hover:text-accent-300 hover:scale-110"
                  } inline-block`}
              >
                {label}
              </a>
            </li>
          ))}

          {/* Theme Toggle */}
          <li
            className="pt-4 animate-slide-in"
            style={{ animationDelay: "0.5s" }}
          >
            <button
              onClick={() => {
                handleTheme();
                handleClick();
              }}
              className="p-4 rounded-full bg-white/10 hover:bg-white/20 text-white hover:text-accent-300 
                transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-accent/50"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            >
              {theme === "dark" ? (
                <HiMoon className="text-3xl" />
              ) : (
                <HiSun className="text-3xl" />
              )}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

Menu.propTypes = {
  onClose: PropTypes.func.isRequired,
  activeSection: PropTypes.string.isRequired,
  theme: PropTypes.oneOf(["light", "dark"]).isRequired,
  setTheme: PropTypes.func.isRequired,
};

export default Menu;
