import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// User site on GitHub Pages: served from the domain root, so no `base` is needed.
export default defineConfig({
  site: 'https://macacodes.github.io',
  integrations: [
    sitemap({ filter: (page) => !page.includes('/404') && !page.includes('/design-kit') }),
  ],
});
