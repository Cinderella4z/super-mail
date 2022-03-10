<template>
  <div id="HomeSwiper">
    <swiper>
      <swiper-item v-for="i in banners">
        <a :href="i.link"><img :src="i.image">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from '../../../components/common/swiper/index'
export default {
  name: 'HomeSwiper',
  props: {
    banners: {
      type: Array,
      default () {
        return []
      }
    }
  },
  components: {
    Swiper, SwiperItem
  }
}
</script>

<style>
</style>
