import { useBannerStore } from "@/store";

const bannerStore = useBannerStore();

export function errorHandler(error: Error) {
  console.log(error.message);
  bannerStore.error(error.message);
}
