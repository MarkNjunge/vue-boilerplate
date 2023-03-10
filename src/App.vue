<script setup lang="ts">
import { useStore } from "vuex";
import Banner from "@/components/Banner.vue";
import Symbols from "@/components/Symbols.vue";
import { computed } from "vue";

const store = useStore();

// Banners
const banners = computed(() => store.getters["ui/banners"]);

function removeBanner(banner) {
  store.commit("ui/removeBanner", banner.id);
}
</script>

<template>
  <Symbols />
  <div id="banners" class="sticky top-[0] flex flex-col items-center z-[99]">
    <div class="absolute flex flex-col mt-4">
      <Banner
          class="mb-4"
        v-for="banner in banners"
        :key="banner.id"
        :banner="banner"
        v-on:removeBanner="removeBanner"
      />
    </div>
  </div>
  <router-view />
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
