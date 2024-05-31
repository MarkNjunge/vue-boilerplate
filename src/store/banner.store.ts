import type { Banner, BannerType } from "@/types/banner.type";
import { defineStore } from "pinia";
import type { Ref } from "vue";
import { ref } from "vue";

export const useBannerStore = defineStore("banner", () => {
  const banners: Ref<Banner[]> = ref([]);

  function info(message: string, timeout: number = 3000) {
    addBanner("info", message, timeout);
  }

  function error(message: string, timeout: number = 3000) {
    addBanner("error", message, timeout);
  }

  function addBanner(type: BannerType, message: string, timeout: number = 3000) {
    const id = parseFloat(Math.random().toFixed(3)) * 1000;
    banners.value.push({
      id,
      type,
      message,
    });

    if (timeout > 0) {
      setTimeout(() => {
        banners.value = banners.value.filter(b => b.id !== id);
      }, timeout);
    }

  }

  function removeBanner(id: number) {
    const ix = banners.value.map(b => b.id).indexOf(id);
    if (ix != -1) {
      banners.value.splice(ix, 1);
    }
  }

  return { info, error, banners, addBanner, removeBanner };
});
