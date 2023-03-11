<script setup lang="ts">
import Banner from "@/components/Banner.vue";
import Symbols from "@/components/Symbols.vue";
import { useBannerStore } from "@/store";
import { storeToRefs } from "pinia";

// Banners
const bannerStore = useBannerStore();
const { banners } = storeToRefs(bannerStore);

</script>

<template>
  <Symbols/>
  <div id="banners" class="sticky top-[0] flex flex-col items-center z-[99]">
    <div class="absolute flex flex-col mt-4">
      <Banner
          class="mb-4"
          v-for="banner in banners"
          :key="banner.id"
          :banner="banner"
      />
    </div>
  </div>
  <router-view/>
</template>

<style lang="scss">
@import "assets/scss/main";

html {
  @apply bg-back text-primary;
}

#app {
  font-family: "ClarityCity", Avenir, Helvetica, Arial, sans-serif;
}
</style>
