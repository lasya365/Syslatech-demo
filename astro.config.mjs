 // @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import vectorizeIcons from './integrations/vectorize-icons.mjs';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [
    // Converts PNG-in-SVG exports into real vector icons.
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
