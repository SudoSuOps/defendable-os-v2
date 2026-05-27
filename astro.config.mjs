import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// DefendableOS — clean static marketing site.
// Built with Astro, deployed to defendableos.com via Cloudflare Pages.
export default defineConfig({
  site: "https://defendableos.com",
  output: "static",
  integrations: [tailwind(), sitemap()],
  server: {
    port: 4321,
    host: true,
  },
});
