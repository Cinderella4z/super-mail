<template>
  <div id="Cart">
    <navbar>
      <div slot="left"
           class="left"
           @click="back"> <img src="../../assets/images/left.png">
      </div>

      <template slot="center">购物车 ({{nums}})</template>
    </navbar>

    <scroll class="scroll">
      <allitem :goods="goods"></allitem>
    </scroll>

    <div class="tabbar">
      <div class="all">总计：{{allPrice}}</div>
      <div class="pay"
           @click="pay">立即结算</div>
    </div>
  </div>
</template>

<script>
import navbar from '../../components/common/navbar/NavBar'
import allitem from './child/all-item'
import scroll from '../../components/common/scroll/Scroll'
export default {
  name: 'Cart',
  data () {
    return {

    }
  },
  methods: {
    back () {
      this.$router.back()
    },
    pay () {
      if (this.$store.state.cart.length === 0) {
        this.$toest.show('还未添加商品', 2000)
      }
      else {
        this.$toest.show('购买成功', 2000)
        this.$store.commit('removeAllGoods')
      }

    }
  },
  components: {
    navbar, allitem, scroll
  },
  computed: {
    goods () {
      return this.$store.state.cart
    },
    nums () {
      return this.$store.state.cart.length
    },
    allPrice () {
      return this.$store.state.cart.length && this.$store.getters.getAllprice.reduce((a, b) => a + b).toFixed(2)
    }

  }
}
</script>

<style>
#Cart {
  height: 100vh;
}
.left {
  display: flex;
  align-items: center;
}
.scroll {
  overflow: hidden;
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 99px;
}
.tabbar {
  width: 100%;
  height: 50px;
  /* background-color: aqua; */
  position: fixed;
  bottom: 49px;
  display: flex;
  background-color: white;
}
.pay {
  width: 40%;
  line-height: 50px;
  text-align: center;
  background-color: pink;
  color: white;
}
.all {
  width: 60%;
  line-height: 50px;
  text-align: center;
}
</style>
