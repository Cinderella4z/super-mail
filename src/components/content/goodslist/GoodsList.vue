<template>
  <div class="GoodsList">
    <div v-for="item in goods"
         class="sb">
      <goods-list-item :goods="item"
                       @click.native="showGoods(item)"></goods-list-item>
    </div>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem.vue'

import { getDetail } from '../../../network/detali'
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
  methods: {
    showGoods (item) {
      getDetail(item.iid).then(res => {
        this.$router.push({
          path: 'detail',
          query: {
            data: res.data.result
          }
        })
      })
    }
  }
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
