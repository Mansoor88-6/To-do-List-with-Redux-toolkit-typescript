import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),  {
    // esbuild plugin configuration
    esbuild: {
      // Add the loader option
      loader: {
        '.js': 'jsx',
      },
    },
  },   { name: 'vite:react-swc', enforce: 'pre', transform: () => '' }],
  
})
