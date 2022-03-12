import Vue from 'vue'
import Toest from './Toest.vue'

// const obj = {}

// obj.install = function () {

//   console.log(1);


// }



export function toest () {

  // 为啥不可以用Toest???   打印出不是一个组件 而是一个对象？

  // 导入的Toest 其实是导入一个不含有template的对象

  // 而使用了extend 就是返回一个包含组件选项的实例
  const toestConstructor = Vue.extend(Toest)
  const toest = new toestConstructor()

  toest.$mount(document.createElement('div'))

  document.body.appendChild(toest.$el)


  console.log(Toest);
  console.log(toest);

  Vue.prototype.$toest = toest
}