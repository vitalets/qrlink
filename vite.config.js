import { defineConfig } from 'vite'
import resolve from '@rollup/plugin-node-resolve'

const targetUrl = 'http://192.168.1.64:3000/index.html?id=1637762220-b8a7b7fd62&p=alice';

export default defineConfig({
  base: '/qrlink/',
  build: {
    outDir: `dist`,
  },
  server: {
    open: `/index.html?url=${encodeURIComponent(targetUrl)}`
  },
  plugins: [
    resolve({ extensions: ['.js', '.ts'] })
  ]
});
