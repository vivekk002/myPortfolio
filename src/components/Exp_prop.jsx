import PropTypes from "prop-types";

const ExpProp = ({ img, title, subtitle, date, highlights, badge, link }) => {
  return (
    <article
      className="group shadow-lg rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 dark:from-primary/30 dark:to-accent/30 
      w-full min-h-[500px]
      p-4
      transition-all duration-300 ease-smooth
      hover:shadow-2xl hover:scale-[1.02] hover:from-primary/15 hover:to-accent/15 dark:hover:from-primary/35 dark:hover:to-accent/35
      active:scale-[0.98] 
      flex flex-col
      border border-transparent hover:border-accent/20 dark:hover:border-accent/30
      focus-within:ring-2 focus-within:ring-accent focus-within:ring-offset-2"
    >
      {/* Image with padding and overlay effect */}
      <div className="relative w-full h-[210px] max-sm:h-[180px] rounded-2xl overflow-hidden flex-shrink-0 mb-4 bg-white dark:bg-primary/20 ring-2 ring-accent/10 dark:ring-accent/20 transition-all duration-300 group-hover:ring-accent/30 dark:group-hover:ring-accent/40">
        <img
          src={img}
          alt={title || "Experience image"}
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-90"
          loading="lazy"
        />
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

        {/* Badge */}
        {badge && (
          <div
            className={`absolute top-3 right-3 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg
            ${
              badge === "Active"
                ? "bg-success/90 text-white ring-2 ring-success/30"
                : badge === "Internship"
                ? "bg-orange/90 text-white ring-2 ring-orange/30"
                : "bg-primary/80 dark:bg-accent/80 text-white"
            }`}
          >
            {badge}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h2
            className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-600 dark:from-accent-300 dark:to-white 
            text-lg sm:text-xl font-bold tracking-wide line-clamp-2 mb-2 leading-tight"
          >
            {title}
          </h2>

          {subtitle && (
            <p className="text-primary-dark dark:text-white text-sm font-semibold mb-1.5 line-clamp-1">
              {subtitle}
            </p>
          )}

          {highlights && (
            <ul className="space-y-2 text-xs text-primary-dark/70 dark:text-white/70 leading-relaxed">
              {highlights.map((highlight) => (
                <li key={highlight} className="flex gap-2">
                  <span aria-hidden="true" className="mt-1 text-accent-600 dark:text-accent-300">•</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer with date and optional link */}
        {(date || link) && (
          <div className="flex items-center justify-between mt-2 pt-2 border-t border-accent/20 dark:border-accent/30">
            {date && (
              <time
                className="italic text-xs text-primary-dark/60 dark:text-white/60 flex items-center gap-1.5 font-medium"
              >
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect
                    x="3"
                    y="4"
                    width="18"
                    height="18"
                    rx="2"
                    ry="2"
                    strokeWidth="2"
                  />
                  <line x1="16" y1="2" x2="16" y2="6" strokeWidth="2" />
                  <line x1="8" y1="2" x2="8" y2="6" strokeWidth="2" />
                  <line x1="3" y1="10" x2="21" y2="10" strokeWidth="2" />
                </svg>
                {date}
              </time>
            )}

            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-accent-600 dark:text-accent-400 hover:text-accent-500 dark:hover:text-accent-300 hover:underline focus:outline-none focus:ring-2 focus:ring-accent rounded px-2 py-1 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                View →
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
};

ExpProp.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  date: PropTypes.string,
  highlights: PropTypes.arrayOf(PropTypes.string),
  badge: PropTypes.string,
  link: PropTypes.string,
};

export default ExpProp;
