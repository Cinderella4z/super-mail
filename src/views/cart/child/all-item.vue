<template>
  <div id="all-item">
    <div v-for="item in goods">
      <item :good="item"></item>
    </div>
  </div>
</template>

<script>
import item from './item'

export default {
  name: 'all-item',
  data () {
    return {

    }
  },
  props: {
    goods: Array
  },
  components: {
    item
  }
}
</script>

<style scoped>
</style>
