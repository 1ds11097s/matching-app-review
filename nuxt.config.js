import pkg from './package'

const modifyHtml = (html) => {
  // Add amp-custom tag to added CSS
  html = html.replace(/<\/style><style data-vue-ssr-id="aab9a468:0">/g, ``)
  html = html.replace(/<\/style><style data-vue-ssr-id="17cfdfa9:0">/g, ``)
  html = html.replace(/<style data-vue-ssr/g, '<style amp-custom data-vue-ssr')
  html = html.replace(/<\/style><style amp-custom data-vue-ssr-id="406f0688:0">@charset "UTF-8";/g, '')
  html = html.replace(/<style amp-custom data-vue-ssr-id="b15e4592:0">@charset "UTF-8";/g, '<style amp-custom data-vue-ssr-id="b15e4592:0">')
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
  html = html.replace('</head>', ampScript + ampBoilerplate + ampSocial + ampYoutube + '</head>')
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
      '@nuxtjs/sitemap',
      '@/modules/hook/generate',
      '@nuxtjs/google-gtag',
      {
        id: 'UA-104918236-3', //あなたのGoogleアナリティクスのプロパティID
        debug: false //本番環境以外でもGAを有効にしたい場合はtrueに。
      }
    ]
  ],

  hooks: {
    // This hook is called before rendering the html to the browser
    'render:route': (url, page) => {
      page.html = modifyHtml(page.html)
    }
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
