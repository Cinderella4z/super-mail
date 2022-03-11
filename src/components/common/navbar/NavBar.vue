<template>
  <div class="NavBar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data () {
    return {

    }
  },
  components: {

  }
}
</script>

<style>
.NavBar {
  height: 44px;
  line-height: 44px;
  text-align: center;
  display: flex;
  /* opacity: 0.5; */
  /* align-items: center; */
  width: 100%;
  position: fixed;
  z-index: 9;
  top: 0;
  background-color: pink;
  color: white;
}
.right,
.left {
  width: 60px;
  /* background-color: aquamarine; */
}
.center {
  flex: 1;
}
</style>
