import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart: [],
    ifLogin: false,
    id: '',
  },
  mutations: {
    pushCart (state, playload) {
      state.cart.push(playload)
      playload.itemInfo.cartNum += 1
    },
    addNum (state, playload) {
      state.cart[playload].itemInfo.cartNum += 1
    },
    removeGood (state, playload) {
      state.cart.splice(playload, 1)
    },
    removeAllGoods (state) {
      state.cart = []
    },
    setLogin (state, playload) {
      state.ifLogin = playload
    },
    setId (state, playload) {
      state.id = playload
    },
  },
  actions: {
    addCart (context, playload) {
      let index = context.state.cart.findIndex(item => item.itemInfo.iid === playload.itemInfo.iid)

      let bool = index >= 0 ? true : false

      if (bool) {
        context.commit('addNum', index)
      }
      else {
        context.commit('pushCart', playload)
      }


    },

    deleteGood (context, playload) {
      if (context.state.cart.length !== 0) {
        context.state.cart.forEach((item, k) => {
          if (item.itemInfo.iid === playload) {
            context.commit('removeGood', k)
          }
        })
      }

    }

  },
  getters: {
    getAllprice (state) {
      return state.cart.map(item => {
        return item.itemInfo.cartNum * item.itemInfo.lowPrice
      })
    }
  }
})
