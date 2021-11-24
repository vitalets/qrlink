import { defineConfig } from 'vite'
import resolve from '@rollup/plugin-node-resolve'

const targetUrl = 'https://yandex.ru';

export default defineConfig({
  base: '/qrlink/',
  build: {
    outDir: `dist`,
  },
  server: {
    open: `/qrlink/index.html?url=${encodeURIComponent(targetUrl)}`
  },
  plugins: [
    resolve({ extensions: ['.js', '.ts'] })
  ]
});
