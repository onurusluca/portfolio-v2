export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)

  // Target (https://go.nuxtjs.dev/config-target)

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "Onur Usluca - Web Developer / Designer",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Onur Usluca - Portfolio"
      },
      {
        name: "keywords",
        content:
          "onurusluca, onur usluca, uslucaonur, usluca, onur usluca onur, portföy, portfolio, uslucaonur.me, onurusluca.me"
      }
      /*     { hid: "robots", name: "robots", content: "index, follow" },
      { hid: "revisit-after", name: "revisit-after", content: "2 days" } */
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png"
      },
      { rel: "manifest", href: "/site.webmanifest" }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ["./assets/styles/variables.scss"],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [{ src: "~plugins/ga.js", mode: "client" }],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: ["@nuxtjs/style-resources"],
  styleResources: {
    scss: ["./assets/styles/variables.scss"]
  },
  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    "nuxt-webfontloader",
    [
      "nuxt-i18n",
      {
        vueI18nLoader: true
      }
    ],
    // Crawler
    "@nuxtjs/robots"
  ],
  robots: {
    /* module options */
    UserAgent: "*",
    CrawlDelay: 120
  },
  i18n: {
    locales: [
      { code: "en", name: "English", iso: "en-US" },
      { code: "ja", name: "日本語", iso: "ja-JP" },
      { code: "tr", name: "Türkçe", iso: "tr-TR" }
    ],
    defaultLocale: "en",
    detectBrowserLanguage: [
      {
        alwaysRedirect: false,
        fallbackLocale: "en",
        onlyOnRoot: false,
        useCookie: true,
        cookieCrossOrigin: false,
        cookieDomain: null,
        cookieKey: "uslucaonur_portfolio_i18n_redirected",
        cookieSecure: false
      }
    ],
    vuex: [
      {
        moduleName: "i18n",
        syncLocale: true,
        syncMessages: false,
        syncRouteParams: true
      }
    ],
    vueI18n: {
      fallbackLocale: "en"
    }
  },

  webfontloader: {
    google: {
      families: ["Poppins:300", "Spartan:800"]
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {}
};
