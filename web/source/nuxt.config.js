const path = require('path');
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
function resolve(dir) {
    return path.join(__dirname, '..', dir);
}
const axios = require('axios');
const messages = __importDefault(require("./lang/index.js"));

const host = 'http://localhost:3000'
// const hostapi = 'http://localhost:1337'

// const host = 'http://avt.com.vn'
const hostapi = 'http://124.158.15.86:1337'

const getSitemapsConfigurations = () => {
    let list = [{
            path: '/sitemap-work.xml',
            routes: async () => {
                let list = [];
                let res = await axios.get(`http://124.158.15.86:1337/works`)
                if (res && res.data) {
                    res.data.map(row => {
                        if (row.url && row.url !== '') {
                            list.push({
                                url: `/${row.url}`,
                                changefreq: 'daily',
                                lastmod: new Date(),
                                lastmodrealtime: true,
                                priority: 0.8
                            });
                        }
                        return true;
                    });
                }
                return list;
            }
        },
        {
            path: '/sitemap-innovation.xml',
            routes: async () => {
                let list = [];
                let res = await axios.get(`http://124.158.15.86:1337/innovations`)
                if (res && res.data) {
                    res.data.map(row => {
                        if (row.url && row.url !== '') {
                            list.push({
                                url: `/${row.url}`,
                                changefreq: 'daily',
                                lastmod: new Date(),
                                lastmodrealtime: true,
                                priority: 0.8
                            });
                        }
                        return true;
                    });
                }
                return list;
            }
        },
        {
            path: '/sitemap-static.xml',
            routes: [{
                    url: '/',
                    changefreq: 'daily',
                    lastmod: new Date(),
                    lastmodrealtime: true,
                    priority: 1
                },
                {
                    url: '/work',
                    changefreq: 'daily',
                    lastmod: new Date(),
                    lastmodrealtime: true,
                    priority: 0.9
                },
                {
                    url: '/innovation',
                    changefreq: 'daily',
                    lastmod: new Date(),
                    lastmodrealtime: true,
                    priority: 0.9
                },
                {
                    url: '/about',
                    changefreq: 'monthly',
                    priority: 0.5
                },
                {
                    url: '/contact',
                    changefreq: 'monthly',
                    priority: 0.5
                }
            ]
        }
    ];

    return list;
}

module.exports = {
  debug: true,
  telemetry: false,
  mode: 'universal',
  head: {
    title: 'AVT International - Studio thiết kế nội thất',
    htmlAttrs: {
      lang: 'vi'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'AVT International cung cấp các dịch vụ thiết kế và thi công trên nhiều lĩnh vực đa dạng: trung tâm mua sắm, chuỗi F&B, văn phòng cao cấp, trung tâm hội nghị, nhà hàng, khách sạn, trung tâm giải trí, trường học, căn hộ,… ' },
      { hid: 'og:image', name: 'og:image', content: '/uploads/Screenshot_2022_04_18_225013_9fed9e013b.jpg?5314681.600000024' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'preload',
        as: 'video',
        type: 'video/mp4',
        href: '/images/atv.mp4'
      },
      {
        rel: 'preload',
        as: 'video',
        type: 'video/mp4',
        href: '/images/video_atv_cut.mp4'
      }
      // { rel: 'stylesheet', href: '/css/style.css' }
    ],
    // script: [{
    //             innerHTML: `window.dataLayer = window.dataLayer || [];
    //             function gtag(){dataLayer.push(arguments);}
    //             gtag('js', new Date());

    //             gtag('config', 'G-0C0WWFWPDS');`
    //         }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/static/css/style.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
      "~/plugins/global.js",
      "~/plugins/axios-port.js",
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
    'nuxt-gsap-module',
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module',
  ],
  sitemap: {
    defaults: {
        changefreq: 'daily',
        priority: 1,
        lastmod: new Date(),
        lastmodrealtime: true
    },
    path: '/sitemapindex.xml',
    hostname: 'https://avt.com.vn',
    gzip: true,
    sitemaps: [
        ...getSitemapsConfigurations()
    ]
  },
  gsap: {
    extraPlugins: {
      scrollTo: true,
      scrollTrigger: true
    }
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/i18n',
    '@nuxtjs/axios',
    '@nuxtjs/sitemap',
    '@nuxtjs/proxy',
    '@nuxtjs/gtm',
    '@nuxtjs/google-gtag',
    ['nuxt-modernizr', {
      'feature-detects': ['css/scrollbars', 'css/overflow-scrolling'],
      options: ['setClasses'],
    }],
  ],
  gtm: {
    id: 'GTM-5TC2N222',
    enabled: true,
    layer: 'dataLayer',
    variables: {},
    pageTracking: false,
    pageViewEventName: 'nuxtRoute',
    autoInit: true,
    respectDoNotTrack: true,
    scriptId: 'gtm-script',
    scriptDefer: false,
    scriptURL: 'https://www.googletagmanager.com/gtm.js',
    crossOrigin: false,
    noscript: true,
    noscriptId: 'gtm-noscript',
    noscriptURL: 'https://www.googletagmanager.com/ns.html?id=GTM-5TC2N222'
  },
  'google-gtag': {
    id: 'G-0C0WWFWPDS',
    config: {
      anonymize_ip: true, // anonymize IP 
      send_page_view: false, // might be necessary to avoid duplicated page track on page reload
      linker: {
        domains: ['avt.com.vn']
      }
    },
    debug: true, // enable to track in dev mode
    disableAutoPageTrack: false, // disable if you don't want to track each page route with router.afterEach(...).
    additionalAccounts: [{
      id: 'G-0C0WWFWPDS', // required if you are adding additional accounts
      config: {
        send_page_view: false // optional configurations
      }
    }]
  },
  i18n: {
    locales: ['en', 'vn'],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: messages.default
      // detectBrowserLanguage: {
      //   useCookie: true,
      //   cookieKey: 'i18n_redirected',
      //   alwaysRedirect: false,
      //   fallbackLocale: 'en'
      // }
    }
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: host,
    proxy: true
  },
  proxy: {
    '/api' : { target: hostapi, pathRewrite: { '^/api' : '' } },
    '/admin/login' : { target: hostapi },
    '/admin' : { target: hostapi, pathRewrite: { '^/admin' : '/admin' } },
    '/content-manager' : { target: hostapi },
    '/content-type-builder' : { target: hostapi },
    '/upload/files' : { target: hostapi },
    '/uploads' : { target: hostapi },
    '/upload' : { target: hostapi },
    '/i18n' : { target: hostapi }
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
                test: /\.js$|jsx/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                },
                include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
            })
        }
        
    }
  }
}
