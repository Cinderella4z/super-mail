<template>
  <div id="Detail-Info">
    <div v-for="item in detailInfo.detailImage[0].list"
         class="imgs">
      <img :src="item"
           @load="loadImg">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Detail-Info',
  data () {
    return {

    }
  },
  props: {
    detailInfo: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  components: {

  },
  methods: {
    loadImg () {
      this.$bus.$emit('DetailloadImg')
    }
  },
}
</script>

<style scoped>
.imgs img {
  width: 100%;
}
</style>
