<script setup lang="ts">
import { computed, ref } from "vue";
import { useStore } from "vuex";

const store = useStore();

const navs = ref([{ title: "HOME", to: { name: "home" } }]);

const isSignedIn = computed(() => store.getters["auth/isSignedIn"]);
</script>

<template>
  <div
    class="bg-back-light h-[48px] flex items-center shadow border-b border-back-lighter"
  >
    <nav class="flex container mx-auto justify-between">
      <div class="r">
      <router-link
        :to="nav.to"
        v-for="(nav, ix) in navs"
        :key="ix"
        class="text-lg mx-4 font-bold hover:text-brand-300"
        >{{ nav.title }}
      </router-link>
      </div>
      <router-link :to="{ name: 'login' }" v-if="!isSignedIn"
                   class="text-lg mx-4 font-bold hover:text-brand-300"
      >LOGIN</router-link>
      <p class="text-lg mx-4 font-bold" v-else>{{ $translate('greetings.hello') }}</p>
    </nav>
  </div>
  <div class="container mx-auto">
    <router-view />
  </div>
</template>
