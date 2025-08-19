import { defineConfig } from "vite";
import { fresh } from "@fresh/plugin-vite";
import tailwindcss from "@tailwindcss/vite";
import inspect from "vite-plugin-inspect";

export default defineConfig({
  plugins: [
    fresh(),
    tailwindcss(),
    inspect(),
  ],
});
