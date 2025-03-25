import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    extensions: [".js", ".jsx", ".json"],
    preserveSymlinks: true,
  },
  assetsInclude: ["**/*.json", "**/*.png", "**/*.jpg", "**/*.jpeg", "**/*.svg"],
  build: {
    sourcemap: false,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
      },
    },
  },
  optimizeDeps: {
    include: ["react", "react-dom", "lottie-react"],
  },
  json: {
    stringify: true,
  },
  server: {
    watch: {
      usePolling: true,
    },
  },
});
