module.exports = function () {
    this.nuxt.hook('generate:routeCreated', async generator => {
      console.log('pageのファイル作成が終わったよ')
    })
  }