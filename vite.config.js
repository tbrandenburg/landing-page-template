import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'es2015', // Using es2015 instead of baseline-widely-available as it's not supported yet
    chunkSizeWarningLimit: 1000,
    reportCompressedSize: false, // Faster builds
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          motion: ['framer-motion']
        }
      }
    }
  },
  server: {
    port: 3000,
    host: '0.0.0.0',
    hmr: { overlay: true }
  },
  css: {
    postcss: './postcss.config.js'
  }
})