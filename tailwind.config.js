/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#000000", // Pure black
          dark: "#000000", // Pure black
          light: "#333333", // Dark gray
          accent: "#666666", // Medium gray
          accent2: "#999999", // Light gray
          accent3: "#CCCCCC", // Very light gray
          accent4: "#FFFFFF", // Pure white
        },
        primary_accent: {
          DEFAULT: "#FFFFFF", // Pure white
          dark: "#FFFFFF", // Pure white
          light: "#F5F5F5", // Off-white
          accent: "#E5E5E5", // Light gray
          accent2: "#D5D5D5", // Slightly darker gray
          accent3: "#C5C5C5", // Medium gray
          accent4: "#B5B5B5", // Darker gray
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
