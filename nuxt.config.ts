// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
            '@import "@/assets/scss/utils/_variables.scss"; @import "@/assets/scss/utils/_mixins.scss";',
        },
      },
    },
  },
  css: ['@/assets/scss/main.scss'],
  modules: [
    '@nuxtjs/tailwindcss'
  ]
})
