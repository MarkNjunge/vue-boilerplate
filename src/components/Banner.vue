<template>
  <div class="banner w-[500px] fade py-2 px-4 my-2 rounded flex justify-between items-center"
       :class="{'bg-green-400': banner.type === 'info', 'bg-red-400': banner.type === 'error'}">
    <p class="font-bold text-md text-gray-900">{{ banner.message }}</p>
    <div class="">
      <svg class="cursor-pointer w-6 h-6" @click="$emit('removeBanner', banner)">
        <use href="#close"/>
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Banner",
  props: {
    banner: {
      type: Object
    },
  },
});
</script>

<style>
.banner {
  animation: fadeInFromNone 0.2s ease-out;
}

@keyframes fadeInFromNone {
  0% {
    display: none;
    opacity: 0;
  }

  1% {
    display: block;
    opacity: 0;
  }

  100% {
    display: block;
    opacity: 1;
  }
}
</style>
