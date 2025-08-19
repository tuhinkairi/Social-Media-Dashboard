import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
      plugins: [react(), svgr()],
    server: {
        port: 3000, // or your preferred port
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
        },
    }
});
