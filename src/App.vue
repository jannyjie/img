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
import { useMeta, useActiveMeta } from "vue-meta/dist/vue-meta.esm-browser";
import { reactive } from "vue";
import setMeta from "@/utils/setMeta";
export default {
  name: "App",
  setup() {
    setMeta({
      title: "ENJOY DEV",
      description: "프론트엔드 개발 블로그",
      keywords: "blog, frontend, vue3, vueCLI4",
    });
    const meta = reactive({
      title: "title活動",
      description:
        "快速驗證1111會員身分，取得專屬會員卡，即可參與會員專屬活動，享受尊榮禮遇身分",
      keywords: "keywords",
      url: "https://event.1111.com.tw/event22/22yAdmissionSystem/",
      image:
        "https://event.1111.com.tw/event22/22yAdmissionSystem/assets/img/Banner.jpg",
    });

    useMeta({
      title: "Bla",
      meta: [
        {
          name: "title",
          content: meta.title,
        },
        {
          name: "Description",
          content: meta.description,
        },
        {
          name: "keywords",
          content: meta.keywords,
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:locale",
          content: "zh_TW",
        },
        {
          property: "og:title",
          content: meta.title,
        },
        {
          property: "og:url",
          content: meta.url,
        },
        {
          property: "og:image",
          content: meta.image,
        },
        {
          property: "og:description",
          content: meta.description,
        },
        {
          name: "google",
          content: "notranslate",
        },
        {
          name: "robots",
          content: "max-image-preview:large, max-video-preview:-1",
        },
        {
          "http-equiv": "Content-Language",
          content: "zh-Hant",
        },
      ],
      htmlAttrs: {
        lang: "zh-Hant-TW",
        class: "first-class",
      },
      twitter: {
        title: meta.title,
        description: meta.description,
        keywords: meta.keywords,
        "image:src": meta.image,
      },
      script: [
        {
          src: "application/ld+json",
          json: [
            {
              "@context": "http://schema.org/",
              "@type": "WebSite",
              name: meta.title,
              url: meta.url,
              description: meta.description,
              potentialAction: {
                "@type": "SearchAction",
                target:
                  "https://event.1111.com.tw/event22/22yAdmissionSystem/result?years=111&typeRef=1&schoolType=1&seachType=2&ticketNum={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            },
            {
              "@context": "http://schema.org",
              "@type": "Organization",
              name: "1111人力銀行",
              url: "https://www.1111.com.tw",
              logo: "https://www.1111.com.tw/images102/logo0504.png",
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+886-02-8787-1111",
                  contactType: "customer service",
                  areaServed: ["TW"],
                  availableLanguage: ["Chinese"],
                },
              ],
              sameAs: [
                "https://www.facebook.com/1111jobbank",
                "https://twitter.com/1111jobbanknews",
                "https://www.youtube.com/user/1111JobBankNEWS",
                "https://www.linkedin.com/company/1111-job-bank",
              ],
            },
          ],
        },
      ],
    });

    const metainfo = useActiveMeta();

    return {
      metainfo,
    };
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
