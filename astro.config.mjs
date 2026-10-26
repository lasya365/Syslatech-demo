import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import vectorizeIcons from './integrations/vectorize-icons.mjs';
import tailwindcss from '@tailwindcss/vite';
import node from '@astrojs/node';

const githubPages = process.env.GITHUB_PAGES === 'true';

export default defineConfig({
  output: githubPages ? 'static' : 'server',

  ...(githubPages && {
    site: 'https://lasya365.github.io',
    base: process.env.BASE_URL,
  }),

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
