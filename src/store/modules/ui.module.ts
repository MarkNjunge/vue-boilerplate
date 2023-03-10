import type { RootState } from "@/store/lib/state";
import type { Module } from "vuex";
import type { Banner } from "@/types/banner.type";

interface UiState {
  banners: Banner[];
}

export const uiModule: Module<UiState, RootState> = {
  namespaced: true,
  state: {
    banners: [],
  },
  getters: {
    banners: state => state.banners,
  },
  mutations: {
    addBanner: (state, { type, message, timeout }: Banner) => {
      const id = parseFloat(Math.random().toFixed(3)) * 1000;
      state.banners.push({
        id,
        type,
        message,
      });

      const t = timeout ?? 3000;
      if (t > 0) {
        setTimeout(() => {
          state.banners = state.banners.filter(b => b.id !== id);
        }, t);
      }
    },
    removeBanner(state, id) {
      const ix = state.banners.map(b => b.id).indexOf(id);
      if (ix != -1) {
        state.banners.splice(ix, 1);
      }
    },
  },
  actions: {},
};
