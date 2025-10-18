const Img_prop = ({ img, label }) => {
  return (
    <div
      className="group/skill relative w-[110px] h-[110px] max-sm:w-[85px] max-sm:h-[85px]
      bg-gradient-to-br from-primary/10 to-primary-accent/10 dark:from-primary/30 dark:to-primary-accent/30 
      rounded-full shadow-lg dark:shadow-primary/30
      flex flex-col items-center justify-center gap-2
      transition-all duration-300 ease-smooth
      hover:scale-110 hover:shadow-2xl hover:-translate-y-2
      hover:from-primary/20 hover:to-primary-accent/20 dark:hover:from-primary/40 dark:hover:to-primary-accent/40
      border-2 border-transparent hover:border-primary/30 dark:hover:border-primary-accent/30
      cursor-pointer"
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-primary-accent/30 rounded-full opacity-0 group-hover/skill:opacity-100 blur-xl transition-opacity duration-300 -z-10" />

      {/* Icon */}
      <img
        src={img}
        alt={`${label} icon`}
        className="w-12 h-12 max-sm:w-10 max-sm:h-10 object-contain
        transition-transform duration-500 group-hover/skill:scale-110 group-hover/skill:rotate-6"
        loading="lazy"
      />

      {/* Label */}
      <span
        className="text-primary-dark dark:text-white text-center font-semibold text-sm max-sm:text-xs leading-tight
        transition-all duration-300
        group-hover/skill:text-transparent group-hover/skill:bg-clip-text 
        group-hover/skill:bg-gradient-to-r group-hover/skill:from-primary group-hover/skill:to-primary-accent
        dark:group-hover/skill:from-primary-accent dark:group-hover/skill:to-white"
      >
        {label}
      </span>

      {/* Active Indicator */}
      <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-primary to-primary-accent rounded-full opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300 shadow-lg" />
    </div>
  );
};

export default Img_prop;
