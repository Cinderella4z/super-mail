<template>

  <swiper class="detail-swiper">
    <swiper-item v-for=" i in topImg"
                 class="swiper-item">
      <img :src="i">
    </swiper-item>
  </swiper>

</template>

<script>
import { Swiper, SwiperItem } from '@/components/common/swiper/index'
export default {
  name: 'DetailSwiper',
  data () {
    return {

    }
  },
  props: {
    topImg: Array,
    default () {
      return []
    }
  },
  components: {
    Swiper, SwiperItem,
  }
}
</script>

<style>
.swiper-item {
  height: 300px;
}
.swiper-item img {
  height: 100%;
}
</style>
