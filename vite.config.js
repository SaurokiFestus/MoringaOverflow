import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/login" : {
        target: "http://localhost:3000",
        changeOrigin: true, 
        secure: false,
      },
      "/questions" : {
        target: "http://localhost:3000",
        changeOrigin: true, 
        secure: false,
      }
    },
  },
  plugins: [react()]
});
