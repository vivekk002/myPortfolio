/* eslint-disable react/prop-types */
import { SiGithub } from "react-icons/si";
import { SlLink } from "react-icons/sl";

const Project_prop = (props) => {
  return (
    <article
      className="group shadow-lg rounded-2xl bg-gradient-to-br from-primary/10 to-primary-accent/10 dark:from-primary/30 dark:to-primary-accent/30 
      h-auto p-6 max-sm:p-4
      transition-all duration-300 ease-smooth
      hover:shadow-2xl hover:scale-[1.01] hover:from-primary/20 hover:to-primary-accent/20 dark:hover:from-primary/40 dark:hover:to-primary-accent/40
      active:scale-[0.99]
      border border-transparent hover:border-primary/20 dark:hover:border-primary-accent/20
      flex flex-col gap-4"
    >
      {/* Header Section */}
      <div className="flex gap-5 max-sm:gap-3 items-start">
        {/* Project Image/Logo */}
        <div className="flex-shrink-0">
          <div className="w-24 h-24 max-sm:w-20 max-sm:h-20 rounded-xl overflow-hidden bg-primary/5 dark:bg-primary-accent/5 ring-2 ring-primary/10 dark:ring-primary-accent/10 transition-all duration-300 group-hover:ring-primary/30 dark:group-hover:ring-primary-accent/30 group-hover:scale-105">
            <img
              src={props.img}
              alt={`${props.title} logo`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
          </div>
        </div>

        {/* Title and Tech Stack */}
        <div className="flex-1 min-w-0">
          <h2 className="font-bold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-accent dark:from-primary-accent dark:to-white text-2xl max-sm:text-xl mb-3 leading-tight">
            {props.title}
          </h2>

          <div className="space-y-2">
            <h3 className="text-primary-dark/80 dark:text-white/80 text-sm font-semibold uppercase tracking-wider">
              Tech Stack
            </h3>

            {/* Tech Stack Grid with better spacing */}
            <div className="flex flex-wrap gap-2 max-sm:gap-1.5">
              {[
                props.html5,
                props.css3,
                props.javascript,
                props.tailwindcss,
                props.react,
                props.vite,
                props.nodejs,
                props.mongodb,
                props.expressjs,
                props.redux,
                props.cloudinary,
              ]
                .filter(Boolean)
                .map((tech, index) => (
                  <div
                    key={index}
                    className="transition-all duration-200 hover:scale-110 hover:-translate-y-0.5"
                  >
                    {tech}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-primary-dark/70 dark:text-white/70 text-base max-sm:text-sm leading-relaxed px-1">
        {props.para}
      </p>

      {/* Footer with Links */}
      <div className="flex items-center justify-between pt-3 mt-auto border-t border-primary/10 dark:border-primary-accent/20">
        <div className="flex gap-4 text-primary-dark dark:text-white">
          {props.github_link && (
            <a
              href={props.github_link}
              target="_blank"
              rel="noopener noreferrer"
              className="group/icon p-2 rounded-lg bg-primary/5 dark:bg-primary-accent/5 hover:bg-primary/10 dark:hover:bg-primary-accent/10 transition-all duration-300 hover:scale-110 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-accent"
              aria-label="View source on GitHub"
            >
              <SiGithub className="text-2xl transition-transform group-hover/icon:rotate-12" />
            </a>
          )}
          {props.link && (
            <a
              href={props.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group/icon p-2 rounded-lg bg-primary/5 dark:bg-primary-accent/5 hover:bg-primary/10 dark:hover:bg-primary-accent/10 transition-all duration-300 hover:scale-110 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-accent"
              aria-label="View live demo"
            >
              <SlLink className="text-2xl transition-transform group-hover/icon:rotate-12" />
            </a>
          )}
        </div>

        {/* Optional status badge */}
        {props.status && (
          <span
            className={`text-xs font-medium px-3 py-1 rounded-full ${
              props.status === "Live"
                ? "bg-green-500/10 text-green-600 dark:text-green-400 ring-1 ring-green-500/20"
                : props.status === "In Progress"
                ? "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 ring-1 ring-yellow-500/20"
                : "bg-primary/10 text-primary-dark dark:text-white ring-1 ring-primary/20"
            }`}
          >
            {props.status}
          </span>
        )}
      </div>
    </article>
  );
};

export default Project_prop;
