import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://www.example.com",
  base: "/",
  trailingSlash: "always",
  vite: {
    plugins: [tailwindcss()],
  },
});