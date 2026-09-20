import { whop } from '@whop/cli/vite'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { cloudflare } from '@cloudflare/vite-plugin'

export default defineConfig({
  plugins: [
    whop({ disableTanstackDevtools: true }),
    cloudflare({
      viteEnvironment: { name: 'ssr' }
    }),
    react()
  ],
  server: {
    port: 3000
  },
  build: {
    rollupOptions: {
      input: {
        main: './index.html'
      }
    }
  }
})
