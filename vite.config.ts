import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.GITHUB_PAGES 
  ? "vite-react" 
  : "./",
  plugins: [react()],
  server: {
    https:{
      key:'localhost-key.pem',
      cert: 'localhost.pem'
    }
  }
})
