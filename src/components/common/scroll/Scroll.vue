<template>
  <div class="wrapper"
       ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll, { PullUpLoad } from 'better-scroll'

export default {
  name: 'Scroll',
  data () {
    return {
      scroll: null
    }
  },
  props: {
    PullUpLoad: {
      type: Boolean,
      default: null
    }
  },
  mounted () {

    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: 3,
      pullUpLoad: this.PullUpLoad
    })
    this.PullUpLoad && this.scroll.on('pullingUp', () => {
      this.$emit('pullLoad')
    })
    // 判断是否滑动到 某个地方 然后显示backtop
    this.scroll.on('scroll', (p) => {
      this.$emit('scrolling', -p.y)
    })
  },
  methods: {
    scrollTo (x, y, time) {
      this.scroll.scrollTo(x, y, time)
    }
  }
}
</script>

<style scoped>
</style>
