import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
      interval: 100, // check every 100ms
    },
    port: 5173,
    strictPort: true,
    hmr: {
      overlay: true,
    },
  },
})
