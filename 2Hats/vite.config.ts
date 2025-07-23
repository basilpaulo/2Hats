import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // When deploying to GitHub Pages the site is served from
  // https://<user>.github.io/2Hats/, so all asset paths must be
  // prefixed with "/2Hats/". The `base` option ensures Vite
  // rewrites links correctly for production while still working
  // locally ("vite" and "npm run dev") where it falls back to "/".
  base: '/2Hats/',
  plugins: [react()],
})
