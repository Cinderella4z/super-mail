<template>
  <div class="TabBar">
    <slot></slot>
  </div>
</template>

<script>


export default {
  name: 'TabBar'
}
</script>

<style scoped>
.TabBar {
  font-size: 12px;
  height: 49px;
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #f2f2f2;
  box-shadow: 2px 2px 10px #ececec;
}
</style>
