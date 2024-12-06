import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import checker from "vite-plugin-checker";
import path from "path";
// https://vitejs.dev/config/

export default defineConfig({
  plugins: [
    react(),
    checker({
      typescript: {
        root: `${process.cwd()}/path/to/app`,
        tsconfigPath: "tsconfig.app.json",
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  define: {
    "process.env": {},
  },
});
