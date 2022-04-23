<template>
  <div id="post" v-if="post" class="mt-8 flex flex-col items-center">
    <div class="bg-back-light p-4 w-[800px] rounded">
      <p class="text-2xl">{{post.title}}</p>
      <p class="mt-2 text-secondary">{{post.body}}</p>
    </div>
    <h3 class="text-lg mt-4">Comments</h3>
    <div class="mt-2 w-[700px]">
      <Comment class="mb-4" v-for="(comment, ix) in comments" :key="ix" :comment="comment" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Comment from "@/components/Comment.vue";

export default defineComponent({
  name: "Post",
  components: {Comment },
  data() {
    return {
      id: "",
      post: null,
      comments: []
    };
  },
  async created() {
    this.id = this.$route.params.id as string;
    const res = await this.$store.dispatch("posts/getPost", {id:this.id})
    this.post = res.post;
    this.comments = res.comments;
  },
});
</script>
