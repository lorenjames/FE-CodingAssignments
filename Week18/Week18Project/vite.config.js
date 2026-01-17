import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite needs the React plugin to handle JSX and fast refresh.
export default defineConfig({
  plugins: [react()],
})
