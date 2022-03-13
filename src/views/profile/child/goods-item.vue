<template>
  <div class="goods-list-item">
    <div>
      <img :src="goods.itemInfo.topImages[0]"
           @load="loadImg"
           class="goods-list-img">
    </div>
    <div>
      <p class="title">{{goods.itemInfo.title}}</p>
      <span class="goods-list-price ">{{'￥'+goods.itemInfo.lowPrice}}</span>
    </div>
  </div>

</template>

<script>
export default {
  name: 'goods-list-item',
  data () {
    return {

    }
  },
  props: {
    goods: Object,
  },
  methods: {
    loadImg () {
      this.$bus.$emit('UserloadImg')
    }
  }
}
</script>
<style  scoped>
.title {
  margin: 5px 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.goods-list-item {
  /* margin-left: 0px; */
  font-size: 15px;
  margin-left: 8px;
}
.goods-list-price {
  display: flex;
  color: pink;
  font-size: 18px;
  font-weight: bolder;
  margin: 6px 0;
}
.goods-list-img {
  width: 100%;
}
</style>

