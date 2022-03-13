<template>
  <div id="item">

    <div class="imgs"><img :src="good.itemInfo.topImages[0]"
           @load="Load"></div>
    <div class="title">{{good.itemInfo.title}}</div>
    <div class="price">￥{{good.itemInfo.lowPrice}}</div>
    <div class="num">x{{good.itemInfo.cartNum}}</div>
    <div @click="deleteGood"
         class="deleteGood">删除</div>

  </div>
</template>

<script>
export default {
  name: 'item',
  data () {
    return {

    }
  },
  props: {
    good: Object,
  },
  methods: {
    deleteGood () {
      this.$store.dispatch('deleteGood', this.good.itemInfo.iid)
    },
    Load () {
      this.$bus.$emit('cartLoad')
    }
  },
  components: {

  },
  computed: {

  }
}
</script>

<style scoped>
#item {
  height: 30%;
  width: 100%;
  /* background-color: aqua; */
  border-bottom: 1px solid pink;
  margin-bottom: 10px;
  position: relative;
}
.imgs {
  width: 30%;
  display: inline-block;
  vertical-align: middle;
}
.imgs img {
  width: 100%;
  height: 100%;
}
.title {
  width: 70%;
  display: inline-block;
}
.price {
  position: absolute;
  color: orange;
  bottom: 10%;
  left: 30%;
}
.num {
  position: absolute;
  right: 10px;
  bottom: 50px;
}
.deleteGood {
  position: absolute;
  right: 10px;
  bottom: 10%;

  color: palevioletred;
}
</style>
