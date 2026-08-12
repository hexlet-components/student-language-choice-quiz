import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  test: {
    // jsdom нужен, потому что тесты рендерят компоненты и обращаются к DOM.
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/setupTests.js",
  },
});
