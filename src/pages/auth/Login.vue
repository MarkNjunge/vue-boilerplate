<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/store";

const router = useRouter();
const authStore = useAuthStore();

const username = ref("");
const password = ref("");

async function signIn() {
  authStore.signIn();
  await router.push({ name: "home" });
}
</script>

<template>
  <div id="login" class="mt-8 flex flex-col items-center">
    <h3 class="text-5xl font-bold">Login</h3>
    <div class="form w-[500px] mt-8 p-4 border border-back-light rounded">
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
    <router-link :to="{ name: 'home' }" class="mt-8 flex items-center hover:text-brand-400">
      <svg class="w-4 h-4">
        <use href="#back" />
      </svg>
      <p class="ml-2">Home</p>
    </router-link>
  </div>
</template>
