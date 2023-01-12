// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    router: { base: '/landing-page/' },
    css: ['~/src/assets/css/main.css'],
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  })
  router: { base: '/landing-page/' }