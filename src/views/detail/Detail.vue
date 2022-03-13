<template>
  <div id="Detail">
    <navbar>
      <div slot="left"
           class="left"
           @click="back">
        <img src="../../assets/images/back1.png">
      </div>
    </navbar>

    <scroll class="scroll"
            @showBackTop="showBackTop"
            ref="scroll">
      <DetailSwiper :img="data.itemInfo.topImages"></DetailSwiper>

      <tab :data="data"></tab>

      <shopInfo :shopInfo="data.shopInfo"></shopInfo>

      <detail-info :detailInfo="data.detailInfo"></detail-info>
    </scroll>

    <backTop ref="backTop"
             @click.native="backTop"></backTop>
    <tabbar :good="data"></tabbar>

  </div>
</template>

<script>
import navbar from '../../components/common/navbar/NavBar'
import DetailSwiper from './childDetail/DetailSwiper'
import tab from './childDetail/tab'
import shopInfo from './childDetail/shopInfo'
import DetailInfo from './childDetail/Detail-Info.vue'
import backTop from '../../components/common/backTop/backTop'
import tabbar from './childDetail/tab-bar'

import Scroll from '../../components/common/scroll/Scroll'

export default {
  name: 'Detail',
  data () {
    return {
      data: [],
    }
  },
  components: {
    DetailSwiper, navbar, tab, shopInfo, DetailInfo, Scroll, backTop, tabbar,

  },
  created () {
    this.data = this.$route.query.data

  },
  mounted () {
    this.$bus.$on('DetailloadImg', () => {

      this.$refs.scroll && this.$refs.scroll.scroll.refresh()

    })
  },
  methods: {
    back () {
      this.$router.back();
    },
    showBackTop (bool) {
      let boolen = bool == true ? 'block' : 'none'
      this.$refs.backTop.$el.style.display = boolen
    },
    backTop () {
      this.$refs.scroll.scrollTo(0, 0, 500)
    }
  }
}
</script>

<style scoped>
.left {
  display: flex;
  align-items: center;
}
.scroll {
  overflow: hidden;
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 49px;
}
</style>
