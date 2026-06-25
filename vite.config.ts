import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages serves from a repo subpath; Vercel and local dev use root.
const base = process.env.GITHUB_ACTIONS ? '/kisan-setu-website/' : '/'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base,
})
