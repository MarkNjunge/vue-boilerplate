import store from "@/store";

export function errorHandler(error: Error) {
  console.log(error.message);
  store.commit("ui/addBanner", {
    type: "error",
    message: error.message,
    timeout: 0,
  });
}
