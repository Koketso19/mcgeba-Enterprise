import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/mcgeba-Enterprise/', // <-- Only add this if deploying to GitHub Pages
})
