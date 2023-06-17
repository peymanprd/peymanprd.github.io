// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    'nuxt-icon',
    '@nuxt/image-edge',
    '@vueuse/nuxt',
    '@vueuse/motion/nuxt',
  ],
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Peyman Pirzadeh - Frontend Developer',
      link: [
        { rel: 'icon', type: 'image/svg', href: '/favicon.svg' },
        {
          rel: 'preload',
          as: 'font',
          href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500&display=swap',
          crossorigin: 'anonymous',
        },
      ],
    },
  },
  content: {
    markdown: {
      remarkPlugins: {
        // Override remark-emoji options
        'remark-emoji': {
          emoticon: true,
        },
      },
    },
    highlight: {
      theme: { default: 'github-dark' },
      preload: ['vue'],
    },
  },
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    exposeConfig: false,
    injectPosition: 0,
    viewer: true,
  },
  colorMode: {
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorTheme',
    classPrefix: '',
    classSuffix: '',
    storageKey: 'theme-mode',
  },
})
