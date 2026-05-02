import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
// import sitemap from '@astrojs/sitemap';  // TODO Day 28: re-enable after fixing Astro 4 incompatibility
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://neuralxjam.github.io',
  integrations: [mdx(), tailwind()]
});