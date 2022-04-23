<template>
  <Symbols/>
  <div id="banners" class="sticky top-[0] flex flex-col items-center z-[99]">
    <div class="absolute flex flex-col">
      <Banner v-for="(banner, ix) in banners" :key="ix" :banner="banner" v-on:removeBanner="removeBanner"/>
    </div>
  </div>
  <router-view/>
</template>
<script>
import { mapGetters } from "vuex";
import Banner from "@/components/Banner";
import Symbols from "@/components/Symbols";

export default {
  components: {
    Banner,
    Symbols,
  },
  computed: {
    ...mapGetters({
      banners: "ui/banners",
    }),
  },
  methods: {
    removeBanner(banner) {
      this.$store.commit("ui/removeBanner", banner.id);
    },
  },
};
</script>
<style lang="scss">
@import "assets/scss/main";

html {
  @apply bg-back text-primary;
}

#app {
  font-family: "ClarityCity", Avenir, Helvetica, Arial, sans-serif;
}
</style>
