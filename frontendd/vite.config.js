import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
        proxy:{
          '/jokes':"https://crispy-memory-g4qwxqjgp6jv3964w-3000.app.github.dev"
        } 

  }
})
