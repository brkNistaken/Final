// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  build: {
    publicPath: "/custom/path/",
  },
  buildModules: ["@nuxtjs/fontawesome"],
  modules: ["@pinia/nuxt"],
  typescript: {
    strict: true, // TypeScript için katı modu etkinleştirir
  },
  plugins: ["~/plugins/firebase"],
  
});
