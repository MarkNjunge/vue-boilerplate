<script setup lang="ts">
import PostItem from "@/components/PostItem.vue";
import Loader from "@/components/Loader.vue";
import { errorHandler } from "@/utils";
import { computed, ref } from "vue";
import { useStore } from "vuex";

const store = useStore();

const posts = computed(() => store.getters["posts/posts"]);

let loading = ref(false);

loading.value = true;
store.dispatch("posts/getPosts", {}).catch(errorHandler);
loading.value = false;
</script>

<template>
  <div id="home" class="mt-4 flex flex-col items-center">
    <h3 class="text-2xl">Posts</h3>
    <div class="flex flex-col w-[800px] mt-2 mb-4">
      <PostItem
        class="mb-4"
        v-for="(post, ix) in posts"
        :key="ix"
        :post="post"
      />
    </div>
    <div v-if="loading">
      <Loader />
    </div>
  </div>
</template>
