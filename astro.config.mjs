import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
// import node from "@astrojs/node";
import vercelServerless from '@astrojs/vercel/serverless';

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  output: "server",
  // adapter: node({mode: 'standalone',}),
  adapter: vercelServerless(),
  integrations: [react(), tailwind({
    applyBaseStyles: false
  })/* , svelte() */],
  image: {
    domains: ["*"]
    // remotePatterns: [{
    //   protocol: 'https',
    //   hostname: '*',
    //   pathname: "**/.*/**",
    // }],
  }
});