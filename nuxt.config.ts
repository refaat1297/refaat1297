// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devServer: {
    port: 8080,
    url: "http://localhost:8080"
  },
  css: [
    '@/assets/scss/main.scss'
  ]
})
