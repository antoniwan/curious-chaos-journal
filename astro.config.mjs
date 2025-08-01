// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel";
import { SITE_URL } from "./src/consts";

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  integrations: [
    mdx(),
    sitemap(),
    tailwind({
      applyBaseStyles: true,
    }),
  ],
  adapter: vercel(),
  markdown: {
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "github-dark",
      wrap: true,
    },
    smartypants: true,
    gfm: true,
    rehypePlugins: [
      // Removed rehype-image-size as it is not used
    ],
  },
  // Enable built-in prefetch with optimized settings
  prefetch: {
    prefetchAll: false,
    defaultStrategy: "hover",
  },
  // Enable image optimization
  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
    },
    domains: ["blog.antoniwan.online"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "blog.antoniwan.online",
        pathname: "/images/**",
      },
    ],
  },
});
