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
          <RichTextRenderer :document="post.fields.content" :nodeRenderers="renderNodes" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { BLOCKS } from "@contentful/rich-text-types";
import RichTextRenderer from "contentful-rich-text-vue-renderer";

export default {
  components: {
    RichTextRenderer
  },
  data() {
    return {
      renderNodes: null
    }
  },
  async asyncData({ app }) {
    const posts = await app.$db.getEntries({
      content_type: "post",
      order: "-sys.createdAt"
    });

    return {
      posts: posts.items
    };
  },
  created() {    
    this.renderNodes = {
      [BLOCKS.EMBEDDED_ASSET]: (node, key, h, next) => {
        // console.log(node);
        return h('img', { key: key, attrs: { src: node.data.target.fields.file.url }  }, next(node.content, key, h, next));
      }
    };
  }
};
</script>

<style></style>
