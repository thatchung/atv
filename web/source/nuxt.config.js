const path = require('path');

function resolve(dir) {
    return path.join(__dirname, '..', dir);
}
module.exports = {
  debug: true,
  telemetry: false,
  mode: 'universal',
  head: {
    title: 'web',
    htmlAttrs: {
      lang: 'vi'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      // { rel: 'stylesheet', href: '/css/style.css' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/static/css/style.css'
    // '~/static/css/responsive.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
      "~/plugins/global.js",
      {
          src: '~/plugins/global_nossr',
          ssr: false
      }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  router: {
    prefetchLinks: true
  },
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    ['@nuxtjs/router', { }],
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    ['nuxt-modernizr', {
      'feature-detects': ['css/scrollbars', 'css/overflow-scrolling'],
      options: ['setClasses'],
    }],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    filenames: {
        chunk: ({
            isDev
        }) => isDev ? '[name].js' : '[id].[chunkhash].js?v=4'
    },
    extend(config, { isDev, isClient } ) {
        // config.optimization.splitChunks.maxSize = 1000000;
        if (isDev && isClient) {
            // config.optimization.splitChunks.maxSize = 151200;
            
            config.module.rules.push(
            // {
            //     enforce: 'pre',
            //     test: /\.(vue)$/,
            //     loader: 'eslint-loader',
            //     exclude: /(node_modules)/,
            //     options: {
            //       eslintPath: path.join(__dirname, '.eslintrc.js')
            //     }
            // }, 
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
            })
        }
        
    }
  }
}
