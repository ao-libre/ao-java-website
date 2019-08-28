<template>
  <div class="min-h-screen">
    <!-- <header id="hero" class="relative flex items-center justify-center -z-1">
      <h1 class="flex flex-col items-center text-center font-serif text-2xl tracking-widest -mt-32">
        <img src="../assets/logo-big.png" alt="logo Finisterra" />
        EL RENACIMIENTO DE
        <br />ARGENTUM ONLINE
      </h1>
      <div class="separador absolute bottom-0"></div>
    </header>
    <section class="content container -mt-48 z-30 border border-gray-800">
      <h1 class="text-5xl">Noticias</h1>
      <div>
        <div v-for="post in posts" :key="post.id">
          <nuxt-link :to="`/noticias/${post.id}`" class="link">{{ post.title }}</nuxt-link>
        </div>
      </div>
    </section>-->

    <header id="hero" class="relative flex items-center justify-center">
      <div class="px-8 flex flex-col items-center text-center font-serif">
        <img src="../assets/logo-big.png" alt="logo Finisterra" />
        <h1 class="text-lg sm:text-2xl tracking-widest mt-2">
          EL RENACIMIENTO DE
          <br />ARGENTUM ONLINE
        </h1>
        <p class="tracking-wide mt-4 text-lg">próximamente...</p>
        <div class="mt-10 flex">
          <a
            href="https://github.com/ao-libre/ao-java"
            target="_blank"
            class="hover:text-primary mx-2"
          >
            <i class="fab fa-github fa-2x"></i>
          </a>
          <a
            href="https://discordapp.com/invite/qCJPGbY"
            target="_blank"
            class="hover:text-primary mx-2"
          >
            <i class="fab fa-discord fa-2x"></i>
          </a>
        </div>
      </div>
      <div class="separador absolute bottom-0"></div>
    </header>
  </div>
</template>

<script>
const slugifyModule = require("slugify");

export default {
  head() {
    return {
      title: "Finisterra - El renacimiento de Argentum Online - AO Java",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "My custom description"
        }
      ]
    };
  },
  async asyncData({ $axios }) {
    try {
      const posts = await $axios.$get(
        "https://jsonplaceholder.typicode.com/posts"
      );

      return {
        posts
      };
    } catch (e) {
      console.log(e);
    }
  },
  methods: {
    slugify(text) {
      return slugifyModule(text);
    }
  }
};
</script>

<style>
:root {
  --primary: #ffa800;
  --secondary: #111724;
}

body {
  color: white;
  background: url("../assets/body-bg.png");
  /* padding-bottom: 500px; */
  /* padding-top: 76px; */
}

h1,
h2,
h3,
h4,
h5,
h6 {
  @apply font-serif font-bold;
}

.link {
  @apply text-primary;
}

.link:hover {
  @apply underline;
}

#hero {
  height: 100vh;
  background: url("../assets/hero-bg.jpg") bottom/cover;
}

.content {
  background: url("../assets/content-bg.jpg");
  box-shadow: 0 10px 70px rgba(0, 0, 0, 0.6);
  @apply py-24 px-16;
}

.separador {
  width: 100%;
  height: 1px;
  background: linear-gradient(
    to right,
    transparent,
    var(--primary),
    transparent
  );
}

.-z-1 {
  z-index: -1;
}
</style>
