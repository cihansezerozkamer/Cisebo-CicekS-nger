// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Ücretsiz GitHub Pages adresi. Kendi domain alınınca:
// site: 'https://ciceksunger.com' yapılır, base satırı silinir.
export default defineConfig({
  site: 'https://cihansezerozkamer.github.io',
  base: '/Cisebo-CicekS-nger',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
