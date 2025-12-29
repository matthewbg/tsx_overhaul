import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

export default defineConfig({
  plugins: [react()],
  root: path.resolve("src/renderer"),
  build: {
    outDir: path.resolve(".vite/renderer/main_window"),
    emptyOutDir: true
  }
});
