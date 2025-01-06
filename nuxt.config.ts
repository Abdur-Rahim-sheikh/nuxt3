// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  app:{
    head:{
      title: 'My Nuxt App',
      meta: [
        { charset: 'utf-8' },
        { name: 'description', content: 'নাক্সট বানাচ্ছি' }
      ],
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }]
    }
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true }
})
