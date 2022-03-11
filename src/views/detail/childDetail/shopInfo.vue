<template>
  <div id="shopInfo">

    <div class="logo">
      <img :src="shopInfo.shopLogo">
    </div>

    <div class="name"> {{shopInfo.name}}</div>

  </div>
</template>

<script>

export default {
  name: 'shopInfo',
  data () {
    return {

    }
  },
  components: {

  },
  props: {
    shopInfo: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  components: {

  }
}
</script>

<style scoped>
#shopInfo {
  margin: 20px 5px;
}
.logo {
  width: 50px;
  height: 50px;
  display: inline-block;
  border-radius: 30px;
  border: 1px solid gray;
}
.logo img {
  border-radius: 30px;
  width: 100%;
  height: 100%;
}
.name {
  display: inline-block;
  vertical-align: top;
  margin-left: 10px;
  color: grey;
  font-size: 15px;
  height: 50px;
  line-height: 50px;
}
</style>
