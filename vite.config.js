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
  build: {
    sourcemap: false,
  },
  optimizeDeps: {
    include: ["react", "react-dom"],
  },
});
