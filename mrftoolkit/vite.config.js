import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  // Deployed at https://sukrithi.github.io/mrftoolkit/
  // Local dev still serves from '/' so this is fine for both.
  base: '/mrftoolkit/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    // Bundle reporting helps catch accidental bloat
    chunkSizeWarningLimit: 600,
  },
})