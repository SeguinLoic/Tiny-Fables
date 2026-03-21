import { defineConfig, fontProviders } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
// import siteConfigToolbar from "./site-config-toolbar/integration.ts";

// https://astro.build/config
export default defineConfig({
  integrations: [sitemap(), siteConfigToolbar()],
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Geist",
      cssVariable: "--font-geist",
    },
  ],
  markdown: {
    shikiConfig: {
      theme: "dark-plus",
    },
  },
  site: "https://tinyfables.netlify.app/",
  vite: {
    plugins: [tailwindcss()],
  },
});
