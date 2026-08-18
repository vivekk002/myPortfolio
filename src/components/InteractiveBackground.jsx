const shapes = [
  "top-20 left-[5%] h-40 w-40 rounded-full border-[7px] border-blue-500/70 shadow-[0_0_30px_rgba(59,130,246,0.45)] animate-float motion-reduce:animate-none",
  "top-[12%] right-[9%] h-56 w-56 rounded-3xl border-[7px] border-orange/70 shadow-[0_0_30px_rgba(255,107,107,0.35)] animate-float-slow motion-reduce:animate-none",
  "top-[34%] left-[12%] h-32 w-32 rounded-full bg-gradient-to-br from-cyan-400/40 to-blue-500/40 shadow-[0_0_35px_rgba(6,182,212,0.35)] animate-float-reverse motion-reduce:animate-none",
  "top-[48%] right-[5%] h-48 w-48 rounded-2xl border-[7px] border-purple-500/65 shadow-[0_0_30px_rgba(168,85,247,0.35)] animate-float motion-reduce:animate-none",
  "top-[64%] left-[6%] h-44 w-44 rounded-full border-[7px] border-teal-500/70 shadow-[0_0_30px_rgba(20,184,166,0.35)] animate-float-slow motion-reduce:animate-none",
  "bottom-[12%] right-[14%] h-52 w-52 rounded-full bg-gradient-to-br from-emerald-400/30 to-teal-500/30 shadow-[0_0_35px_rgba(16,185,129,0.3)] animate-float-reverse motion-reduce:animate-none",
];

const InteractiveBackground = () => (
  <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-100/60 via-white to-purple-100/50 dark:from-primary dark:via-primary-dark dark:to-primary-light" />
    <div
      className="absolute inset-0 opacity-40 dark:opacity-25"
      style={{
        backgroundImage:
          "radial-gradient(circle, rgba(59, 130, 246, 0.3) 2px, transparent 2px)",
        backgroundSize: "50px 50px",
      }}
    />
    {shapes.map((className) => (
      <div key={className} className={`absolute ${className}`} />
    ))}
  </div>
);

export default InteractiveBackground;
