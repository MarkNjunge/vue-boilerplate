import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./index.css";
import localizationPlugin from "@/plugins/localization";

createApp(App)
  .use(store)
  .use(router)
  .use(localizationPlugin, {
    greetings: {
      hello: "Bonjour!"
    }
  })
  .mount("#app");
