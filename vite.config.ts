import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: command === "build" ? "/task-bboom/dist" : "/",
  };

  return config;
});
