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
    <div class="bg-back-light p-4 w-[800px] rounded">
      <p class="text-2xl">{{ post.title }}</p>
      <p class="mt-2 text-secondary">{{ post.body }}</p>
    </div>
    <h3 class="text-lg mt-4">Comments</h3>
    <div class="mt-2 w-[700px]">
      <Comment
        class="mb-4"
        v-for="(comment, ix) in comments"
        :key="ix"
        :comment="comment"
      />
    </div>
  </div>
</template>
