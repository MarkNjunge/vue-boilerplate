<script setup lang="ts">
import PostItem from "@/components/PostItem.vue";
import Loader from "@/components/Loader.vue";
import { errorHandler } from "@/utils";
import { computed, ref } from "vue";
import { useMouse } from "@/utils/mouse";
import { usePostsStore } from "@/store";

const postsStore = usePostsStore();

const mouse = useMouse();

const posts = computed(() => postsStore.posts);

let loading = ref(false);

loading.value = true;
postsStore.getPosts({})
  .then(() => {
    loading.value = false;
  })
  .catch(errorHandler);

</script>

<template>
  <div id="home" class="my-8 flex flex-col items-center">
    <div v-if="loading">
      <Loader/>
    </div>
    <Transition name="fade">
      <div class="flex flex-col items-center" v-if="posts.length">
        <h3 class="text-5xl font-bold">Posts</h3>
        <div class="flex flex-col w-[900px] mt-4 mb-4">
          <PostItem
              class="home-post"
              v-for="(post, ix) in posts"
              :key="ix"
              :post="post"
          />
        </div>
      </div>
    </Transition>
    <p class="text-tertiary">Mouse is at {{mouse.x}}, {{mouse.y}}</p>
  </div>
</template>


<style lang="scss">
.home-post {
  &:not(:last-of-type) {
    @apply border-b border-surface-border;
  }
}
</style>

