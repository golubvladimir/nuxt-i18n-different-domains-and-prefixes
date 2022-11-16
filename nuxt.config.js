import { langs, defaultLang } from "./helpers/langs";

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head

  head: {
    title: 'nuxt-i18n-different-domains-and-prefixes',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/router'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/i18n',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  i18n: {
    locales: langs.map(lang => ({
      code: lang,
      file: `${ lang }.js`
    })),
    lazy: true,
    langDir: 'lang/',
    defaultLocale: defaultLang,
    strategy: 'no_prefix',
    vuex: {
      syncLocale: true
    }
  },

  router: {
    middleware: 'setlang'
  },

  routerModule: {
    keepDefaultRouter: true,
    parsePages: true
  },
}
