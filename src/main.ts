import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import "./index.css";
import localizationPlugin from "@/plugins/localization";

const pinia = createPinia();

createApp(App)
  .use(pinia)
  .use(router)
  .use(localizationPlugin, {
    greetings: {
      hello: "Bonjour!"
    }
  })
  .mount("#app");
