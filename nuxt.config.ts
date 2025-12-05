// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  // Enforce Server-Side Rendering for SEO
  ssr: true,
  // Global CSS
  css: ["~/assets/css/main.css"],
  // Modules for functionality and styling
  modules: [
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/image",
    "@nuxtjs/color-mode",
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    // "@nuxtjs/seo",
  ],

  // Global App Configuration
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
        dir: "ltr",
        class: "dark scroll-smooth",
      },
      title: "Senior Engineer & Audio Composer",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "theme-color", content: "#09090b" },
        {
          name: "description",
          content:
            "Senior Full-Stack Developer specializing in Vue/Nuxt & Audio Architecture.",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },

  // Color Mode Configuration
  colorMode: {
    classSuffix: "",
    preference: "dark", // Force dark mode as per design system
    fallback: "dark",
  },

  // Image Optimization
  image: {
    format: ["webp"],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
  },
});
