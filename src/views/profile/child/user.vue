<template>
  <div id="user">
    <div class="img">
      <img src="../../../assets/images/user/cxk.jpg">
    </div>
    <div class="text">
      用户名:{{id}}
      <div>状态:已登陆</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'user',
  data () {
    return {

    }
  },
  computed: {
    id () {
      return this.$store.state.id
    }
  }
}
</script>

<style scoped>
#user {
  height: 20%;
  width: 100%;
  /* background-color: aqua; */
  border-bottom: 10px solid #ededed;
  /* margin-top: 44px; */
  display: flex;
  align-items: center;
}
.img {
  height: 100px;
  width: 100px;
  display: inline-block;
}
.img img {
  width: 100%;
  height: 100%;
  border-radius: 30px;
}
.text {
  display: inline-block;
  height: 30%;
  vertical-align: top;
  margin: 5%;
  /* backgroun  d-color: yellow; */
  width: 60%;
}
</style>
