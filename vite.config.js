import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "url";

export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)), // Use import.meta.url for compatibility
    },
    extensions: [".js", ".jsx", ".json"],
  },

  assetsInclude: ["**/*.json", "**/*.png", "**/*.jpg", "**/*.jpeg", "**/*.svg"],

  build: {
    sourcemap: false, // Disable sourcemaps in production
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL("index.html", import.meta.url)), // Use ESM-compatible import
      },
      output: {
        assetFileNames: "[name].[hash][extname]", // Cache-busting for assets
        chunkFileNames: "[name].[hash].js",
        entryFileNames: "[name].[hash].js",
      },
    },
  },

  optimizeDeps: {
    include: ["react", "react-dom"],
  },

  json: {
    stringify: true, // Ensure JSON parsing is consistent
  },

  server: {
    watch: {
      usePolling: true, // Improve stability for file changes
    },
    clearScreen: false, // Prevent noisy logs
    port: 5173, // Explicitly define a port
    open: true, // Open the browser automatically
  },
});
