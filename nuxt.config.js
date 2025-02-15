export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Battery Remaining Useful Life",
    htmlAttrs: {
      lang: "en",
      "data-wf-domain": "https://battery-rul.netlify.app",
      "data-wf-page": "Battery Remaining Useful Life",
      "data-wf-site": "Battery Remaining Useful Life",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
      {
        name: "description",
        content:
          "One of the best online battery prediction model on battery remaining useful life.",
      },
      {
        property: "og:description",
        content:
          "One of the best online battery prediction model on battery remaining useful life.",
      },
      {
        property: "og:image",
        content: "https://battery-rul.netlify.app/logo.png",
      },
      {
        property: "twitter:title",
        content: "Forecasting Lithium-Ion Battery RUL",
      },
      {
        property: "twitter:image",
        content: "https://battery-rul.netlify.app/logo.png",
      },
      {
        property: "twitter:description",
        content:
          "One of the best online battery prediction model on battery remaining useful life.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "apple-mobile-web-app-capable", content: "yes" },
      { name: "apple-mobile-web-app-status-bar-style", content: "default" },
      { name: "apple-mobile-web-app-title", content: "Battery RUL" },
    ],

    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "apple-touch-icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "stylesheet", type: "text/css", href: "/css/main.css" },
      { href: "https://fonts.googleapis.com", rel: "preconnect" },
      {
        href: "https://fonts.gstatic.com",
        rel: "preconnect",
        crossorigin: "anonymous",
      },
    ],

    script: [
      {
        src: "https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js",
        type: "text/javascript",
      },
      { src: "/scripts/touch.js", type: "text/javascript" },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/fontLoader.js", mode: "client" },
    { src: "~/plugins/install.client.js", mode: "client" },
  ],

  router: {
    base: "/",
  },

  auth: {
    strategies: {
      local: {
        // scheme: 'refresh'
        token: {
          property: "token",
          global: true,
          required: true,
          type: "Bearer",
        },
        user: {
          property: "user",
          autoFetch: true,
        },

        endpoints: {
          login: { url: "/users/login", method: "post" },
          logout: false,
          user: { url: "/users/get-user", method: "get" },
        },
      },
    },
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/pwa"],

  generate: {
    routes: [
      // Add the confirmation route to the generated routes
    ],
  },

  pwa: {
    registerType: "autoUpdate", // Automatically update the service worker
    manifest: {
      name: "Forecasting Lithium-Ion Battery RUL",
      short_name: "Battery RUL",
      description:
        "One of the best online battery prediction model on battery remaining useful life.",
      theme_color: "#382973",
      icons: [
        {
          src: "/pwa-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "/pwa-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
    },
    workbox: {
      globPatterns: ["**/*.{js,css,html,png,svg,jpg,jpeg,json}"], // Customize caching patterns
      runtimeCaching: [
        {
          urlPattern: /^https:\/\/myapi\.com\/.*$/,
          handler: "NetworkFirst",
          options: {
            cacheName: "api-cache",
            expiration: {
              maxEntries: 10,
              maxAgeSeconds: 86400, // cache for 24 hours
            },
          },
        },
      ],
    },
  },

  axios: {
    baseURL: "https://americanwealthvault.com/america/api",
  },

  publicRuntimeConfig: {
    FILE_URL: "https://americanwealthvault.com/america/api/uploads",
  },

  // axios: {
  //   baseURL: "http://127.0.0.1:8000/",
  //   responseType: "json",
  // },

  // publicRuntimeConfig: {
  //   FILE_URL: "http://127.0.0.1:8000/api/uploads",
  // },

  //Build Configuration: https://go.nuxtjs.dev/config-build
  target: "static",
};
