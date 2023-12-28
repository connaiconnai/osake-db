import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: { host: true },
  test: {
    environment: "happy-dom",
    setupFiles: "./src/__test__/setup.ts",
    testMatch: "./src/**/*.test.jsx",
    globals: true,
  },
});
