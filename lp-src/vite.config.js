import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/lp/',
  plugins: [react()],
  build: {
    outDir: '../public/lp', // ← ここが超重要
    emptyOutDir: true
  }
});