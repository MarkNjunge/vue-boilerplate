import { Store } from "vuex";
import { Store as AppStore } from "@/store";

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $store: Store<typeof AppStore>;
  }
}
