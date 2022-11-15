import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
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
