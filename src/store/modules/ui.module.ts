import { RootState } from "@/store/lib/state";
import { Module } from "vuex";
import { Banner } from "@/types/banner.type";

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
      const id = Math.floor(parseInt(Math.random().toFixed(4)) * 10000);
      (state.banners).push({
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
