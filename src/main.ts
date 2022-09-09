import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/base.css";

const app = createApp(App, { class: "app" });

app.use(router);

app.mount("#app");
