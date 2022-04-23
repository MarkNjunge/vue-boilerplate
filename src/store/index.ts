import { createStore } from "vuex";
import { postsModule } from "./modules/posts.module";
import { authModule } from "@/store/modules/auth.module";
import { uiModule } from "@/store/modules/ui.module";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    auth: authModule,
    posts: postsModule,
    ui: uiModule,
  },
});
