import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://eduvizbackend.onrender.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
      '/': { // Proxy root-level endpoints like /login, /send-otp
        target: 'https://eduvizbackend.onrender.com',
        changeOrigin: true,
        rewrite: (path) => path,
      },
    },
  },
})