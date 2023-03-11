<script setup lang="ts">
import PostItem from "@/components/PostItem.vue";
import Loader from "@/components/Loader.vue";
import { errorHandler } from "@/utils";
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { useMouse } from "@/utils/mouse";

const store = useStore();

const mouse = useMouse();

const posts = computed(() => store.getters["posts/posts"]);

let loading = ref(false);

loading.value = true;
store.dispatch("posts/getPosts", {})
  .then(() => {
    loading.value = false;
  })
  .catch(errorHandler);
</script>

<template>
  <div id="home" class="my-8 flex flex-col items-center">
    <h3 class="text-5xl font-bold">Posts</h3>
    <div class="flex flex-col w-[900px] mt-4 mb-4">
      <PostItem
          class="home-post"
          v-for="(post, ix) in posts"
          :key="ix"
          :post="post"
      />
    </div>
    <div v-if="loading">
      <Loader />
    </div>
    <p class="text-tertiary">Mouse is at {{mouse.x}} - {{mouse.y}}</p>
  </div>
</template>


<style lang="scss">
.home-post {
  &:not(:last-of-type) {
    @apply border-b border-back-light;
  }
}
</style>

