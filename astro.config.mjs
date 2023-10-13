import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import remarkToc from 'remark-toc';
import vercel from '@astrojs/vercel/serverless';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({
    applyBaseStyles: false
  }), mdx(), sitemap()],
  markdown: {
    remarkPlugins: [remarkToc]
  },
  output: 'server',
  adapter: vercel({
    webAnalytics: {
      enabled: true
    },
    speedInsights: {
      enabled: true
    }
  })
});