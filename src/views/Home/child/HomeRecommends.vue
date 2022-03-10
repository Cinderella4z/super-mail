<template>
  <div class="HomeRecommends">
    <div v-for="item in recommends"
         class="HomeRecommends-item">
      <a :href="item.link">
        <img :src="item.image">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommends',
  props: {
    recommends: {
      type: Array,
      default () {
        return []
      }
    }

  },
  components: {

  }
}
</script>

<style scoped>
.HomeRecommends {
  display: flex;
  background-color: #fff;
  font-size: 12px;
  padding: 10px 0 20px;
  border-bottom: 10px solid #ededed;
}
.HomeRecommends-item {
  flex: 1;
  text-align: center;
}
.HomeRecommends img {
  width: 80px;
  height: 80px;
  margin-bottom: 10px;
}
a {
  text-decoration: none;
  color: black;
}
</style>

