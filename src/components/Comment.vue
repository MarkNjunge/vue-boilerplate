<template>
  <div class="bg-back-light p-4">
    <p class="">{{ comment.body }}</p>
    <p class="text-sm mt-2 text-secondary">{{ comment.email }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Comment",
  props: {
    comment: Object,
  },
});
</script>
