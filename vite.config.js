import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import { compression } from "vite-plugin-compression2";

export default defineConfig({
  plugins: [
    react(),
    TanStackRouterVite(),
    tailwindcss(),
    compression({
      include: [/\.(html|js|css)$/],
    }),
  ],
});
