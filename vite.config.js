import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/Arduino-Tutorials/',
  plugins: [
    tailwindcss(),
  ],
})

