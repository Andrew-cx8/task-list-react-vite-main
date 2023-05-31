import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/task-list-react-vite/',
  server: {
    host: '0.0.0.0'     // ← new content ←
  },
  build: {       
    outDir: 'dist',
    },     
  publicDir: './src/img' 
})
