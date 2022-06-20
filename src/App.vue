<template>
  <metainfo>
    <template v-slot:title="{ content }">{{
      content ? `${content} | 1111人力銀行` : `111`
    }}</template>
  </metainfo>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />
</template>
<script>
import setMeta from "@/utils/setMeta";
export default {
  name: "App",
  setup() {
    setMeta({
      title: `title活動`,
      description:
        "快速驗證1111會員身分，取得專屬會員卡，即可參與會員專屬活動，享受尊榮禮遇身分",
      keywords: "keywords",
      url: "https://event.1111.com.tw/event22/22yAdmissionSystem/",
      image:
        "https://event.1111.com.tw/event22/22yAdmissionSystem/assets/img/Banner.jpg",
    });

    return {};
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
