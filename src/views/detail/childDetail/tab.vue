<template>
  <div id="tab">
    <div class="tabname">{{data.itemInfo.title}}</div>
    <div class="price">{{data.itemInfo.price}}</div>
    <div class="info">
      <div class="info"
           v-for="item in data.columns">{{item}}</div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'tab',
  data () {
    return {

    }
  },
  props: {
    data: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  computed: {

  }

}
</script>

<style scoped>
#tab {
  margin: 0 5px;
  border-bottom: 1px solid gray;
}
.tabname {
  font-size: 18px;
  margin: 10px 0;
}
.price {
  color: palevioletred;
  font-size: 22px;
  font-weight: bolder;
}
.info {
  display: flex;
  margin: 10px 0;
  font-size: 14px;
  color: slategrey;
  justify-content: space-between;
}
</style>
