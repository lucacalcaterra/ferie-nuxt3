// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    shim: false,
  },
  modules: ["nuxt-quasar-ui"],
  quasar: {
    css: ["app.sass", "~quasar-ui-qcalendar/src/css/calendar-day.sass"],

    build: {
      transpile: true,
      transpileDependencies: [/quasar-ui-qcalendar[\\/]src/],
    },
  },
});
