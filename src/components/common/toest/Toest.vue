<template>
  <div class="Toest"
       v-if="isShow">
    {{text}}
  </div>
</template>

<script>
export default {
  name: 'Toest',
  data () {
    return {
      text: '',
      isShow: false
    }
  },
  methods: {
    show (text, time) {
      this.text = text
      this.isShow = true
      setTimeout(() => {
        this.isShow = false
      }, time);
    }
  },

}
</script>

<style scoped>
.Toest {
  width: 50%;
  height: 6%;
  background-color: black;
  background: rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  justify-content: center;
  display: flex;
  align-items: center;
  color: white;
  border-radius: 30px;
}
</style>
