const config = require("./.env.json");

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
          "https://fonts.googleapis.com/css?family=Cinzel:400,700|Alegreya+Sans&display=swap"
      }
    ],
    script: [{ src: "https://kit.fontawesome.com/63657e4863.js" }],
    htmlAttrs: {
      lang: "es"
    }
  },
  loading: { color: "var(--primary)" },
  css: ["~/assets/css/tailwind.css"],
  plugins: ["~/plugins/contentful.js"],
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    "@nuxtjs/pwa",
    "@nuxtjs/moment",
    "nuxt-purgecss"
  ],
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },
  moment: {
    defaultLocale: "es",
    locales: ["es"]
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
  },
  env: {
    CTF_SPACE_ID: config.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: config.CTF_CDA_ACCESS_TOKEN
  }
};
