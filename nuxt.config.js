import pkg from './package'

const modifyHtml = (html) => {
  // Add amp-custom tag to added CSS
  html = html.replace(/<style data-vue-ssr/g, '<style amp-custom data-vue-ssr')
  // Remove every script tag from generated HTML
  html = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
  // Add AMP script before </head>
  const ampScript = '<script async src="https://cdn.ampproject.org/v0.js"></script>'
  const ampSocial = '<script async custom-element="amp-social-share" src="https://cdn.ampproject.org/v0/amp-social-share-0.1.js"></script>'
  html = html.replace('</head>', ampScript + ampSocial + '</head>')
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
      '@nuxtjs/google-gtag',
      {
        id: 'UA-104918236-3', //あなたのGoogleアナリティクスのプロパティID
        debug: true //本番環境以外でもGAを有効にしたい場合はtrueに。
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
