<template lang="pug">
  div
    header
      h1.title(v-if="$ua.deviceType() !== 'pc'",class="page_title_not_pc") マッチングアプリを実際に使ってのレビュー、本当に会えるの？
      h1.title(v-else="$ua.deviceType() === 'pc'") マッチングアプリを実際に使ってのレビュー、本当に会えるの？
      h2.subtitle(v-if="$ua.deviceType() !== 'pc'",class="page_subtitle_not_pc") ～実際に使ってみて会えるアプリ、会えないアプリを紹介します！～
      h2.subtitle(v-else="$ua.deviceType() !== 'pc'") ～実際に使ってみて会えるアプリ、会えないアプリを紹介します！～
      hr
    nuxt
</template>
<script>
import Vue from 'vue'
export default {
  methods: {
    something() {
      const deviceType = this.$ua.deviceType()
      this.deviceType = deviceType
    }
  },
  actions: {
    getDeviceType ({ commit }) {
      const deviceType = this.$ua.deviceType()
      commit('SET_DEVICE_TYPE', deviceType)
    }
  }
}
</script>