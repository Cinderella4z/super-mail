import Vue from 'vue'
import Toest from './Toest.vue'

export function toest () {

  // 为啥不可以用Toest???   打印出不是一个组件 而是一个对象？

  // 导入的Toest 其实是导入一个不含有template的对象


  const toestConstructor = Vue.extend(Toest)
  const toest = new toestConstructor()

  toest.$mount(document.createElement('div'))

  document.body.appendChild(toest.$el)


  // console.log(Toest);
  // console.log(toest);

  Vue.prototype.$toest = toest
}