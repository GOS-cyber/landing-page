import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base:  '/landing-page/', // ajuste de base
  plugins: [tailwindcss()],
});
