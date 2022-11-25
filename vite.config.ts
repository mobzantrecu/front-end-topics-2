import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import wasm from "vite-plugin-wasm";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), wasm()],
  build: {
    lib: {
      entry: "src/app.tsx",
      formats: ["es"],
    },
    rollupOptions: {
      external: /^lit/,
    },
  },
});
