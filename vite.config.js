import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/Learn-Front/', // Важно! Имя репозитория
  plugins: [react()],
  build: {
    outDir: 'docs' // Специально для GitHub Pages
  }
})
