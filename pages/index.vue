<template>
  <section class="container">
    <div class="text-5xl text-orange-600 font-bold">Posts</div>
    <div>
      <div v-for="post in posts" :key="post.id">
        <nuxt-link :to="`/blog/${post.id}`" class="link">{{ post.title }}</nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
const slugifyModule = require('slugify')

export default {
  async asyncData({ $axios }) {
    try {
      const posts = await $axios.$get(
        'https://jsonplaceholder.typicode.com/posts'
      )

      return {
        posts
      }
    } catch (e) {
      console.log(e)
    }
  },
  methods: {
    slugify(text) {
      return slugifyModule(text)
    }
  }
}
</script>
