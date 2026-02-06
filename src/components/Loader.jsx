import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-primary transition-opacity duration-500">
      <div className="relative flex items-center justify-center">
        {/* Outer Ring/Glow */}
        <div className="absolute animate-ping rounded-full h-32 w-32 border-2 border-accent/20 active:border-accent/40"></div>
        <div className="absolute animate-[spin_3s_linear_infinite] rounded-full h-28 w-28 border-t-2 border-b-2 border-accent/30"></div>
        <div className="absolute animate-[spin_4s_linear_infinite_reverse] rounded-full h-24 w-24 border-r-2 border-l-2 border-orange/30"></div>

        {/* Hexagon Shape (SVG) */}
        <svg
          className="w-20 h-20 text-accent drop-shadow-[0_0_10px_rgba(100,255,218,0.3)]"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M50 5 L93.3 30 V75 L50 100 L6.7 75 V30 Z"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="animate-[pulse_2s_ease-in-out_infinite]"
          />
        </svg>

        {/* Inner Text/Icon */}
        <div className="absolute text-white font-bold text-xl font-poppins flex items-center">
          <span className="text-orange text-2xl mr-0.5">&lt;</span>
          <span className="text-white">VK</span>
          <span className="text-orange text-2xl ml-0.5">/&gt;</span>
        </div>
      </div>

      {/* Loading Text */}
      <div className="mt-10 flex flex-col items-center gap-2">
        <span className="text-accent/80 text-sm font-medium tracking-[0.3em] animate-pulse">
          INITIALIZING
        </span>
        <div className="w-24 h-1 bg-primary-light rounded-full overflow-hidden mt-2">
          <div className="h-full bg-gradient-to-r from-accent via-white to-accent w-1/2 animate-[shimmer_1.5s_infinite] rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
