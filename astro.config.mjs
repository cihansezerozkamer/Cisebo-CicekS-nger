// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Kendi domainimiz: ciceksunger.com (GitHub Pages'e Spaceship DNS ile bağlı)
export default defineConfig({
  site: 'https://ciceksunger.com',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
