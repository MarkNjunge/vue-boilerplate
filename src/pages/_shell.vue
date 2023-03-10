<script setup lang="ts">
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore();

const navs = ref([{ title: "Home", to: { name: "home" } }]);

if (!store.getters["auth/isSignedIn"]) {
  navs.value.push({ title: "Login", to: { name: "login" } });
}
</script>

<template>
  <div
    class="bg-back-light h-[48px] flex items-center shadow border-b border-back-lighter"
  >
    <nav class="flex container mx-auto justify-centers">
      <router-link
        :to="nav.to"
        v-for="(nav, ix) in navs"
        :key="ix"
        class="text-lg mx-4 hover:text-brand-300"
        >{{ nav.title }}
      </router-link>
    </nav>
  </div>
  <div class="container mx-auto">
    <router-view />
  </div>
</template>
