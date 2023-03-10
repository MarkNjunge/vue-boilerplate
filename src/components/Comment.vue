<script setup lang="ts">
import type { Comment } from "@/types";

defineProps<{ comment: Comment }>();
</script>

<template>
  <div class="p-4">
    <p class="">{{ comment.body }}</p>
    <p class="text-sm mt-2 text-secondary">{{ comment.email }}</p>
  </div>
</template>
