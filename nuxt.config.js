module.exports = {
  mode: "universal",
  head: {
    title: "Finisterra - El renacimiento de Argentum Online - AO Java",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Cinzel:400,700|Livvic&display=swap"
      }
    ],
    script: [{ src: "https://kit.fontawesome.com/63657e4863.js" }],
    htmlAttrs: {
      lang: "es"
    }
  },
  loading: { color: "var(--primary)" },
  css: ["~/assets/css/tailwind.css"],
  plugins: [],
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    "@nuxtjs/pwa",
    "nuxt-purgecss"
  ],
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },
  build: {
    postcss: {
      plugins: {
        tailwindcss: "tailwind.config.js"
      }
    },
    extend(config, ctx) {}
  },
  purgeCSS: {
    mode: "postcss"
  }
};
