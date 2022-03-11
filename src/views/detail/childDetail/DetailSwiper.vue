<template>
  <div id="DetailSwiper">
    <swiper>
      <swiper-item v-for="item in img"
                   :key="item">
        <div class="topImg"><img :src="item"></div>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from '../../../components/common/swiper/index'

export default {
  name: 'DetailSwiper',
  data () {
    return {

    }
  },
  props: {
    img: {
      type: Array,
      default () {
        return []
      }
    }
  },
  components: {
    SwiperItem, Swiper
  }
}
</script>

<style scoped>
.topImg {
  height: 450px;
}
</style>
