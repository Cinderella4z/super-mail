<template>
  <div id="zuce">
    <div class="box">
      <div>
        <input type="text"
               ref="text">
      </div>
      <div>
        <input type="password"
               ref="password">
      </div>
      <div class="q"
           @click="login">登录</div>
      <div class="q"
           @click="zuce">注册</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'zuce',
  data () {
    return {
    }
  },
  methods: {
    zuce () {
      let text = this.$refs.text.value
      let password = this.$refs.password.value

      if (text === '' || password === '') {
        this.$toest.show('账号或密码为空', 2000)
      }
      else {
        for (let i in localStorage) {
          if (i == text) {
            this.$toest.show('账号已存在', 2000)
            return
          }
          localStorage.setItem(text, JSON.stringify({ password: password, goods: [] }))
          this.$toest.show('注册成功', 2000)
        }
      }
      console.log(localStorage);
    },
    login () {
      let text = this.$refs.text.value
      let password = this.$refs.password.value

      for (let i in localStorage) {
        if (i === text) {
          if (JSON.parse(localStorage[i]).password === password) {
            this.$toest.show('登录成功', 2000)
            this.$store.commit('setLogin', true)
            this.$store.commit('setId', text)
            this.$bus.$emit('Getgoods', JSON.parse(localStorage[i]).goods)
            return
          }
          else {
            this.$toest.show('密码错误', 2000)
          }
        }
        else {
          this.$toest.show('账号不存在', 2000)
        }
      }

      console.log(localStorage);

    }
  }
}
</script>

<style scoped>
#zuce {
  width: 90%;
  height: 30%;
  /* background-color: aqua; */
  border: 1px solid pink;
  position: absolute;
  top: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  left: 50%;
  transform: translate(-50%, 0);
}
.q {
  width: 50%;
  height: 50%;
  background-color: pink;
  margin: 10px auto;
  border-radius: 10px;
  color: white;
}
</style>
