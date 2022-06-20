import { useMeta } from "vue-meta";
export default (meta = {}) => {
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
};
