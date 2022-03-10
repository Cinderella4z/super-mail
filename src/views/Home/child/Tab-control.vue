<template>
  <div id="Tab-control">
    <span v-for="(i,k) in titles"
          class="spans"
          :class="{active:k===current}"
          @click="dianji(i,k)">
      {{i}}
    </span>
  </div>
</template>

<script>
export default {
  name: 'Tab-control',
  data () {
    return {
      titles: ['流行', '新款', '精品'],
      current: 0
    }
  },
  components: {

  },
  methods: {
    dianji (i, k) {
      this.current = k
      switch (i) {
        case '流行':
          this.$emit('tab', 'pop')
          break;
        case '新款':
          this.$emit('tab', 'new')
          break;

        case '精品':
          this.$emit('tab', 'sell')
          break;
        default:
          this.$emit('tab', 'pop')
          break;
      }
    }
  }
}
</script>

<style scoped>
#Tab-control {
  display: flex;
  text-align: center;
  font-size: 15px;
  line-height: 44px;
  z-index: 9;
  position: relative;
  background-color: white;
}
.spans {
  display: inline-block;
  width: 100%;
  /* background-color: antiquewhite; */
}
.active {
  color: pink;
}
</style>
