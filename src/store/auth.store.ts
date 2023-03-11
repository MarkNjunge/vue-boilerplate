import { defineStore } from "pinia";
import type { Ref } from "vue";
import { ref } from "vue";

export const useAuthStore = defineStore("auth", () => {
  const isSignedIn: Ref<boolean> = ref(false);

  function signIn() {
    isSignedIn.value = true;
  }

  function signOut() {
    isSignedIn.value = false;
  }

  return { isSignedIn, signIn, signOut };
});
