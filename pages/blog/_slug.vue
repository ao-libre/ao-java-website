<template>
  <article class="container">
    <p class="text-5xl font-bold text-orange-600 mb-8">{{ post.title }}</p>
    <p>{{ post.body }}</p>
  </article>
</template>

<script>
export default {
  async asyncData({ params, $axios }) {
    try {
      const post = await $axios.$get(
        `https://jsonplaceholder.typicode.com/posts/${params.slug}`
      )

      return {
        post
      }
    } catch (e) {
      console.log(e)
    }
  }
}
</script>

<style>
</style>
