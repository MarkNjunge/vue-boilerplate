import type { RootState } from "@/store/lib/state";
import type { ActionContext, Module } from "vuex";

interface AuthState {
  isSignedIn: boolean;
}

export const authModule: Module<AuthState, RootState> = {
  namespaced: true,
  state: {
    isSignedIn: false,
  },
  getters: {
    isSignedIn: state => state.isSignedIn,
  },
  mutations: {
    setSignedIn: (state, payload) => {
      state.isSignedIn = payload;
    },
  },
  actions: {
    signIn(context: ActionContext<AuthState, RootState>): boolean {
      context.commit("setSignedIn", true);
      return true;
    },
    signOut(context: ActionContext<AuthState, RootState>): boolean {
      context.commit("setSignedIn", false);
      return false;
    },
  },
};
