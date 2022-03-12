<template>
  <div id="tab-bar">
    <div class="k"><img src="../../../assets/images/detail/客服 (1).png">
    </div>
    <div class="k"><img src="../../../assets/images/detail/店铺 (1).png"></div>
    <div class="k"><img src="../../../assets/images/detail/收藏.png"></div>
    <div class="cart"
         @click="cart">加入购物车</div>
    <div class="buy"
         @click="buy">立即购买</div>
  </div>
</template>

<script>
export default {
  name: 'tab-bar',
  data () {
    return {

    }
  },
  props: {
    good: Object,
    default () {
      return {}
    }
  },
  components: {

  },
  methods: {
    cart () {
      this.$store.dispatch('addCart', this.good)
      this.$toest.show('加入购物车成功', 2000)
    },
    buy () {
      this.$toest.show('购买成功', 2000)

    }

  }
}
</script>

<style scoped>
#tab-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 49px;
  z-index: 9;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  text-align: center;
  line-height: 49px;
}
.buy {
  width: 30%;
  height: 100%;
  background-color: pink;
  flex: 1;
}
.cart {
  width: 30%;
  height: 100%;
  background-color: yellow;
  flex: 1;
}
.k {
  width: 10%;
}
</style>
