<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <template slot="item-icon">
        <img src="~@/assets/images/tabbar/icon01.png"
             alt="">
      </template>
      <template slot="item-icon-active">
        <img src="../../../assets/images/tabbar/icon01_active.png"
             alt="">
      </template>

      <template slot="item-text">
        <div>主页</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/sort">
      <template slot="item-icon">
        <img src="../../../assets/images/tabbar/icon02.png"
             alt="">
      </template>
      <template slot="item-icon-active">
        <img src="../../../assets/images/tabbar/icon02_active.png"
             alt="">
      </template>
      <template slot="item-text">
        <div>分类</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="cart">
      <template slot="item-icon">
        <img src="../../../assets/images/tabbar/icon03.png"
             alt="">
      </template>
      <template slot="item-icon-active">
        <img src="../../../assets/images/tabbar/icon03_active.png"
             alt="">
      </template>
      <template slot="item-text">
        <div>购物车</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/my">
      <template slot="item-icon">
        <img src="../../../assets/images/tabbar/icon04.png"
             alt="">
      </template>
      <template slot="item-icon-active">
        <img src="../../../assets/images/tabbar/icon04_active.png"
             alt="">
      </template>
      <template slot="item-text">
        <div>我的</div>
      </template>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from '../../common/tabbar/TabBar'
import TabBarItem from '../../common/tabbar/TabBarItem'

export default {
  name: 'MainTabBar',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style>
</style>
