import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import postcssNesting from "postcss-nesting";

export default defineConfig({
  css: { postcss: { plugins: [postcssNesting] } },
  plugins: [react(), TanStackRouterVite(), tailwindcss()],
});
