<template>
  <div class="GoodsList">
    <div v-for="item in goods"
         class="sb">
      <goods-list-item :goods="item"></goods-list-item>
    </div>
  </div>
</template>

<script>
import GoodsListItem from './goods-item'

export default {
  name: 'GoodsList',
  data () {
    return {

    }
  },
  props: {
    goods: {
      type: Array,
      default: []
    },
  },
  components: {
    GoodsListItem

  },


}
</script>

<style>
.GoodsList {
  display: flex;
  flex-wrap: wrap;
}
.sb {
  width: 49%;
}
</style>
