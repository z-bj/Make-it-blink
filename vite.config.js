import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://github.com/z-bj/Make-it-blink',
  build: {
    outDir: './dist/react',
  },
  server: {
    port: 4200,
    open: true,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: 'src/setupTests.js',
    css: true,
  },
  plugins: [react()],
});
