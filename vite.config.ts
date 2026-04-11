import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    // Prefer .tsx/.ts over .jsx/.js so new TS files shadow old JSX files
    extensions: ['.mts', '.ts', '.tsx', '.mjs', '.js', '.jsx', '.json'],
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
