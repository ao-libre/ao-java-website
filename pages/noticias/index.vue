<template>
  <section>
    <div class="container">
      <div class="post bg-gray-800 p-10 my-4 text-white" v-for="post in posts" :key="post.id">
        <h2 class="text-primary text-3xl">{{ post.fields.title }}</h2>
        <time
          :title="$moment(post.fields.createdAt).format('D [de] MMMM [de] YYYY, h:mm:ss a')"
          :datetime="post.fields.createdAt"
          >{{ $moment(post.fields.createdAt).fromNow() }}</time
        >
        <div class="text-lg mt-6">
          <RichTextRenderer :document="post.fields.content" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import RichTextRenderer from "contentful-rich-text-vue-renderer";

export default {
  components: {
    RichTextRenderer
  },
  async asyncData({ app }) {
    const posts = await app.$db.getEntries({
      content_type: "post",
      order: "-sys.createdAt"
    });

    return {
      posts: posts.items
    };
  }
};
</script>

<style></style>
