import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "remote-app-1",
      filename: "remoteEntry.js",
      exposes: {
        "./RemoteComponent": "./src/RemoteComponent.tsx",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  server: {
    port: 5001,
  },
  preview: {
    port: 5001,
  },
});
