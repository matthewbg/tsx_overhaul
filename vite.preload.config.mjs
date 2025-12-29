import { defineConfig } from "vite";
import path from "node:path";

export default defineConfig({
  build: {
    outDir: path.resolve(".vite/preload"),
    emptyOutDir: true,
    lib: {
      entry: path.resolve("src/main/preload.ts"),
      formats: ["cjs"],
      fileName: () => "preload.cjs"
    },
    rollupOptions: {
      external: ["electron"]
    }
  }
});
