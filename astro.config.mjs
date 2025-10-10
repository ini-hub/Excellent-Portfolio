// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind"; // <-- Ensure this import is present
import sitemap from '@astrojs/sitemap'; 

export default defineConfig({
    site: 'https://www.bolujoexcellent.com', 

    integrations: [
        tailwind(), // <-- Ensure this is present and called
        sitemap(),
    ]
});