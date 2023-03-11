import store from "@/store";

export function errorHandler(error: Error) {
  console.log(error.message);
  errorBanner(error.message);
}

export function infoBanner(message: string, timeout: number = 3000) {
  store.commit("ui/addBanner", {
    type: "info",
    message,
    timeout,
  });
}

export function errorBanner(message: string, timeout: number = 3000) {
  store.commit("ui/addBanner", {
    type: "info",
    message,
    timeout,
  });
}
