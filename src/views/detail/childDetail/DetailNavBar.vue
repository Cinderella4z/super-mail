<template>

  <navbar class="DetailNavBar">
    <div slot="center"
         class="center">
      <div v-for="(k,i) in title"
           class="title"
           @click="titleClick(i)"
           :class="{red:currentIndex===i}">
        {{k}}
      </div>
    </div>
    <div slot="left"
         class="left"
         @click="imgback">
      <img src="~@/assets/images/fanhui.png">
    </div>
  </navbar>

</template>

<script>
import navbar from '../../../components/common/navbar/NavBar'
export default {
  name: 'DetailNavBar',
  data () {
    return {
      currentIndex: 0,
    }
  },
  props: {
    title: Array,
  },
  methods: {
    titleClick (index) {
      this.currentIndex = index;
    },
    imgback () {
      this.$router.back();
    }
  },
  components: {
    navbar
  }
}
</script>

<style>
.center {
  display: flex;
  font-size: 14px;
  text-align: center;
}
.title {
  flex: 1;
}
.red {
  color: pink;
}
.left img {
  width: 40px;
  height: 40px;
  margin-top: 6px;
}
</style>
