import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import process from "process";

export default defineConfig({
  plugins: [react()],
  define: {
    "process.env": process.env, // process.env 객체를 브라우저에서 사용할 수 있도록 설정
  },
});
