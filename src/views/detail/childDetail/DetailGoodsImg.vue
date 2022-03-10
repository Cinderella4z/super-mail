<template>
  <div id="DetailGoodsImg">
    <div class="show">商品展示图</div>
    <div v-for="i in imgs">
      <img :src="i">
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailGoodsImg',
  data () {
    return {

    }
  },
  props: {
    imgs: Array
  },
  components: {

  }
}
</script>

<style>
#DetailGoodsImg img {
  width: 100%;
}
#DetailGoodsImg {
  margin-top: 100px;
}
.show {
  text-align: center;
  font-weight: bold;
  margin-bottom: 20px;
}
</style>
