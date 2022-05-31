<template>
  <div id="home" class="mt-4 flex flex-col items-center">
    <h3 class="text-2xl">Posts</h3>
    <div class="flex flex-col w-[800px] mt-2 mb-4">
      <PostItem class="mb-4" v-for="(post, ix) in posts" :key="ix" :post="post"/>
    </div>
    <div v-if="loading">
      <Loader/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PostItem from "@/components/PostItem.vue";
import Loader from "@/components/Loader.vue";
import { errorHandler } from "@/utils";
import { mapGetters } from "vuex";

export default defineComponent({
  name: "Home",
  components: { Loader, PostItem },
  computed: {
    ...mapGetters({ posts: "posts/posts" })
  },
  data() {
    return {
      loading: false,
    };
  },
  async created() {
    this.loading = true;
    await this.$store.dispatch("posts/getPosts", {}).catch(errorHandler);
    this.loading = false;
  },
});
</script>
