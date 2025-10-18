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
    <div
      className="fixed inset-0 z-50 bg-gradient-to-br from-primary via-primary-light to-primary-accent 
      dark:from-primary-dark dark:via-primary dark:to-primary-light 
      animate-fade-in"
    >
      {/* Close Button */}
      <button
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
              aria-label="Toggle theme"
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

export default Menu;
