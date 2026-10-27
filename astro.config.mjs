// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// SITE and BASE_PATH are set by the GitHub Pages workflow (.github/workflows/deploy.yml).
// With a custom domain BASE_PATH is empty; on https://<user>.github.io/<repo>/ it is "/<repo>".
const site = process.env.SITE || 'https://example.com';
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'sk', locales: { sk: 'sk', en: 'en' } },
    }),
  ],
});
