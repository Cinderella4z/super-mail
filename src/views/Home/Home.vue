<template>
  <div id="Home">
    <!-- 头部 -->
    <nav-bar>
      <div slot="center">购物街</div>
    </nav-bar>

    <Tabcontrol @tab="tab"
                class="tabcontrol1"
                v-show="isShow"
                ref="tabcontrol1"></Tabcontrol>

    <scroll class="scroll"
            :PullUpLoad="true"
            @scrolling="scrolling"
            @pullLoad="pullLoad"
            ref="scroll">
      <!-- 滚动条 -->
      <home-swiper :banners="banners" />
      <!-- 推荐 -->
      <home-recommends :recommends="recommends"></home-recommends>
      <!-- 切换栏 -->
      <Tabcontrol @tab="tab"
                  ref="tabcontrol2"></Tabcontrol>

      <!-- 商品栏 -->
      <keep-alive>
        <GoodsList :goods="currentGoods"></GoodsList>
      </keep-alive>

    </scroll>

    <backTop ref="backTop"
             @click.native="backTop"></backTop>

  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar'
import HomeSwiper from './child/HomeSwiper'
import HomeRecommends from './child/HomeRecommends'
import Tabcontrol from './child/Tab-control'
import GoodsList from '../../components/content/goodslist/GoodsList'
import scroll from '../../components/common/scroll/Scroll'
import backTop from '../../components/common/backTop/backTop'

import { getHomeMutidata, getHomeGoods } from '../../network/home'
// import { debounce } from '../../common/js/debounce'
export default {
  name: 'Home',
  data () {
    return {
      banners: [],
      recommends: [],
      tabname: 'pop',
      goods: {
        'pop': { list: [], page: 0 },
        'sell': { list: [], page: 0 },
        'new': { list: [], page: 0 }
      },
      isShow: false
    }
  },
  created () {
    this.getHomeMutidata();
    this.getHomeGoods('pop');
    this.getHomeGoods('sell');
    this.getHomeGoods('new');

    // 监听图片的加载
  },
  mounted () {
    this.$bus.$on('loadImg', () => {
      this.$refs.scroll && this.$refs.scroll.scroll.refresh()
    })



  },
  components: {
    NavBar, HomeSwiper, HomeRecommends, Tabcontrol, GoodsList, scroll, backTop,
  },
  methods: {
    // 事件监听
    tab (k, i) {
      this.tabname = k
      this.$refs.tabcontrol1.current = i
      this.$refs.tabcontrol2.current = i
    },
    pullLoad () {
      this.$refs.scroll.scroll.finishPullUp()
      this.getHomeGoods(this.tabname);
    },
    backTop () {
      this.$refs.scroll.scrollTo(0, 0, 500)
    },
    scrolling (p) {
      // console.log(p);
      if (p >= this.$refs.tabcontrol2.$el.offsetTop) {
        this.isShow = true
        this.$refs.backTop.$el.style.display = 'block'

      }
      else {
        this.isShow = false
        this.$refs.backTop.$el.style.display = 'none'
      }

    },
    // 网络封装
    getHomeMutidata () {
      getHomeMutidata().then(res => {
        this.recommends = res.data.data.recommend.list
        this.banners = res.data.data.banner.list
      })
    },
    getHomeGoods (type) {
      const page = this.goods[type].page + 1
      this.goods[type].page++
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.data.list)
      })
    },
  },
  computed: {
    currentGoods () {
      return this.goods[this.tabname].list
    }
  },
}
</script>

<style scoped>
#Home {
  position: relative;
  height: 100vh;
}
.scroll {
  overflow: hidden;
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 49px;
}
.tabcontrol1 {
  position: fixed;
  top: 44px;
  left: 0;
  right: 0;
}
</style>
