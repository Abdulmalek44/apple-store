import path from "path"
import react from "@vitejs/plugin-react"
import dotenv from 'dotenv';
import { defineConfig } from "vite"
import svgr from "vite-plugin-svgr";

dotenv.config()
export default defineConfig({
  plugins: [react(),svgr()],
  define: {
    'process.env': process.env
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
