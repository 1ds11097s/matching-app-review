import pkg from './package'

const modifyHtml = (html) => {
  html = html.replace(/<div data-server-rendered="true" id="__nuxt">/g,
     `<amp-analytics type="googleanalytics" id="analytics1">
     <script type="application/json">
     {"vars": {"account": "UA-104918236-3"},
     "triggers": {"trackPageview" : {"on": "visible","request": "pageview"}}
      }</script></amp-analytics><div data-server-rendered="true" id="__nuxt">`)
  // Add amp-custom tag to added CSS
  html = html.replace(/<\/style><style data-vue-ssr-id="aab9a468:0">/g, ``)
  html = html.replace(/<\/style><style data-vue-ssr-id="17cfdfa9:0">/g, ``)
  html = html.replace(/<style data-vue-ssr/g, '<style amp-custom data-vue-ssr')
  html = html.replace(/<\/style><style amp-custom data-vue-ssr-id="406f0688:0">@charset "UTF-8";/g, '')
  html = html.replace(/<style amp-custom data-vue-ssr-id="b15e4592:0">@charset "UTF-8";/g, '<style amp-custom data-vue-ssr-id="b15e4592:0">')
  html = html.replace(/@charset "UTF-8";/g, '')
  // Remove every script tag from generated HTML
  html = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
  html = html.replace(/<html/gi, '<html ⚡')
  html = html.replace(/<img([^>]*)>/gi, (match, sub) => {
    return `<amp-img ${sub} layout=intrinsic></amp-img>`
  })
  const ampBoilerplate = '<style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style><noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>'
  // Add AMP script before </head>
  const ampYoutube = '<script async custom-element="amp-youtube" src="https://cdn.ampproject.org/v0/amp-youtube-0.1.js"></script>'
  const ampScript = '<script async src="https://cdn.ampproject.org/v0.js"></script>'
  const ampSocial = '<script async custom-element="amp-social-share" src="https://cdn.ampproject.org/v0/amp-social-share-0.1.js"></script>'
  const ampAnalytics = '<script async custom-element="amp-analytics" src="https://cdn.ampproject.org/v0/amp-analytics-0.1.js"></script>'
  html = html.replace('</head>', ampAnalytics + ampScript + ampBoilerplate + ampSocial + ampYoutube + '</head>')
  return html
}

export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'google-site-verification', content:'3x2pyGudFz4PTex6t_oE6E1qmiunf0bsbcrgH-5TuFs'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/main.scss',
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/vue-lazyload.js', ssr: false }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    [
      'nuxt-user-agent',
    ],
    ['@nuxtjs/sitemap']
  ],
  

  hooks: {
    'generate:page': (page) => {
      page.html = modifyHtml(page.html)
    },
    // This hook is called before rendering the html to the browser
    'render:route': (url, page, { req, res }) => {
      page.html = modifyHtml(page.html)
    }
  },

  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://matching-app-review.xyz/',
    generate: true,
    exclude: [
      '/admin'
    ],
    routes: [
    ]
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
