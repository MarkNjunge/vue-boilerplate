<script setup lang="ts">
import type { Banner } from "@/types";
import { useBannerStore } from "@/store";

const bannerStore = useBannerStore();

const props = defineProps<{ banner:  Banner }>();

const bgClass = {
  "bg-green-400": props.banner.type === "info",
  "bg-[#F45B5B]": props.banner.type === "error",
};

const textClass = {
  "text-[#082B16]": props.banner.type === "info",
  "text-[#160303]": props.banner.type === "error",
};

function removeBanner() {
  bannerStore.removeBanner(props.banner.id as number);
}
</script>

<template>
  <div
    class="banner w-[500px] fade py-2 px-4 rounded flex justify-between items-center"
    :class="bgClass"
  >
    <p class="font-bold text-md" :class="textClass">{{ banner.message }}</p>
    <div class="">
      <svg
        class="cursor-pointer w-6 h-6"
        @click="removeBanner"
      >
        <use href="#close" />
      </svg>
    </div>
  </div>
</template>

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
