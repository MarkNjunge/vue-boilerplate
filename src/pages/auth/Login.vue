<script setup lang="ts">
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const store = useStore();
const router = useRouter();

const username = ref("");
const password = ref("");

async function signIn() {
  await store.dispatch("auth/signIn", true);
  await router.push({ name: "home" });
}
</script>

<template>
  <div id="login" class="flex flex-col items-center">
    <h3 class="text-3xl mt-8">Login</h3>
    <div class="form w-[400px] mt-8 p-4 border border-back-light rounded">
      <div class="form-group">
        <label for="username" class="form-label">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          class="form-input"
          v-model="username"
          required
        />
      </div>
      <div class="form-group mt-4">
        <label for="password" class="form-label">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          class="form-input"
          v-model="password"
          required
        />
      </div>
      <button @click="signIn" class="button mt-8 w-full">Sign In</button>
    </div>
    <router-link :to="{ name: 'home' }" class="mt-8 hover:text-brand-400"
      >Back Home</router-link
    >
  </div>
</template>
