/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Deep Professional Blue (60% - backgrounds)
        primary: {
          DEFAULT: "#0A192F", // Deep navy
          dark: "#060D1F",
          light: "#112240",
          accent: "#1A365D",
          accent2: "#2C5282",
          accent3: "#4299E1",
          accent4: "#63B3ED",
        },
        // Bright Cyan/Blue Accent (30% - cards, surfaces)
        accent: {
          DEFAULT: "#64FFDA", // Bright cyan
          dark: "#4FD1C5",
          light: "#9DECF9",
          100: "#E6FFFA",
          200: "#B2F5EA",
          300: "#81E6D9",
          400: "#4FD1C5",
          500: "#38B2AC",
          600: "#319795",
          700: "#2C7A7B",
        },
        // Vibrant Orange/Coral (10% - CTAs, highlights)
        orange: {
          DEFAULT: "#FF6B6B", // Coral red
          dark: "#FF5252",
          light: "#FF8E8E",
          300: "#FFA5A5",
          400: "#FF8E8E",
          500: "#FF6B6B",
          600: "#FF5252",
        },
        // Semantic colors
        success: {
          DEFAULT: "#10B981",
          dark: "#059669",
          light: "#34D399",
        },
        warning: {
          DEFAULT: "#F59E0B",
          dark: "#D97706",
          light: "#FBBF24",
        },
        danger: {
          DEFAULT: "#EF4444",
          dark: "#DC2626",
          light: "#F87171",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      transitionProperty: {
        height: "height",
        spacing: "margin, padding",
      },
      transitionDuration: {
        400: "400ms",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
};
