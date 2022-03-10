<template>
  <div id="backTop">
    <img src="../../../assets/images/home/back-top.png">
  </div>
</template>

<script>
export default {
  name: 'backTop',
  data () {
    return {

    }
  },
  components: {

  }
}
</script>

<style scoped>
#backTop {
  position: absolute;
  display: none;
  bottom: 60px;
  right: 0px;
  width: 50px;
  height: 50px;
  /* background-color: aqua; */
}
#backTop img {
  width: 100%;
  height: 100%;
}
</style>
