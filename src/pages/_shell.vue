<template>
  <div class="bg-back-light h-[48px] flex items-center shadow border-b border-back-lighter">
    <nav class="flex container mx-auto justify-centers">
      <router-link :to="nav.to" v-for="(nav, ix) in navs" :key="ix"
                   class="text-lg mx-4 hover:text-brand-300">{{ nav.title }}
      </router-link>
    </nav>
  </div>
  <div class="container mx-auto">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "Shell",
  data() {
    const navs = [
      { title: "Home", to: { name: "home" } }
    ];

    if (!this.$store.getters["auth/isSignedIn"]) {
      navs.push({ title: "Login", to: { name: "login" } });
    }

    return { navs };
  }
};
</script>
