import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import vectorizeIcons from './integrations/vectorize-icons.mjs';
import tailwindcss from '@tailwindcss/vite';
import node from '@astrojs/node';

export default defineConfig({
  output: 'server',

  adapter: node({
    mode: 'standalone',
  }),

  build: {
    format: 'file',
  },

  trailingSlash: 'never',

  integrations: [
    vectorizeIcons({
      srcDir: 'src/assets/Icons',
      outDir: 'src/icons',
    }),
    icon({ iconDir: 'src/icons' }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
