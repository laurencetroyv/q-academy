// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },

  app: {
    head: {
      titleTemplate: 'Q-Academy',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Transforming Lives Through Integrated Support - A revolutionary platform for special needs education and healthcare' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' }
      ]
    }
  },

  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@nuxt/ui',
    'nuxt-clarity-analytics'
  ],

  ui: {
    prefix: 'Nuxt',
    colorMode: false,
  },

  css: ['~/assets/css/main.css']
})
