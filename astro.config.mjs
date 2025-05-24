import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://juanfuent-es.github.io",
  base: "/alt-me",
  trailingSlash: "never",
  vite: {
    plugins: [tailwindcss()],
    build: {
      assetsDir: "alt-me/_astro"
    }
  },
  typescript: {
    strict: false,
    check: false
  }
});