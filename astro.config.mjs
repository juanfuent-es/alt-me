import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://juanfuent-es.github.io/alt-me",
  base: "/",
  trailingSlash: "never",
  vite: {
    plugins: [tailwindcss()],
  },
  typescript: {
    strict: false,
    check: false
  }
});