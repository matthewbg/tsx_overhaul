import { defineConfig } from "vite";
import path from "node:path";

export default defineConfig({
  build: {
    outDir: path.resolve(".vite/main"),
    emptyOutDir: true,
    lib: {
      entry: path.resolve("src/main/main.ts"),
      formats: ["cjs"],
      fileName: () => "main.cjs"
    },
    rollupOptions: {
      external: ["electron"]
    }
  }
});
