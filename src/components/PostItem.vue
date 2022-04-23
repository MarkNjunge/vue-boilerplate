<template>
  <div class="p-4 bg-back-light rounded">
    <router-link :to="{name:'post', params: {id:post.id}}"
                 class="text-xl hover:text-brand-400">{{ post.title }}
    </router-link>
    <p class="text-secondary">{{ post.body }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PostItem",
  props: {
    post: Object,
  },
});
</script>
