import { createApp } from "vue";
import baiduAnalytics from "vue-baidu-analytics";
import App from "@/App.vue";
import router from "@/router";
import {
  createMetaManager,
  plugin as metaPlugin,
} from "vue-meta/dist/vue-meta.esm-browser";
// 全局样式
// import "@less/global.less";

createApp(App)
  .use(router)
  .use(createMetaManager())
  .use(metaPlugin)
  .use(baiduAnalytics, {
    router,
    siteIdList: ["8dca8e2532df48ea7f1b15c714588691"],
  })
  .mount("#app");
