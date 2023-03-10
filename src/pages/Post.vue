<script setup lang="ts">
import Comment from "@/components/Comment.vue";
import { ref, onMounted } from "vue";
import type { Ref } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import type { Post } from "@/types";

const store = useStore();
const route = useRoute();

const id = ref(route.params.id);
const post: Ref<Post | null> = ref(null);
const comments = ref([]);

onMounted(async () => {
  const res = await store.dispatch("posts/getPost", { id: id.value });
  post.value = res.post;
  comments.value = res.comments;
});
</script>

<template>
  <div id="post" v-if="post" class="mt-8 flex flex-col items-center">
    <div class="p-4 w-[900px] rounded">
      <p class="text-4xl">{{ post.title }}</p>
      <p class="mt-6 text-lg">{{ post.body }}</p>
    </div>
    <div class="my-4 h-[1px] w-[900px] bg-back-lighter"></div>
    <h3 class="text-xl font-bold">Comments</h3>
    <div class="mt-2 w-[800px]">
      <Comment
          class="post-comment"
          v-for="(comment, ix) in comments"
          :key="ix"
          :comment="comment"
      />
    </div>
  </div>
</template>

<style lang="scss">
.post-comment {
  &:not(:last-of-type) {
    @apply border-b border-back-light;
  }
}
</style>
