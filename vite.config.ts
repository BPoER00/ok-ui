import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],

  build: {
    emptyOutDir: true,

    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "OkUI",
      formats: ["es", "cjs"],
      fileName: (format) => `ok-ui.${format}.js`,
    },

    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
    },
  },
});