<template>
  <div id="App">

    <keep-alive include="Profile">
      <router-view></router-view>
    </keep-alive>

    <MainTabBar></MainTabBar>
  </div>
</template>

<script>
import Home from './views/Home/Home'
import MainTabBar from './components/content/mainTabBar/MainTabBar'

export default {
  name: 'App',
  data () {
    return {

    }
  },
  components: {
    MainTabBar
  },
  methods: {

  }
}
</script>

<style>
html,
body {
  /* overflow: hidden; */
  /* overflow-y: auto; */
  margin: 0;
  padding: 0;
}
</style>
