import pkg from './package'

export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'YYCやwith、omial、Pairs、ハッピーメールなどのマッチングアプリを実際に使ってみた体験談を元に会えるアプリ、会えないアプリを紹介します！' },
      { name: 'google-site-verification', content:'3x2pyGudFz4PTex6t_oE6E1qmiunf0bsbcrgH-5TuFs'},
      { name: 'keywords', content: 'マッチングアプリ,YYC,with,Omiai,Pairs'},
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
