module.exports = {
  packagerConfig: {},
  makers: [],
  plugins: [
    {
      name: "@electron-forge/plugin-vite",
      config: {
        build: [
          { entry: "src/main/main.ts", config: "vite.main.config.mjs" },
          { entry: "src/main/preload.ts", config: "vite.preload.config.mjs" }
        ],
        renderer: [{ name: "main_window", config: "vite.renderer.config.mjs" }]
      }
    }
  ]
};
