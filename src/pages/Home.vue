<template>
  <div id="home" class="mt-4 flex flex-col items-center">
    <h3 class="text-2xl">Posts</h3>
    <div class="flex flex-col w-[800px] mt-2 mb-4">
      <PostItem class="mb-4" v-for="(post, ix) in posts" :key="ix" :post="post" />
    </div>
    <div v-if="loading">
      <Loader />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PostItem from "@/components/PostItem.vue";
import Loader from "@/components/Loader.vue";

export default defineComponent({
  name: "Home",
  components: { Loader, PostItem },
  data() {
    return {
      loading: false,
      posts: [],
    };
  },
  async created() {
    this.loading = true;
    this.posts = await this.$store.dispatch("posts/getPosts", {});
    this.loading = false;
  },
});
</script>
