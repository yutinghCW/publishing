export default {
  env: {
    books_host: process.env.BOOKS_HOST,
    books_api: process.env.BOOKS_API,
    proxy_api: process.env.PROXY_API,
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '我讀網 - 天下雜誌出版',
    htmlAttrs: {
      lang: 'zh-tw'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/images/favicon.ico' }
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'normalize.css/normalize.css',
    "swiper/swiper-bundle.css",
    "~/assets/sass/style",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "@/plugins/plugin.js", ssr: false },
    { src: "@/plugins/axios.js", mode: 'client' },
    { src: "@/plugins/jsonld.js", ssr: true },
    { src: '@/plugins/helper.js', ssr: true },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/device',
    'cookie-universal-nuxt',
    '@nuxtjs/moment',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true,
  },

  router: {
    base: '/',
    middleware: 'auth'
  },

  axios: {
    proxy: true,
    prefix: '/api',
    credentials: true,
  },

  publicRuntimeConfig: {
    axios: {
      baseURL: process.env.BOOKS_API
    }
  },

  proxy: {
    '/front/api': {
      target: process.env.BOOKS_API,
      changeOrigin: true, 
      pathRewrite: {
        '^/front/api': '',
      },
    }
  },

  ssr: true,
}
