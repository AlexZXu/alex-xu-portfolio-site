// @ts-check
import { defineConfig } from 'astro/config';
import robotsTxt from 'astro-robots-txt'
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), 
    robotsTxt({
      policy: [
        {
          userAgent: '*',
          disallow: '/'
        }
      ]
    })
  ]
});