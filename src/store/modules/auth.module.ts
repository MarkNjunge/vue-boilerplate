import { RootState } from "@/store/lib/state";
import { ActionContext, Module } from "vuex";

interface AuthState {
  isSignedIn: boolean;
}

export const authModule: Module<AuthState, RootState> = {
  namespaced: true,
  state: {
    isSignedIn: false
  },
  getters: {
    isSignedIn: state => state.isSignedIn
  },
  mutations: {
    setSignedIn: ((state, payload) => {
      state.isSignedIn = payload;
    })
  },
  actions: {
    async signIn(context: ActionContext<AuthState, RootState>): Promise<boolean> {
      context.commit("setSignedIn", true);
      return true;
    },
    async signOut(context: ActionContext<AuthState, RootState>): Promise<boolean> {
      context.commit("setSignedIn", false);
      return false;
    },
  },
};
