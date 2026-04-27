// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import tailwind from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://controlteam.net',
  trailingSlash: 'ignore',
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [tailwind()],
  },
});
