<template>
  <div>
    <header id="hero" class="flex items-center justify-center">
      <h1 class="flex flex-col items-center text-center font-serif text-2xl tracking-widest -mt-32">
        <img src="../assets/logo-big.png" alt="logo Finisterra" />
        EL RENACIMIENTO DE
        <br />ARGENTUM ONLINE
      </h1>
    </header>
    <section class="content container -mt-48">
      <h1 class="text-5xl">Noticias</h1>
      <div>
        <div v-for="post in posts" :key="post.id">
          <nuxt-link :to="`/noticias/${post.id}`" class="link">{{ post.title }}</nuxt-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
const slugifyModule = require("slugify");

export default {
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
body {
  color: white;
  background: url("../assets/body-bg.png");
  padding-bottom: 500px;
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
  box-shadow: 0 10px 125px black;
  @apply py-24 px-16;
}
</style>
