import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
// import sitemap from '@astrojs/sitemap';
// TODO: re-enable @astrojs/sitemap when this site upgrades to Astro 5+.
// 3.x (the only published line) uses the `astro:routes:resolved` hook which only exists on Astro 5,
// so on Astro 4 it crashes at build time with `Cannot read properties of undefined (reading 'reduce')`.
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://jhamesandrewmacabata.space',
  integrations: [mdx(), tailwind()]
});