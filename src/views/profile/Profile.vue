<template>
  <div id="Profile">
    <navbar>
      <div slot="left"
           class="left"
           @click="back"><img src="../../assets/images/back1.png"></div>
    </navbar>

    <scroll class="scroll"
            ref="scroll">
      <zuce v-if="!ifLogin"></zuce>
      <user v-else></user>
      <tabcontrol></tabcontrol>
      <goodsList :goods="goods"></goodsList>

    </scroll>

  </div>
</template>

<script>
import navbar from '../../components/common/navbar/NavBar'
import user from './child/user'
import zuce from './child/zuce'
import goodsList from './child/goods'
import scroll from '../../components/common/scroll/Scroll'
import tabcontrol from './child/tab-control'
export default {
  name: 'Profile',
  data () {
    return {
      goods: []
    }
  },
  components: {
    navbar, user, zuce, goodsList, scroll, tabcontrol
  },


  computed: {
    ifLogin () {
      return this.$store.state.ifLogin
    },
  },
  methods: {
    back () {
      this.$router.back()
    }
  },
  mounted () {
    this.$bus.$on('Getgoods', (goods) => {
      this.goods = goods
    })
  },
  activated () {

    let id = this.$store.state.id
    if (id) {
      let goods = JSON.parse(localStorage.getItem(this.$store.state.id)).goods
      this.goods = goods ? goods : []
    }
    this.$bus.$on('UserloadImg', () => {
      this.$refs.scroll.scroll.refresh()
    })

  }
}
</script>

<style scoped>
#Profile {
  height: 100vh;
  width: 100%;
  position: relative;
}
.scroll {
  overflow: hidden;
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 49px;
}
</style>
