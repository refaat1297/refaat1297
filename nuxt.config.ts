// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devServer: {
    port: 8080,
    url: "http://localhost:8080"
  },
  app: {
    head: {
      meta: [
        { property: "og:title", content: "Ahmed Refaat" },
        { property: "og:description", content: "An Interactive Front-end Developer"},
        { property: "og:image", content: "/favicon.png"},
      ],
      link: [
        { rel: 'icon', href:"/favicon.png" }
      ],
      title: 'Ahmed Refaat'
    },
  },
  css: [
    '@/assets/scss/main.scss'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
