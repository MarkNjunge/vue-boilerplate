<script setup lang="ts">
defineProps<{ post: any }>();
</script>

<template>
  <router-link :id="`post-${post.id}`" :to="{ name: 'post', params: { id: post.id } }"
               class="post px-4 py-6 rounded hover:bg-back-light">
    <div class="text-2xl">{{ post.title }}</div>
    <p class="mt-2 text-secondary">{{ post.body }}</p>
  </router-link>
</template>
